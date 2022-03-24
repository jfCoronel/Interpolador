import { Row, Col, Input } from 'antd';
import {recalcular} from './configuracion'

function FilaDato({indice, dato}){
    return(<div>
        <p> </p>
        <Row>
            <Col span={4} >
              Dato {indice+1}:
            </Col>
            <Col span={10} className='casilla'>
              <Input 
                value={dato.x.get()}
                onChange={(e) => {
                    dato.x.set(e.target.value);
                    recalcular();
                }}
               />
            </Col>
            <Col span={10} className='casilla'>
              <Input
                value={dato.y.get()}
                onChange={(e) => {
                    dato.y.set(e.target.value);
                    recalcular();
                }}
              />
            </Col>
          </Row>
    </div>)
}

export default FilaDato;