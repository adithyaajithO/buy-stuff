import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export const CollapsibleList = ({
    open,
    onClick,
    list,
    action,
    listHead = 'All categories'
}) => {
    const classes = useStyles();
    return <>
        <ListItem
            button
            onClick={onClick}
        >
            <ListItemText>{listHead}</ListItemText>
        </ListItem>
        <Collapse
            in={open}
            timeout="auto"
            unmountOnExit
        >
            <List component="div" disablePadding>
                {list.map((el, idx) => <ListItem
                    button
                    className={classes.nested}
                    key={idx}
                    onClick={() => action(el)}
                >
                    <ListItemText primary={el} key={idx} />
                </ListItem>)}
            </List>
        </Collapse>
    </>
}

export default CollapsibleList;
