import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB8KXMlKGPRcBA2CRfnJA-fBp2WWDG5g8g",
  authDomain: "cadastro-alunos-b8624.firebaseapp.com",
  projectId: "cadastro-alunos-b8624",
  storageBucket: "cadastro-alunos-b8624.firebasestorage.app",
  messagingSenderId: "1068187964323",
  appId: "1:1068187964323:web:ae92a9663ca6b0d3cf0016"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);