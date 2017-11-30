(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "5hvykda34wzgye3d6pbs9fxk6rcxup6k"

},{}],2:[function(require,module,exports){
'use strict';

var apiKey = require('./../.env').apiKey;

$(document).ready(function () {
  $('#getDino').click(function () {

    var request = new XMLHttpRequest();
    var url = 'http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=3&words=15';

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        var response = JSON.parse(this.responseText);
        getElements(response);
        console.log(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    var getElements = function getElements(response) {
      response.forEach(function (response) {
        response.forEach(function (string) {
          $('.lipsum').prepend("<li>" + string + "</li>");
        });
      });
    };
  });
});

$(document).ready(function () {
  $('#getWoW').click(function () {

    var request = new XMLHttpRequest();
    var url = 'https://us.api.battle.net/wow/character/Kel\'Thuzad/Thurgadin?fields=appearance&locale=en_US&apikey=' + apiKey;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        var response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    var getElements = function getElements(response) {

      $('.wow').prepend(response.name + "<br>" + response.realm);
      $('.wow').append("<img src='http://render-api-us.worldofwarcraft.com/static-render/us/" + response.thumbnail + "'>");
      console.log(response.thumbnail);
    };
  });
});

$(document).ready(function () {
  $('#getWoW').click(function () {

    var request = new XMLHttpRequest();
    var url = 'https://us.api.battle.net/wow/character/Kel\'Thuzad/Hyperblaster?fields=appearance&locale=en_US&apikey=' + apiKey;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        var response2 = JSON.parse(this.responseText);
        getElements(response2);
        console.log(response2);
      }
    };

    request.open("GET", url, true);
    request.send();

    var getElements = function getElements(response2) {

      $('.wow2').prepend(response2.name + "<br>" + response2.realm);
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

},{"./../.env":1}]},{},[2]);
