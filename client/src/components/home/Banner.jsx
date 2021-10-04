import url from '../../IMG/1.jpeg'
import {makeStyles, Box, Typography} from "@material-ui/core";

const useStyle = makeStyles({
        image: {
            background: `url(${url}) center/100% repeat-x #000`,
            width: '100%' ,
            height: '50vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',

            '& :first-child': {
                marginTop:'20%',
                fontSize: 30,
                background: '#fff'
            }
        }
})

const Banner = () => {
const classes = useStyle();
    return(
       <Box className={classes.image}>
           <Typography>Chào Mừng Mấy Con Gà Đã Đến Trại Gà</Typography>
       </Box>

    )
}
export default Banner;