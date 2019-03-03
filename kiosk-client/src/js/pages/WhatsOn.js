import React from 'react';
import ProductionCard from '../components/ProductionCard';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

class WhatsOn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
        fetch("http://localhost:3004/productions")
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
                <Paper elevation={1} style={{margin: '24px 0', padding: '16px'}}>
                    <Typography variant="h5" component="h3">
                        What's On
                    </Typography>
                    <Typography component="p">
                        This is a grid representing all of the productions that are "Published"
                    </Typography>
                </Paper>
                <Grid container spacing={24}>
                    {items.map((item, i) => (
                        <Grid item xs={6} sm={3} key={i} >
                            <ProductionCard id={item.id} title={item.title} img={item.img} date={item.date} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}

export default WhatsOn;