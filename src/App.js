import './interpolador.css';
import {
  LineChartOutlined
} from '@ant-design/icons';
import { Row, Col, InputNumber, Input } from 'antd';
import { useState } from '@hookstate/core';
import { configuracion } from './configuracion'

function App() {
  const conf = useState(configuracion);
  return (
    <div className="contenido">
      <h1> <LineChartOutlined /> Interpolador</h1>

      <Row>
        <Col span={12}>
          <InputNumber 
            addonBefore="N. de variables independientes" 
            min={1} 
            max={2} 
            style={{ width: 300 }}
            value={conf.nVarInd.get()}
            onChange={(value) => {
              conf.nVarInd.set(value);
            }}

            />

          <p></p>
          <InputNumber 
            addonBefore="N. de puntos conocidos" 
            min={1} 
            max={5} 
            style={{ width: 250 }} 
            value={conf.nPuntosDato.get()}
            onChange={(value) => {
              conf.nPuntosDato.set(value);
            }}

            />
          <p></p>
          <p></p>
          <Row>
            <Col span={4} >
              Punto:
            </Col>
            <Col span={10} className='casilla'>
              <Input 
                value={conf.nombreVarInd1.get()}
               />
            </Col>
            <Col span={10} className='casilla'>
              <Input
                value={conf.nombreVarDep.get()}
              />
            </Col>
          </Row>

        </Col>
        <Col span={12}>
          Gráfico ...
        </Col>
      </Row>

      <p></p>
      <div className='pie'>
        <a href="https://personal.us.es/jfc/interpolador" target="blank">Interpolador</a> es una herramienta para interpolar valores
        <p><a href="http://jfc.us.es" target="blank">©jfc</a>-2022, Versión: {conf.version.get()} </p>
      </div>
    </div>

  );
}

export default App;
