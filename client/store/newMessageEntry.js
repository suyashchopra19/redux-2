import axios from "axios";
import socket from "../socket";

const WRITE_MESSAGE = 'WRITE_MESSAGE';

// export function updateName(name) {
//   const action = { type: UPDATE_NAME, name };
//   return action;
// }

export function writeMessage (content) {
  const action = { type: WRITE_MESSAGE, content };
  return action;
}

export default function newMessageEntry(state = '', action) {
  switch (action.type) {
    case WRITE_MESSAGE:
      return { ...state, newMessageEntry: action.content };
      
    default:
      return state;
  }
}
