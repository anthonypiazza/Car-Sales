import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../store/actions';

import AddedFeature from './AddedFeature';

class AddedFeatures extends React.Component{
  render(){
    return (
      <div className="content">
        <h6>Added features:</h6>
        {this.props.car.features.length ? (
          <ol type="1">
            {this.props.car.features.map(item => (
              <AddedFeature 
                removeFeature={this.props.removeFeature} 
                key={item.id} 
                feature={item} 
              />
            ))}
          </ol>
        ) : (
          <p>You can purchase items from the store.</p>
        )}
      </div>
    );
  }
};


const mapStateToProps = state => {
  return{
    car: state.car
  }
}

export default connect (mapStateToProps, { removeFeature })(AddedFeatures);
