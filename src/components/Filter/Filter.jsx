import React from 'react';
import { nanoid } from 'nanoid';
import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  const inputId = nanoid();
  return (
    <div>
      <Label htmlFor={inputId}>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          id={inputId}
          value={value}
          onChange={onChange}
        />
      </Label>
    </div>
  );
};
