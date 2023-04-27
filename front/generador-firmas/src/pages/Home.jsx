import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <div className="home__container">
        <h1>Generador de firmas</h1>
        <div className="home__welcome__box">
          <h2>¡Bienvenid@!</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            unde quae autem fugit ipsa expedita id dolore provident, delectus
            nesciunt aut repellendus soluta natus dicta repudiandae suscipit
            voluptatem architecto. Beatae.
          </p>
        </div>
        <Link to={`/sign`}><button className="btn__primary">¡Empecemos!</button></Link>
      </div>
      <div className="home__logo">
        <img src="/latamly_group_logo.png" alt="Logo latamly group" />
      </div>
    </main>
  );
};

export default Home;
