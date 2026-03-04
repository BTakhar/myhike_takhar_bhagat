


// import {
//     onAuthReady
// } from "./authentication.js"

// import { db } from "./firebaseConfig.js";
// import { doc, onSnapshot } from "firebase/firestore";


// function readQuote(day) {
//     const quoteDocRef = doc(db, "quotes", day); // Get a reference to the document

//     onSnapshot(quoteDocRef, docSnap => { // Listen for real-time updates
//         if (docSnap.exists()) {          //Document existence check
//             document.getElementById("quote-goes-here").innerHTML = docSnap.data().quotes;
//         } else {
//             console.log("No such document!");
//         }
//     }, (error) => {                      //Listener/system error
//         console.error("Error listening to document: ", error);
//     });
// }




// function showName() {
//       const nameElement = document.getElementById("name-goes-here"); // the <h1> element to display "Hello, {name}"
      
//       // Wait for Firebase to determine the current authentication state.
//       // onAuthReady() runs the callback once Firebase finishes checking the signed-in user.
//       // The user's name is extracted from the Firebase Authentication object
//       // You can "go to console" to check out current users. 
//       onAuthReady((user) => {
//           if (!user) {
//               // If no user is signed in → redirect back to login page.
//               location.href = "index.html";
//               return;
//           }

//           // If a user is logged in:
//           // Use their display name if available, otherwise show their email.
//           const name = user.displayName || user.email;

//           // Update the welcome message with their name/email.
//           if (nameElement) {
//               nameElement.textContent = `${name}!`;
//           }
//       });
// }

// ;


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
import { doc, onSnapshot } from "firebase/firestore";

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
      const nameElement = document.getElementById("name-goes-here"); // the <h1> element to display "Hello, {name}"

      // Wait for Firebase to determine the current authentication state.
      // onAuthReady() runs the callback once Firebase finishes checking the signed-in user.
      // The user's name is extracted from the Firebase Authentication object
      // You can "go to console" to check out current users. 
      onAuthReady((user) => {
          if (!user) {
              // If no user is signed in → redirect back to login page.
              location.href = "index.html";
              return;
          }

          // If a user is logged in:
          // Use their display name if available, otherwise show their email.
          const name = user.displayName || user.email;
          
          // Update the welcome message with their name/email.
          if (nameElement) {
              nameElement.textContent = `${name}!`;
          }
      });
}

showName();
readQuote("monday");








