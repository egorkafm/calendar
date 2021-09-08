import { EventState, EventAction, EventActionEnum } from './types';


const initialState: EventState = {
  guests: [],
  events: []
}

export default function EventReduser(state = initialState, action: EventAction): EventState {
  switch (action.type) {
    case EventActionEnum.SET_GUESTS:
      return {...state, guests: action.payload}
    case EventActionEnum.SET_EVENTS:
      return {...state, events: action.payload}

    default:
      return state;
  }
}