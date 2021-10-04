import {Box, makeStyles, Typography} from "@material-ui/core";
import url from "../../IMG/pexels-hasan-albari-1229861.jpg"
const useStyles = makeStyles({
    container: {
        height: 350,
        margin: 10,
        borderRadius: 10,
        border: '1px solid #d3cede',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '& > * ': {
            padding: '0 5px 5px 5px'
        },
    }
    ,
    image: {
        height: 150,
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0',
        '&:hover': {
            height: 200,
        }
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    heading: {
        fontSize: 18,
        fontWeight: 600
    },
    detail: {
        fontSize: 14,
        wordBreak: 'break-word'
    },
})
const Post = () => {
    const classes = useStyles();
    return(
        <Box className={classes.container}>
            <img src={url} alt="wrapper" className={classes.image}/>
            <Typography  className={classes.text}>Âm Nhạc</Typography>
            <Typography className={classes.heading}>Code for Team</Typography>
            <Typography className={classes.text}>Author: Dragon</Typography>
            <Typography className={classes.detail}>Hi ae</Typography>
        </Box>
    )
}
export default Post;