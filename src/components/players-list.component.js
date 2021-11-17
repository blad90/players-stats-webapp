import React, { Component } from 'react';
import PlayerDataService from '../services/player.service';
import { Link } from 'react-router-dom';

class PlayersList extends Component {
   constructor(props){
       super(props);

       this.retrievePlayers = this.retrievePlayers.bind(this);
       this.refreshList = this.refreshList.bind(this);
       this.setActivePlayer = this.setActivePlayer.bind(this);
       this.removeAllPlayers = this.removeAllPlayers.bind(this);

       this.state = {
           players: [],
           currentPlayer: null,
           currentIndex: -1,
           searchPlayer: ""
       };
   }
   
   componentDidMount(){
       this.retrievePlayers();
   }

   retrievePlayers(){
       PlayerDataService.getAll()
        .then(response => {
            this.setState({
                players: response.data
            });
            console.log(response.data);
        })
        .catch(e => {
            console.log(e);
        });
   }

   refreshList() {
       this.retrievePlayers();
       this.setState({
           currentPlayer: null,
           currentIndex: -1
       });
   }

   setActivePlayer(player, index){
       this.setState({
           currentPlayer: player,
           currentIndex: index
       });
   }

   removeAllPlayers(){
       PlayerDataService.deleteAll()
        .then(response => {
            console.log(response.data);
            this.refreshList();
        })
        .catch(e => {
            console.log(e);
        });
   }

   render() {
       const { players, currentPlayer, currentIndex } = this.state;

       return (
           <div className="list row">
               <div className="col-md-6">
                   <h4>Players List</h4>
                   <ul className="list-group">
                       {players && 
                       players.map((player, index) => (
                           <li className={(index === currentIndex ? "active" : "")
                           }
                           onClick={() => this.setActivePlayer(player, index)}
                           key={index}
                           > {player.name}
                           </li>
                       ))}
                   </ul>

                   <button className="m-3 btn btn-sm btn-danger" onClick={this.removeAllPlayers}> Remove All</button>
               </div>
               <div className="col-md-6">
          {currentPlayer ? (
            <div>
              <h4>Player</h4>
              <table className="table">
              <div>
              <tr>
              <th scope="col">
                <label>
                  <strong>No.</strong>
                </label>
                </th>

                <th scope="col">
                <label>
                  <strong>Name</strong>
                </label>
                </th>
                <th scope="col">
                <label>
                  <strong>Last Name</strong>
                </label>
                </th>

                <th scope="col">
                <label>
                  <strong>#</strong>
                </label>
                </th>

                <th scope="col">
                <label>
                  <strong>At-bats</strong>
                </label>
                </th>

                <th scope="col">
                <label>
                  <strong>H</strong>
                </label>
                </th>

                <th scope="col">
                <label>
                  <strong>2B</strong>
                </label>
                </th>

                <th scope="col">
                <label>
                  <strong>3B</strong>
                </label>
                </th>

                <th scope="col">
                <label>
                  <strong>HR</strong>
                </label>
                </th>

                <th scope="col">
                <label>
                  <strong>Free Agency</strong>
                </label>
                </th>
              </tr>
              
              <tr>
              <th scope="row">1</th>
              <td>{" "}{currentPlayer.name}</td>
              <td>{" "}{currentPlayer.last_name}</td>
              <td>{" "}{currentPlayer.jersey_number}</td>
              <td>{" "}{currentPlayer.at_bats}</td>
              <td>{" "}{currentPlayer.H}</td>
              <td>{" "}{currentPlayer.H2}</td>
              <td>{" "}{currentPlayer.H3}</td>
              <td>{" "}{currentPlayer.H4}</td>
              <td>{" "}{currentPlayer.free_agent}</td>
              </tr>
              </div>

              <Link
                to={"/players/" + currentPlayer.id} 
                className="badge badge-warning">
                Edit
              </Link>
              </table>
            </div>
          ) : (
            <div>
              <br />
              <p>Please select or add a Player...</p>
            </div>
          )}
           </div>
           </div>
       );
   }
}

export default PlayersList;