// Importando e configurando o Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDu5zp7mBpkqMhyyZyjJUcOZWbnOLGULHk",
  authDomain: "gestao-de-entregadores.firebaseapp.com",
  projectId: "gestao-de-entregadores",
  storageBucket: "gestao-de-entregadores.firebasestorage.app",
  messagingSenderId: "162118679547",
  appId: "1:162118679547:web:c3a8aa408885f0902de95e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Lógica do login
const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Login bem-sucedido
      alert("Login realizado com sucesso!");
      console.log("Usuário:", userCredential.user);
      // Redirecionar para o painel
      window.location.href = "painel.html";
    })
    .catch((error) => {
      // Exibir mensagem de erro
      errorMessage.textContent = "Erro: " + error.message;
    });
});
