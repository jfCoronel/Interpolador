import { createState } from '@hookstate/core';

const configuracionInicial = {
  version: 0.1,
  nCifras: 4,
  nVarInd: 1,
  nPuntosDato: 2,
  nombreVarInd1: "X",
  nombreVarInd2: "Y",
  nombreVarDep: "Y",
  datos: [{x:1,y:2},{x:2,y:4}],
  nPuntosIncognita: 1,
  incognitas: [{x:1,y:2}],
}

export const configuracion = createState(configuracionInicial);

export const recalcular = () => {  // recalcular los y
  configuracion.incognitas.forEach((incognita) => {
    const x = incognita.x.get();
    let x0 = configuracion.datos[0].x.get();
    let x1 = configuracion.datos[1].x.get();
    let y0 = configuracion.datos[0].y.get();
    let y1 = configuracion.datos[1].y.get();
    for(let i=1; i<configuracion.datos.length-1; i++ ){
      if (x > configuracion.datos[i].x.get()){
        x0 = configuracion.datos[i].x.get();
        x1 = configuracion.datos[i+1].x.get();
        y0 = configuracion.datos[i].y.get();
        y1 = configuracion.datos[i+1].y.get();
      }
    }
    const y = y0 + (y1-y0) * (x-x0) / (x1-x0);
    incognita.y.set(y);
  });

}