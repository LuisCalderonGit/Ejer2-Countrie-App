import React, { useState, useEffect } from "react";

// importacion para el uso de material ui
import { GridCountrie } from "./components/GridCountrie";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


export const AppCountries = () => {
  
  // Evitar un bucle infinito al recargar la pagina 
  useEffect(() => {
    getCountries();
  }, [])

  // Cargar los valores de la api a una variabe
  const [Countries, setCountries] = useState([])

  // Consumo de la api y retorno de sus valores, especificndo los necesarios
  const getCountries = async () => {
    const url = "https://restcountries.eu/rest/v2/all";
    const res = await fetch(url);
    const dataCountries= await res.json();
    
    //especificamos los valores de mayor importancia para la app 
    const countries= dataCountries.map( countries =>{
      return{
        flag:countries.flag,
        name:countries.name,
        region:countries.region,
        subregion:countries.subregion
      }
      })
    
      // Cargamos los elementos al hook usestate 
    setCountries(countries)
  };


  return (
    <>
    <Typography align="center" variant="h3" component="h1" >Countries-App</Typography>
    <br/>
    <Grid container spacing={3}>
      {
            Countries.map(cnt=>(
              <GridCountrie 
                 key={cnt.name}
                {...cnt} /*Pasar de manera individual cada una de las propiedas */
                />
            ))
          }

    </Grid>
    </>
     
  );
};
