import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const FilterSelect = ({
    onChange,
    filters,
    label,
    filterValue,
    className
}) => {
    return <TextField
        select
        label={label}
        value={filterValue}
        onChange={onChange}
        fullWidth
        variant='outlined'
        className={className}
    >
        {filters.map((el, index) => <MenuItem value={el} key={index}>{el}</MenuItem>)}
    </TextField>
}

export default FilterSelect;
