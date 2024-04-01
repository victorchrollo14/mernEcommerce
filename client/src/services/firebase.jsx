import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,signInWithPopup,getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCUZuXFp4_uBauuFHqWgqDpDKkhkoeEYgw",
    authDomain: "men-s-tribe.firebaseapp.com",
    projectId: "men-s-tribe",
    storageBucket: "men-s-tribe.appspot.com",
    messagingSenderId: "126383869572",
    appId: "1:126383869572:web:9e4ef3619f7cc57a913cd1"
  };
  
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth();

const authWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log(user)
    return user
  } catch (error) {
    console.log(error);
    return err
  }
};

export { authWithGoogle };