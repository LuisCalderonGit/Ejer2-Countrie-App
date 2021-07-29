import React from 'react';

// Importaciones para material ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// funcion necesaria para las clases y estilos de material ui
const useStyles = makeStyles({
    root: {
      maxWidth: 400,
    },
    media: {
        height: 120,
    },
    image:{
        width:100,
        height:100
    }
  });

//   funcion que solicita parametros para la impresion de los elementos devueltos por la api
export const GridCountrie = ({flag,name,region,subregion}) => {
    
    // invocaciones para usar material ui
    const classes = useStyles();


    return (
        <Grid item xs={6} sm={3}>
            <Card className={classes.root}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        alt="Banderas"
                        height="140"
                        image={flag}
                        title="Banderas paises"
                    />
                    <CardContent className={classes.media}>

                        <Typography align="center" variant="h5" component="h3">
                            {name}
                        </Typography>

                        <Typography variant="body2" component="p">
                        Region: {region}
                        </Typography>

                        <Typography variant="body2" component="p">
                        Subregion: {subregion}
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}
