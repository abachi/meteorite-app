import React from 'react';
import Meteorite from './Meteorite.js';

class Result extends React.Component {

  renderMeteorite(data, index){
    return <Meteorite key={index} data={data} />;
  }
  render(){
    return(
      <div className='w-3/4 mx-auto mt-4 bg-white'>
        <table className='w-full rounded'>
          <tbody>
          <tr className='bg-yellow-500'>
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
              this.props.list.map((e,i) => {
                return this.renderMeteorite(e, i)
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Result;