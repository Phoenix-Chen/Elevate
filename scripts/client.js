$(document).ready(function(){
    $.ajax({
            type: 'GET',
            url: 'http://localhost:5000/api/getproviders/94040/10',
            dataType: 'jsonp',
            success: function(data){
                alert(data);
            }
        });
});