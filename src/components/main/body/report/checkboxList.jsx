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

  const hanldeChange = (opt) => {
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
    </div>
  );
}
