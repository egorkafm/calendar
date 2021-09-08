import { AppDispatch } from '../..';
import UserService from '../../../api/UserService';
import { IEvent } from './../../../models/IEvent';
import { IUser } from './../../../models/IUser';
import { EventActionEnum, SetGuestsAction, SetEventsAction } from './types';


export const EventActionCreators = {
  setGuasts: (payload: IUser[]): SetGuestsAction => ({type: EventActionEnum.SET_GUESTS, payload}),
  setEvents: (payload: IEvent[]): SetEventsAction => ({type: EventActionEnum.SET_EVENTS, payload}),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const responce = await UserService.getUsers()
      dispatch(EventActionCreators.setGuasts(responce.data))
    } catch (e) {
      console.log(e);
      
    }
  },
  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]'
      const json = JSON.parse(events) as IEvent[]
      json.push(event)
      dispatch(EventActionCreators.setEvents(json))
      localStorage.setItem('events', JSON.stringify(json))
    } catch (e) {
      console.log(e);
      
    }
  },
  fetchEvents: (username: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem('events') || '[]'
      const json = JSON.parse(events) as IEvent[]
      const currentUserEvents = json.filter(ev => ev.author === username || ev.guest === username)
      dispatch(EventActionCreators.setEvents(currentUserEvents))
    } catch (e) {
      console.log(e);
    }
  }
}