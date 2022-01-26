
var firebaseConfig = {
    apiKey: "AIzaSyDO5ynFiXrRg7D6QCgFVIV5qvgRCKAyd_Y",
    authDomain: "chattapp-dc56b.firebaseapp.com",
    databaseURL: "https://chattapp-dc56b-default-rtdb.firebaseio.com",
    projectId: "chattapp-dc56b",
    storageBucket: "chattapp-dc56b.appspot.com",
    messagingSenderId: "705904214179",
    appId: "1:705904214179:web:c421580160a1ecc3b83f16",
    measurementId: "G-133DHNNY1B"
    };
    
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";

getData();
var room_name=""; 
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData(){
      firebase.database().ref("/").on('value',
      function (snapshot)
      {
            document.getElementById("output").innerHTML="";
            snapshot.forEach(function(childSnapshot){
                  childKey=childSnapshot.key;
                  room_names=childKey;
                  console.log("room name-"+room_names);
                  row="<div class='room_name' id="+room_names+" onclick='RedirectToNewRoom(this.id)'>#"+room_names+"</div><hr>"
                  document.getElementById("output").innerHTML+=row;
            });
      });
}
function redirectToNewRoomName (name){
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}
