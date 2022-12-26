import { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type PropsType<T> = {
  label?: string;
  defalutValue?: string;
  data: T;
  setValue?: () => void;
};

function Dropdown<T extends { [key: string]: string }>({ data }: PropsType<T>) {
  const [age, setAge] = useState("");
  const list = Object.entries(data);
  console.info(list);
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel>Age</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
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
