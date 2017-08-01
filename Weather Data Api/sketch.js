var weather;

var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=001b0f58045147663b1ea518d34d88b4';
var units = '&units=metric';

var input;
var button;

function setup() {
  createCanvas(400, 200);

  button = select('#submit');
  button.mousePressed(weatherAsk);

  input = select('#city');
}

function weatherAsk() {
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData);
}

function gotData(data) {
  weather = data;
}

function draw() {
  background(0);
  if (weather) 
  {
    var temp = weather.main.temp;
    var humidity = weather.main.humidity;


    ellipse(100, 100, temp, temp);
    ellipse(300, 100, humidity, humidity);
    
    text(input.value(),10,10,100);
    fill(800);

  }
}