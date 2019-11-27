import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Huasteca from '../Assets/huasteca.png';
import Playa from '../Assets/playadelcarmen.jpg';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 800,
    marginLeft: 45,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expandedId, setExpandedId] = React.useState(-1);

  const handleExpandClick = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  };

  return (
    <Grid container>
        <Grid item sm={6}>    
            <Card className={classes.card}>
            <CardHeader
                title="Limpiando la huasteca"
                subheader="24 de noviembre de 2019"
            />
            <CardMedia
                className={classes.media}
                image={Huasteca}
                title="Huasteca"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Vamos a darle con todo para llegar al punto donde La Huasteca esté limpia no por cuánto la recogemos, sino por lo que no la ensuciamos.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expandedId === 0,
                })}
                onClick={() => handleExpandClick(0)}
                aria-expanded={expandedId === 0}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expandedId === 0} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>
                    “Una ventana rota no reparada es una señal de que a nadie le importa, por lo tanto romper más ventanas no tiene costo alguno.” - James Q. Wilson
                </Typography>
                <Typography paragraph>
                    El Parque Ecológico La Huasteca es un ícono de la Ciudad Metropolitana de Monterrey. Sin embargo, entre toda la actividad que se lleva a cabo en ella, estamos también teniendo un impacto no muy positivo. Al mismo tiempo que gente responsablemente la disfruta y la deja inclusive mejor de como la encontró, otros la vandalizan pintando grafitis en sus paredes, tirando basura, levantando piedra ilegalmente, entre otras acciones.
                    El problema va mucho más allá de los grafitis y su limpieza es indispensable junto con su debido diagnóstico e involucramiento de actores clave para resolver el problema desde la raíz. Existe una teoría llamada "La teoría de los vidrios rotos”, la cual sostiene que:
                </Typography>
                <Typography paragraph>
                    1) Al “restaurar los vidrios rotos” (en este caso los grafitis, basura y otros “vidrios” mas) los crímenes menores y el comportamiento antisocial disminuirán, y
                </Typography>
                <Typography paragraph>
                    2) Que los crímenes de primer grado, como resultado, se prevendrán.
                </Typography>

                <Typography paragraph>
                    Este fenómeno existe en muchos lados y seguramente nos hemos visto inmersos en él como dice @danysantoscantu, en aquél restaurante de paredes pintadas hemos hecho lo mismo para dejar huella en esa biblia de nombre que ya ni caben.
                </Typography>
                <Typography>
                    Con todo el respeto a quienes hacen del grafiti un arte, el colocarlo como lo hacen en las paredes de la Huasteca es vandalismo y por ello decidimos intervenir. Como parte de este programa de medio ambiente en La Huasteca que estamos llevando a cabo en @juntosjxp junto con @washteca y otros aliados, este sábado realizamos una brigada de limpieza con @cuatro.tortas, @puenteycoma, voluntarios foráneos que se nos unieron en el momento y un comerciante local que lleva 5 años en la zona (Roger, El Elote Feliz). .
                    Se lograron limpiar 12 grafitis, +20 m2, utilizar 20% del agua que en anteriores ocasiones, involucrar a 19 voluntarios, documentar el proceso y plantear las bases para lo que sigue.          
                    </Typography>
                </CardContent>
            </Collapse>
            </Card>
        </Grid>
        <Grid item sm={6}>    
            <Card className={classes.card}>
            <CardHeader
                title="PIAO 🌊 E00 "
                subheader="24 de noviembre de 2019"
            />
            <CardMedia
                className={classes.media}
                image={Playa}
                title="Playa"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Escucha nuestro podcast donde sacamos un episodio nuevo cada domingo.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expandedId === 1,
                })}
                onClick={() => handleExpandClick(1)}
                aria-expanded={expandedId === 1}
                aria-label="show more"
                >
                <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expandedId === 1} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>
                    El equipo de Juntos Podemos se dirige a Playa del Carmen, México, para llevar a cabo el Proyecto de Impacto Ambiental Oceánico JxP 2019. Les espera una gran aventura, interesantes personajes, historias y mucho por descubrir.                </Typography>
                <Typography paragraph>
                    ¡Inicia la aventura!
                </Typography>
                </CardContent>
            </Collapse>
            </Card>
        </Grid>
    </Grid>

  );
}