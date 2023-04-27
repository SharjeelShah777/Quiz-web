// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAMN3WlD20gvT3APLV_w6beo81HDrv-wKA",
    authDomain: "testing1-edcdb.firebaseapp.com",
    projectId: "testing1-edcdb",
    storageBucket: "testing1-edcdb.appspot.com",
    messagingSenderId: "819630100193",
    appId: "1:819630100193:web:b57ccf5d887924837ff1a0",
    measurementId: "G-65SNZBPYG3"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            // document.write("You are Signed Up")
            console.log(result)
            alert("Signed-Up Successfully")
            window.location.href = "./signin.html"
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            console.log(error)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            // document.write("You are Signed In")
            console.log(result)
            alert("Welcome")
            window.location.href = "./quiz.html"
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            console.log(error)
            window.location.href = "./index.html"
        });
}