var $site = $('.website');
var $link = $('.url');
var $save = $('.save');

$($save).on('click', function(event) {
  event.preventDefault();
  console.log('hi');
  $('.bookmark').append(`<h2>${$site}</h2>
    <h3>${$link}</h3>
    <button type="button" name="read">Mark as Read</button>
    <button type="button" name="remove">Remove</button>`)
});
