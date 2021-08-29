import React from 'react';
import Details from './components/Details/Details'
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import Main from './components/Main/Main';
import {PushToTalkButton, PushToTalkButtonContainer, ErrorPanel} from '@speechly/react-ui';

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{height : '100vh'}}>
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton  size="4rem"/>
        <ErrorPanel />
      </PushToTalkButtonContainer>
    </div>
  );
}

export default App;
