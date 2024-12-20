import React from 'react'
import MyListTablePage from '../pages/MyListTablePage'

class MyListTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            errror: null,
            isLoaded: false,
            table: {},
            entries: []
        }
    }

    componentDidMount(){
        const queryParameters = new URLSearchParams(window.location.search);
        const tableId = queryParameters.get("id");


        fetch('http://localhost:8080/tables/'+ tableId)
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

        fetch('http://localhost:8080/tables/'+ tableId+"/entries/full")
            .then(res => res.json())
            .then(
              (result) => {
                  this.setState({
                      isLoaded: true,
                      entries: result
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
        const { error, isLoaded, table, entries } = this.state;
        return MyListTablePage(table, entries);
    }
};

export default MyListTable