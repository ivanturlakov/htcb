import { GET_BIKES, DELETE_BIKE, ADD_BIKE, BIKES_LOADING } from '../actions/types';

const initialState = {
    bikes: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_BIKES:
            return {
                ...state,
                bikes: action.payload,
                loading: false
            };
        case DELETE_BIKE:
            return {
                ...state,
                bikes: state.bikes.filter(bike => bike._id !== action.payload)
            };
        case ADD_BIKE:
            return {
                ...state,
                bikes: [action.payload, ...state.bikes]
            };     
        case BIKES_LOADING:
            return {
                ...state,
                loading: true
            };       
        default:
            return state;    
    }
}