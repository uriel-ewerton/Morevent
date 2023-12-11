import React, { useState } from "react";
import LoginPopup from "../../components/pop-ups/LoginPopup";
import SignupPopup from "../../components/pop-ups/SignupPopup";
import { Estilera } from "./style";
import { Botaes } from "./style";

const Home = () => {
  //const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSigninPopup, setShowSigninPopup] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <Estilera>
        <h1>Home</h1>
        <Botaes onClick={handleOpenPopup}>Login</Botaes>
        {isPopupOpen && <LoginPopup setClosePopup={handleClosePopup} />}

        <Botaes onClick={() => setShowSigninPopup(true)}>Cadastro</Botaes>
        {showSigninPopup && <SignupPopup onClose={() => setShowSigninPopup(false)} />}

        <div className="fundoteste">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            minima vero animi deserunt ea? Quis fugit delectus veniam deserunt
            suscipit, rerum possimus beatae impedit provident debitis sapiente
            hic. Nulla, totam quidem unde voluptatum facilis sit accusamus
            libero sunt? Veritatis, ut! Nulla quos perferendis doloribus, illum
            modi ex vero necessitatibus facere adipisci quam optio sapiente
            possimus odit. Illo perspiciatis aperiam ea at molestias nam
            accusamus dignissimos atque maiores repellendus voluptatem sunt,
            necessitatibus reprehenderit quos repudiandae facilis, explicabo ex
            fugit dicta saepe! Provident, numquam vel! Fuga ut praesentium
            assumenda minus, vitae autem dolores libero delectus molestias
            aliquid rem ducimus quae labore soluta ex nobis suscipit explicabo
            beatae ullam ea harum reiciendis debitis? Quia temporibus nostrum,
            maxime quae fuga nesciunt consequuntur dolore quidem! Ratione
            dolorum repellat alias nulla laboriosam repudiandae ducimus saepe
            porro odio debitis cupiditate accusamus at labore quibusdam eum
            iusto distinctio quo libero quaerat, similique vitae, quos dolor
            minima! Vitae a, ea at quas iusto nisi incidunt maiores beatae quod
            praesentium. Nisi aut voluptatibus cum. Rerum reprehenderit a
            accusamus enim natus, ratione culpa numquam labore. Tenetur et
            voluptatem inventore mollitia, delectus beatae quidem dolorum
            possimus perferendis ipsam officia doloremque fugiat natus,
            voluptate ea cum autem dolor similique? Temporibus placeat eaque
            fuga! Tenetur suscipit accusamus dolore officiis, quia minus libero
            delectus consectetur sed nobis quisquam officia voluptatem error,
            magni nemo, numquam illo laboriosam iste neque et accusantium
            eligendi amet cum debitis. A maxime pariatur laboriosam! Labore
            libero officiis id rem corrupti adipisci? Atque dolor adipisci non
            sunt nemo. Ipsam porro rem praesentium vitae optio recusandae iure
            quisquam, odit, enim reiciendis adipisci fugiat sit nam perspiciatis
            explicabo expedita, sunt quasi modi? Doloribus sed, inventore
            voluptates corporis consequatur nihil qui dolorum sunt laborum
            voluptatem! Modi non earum quo nemo eligendi asperiores aliquid,
            commodi dolor magnam culpa. Reiciendis praesentium vitae nam ea
            exercitationem animi quia libero, iusto doloremque omnis numquam cum
            laboriosam aspernatur. Voluptates dolor quia ad id vero ipsa culpa
            dolorem repellat provident necessitatibus. Ipsa rem commodi a
            eveniet recusandae eius quas, labore nostrum. Obcaecati voluptatibus
            quod tenetur! Aperiam praesentium ipsam magni excepturi
            necessitatibus, temporibus illum quia quasi dolore voluptatum
            pariatur soluta iste exercitationem dolorum officia molestias
            voluptates! Dolorem incidunt eligendi fuga sit consequatur! Illo
            ipsa earum numquam corporis neque ratione exercitationem omnis
            voluptatem est saepe modi enim explicabo quisquam consequuntur ipsum
            illum, fugit cum dicta, ad deleniti. Est expedita commodi
            perspiciatis assumenda sequi suscipit provident numquam placeat
            repellendus veritatis! Delectus placeat in velit.
          </p>
        </div>
      </Estilera>
    </div>
  );
};

export default Home;
