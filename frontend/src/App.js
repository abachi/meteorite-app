import React from 'react';
import Result from './components/Result.js';
import './App.css';

const prepareApiQuery = (text) => {
  const fields = ['id', 'name', 'nametype', 'recclass', 'fall'];
  const limit = 15;
  let params = '';
  fields.forEach((field) => {
    params += field+" like '%25"+text+"%25' or ";
  });
  params = params.substring(0, params.length - 4);
  let query = 'https://data.nasa.gov/api/id/gh4g-9sfh.json?$where=' + params +
              '&$limit='+limit;
      return query;
}

class App extends React.Component {
  
    constructor(props){
      super(props);

      this.state = {
        keywords:'',
        list:[]
      };

      this.handleClick = this.handleClick.bind(this);
      this.handleSearch = this.handleSearch.bind(this);

    }

    handleClick(){
      console.log('clicked');

    }
    handleSearch(e){
      const query = prepareApiQuery(e.target.value);
      this.setState({
        keywords: e.target.value
      });
      fetch(query).then((res) => {
          return res.json();
      }).then((json) => {
        this.setState({
          list: json
        })
      });
    }
  componentDidMount(){
  }
  render(){
      return (
        <div className='w-full min-h-screen bg-gray-800 pt-4'>
          <div className='w-1/3 mx-auto pt-4'>
            <input value={this.state.keywords} onChange={this.handleSearch} className='border rounded mx-2 py-1 px-2' type='text' />
            <button className='bg-blue-500 text-white py-1 px-2 rounded'
            onClick={this.handleClick}>Search</button>
          </div>
          <Result list={this.state.list}/>  
        </div>
    );
  }
}

export default App;
