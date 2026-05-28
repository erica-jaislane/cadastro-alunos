// Arquivo responsável por configurar e inicializar o Firebase no projeto
// Funções necessárias diretamente do Firebase via CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Objeto com as credenciais do projeto Firebase
// Essas informações são geradas automaticamente ao criar o projeto no Firebase Console
const firebaseConfig = {
  apiKey: "SUA_API_KEY",               // Chave de autenticação da API
  authDomain: "SEU_DOMINIO.firebaseapp.com", // Domínio de autenticação
  projectId: "SEU_PROJECT_ID",         // ID único do projeto no Firebase
  storageBucket: "SEU_BUCKET.appspot.com",   // Local de armazenamento de arquivos
  messagingSenderId: "SEU_SENDER_ID",  // ID do remetente de mensagens
  appId: "SEU_APP_ID"                  // ID da aplicação
};

// Inicializa o Firebase com as configurações definidas acima
const app = initializeApp(firebaseConfig);

//