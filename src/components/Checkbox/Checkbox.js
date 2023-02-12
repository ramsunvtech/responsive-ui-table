import React from 'react';
import './checkbox.css';

const noop = () => {}

export default function Checkbox(props) {
  const { innerRef, label, name, onSelect = noop, checked } = props;

  return (
    <label className="pure-material-checkbox">
      <input ref={innerRef} type="checkbox" name={name} onChange={e => onSelect(e)} checked={checked} />
      <span></span>
    </label>
  )
}