import React from 'react';
import { connect } from 'react-redux';

import { buyItem } from '../store/actions';

import AdditionalFeature from './AdditionalFeature';

class AdditionalFeatures extends React.Component {
  state={}
  render(){
    return (
      <div className="content">
        <h4>Additional Features</h4>
        {this.props.store.length ? (
          <ol type="1">
            {this.props.store.map(item => (
              <AdditionalFeature 
                buyItem={this.props.buyItem} 
                key={item.id} 
                feature={item} 
              />
            ))}
          </ol>
        ) : (
          <p>Nice looking car!</p>
        )}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return{
    store: state.store
  }
}

export default connect(mapStateToProps, { buyItem })(AdditionalFeatures);

