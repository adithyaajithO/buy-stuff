import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import CollapsibleList from '../CollapsibleList';

const useStyles = makeStyles(theme => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    nested: {
        paddingLeft: theme.spacing(4),
    },
}))

const AppDrawer = ({
    categories,
    categoriesByDept,
    setCategory,
    depts
}) => {
    const classes = useStyles();
    const [openCategories, setOpenCategories] = useState(false);
    const [openDept, setOpenDept] = useState([]);

    useEffect(() => {
        setOpenDept(depts.map(el => false))
    }, [depts]);

    return <div>
        <List>
            <CollapsibleList
                open={openCategories}
                onClick={() => setOpenCategories(!openCategories)}
                list={categories}
                action={setCategory}
            />
            {/* {depts.map((el, idx) => (
                <CollapsibleList
                    open={openDept.length !== 0 ? openDept[idx] : false}
                    key={idx}
                    onClick={() => setOpenDept((prev) => {
                        // [!prev[idx], ...prev]
                        console.log(prev);
                        prev[idx] = !prev[idx];
                        console.log(prev)
                        return prev;
                    })}
                    // onClick={() => setOpenDept((prev) => [!prev[idx], ...prev])}
                    list={el.category}
                    listHead={el.dept}
                    action={setCategory}
                />
            ))} */}
        </List>
    </div>
};

export default AppDrawer;