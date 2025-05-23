import { ChatLayout } from "./components/ChatLayout";
import { PinView } from "./components/PinView";
import { Routes, Route } from "react-router";
import { AboutBot } from "./components/AboutBot"; // importando el nuevo componente
import { BooksLinks } from "./components/Books"; //lista de docuemntos

function App() {
  return (
    <Routes>
      {/**  <Route path="/" element={<PinView />} />   */}
      <Route path="/" element={<ChatLayout />} />
      <Route path="/chat" element={<ChatLayout />} />

      
      {/**  RUTA ACERCA DE QUE SIRVE EL BOT   */}
      <Route path="/about" element={<AboutBot />} /> 

       {/** RUTA PARA VER LOS LINKS    */}
      <Route path="/document" element={<BooksLinks />} /> 
    </Routes>
  );
}

export default App;
