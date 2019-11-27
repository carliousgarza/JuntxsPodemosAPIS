import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Swal from "sweetalert2";


class ActivityCard extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          card: {
            minWidth: 275,
          },
          pos: {
            marginBottom: 12,
          },
      };
  }

  confirmAssistance = e => {
    Swal.fire({
      title: 'Registro a evento',
      text: "¿Estás seguro de tu registro?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Tu registro ha sido confirmado',
          '¡Te vemos pronto!',
          'success'
        )
      }
    })
  }
  render() {
      return (
        <div>
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
              <Button size="small" onClick={this.confirmAssistance} color="primary">Registrate</Button>
            </CardActions>
          </Card>
          <hr />
        </div>
      );
  }
}
export default ActivityCard;
