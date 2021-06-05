import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import FilterSelect from '../components/FilterSelect';
import TabFilter from '../components/TabFilter';
import ProductCard from '../components/ProductCard';
import { fade, makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as productActions from '../../redux/product/productActions';
import * as deptActions from '../../redux/department/departmentActions';
import * as cartActions from '../../redux/cart/cartActions';
import MainBar from '../components/appBar/MainBar';
import DrawerWrapper from '../components/drawer/DrawerWrapper';
import Toolbar from '@material-ui/core/Toolbar';
import CartModal from '../components/CartModal';

const drawerWidth = 180;

const useStyles = makeStyles(theme => ({
    filterContainer: {
        display: 'flex',
        flexDirection: 'row',
    }, applyMargin: {
        margin: theme.spacing(0, 1, 0, 0)
    },
    root: {
        display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        backgroundColor: theme.palette.background.default
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    chipStyle: {
        margin: `0 ${theme.spacing(2)}px 0 0`
    },
    grow: {
        flexGrow: 1,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const BuyStuff = ({
    products,
    cart,
    depts,
    categories,
    categoriesByDept,
    title,
    ...rest
}) => {
    const classes = useStyles();
    const [recommFilter, setRecommFilter] = useState('');
    const [condnFilter, setConditionFilter] = useState('');
    const [deliveryFilter, setDeliveryFilter] = useState('');
    const [auctionFilter, setAuctionFilter] = useState(0);
    const [category, setCategory] = useState('');
    const [dept, setDept] = useState('Electronics');
    const [openCart, setOpenCart] = useState(false);

    let auction;
    switch (auctionFilter) {
        case 0:
            auction = '';
        case 1:
            auction = 'Yes';
        case 2:
            auction = 'No';
        default:
            auction = '';
    }

    const filters = {
        recommended: recommFilter,
        condition: condnFilter,
        delivery: deliveryFilter,
        auction: auction,
    };

    const {
        getProductsByDeptAction,
        getProductsByCategoryAction,
        searchProductAction,
        addProductsToCartAction,
        resetSearchAction,
        getCategoriesByDeptAction,
        getAllDeptsAction,
        getAllCategoriesAction,
        removeProductFromCartAction,
        emptyCartAction
    } = { ...rest };

    useEffect(() => {
        getProductsByDeptAction(dept);
        getAllCategoriesAction();
        getAllDeptsAction();
        // if (dept || category) {
        //     searchProductAction(dept, category, filters);
        // }
    }, [getProductsByDeptAction, getAllCategoriesAction, getAllDeptsAction]);

    useEffect(() => {
        console.log(category)
        if (category.length !== 0) {
            getProductsByCategoryAction(category);
        }
    }, [category]);

    //     useEffect(() => {
    //         console.log(filters);
    //         if (dept || category) {
    //             // searchProductAction(dept, category, filters);
    //         }
    //     }, [filters]);
    // // console.log(products);
    return <div className={classes.root}>
        <MainBar
            title={title}
            classes={classes}
            setOpenCart={setOpenCart}
        />
        <DrawerWrapper
            classes={classes}
            categories={categories}
            categoriesByDept={categoriesByDept}
            setCategory={setCategory}
            depts={depts}
        />
        <div className={classes.drawerHeader} />
        <main className={classes.content}>
            <Toolbar />
            <CartModal
                open={openCart}
                cart={cart}
                setOpen={setOpenCart}
                removeProductFromCartAction={removeProductFromCartAction}
                emptyCartAction={emptyCartAction}
            />
            <div>
                <Grid container spacing={3}>
                    <Grid className={classes.filterContainer} item xs={5}>
                        <FilterSelect
                            filterValue={recommFilter}
                            filters={['Yes', 'No']}
                            label={'Recommended'}
                            onChange={(e) => setRecommFilter(e.target.value)}
                            className={classes.applyMargin}
                        />
                        <FilterSelect
                            filterValue={condnFilter}
                            filters={['New', 'Renewed', 'Used-Good', 'Used-Acceptable']}
                            label={'Condition'}
                            onChange={(e) => setConditionFilter(e.target.value)}
                            className={classes.applyMargin}
                        />
                        <FilterSelect
                            filterValue={deliveryFilter}
                            filters={['two-day', 'saturday-shipping', 'no-rush-shipping', 'one-day']}
                            label={'Delivery'}
                            onChange={(e) => setDeliveryFilter(e.target.value)}
                            className={classes.applyMargin}
                        />
                    </Grid>
                    <Grid item xs={2} />
                    <Grid className={classes.filterContainer} item xs={3}>
                        <TabFilter
                            handleChange={(undefined, newValue) => setAuctionFilter(newValue)}
                            value={auctionFilter}
                            labels={['Show all', 'Auction', 'Buy now']}
                        />
                    </Grid>
                </Grid>
                <div>

                </div>
                <Grid container spacing={3}>
                    {products.map((el, idx) => <Grid key={idx} item xs={3}>
                        <ProductCard
                            key={idx}
                            discounts={el.discounts}
                            imageURL={el.imageURL}
                            productName={el.name}
                            productPrice={el.price}
                            rating={el.rating}
                            product={el}
                            onClick={addProductsToCartAction}
                        />
                    </Grid>)}
                </Grid>
            </div>
        </main>
    </div>
}

const mapStateToProps = ({
    productReducer: {
        products
    },
    departmentReducer: {
        depts,
        categories,
        categoriesByDept
    },
    cartReducer: {
        cart
    }
}) => ({
    products,
    depts,
    categories,
    categoriesByDept,
    cart
});

const mapDispatchToProps = {
    ...productActions,
    ...deptActions,
    ...cartActions
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyStuff);
