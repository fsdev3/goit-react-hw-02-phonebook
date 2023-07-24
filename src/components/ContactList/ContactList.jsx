import { Component } from 'react';

export class ContactList extends Component {
  handleDelete = id => {
    this.props.handleDelete(id);
  };
  render() {
    return (
      <ul>
        {this.props.state.contacts.map(user => (
          <li key={user.id}>
            {user.name}: {user.number}
            <button onClick={() => this.handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}
