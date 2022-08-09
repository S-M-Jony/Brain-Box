import {initializeApp} from "firebase/app";
const app = initializeApp(
    {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_Auth_Domain,
        projectId: process.env.REACT_APP_Project_Id,
        storageBucket:process.env.REACT_APP_Storage_Bucket,
        messagingSenderId: process.env.REACT_APP_Messaging_Sender_Id,
        appId: process.env.REACT_APP_App_Id,
        databaseURL: process.env.REACT_APP_DATABASE_URL
      });

      export default app;