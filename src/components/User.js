import React from 'react';

class User extends React.Component {
    render() {
        return (
            <div>
                <UserProfile name={this.props.name} type={this.props.type}/>
                <UserDetail age={this.props.age} job={this.props.job}/>
            </div>
        )
    }
}

class UserProfile extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <h2>{this.props.type}</h2>
            </div>
        )
    }
}

class UserDetail extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.age}</p>
                <p>{this.props.job}</p>
            </div>
        )
    }
}

export default User;