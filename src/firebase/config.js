import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAZV97FZPABD2S1y1si1PNSdBkCJm9WZ94",
    authDomain: "vue3-17924.firebaseapp.com",
    projectId: "vue3-17924",
    storageBucket: "vue3-17924.appspot.com",
    messagingSenderId: "742883820555",
    appId: "1:742883820555:web:c86c90be7d82741089730e"
};

const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp }