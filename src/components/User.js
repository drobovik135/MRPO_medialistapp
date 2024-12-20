import React from "react";
import UserPage from "../pages/UserPage";
import UserListPage from "../pages/UserListPage";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            errror: null,
            isLoaded: false,
            user: {},
            lists: []
        }
    }

    componentDidMount(){
        const queryParameters = new URLSearchParams(window.location.search);
        const userId = queryParameters.get("user_id");

        fetch('http://localhost:8080/users/'+ userId)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        user: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                });

        fetch('http://localhost:8080/users/'+userId+"/table")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        lists: result
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
        const { error, isLoaded, user, lists } = this.state;
        if(error)
            return UserListPage();
        return UserPage(user, lists);
    }
};

export default User