import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { AutoComplete } from 'material-ui';


export default class AutoCompleteName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOrder: null
    };
  }


  render() {
    const dataSourceConfig = {
      text:"nickname",
      value:"nickname_img"
    };   
    return (
      <div className="autocomplete">
        <MuiThemeProvider>
          <AutoComplete
            hintText="whose burrito?"
            dataSource={this.props.members}
            dataSourceConfig={dataSourceConfig}
            floatingLabelText="Name"
            fullWidth={false}
            maxSearchResults={7}
            filter={AutoComplete.caseInsensitiveFilter}
            onNewRequest={(currentOrder) => this.setState({currentOrder})}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}
