import { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

interface PropsType {
  isLoading: boolean;
  label: string;
  name: string;
  defaultValue: string;
  data: { [key: string]: string };
  setValue: (v: string) => void;
}

function Dropdown({
  data,
  defaultValue = "",
  label = "Select",
  isLoading,
  setValue,
}: PropsType) {
  const [v, setV] = useState(defaultValue);
  const handleChange = (event: SelectChangeEvent) => {
    setV(event.target.value);
    setValue(event.target.value); // ignore this error it will not cause any problem
  };

  return (
    <FormControl
      disabled={isLoading}
      sx={{ minWidth: 172 }}
      size="small"
      fullWidth
    >
      <InputLabel>{label}</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={v}
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
