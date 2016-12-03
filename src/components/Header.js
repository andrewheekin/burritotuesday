import React, { Component } from 'react';

export default class Header extends Component {
  getCurrentWeek() {
    var today = new Date();
    var firstRitos = new Date(2013, 7, 13, 20); // first burrito tuesday, 8/13/2013 (month is zero-indexed)
    return Math.round((today-firstRitos)/604800000); // miliseconds in a week
  }

  render() {
    return (
      <div className="header">
        <h1>Burrito Tuesday - Week {this.getCurrentWeek()}</h1>
      </div>
    );
  }
}
