import React from 'react'
//import MyListTablePage from '../pages/MyListTablePage'

class AddEntry extends React.Component{
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
        const category = queryParameters.get("id");

        fetch('http://localhost:8080/categories/'+category)
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
        return AddMediaPage(category);
    }
};

export default AddEntry