import PlayerDataService from '../services/player.service'
import React from 'react';

class AddPlayer extends React.Component {
    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeJersey = this.onChangeJersey.bind(this);
        this.onChangeAtBats = this.onChangeAtBats.bind(this);
        this.onChangeH = this.onChangeH.bind(this);
        this.onChangeH2 = this.onChangeH2.bind(this);
        this.onChangeH3 = this.onChangeH3.bind(this);
        this.onChangeHR = this.onChangeHR.bind(this);
        this.onChangeFreeAgent = this.onChangeFreeAgent.bind(this);
        this.savePlayer = this.savePlayer.bind(this);
        this.newPlayer = this.newPlayer.bind(this);

        this.state = {
            id: null,
            name: "",
            last_name: "",
            jersey_number: "",
            at_bats: 0,
            H: 0,
            H2: 0,
            H3: 0,
            HR: 0,
            free_agent: false,
            submitted: false
        };
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            last_name: e.target.value
        });
    }

    onChangeJersey(e) {
        this.setState({
            jersey_number: e.target.value
        });
    }

    onChangeAtBats(e) {
        this.setState({
            at_bats: e.target.value
        });
    }
    onChangeH(e) {
        this.setState({
            H: e.target.value
        });
    }

    onChangeH2(e) {
        this.setState({
            H2: e.target.value
        });
    }

    onChangeH3(e) {
        this.setState({
            H3: e.target.value
        });
    }

    onChangeHR(e) {
        this.setState({
            HR: e.target.value
        });
    }
    onChangeFreeAgent(e) {
        this.setState({
            free_agent: e.target.value
        });
    }

    savePlayer() {
        let data = {
            name: this.state.name,
            last_name: this.state.last_name,
            jersey_number: this.state.jersey_number,
            at_bats: this.state.at_bats,
            H: this.state.H,
            H2: this.state.H2,
            H3: this.state.H3,
            HR: this.state.HR,
            free_agent: this.state.free_agent
        };

        PlayerDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    last_name: response.data.last_name,
                    jersey_number: response.data.jersey_number,
                    at_bats: response.data.at_bats,
                    H: response.data.H,
                    H2: response.data.H2,
                    H3: response.data.H3,
                    HR: response.data.HR,
                    free_agent: response.data.free_agent,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newPlayer() {
        this.setState({
            id: null,
            name: "",
            last_name: "",
            jersey_number: "",
            at_bats: 0,
            H: 0,
            H2: 0,
            H3: 0,
            HR: 0,
            free_agent: false,

            submitted: false
        });
    }

    render() {
        return (
        <div className="submit-form">
            {this.state.submitted ? (
                <div> 
                    <h4>You submitted successfully!</h4>
                    <button className="btn btn-success" onClick={this.newPlayer}>Add
                    </button>
                </div>
            ) : (
            <div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={this.state.name}
                        onChange={this.onChangeName}
                        name="name"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="last_name"
                        value={this.state.last_name}
                        onChange={this.onChangeLastName}
                        name="last_name"
                    />
                </div>

                <div>
                    <label htmlFor="jersey">Jersey Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="jersey"
                        value={this.state.jersey_number}
                        onChange={this.onChangeJersey}
                        name="jersey"
                    />
                </div>

                <div>
                    <label htmlFor="atbats">At Bats</label>
                    <input
                        type="text"
                        className="form-control"
                        id="atbats"
                        value={this.state.at_bats}
                        onChange={this.onChangeAtBats}
                        name="atbats"
                    />
                </div>

                <div>
                    <label htmlFor="h">Hits</label>
                    <input
                        type="text"
                        className="form-control"
                        id="h"
                        value={this.state.at_bats}
                        onChange={this.onChangeH}
                        name="h"
                    />
                </div>

                <div>
                    <label htmlFor="h2">Doubles</label>
                    <input
                        type="text"
                        className="form-control"
                        id="h2"
                        value={this.state.H2}
                        onChange={this.onChangeH2}
                        name="h2"
                    />
                </div>

                <div>
                    <label htmlFor="h3">Triples</label>
                    <input
                        type="text"
                        className="form-control"
                        id="h3"
                        value={this.state.H3}
                        onChange={this.onChangeH3}
                        name="h3"
                    />
                </div>

                <div>
                    <label htmlFor="hr">HR</label>
                    <input
                        type="text"
                        className="form-control"
                        id="hr"
                        value={this.state.HR}
                        onChange={this.onChangeHR}
                        name="hr"
                    />
                </div>

                <div>
                    <label htmlFor="freeagent">Free Agent</label>
                    <input
                        type="text"
                        className="form-control"
                        id="freeagent"
                        value={this.state.free_agent}
                        onChange={this.onChangeFreeAgent}
                        name="freeagent"
                    />
                </div>
            <button className="btn btn-secondary" onClick={this.savePlayer}>
              Submit
            </button>
            </div>
            )}
        </div>
        );
    }
}

export default AddPlayer;