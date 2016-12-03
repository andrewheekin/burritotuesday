import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin'; injectTapEventPlugin();
import { MenuItem, Avatar } from 'material-ui';
import Header from './components/Header';
import AutoCompleteName from './components/AutoCompleteName';
import Menu from './components/Menu';
import dudes from './dudes.json';


export default class App extends Component {

  constructor(props) {
    super(props);

    // destructure members
    const { members } = dudes.response;
    // add nickname_img field consisting of a MenuItem to each person
    for (var i=0; i < members.length; i++) {
      members[i].nickname_img = (
        <MenuItem
          primaryText={members[i].nickname}
          rightAvatar={<Avatar src={members[i].image_url} />}
        />        
      );
    }

    this.state = {
      dataSource: members
    };
  }


  componentWillMount() {
    // cookie.save('name', 1234567);
  }

  render() {
    return (
      <div>
        <Header />
        <AutoCompleteName members={this.state.dataSource} />  
        <Menu />                   
        {/*<MuiThemeProvider>
          <Avatar src={this.state.currentOrder} />
        </MuiThemeProvider>*/}
      </div>
    );
  }
}


