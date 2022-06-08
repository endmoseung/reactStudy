import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login(providerName) {
    // google인지 트위터인지 페북인지
    const authProvider = new firebase.auth[`${providerName}AuthProvider`](); // porviderName으로 주어진 방법으로 로그인한다
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
  logout() {
    firebase.auth().signOut();
  }
}

export default AuthService;
