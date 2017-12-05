import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import store from '../store';
import { connect } from 'react-redux'

// These values are all hardcoded...for now!
// Soon, we'll fetch them from the server!
const RANDOM_CHANNEL = '/channels/1';
const GENERAL_CHANNEL = '/channels/2';
const DOGS_CHANNEL = '/channels/3';
const LUNCH_CHANNEL = '/channels/4';

const ChannelList = function({ channels, messages  }) {
    return (
      <ul>
      {channels.map(channel=>{
        return <li key={channel.id}>
            <NavLink to={`/channels/${channel.id}`} activeClassName="active">
              <span>{channel.name}</span>
              <span className="badge">
                {
                  messages.filter(message => message.channelId === channel.id)
                    .length
                }
              </span>
            </NavLink>
          </li>;
      })}
        
       </ul>
    );
  }

  const mapStateToProps= function(state){
    return {
      channels: state.channels,
      messages: state.messages
    }
  }

/** Write your `connect` component below! **/
export default withRouter(connect(mapStateToProps)(ChannelList));
