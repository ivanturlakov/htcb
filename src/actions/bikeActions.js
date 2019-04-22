import axios from 'axios';
import { GET_BIKES, DELETE_BIKE, ADD_BIKE, BIKES_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getBikes = () => dispatch => {
  dispatch(setBikesLoading());
  axios
    .get('/api/bikes')
    .then(res => 
      dispatch({
        type: GET_BIKES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addBike = bikeitem => (dispatch) => {
  axios
    .post('/api/bikes', bikeitem)
    .then(res => 
      dispatch({
        type: ADD_BIKE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteBike = id  => (dispatch, getState) => {
  axios
    .delete(`/api/bikes/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_BIKE,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setBikesLoading = () => {
  return {
    type: BIKES_LOADING
  };
};