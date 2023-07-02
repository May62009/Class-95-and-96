const firebaseConfig = {
      apiKey: "AIzaSyAxukuM533F6iMf4TG6ZXPZBIi6M3twRTY",
      authDomain: "class-94-74b6e.firebaseapp.com",
      databaseURL: "https://class-94-74b6e-default-rtdb.firebaseio.com",
      projectId: "class-94-74b6e",
      storageBucket: "class-94-74b6e.appspot.com",
      messagingSenderId: "105303470829",
      appId: "1:105303470829:web:efa32df4ece290e8d512e4",
      measurementId: "G-335M2H8DYY"
};
//ADD YOUR FIREBASE LINKS HERE
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="letschat_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="letschat_page.html";
}