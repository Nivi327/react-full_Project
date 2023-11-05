import './App.css';
import { useEffect, useReducer, useState } from 'react';
import { connect } from 'react-redux';

import { DeleteContactAction, createContactAction } from './redux/actions/contactActions';

//constants

const SET_NAME = 'SET_NAME';
const SET_NUMBER = 'SET_NUMBER';
const SET_CONTACT_LIST = 'SET_CONTACT_LIST';

const initialState = {
  name: '',
  number: '',
  contactList: ['']
}

const contactListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload
      }
    case SET_NUMBER:
      return {
        ...state,
        number: action.payload
      }
    case SET_CONTACT_LIST:
      return {
        ...state,
        contactList: action.payload
      }
    default:
      return state;
  }
}

function App(props) {
  // console.log(props);
  const [contactState, dispatchFun] = useReducer(contactListReducer, initialState);
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  // const [contactList, setContactList] = useState([]);

  const handleNameChange = (event) => {
    dispatchFun({
      type: SET_NAME,
      payload: event.target.value
    });
  };

  const handleNumberChange = (event) => {
    dispatchFun({
      type: SET_NUMBER,
      payload: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let contact = {
      name: contactState.name,
      number: contactState.number
    }
    dispatchFun({
      type: SET_NAME,
      payload: ''
    });
    dispatchFun({
      type: SET_NUMBER,
      payload: ''
    })
    props.createContact(contact);
  }

  const handleDeleteContact = (contact) => {
    props.deleteContact(contact);
  }

  useEffect(() => {
    dispatchFun({
      type: SET_CONTACT_LIST,
      payload: props.contacts
    })
    console.log(contactState.contactList);
  }, [handleSubmit, handleDeleteContact]);

  return (
    <>
      <div>
        <h1>Clientside Contacts Application</h1>
        <hr />
        {/* <ul>
          {this.props.contacts.map((contact, i) => <li key={i}>{contact.name}</li> )}
        </ul> */}
        <div>
          <h3>Add Contact Form</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name='name' onChange={handleNameChange} value={contactState.name} />
            <input type="text" name='number' onChange={handleNumberChange} value={contactState.number} />
            <input type="submit" />
          </form>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Number</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                contactState.contactList.map((contact, idx) => {
                  // console.log(contact);
                  return <tr key={idx}>
                    <td>{contact.name}</td>
                    <td>{contact.number}</td>
                    <td>
                      <button onClick={handleDeleteContact.bind(this, contact)}>X</button>
                    </td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div></>
  );
}

const mapStatetoProps = (state) => {
  // console.log("State", state);
  return {
    contacts: state.contactReducer
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    createContact: contact => dispatch(createContactAction(contact)),
    deleteContact: contact => dispatch(DeleteContactAction(contact)),
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
