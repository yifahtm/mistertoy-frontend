// import * as React from 'react';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import ListItemText from '@mui/material/ListItemText';
// import Select from '@mui/material/Select';
// import Checkbox from '@mui/material/Checkbox';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//     PaperProps: {
//         style: {
//             maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//             width: 250,
//         },
//     },
// };


// export function LabelSelect({ handleChange, labels, byLable }) {
//     console.log(labels);
//     console.log(byLable);

//     // const handleChange = (event) => {
//     //     const {
//     //         target: { value },
//     //     } = event;
//     //     setPersonName(
//     //         // On autofill we get a stringified value.
//     //         typeof value === 'string' ? value.split(',') : value,
//     //     );
//     // };

//     return (
//         <div>
//             <FormControl sx={{ m: 1, width: 300 }}>
//                 <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
//                 <Select
//                     labelId="demo-multiple-checkbox-label"
//                     id="demo-multiple-checkbox"
//                     multiple
//                     value={byLable}
//                     onChange={handleChange}
//                     input={<OutlinedInput label="Tag" />}
//                     renderValue={(selected) => selected.join(', ')}
//                     MenuProps={MenuProps}
//                 >
//                     {labels.map((label) => (
//                         <MenuItem key={label} value={label}>
//                             <Checkbox checked={labels.indexOf(label) > -1} />
//                             <ListItemText primary={label} />
//                         </MenuItem>
//                     ))}
//                 </Select>
//             </FormControl>
//         </div>
//     );
// }

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

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

export function LabelSelect({ handleChange, labels, byLable }) {
    const theme = useTheme();
    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-chip-label">Filter by toy label</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={byLable}
                    onChange={handleChange}
                    name="byLable"
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
                    {labels.map((label) => (
                        <MenuItem
                            key={label}
                            value={label}
                            style={getStyles(label, labels, theme)}
                        >
                            {label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}