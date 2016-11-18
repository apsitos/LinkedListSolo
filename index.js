var $site = $('.website');
var $link = $('.url');
var $save = $('.save');

$($save).on('click', function(event) {
  event.preventDefault();

  $('.bookmark').append(`<section class="newbookmark"><h2>${$site.val()}</h2>
    <h3>${$link.val()}</h3>
    <button type="button" name="mark" class="mark">Read</button>
    <button type="button" name="remove" class="remove">Delete</button></section>`);

  $($site).val('');

  $($link).val('');

  $('.mark').on('click', function(event) {
    $('section.newbookmark').closest('section').toggleClass('read');
    console.log('read');
  });
  //
  // $('.remove').on('click', function(event) {
  //   $('section.newbookmark').remove()
  // })
});
