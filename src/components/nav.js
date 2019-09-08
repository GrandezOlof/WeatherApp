import React from 'react'

export default class Nav extends React.Component {
    render() {
        return (
            <div>
            <nav className="blue-grey darken-1">
                <div className="nav-wrapper container ">
                <a href="weather" className="brand-logo center">Weather</a> 
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="home">Home</a></li>
                </ul>
                </div>
            </nav>
            </div>
        )
    }
}
