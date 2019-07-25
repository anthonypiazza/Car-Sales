import React from 'react';
import { connect } from 'react-redux';
import AdditionalFeature from './AdditionalFeature';

class AdditionalFeatures extends React.Component{
  render(){
    return (
      <div className="content">
        <h4>Additional Features</h4>
        {this.props.store.length ? (
          <ol type="1">
            {this.props.store.map(item => (
              <AdditionalFeature key={item.id} feature={item} />
            ))}
          </ol>
        ) : (
          <p>Nice looking car!</p>
        )}
      </div>
    );
  }
};

const mapStatetoProps = state => {
  return{
    store: state.store
  }
}

export default connect (mapStatetoProps, {})(AdditionalFeatures);
