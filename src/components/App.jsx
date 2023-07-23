import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  };

  createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newUser],
      name: '',
      number: '',
    }));
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          state={this.state}
          handleChange={this.handleChange}
          createUser={this.createUser}
        />
        <Filter />

        <div>
          <p>Contacts</p>
          <ul>
            {this.state.contacts.map(user => (
              <li key={user.id}>
                {user.name}: {user.number}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
