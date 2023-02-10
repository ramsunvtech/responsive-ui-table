import React from 'react';
import './radio.css';

const noop = () => {}
export default function RadioButton(props) {
  const { name, onSelect } = props;

  return (
    <label className="pure-material-radio">
      <input type="radio" name={name} onClick={onSelect} />
      <span></span>
    </label>
  )
}