import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container } from './App.styled';

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

  handleFind = (name, value) => {
    this.setState({ [name]: value });
    if (value.trim() === '') {
      this.setState({
        contacts: this.state.originalContacts || this.state.contacts,
      });
    } else {
      if (!this.state.originalContacts) {
        this.setState({ originalContacts: this.state.contacts });
      }
      const filteredContacts = this.state.contacts.filter(contact => {
        const contactName = contact.name.toLowerCase();
        const filterValue = value.toLowerCase();
        return contactName.includes(filterValue);
      });
      this.setState({ contacts: filteredContacts });
    }
  };

  createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    const isNameExists = this.state.contacts.some(
      contact => contact.name.toLowerCase() === newUser.name.toLowerCase()
    );

    if (isNameExists) {
      alert(`${newUser.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newUser],
      name: '',
      number: '',
    }));
  };

  handleDelete = id => {
    const updatedContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({ contacts: updatedContacts });
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          state={this.state}
          handleChange={this.handleChange}
          createUser={this.createUser}
        />

        <h2>Contacts</h2>
        <Filter state={this.state} handleFind={this.handleFind} />
        <ContactList state={this.state} handleDelete={this.handleDelete} />
      </Container>
    );
  }
}
