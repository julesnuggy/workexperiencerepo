//jules-social-media-db
function initialiseFirebase(firebase) {
  var config = {
    apiKey: "AIzaSyAVg_7HRfUimGt8IbRpXlo4bQatZ7flFoY",
    authDomain: "jules-social-media-db.firebaseapp.com",
    databaseURL: "https://jules-social-media-db.firebaseio.com",
    projectId: "jules-social-media-db",
    storageBucket: "jules-social-media-db.appspot.com",
    messagingSenderId: "71148272379"
  };
  firebase.initializeApp(config);
}

function saveToFirebase(firebase, user, text) {
  var db = instantiateDb(firebase);
  var post = text.toString();

  db.collection("posts").add({
    username: user,
    post: post
  })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });

}

function retrieveFromFirebase(firebase) {
  var db = instantiateDb(firebase);
  var dataArray = [];

  db.collection("posts")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        dataArray.push(doc.data());
      });
    });

  return dataArray;
}

function instantiateDb(firebase) {
  var db = firebase.firestore();

  // Disable deprecated features
  db.settings({
    timestampsInSnapshots: true
  });

  return db;
}