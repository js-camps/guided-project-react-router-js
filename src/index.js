import { createRoot } from "react-dom/client";
import  App  from "./components/App";

// Importing the top-level component
import App from './components/App'

// Importing the styles
import './styles.less'

// 👉 STEP 1 - Import React Router's Router
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("app");
const root = createRoot(container)
root.render(
    <Router>
        <App />
    </Router>
    );
