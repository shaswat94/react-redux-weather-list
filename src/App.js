import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/search_bar';
import WeatherList from './containers/weather_list';
import NotificationContainer from './containers/notification';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <WeatherList />
        <NotificationContainer props/>
      </div>
    );
  }
}

export default App;
