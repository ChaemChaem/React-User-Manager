import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class User extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.type}</TableCell>
                <TableCell>{this.props.age}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
        )
    }
}

export default User;