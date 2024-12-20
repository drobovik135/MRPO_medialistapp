import React from 'react'
//import MyListTablePage from '../pages/MyListTablePage'

class AddEntrySuecess extends React.Component{
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
        fetch('http://localhost:8080/categories/', {
            method: 'POST',
            body: JSON.stringify({
                
            })
        })
        
    }

    render() {
        const { error, isLoaded, category } = this.state;
        return AddMediaPage(category);
    }
};

export default AddEntrySuecess