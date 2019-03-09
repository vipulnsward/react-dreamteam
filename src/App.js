import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teamMembers: [{firstName: "Dan", lastName: "Smith"}],
            firstName: "",
            lastName: ""
        };
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    addNewMember = (event) =>{
        event.preventDefault();
        let newTeamMember= { firstName: this.state.firstName,
            lastName: this.state.lastName};
        let newTeamMembers = this.state.teamMembers;

        newTeamMembers.push(newTeamMember);

        this.setState({teamMembers: newTeamMembers,
            firstName: "",
            lastName: ""});
    };

    deleteMember = (member) => {
        let newTeamMembers = this.state.teamMembers.filter(teamMember => {
            return teamMember !== member;
        });
        this.setState({teamMembers: newTeamMembers});
    };

    render() {
        return (
            <div className={"container"} style={{paddingTop: "50px"}}>
                <div className={"row"}>
                    <h2 className={"mx-auto"}>Dream team</h2>
                </div>

                <div className={"row"}>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Controls</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.teamMembers.map(member => {
                            return <TeamMemberRow member={member} deleteMember={this.deleteMember}/>
                        })}
                        </tbody>
                    </table>
                </div>
                <div className={"row"}>
                    <form>
                        <table className="table">
                            <tbody>
                            <tr>
                                <td>First Name:</td>
                                <td><input type="text"
                                           name="firstName"
                                           value={this.state.firstName}
                                           onChange={this.handleInputChange}/></td>
                            </tr>

                            <tr>
                                <td>Last Name:</td>
                                <td><input type="text"
                                           name="lastName"
                                           value={this.state.lastName}
                                           onChange={this.handleInputChange}/></td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                <button className={"btn btn-primary"} onClick={this.addNewMember}> Submit!</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </form>
                </div>

            </div>
        );
    }
}

const TeamMemberRow = (props) => {
    let {member, deleteMember} = props;
    return <tr>
        <td>{member.firstName}</td>
        <td>{member.lastName}</td>
        <td>
            <button onClick={() => deleteMember(member)}
                    className={"btn btn-danger"}>Delete</button></td>
    </tr>;
};
export default App;
