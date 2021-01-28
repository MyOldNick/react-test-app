import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '20px',
    }, 
    text: {
        marginTop: '10px'
    }
}));

export default useStyles