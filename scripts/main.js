var data = {
  corey: ['crazy', 'corey'],
  chris: ['cool', 'chris'],
  aubrey: ['awesome', 'aubrey']
};

$(document).ready(function(){
  console.log('doc ready');
  log_data(data);
});

var log_data = function(obj){
  for (var name in obj) {
    console.log(name + "'s name is " + obj[name][0] + " " + obj[name][1]);
  }
}
