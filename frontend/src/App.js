import React from 'react';
import Result from './components/Result.js';
import StaticAlert from './components/StaticAlert.js';
import { Rings } from 'svg-loaders-react';
import './App.css';

const soda = require('soda-js');
const consumer = new soda.Consumer('data.nasa.gov');
const DATASET = 'gh4g-9sfh';

const prepareApiQuery = (text) => {
  const fields = ['id', 'name', 'nametype', 'recclass', 'fall'];
  const limit = 15;
  let params = '';
  fields.forEach((field) => {
    params += field+" like '%"+text+"%' or ";
  });
  params = params.substring(0, params.length - 4);
  
  return params;
}

class App extends React.Component {
  
    constructor(props){
      super(props);

      this.state = {
        keywords:'',
        loading: false,
        error: false,
        list:[]
      };

      this.handleClick = this.handleClick.bind(this);
      this.handleSearch = this.handleSearch.bind(this);

    }

    handleClick(){
      console.log('clicked');

    }
    handleSearch(e){
      this.setState({
        keywords: e.target.value,
        loading: true
      });

      if(e.target.value.trim().length == 0){
        this.setState({
          keywords: '',
          loading: false,
          error: false,
          list: []
        });
        return;
      }

      consumer.query()
        .withDataset(DATASET)
        .limit(5)
        .where(prepareApiQuery(e.target.value.trim()))
        .order('id')
        .getRows()
          .on('success', (rows) => { 
            this.setState({
              list: rows,
              loading: false,
              error: false,
            });
          })
          .on('error', (error) => {
            console.error(error);
            this.setState({
              error: true,
              loading: false
            });
          });
    }

  componentDidMount(){
  }
  render(){
      return (

        <div className='w-full min-h-screen bg-gray-800 pt-4'>
          <div className='w-1/3 text-center mx-auto pt-4'>
            <input value={this.state.keywords} onChange={this.handleSearch} className='border rounded mx-2 py-1 px-2' type='text' />
            <button className='bg-blue-500 text-white py-1 px-2 rounded'
            onClick={this.handleClick}>Search</button>
          </div>
          { 
            this.state.loading ? 
             <div className="flex justify-center py-4">
              <Rings className="block my-4 mx-auto" />
             </div>
            :
            this.state.error ? <StaticAlert text="Something went wrong..."/> : 
            (this.state.list.length === 0 && this.state.keywords.length>0) ?
              <StaticAlert text="No results found" /> :
              <Result list={this.state.list}/>
          }
        </div>
    );
  }
}

export default App;
