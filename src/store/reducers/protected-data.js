import deepcopy from "deepcopy";

import {
  FETCH_PROPERTY_DATA_SUCCESS,
  FETCH_PROPERTY_DATA_ERROR,
  FETCH_RESERVATION_DATA_SUCCESS,
  FETCH_RESERVATION_DATA_ERROR,
  FETCH_USER_RESERVATION_DATA_SUCCESS,
  FETCH_USER_RESERVATION_DATA_ERROR,
  POST_PROPERTY_DATA_SUCCESS,
  POST_PROPERTY_DATA_ERROR,
  POST_RESERVATION_DATA_SUCCESS,
  POST_RESERVATION_DATA_ERROR,
  EDIT_SELECTED_PROPERTY_SUCCESS,
  EDIT_SELECTED_PROPERTY_ERROR,
  DELETE_SELECTED_PROPERTY_SUCCESS,
  DELETE_SELECTED_PROPERTY_ERROR,
  DELETE_RESERVATION_SUCCESS,
  DELETE_RESERVATION_ERROR,
  SET_SELECTED_PROPERTY,
  CLEAR_SELECTED_PROPERTY,
  SHOW_SELECTED_RESERVATION,
  CLEAR_SELECTED_RESERVATION,
  SET_SELECTED_DATE,
  CLEAR_SELECTED_DATE,
  SHOW_MODAL,
  HIDE_MODAL
} from "../../actions/protected-data";

const initialState = {
  user: null,
  selectedProperty: null,
  properties: [],
  currentReservation: {
    propertyID: null,
    propertyName: "",
    username: "",
    start: "",
    end: ""
  },
  selectedReservation: {
    title: "",
    guest: "",
    start: "",
    end: "",
    id: null
  },
  reservations: [],
  showModal: false,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_PROPERTY_DATA_SUCCESS) {
    return Object.assign({}, state, { properties: action.data, error: null });
  } 
  if (action.type === FETCH_PROPERTY_DATA_ERROR) {
    return Object.assign({}, state, { error: action.error });
  } 
  if (action.type === FETCH_RESERVATION_DATA_SUCCESS) {
    return Object.assign({}, state, { reservations: action.data, error: null });
  }
  if (action.type === FETCH_RESERVATION_DATA_ERROR) {
    return Object.assign({}, state, { error: action.error });
  } 
  if (action.type === FETCH_USER_RESERVATION_DATA_SUCCESS) {
    return Object.assign({}, state, { reservations: action.data, error: null });
  }
  if (action.type === FETCH_USER_RESERVATION_DATA_ERROR) {
    return Object.assign({}, state, { error: action.error });
  }
  if (action.type === POST_PROPERTY_DATA_SUCCESS) {
    return Object.assign({}, state, { properties: [...state.properties, action.data], error: null });
  }
  if (action.type === POST_PROPERTY_DATA_ERROR) {
    return Object.assign({}, state, { error: action.error });
  }
  if (action.type === POST_RESERVATION_DATA_SUCCESS) {
    return Object.assign({}, state, {
      reservations: [...state.reservations, action.data],
      error: null
    });
  }
  if (action.type === POST_RESERVATION_DATA_ERROR) {
    return Object.assign({}, state, { error: action.error });
  }  
  if (action.type === EDIT_SELECTED_PROPERTY_SUCCESS) {
    return Object.assign({}, state, {
      properties: state.properties.map(property =>
        property.id === action.property.id ? action.property : property
      )
    });
  }
  if (action.type === EDIT_SELECTED_PROPERTY_ERROR) {
    return Object.assign({}, state, { properties: action.error });
  }
  if (action.type === DELETE_SELECTED_PROPERTY_SUCCESS) {
    return Object.assign({}, state, {
      ...state.properties.slice(0, action.index),
      ...state.properties.slice(action.index + 1)
    });
  }
  if (action.type === DELETE_SELECTED_PROPERTY_ERROR) {
    return Object.assign({}, state, { error: action.error })
  }
  if (action.type === DELETE_RESERVATION_SUCCESS) {
    return Object.assign({}, state, {
      ...state.reservations.slice(0, action.index),
      ...state.reservations.slice(action.index + 1) 
    });
  }
  if (action.type === DELETE_RESERVATION_ERROR) {
    return Object.assign({}, state, { error: action.error });
  }
  if (action.type === SET_SELECTED_PROPERTY) {
    const newReservation = deepcopy(state.currentReservation);
    newReservation.propertyID = action.property.id;
    newReservation.propertyName = action.property.name;
    newReservation.username = action.username;
    return Object.assign({}, state, {
      selectedProperty: action.property,
      currentReservation: newReservation
    });
  } 
  if (action.type === CLEAR_SELECTED_PROPERTY) {
    return Object.assign({}, state, { selectedProperty: null });
  } 
  if (action.type === SHOW_SELECTED_RESERVATION) {
    return Object.assign({}, state, { selectedReservation: action.reservation });
  }
  if (action.type === CLEAR_SELECTED_RESERVATION) {
    return Object.assign({}, state, { selectedReservation: {title: "", guest: "", start: "", end: ""} });
  }
  if (action.type === SET_SELECTED_DATE) {
    const reservationDates = deepcopy(state.currentReservation);
    reservationDates.start = action.slotInfo.start;
    reservationDates.end = action.slotInfo.end;
    return Object.assign({}, state, { currentReservation: reservationDates });
  } 
  if (action.type === CLEAR_SELECTED_DATE) {
    const clearDates = deepcopy(state.currentReservation);
    clearDates.start = "";
    clearDates.end = "";
    return Object.assign({}, state, { currentReservation: clearDates });
  } 
  if (action.type === SHOW_MODAL) {
    return Object.assign({}, state, { showModal: true });
  } 
  if (action.type === HIDE_MODAL) {
    return Object.assign({}, state, { showModal: false });
  } 
  return state;
}