import React from 'react';

class AdditionalFeature extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <li>
        {/* Add an onClick that will let you add a feature to your car */}
        <button className="button">Add</button>
        {this.props.feature.name} (+{this.props.feature.price})
      </li>
    );
  }
};

export default AdditionalFeature;
