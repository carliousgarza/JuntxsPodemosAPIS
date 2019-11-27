import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Techo from '../Assets/techo.png';
import O2 from '../Assets/o2.png';
import QuimeraVerde from '../Assets/quimeraverde.png';
import DistritoTec from '../Assets/distritotec.png';
import Xum from '../Assets/xum.png';
import Ciclica from '../Assets/ciclica.png';
import HambreCero from '../Assets/hambrecero.png';
import Sosac from '../Assets/sosac.png';
import Washteca from '../Assets/washteca.png';

const styles = theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url: `url(${O2})`,
      title: '+O2',
      link: 'http://globalo2.org/',
      width: '40%',
    },
    {
      url: `url(${Techo})`,
      title: 'Techo',
      link: 'https://www.techo.org/',
      width: '20%',
    },
    {
      url: `url(${QuimeraVerde})`,
      title: 'Quimera Verde',
      link: 'https://es-la.facebook.com/SomosQuimeraVerde/',
      width: '40%',
    },
    {
      url: `url(${Washteca})`,
      title: 'Washteca',
      link: 'https://www.facebook.com/Washteca/',
      width: '38%',
    },
    {
      url: `url(${Xum})`,
      title: 'Por Un Mañana',
      link: 'https://instagram.com/xum_mx?igshid=1wysayiwxf3ci',
      width: '38%',
    },
    {
      url: `url(${Ciclica})`,
      title: 'Ciclica ',
      link: 'https://www.ciclica.com.mx/',
      width: '24%',
    },
    {
      url: `url(${DistritoTec})`,
      title: 'Distrito Tec',
      link: 'http://distritotec.itesm.mx/',
      width: '40%',
    },
    {
      url: `url(${HambreCero})`,
      title: 'Hambre Cero',
      link: 'https://www.hambreceronl.mx/',
      width: '20%',
    },
    {
      url: `url(${Sosac})`,
      title: 'Sosac',
      link: 'https://www.sosac.org/',
      width: '40%',
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <div className={classes.images}>
        {images.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
            href={image.link}
            target="_blank"
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: image.url,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

export default withStyles(styles)(ProductCategories);
