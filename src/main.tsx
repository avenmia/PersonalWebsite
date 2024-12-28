import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

const rootElem = document.getElementById("root");
if (rootElem === null) {
  throw new Error("Root element not found");
}
const root = ReactDOM.createRoot(rootElem);
root.render(<App />);
