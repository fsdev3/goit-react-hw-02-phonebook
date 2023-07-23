import { Component } from 'react';

export class ContactForm extends Component {
  handleChange = ({ target }) => {
    // this.setState({ [target.name]: target.value });
    // const { name, value } = target;
    this.props.handleChange(target.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createUser({
      name: this.props.state.name,
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="Name"></label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
          value={this.props.state.name}
        />
        <button htmlFor="Add">Add contact</button>
      </form>
    );
  }
}
