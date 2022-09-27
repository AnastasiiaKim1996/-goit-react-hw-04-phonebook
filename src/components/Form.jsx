import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Container, Title } from './Form.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export class Form extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
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
