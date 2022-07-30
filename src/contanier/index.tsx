import styled from '@emotion/styled'
import { useCallback, useRef, useState } from 'react'
import { useDrop } from 'react-dnd'

import { DragButton } from '../dragComponents/button'
import { DragInput } from '../dragComponents/form/input'

const ViewArea = ()=>{
  const ref = useRef(null)
  const [components, setComponents] = useState<{
    [key: string]: {
      key:string
      top: number
      left: number
    }
  }>({})
  function createComponet(config:any,index:number) {
    const style:React.CSSProperties = {
      position: "absolute",
      left: config.left + "px",
      top: config.top + "px"
    }
    const type = config.key.slice(0,config.key.indexOf("-"))
    switch (type) {
      case "input":
        return <DragInput itemType={config.key} key={index} style={style}></DragInput>
      case "button":
        return <DragButton itemType={config.key} key={index} style={style}></DragButton>
    }
  }
  const moveCopy = useCallback(
    (key: string, left: number, top: number) => {
      setComponents({...components,[key]:{key:key,left,top}})
    },
    [components, setComponents],
  )
  const [, dropbutton] =  useDrop({
    accept:"button",
    collect:(monitor)=>({}),
    drop(item:any, monitor) {
      const delta = monitor.getClientOffset() as any
      const left = Math.round(item.left ?? 0 + delta.x - 335)
      const top = Math.round(item.top ?? 0 + delta.y)
      moveCopy(item.key, left, top)
      return undefined
    },
  })
  const [, dropinput] =  useDrop({
    accept:"input",
    collect:(monitor)=>({}),
    drop(item:any, monitor) {
      const delta = monitor.getClientOffset() as any
      const left = Math.round(item.left ?? 0 + delta.x - 335)
      const top = Math.round(item.top ?? 0 + delta.y)
      moveCopy(item.key, left, top)
      return undefined
    },
  })
  dropbutton(ref)
  dropinput(ref)
  return (
    <Contanier ref={ref} style={{position: 'relative',}}>
     {(Object.keys(components)||[]).map((key,index)=>{
      return createComponet(components[key],index)
     })}
    </Contanier>
  )
}

const Contanier = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #d3d1d1;
  margin:0 auto;
`
export {ViewArea}
