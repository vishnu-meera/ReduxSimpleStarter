import React, {Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {term:'starting value'}
    };
    render(){
        return (
            <div>
                <input 
                    value={this.state.term} //controlled component, value set by state
                    onChange={this.onInputChange}/>
            </div>
        );
    };

    onInputChange = event=>{
        this.setState({
            term:event.target.value
        });
    };
};

export default SearchBar;