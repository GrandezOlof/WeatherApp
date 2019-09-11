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
                <div className='cardStyleF' key={count}>
                    <div className="card-content">
                        <div className="text">
                        <span className="card-title text">{weather.dt_txt.slice(0, -8)}</span>
                        <br/><br/>
                            <img alt="" src={icon} />
                            <p>{weather.main.temp} °C</p>
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
                <div className="justify-content-center row">
                    {weatherList}
                </div>
            )
    }
}

