import React from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
var dt = new Date();

export default class DatePick extends React.Component {
  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
 
  render() {
    return (
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={this.state.startDate}
        onChange={this.handleChange}
        placeholderText="Select travel date"
        highlightDates={new Date()}
        minDate={new Date()}
        maxDate={new Date(dt.setMonth(dt.getMonth()+2))}
        showDisabledMonthNavigation
      />
    );
  }
}