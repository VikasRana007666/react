import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <h1>skdfjlakjfl</h1>
      <Footer />
    </div>
  );
}

export default App;
