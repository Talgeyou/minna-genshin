import firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

let firebaseInstance: firebase.app.App | null;

export function getFirebase() {
    if (typeof window !== 'undefined') {
        if (firebaseInstance) return firebaseInstance;
        firebaseInstance = firebase.initializeApp(firebaseConfig);
        return firebaseInstance;
    }

    return null;
}

getFirebase();

export const signOut = async () => {
    try {
        if (firebaseInstance) {
            await firebaseInstance.auth().signOut();
        }
    } catch (error) {
        alert(error.message);
    }
};

export const signIn = async (email: string, password: string) => {
    try {
        if (firebaseInstance) {
            await firebaseInstance.auth().signInWithEmailAndPassword(email, password);
        }
    } catch (error) {
        alert(error.message);
    }
};

export const signUp = async (email: string, password: string) => {
    try {
        if (firebaseInstance) {
            await firebaseInstance.auth().createUserWithEmailAndPassword(email, password);
        }
    } catch (error) {
        alert(error.message);
    }
};
