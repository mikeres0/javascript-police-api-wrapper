//Test script connection
function testScript(){
	alert('javascript-police-api-wrapper is linked')
}




//Find available datasets
function availableData(){
	var response;
	$.ajax({
		url: "https://data.police.uk/api/crimes-street-dates",
		dataType: "json",
		success: function(data){
			response = data;
		}
	})
	return response;
}




//Gather force info
function getForces(){
	var response;
	$.ajax({
		url: "https://data.police.uk/api/forces",
		dataType: "json",
		success: function(data){
			response = data;
		}
	})
	return response;
}

function getForceInfo(force){
	var response;
	$.ajax({
		url: "https://data.police.uk/api/forces/" + force,
		dataType: "json",
		success: function(data){
			console.log(data)
			//response = data;
		}
	})
	return response;
}

function getForceSeniors(force){
	var response;
	$.ajax({
		url: "https://data.police.uk/api/forces/" + force + "/people",
		dataType: "json",
		success: function(data){
			console.log(data);
			//response = data;
		}
	})
	return response;
}




//Neighbourhood info
function locateNeighbourhood(lat, lon){
	var response;
	$.ajax({
		url: "https://data.police.uk/api/locate-neighbourhood?q=" + lat + " ," + lon + "",
		dataType: "json",
		success: function(data){
			response = data;
		}
	})
	return response;
}

