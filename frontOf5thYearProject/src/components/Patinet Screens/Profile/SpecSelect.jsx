import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useEffect,useState } from 'react';
import axios from 'axios';
import getSpec from '../../../functions/getSpec';
import React from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SpecSelect(props) {
    const [names ,setNames]=React.useState([]);

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  useEffect(()=>{
 getSpec()
.then(r=>{
    setNames(r.data.data);

}).catch(e=>{
console.log(e);})
  },[])



  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="SpecLabel">اختر الاختصاص </InputLabel>
        <Select
          labelId="SpecLabel"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={props.callback}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}