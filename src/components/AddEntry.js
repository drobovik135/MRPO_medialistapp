import React from 'react'
import AddEntryPage from '../pages/AddEntryPage'

class AddEntry extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            errror: null,
            isLoaded: false,
            table: {},
            medias: [],
        }
    }

    componentDidMount(){
        const queryParameters = new URLSearchParams(window.location.search);
        const tableId = queryParameters.get("table_id");
        this.state.tableId = tableId;

        fetch('http://localhost:8080/tables/'+tableId)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        table: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
            });

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
        const { error, isLoaded, table, medias } = this.state;
        return AddEntryPage(table, medias);
    }
};

export default AddEntry