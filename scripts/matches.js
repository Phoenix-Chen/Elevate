$(document).ready(function(){
    myJsRoutes.controllers.Application.getPosts().ajax({
        success : function(data) {
            //alert(data);
            obj = JSON.parse(data);
            var cardDeck = document.createElement('div');
            cardDeck.className="card-deck";
            for(var i=0;i<obj.length;i++){
                cardDeck.innerHTML=cardDeck.innerHTML+'<div class="card"><a href="#" onclick=\'setModals(\"'+i+'\")\' data-toggle="modal" data-target="#foodModal"><img class="card-img-top img-responsive" src=\"/assets/images/'+obj[i].image_file+'\" style="width:100%" alt="Food pic"></a><div class="card-block"><div class="row"><div class="col-lg-8 col-md-8 col-sm-8 col-xs-8"><div class="short-div foodName">'+obj[i].title+'</div><div class="short-div foodDesc">'+obj[i].description+'</div></div><div class="col-lg-4 col-md-4 col-sm-6 col-xs-4 price">$'+obj[i].price+'.00</div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><div class="pull-right"><button type="button" class="btn btn-success-outline" onclick="triggerOrderModal('+i+')">Order now</button></div></div></div><br><div class="row"><p class="card-text"><small class="text-muted pull-right">*May contain peanuts and dairy products.</small></p></div></div></div>';
                if (i%3==2) {
                    $('#card-wrapper').append(cardDeck);
                    $('#card-wrapper').append('<br></br>')
                    var cardDeck = document.createElement('div');
                    cardDeck.className="card-deck";
                }
            }
        }
    });
});


<script>
    function readCookie() {
        var nameInput = 'name:';
        var phoneInput = 'phone:';
        var addressInput = 'address:';
        var distanceInput = 'distance:'; // distance, name, 

        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }

        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;

        var cardDeck = document.createElement('div');
        cardDeck.className="card-deck";
        for(var i=0;i<obj.length;i++){
            cardDeck.innerHTML = cardDeck.innerHTML+'<div class="row"><div class="col-md-2"></div><div class="col-md-8"><div class="card"><div class="row"><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 profilePane"><img class="profilePic" src="http://i2.istockimg.com/file_thumbview_approve/31627664/5/stock-illustration-31627664-kawaii-starfish.jpg"/></div><div class="col-lg-5 col-md-5 col-sm-5 col-xs-5"><div class="name">'+obj[i].name+'</div><div class="phone">'+obj[i].phone+'</div><div class="address">'+obj[i].address+'</div></div><div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"><br><br><div class="distance">'+obj[i].distance+' miles</div></div></div></div></div><div class="col-md-2"></div></div>';
            $('#card-wrapper').append(cardDeck);
            $('#card-wrapper').append('<br></br>');
        }
    }
    $(document).ready(function(){
        readCookie();
    });
</script>

