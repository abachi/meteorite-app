import React from 'react';

class StaticAlert extends React.Component {
  render(){
    return(
      <div className="w-1/4 mx-auto mt-4 bg-white p-2 rounded text-center">
        <p className="text-red-500">{this.props.text}</p>
      </div>
    );
  }
}

export default StaticAlert;