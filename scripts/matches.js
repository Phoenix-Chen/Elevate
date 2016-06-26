// $(document).ready(function(){
//     myJsRoutes.controllers.Application.getPosts().ajax({
//         success : function(data) {
//             //alert(data);
//             obj = JSON.parse(data);
//             var cardDeck = document.createElement('div');
//             cardDeck.className="card-deck";
//             for(var i=0;i<obj.length;i++){
//                 cardDeck.innerHTML=cardDeck.innerHTML+'<div class="card"><a href="#" onclick=\'setModals(\"'+i+'\")\' data-toggle="modal" data-target="#foodModal"><img class="card-img-top img-responsive" src=\"/assets/images/'+obj[i].image_file+'\" style="width:100%" alt="Food pic"></a><div class="card-block"><div class="row"><div class="col-lg-8 col-md-8 col-sm-8 col-xs-8"><div class="short-div foodName">'+obj[i].title+'</div><div class="short-div foodDesc">'+obj[i].description+'</div></div><div class="col-lg-4 col-md-4 col-sm-6 col-xs-4 price">$'+obj[i].price+'.00</div></div><div class="row"><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><div class="pull-right"><button type="button" class="btn btn-success-outline" onclick="triggerOrderModal('+i+')">Order now</button></div></div></div><br><div class="row"><p class="card-text"><small class="text-muted pull-right">*May contain peanuts and dairy products.</small></p></div></div></div>';
//                 if (i%3==2) {
//                     $('#card-wrapper').append(cardDeck);
//                     $('#card-wrapper').append('<br></br>')
//                     var cardDeck = document.createElement('div');
//                     cardDeck.className="card-deck";
//                 }
//             }
//         }
//     });
// });



var reader; //GLOBAL File Reader object for demo purpose only

    /**
     * Check for the various File API support.
     */
    function checkFileAPI() {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            reader = new FileReader();
            console.log("B");
            readText("/Users/Brian/Desktop/Hackathons/Elevate/providers.txt");
            return true; 
        } else {
            alert('The File APIs are not fully supported by your browser. Fallback required.');
            return false;
        }
    }

    /**
     * read text input
     */
    function readText(filePath) {
        var output = ""; //placeholder for text output
        if(filePath.files && filePath.files[0]) {           
            reader.onload = function (e) {
                output = e.target.result;
                displayContents(output);
            };//end onload()
            reader.readAsText(filePath.files[0]);
        }//end if html5 filelist support
        else if(ActiveXObject && filePath) { //fallback to IE 6-8 support via ActiveX
            try {
                reader = new ActiveXObject("Scripting.FileSystemObject");
                var file = reader.OpenTextFile(filePath, 1); //ActiveX File Object
                output = file.ReadAll(); //text contents of file
                file.Close(); //close file "input stream"
                displayContents(output);
            } catch (e) {
                if (e.number == -2146827859) {
                    alert('Unable to access local files due to browser security settings. ' + 
                     'To overcome this, go to Tools->Internet Options->Security->Custom Level. ' + 
                     'Find the setting for "Initialize and script ActiveX controls not marked as safe" and change it to "Enable" or "Prompt"'); 
                }
            }       
        }
        else { //this is where you could fallback to Java Applet, Flash or similar
            return false;
        }       
        return true;
    }   

    /**
     * display content using a basic HTML replacement
     */
    function displayContents(txt) {
        //var el = document.getElementById('main'); 
        //el.innerHTML = txt; //display output in DOM
        console.log(txt);
    }   



function readCookies(){
    var x = localStorage.getItem('list');
    // console.log(x);
    x = JSON.parse(x);
    // console.log(x.result);
    var data = x.result.substring(x.result.indexOf('['));
    console.log(JSON.parse(data));

    data = JSON.parse(data);

    $("#name1").text(data[0].name);
    $("#name2").text(data[1].name);
    $("#name3").text(data[2].name);
    $("#distance1").text(parseFloat(data[0].distance).toFixed(2) + ' miles');
    $("#distance2").text(parseFloat(data[1].distance).toFixed(2) + ' miles');
    $("#distance3").text(parseFloat(data[2].distance).toFixed(2) + ' miles');
    // var ca = document.cookie.split(';');
    // for(var i=0;i < ca.length;i++) {
    //     var c = ca[i];
    //     while (c.charAt(0)==' ') c = c.substring(1,c.length);
    //     if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    // }
    // return null;
}


// <script>
    function readTextFile() {
        var file = new File("/Users/Brian/Desktop/Hackathons/Elevate/providers.txt");
        // var rawFile = new XMLHttpRequest();
        // rawFile.open("GET", file, false);
        // rawFile.onreadystatechange = function ()
        // {
        //     if(rawFile.readyState === 4)
        //     {
        //         if(rawFile.status === 200 || rawFile.status == 0)
        //         {
        //             var allText = rawFile.responseText;
        //             alert(allText);
        //         }
        //     }
        // }
        // rawFile.send(null);
        // var reader = new FileReader();
        // reader.onload = function(e) {
        //   var text = reader.result;
        //   console.log(text);
        // }

        // reader.readAsText(file);






        // var nameInput = 'name:';
        // var phoneInput = 'phone:';
        // var addressInput = 'address:';
        // var distanceInput = 'distance:'; // distance, name, 

        // for(var i=0;i < ca.length;i++) {
        //     var c = ca[i];
        //     while (c.charAt(0)==' ') c = c.substring(1,c.length);
        //     if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        // }



        // var cardDeck = document.createElement('div');
        // cardDeck.className="card-deck";
        // for(var i=0;i<obj.length;i++){
        //     cardDeck.innerHTML = cardDeck.innerHTML+'<div class="row"><div class="col-md-2"></div><div class="col-md-8"><div class="card"><div class="row"><div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 profilePane"><img class="profilePic" src="http://i2.istockimg.com/file_thumbview_approve/31627664/5/stock-illustration-31627664-kawaii-starfish.jpg"/></div><div class="col-lg-5 col-md-5 col-sm-5 col-xs-5"><div class="name">'+obj[i].name+'</div><div class="phone">'+obj[i].phone+'</div><div class="address">'+obj[i].address+'</div></div><div class="col-lg-4 col-md-4 col-sm-4 col-xs-4"><br><br><div class="distance">'+obj[i].distance+' miles</div></div></div></div></div><div class="col-md-2"></div></div>';
        //     $('#card-wrapper').append(cardDeck);
        //     $('#card-wrapper').append('<br></br>');
        // }
    }
    $(document).ready(function(){
        //readTextFile();
        //console.log("A");
        readCookies();
    });
// </script>

