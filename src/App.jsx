import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Login } from "./Login";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Content />
        <center>
          <Login />
        </center>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;