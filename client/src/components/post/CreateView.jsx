import {Box, Button, FormControl, InputBase, makeStyles, TextareaAutosize} from "@material-ui/core";
import url from '../../IMG/pexels-hasan-albari-1229861.jpg'
import {     AddCircle} from "@material-ui/icons";
const useStyles = makeStyles( (theme) => ({
    container: {
        padding: '10px 10%',
        [theme.breakpoints.down('md')]: {
            padding: 0
        }
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    form: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    textField: {
        flex: 1,
        margin: '0 30px',
        fontSize: 35
    },
    textarea: {
        width: '100%',
        marginTop: 50,
        border: 'none',
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none',

        }
    }
}));

const CreateView = () => {
    const classes = useStyles();
    return(
        <Box className={classes.container}>
            <img className={classes.image} src={url} alt="banner"/>
            <FormControl className={classes.form}>
                <AddCircle fontSize="large" color="action" />
                <InputBase placeholder='Tiêu Đề' className={classes.textField}/>
                <Button variant='contained' color='primary'>Đăng(Publish)</Button>
            </FormControl>
            <TextareaAutosize rowsMin={5} className={classes.textarea} placeholder='Viết nội dung tại đây....'/>
        </Box>
    )
}
export default CreateView;