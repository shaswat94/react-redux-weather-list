import React, {Component} from 'react';
import { Table, TableBody, TableHead} from 'mdbreact';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import {addNotification} from '../actions/index';

class WeatherList extends Component{

    renderWeather = (cityData) =>{

        if(!cityData){
            this.props.addNotification('City spelling not correct.', 'error');
            return;
        }
            
        const name = cityData.city.name;
        const temps = cityData.list.map( (weather) => weather.main.temp )
        console.log(temps);

        return(
            <tr key={cityData.city.id}>
                <td>{name}</td>
                <Sparklines height={100} width={100} data={temps}>
                    <SparklinesLine color="red"/>
                </Sparklines>
            </tr>
        );
    }

    render(){
        return(
            <Table borderless>
            <TableHead>
              <tr>
                <th>City</th>
                <th>Temperature</th>
                <th>Pressure</th>
                <th>Humidity</th>
              </tr>
            </TableHead>
            <TableBody>
              {this.props.weather.map(this.renderWeather )}
            </TableBody>
          </Table>
        );
    };
}

function mapStateToProps({ weather }){ 
    return{ weather }; // { weather } == { weather: weather }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addNotification}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherList);