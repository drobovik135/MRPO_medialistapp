import React from 'react'

export const AllMedia = () => {

    class AllMedia extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                error: null,
                isLoaded: false,
                medias: []
            }
        }
    
        componentDidMount(){
            fetch('http://localhost:8080/medias')
              .then(res => res.json())
              .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        medias: result
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
            const { error, isLoaded, medias } = this.state;
            return UserListPage(medias);
        }
    };
    
}

export default UserList
