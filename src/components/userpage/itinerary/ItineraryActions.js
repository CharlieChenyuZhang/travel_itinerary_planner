import dispatcher from '../../../utils/Dispatcher'
import ActionTypes from '../../../utils/ActionTypes'
import { postItinerary, patchItinerary } from '../../../utils/ServerMethods'

import RecommendationsStore from '../recommendations/RecommendationsStore'
import RecommendationActions from '../recommendations/RecommendationActions'
import ItineraryStore from './ItineraryStore'

const ItineraryActions = {
  addEvent (event) {
    dispatcher.dispatch({
      type: ActionTypes.ITINERARY_EVENT_ADD,
      value: event
    })
  },

  changeItineraryName (name) {
    dispatcher.dispatch({
      type: ActionTypes.ITINERARY_NAME_CHANGE,
      value: name
    })
  },

  clearItinerary () {
  	 const eventsCopy = ItineraryStore.getState().events.slice()
  	 const recs = RecommendationsStore.getState().recommendations.map(r => r.title)
    
    eventsCopy.forEach((existingEvent) => {
    	this.removeEvent(existingEvent.id)
    	
    	if (!recs.includes(existingEvent.data.title)) {
	     dispatcher.dispatch({
          type: ActionTypes.RECOMMENDATION_ADD,
          value: existingEvent.data
        })
      }
    })
  },

  infoOpen (info) {
    dispatcher.dispatch({
      type: ActionTypes.ITINERARY_EVENT_INFO_OPEN,
      value: info
    })
  },

  infoClose (info) {
    dispatcher.dispatch({
      type: ActionTypes.ITINERARY_EVENT_INFO_CLOSE,
      value: info
    })
  },

  loadItinerary (itinerary) {
    dispatcher.dispatch({
      type: ActionTypes.ITINERARY_LOAD,
      value: itinerary
    })
    
    const eventsCopy = ItineraryStore.getState().events.slice()
  	 const recs = RecommendationsStore.getState().recommendations.map(r => r.title)
  	 
  	 eventsCopy.forEach((existingEvent) => {
    	if (recs.includes(existingEvent.data.title)) {
	     RecommendationActions.removeRecommendation(existingEvent.data.title)
      }
    })
  },

  patchItineraryChanges (id, name, events) {
    patchItinerary(id, name, events)
      .then((json) => {
        if (json) {
          dispatcher.dispatch({
            type: ActionTypes.ITINERARY_PATCH_SUCCESS
          })
          dispatcher.dispatch({
            type: ActionTypes.UPDATE_USER,
            value: json
          })
        } else {
          dispatcher.dispatch({
            type: ActionTypes.ITINERARY_PATCH_FAILURE
          })
        }
      })
  },

  removeEvent (id) {
    dispatcher.dispatch({
      type: ActionTypes.ITINERARY_EVENT_REMOVE,
      value: id
    })
  },

  saveItinerary (itinerary) {
    const { events, name = 'No Name Provided', location = 'No Location Provided' } = itinerary
    const toSend = { events, date: Date.now(), location, name }
    postItinerary(toSend)
      .then((json) => {
        if (json) {
          dispatcher.dispatch({
            type: ActionTypes.ITINERARY_SAVE_SUCCESS,
            value: json.itinerary
          })
          dispatcher.dispatch({
            type: ActionTypes.ITINERARY_LOAD,
            value: json
          })
          dispatcher.dispatch({
            type: ActionTypes.UPDATE_USER,
            value: json.user
          })
        } else {
          dispatcher.dispatch({
            type: ActionTypes.ITINERARY_SAVE_FAILURE
          })
        }
        dispatcher.dispatch({
          type: ActionTypes.USERPROFILE_TOGGLE_ITINERARY_SAVE_SNACKBAR,
          value: true
        })
      })
  }
}

export default ItineraryActions
