import React, { Component } from 'react';
import {Button, Input} from 'mdbreact';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  fetchWeather  from './../actions/index';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {term: ''}

        //this.onInputChange = this.onInputChange.bind(this);
        //this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange = (event) => {
        this.setState({term: event.target.value})
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
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

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

//Here the first argument is null because, mapDispatchToProps goes in as the second argument in connect
// and the search bar container doesn't need to access the state of application so mapStateToProps
//is not required here and thus null

