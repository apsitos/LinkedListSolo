var $site = $('.website');
var $link = $('.url');
var $save = $('.save');

$($save).on('click', function(event) {
  event.preventDefault();
  $('.bookmark').append(`<section class="newbookmark"><h2>${$site.val()}</h2>
    <h3>${$link.val()}</h3>
    <button type="button" name="mark">Read</button>
    <button type="button" name="remove">Delete</button></section>`);
  $($site).val('');
  $($link).val('');
});

$('.mark').on('click', '.newbookmark', function(event) {
  event.preventDefault();
  $('section.newbookmark').toggleClass('.read');
  console.log('read');
})
