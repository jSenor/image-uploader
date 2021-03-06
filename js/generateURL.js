/* 
    Generate a random URL
    Choose a number between 0 and 1.
    Slice off the leading '0.' and extra padding zeros.
    Repeat the string by `var length`
    Slice `var length` characters from the string.
*/
var siteURL = "www.imgup.com/";

function RandomURL(){
    function GenerateURL(){
        var length = 16;
        var randomString = siteURL + Array(length+1).join((Math.random().toString(36)+'00000000000000000').slice(2, 18)).slice(0, length);
        return randomString;
    }
    var url = document.querySelector('#url');
    url.value = GenerateURL();
    
}

function clearUrl(){
    var url = document.querySelector("#url");
    url.value = "";
}

//Implementing copy functionality
(function(){

    try{
        //Get the necessary inputs
        var copyButton = document.querySelector("#copy");
        var url = document.querySelector("#url");

        copyButton.onclick = function(event){
            event.preventDefault();
            //Select the text to be copied
            url.focus();
            url.setSelectionRange(0, url.value.length);

            //Copy the text
            document.execCommand("copy");

            var copyAlert = document.querySelector("#copy-alert");
            copyAlert.style.opacity = 1;

            function close(){
                copyAlert.style.opacity = 0;
            }

            setTimeout(close, 1000);

        }

    }

    catch(err){
        console.log("Couldn't copy");
    }

})();

//Implementing the click generate functionality
(function(){

    try{

        var fileInput = document.querySelector("#choose-file");

        fileInput.addEventListener("click", function(event){
            this.value = "";
            clearUrl();
        });

        fileInput.addEventListener("change", function(event){
            RandomURL();
        });

    }

    catch(err){
        console.log("This is shit");
    }

})();


//Implementing drag drop feature
(function(){

    try{

        var dropZone = document.querySelector("#drop-container");
        var fileInput = document.querySelector("#choose-file");

        dropZone.addEventListener("dragover", function(event){
            event.preventDefault();
            event.stopPropagation();
            dropZone.className = "hover";
            // event.dataTransfer.setData("text/plain", null);
        });

        dropZone.addEventListener("dragstart" , function(event){
            event.dataTransfer.setData("text/plain", null);
            event.preventDefault();
            event.stopPropagation();
        });

        dropZone.addEventListener("drop", function(event){
            event.preventDefault();
            event.stopPropagation();

            dropZone.className = "";

            var dt = event.dataTransfer;
            fileInput.files = dt.files;

        });

    }

    catch(error){
        console.log("Drag drop is not supported at all");
    }

    function handleDrop(){
        event.preventDefault();
        console.log("someone dropped something here");
    }

})();