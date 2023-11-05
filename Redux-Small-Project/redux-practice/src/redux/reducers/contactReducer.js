import { CREATE_NEW_CONTACT, DELETE_CONTACT } from './../actions/constants';

export const contactReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_NEW_CONTACT:
            return [
                ...state,
                Object.assign({}, action.payload)
            ];
        case DELETE_CONTACT:
            return state.filter((contact) => contact.number !== action.payload.number);
        default:
            return state;
    }
};