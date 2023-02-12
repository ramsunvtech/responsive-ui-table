import React from 'react';
import './radio.css';

const noop = () => {}
export default function RadioButton(props) {
  const { innerRef, name, onSelect = noop, checked } = props;

  return (
    <label className="pure-material-radio">
      <input ref={innerRef} type="radio" name={name} onChange={e => onSelect(e)} checked={checked} />
      <span></span>
    </label>
  )
}