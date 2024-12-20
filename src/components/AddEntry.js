import React from 'react'
//import MyListTablePage from '../pages/MyListTablePage'

class AddEntry extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            errror: null,
            isLoaded: false,
            tableId: 0,
            medias: [],
        }
    }

    componentDidMount(){
        const queryParameters = new URLSearchParams(window.location.search);
        const tableId = queryParameters.get("tableId");
        this.state.tableId = tableId;

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
        const { error, isLoaded, tableId, medias } = this.state;
        return AddEntryPage(tableId, medias);
    }
};

export default AddEntry