import React from 'react'
import AddEntryPage from '../pages/AddEntryPage'

class AddMedia extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            errror: null,
            isLoaded: false,
            category: {},
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
    }

    render() {
        const { error, isLoaded, category } = this.state;
        return AddEntryPage(category);
    }
};

export default AddMedia