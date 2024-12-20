import React from 'react'
import AddEntryPage from '../pages/AddEntryPage'

class AddTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            errror: null,
            isLoaded: false,
            user: {},
        }
    }

    componentDidMount(){
        const queryParameters = new URLSearchParams(window.location.search);
        const userId = queryParameters.get("user_id");

        fetch('http://localhost:8080/users/'+userId)
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
    }

    render() {
        const { error, isLoaded, user } = this.state;
        return AddEntryPage(user);
    }
};

export default AddTable