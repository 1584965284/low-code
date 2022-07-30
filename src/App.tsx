import './App.css'
import { ViewArea } from './contanier'
import { DragArea } from './dragComponents'
import { Col, Row } from 'antd'
import { EditingArea } from './editingArea'

function App() {
  return (
    <div className="App">
      <Row>
      <Col span={4}>
      <DragArea></DragArea>
      </Col>
      <Col span={14}>
        <ViewArea></ViewArea>
      </Col>
      <Col span={6}>
        <EditingArea></EditingArea>
      </Col>
    </Row>
    </div>
  )
}

export default App
