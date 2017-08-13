document.addEventListener("deviceready", function () {
    Firebase.goOnline();
});

// Initialize Firebase
var config = {
	apiKey: "AIzaSyD55-o52OHGk97yNQCRfQtnmdL6G4ZgJI0",
	authDomain: "airport-d0ac6.firebaseapp.com",
	databaseURL: "https://airport-d0ac6.firebaseio.com",
	projectId: "airport-d0ac6",
	storageBucket: "airport-d0ac6.appspot.com",
	messagingSenderId: "637529405982"
};
firebase.initializeApp(config);

var rootRef = firebase.database().ref();

function getFlightInfo() {
	var rawCode = $('#airplane_code').val();
	var modifiedCode = rawCode.toUpperCase();

	// var flightInfoRef = firebase.database().ref('flight_info/' + code);

	var dataComponentsArray = ['arrival', 'departure', 'from', 'to', 'weather'];
	var dataComponentsArrayLength = dataComponentsArray.length;
	for (var i = 0; i < dataComponentsArrayLength; i++) {
	    // alert(dataComponentsArray[i]);
	    var flightInfoRef = firebase.database().ref('flightInfo/' + modifiedCode + '/' + dataComponentsArray[i]);
		flightInfoRef.on('value', function(snapshot) {
		  // alert(snapshot.val());
		  // document.getElementById(dataComponentsArray[i]).innerHTML = snapshot.val();
		  $('#' + dataComponentsArray[i]).html(snapshot.val());
		});
	}
}