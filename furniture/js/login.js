
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCicA6olZC4j5_9hRT-dGcP90PB70by2ns",
  authDomain: "medkit-auth.firebaseapp.com",
  databaseURL: "https://medkit-auth-default-rtdb.firebaseio.com",
  projectId: "medkit-auth",
  storageBucket: "medkit-auth.appspot.com",
  messagingSenderId: "834725052144",
  appId: "1:834725052144:web:d3d87749bc22e001ee4c35"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();





register.addEventListener('click', (e) => {
  console.log("reg");
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var username = document.getElementById('username').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user = userCredential.user;

      set(ref(database, 'users/' + user.uid), {
        username: username,
        email: email,
        password: password
      })

      alert('user created!');

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);

    });

});

login.addEventListener('click', (e) => {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user = userCredential.user;

      const dt = new Date();
      update(ref(database, 'users/' + user.uid), {
        last_login: dt,
      })
      alert('User loged in!');

      window.sessionStorage.setItem('user', email)
     

      if (window.localStorage.getItem('cart' + email) == null) {
        window.localStorage.setItem('cart' + email, 0)
        console.log(window.localStorage.getItem('cart' + email))
        location.reload();
      }
      else {

        console.log(window.localStorage.getItem('cart' + email))
        location.reload();

      }


    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
});
