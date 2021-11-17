import React, { Component } from 'react'
import PlayerDataService from "../services/player.service"

class Player extends Component {
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.getPlayer = this.getPlayer.bind(this);
        
        this.state = {
            currentPlayer: {
                id: null,
                name: "",
                last_name: "",
                jersey_number: "",
                at_bats: 0,
                H: 0,
                H2: 0,
                H3: 0,
                HR: 0,
                free_agent: false
            }, 
            message: ""
        };
    }

    componentDidMount() {
        this.getPlayer(this.props.match.params.id);
    }

    onChangeName(e){
        const name = e.target.value;

        this.setState(function(prevState) {
            return {
                currentPlayer: {
                    ...prevState.currentPlayer,
                    name: name
                }
            };
        });
    }

    onChangeLastName(e){
        const lastName = e.target.value;

        this.setState(function(prevState) {
            return {
                currentPlayer: {
                    ...prevState.currentPlayer,
                    last_name: lastName
                }
            };
        });
    }

    onChangeJersey(e){
        const jersey = e.target.value;

        this.setState(function(prevState) {
            return {
                currentPlayer: {
                    ...prevState.currentPlayer,
                    jersey_number: jersey
                }
            };
        });
    }

    onChangeAtBats(e){
        const atBats = e.target.value;

        this.setState(function(prevState) {
            return {
                currentPlayer: {
                    ...prevState.currentPlayer,
                    at_bats: atBats
                }
            };
        });
    }

    onChangeH(e){
        const H = e.target.value;

        this.setState(function(prevState) {
            return {
                currentPlayer: {
                    ...prevState.currentPlayer,
                    H: H
                }
            };
        });
    }

    onChangeH2(e){
        const H2 = e.target.value;

        this.setState(function(prevState) {
            return {
                currentPlayer: {
                    ...prevState.currentPlayer,
                    H2: H2
                }
            };
        });
    }

    onChangeH3(e){
        const H3 = e.target.value;

        this.setState(function(prevState) {
            return {
                currentPlayer: {
                    ...prevState.currentPlayer,
                    H3: H3
                }
            };
        });
    }

    onChangeHR(e){
        const HR = e.target.value;

        this.setState(function(prevState) {
            return {
                currentPlayer: {
                    ...prevState.currentPlayer,
                    HR: HR
                }
            };
        });
    }

    updateFreeAgent(status){
        let data = {
            id: this.state.currentPlayer.id,
            name: this.state.currentPlayer.name,
            last_name: this.state.currentPlayer.last_name,
            jersey_number: this.state.currentPlayer.jersey_number,
            at_bats: this.state.currentPlayer.at_bats,
            H: this.state.currentPlayer.H,
            H2: this.state.currentPlayer.H2,
            H3: this.state.currentPlayer.H3,
            HR: this.state.currentPlayer.HR,
            free_agent: status
        };

        PlayerDataService.update(this.state.currentPlayer.id, data)
            .then(response => {
                this.setState(prevState => ({
                    currentPlayer: {
                        ...prevState.currentPlayer,
                        free_agent: status
                    }
                }));
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    getPlayer(id) {
        PlayerDataService.get(id)
          .then(response => {
            this.setState({
              currentPlayer: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }

    updatePlayer(){
        PlayerDataService.update(
            this.state.currentPlayer.id,
            this.state.currentPlayer
        )
        .then(response => {
            console.log(response.data);
            this.setState({
                message: "This player was updated successfully!"
            });
        })
        .catch(e => {
            console.log(e);
        });
    }

    deletePlayer(){
        PlayerDataService.delete(this.state.currentPlayer.id)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/players')
            })
            .catch(e => {
                console.log(e)
            });
    }

    render() {
        const { currentPlayer } = this.state;
        return (
            <div>
            {currentPlayer ? (
                <div className="edit-form">
                    <h4>Player</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                value={currentPlayer.name}
                                onChange={this.onChangeName} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="lastname">Last Name</label>
                            <input
                                type="text"
                                id="lastname"
                                className="form-control"
                                value={currentPlayer.last_name}
                                onChange={this.onChangeLastName} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="jersey">Jersey Number</label>
                            <input
                                type="text"
                                id="jersey"
                                className="form-control"
                                value={currentPlayer.jersey_number}
                                onChange={this.onChangeJersey} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="jersey">At-Bats</label>
                            <input
                                type="text"
                                id="atbats"
                                className="form-control"
                                value={currentPlayer.at_bats}
                                onChange={this.onChangeAtBats} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="hit">Hits</label>
                            <input
                                type="text"
                                id="hit"
                                className="form-control"
                                value={currentPlayer.H}
                                onChange={this.onChangeH} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="2b">2B</label>
                            <input
                                type="text"
                                id="2b"
                                className="form-control"
                                value={currentPlayer.H2}
                                onChange={this.onChangeH2} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="3b">3B</label>
                            <input
                                type="text"
                                id="3b"
                                className="form-control"
                                value={currentPlayer.H3}
                                onChange={this.onChangeH3} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="hr">HR</label>
                            <input
                                type="text"
                                id="hr"
                                className="form-control"
                                value={currentPlayer.HR}
                                onChange={this.onChangeHR} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="freeagent">Free Agent</label>
                            <input
                                type="text"
                                id="freeagent"
                                className="form-control"
                                value={currentPlayer.free_agent}
                                onChange={this.updateFreeAgent} />
                        </div>
                    </form>
                    {currentPlayer.free_agent ? (
              <button className="badge badge-primary mr-2"
                onClick={() => this.updateFreeAgent(false)}
              >
                Yes
              </button>
            ) : (
              <button className="badge badge-primary mr-2"
                onClick={() => this.updateFreeAgent(true)}
              >
                No
              </button>
            )}

            <button className="badge badge-primary mr-2"
              onClick={this.deletePlayer}
            >
              Delete
            </button>

            <button
              className="badge badge-success"
              type="submit"
              onClick={this.updatePlayer}
            >
              Update
            </button>
            <p>{this.state.message}</p>    
            </div>
            ) : (
                <div>
                    <br />
                    <p>Please click on a Player...</p>
                </div>
                )}  
            </div>
        );
    }
}

export default Player;