import React from 'react';
import Seat from './Seat';

class SeatSelector extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      performance_id: props.performance_id
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3004/performances/${this.state.performance_id}/seats`)
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
  render() {
      const { error, isLoaded, items } = this.state;

      if (!items) {
        return "Loading";
      }

      return (
        <div>
          {items.map((seat, i) => (
            <Seat label={seat.label}/>
          ))}
        </div>
      );
  }
}

export default SeatSelector;