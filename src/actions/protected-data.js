import { API_BASE_URL } from "../config";
import { normalizeResponseErrors } from "./utils";

export const FETCH_PROPERTY_DATA_SUCCESS = "FETCH_PROPERTY_DATA_SUCCESS";
export const fetchPropertyDataSuccess = data => ({
  type: FETCH_PROPERTY_DATA_SUCCESS,
  data
});

export const FETCH_PROPERTY_DATA_ERROR = "FETCH_PROPERTY_DATA_ERROR";
export const fetchPropertyDataError = error => ({
  type: FETCH_PROPERTY_DATA_ERROR,
  error
});

export const fetchPropertyData = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/dibs/properties`, {
    method: "GET",
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(fetchPropertyDataSuccess(data)))
    .catch(err => {
      dispatch(fetchPropertyDataError(err));
    });
};

export const FETCH_RESERVATION_DATA_SUCCESS = "FETCH_RESERVATION_DATA_SUCCESS";
export const fetchReservationDataSuccess = data => ({
  type: FETCH_RESERVATION_DATA_SUCCESS,
  data
});

export const FETCH_RESERVATION_DATA_ERROR = "FETCH_RESERVATION_DATA_ERROR";
export const fetchReservationDataError = error => ({
  type: FETCH_RESERVATION_DATA_ERROR,
  error
});

export const fetchReservationData = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/dibs/reservations`, {
    method: "GET",
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(fetchReservationDataSuccess(data)))
    .catch(err => {
      dispatch(fetchReservationDataError(err));
    });
};

export const FETCH_USER_RESERVATION_DATA_SUCCESS =
  "FETCH_USER_RESERVATION_DATA_SUCCESS";
export const fetchUserReservationDataSuccess = data => ({
  type: FETCH_USER_RESERVATION_DATA_SUCCESS,
  data
});

export const FETCH_USER_RESERVATION_DATA_ERROR =
  "FETCH_USER_RESERVATION_DATA_ERROR";
export const fetchUserReservationDataError = error => ({
  type: FETCH_USER_RESERVATION_DATA_ERROR,
  error
});

export const fetchUserReservationData = user => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/dibs/reservations/${user}`, {
    method: "GET",
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(fetchUserReservationDataSuccess(data)))
    .catch(err => {
      dispatch(fetchUserReservationDataError(err));
    });
};

export const POST_PROPERTY_DATA_SUCCESS = "POST_PROPERTY_DATA_SUCCESS";
export const postPropertyDataSuccess = data => ({
  type: POST_PROPERTY_DATA_SUCCESS,
  data
});

export const POST_PROPERTY_DATA_ERROR = "POST_PROPERTY_DATA_ERROR";
export const postPropertyDataError = error => ({
  type: POST_PROPERTY_DATA_ERROR,
  error
});

export const postPropertyData = property => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/dibs/properties`, {
    method: "POST",
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`,
      "Content-type": "application/json"
    },
    body: JSON.stringify(property)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(postPropertyDataSuccess(data)))
    .catch(err => {
      dispatch(postPropertyDataError(err));
    });
};

export const POST_RESERVATION_DATA_SUCCESS = "POST_RESERVATION_DATA_SUCCESS";
export const postReservationDataSuccess = data => ({
  type: POST_RESERVATION_DATA_SUCCESS,
  data
});

export const POST_RESERVATION_DATA_ERROR = "POST_RESERVATION_DATA_ERROR";
export const postReservationDataError = error => ({
  type: POST_RESERVATION_DATA_ERROR,
  error
});

export const postReservationData = reservation => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/dibs/reservations`, {
    method: "POST",
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`,
      "Content-type": "application/json"
    },
    body: JSON.stringify(reservation)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(postReservationDataSuccess(data)))
    .catch(err => {
      dispatch(postReservationDataError(err));
    });
};

export const EDIT_SELECTED_PROPERTY_SUCCESS = "EDIT_SELECTED_PROPERTY_SUCCESS";
export const editSelectedPropertySuccess = property => ({
  type: EDIT_SELECTED_PROPERTY_SUCCESS,
  property
});

export const EDIT_SELECTED_PROPERTY_ERROR = "EDIT_SELECTED_PROPERTY_ERROR";
export const editSelectedPropertyError = error => ({
  type: EDIT_SELECTED_PROPERTY_ERROR,
  error
});

export const editSelectedProperty = property => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/dibs/properties/${property.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(property)
  })
    .then(res => dispatch(editSelectedPropertySuccess(res)))
    .catch(err => {
      dispatch(editSelectedPropertyError(err));
    });
};

export const DELETE_SELECTED_PROPERTY_SUCCESS =
  "DELETE_SELECTED_PROPERTY_SUCCESS";
export const deleteSelectedPropertySuccess = data => ({
  type: DELETE_SELECTED_PROPERTY_SUCCESS,
  data
});

export const DELETE_SELECTED_PROPERTY_ERROR = "DELETE_SELECTED_PROPERTY_ERROR";
export const deleteSelectedPropertyError = error => ({
  type: DELETE_SELECTED_PROPERTY_ERROR,
  error
});

export const deleteProperty = (id, data) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/dibs/properties/${id}`, {
    method: "DELETE",
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  }).then(res => dispatch(deleteSelectedPropertySuccess(id, data)));
};

export const DELETE_RESERVATION_SUCCESS = "DELETE_RESERVATION_SUCCESS";
export const deleteReservationSuccess = data => ({
  type: DELETE_RESERVATION_SUCCESS,
  data
});

export const DELETE_RESERVATION_ERROR = "DELETE_RESERVATION_ERROR";
export const deleteReservationError = error => ({
  type: DELETE_RESERVATION_ERROR,
  error
});

export const deleteReservation = (id, data) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/dibs/reservations/${id}`, {
    method: "DELETE",
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  }).then(res => dispatch(deleteReservationSuccess(id, data)));
};

export const SET_SELECTED_PROPERTY = "SET_SELECTED_PROPERTY";
export const setSelectedProperty = (property, username) => ({
  type: SET_SELECTED_PROPERTY,
  property,
  username
});

export const SHOW_SELECTED_RESERVATION = "SHOW_SELECTED_RESERVATION";
export const showSelectedReservation = reservation => ({
  type: SHOW_SELECTED_RESERVATION,
  reservation
});

export const CLEAR_SELECTED_RESERVATION = "CLEAR_SELECTED_RESERVATION";
export const clearSelectedReservation = () => ({
  type: CLEAR_SELECTED_RESERVATION
});

export const CLEAR_SELECTED_PROPERTY = "CLEAR_SELECTED_PROPERTY";
export const clearSelectedProperty = () => ({
  type: CLEAR_SELECTED_PROPERTY
});

export const SET_SELECTED_DATE = "SET_SELECTED_DATE";
export const setSelectedDate = slotInfo => ({
  type: SET_SELECTED_DATE,
  slotInfo
});

export const CLEAR_SELECTED_DATE = "CLEAR_SELECTED_DATE";
export const clearSelectedDate = () => ({
  type: CLEAR_SELECTED_DATE
});

export const SHOW_MODAL = "SHOW_MODAL";
export const showModal = () => ({
  type: SHOW_MODAL
});

export const HIDE_MODAL = "HIDE_MODAL";
export const hideModal = () => ({
  type: HIDE_MODAL
});
