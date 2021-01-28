import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        boxSizing: 'border-box',
        width: '100vw',
        height: '80px',
        paddingTop: '20px',
        backgroundColor: '#1976d2'
    },
    button: {
        height: '40px',
        marginLeft: '20px',
        color: 'white'
    }
  }));


  export default useStyles