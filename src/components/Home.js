import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
    const navigate = useNavigate()
  return (
    <div>

<section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>save more coupons & up to 70% off!</p>
        <button onClick={() => navigate("/Product")}>Shop now</button> 
       
      </section>
    </div>
  )
}

export default Home