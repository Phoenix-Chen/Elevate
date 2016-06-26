function assess(){
	var zip = $(".zipcode").val();
	// $.post('http://localhost:5000/api/getproviders/'+zip,{zipcode:zip});
	$.ajax({
        type: 'POST',
        url: 'http://localhost:5000/api/getproviders/'+zip,
        success: function(){
            console.log("Success!");
        },
        error: function(){
        	console.log("Failed!");
        },
        complete: function(){
        	console.log("Completed!");
        	window.location.href = "matches.html";
        }
    });
	// var url = 'http://localhost:5000/api/getproviders/'+zip;

 //    var request = new XMLHttpRequest();
	// var params = "zipcode="+zip;
	// request.open('POST', url, true);
	// request.onreadystatechange = function() {if (request.readyState==4) console.log("It worked!");};
	// request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	// request.setRequestHeader("Content-length", params.length);
	// request.setRequestHeader("Connection", "close");
	// request.send(params);
	//console.log(request);
}