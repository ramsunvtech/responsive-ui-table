import React from 'react';
import './checkbox.css';

const noop = () => {}

export default function Checkbox(props) {
  const { label, name, onSelect = noop } = props;

  return (
    <label className="pure-material-checkbox">
      <input type="checkbox" name={name} onChange={e => onSelect(e)} />
      <span></span>
    </label>
  )
}