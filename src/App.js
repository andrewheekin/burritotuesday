import React, { Component } from 'react';
import cookie from 'react-cookie';
import injectTapEventPlugin from 'react-tap-event-plugin'; injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import AutoComplete from 'material-ui/AutoComplete';
import Header from './components/Header';
import dudes from './dudes.json';


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dataSource: dudes.response.members,
    };
  }

  componentWillMount() {
    cookie.save('sahdude', 1234567);
  }

  // filter={AutoComplete.caseInsensitiveFilter, AutoComplete.fuzzyFilter}
  render() {

    const dataSourceConfig = {
      text:"nickname",
      value:"nickname"
    };

    return (
      <div>
        <Header />
        <div className="autocomplete">
          <MuiThemeProvider>
            <AutoComplete
              hintText="whose burrito?"
              dataSource={this.state.dataSource}
              dataSourceConfig={dataSourceConfig}
              floatingLabelText="Name"
              fullWidth={false}
              maxSearchResults={7}
              filter={AutoComplete.caseInsensitiveFilter}
              searchText={''}
            />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}


