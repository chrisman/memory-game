var data = {
  corey: ['crazy', 'corey'],
  chris: ['cool', 'chris'],
  aubrey: ['awesome', 'aubrey']
};

$(document).ready(function(){
  console.log('doc ready');
  log_data(data);
  make_divs(data);
});

// make a string of divs to inserst.
// make each div have an id equal to an array item from the object
var make_divs = function(obj){
  console.log('make some divs');
  var div_string = [];
  for (var name in obj) {
    div_string.push(obj[name][0]);
    div_string.push(obj[name][1]);
  }
  console.log(div_string.join(' '));
}

var log_data = function(obj){
  for (var name in obj) {
    console.log(name + "'s name is " + obj[name][0] + " " + obj[name][1]);
  }
}
