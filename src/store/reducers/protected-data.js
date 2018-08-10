import deepcopy from "deepcopy";

import {
  FETCH_PROPERTY_DATA_SUCCESS,
  FETCH_PROPERTY_DATA_ERROR,
  FETCH_RESERVATION_DATA_SUCCESS,
  FETCH_RESERVATION_DATA_ERROR,
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
  SET_SELECTED_DATE,
  CLEAR_SELECTED_DATE
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
  reservations: [],
  error: null
};

// const initialState = {
//   user: {
//     firstName: "John",
//     lastName: "Doe",
//     username: "beachBum"
//   },
//   selectedProperty: null,
//   properties: [
//     {
//       id: 3423141,
//       name: "Beach House",
//       street: "150 Ocean Blvd",
//       state: "NC",
//       city: "Wrightsville",
//       zipcode: 28480,
//       type: "house",
//       owner: "beachBum",
//       thumbUrl:
//         "https://github.com/mike-crane/dibs-client/blob/master/src/images/beach-house.jpg?raw=true"
//     },
//     {
//       id: 9231230,
//       name: "Downtown Apartment",
//       street: "210 Main Street",
//       state: "NC",
//       city: "Charlotte",
//       zipcode: 28105,
//       type: "apartment",
//       owner: "globeTr0ttr",
//       thumbUrl:
//         "https://github.com/mike-crane/dibs-client/blob/master/src/images/downtown-apartment.jpg?raw=true"
//     },
//     {
//       id: 7897234,
//       name: "Mountain House",
//       street: "340 Eagles Nest Way",
//       state: "NC",
//       city: "Asheville",
//       zipcode: 28715,
//       type: "house",
//       owner: "mommaD05",
//       thumbUrl:
//         "https://github.com/mike-crane/dibs-client/blob/master/src/images/mountain-house.jpg?raw=true"
//     }
//   ],
//   currentReservation: {
//     propertyID: null,
//     propertyName: "",
//     username: "",
//     start: "",
//     end: ""
//   },
//   reservations: [
//     {
//       propertyID: 3423141,
//       propertyName: "Beach House",
//       username: "mommaD05",
//       start: "7-2-2018",
//       end: "7-6-2018"
//     },
//     {
//       propertyID: 9231230,
//       propertyName: "Downtown Apartment",
//       username: "beachBum",
//       start: "6-22-2018",
//       end: "6-31-2018"
//     },
//     {
//       propertyID: 7897234,
//       propertyName: "Mountain House",
//       username: "globeTr0ttr",
//       start: "7-12-2018",
//       end: "7-16-2018"
//     }
//   ]
// };

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
  if (action.type === POST_PROPERTY_DATA_SUCCESS) {
    return Object.assign({}, state, { properties: [...state.properties, action.data], error: null });
  }
  if (action.type === POST_PROPERTY_DATA_ERROR) {
    return Object.assign({}, state, { error: action.error });
  }
  if (action.type === POST_RESERVATION_DATA_SUCCESS) {
    return Object.assign({}, state, {
      properties: [...state.reservations, action.data],
      error: null
    });
  }
  if (action.type === POST_RESERVATION_DATA_ERROR) {
    return Object.assign({}, state, { error: action.error });
  }  
  if (action.type === EDIT_SELECTED_PROPERTY_SUCCESS) {
    return Object.assign({}, state, { properties: action.data });
  }
  if (action.type === EDIT_SELECTED_PROPERTY_ERROR) {
    return Object.assign({}, state, { properties: action.error });
  }
  if (action.type === DELETE_SELECTED_PROPERTY_SUCCESS) {
    return Object.assign({}, state, { properties: action.data });
  }
  if (action.type === DELETE_SELECTED_PROPERTY_ERROR) {
    return Object.assign({}, state, { error: action.error })
  }
  if (action.type === DELETE_RESERVATION_SUCCESS) {
    return Object.assign({}, state, { reservations: action.data });
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
  // if (action.type === SAVE_RESERVATION) {
  //   let reservations = action.reservations;
  //   let newReservation = action.newReservation;
  //   return Object.assign({}, state, { reservations: [newReservation, ...reservations] });
  // }
  return state;
}