<?php
/*
 * datastructure-learnmatch 
 */
?>
<head>
	<title>LearnMatch Datastructure</title>
	<!-- Import CSS -->
	<link rel="stylesheet" type="text/css" href="css/style.css">
	
	<!-- Import JS -->
		<!-- extern -->
		<script src="js/jquery-3.1.1.min.js"></script>
		
		<!-- intern -->
		<script src="assets/constants.js"></script>
	
	<!-- Initialize DB Connection -->
	<script src="https://www.gstatic.com/firebasejs/3.6.2/firebase.js"></script>
	<script>
	var config = {
		    apiKey: "AIzaSyCCqC5nzaJf9Ik70SDICO1UkuwbZvtUGg8",
		    authDomain: "datastructure-4013b.firebaseapp.com",
		    databaseURL: "https://datastructure-4013b.firebaseio.com",
		    storageBucket: "datastructure-4013b.appspot.com",
		    messagingSenderId: "642467907052"
			    };
	firebase.initializeApp(config);
	var database = firebase.database();
	</script>
</head>

<!-- VIEW -->

<body>
<div class="container">
	<div class="row">
		<div class="splash" id="splashField">
			<!-- Error and success messages go here -->
		</div>
	</div>
	<div class="row">
		<div class="buttonsContainer">
			<!-- add buttons -->
			<div class="buttonsGroup">
				<button class='singleButton' type='button' id='addUserButton'>User hinzufügen</button>
				<div class="formGroup">
					<input name='count' type='text' size=10 id='addXUsers'></input>
					<button type='submit' id='addXUsersButton'>X User hinzufügen</button>
				</div>
			</div>
			<!-- load buttons -->
			<div class="buttonsGroup">
				<button type='button' id='getUserdataButton'>Userdaten aktualisieren</button>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="viewContainer">
			<table id="user-data">
				<!-- User table goes here -->
			</table>
		</div>
	</div>
</div>
</body>

<!-- FUNCTIONALITY -->

<script>

//generate random string
// src: http://stackoverflow.com/questions/10726909/random-alpha-numeric-string-in-javascript
//
function randomString(length, chars) {
    var mask = '';
    if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (chars.indexOf('#') > -1) mask += '0123456789';
    if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var result = '';
    for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
    return result;
}

// picks a name from constants.js NAMES[]
function pickName() {
	let index = Math.floor(Math.random() * NAMES.length);
    return NAMES[index];
}

//show success message
function showSuccess(msg) {
	$('#splashField').html("<span class='alert'>" +msg + "</span>").css("background-color", "rgba(0,255,0,0.4)").css("display", "block");
}

//show warning message
function showWarning(msg) {
	$('#splashField').html("<span class='alert'>" +msg + "</span>").css("background-color", "rgba(255,255,50,0.4)").css("display", "block");
}

//show error message
function showError(msg, error) {
	$('#splashField').html("<span class='alert'>" +msg + "</span><p class='error'>" + error + "</p>").css("background-color", "rgba(255,0,0,0.4)").css("display", "block");
}

//
// DOC RDY
//

$(document).ready( function(){
	//setup button functionality
	$('#addUserButton').click(function(){
		addUserdata();
	});

	$('#getUserdataButton').click(function(){
		refreshUserdata();
	});

	$('#addXUsersButton').click(function(){
		var count = parseInt($('#addXUsers').val());
		console.log(count);
		if(!isNaN(count) && count > 0){
			addXUserdata(count);
		} else {
			showWarning('Gib eine gültige Zahl ein!');
		}
	});
	
	// FUNCTIONS
	
	// add user to database
	//
	// @refresh: (bool) set false to prevent reloading the view
	//
	function addUserdata(refresh = true) {
		let userId = this.randomString(16, 'aA#');	
		let name = this.pickName();
		var user = {user: {id: userId, name: name}, statistics: {score: 0}};
		database.ref('users/' + userId).set(user)
		.then(function() {
			if(refresh){
				refreshUserdata(false);
				showSuccess('User hinzugefügt');
			}
		})
		.catch(function(error){
			showError('User konnte nicht hinzugefügt werden', error);
		});
	}

	//add multiple users
	//
	// @count = (int)
	//
	function addXUserdata(count){
		for(;count > 1; count--){
			addUserdata(false);
		}
		addUserdata(true); //only refresh the view after last user was added
	}
	
	//load and show user data
	//
	function refreshUserdata(showFlash = true) {
		database.ref('users').once('value').then(function(snapshot) {
			// SET HEADER ROW
			var headerstring = "<tr id='table-header'>";
			//ID
			headerstring += "<th>ID</th>";
			//Name
			headerstring += "<th>Name</th>";
			//Score
			headerstring += "<th>Score</th>";
			//close
			headerstring += "</tr>";
			//clear content and set new header
			$('#user-data').html(headerstring);

			//LOAD AND DISPLAY DATA
			var userdata = snapshot.val();
			if(userdata != null){
				for(var id in userdata){
					var datastring = "<tr>";
					//ID
					datastring += "<td>";
					datastring += userdata[id].user.id;
					datastring += "</td>";
					//Name
					datastring += "<td>";
					datastring += userdata[id].user.name;
					datastring += "</td>";
					//Score
					datastring += "<td>";
					datastring += userdata[id].statistics.score;
					datastring += "</td>";
					//finish strings
					datastring += "</tr>";
					
					//write new data
					$('#user-data').append(datastring);
				}
				$('#user-data').css('display', 'block');
				if(showFlash){
					showSuccess('Userdaten erfolgreich geladen');
				}
			} else {
				if(showFlash){
					showWarning('Keine Userdaten gefunden');
				}
			}
		})
		.catch(function(error){
			console.log(error);
			showError('Fehler beim Laden der Userdaten', error);
		});
	}
});
</script>