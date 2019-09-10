import React from 'react'
 
export default class SearchBar extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.search}>
                <br/>
                <h6 className="white-text">Weather Conditions In Your City.</h6>
                <div className="input-field">
                    <input className="black-text" id="search" required type="search" name="city" placeholder="Search City"/>
                    <i class="material-icons">close</i>
                </div>
            </form>
        )
    }
}