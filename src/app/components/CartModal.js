import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    formWrapper: {
        width: 400,
    }, container: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '2.5%',
    }, chipContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: theme.spacing(0.5),
        '& > *': {
            margin: theme.spacing(0.5),
        },
    }, li: {
        listStyleType: "none"
    }, button: {
        margin: theme.spacing(1),
    }, noInput: {
        display: 'none',
    }, modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }, paper: {
        display: 'flex',
        position: 'absolute',
        width: 600,
        minHeight: 500,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(5),
    }, close: {
        position: 'absolute',
        // alignSelf: 'flex-end',
        top: 5,
        right: 5,
    }, center: {
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
    }, buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
    }, buttonRoot: {
        marginTop: theme.spacing(1),
        alignSelf: 'flex-end'
    }
}));

const CartModal = ({
    cart,
    open,
    setOpen,
    removeProductFromCartAction,
    emptyCartAction
}) => {
    const classes = useStyles();
    return <Modal open={open} className={classes.modal}>
        <div className={classes.paper}>
            <IconButton className={classes.close} onClick={() => setOpen(false)}>
                <CloseIcon />
            </IconButton>
            <Grid container className={classes.center}>
                {cart.map(el => <>
                    <Grid item xs={10}>
                        <Typography variant='h6'>
                            {el.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton onClick={() => removeProductFromCartAction(el)}>
                            <DeleteOutlineOutlinedIcon />
                        </IconButton>
                    </Grid>
                </>)}
            </Grid>
            <Grid
                container
                spacing={1}
                className={classes.buttonRoot}
            >
                <Grid item xs={6} className={classes.buttonContainer}>
                    <Button
                        className={classes.button}
                        onClick={() => emptyCartAction()}
                    >
                        Clear
            </Button>
                </Grid>
                <Grid item xs={6} className={classes.buttonContainer}>
                    <Button
                        className={classes.button}
                        onClick={() => emptyCartAction()}
                    >
                        Save
                </Button>
                </Grid>
            </Grid>
        </div>
    </Modal>
};

export default CartModal;
