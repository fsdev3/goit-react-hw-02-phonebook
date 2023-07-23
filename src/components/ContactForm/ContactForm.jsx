import { Component } from 'react';

export class ContactForm extends Component {
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.props.handleChange(name, value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createUser({
      name: this.props.state.name,
      number: this.props.state.number,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={this.handleChange}
          value={this.props.state.name}
          required
        />
        <label htmlFor="Number">Number</label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={this.handleChange}
          value={this.props.state.number}
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
