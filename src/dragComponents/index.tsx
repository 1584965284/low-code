import { Card } from 'antd';
import { DragButton } from './button';
import { DragInput } from './form/input';
const DragArea = ()=>{
  return (
    <Card title="Drag and drop components" extra={<a href="#">More</a>}>
      <DragButton style={{cursor:"move"}} itemType={`button-${Date()}`}></DragButton>
      <DragInput style={{cursor:"move"}} itemType={`input-${Date()}`}></DragInput>
    </Card>
  )
}
export {DragArea}
