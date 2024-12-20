import React from 'react'

export const AllMedia = () => {

    class AllMedia extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                error: null,
                isLoaded: false,
                category: {},
                medias: []
            }
        }
    
        componentDidMount(){
            const queryParameters = new URLSearchParams(window.location.search);
            const categoryId = queryParameters.get("categoryId");

            
            fetch('http://localhost:8080/categories/'+categoryId)
                .then(res => res.json())
                .then(
                    (result) => {
                        this.setState({
                            isLoaded: true,
                            category: result
                        });
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
            });
                
            fetch('http://localhost:8080/categories/'+categoryId+"/media")
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
            const { error, isLoaded, category, medias } = this.state;
            return UserListPage(category, medias);
        }
    };
    
}

export default UserList
