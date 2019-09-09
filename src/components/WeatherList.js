import React from 'react'
 
export default class WeatherList extends React.Component{
    render(){
        const fivedays = (arr, eight) => arr.filter((e,i) => i % eight === eight - 1)
        const weatherArray =fivedays(this.props.moreInfo,8);
        var count = 0;

        const weatherList = weatherArray.map(weather => {
                let icon = "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png";
                count++;
                return(
                <div className="row" key={count}>
                    <div className="card-content">
                        <div className="text">
                        <span className="card-title text">{weather.dt_txt.slice(5, -9)}</span>
                            <p>+ {count} {count === 1 ? "day" : "days" }  </p>
                            <img alt="" src={icon} />
                            <p>{weather.weather.description }</p>
                            <p>
                                <span>Max: {weather.main.temp_max} °C</span>
                                <br/>
                                <span>Min: {weather.main.temp_min} °C</span>
                            </p>
                        </div>
                    </div>
                </div>
                )
            })
            return(
                <div className="valign-wrapper center">
                    {weatherList}
                </div>
            )
    }
}