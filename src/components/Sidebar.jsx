import { useEffect, useState } from "react";
import style from "../styles/Sidebar.module.css";

export const Sidebar = ({ isHidden }) => {
  const [titles, setTitles] = useState([]);
  const [loaderTitles, setLoaderTitles] = useState(true);

  const getTitles = async () => {
    // http://127.0.0.1:5000/titulos/serums
    const response = await fetch(
      //
      //https://134.209.74.55/titulos/serums
      "https://bot.banquea.pe/titulos/serums"
    );
    const { titulos } = await response.json();
    setTitles([...titulos]);
    setLoaderTitles(false);
  };

  useEffect(() => {
    getTitles(); // llenando el arreglo con los titulos
  }, []);

  return (
    <section
      className={`${style.sidebar} ${isHidden ? style.sidebarHidden : ""}`}
    >
      <article className={style.article}>
        <div className={style.container}>
          <header className={style.header}>
            <h1 className={style.headerTitle}>Documentos</h1>
          </header>

          {/* LINK NUEVO PARA EXPLICAR DE QUE TRATA EL BOT */}
          <a href="/chat" className={style.title}>
            Inicio
          </a>

          <a href="/about" className={style.title}>
            ¿De qué trata este bot?
          </a>

           <a href="/document" className={style.title}>
            Documentos
          </a>

          {/**LISK DE LOS LIBROS  
          <div className={style.containerTitles}>
            {loaderTitles ? (
              <div className="loaderTitles"></div>
            ) : (
              titles.map(({ nombre, link }, index) => (
                <a
                  href={link}
                  target="_blank"
                  className={style.title}
                  key={index}
                >
                  {nombre}
                </a>
              ))
            )}
          </div>
         LISK DE LOS LIBROS */}
        </div>
      </article>
    </section>
  );
};
