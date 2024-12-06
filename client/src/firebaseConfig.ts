import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDQt3ccdMLgTGNqv35ifdQW62hRtqFvzws",
    authDomain: "msl-app-d873a.firebaseapp.com",
    databaseURL: "https://msl-app-d873a.firebaseio.com",
    projectId: "msl-app-d873a",
    storageBucket: "msl-app-d873a.firebasestorage.app",
    messagingSenderId: "562587475967",
    appId: "1:562587475967:web:1e67085fe019e86b7891ca"
  };

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }
export default app
