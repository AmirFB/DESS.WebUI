import React, { useState } from "react";

import Select from "react-select";

export default function CheckboxList({
  header,
  data,
  disabled,
  handleChange,
  ...props
}) {
  const [values, setValues] = useState();
  const [checked, setChecked] = useState(false);

  const handleChangeCheckbox = (e) => {
    const isChecked = !checked;

    setChecked(isChecked);
    setValues(isChecked ? data : values);
    handleChange(isChecked ? data : values);
  };

  const hanldeChange = (opt) => {
    const allOptionsSelected = opt.length === data.length;

    setChecked(allOptionsSelected ? true : false);
    setValues(opt);
    handleChange(opt);
  };

  return (
    <div>
      {header}
      <Select
        isMulti
        options={data}
        value={values}
        onChange={hanldeChange}
        closeMenuOnSelect={false}
        isDisabled={disabled}
      />
      <p>
        <input
          onChange={handleChangeCheckbox}
          type="checkbox"
          value="selectAll"
          checked={checked}
          disabled={disabled}
        />
        <label>Select all</label>
      </p>
    </div>
  );
}
