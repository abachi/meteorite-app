import React from 'react';

class SearchPanel extends React.Component {
  render(){
    return(
      <div className='lg:w-1/3 text-center mx-auto pt-4'>
        <input value={this.props.keywords}
          onChange={this.props.handleSearch}
          className='border rounded mx-2 py-1 px-2' type='text'
          placeholder="keyword..."
          />
        <button className='bg-blue-500 text-white py-1 px-2 rounded'
        onClick={this.props.handleClick}>Search</button>
      </div>
    );
  }
}

export default SearchPanel;