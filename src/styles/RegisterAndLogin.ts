import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '20px'
    },
    input: {
        width: '100%',
        marginTop: '15px'
    },
    button: {
        marginTop: '30px'
    },
    selectForm: {
        width: '100%',
        marginTop: '20px'
    },
    select: {
        width: '100%',
        height: '100%'
    }
}));

export default useStyles