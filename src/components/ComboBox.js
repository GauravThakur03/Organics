/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";

import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

const filter = createFilterOptions();

export default function ComboBox({
  onChange,
  label = "",
  displayProp,
  valueProp,
  options = [{[displayProp]:'',[valueProp]:null}],
}) {
  return (
    <Autocomplete
      id="areasAutoComplete"
      options={options}
      getOptionLabel={(option) => option[displayProp]}
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
      getOptionDisabled={(option) =>
        option[valueProp] === null || option[valueProp] === undefined
      }
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        if (filtered.length === 0 && params.inputValue !== "") {
          console.log(params, filtered);
          filtered.push({
            [displayProp]: "Sorry, we are not delivering in your area.",
            [valueProp]: null,
          });
        }

        return filtered;
      }}
      renderOption={(option, { inputValue }) => {
        const matches = match(option[displayProp], inputValue);
        const parts = parse(option[displayProp], matches);

        return (
          <div>
            {parts.map((part, index) => (
              <span
                key={index}
                style={{ fontWeight: part.highlight ? 700 : 400 }}
              >
                {part.text}
              </span>
            ))}
          </div>
        );
      }}
    />
  );
}
