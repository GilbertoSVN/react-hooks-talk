import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppProvider } from "./context/AppContext";
import { Router } from "./Router";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Router />
        <ToastContainer />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
