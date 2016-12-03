import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:1
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div className="menu">
        <MuiThemeProvider>
          <SelectField
            floatingLabelText="Burrito"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <MenuItem value={1} primaryText="Pork" />
            <MenuItem value={2} primaryText="Chicken" />
            <MenuItem value={3} primaryText="Shredded Chicken" />
            <MenuItem value={4} primaryText="Steak" />
            <MenuItem value={5} primaryText="Weekly" />
          </SelectField>
        </MuiThemeProvider>
      </div>
    )
  }
}
