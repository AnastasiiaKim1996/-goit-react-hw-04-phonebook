import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Form, Label, Input, BtnWrapper, Button } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  // записуємо id у змінні щоб у елементів змінної було однакове id для взаємодії //

  nameId = nanoid();
  numberId = nanoid();

  // метод, який витягує з інпутів їх значення і записує у стейт  //

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  // метод для відправлення форми, формує контакти зі стейту та передає до зовнішнього методу //

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit({ name, number });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { nameId, numberId } = this;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={nameId}> Name </Label>
        <Input
          type="text"
          id={nameId}
          name="name"
          value={this.state.name} // записуємо значення до стейту //
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Label htmlFor={numberId}> Contacts</Label>
        <Input
          type="tel"
          id={numberId}
          name="number"
          value={this.state.number} // записуємо значення до стейту //
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <BtnWrapper>
          <Button type="submit">Add contact</Button>
        </BtnWrapper>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
