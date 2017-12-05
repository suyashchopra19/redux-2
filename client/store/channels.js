import axios from 'axios'
import socket from "../socket";

const GET_CHANNELS = "GET_CHANNELS";
const GET_CHANNEL = "GET_CHANNEL";

export function getChannels(channels) {
  const action = { type: GET_CHANNELS, channels };
  return action;
}

export function fetchChannels() {
  return function thunk(dispatch) {
    return axios
      .get("/api/channels")
      .then(res => res.data)
      .then(channels => {
        const action = getChannels(channels);
        dispatch(action);
      });
  };
}

export function postChannel({ name, history }) {
  console.log("name", name);
  return function thunk(dispatch) {
    return axios
      .post("/api/channels", { name })
      .then(res => res.data)
      .then(newChannel => {
        const action = getChannel(newChannel);
        dispatch(action);
        history.push(`channels/${newChannel.id}`);
        socket.emit("new-channel", newChannel);
      });
  };
}


export default function channelReducer(state = [], action) {
  switch (action.type) {
    case GET_CHANNELS:
      return { ...state, channels: action.channels };

    case GET_CHANNEL:
      return { ...state, channels: [...state.channels, action.channel] };

    default:
      return state;
  }
}