/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";

import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

const filter = createFilterOptions();

export default function ComboBox({ onChange, options = [], label="" }) {
  return (
    <Autocomplete
      id="areasAutoComplete"
      options={options}
      getOptionLabel={(option) => option}
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
      getOptionDisabled={(option) => option.includes("Sorry")}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        if (filtered.length === 0 && params.inputValue !== "") {
          filtered.push("Sorry, we are not delivering in your area.");
        }

        return filtered;
      }}
      renderOption={(option, { inputValue }) => {
        const matches = match(option, inputValue);
        const parts = parse(option, matches);

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
