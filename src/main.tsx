import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/antd.css';
import App from './App'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <DndProvider backend={HTML5Backend}>
        <App/>
      </DndProvider>
  </React.StrictMode>
)
