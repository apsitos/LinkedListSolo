var $site = $('.website');
var $link = $('.url');
var $save = $('.save');
var $list = [];

$($save).on('click', function() {
  $('.bookmark').append(`<section class="newbookmark"><h2>${$site.val()}</h2>
    <h3>${$link.val()}</h3>
    <button type="button" name="mark" class="mark">Read</button>
    <button type="button" name="remove" class="delete">Delete</button></section>`);

  $($list).push();

  $($site).val('');

  $($link).val('');

  $('.mark').on('click', function() {
    $(this).closest('section').toggleClass('read');
    console.log('read');
  });

  $('.delete').on('click', function() {
    $(this).closest('section').remove();
  });
  
});
