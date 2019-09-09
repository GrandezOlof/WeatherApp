import React from 'react'

export default class Navbar extends React.Component {
    render() {
        return (
            <nav class="nav-extended">
                <div class="nav-wrapper">
                    <a href="Home" class="brand-logo">WEATHER</a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="Home">Home</a></li>
                    </ul>
                </div>
                <div class="nav-content">
                    <span class="nav-title">Olof Grandez</span>
                </div>
            </nav>
        )
    }
}
