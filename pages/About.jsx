import React from 'react'

export default function About(){
  return (
      <main className="about--main">
        <section className="about--hero"></section>
        <section className="about--info">
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉) 
            <br />
            <br />
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
          </p>
          
          <div className="about--cta">
            <h3>Your destination is waiting. 
            <br />
            Your van is ready.</h3>
            <button>Explore our vans</button>
          </div>
        </section>
      </main>
  )
}