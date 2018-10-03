import React, { Component } from 'react';
import {Button, Input} from 'mdbreact';

export default class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {term: ''}

        //this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange = (event) => {
        console.log(event.target.value);
        this.setState({term: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit}>
                <div className="input-field">
                    <Input label="Search city" size="sm" 
                       onChange={this.onInputChange}
                       value={this.state.term} />
                </div>
                
                <Button  color="primary" type="submit">Search</Button>
            </form>
        );
    }
}
