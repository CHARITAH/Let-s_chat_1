const firebaseConfig = {
    apiKey: "AIzaSyAymWX_uirTXyEPb72dhuw6o9ABEix44vA",
    authDomain: "let-s-chat-b1c3d.firebaseapp.com",
    databaseURL: "https://let-s-chat-b1c3d-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-b1c3d",
    storageBucket: "let-s-chat-b1c3d.appspot.com",
    messagingSenderId: "748154052494",
    appId: "1:748154052494:web:00ca9dffdbd04999d48edf",
    measurementId: "G-G43EEKP8XS"
  };
  firebase.initializeApp(firebaseConfig);
  
user_name = localStorage.getItem ("username");
document.getElementById("welcome").innerHTML = "Welcome  " + user_name + "  !:)";

function roomadding(){
      rn = document.getElementById("room").value;
      firebase.database().ref("/").child(rn).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", rn );

      window.location = "kwitter_page.html";
      
} 

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
 console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectroom(this.id)'>#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectroom(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
      }