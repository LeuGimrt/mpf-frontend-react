import { FormControl, InputLabel, Select } from "@material-ui/core";
import React from "react";

function SelectOption({ valueSelected, handleOnChange }) {
  return (
    <>
      <FormControl
        style={{
          marginTop: "10px",
          minWidth: 50,
        }}
      >
        <InputLabel htmlFor='nota-simple'>Nota Máx.</InputLabel>
        <Select
          native
          value={valueSelected}
          onChange={handleOnChange}
          inputProps={{
            name: "nota",
            id: "nota-simple",
          }}
        >
          {[...new Array(10)].map((value, i) => {
            let x = (i + 1) * 10;
            let isSelected = valueSelected === x;
            return (
              <option selected={isSelected} value={x}>
                {x}
              </option>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
}
export default SelectOption;
