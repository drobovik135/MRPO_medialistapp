import React from 'react'
import AddEntryPage from '../pages/AddEntryPage'


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
        const categoryId = queryParameters.get("category_id");

        
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
        return AddEntryPage(category, medias);
    }
};

export default AllMedia
