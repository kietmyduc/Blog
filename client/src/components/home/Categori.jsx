import {Button, makeStyles, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {categories} from "../../constants/data";

const useStyle = makeStyles({
    create: {
        margin: 20,
        background: '#6495ED',
        color: '#fff',
        width: '86%'
    },
    table: {
        border: '2px solid rgba(224, 224, 224, 1)'
    }
})

const Categori = () => {
    const classes =  useStyle();
    return(
        <>
        <Button variant="contained" className={classes.create}>Create Blog</Button>
        <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>All Categories</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    categories.map(category => {
                        return (
                                <TableRow>
                                    <TableCell>{category}</TableCell>
                                </TableRow>
                            )
                    })
                }
            </TableBody>
        </Table>
        </>
        )
}

export default Categori;