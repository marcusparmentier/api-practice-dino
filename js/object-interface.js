//10 Billion $ piece of software
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#getDino').click(function() {

    let request = new XMLHttpRequest();
    let url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=3&words=15`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        getElements(response);
        console.log(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {
      response.forEach(function(response) {
        response.forEach(function(string) {
          $('.lipsum').prepend("<li>"+string+"</li>")
        })
      })
    };
  });
});

$(document).ready(function() {
  $('#getWoW').click(function() {

    let request = new XMLHttpRequest();
    let url = `https://us.api.battle.net/wow/character/Kel'Thuzad/Thurgadin?fields=appearance&locale=en_US&apikey=${apiKey}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    const getElements = function(response) {

          $('.wow').prepend(response.name+"<br>"+response.realm)

          setInterval(function(){
            $('.wow2').prepend("<img src='http://render-api-us.worldofwarcraft.com/static-render/us/"+response.thumbnail+"'>")
          }, 1000);
            $('.wow2').prepend("<h1>SCANNING...</h1>");

          setInterval(function(){alert("FACIAL RECOGNITION AT 99.9%")},7000);
          setInterval(function(){$('.wow2').append("<h3>MATCH FOUND!</h3>")},7000);

    };
  });
});

$(document).ready(function() {
  $('#getWoW').click(function() {

    let request = new XMLHttpRequest();
    let url = `https://us.api.battle.net/wow/character/Kel'Thuzad/Hyperblaster?fields=appearance&locale=en_US&apikey=${apiKey}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response3 = JSON.parse(this.responseText);
        getElements(response3);
        console.log(response3);
      }
    };

    request.open("GET", url, true);
    request.send();

    const getElements = function(response3) {

          $('.wow2').append(response3.name+"<br>"+response3.realm)

    };
  });
});

// Changed two variables now it works. Commented that out.  Now it really works.
