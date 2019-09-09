import React from 'react'
 
export default class SearchBar extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.search}>
                <div className="input-field center">
                    <input className="black-text" id="search" type="search" name="city" placeholder="Search City"/>
                    <label className="label-icon"></label>
                    <i class="material-icons">close</i>
                </div>
            </form>
        )
    }
}