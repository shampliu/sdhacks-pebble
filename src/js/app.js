/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');

var main = new UI.Card({
  title: 'asis.',
  // icon: 'images/menu_icon.png',
  subtitle: 'fuck pebble',
  body: 'press up'
  
});

main.show();

main.on('click', 'up', function(e) {
  console.log("clicked up af");

  //ajax request to backend
  ajax({
    url: 'https://sdhacks2015.herokuapp.com/orders',
    method: 'GET',
    type: 'json'
    // crossDomain: true
  },
  function(data) {
    console.log("succeeded ajax");
    console.log(data);

    // main.body(data[0].message);
    //console.log(data);
    var msgs = data;

    for (var i = 0; i < msgs.length; i++) {
      msgs[i].subtitle = msgs[i].message;
      msgs[i].title = "blah";
      delete msgs[i].message;
    }

    console.log(msgs);

    var menu = new UI.Menu({
      sections: [{
        title: 'Notifications',
        items: msgs
      }]
    });
    
    // menu.on('select', function(e) {
    //   console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    //   console.log('The item is titled "' + e.item.title + '"');
    // });
  
    menu.show();
  },
  function(error) {
    // Failure!
    console.log("failed!");
    console.log(error);
  }
);
  
});
  
