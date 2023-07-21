import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  createUser = data => {
    console.log(data);
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.createUser({ name: this.state.name });
  };

  render() {
    const { name, contacts } = this.state;
    return (
      <>
        <h1>Phonebook</h1>

        <ContactForm
          createUser={this.createUser}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          name={name}
          contacts={contacts}
        />
        <div>
          <p>Contacts</p>
          <ul>
            <li>{}</li>
          </ul>
        </div>
      </>
    );
  }
}
