import styled from "@emotion/styled"
import React, { useEffect, useState } from "react"
import {useDrag } from 'react-dnd'
export interface DragCompontConfig{
  Component:React.ReactElement
  type:string
  key:string
}
export type useDragCompontType = (config:DragCompontConfig)=>React.ReactElement
const useDragCompont:useDragCompontType = (config)=>{
  const { Component ,type,key} = config
  const [opacity,setOpacity] = useState(1)
  const [border,setBorder] = useState("")
  const [ {isDragging} , drag ] = useDrag({
    type,
    item:()=>({key}),
    collect:(monitor) =>({isDragging:monitor.isDragging()})
  })

  useEffect(()=>{
  if (isDragging) {
    setOpacity(.5)
    setBorder("2px dotted #0d6efd")
    return 
  }
  setOpacity(1)
  setBorder("")
  },[isDragging])

  return <DragConner ref={drag} key={key} style={{opacity,border}}>
    {Component}
  </DragConner>
}

const DragConner= styled.div`
    width:fit-content !important;
    height:auto;
    margin:5px;
    cursor:move
`

export {useDragCompont}
