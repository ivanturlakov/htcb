import { GET_ITEMS, DELETE_ITEM, ADD_ITEM, EDIT_ITEM, ITEMS_LOADING } from '../actions/types';

const initialState = {
    items: [],
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            };
        case ADD_ITEM:
            return {
                ...state,
                items: [action.payload, ...state.items]
            };
        case EDIT_ITEM:
            return {
                ...state,
                items: [action.payload.item, ...state.items.filter(item => item._id !== action.payload.id)]
            };     
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            };       
        default:
            return state;    
    }
}