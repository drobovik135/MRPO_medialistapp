import React from "react";
import UserPage from "../pages/UserPage";

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
        const id = queryParameters.get("id");

        fetch('http://localhost:25565/users/'+ id)
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

        fetch('http://localhost:25565/users' + id + "/table")
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
        return UserPage(user, lists);
    }
};

export default User