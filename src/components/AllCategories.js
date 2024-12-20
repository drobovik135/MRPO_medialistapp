import React from 'react'
//import MyListTablePage from '../pages/MyListTablePage'

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
        return AddMediaPage(categories);
    }
};

export default AddEntry