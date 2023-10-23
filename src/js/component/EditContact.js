import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState'

export const EditContact = (route) => {
    let history = useHistory();

    const { contacts, editContact } = useContext(GlobalContext);

    const [selectedUser, setSelectedUser] = useState({
        id: null,
        name: "",
        lastname: "",
    });

    const currentUserId = route.match.params.id;

    useEffect(() => {
        const contactId = currentUserId;
        const selectedUser = contacts.find(
            (currentContactTraversal) => currentContactTraversal.id === parseInt(contactId)
        );
        setSelectedUser(selectedUser);
    }, [currentUserId, contacts]);

    const onSubmit = (e) => {
        e.preventDefault();
        editContact(selectedUser);
        history.push("/");
    };

    const handleOnChange = (userKey, newValue) =>
        setSelectedUser({ ...selectedUser, [userKey]: newValue });

    if (!selectedUser || !selectedUser.id) {
        return <div>Invalid Contact ID.</div>;
    }

    return (
        <React.Fragment>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="name"
                        >
                            Edit name
                        </label>
                        <input
                            className="form-control"
                            value={selectedUser.name}
                            onChange={(e) => handleOnChange("name", e.target.value)}
                            type="text"
                            placeholder="Edit name"
                            aria-label="Edit name"
                        />
                    </div>
                    <div className="w-full  mb-5">
                        <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="lastname">Edit lastname</label>
                        <input
                            className="form-control"
                            value={selectedUser.lastname}
                            onChange={(e) => handleOnChange("lastname", e.target.value)}
                            type="text"
                            aria-label="Edit lastname"
                            placeholder="Edit lastname"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="btn btn-warning">
                            Save change
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500">
                        <Link to="/">Cancel</Link>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};