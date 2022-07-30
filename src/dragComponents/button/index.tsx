import { Button } from "antd"
import React from "react"
import { DragCompontConfig, useDragCompont } from "../../hooks/useDragCompont"
interface DragButtonProps{
  style:React.CSSProperties
  itemType:string
}
const DragButton:React.FC<DragButtonProps> =(props)=>{
  const config:DragCompontConfig = {
    Component:<Button type={"primary"}> cherry </Button>,
    key:props.itemType,
    type:"button",
  }
 const DragButton = useDragCompont(config)
  return (
    <div key={config.key} style={props.style}>
      {DragButton}
    </div>
  )
}
export {
  DragButton
}
