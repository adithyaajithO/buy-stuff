import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTab-root': {
            minWidth: '30px'
        }
    }
}
));

const TabFilter = ({
    value,
    handleChange,
    labels,
}) => {
    const classes = useStyles();

    return (
        <Tabs
            centered
            value={value}
            onChange={handleChange}
            aria-label='filter-tabs'
            className={classes.root}
        >
            {labels.map((el, index) => <Tab
                key={index}
                label={el}
                classes={classes}
            />)}
        </Tabs>
    );
};

export default TabFilter;
