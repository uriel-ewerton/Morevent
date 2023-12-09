import React from "react";
import GlobalStyle from "./styles/global";
import { toast, ToastConteiner } from "react-toastify"
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/auth";

const App = () => {
  return (
    <AuthProvider>
      <ToastConteiner autoClose={3000} position={toast.POSITION.BOTTOM_CENTER} />
      <RoutesApp />
      <GlobalStyle />
      
    </AuthProvider>
  );
};

export default App;
