import React, {Component} from 'react';
import User from './components/User'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  root: {
    width: "100%",
    overflowX: "auto"
  }
});

const user = [
  {
  'name': '이채민',
  'type': '일반인',
  'age': 27,
  'job': '프리랜서'
  },
  {
    'name': '송송이',
    'type': '일반인',
    'age': 28,
    'job': '디자이너'
    }
]

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>            
              <TableCell>이름</TableCell>
              <TableCell>타입</TableCell>
              <TableCell>나이</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {user.map(c => {
          return <User name={c.name} type={c.type} age={c.age} job={c.job} />
          })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
