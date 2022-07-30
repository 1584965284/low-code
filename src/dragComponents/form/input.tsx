import { Input } from "antd"
import React from "react"
import { DragCompontConfig, useDragCompont } from "../../hooks/useDragCompont"
interface DragButtonProps{
  style?:React.CSSProperties
  itemType:string
}
const DragInput:React.FC<DragButtonProps> =(props)=>{
  const config:DragCompontConfig = {
    Component:<Input type={"text"}/>,
    key:props.itemType,
    type:"input",
  }
 const DragInput = useDragCompont(config)
  return (
    <div key={config.key} style={props.style}>
      {DragInput}
    </div>
  )
}
export {
  DragInput
}
