import firebaseApp from "./firebase";
class CardRepository {
  syncCards(userId, onUpdate) {
    const ref = firebaseApp.database().ref(`${userId}/cards`); //해당 경로에서 데아터가 계속 업데이트 된다면 snapshot에 value가 설정되있다면 두번째 인자로 등록된 콜백을 게속호출함
    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off();
  }
  saveCard(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
  }
  removeCard(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepository;
