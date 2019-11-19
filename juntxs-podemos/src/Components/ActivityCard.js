import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class ActivityCard extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          card: {
            minWidth: 275,
          },
          pos: {
            marginBottom: 12,
          }
      };
  }

  render() {
      return (
        <Card className={this.state.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {this.props.title}
            </Typography>
            <Typography className={this.state.pos} color="textSecondary">
              {this.props.category}
            </Typography>
            <Typography variant="body2" component="p">
              {this.props.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Registrate</Button>
          </CardActions>
        </Card>
      );
  }
}
export default ActivityCard;
