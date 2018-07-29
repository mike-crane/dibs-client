import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

export const FETCH_PROPERTY_DATA_SUCCESS = 'FETCH_PROPERTY_DATA_SUCCESS';
export const fetchPropertyDataSuccess = data => ({
  type: FETCH_PROPERTY_DATA_SUCCESS,
  data
});

export const FETCH_PROPERTY_DATA_ERROR = 'FETCH_PROPERTY_DATA_ERROR';
export const fetchPropertyDataError = error => ({
  type: FETCH_PROPERTY_DATA_ERROR,
  error
});

export const SET_SELECTED_PROPERTY = 'SET_SELECTED_PROPERTY';
export const setSelectedProperty = (property, username) => ({
  type: SET_SELECTED_PROPERTY,
  property,
  username
});

export const CLEAR_SELECTED_PROPERTY = 'CLEAR_SELECTED_PROPERTY';
export const clearSelectedProperty = () => ({
  type: CLEAR_SELECTED_PROPERTY
});

export const SET_SELECTED_DATE = 'SET_SELECTED_DATE';
export const setSelectedDate = slotInfo => ({
  type: SET_SELECTED_DATE,
  slotInfo
});

export const CLEAR_SELECTED_DATE = 'CLEAR_SELECTED_DATE';
export const clearSelectedDate = () => ({
  type: CLEAR_SELECTED_DATE,
});

export const SAVE_RESERVATION = 'SAVE_RESERVATION';
export const saveReservation = (newReservation, reservations) => ({
  type: SAVE_RESERVATION,
  newReservation,
  reservations
});

export const fetchPropertyData = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/properties`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ data }) => dispatch(fetchPropertyDataSuccess(data)))
    .catch(err => {
      dispatch(fetchPropertyDataError(err));
    });
};

export const propertyDetails = id => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/properties/${id}`, {
    method: 'GET',
    headers: {
      // Provide our auth token as credentials
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => res.json())
    .then(({ data }) => {
      dispatch(fetchPropertyDataSuccess(data));
    });
};
