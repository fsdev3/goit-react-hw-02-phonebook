import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  handleChange = nameValue => {
    this.setState({ name: nameValue });
    // console.log(this.state);
  };

  createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };

    this.setState(prevState => ({
      name: '',
      contacts: [...prevState.contacts, newUser],
    }));
    console.log('newUser', newUser);
  };

  render() {
    // console.log('array', this.state.contacts);

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
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
