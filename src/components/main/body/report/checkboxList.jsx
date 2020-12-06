import React from "react";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";

export default function CheckboxList({ header, data, ...props }) {
  const handleTriggerChange = (e) => {
    const { name, value, checked, type } = e.target;
    console.log(value);
  };

  return (
    <div style={{ zIndex: 10 }}>
      <InputLabel id="label">{header}</InputLabel>
      <Select
        labelId="label"
        width="80px"
        multiple
        name="output2"
        style={{ width: 100 }}
        value={data}
        renderValue={(value) =>
          value.sort().map((v, index) => (v.checked ? v.title + ", " : ""))
        }
        input={<Input />}
        onChange={handleTriggerChange}
      >
        {data.map((type, index) => (
          <MenuItem key={type.value} value={type.value}>
            <Checkbox checked={type.checked} />
            <ListItemText primary={type.title} />
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}
