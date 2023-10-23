import React, { createContext, useReducer } from 'react';
import appReducer from './AppReducer';

const initialState = {
    contacts: [
        {
            id: 1,
            name: "Sammy",
            lastname: "Johnson",
        }
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    function addContact(contact) {
        dispatch({
            type: "ADD_CONTACT",
            payload: contact
        });
    }

    function editContact(contact) {
        dispatch({
            type: "EDIT_CONTACT",
            payload: contact
        });
    }

    function deleteContact(id) {
        dispatch({
            type: "DELETE_CONTACT",
            payload: id
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                contacts: state.contacts,
                addContact,
                editContact,
                deleteContact
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};