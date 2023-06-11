
import Navbar from "./components/navbar/Navbar";
import "./styles/navbar.css";
import "./styles/home.css";
import "./styles/form.css";
import "./styles/contact-styles.css";
import "./styles/responsive.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from "./pages/Landing";
import Icon from "./pages/Icon";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
   <div>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/contact/:id" element={<Icon/>} />
    </Routes>
   </div>
  );
}

export default App;