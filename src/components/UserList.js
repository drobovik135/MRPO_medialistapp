import React from 'react'
import UserListPage from "../pages/UserListPage";

class UserList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            errror: null,
            isLoaded: false,
            users: []
        }
    }

    componentDidMount(){
        fetch('http://localhost:8080/users')
          .then(res => res.json())
          .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    users: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            });
    }

    render() {
        const { error, isLoaded, users } = this.state;
        return UserListPage(users);
    }
};

export default UserList