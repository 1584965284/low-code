import { DragCompontConfig, useDragCompont} from "../hooks/useDragCompont"
interface TransComponentProps extends DragCompontConfig {
  style?:React.CSSProperties
}
const TransComponent:React.FC<TransComponentProps> = (props)=>{
  const DragCompont = useDragCompont(props)
  return <div style={props.style}>
    {DragCompont}
  </div>
}

export default TransComponent
