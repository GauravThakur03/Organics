/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";

import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { loadAreas } from "../services/organic";
import { useDispatch } from "react-redux";
import { setDeliveryLocation } from "../action-creator/organic";

const filter = createFilterOptions();

export default function ComboBox({ onChange }) {
  const [areas, setAreas] = useState([]);
  const dispatch = useDispatch();
  const getAreaList = (areaResponseArray) => {
    let listOfAreas = [];
    for (let x of areaResponseArray) {
      let city = x.city;
      for (let area of x.area) {
        listOfAreas.push(`${area}, ${city}`);
      }
    }

    return listOfAreas;
  };

  useEffect(() => {
    loadAreas().then((res) => {
      const { deliveryArea } = res;
      setAreas(getAreaList(deliveryArea));
    });
  }, []);

  return (
    <Autocomplete
      id="areasAutoComplete"
      options={areas}
      getOptionLabel={(option) => option}
      onChange={(event, newValue) => {
        dispatch(setDeliveryLocation(newValue));
        onChange();
      }}
      renderInput={(params) => (
        <TextField {...params} label="Type delivery area" variant="outlined" />
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
