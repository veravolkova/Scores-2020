import React, { Component } from "react";
import { SERVER_URL } from "../constants.js";
import ReactTable from "react-table";
import "react-table/react-table.css";
import AddScore from './AddScore';
import Typography from '@material-ui/core/Typography';

class Scorelist extends Component {
  constructor(props) {
    super(props);
    this.state = { users: []};
  }
 

  componentDidMount() {
    this.fetchUsers();
  }
  
  fetchUsers = () => {
    fetch(SERVER_URL + 'api/users/search/findAllByOrderByScoreDesc')
    .then(response => response.json())
      .then(responseData => {
        this.setState({
          users: responseData._embedded.users
        });
        console.log(responseData._embedded.users);
      })
      .catch(err => console.error(err)); 
    }

  // Add new score
 addScore(user) {
    fetch(SERVER_URL + 'api/users', 
      { method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
      })
    .then(res => this.fetchUsers())
    .catch(err => console.error(err))
  }  

  render() {
    const columns = [
      {
        Header: 'Player',
        accessor: 'username'
      },
      {
        Header: 'Score',
        accessor: 'score'          
      },      
    ];  

    const highestScore = Math.max.apply(Math, this.state.users.map(function(o) { return o.score; }))

    return (
      <div className="App">
      <Typography variant='h6' color='inherit' style= {{marginTop: 20, marginBottom: 20}}>
          Highest score is: {highestScore}
      </Typography>
      <AddScore addScore={this.addScore} fetchUsers={this.fetchUsers} />    
        <ReactTable
          data={this.state.users}
          columns={columns}
          filterable={true}
        />
      </div>
    );
  }
}

export default Scorelist;
