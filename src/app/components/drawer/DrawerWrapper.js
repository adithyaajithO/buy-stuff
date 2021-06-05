import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppDrawer from './AppDrawer';

const DrawerWrapper = ({
    classes,
    categories,
    categoriesByDept,
    setCategory,
    depts,
}) => {

    return <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{
            paper: classes.drawerPaper,
        }}
    >
        <div className={classes.drawerHeader}>
        </div>
        <AppDrawer
            categories={categories}
            categoriesByDept={categoriesByDept}
            setCategory={setCategory}
            depts={depts}
        />
    </Drawer>
};

export default DrawerWrapper;