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
          $('.wow').append("<img src='http://render-api-us.worldofwarcraft.com/static-render/us/"+response.thumbnail+"'>")
          console.log(response.thumbnail);

    };
  });
});

$(document).ready(function() {
  $('#getWoW').click(function() {

    let request = new XMLHttpRequest();
    let url = `https://us.api.battle.net/wow/character/Kel'Thuzad/Hyperblaster?fields=appearance&locale=en_US&apikey=${apiKey}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response2 = JSON.parse(this.responseText);
        getElements(response2);
        console.log(response2);
      }
    };

    request.open("GET", url, true);
    request.send();

    const getElements = function(response2) {

          $('.wow2').prepend(response2.name+"<br>"+response2.realm)
    };
  });
});
    // Vanilla JavaScript example
//     var xhr = new XMLHttpRequest();
//
//     xhr.open('GET', 'http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=3&words=15');
//     xhr.onload = function() {
//       if (this.status === 200) {
//         document.querySelector('#some-awesome-container').innerHTML = this.response;
//   } else {
//     console.log('Where did all the dinosaurs go?');
//   }
// };
// xhr.send();
//
//   });
// });
