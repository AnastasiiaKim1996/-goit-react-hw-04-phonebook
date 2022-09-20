import { Component } from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';

export class Form extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  render() {
    return (
      <>
        <h2>Contacts</h2>
        <ContactForm />

        <h2>Phonebook</h2>

        <ul>
          <li></li>
        </ul>
      </>
    );
  }
}
