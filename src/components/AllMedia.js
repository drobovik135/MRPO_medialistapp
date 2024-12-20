import React from 'react'

export const AllMedia = () => {

    class AllMedia extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                error: null,
                isLoaded: false,
                users: []
            }
        }
    
        componentDidMount(){
            fetch('http://localhost:8080/entries')
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
    
}

export default UserList
