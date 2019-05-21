import React from 'react';
import Meteorite from './Meteorite.js';
import Pagination from './Pagination.js';


class Result extends React.Component {

  constructor(props){
    super(props);
    var items = [...props.list];
    this.state = {
        list: items,
        pageOfItems: items.slice(0, 10)
    };
    this.onChangePage = this.onChangePage.bind(this);
  }
  onChangePage(pageOfItems) {
        this.setState({ pageOfItems: pageOfItems });
    }
  renderMeteorite(data, index){
    return <Meteorite key={index} data={data} />;
  }
  render(){
    return(
      <div className='w-3/4 mx-auto mt-4 bg-white'>
        <table className="w-full">
          <tbody>
          <tr className='bg-yellow-500 text-left'>
            <th className='p-3'>ID</th>
            <th className='p-3'>Name</th>
            <th className='p-3'>Type</th>
            <th className='p-3'>Class</th>
            <th className='p-3'>Mass</th>
            <th className='p-3'>Fall</th>
            <th className='p-3'>Year</th>
            <th className='p-3'>Latitude</th>
            <th className='p-3'>Longitude</th>
          </tr>
            {
              this.state.pageOfItems.map((e,i) => {
                return this.renderMeteorite(e, i)
              })
            }
          </tbody>
        </table>
        <div className="w-3/4 mx-auto text-center mt-8">
          <Pagination className="w-full bg-yellow-500 p-3 block" items={this.state.list} onChangePage={this.onChangePage} />
        </div>
      </div>
    );
  }
}

export default Result;