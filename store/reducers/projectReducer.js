import { HYDRATE } from "next-redux-wrapper";

export default function (state = [], action) {
  switch(action.type) {
    case HYDRATE:
      return {...state, ...action.payload}
    default:
      return state;
  }
}