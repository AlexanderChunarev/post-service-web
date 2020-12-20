import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import {useDispatch, useSelector} from "react-redux";
import {orderList} from "../../../../store/partials/Order/actions";

const columns = [
    {id: 'orderId', label: 'Id', minWidth: 200},
    {id: 'recipientFullName', label: 'Відправник', minWidth: 200},
    {
        id: 'fullName',
        label: 'Отримувач',
        minWidth: 200,
        align: 'right',
    },
    {
        id: 'parcelName',
        label: 'Назва посилки',
        minWidth: 200,
        align: 'right',
    },
    {
        id: 'parcelDescription',
        label: 'Опис посилки',
        minWidth: 200,
        align: 'right',
    },
    {
        id: 'status',
        label: 'Статус',
        minWidth: 200,
        align: 'right',
    },
];

function mapToObject(orderId, recipientFullName, fullName, parcelName, parcelDescription, status) {
    return {orderId, recipientFullName, fullName, parcelName, parcelDescription, status};
}

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 650,
    },
});

export default function StickyHeadTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const dispatch = useDispatch();
    const user = useSelector(state => state.login)
    const orders = useSelector(state => state.createOrder.orderList)
    const row = orders.map(order => mapToObject(
        order.orderId,
        order.recipientName + " " + order.recipientSurname,
        order.user.name + " " + order.user.surname,
        order.parcel.name,
        order.parcel.description,
        order.status
        )
    )
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    useEffect(() => {
        //dispatch(orderList(user.phoneNumber))
        dispatch(orderList(user.phoneNumber))
    }, [])
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{minWidth: column.minWidth}}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {row.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={orders.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
