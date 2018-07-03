import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  }
};

class Tabbar extends Component {

  state = {
    tab: 0
  };

  handleTabChange = (event, value) => {
    this.setState({ tab: value });
  };

  render() {
    const { classes } = this.props;
    const { tab } = this.state;
    return (
      <div className={classes.root}>
        <AppBar position="absolute">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Github Users
            </Typography>
          </Toolbar>
          <Tabs
            centered
            fullWidth
            value={tab}
            onChange={this.handleTabChange}>
            <Tab label="Profile" />
            <Tab label="Repositories" />
          </Tabs>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Tabbar);