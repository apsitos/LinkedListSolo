var $site = $('.website');
var $link = $('.url');
var $save = $('.save');
// var $list = [];

function disableSave() {
  $($save).attr('disabled', true);
}

disableSave();

$($save).on('click', function() {
  if ($site.val() || $link.val() === '') {
     $('h2.error').text("Please enter information into both fields.");
  } else {
    $($save).prop('disabled', false);

    $('.bookmark').append(`<section class="newbookmark"><h2>${$site.val()}</h2>
      <h3>${$link.val()}</h3>
      <button type="button" name="mark" class="mark">Read</button>
      <button type="button" name="remove" class="delete">Delete</button></section>`);

    // $($list).push();

    $($site).val('');

    $($link).val('');

    disableSave();

    $('.mark').on('click', function() {
      $(this).closest('section').toggleClass('read');
      console.log('read');
    });

    $('.delete').on('click', function() {
      $(this).closest('section').remove();
    });
  }
});
