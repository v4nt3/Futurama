import {createContext,useState } from "react";
import { useEffect } from "react";

const ThemeContext = createContext();

function ThemeProvider({children}) {
    // Estado para el modo oscuro
    const [modoOscuro, setOscuro] = useState(false);

    // Función para alternar entre modo claro y oscuro
    const toggleTema = () => setOscuro((prev) => !prev);

    useEffect(() => {
        if (modoOscuro) {
          document.body.classList.add("dark-mode");
        } else {
          document.body.classList.remove("dark-mode");
        }
      }, [modoOscuro]);

    return (
        <ThemeContext.Provider value={{modoOscuro, toggleTema}}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext };
export default ThemeProvider;