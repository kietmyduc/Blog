import {Box, makeStyles, Typography} from "@material-ui/core";
import {Link,} from 'react-router-dom'
import url from '../../IMG/pexels-hasan-albari-1229861.jpg'
import {Delete, Edit} from "@material-ui/icons";

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
    icons: {
        float: "right"
    },
    icon: {
        margin: 5,
        border: '1px solid #878787',
        padding: 5,
        borderRadius: 10
    },
    heading: {
        fontSize: '40px',
        textAlign: 'center',
        paddingTop: 50
    },
    subheading: {
        color: '#878787',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            display: 'flex'
        }
    },
    des: {
        display: "flex",
        justifyContent: 'center',
        padding: 20,
        // maxWidth: '90%',
    }
} ));

const DetailViews = () => {
    const classes = useStyles();
    return(
       <Box className={classes.container}>
           <img src={url} alt="banner" className={classes.image}/>
           <Box className={classes.icons}>
               <Link to='/update'><Edit className={classes.icon} color='primary'/></Link>
                <Delete className={classes.icon} color='error'/>
           </Box>
           <Typography className={classes.heading}>Title of the Blog</Typography>
           <Box className={classes.subheading}>
               <Typography>Author: <span style={{fontWeight: 600}}>Team</span></Typography>
               <Typography style={{marginLeft: 'auto'}}>Time: 10/05/2021</Typography>
           </Box>
           <Typography className={classes.des}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque consequatur eligendi facilis impedit, in laudantium molestias obcaecati pariatur provident quae soluta totam? Dolorum ea esse illo nulla perspiciatis voluptatum?</Typography>

       </Box>
    )
}
export default DetailViews;