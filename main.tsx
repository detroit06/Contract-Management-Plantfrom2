import ReactDOM from "react-dom/client";

const root = document.getElementById("root");

console.log("ROOT ELEMENT 👉", root);

if (root) {
  ReactDOM.createRoot(root).render(
    <h1 style={{ color: "red" }}>🔥 ROOT IS RENDERING 🔥</h1>
  );
}
