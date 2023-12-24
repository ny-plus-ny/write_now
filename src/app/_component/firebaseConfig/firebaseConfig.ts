import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

 function FirebaseConfig(){
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: process.env.APP_API_KEY,
      authDomain: process.env.APP_AUTH_DOMAIN,
      databaseURL: process.env.APP_DATABASE_URL,
      projectId: process.env.APP_PROJECT_ID,
      storageBucket: process.env.APP_STORAGEBUCKET,
      messagingSenderId: process.env.APP_MESSAGING_SENDER,
      appId: process.env.APP_ID,
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    return getDatabase(app);
}

export default FirebaseConfig
