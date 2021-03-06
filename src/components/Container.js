import React from 'react'
import Weather from './Weather';
import WeatherList from './WeatherList';
import SearchBar from "./Searchbar";
import Favorites from './Favorites';

const apiKey = "bb8b44127b0db4748764b963644915d6";
const url = "http://api.openweathermap.org/data/2.5/";

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          Weather: [],
          Temp: [],
          MoreInfo: [],
          WeatherDescription: [],
          favorites: []
        };
      }

      componentDidMount(){
        navigator.geolocation.getCurrentPosition((p) => {
            //Current weather data API
            fetch(`${url}weather?lat=${p.coords.latitude}&lon=${p.coords.longitude}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(json => this.setState({
                Weather: json,
                Country: json.sys.country,
                Temp: json.main.temp,
                Humidity: json.main.humidity,
                Pressure: json.main.pressure,
                Wind: json.wind.speed,
                Icon: json.weather[0].icon,
                WeatherDescription: json.weather[0].description,
                Max: json.main.temp_max,
                Min: json.main.temp_min,
            }));
            //forecast API
            fetch(`${url}forecast?lat=${p.coords.latitude}&lon=${p.coords.longitude}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(json => this.setState({
                MoreInfo: json.list
                
            }));
        });
    }

    handleSearch = (e) => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        //Current weather data API
        fetch(`${url}weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(json => this.setState({
                Weather: json,
                Temp: json.main.temp,
                Country: json.sys.country,
                Humidity: json.main.humidity,
                Pressure: json.main.pressure,
                Wind: json.wind.speed,
                Icon: json.weather[0].icon,
                WeatherDescription: json.weather[0].description,
                Max: json.main.temp_max,
                Min: json.main.temp_min,
            }));
            //forecast API
            fetch(`${url}forecast?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => response.json())
            .then(json => this.setState({
                MoreInfo: json.list
            }));
    }

    handleFavorites = () => {
        
        if(localStorage.length !== 0){
            this.setState({
                favorites: JSON.parse(localStorage.getItem('Favorites'))
            });
        }
    }

    getFavorite = (e) => {

        e.preventDefault();

        const city = e.target.innerHTML;
        //Current weather data API
        fetch(`${url}weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(json => this.setState({
            Weather: json,
            Temp: json.main.temp,
            Country: json.sys.country,
            Humidity: json.main.humidity,
            Pressure: json.main.pressure,
            Icon: json.weather[0].icon,
            Wind: json.wind.speed,
            WeatherDescription: json.weather[0].description,
            Max: json.main.temp_max,
            Min: json.main.temp_min
        }));
        //forecast API
        fetch(`${url}forecast?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(json => this.setState({
            MoreInfo: json.list
        }));
    }

    addFavorite = (e) => {
        if(localStorage.length !== 0){
            let allFavorites = [...this.state.favorites, e.target.innerHTML];
            this.setState({
                favorites: allFavorites
            })
            localStorage.setItem('Favorites', JSON.stringify(allFavorites));
        }
        else{
            let allFavorites2 = [e.target.innerHTML];
            console.log(allFavorites2);
            this.setState({
                favorites: allFavorites2
            })
            localStorage.setItem('Favorites', JSON.stringify(allFavorites2));
        }
    }



    render() {
        return (
            <div>
            <SearchBar search={this.handleSearch}/>
            <Weather weather={this.state.Weather}
            max={this.state.Max}
            min={this.state.Min}
            temp={this.state.Temp}
            country={this.state.Country}
            humidity={this.state.Humidity}
            pressure={this.state.Pressure} 
            wind={this.state.Wind}
            description={this.state.WeatherDescription}
            icon={this.state.Icon} 
            setFavorite={this.addFavorite}/>
            <WeatherList moreInfo={this.state.MoreInfo}/>
            <Favorites getFavorite={this.getFavorite} favorites={this.state.favorites}/>
            </div>
        )
    }
}

