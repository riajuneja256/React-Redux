import React from 'react';
import { connect } from 'react-redux';
import { activateModal, closeModal } from './actions';
import './modals.css'

// App.js
export class App extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="row container">
        <div className="col s12">
          <div className="col s12">
            <div className="btn col s2 push-s4" onClick={()=>this.props.activateModal()}>open Modal</div>
          </div>
          {this.props.modalVisibility && <div>
            <div className="col s12">
              <div className="col s6 push-s3 modal_style padding_0">
                <div className="col s12 center modal_body">Modal Content</div>
                <div className="col s12 btn-flat right-align"  onClick={()=>this.props.closeModal()}>close</div>
              </div>
            </div>
          </div>}
        </div>
      </div>
    );
  }
}

// AppContainer.js

const mapStateToProps = state => {
  return ({
    modalVisibility: state.Modal.modalVisibility,
  })
}


const mapDispatchToProps = {
  activateModal,
  closeModal,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;