import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFirebase =()=>{
    initializeApp(firebaseConfig);
}
export default initializeFirebase;


/*
 steps for authentication
 --------------------------------
 step - 1: Initial Setup
 1. firbase: create project
 2. create web ap
 3. get configuration
 4. initialize firebase
 5. Enable auth method
 ----------------------------------
 Step-2: setup component
 1. Create Login Component
 2.Create Register Component
 3. Create  Route for Login and Register
 ---------------------------------------
 step-3: set auth system
 1. setup sign in method
 2. setup sign out method
 3. user state
 4. special observer
 5. return necessary methods and states from useFirebase
 --------------------------------
 step-4: create auth context  (useAuth hook)
 1. create an auth context
 2. create context provider
 3. set context provider context value
 4. use Auth Provider
 5. create useAuth hook
------------------------------------
step-5: create private route
1.create private Route
2. set private Route
3. 
------------------------------
Step-6: Redirect After Login
1.After Login redirect user to their desired destination
*/