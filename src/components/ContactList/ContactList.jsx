import {
  List,
  Item,
  NameContact,
  NumberContact,
  Button,
} from './ContactList.styled';

export const ContactList = ({ items, removeContact }) => {
  const elements = items.map(({ number, name, id }) => {
    return (
      <Item key={id}>
        <NameContact>{name}:</NameContact>
        <NumberContact>{number}</NumberContact>
        <Button type="button" onClick={() => removeContact(id)}>
          Delete
        </Button>
      </Item>
    );
  });
  return (
    <div>
      <List>{elements}</List>
    </div>
  );
};
