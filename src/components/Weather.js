import React from 'react'
import Time from "./Time"

 
export default class Weather extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="container">
                    <div className="card-content">
                        <hr/>
                        <h3 className="text">{this.props.weather.name}</h3>
                        <h5 className="text">{this.props.country}</h5>
                        <h6 className="text"><Time/></h6>
                        <h6 className="text">Temperature: {this.props.temp}°C</h6>
                        <h6 className="text">Humidity: {this.props.humidity}%</h6>
                        <h6 className="text">Description: {this.props.description}</h6>
                        <h6 className="text">Pressure: {this.props.pressure} hPa</h6>
                        <h6 className="text">Wind: {this.props.wind} m/s</h6>
                        <img src={`http://openweathermap.org/img/wn/${this.props.icon}.png`} alt="weather icon"/>
                        <h6 className="text">Add to Favorites</h6>
                        <button onClick={this.props.setFavorite} className="waves-effect waves-light btn black marginFix">{this.props.weather.name}</button>
                           
                    </div>
                </div>
            </div>
        )
    }
}