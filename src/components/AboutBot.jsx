import React, { useState } from "react";
import style from "../styles/BodyChat.module.css";
import { Sidebar } from "./Sidebar";
import botIcon from "../assets/banqueaIcon.png";
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
        <div
          style={{
            padding: "2rem",
            color: "white",
            background: "#121212",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <img
            src={botIcon}
            alt="Bot Icon"
            style={{ width: "80px", marginBottom: "1rem" }}
          />
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            ¿De qué trata este asistente?
          </h2>
          <p
            style={{ fontSize: "1.1rem", maxWidth: "600px", lineHeight: "1.6" }}
          >
            Este bot es un asistente de inteligencia artificial diseñado para
            ayudarte a resolver dudas frecuentes, guiarte en procesos y
            proporcionarte acceso rápido a documentos relevantes para tu área.
          </p>
          <p
            style={{
              fontSize: "1.1rem",
              maxWidth: "600px",
              lineHeight: "1.6",
              marginTop: "1rem",
            }}
          >
            Usa el chat para hacer preguntas y obtener respuestas inmediatas, o
            consulta la sección de documentos para información detallada.
          </p>
        </div>
      </div>
    </main>
  );
};
