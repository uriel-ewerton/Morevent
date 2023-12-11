import React from "react";
import GlobalStyle from "./styles/global";
//import { toast, ToastConteiner } from "react-toastify"
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";
//<ToastConteiner autoClose={3000} position={toast.POSITION.BOTTOM_CENTER} />

const App = () => {
  return (
    <AuthProvider>
  
      <RoutesApp />
      <GlobalStyle />
      
    </AuthProvider>
  );
};

export default App;
