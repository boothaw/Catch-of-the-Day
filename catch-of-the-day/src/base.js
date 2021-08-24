import  Rebase  from "re-base";
import firebase from "firebase";

const fireBaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDOjSTtABqqoYwxoHgT8B2MwwmBgZ76Npc",
    authDomain: "catch-of-the-day-wilkes.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-wilkes-default-rtdb.firebaseio.com"
});

const base = Rebase.createClass(fireBaseApp.database());

export { fireBaseApp };

export default base;