import { firebaseAuth, githubProvider, googleProvider } from "./firebase";

class AuthService {
  login(providerName) {
    // google인지 트위터인지 페북인지
    const authProvider = this.getProvider(providerName); // porviderName으로 주어진 방법으로 로그인한다
    return firebaseAuth.signInWithPopup(authProvider);
  }
  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
  logout() {
    firebaseAuth.signOut();
  }
  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      case "Github":
        return githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
