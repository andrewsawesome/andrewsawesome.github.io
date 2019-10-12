#This is the JavaScript file for my Url Shortener#

var endpoint = "https://www.jsonstore.io/89337ad770eb2b5f77506f87e71ce41ec811375afb35f5a66c37b57de5b9c778";
function getrandom(){
    var random_string = Math.random().toString(32).substring(2, 5) + Math.random().toString(32).substring(2, 5);
    return random_string()
}
