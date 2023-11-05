import { CREATE_NEW_CONTACT, DELETE_CONTACT } from './constants';

export const createContactAction = (contact) => {
    return {
        type: CREATE_NEW_CONTACT,
        payload: contact
    }
};

export const DeleteContactAction = (contact) => {
    return {
        type: DELETE_CONTACT,
        payload: contact
    }
};