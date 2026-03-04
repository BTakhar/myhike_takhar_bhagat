import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

//--------------------------------------------------------------
// If you have custom global styles, import them as well:
//--------------------------------------------------------------
import '/src/styles/style.css';

//--------------------------------------------------------------
// Custom global JS code (shared with all pages)can go here.
//--------------------------------------------------------------
import {
    onAuthReady
} from "./authentication.js"


import { db } from "./firebaseConfig.js";
import { doc, onSnapshot, getDoc } from "firebase/firestore";

// This is an example function. Replace it with your own logic.
function readQuote(day) {
    const quoteDocRef = doc(db, "quotes", day); // Get a reference to the document
    onSnapshot(quoteDocRef, docSnap => { // Listen for real-time updates
        if (docSnap.exists()) {          //Document existence check
            document.getElementById("quote-goes-here").innerHTML = docSnap.data().quote;
        } else {
            console.log("No such document!");
        }
    }, (error) => {                      //Listener/system error
        console.error("Error listening to document: ", error);
    });
}



function showName() {
      const nameElement = document.getElementById("name-goes-here"); 

      onAuthReady(async (user) => {

          if (!user) {
              if (window.location.pathname.endsWith('main.html')) {
                  location.href = 'index.html';
              }
              return;
          }
// Get the user's Firestore document from the "users" collection
        // Document ID is the user's unique UID
        const userDoc = await getDoc(doc(db, "users", user.uid));

        // Determine which name to display:
        const name = userDoc.exists()            // 1️⃣ Use Firestore name if document exists
            ? userDoc.data().name                // 2️⃣ Otherwise fallback to Firebase displayName
            : user.displayName || user.email;    // 3️⃣ Otherwise fallback to email

       // If the DOM element exists, update its text using a template literal to add "!"
        if (nameElement) {
            nameElement.textContent = `${name}!`;
        }
    });
}

readQuote("monday");
showName();












