import React, { useState } from "react";
import style from "../styles/BodyChat.module.css";
import styleSidebar from "../styles/Sidebar.module.css";
import { Sidebar } from "./Sidebar";
import botIcon from "../assets/bot.png";
import logo from "../assets/banqueaIcon.png"; // también se usa en el header
import { AiOutlineMenu } from "react-icons/ai";

export const AboutBot = () => {
  const [isHidden, setIsHidden] = useState(true); // Oculta el sidebar inicialmente

  const handleSidebar = () => {
    setIsHidden(!isHidden);
  };

  return (
    <main className={style.main}>
      <Sidebar isHidden={isHidden} />

      <div className={style.sidechat}>
        {/* Agregado: HEADER como en BodyChat.jsx */}
        <header className={style.headerChat}>
          <div className={style.iconContainer} onClick={handleSidebar}>
            <AiOutlineMenu />
          </div>
          <figure className={style.logoContainer}>
            <img src={logo} alt="logoBanquea" className={style.logoBanquea} />
          </figure>
        </header>

        {/* Contenido principal */}
        <div className={style.div}>
          <img
            src={botIcon}
            alt="Bot Icon"
            style={{
              width: "40px", // Reducida a la mitad
              height: "40px", // Asegura proporción cuadrada
              borderRadius: "50%", // Forma circular
              objectFit: "cover", // Ajuste del contenido en el círculo
              marginBottom: "1rem",
            }}
          />

          <div className={styleSidebar.containerTitles}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              ¿De qué trata este asistente?
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                maxWidth: "600px",
                lineHeight: "1.6",
              }}
            >
              Este asistente virtual utiliza inteligencia artificial para
              responder preguntas relacionadas con la práctica médica, basándose
              en libros y materiales oficiales del SERUMS en Perú.
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                maxWidth: "600px",
                lineHeight: "1.6",
                marginTop: "1rem",
              }}
            >
              Puedes hacerle preguntas como{" "}
              <strong>"¿Qué es el triaje en emergencias?"</strong> y el bot
              buscará la respuesta en los textos cargados, ofreciéndote
              información clara y contextualizada. También puedes explorar la
              sección de documentos para acceder directamente a los libros y
              manuales médicos disponibles.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
