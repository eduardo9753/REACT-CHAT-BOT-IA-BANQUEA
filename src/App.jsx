import { ChatLayout } from "./components/ChatLayout";
import { PinView } from "./components/PinView";
import { Routes, Route } from "react-router";
import { AboutBot } from "./components/AboutBot"; // importando el nuevo componente

function App() {
  return (
    <Routes>
      {/**  <Route path="/" element={<PinView />} />   */}
      <Route path="/" element={<ChatLayout />} />
      <Route path="/chat" element={<ChatLayout />} />

      
      {/**  NUEVAS RUTAS PARA EL BOT DE DESCRIPCION   */}
      <Route path="/about" element={<AboutBot />} /> {/* nueva ruta */}
    </Routes>
  );
}

export default App;
