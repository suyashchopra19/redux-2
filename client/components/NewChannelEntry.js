import React, { Component } from 'react';
import {connect} from 'react-redux'
import { writeChannel, postChannel} from '../store';

function NewChannelEntry ({newChannelEntry,handleChange,handleSubmit}) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input
          onChange={handleChange}
          value={newChannelEntry}
          className="form-control"
          type="text"
          name="channelName"
          placeholder="Enter channel name" />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}


const mapStateToProps = (state) => {
  return {
    newChannelEntry: state.newChannelEntry
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChange(event) {
      dispatch(writeChannel(event.target.value));
    },
    handleSubmit(event) {
      const name = event.target.channelName.value
      const history = ownProps.history
      event.preventDefault();
      dispatch(postChannel({name, history}));
      ownProps.history.push('/hjgjdg')
    }
  }
}
/** Write your `connect` component below! **/
export default connect(mapStateToProps,mapDispatchToProps)(NewChannelEntry)
