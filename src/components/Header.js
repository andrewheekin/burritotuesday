import React, { Component } from 'react';

export default class Header extends Component {
  getCurrentWeek() {
    var today = new Date();
    var firstRitos = new Date('8/12/13'); // first burrito tuesday
    return Math.round((today-firstRitos)/604800000); // miliseconds in a week
  }

  render() {
    return (
      <div className="header">
        <h1>Burrito Tuesday - Week {this.getCurrentWeek()}</h1>
      </div>
    );
  }
};
