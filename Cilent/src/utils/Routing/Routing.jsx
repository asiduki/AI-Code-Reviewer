import React from 'react'
import Home from "../../Pages/Home"
import { Routes , Route } from 'react-router-dom'
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default Routing
