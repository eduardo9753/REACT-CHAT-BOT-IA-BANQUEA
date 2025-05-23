import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Sidebar } from "./Sidebar";
import styleBodyChat from "../styles/BodyChat.module.css"; // Usar mismo CSS que AboutBot
import logo from "../assets/banqueaIcon.png";
import style from "../styles/Sidebar.module.css";

export const BooksLinks = () => {
  const [titles, setTitles] = useState([]);
  const [loaderTitles, setLoaderTitles] = useState(true);
  const [isHidden, setIsHidden] = useState(true);

  const handleSidebar = () => {
    setIsHidden(!isHidden);
  };

  const getTitles = async () => {
    const response = await fetch("https://bot.banquea.pe/titulos/serums");
    const { titulos } = await response.json();
    setTitles(titulos);
    setLoaderTitles(false);
  };

  useEffect(() => {
    getTitles();
  }, []);

  return (
    <main className={styleBodyChat.main}>
      <Sidebar isHidden={isHidden} />

      <div className={styleBodyChat.sidechat}>
        <header className={styleBodyChat.headerChat}>
          <div className={styleBodyChat.iconContainer} onClick={handleSidebar}>
            <AiOutlineMenu />
          </div>
          <figure className={styleBodyChat.logoContainer}>
            <img
              src={logo}
              alt="logoBanquea"
              className={styleBodyChat.logoBanquea}
            />
          </figure>
        </header>

        <div className={styleBodyChat.div}>
          <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
            Lista de documentos
          </h2>
          <div className={style.containerTitles}>
            {loaderTitles ? (
              <div className="loaderTitles"></div>
            ) : (
              titles.map(({ nombre, link }, index) => (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.title}
                  key={index}
                >
                  <p>{nombre}</p>
                </a>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
};
