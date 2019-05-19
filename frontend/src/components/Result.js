import React from 'react';
import '../App.css';

class Result extends React.Component {

  renderSingleInfo(data, index){
    return (<tr key={index} className="m-2 border-b">
      <td className='p-2 '>{data.id}</td>  
      <td className='p-2 '>{data.name}</td>  
      <td className='p-2 '>{data.nametype}</td>  
      <td className='p-2 '>{data.recclass}</td>  
      <td className='p-2 '>{data.mass}</td>  
      <td className='p-2 '>{data.fall}</td>  
      <td className='p-2 '>{data.reclat}</td>  
      <td className='p-2 '>{data.reclong}</td>  
      <td className='p-2 '>{data.year}</td>  
    </tr>);
  }
  render(){
    return(
      <div className='w-3/4 mx-auto mt-4 bg-white'>
        <table className='w-full rounded'>
          <tbody>
          <tr className='bg-yellow-500'>
            <th className=' p-3'>ID</th>
            <th className=' p-3'>Name</th>
            <th className=' p-3'>Type</th>
            <th className=' p-3'>Class</th>
            <th className=' p-3'>Mass</th>
            <th className=' p-3'>Fall</th>
            <th className=' p-3'>Year</th>
            <th className=' p-3'>Latitude</th>
            <th className=' p-3'>Longitude</th>
          </tr>
            {
              this.props.list.map((e,i) => {
                return this.renderSingleInfo(e, i)
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Result;