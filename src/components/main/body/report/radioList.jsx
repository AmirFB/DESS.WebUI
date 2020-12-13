import React, { useState } from "react";

import Select from "react-select";

export default function CheckboxList({
  header,
  data,
  disabled,
  handleChange,
  ...props
}) {
  const hanldeChange = (opt) => {
    handleChange(opt.value);
  };

  return (
    <div>
      {header}
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={data[0]}
        onChange={hanldeChange}
        isClearable={false}
        isRtl={false}
        isSearchable={false}
        name="color"
        options={data}
      />
    </div>
  );
}
