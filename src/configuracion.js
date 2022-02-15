import { createState } from '@hookstate/core';

const configuracionInicial = {
  version: 0.1,
  nCifras: 4,
  nVarInd: 1,
  nPuntosDato: 2,
  nombreVarInd1: "x1",
  nombreVarInd2: "x2",
  nombreVarDep: "y"
}

export const configuracion = createState(configuracionInicial);