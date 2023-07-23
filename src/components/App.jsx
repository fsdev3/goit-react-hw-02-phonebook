import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
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
