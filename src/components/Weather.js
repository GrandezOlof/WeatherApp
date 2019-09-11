import React from 'react';
import Time from './Time'

 
export default class Weather extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="container">
                    <div className="card-content">
                        <h3 className="text">{this.props.weather.name}</h3>
                        <h5 className="text">{this.props.country}</h5>
                        <h6 className="text"><Time/></h6>
                        <h5 className="text">Temperature: {this.props.temp} °C</h5>
                        <img src={`http://openweathermap.org/img/wn/${this.props.icon}.png`} alt="weather icon"/>
                        <br/>
                        <h6 className="text">Max: {this.props.max} °C</h6>
                        <h6 className="text">Min: {this.props.min} °C</h6>
                        <h6 className="text">Humidity: {this.props.humidity}%</h6>
                        <h6 className="text">Description: {this.props.description}</h6>
                        <h6 className="text">Pressure: {this.props.pressure} hPa</h6>
                        <h6 className="text">Wind: {this.props.wind} m/s</h6>
                        <br/>
                        <i class="material-icons">favorite</i>
                        <br/>
                        <button onClick={this.props.setFavorite} className="btn btn-primary">{this.props.weather.name}</button>
                    </div>
                </div>
            </div>
        )
    }
}