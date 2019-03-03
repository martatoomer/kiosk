import React from 'react'
import {withRouter} from 'react-router-dom';
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'

class PerformanceCalendar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      production_id: props.production_id
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3004/productions/${this.state.production_id}/performances`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  selected(event) {
    // console.log(this);
    // console.log(event);
    this.props.history.push(`/performance/${event.id}`);
  }

  render() {
      const { error, isLoaded, items, production_id } = this.state;

      const localizer = BigCalendar.momentLocalizer(moment);

      if (!items) {
        return "Loading";
      }

      items.map(perf => {
        perf.start = new Date(perf.start);
        perf.end = new Date(perf.end);
      })

      return (
          <BigCalendar
            localizer={localizer}
            events={items}
            startAccessor="start"
            endAccessor="end"
            onSelectEvent={event => this.selected(event)}
          />
      );
  }
}

export default withRouter(PerformanceCalendar);