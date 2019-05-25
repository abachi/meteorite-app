import React from 'react';

class Meteorite extends React.Component {

  render(){
    return(
      <tr className="m-2 border-b hover:bg-yellow-400">
        <td className='p-2'>{this.props.data.id}</td>  
        <td className='p-2'>{this.props.data.name}</td>  
        <td className='p-2'>{this.props.data.nametype}</td>  
        <td className='p-2'>{this.props.data.recclass}</td>  
        <td className='p-2'>{this.props.data.mass}</td>  
        <td className='p-2'>{this.props.data.fall}</td>  
        <td className='p-2'>{this.props.data.year}</td>  
        <td className='p-2'>{this.props.data.reclat}</td>  
        <td className='p-2'>{this.props.data.reclong}</td>  
      </tr>
    );
  }
}

export default Meteorite;