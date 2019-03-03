import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import SeatSelector from '../components/SeatSelector';

class Performance extends React.Component {

    constructor(props) {
      super(props);
      
      this.state = {
        error: null,
        isLoaded: false,
        performance_id: props.match.params.performance_id
      };
    }
    
    componentDidMount() {
      fetch(`http://localhost:3004/performances/${this.state.performance_id}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              result: result
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
        const { error, isLoaded, result } = this.state;

        if (!result) {
          return "Loading";
        }

        return (
            <div>
                <Paper elevation={1} style={{margin: '24px 0', padding: '16px'}}>
                    <Typography variant="h5" component="h3">
                      <strong>Performance:</strong> {result.title}
                    </Typography>
                    <Typography component="p">
                        This page allows the user to select a seat
                    </Typography>
                </Paper>
                <SeatSelector performance_id={this.state.performance_id} />
            </div>
        );
    }
}

export default Performance;