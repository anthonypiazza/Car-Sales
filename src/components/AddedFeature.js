import React from 'react';

class AddedFeature extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <li>
        {/* Add an onClick to run a function to remove a feature */}
        <button className="button">X</button>
        {this.props.feature.name}
      </li>
    );
  }
};

export default AddedFeature;
