import React from 'react'
import AddEntryPage from '../pages/AddEntryPage'

class AddEntry extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            errror: null,
            isLoaded: false,
            categories: [],
        }
    }

    componentDidMount(){
        fetch('http://localhost:8080/categories')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        categories: result
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
        const { error, isLoaded, categories } = this.state;
        return AddEntryPage(categories);
    }
};

export default AddEntry