import { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type PropsType<T> = {
  label: string;
  defalutValue: string;
  data: T;
  setValue?: () => void;
};

function Dropdown<T extends { [key: string]: string }>({
  data,
  defalutValue,
  label,
}: PropsType<T>) {
  const [value, setValue] = useState(defalutValue);
  const list = Object.entries(data);
  console.info(list);
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 172 }} size="small" fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={value}
        label={label}
        onChange={handleChange}
        MenuProps={{
          sx: {
            maxHeight: "clamp(300px, 80vh, 450px)",
          },
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {Object.entries(data).map(([key, value], i) => (
          <MenuItem key={i} value={value}>
            {key}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Dropdown;
