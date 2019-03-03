import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const linkStyles = {
    textDecoration: "none"
}

function ProductionCard(props) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia style={{height: 140}}
          image={props.img}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { props.title }
          </Typography>
          <Typography component="p">
            {props.date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
            <Link to={"/calendar/" + props.id} style={linkStyles}>Buy Tickets</Link>
        </Button>
        <Button size="small" color="primary">
            <Link to={"/production/" + props.id} style={linkStyles}>Find Out More</Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductionCard;