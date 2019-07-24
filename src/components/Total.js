import React from 'react';
import { connect } from 'react-redux';

class Total extends React.Component{
  render(){
    return (
      <div className="content">
        <h4>Total Amount: ${this.props.car.price + this.props.additionalPrice}</h4>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return{
    additionalPrice: state.additionalPrice,
    car: state.car
  }
}

export default connect (mapStateToProps, {})(Total);
