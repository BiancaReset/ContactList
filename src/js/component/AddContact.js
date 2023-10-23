import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';


export const AddContact = () => {
  let history = useHistory();

  const { addContact, contacts } = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: contacts.length + 1,
      name,
      lastname,
    };
    addContact(newContact);
    history.push("/");
  };

  return (
    <React.Fragment>
      <div className="w-full max-w-sm container mt-20 mx-auto">
        <form onSubmit={onSubmit}>
          <div className="w-full mb-5">

            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="name"
            >
              Contact name
            </label>
            <input
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              aria-label="Enter name"
              placeholder="Enter name"
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="lastname"
            >
              Enter lastname
            </label>
            <input
              className="form-control"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              type="text"
              aria-label="Enter lastname"
              placeholder="Enter lastname"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="btn btn-success">
              Add Contact
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
