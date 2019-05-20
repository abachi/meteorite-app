import React from 'react';
import Result from './components/Result.js';
import StaticAlert from './components/StaticAlert.js';
import SearchPanel from './components/SearchPanel.js';
import prepareApiQuery from './components/prepareApiQuery.js';
import { Rings } from 'svg-loaders-react';
import './App.css';

const soda = require('soda-js');
const consumer = new soda.Consumer('data.nasa.gov');
const DATASET = 'gh4g-9sfh';
const LIMIT = 15;

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
      
      if(this.state.keywords.length == 0){
        this.setState({
          keywords: '',
          loading: false,
          error: false,
          list: []
        });
        return;
      }

      this.setState({
        loading: true,
        error: false
      });

      consumer.query()
        .withDataset(DATASET)
        .limit(LIMIT)
        .where(prepareApiQuery(this.state.keywords.trim()))
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
            this.setState({
              error: true,
              loading: false
            });
          });
    }

    handleSearch(e){
        this.setState({
          keywords: e.target.value
        });
    }

  componentDidMount(){
    this.setState({
      loading: true
    });
      consumer.query()
        .withDataset(DATASET)
        .limit(LIMIT)
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
            this.setState({
              error: true,
              loading: false
            });
          });
  }

  render(){
      return (
        <div className='w-full min-h-screen bg-gray-800 py-4'>
          <SearchPanel keywords={this.state.keywords} handleSearch={this.handleSearch} handleClick={this.handleClick} />
          { 
            this.state.loading ? 
             <div className="flex justify-center py-4">
              <Rings className="block my-4 mx-auto" />
             </div>
            :
            this.state.error ? <StaticAlert text="Something went wrong, Please try again."/> : 
              this.state.list.length === 0 ?
                <StaticAlert text="No results found" /> :
                  <Result list={this.state.list}/>
          }
        </div>
    );
  }
}

export default App;
