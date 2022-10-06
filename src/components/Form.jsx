import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Container, Title } from './Form.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export class Form extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // методи життєвого циклу //

  componentDidMount() {
    console.log('Phonebook componentDidMount');

    const contact = localStorage.getItem('contacts');
    const parsedContact = JSON.parse(contact);
    if (parsedContact) {
      this.setState({ contacts: parsedContact });
    }
  }

  componentDidUpdate(prevState) {
    console.log('Phonebook componentDidUpdate');
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  // метод додавання нових контактів//

  addContact = contact => {
    const ContactChecked = this.state.contacts.find(
      data => data.name === contact.name
    );
    ContactChecked
      ? window.alert(`${contact.name} is already in contacts 😉`)
      : this.setState(prev => {
          const newContact = {
            id: nanoid(),
            ...contact,
          };
          return {
            contacts: [...prev.contacts, newContact],
          };
        });
  };

  removeContact = id => {
    this.setState(prevState => {
      const newContacts = prevState.contacts.filter(
        contact => contact.id !== id
      );
      return {
        contacts: newContacts,
      };
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  // метод фільтрації контактів //

  filteredContacts() {
    const { contacts, filter } = this.state;

    //при умові якщо фільтр порожній то повертається масив контактів //

    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toUpperCase();
    return contacts.filter(data =>
      data.name.toUpperCase().includes(normalizedFilter)
    );
  }

  render() {
    console.log('Phonebook render');
    const { filter } = this.state;
    const contacts = this.filteredContacts();
    return (
      <Container>
        <Title>Phonebook</Title>

        <ContactForm onSubmit={this.addContact} />
        <Title>Contacts</Title>
        <Filter value={filter} onChange={this.handleChange} />
        <ContactList items={contacts} removeContact={this.removeContact} />
      </Container>
    );
  }
}
