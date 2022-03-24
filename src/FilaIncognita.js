import { Row, Col, Input } from 'antd';
import {recalcular} from './configuracion'

function FilaIncognita({indice, incognita}){
    return(<div>
        <p> </p>
        <Row>
            <Col span={4} >
              Incógnita {indice+1}:
            </Col>
            <Col span={10} className='casilla'>
              <Input 
                value={incognita.x.get()}
                onChange={(e) => {
                    incognita.x.set(e.target.value);
                    recalcular();
                }}
               />
            </Col>
            <Col span={10} className='casilla'>
              {incognita.y.get()}
            </Col>
          </Row>
    </div>)
}

export default FilaIncognita;