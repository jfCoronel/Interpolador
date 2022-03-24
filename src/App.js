import './interpolador.css';
import {
  LineChartOutlined
} from '@ant-design/icons';
import { Row, Col, InputNumber, Input } from 'antd';
import { useState } from '@hookstate/core';
import { configuracion, recalcular } from './configuracion'
import FilaDato from './FilaDato';
import FilaIncognita from './FilaIncognita';

function App() {
  const { nPuntosDato, nombreVarInd1, nombreVarDep,
    version, datos, nPuntosIncognita, incognitas } = useState(configuracion);

  const resetDatos = (nNew, nOld) => {
    let nCopia = nOld;
    if (nNew < nOld) {
      nCopia = nNew;
    }
    let nuevosDatos = []
    for (let i = 0; i < nCopia; i++) {
      nuevosDatos.push({ x: datos[i].x.get(), y: datos[i].y.get() });
    }
    //Resto
    for (let i = nCopia; i < nNew; i++) {
      nuevosDatos.push({ x: (i + 1), y: (i + 1) * (i + 1) });
    }
    datos.set(nuevosDatos);
  }

  const resetIncognitas = (nNew, nOld) => {
    let nCopia = nOld;
    if (nNew < nOld) {
      nCopia = nNew;
    }
    let nuevosIncognitas = []
    for (let i = 0; i < nCopia; i++) {
      nuevosIncognitas.push({ x: incognitas[i].x.get(), y: incognitas[i].y.get() });
    }
    //Resto
    for (let i = nCopia; i < nNew; i++) {
      nuevosIncognitas.push({ x: (i + 1), y: 0 });
    }
    incognitas.set(nuevosIncognitas);
  }

  return (
    <div className="contenido">
      <h1 className='titulo'> <LineChartOutlined /> Interpolador</h1>

      <Row>
        <Col span={12}>
          <p></p>
          <InputNumber
            addonBefore="N. de puntos conocidos"
            min={2}
            max={10}
            style={{ width: 250 }}
            value={nPuntosDato.get()}
            onChange={(value) => {
              if (value != nPuntosDato.get()) {
                resetDatos(value, nPuntosDato.get());
              }
              nPuntosDato.set(value);
              recalcular();
            }}

          />
          <p></p>
          <p></p>
          <Row>
            <Col span={4} >
              Nombres:
            </Col>
            <Col span={10} className='casilla'>
              <Input
                value={nombreVarInd1.get()}
                onChange={(e) => {
                  nombreVarInd1.set(e.target.value);
                }}
              />
            </Col>
            <Col span={10} className='casilla'>
              <Input
                value={nombreVarDep.get()}
                onChange={(e) => {
                  nombreVarDep.set(e.target.value);
                }}
              />
            </Col>
          </Row>
          {datos.map(function (dato, i) {
            return (<FilaDato key={i} indice={i} dato={dato} />)
          })}

          <p></p>
          <InputNumber
            addonBefore="N. de puntos a interpolar"
            min={1}
            max={10}
            style={{ width: 250 }}
            value={nPuntosIncognita.get()}
            onChange={(value) => {
              if (value != nPuntosIncognita.get()) {
                resetIncognitas(value, nPuntosIncognita.get());
              }
              nPuntosIncognita.set(value);
              recalcular();
            }}
          />

          {incognitas.map(function (incognita, i) {
            return (<FilaIncognita key={i} indice={i} incognita={incognita} />)
          })}

        </Col>

        <Col span={12}>
          Gráfico ...
        </Col>
      </Row>

      <p></p>
      <div className='pie'>
        <a href="https://personal.us.es/jfc/interpolador" target="blank">Interpolador</a> es una herramienta para interpolar valores
        <p><a href="http://jfc.us.es" target="blank">©jfc</a>-2022, Versión: {version.get()} </p>
      </div>
    </div>

  );
}

export default App;
