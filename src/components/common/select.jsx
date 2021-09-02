import React, { Component } from "react";

class Select extends Component {
  render() {
    const { error, name, label, value, options, onChange } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <select
          className="form-control"
          id={name}
          value={value}
          onChange={onChange}
          name={name}
        >
          <option value="" key="none" />
          {options.map((o) => (
            <option key={o.name} value={o._id}>
              {o.name}
            </option>
          ))}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}

export default Select;
