 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA2E6VK3EV8XlW3WNawTDZxyBrVPE09ELA",
    authDomain: "livetv-e6c09.firebaseapp.com",
    databaseURL: "https://livetv-e6c09-default-rtdb.firebaseio.com",
    projectId: "livetv-e6c09",
    storageBucket: "livetv-e6c09.appspot.com",
    messagingSenderId: "557700274135",
    appId: "1:557700274135:web:2fb4f10b5285c32a6d5d92"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    firebase.auth.Auth.Persistence.LOCAL; 

    $("#btn-login").click(function(){
        
        var email = $("#email").val();
        var password = $("#password").val(); 

        var result = firebase.auth().signInWithEmailAndPassword(email, password);
    
        result.catch(function(error){
            var errorCode = error.code; 
            var errorMessage = error.message; 

            console.log(errorCode);
            console.log(errorMessage);
        });

    });

    $("#btn-logout").click(function(){
        firebase.auth().signOut();
    });

    function switchView(view){
        $.get({
            url:view,
            cache: false,  
        }).then(function(data){
            $("#container").html(data);
        });
    }