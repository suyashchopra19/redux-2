import axios from "axios";
import socket from "../socket";

const WRITE_CHANNEL = "WRITE_CHANNEL";


export function writeChannel(content) {
  const action = { type: WRITE_CHANNEL, content };
  return action;
}



export default function newChannelEntryReducer(state = '', action) {
  switch (action.type) {
    case WRITE_CHANNEL:
      return { ...state, newChannelEntry: action.content };
   

    default:
      return state;
  }
}