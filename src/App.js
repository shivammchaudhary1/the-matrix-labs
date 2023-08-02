import "./App.css";

import LandingPage from "./pages/LandingPage";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <AllRoutes />
      <LandingPage />
    </div>
  );
}

export default App;
