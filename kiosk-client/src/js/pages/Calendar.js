import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PerformanceCalendar from '../components/PerformanceCalendar';

function Calendar(props) {
  return (
      <div>
          <Paper elevation={1} style={{margin: '24px 0', padding: '16px'}}>
              <Typography variant="h5" component="h3">
                  Select a performance
              </Typography>
              <Typography component="p">
                  This is a calendar allowing the user to select the performance that they are interested in
              </Typography>
          </Paper>
          <PerformanceCalendar production_id={props.match.params.production_id} />
      </div>
  );
}

export default Calendar;