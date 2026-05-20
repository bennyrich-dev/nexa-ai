import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {

  apiKey:
  "AIzaSyCqVqNlLYNDsFdHVyMqCO7zU2QJBSWt6nU",

  authDomain:
  "nexa-ai-d26e0.firebaseapp.com",

  projectId:
  "nexa-ai-d26e0",

  storageBucket:
  "nexa-ai-d26e0.firebasestorage.app",

  messagingSenderId:
  "750744001520",

  appId:
  "1:750744001520:web:18c5aba623235e26c29b35"

};

const app =
initializeApp(firebaseConfig);

const auth =
getAuth(app);

const db =
getFirestore(app);

export { auth, db };