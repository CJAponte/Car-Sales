import React from 'react';
import { connect } from 'react-redux'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { addFeature, removeFeature } from './Action/index'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  removeFeature = (id) => {
    this.props.removeFeature(id)
  };

  buyItem = (id) => {
    this.props.addFeature(id)
  };

  render() {
    return (
      <div className="boxes">
        <div className="box">
          <Header car={this.props.car} />
          <AddedFeatures car={this.props.car} removeFeature={this.removeFeature} />
        </div>
        <div className="box">
          <AdditionalFeatures store={this.props.store} buyItem={this.buyItem} />
          <Total car={this.props.car} additionalPrice={this.props.additionalPrice} />
        </div>
      </div>
    )}
};

const mapStateToProps = (state) => ({
  additionalPrice: state.additionalPrice,
  car: state.car,
  store: state.store
})

export default connect(mapStateToProps, { addFeature, removeFeature })(App);
