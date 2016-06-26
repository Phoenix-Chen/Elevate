function assess(){
	var zip = $(".zipcode").val();
	$.ajax({
        type: 'POST',
        url: 'http://localhost:5000/api/getproviders/'+zip,
        data: zip,
        dataType: 'text',
        success: function(){
            console.log("Success!");
        },
        error: function(){
        	console.log("Failed!");
        },
        complete: function(){
        	console.log("Completed!");
        }
    });
}