var data = {
  corey: ['crazy', 'corey'],
  chris: ['cool', 'chris'],
  aubrey: ['awesome', 'aubrey'],
  april: ['angry', 'april'],
  ben: ['busy', 'ben'],
  brandon: ['bodacious', 'brandon'],
  bryce: ['boarding', 'bryce'],
  helene: ['horrified', 'helene'],
  jess: ['jittery', 'jess'],
  joshsn: ['jovial', 'josh'],
  joshss: ['jammin', 'josh'],
  june: ['jumpin', 'june'],
  kinsey: ['kind', 'kinsey'],
  maria: ['mindful', 'maria'],
  mikeh: ['moldy', 'mike'],
  mikew: ['musical', 'mike'],
  nico: ['nightowl', 'nico'],
  patj: ['perceptive', 'pat'],
  patd: ['poor', 'pat'],
  rach: ['radical', 'rachel'],
  sam: ['super', 'sam'],
  sean: ['socially uncomfortabl', 'sean'],
  stu: ['smarmy', 'stu'],
  tay: ['talkative', 'taylor'],
  teisia: ['terrific', 'teisia'],
  tom: ['tsunami', 'tommy'],
  tony: ['twisted', 'tony']
};

$(document).ready(function(){
  var selected = [];
  var my_divs = make_divs_with_ids(shuffle(get_ids(data)));
  console.log(my_divs);
  $('section').html(my_divs);
  $('div').on('click', function(){
    $(this).toggleClass('selected');
    if ($(this).hasClass('selected')) {
      $(this).text($(this).attr('id'));
      selected.push($(this).attr('id'));
    } else {
      $(this).text('');
      selected.pop();
    }
    if (selected.length >= 2) {
      for (var name in data){
        console.log(data[name].sort().join(''));
        if (selected.sort().join('') == data[name].sort().join('')){
          $('.selected').removeClass('selected').addClass('match');
          setTimeout(function(){
            $('.match').fadeOut(800);
          }, 800);
        } else {
          setTimeout(function(){
            $('.selected').text('').removeClass('selected');
            selected = [];
          }, 800);
        }
      }
    }
  });
});

// return an array of div elements containing ids
var make_divs_with_ids = function(a){
  for (var i = 0; i < a.length; i++){
    a[i] = "<div id='" + a[i] + "'>&nbsp;</div>";
  }
  return a;
}

// http://bost.ocks.org/mike/shuffle/
var shuffle = function(array){
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

var get_ids = function(obj){
  console.log('make an array of ids');
  var div_string = [];
  for (var name in obj) {
    div_string.push(obj[name][0]);
    div_string.push(obj[name][1]);
  }
  console.log(div_string.join(' '));
  return div_string;
}

var log_data = function(obj){
  for (var name in obj) {
    console.log(name + "'s name is " + obj[name][0] + " " + obj[name][1]);
  }
}
