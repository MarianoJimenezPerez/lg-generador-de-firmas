import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <div className="home_container">
        <h1>Generador de firmas</h1>
        <div className="home_welcome_box">
          <h2>¡Bienvenid@!</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
            unde quae autem fugit ipsa expedita id dolore provident, delectus
            nesciunt aut repellendus soluta natus dicta repudiandae suscipit
            voluptatem architecto. Beatae.
          </p>
        </div>
        <Link to={`/sign`}><button className="btn-primary">¡Empecemos!</button></Link>
      </div>
      <div className="home_logo">
        <img src="/latamly_group_logo.png" alt="Logo latamly group" />
      </div>
    </main>
  );
};

export default Home;
