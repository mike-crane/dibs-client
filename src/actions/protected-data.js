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
