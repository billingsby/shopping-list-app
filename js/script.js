(function(){
 
 //Clears text input when clicked 
 $('.add-item').click(function() {
  this.value="";
 }); 

//Adds Item to List
$('.add-item').keyup(function (e) {
  if (e.which == 13) {
    $('.item-list').prepend('<li class=\"list-item\"> <input class=\"checkbox\" type=\"checkbox\" value=\"None\" id=\"' + $('.add-item').val() + '\" name=\"check\"/> <label for=\"' + $('.add-item').val() + '\"></label><h3 class=\"item\">' +
    $('.add-item').val() + '</h3></li>');
    
    $('.add-item').val('+ Add an item...');
    $('.add-item').blur();   
  }
});

// Checked items move to checked list

$('.item-list').on('click', '.checkbox', function() {
    console.log('clicked');
    $(this).
      attr('checked','checked').
      closest('.list-item').removeClass('list-item').addClass('list-item-checked').prependTo($('.checked-list'));
  
});

// Move items back to item list

$('.checked-list').on('click', '.checkbox', function() {
    console.log('clicked');
    $(this).
      removeAttr('checked').
      closest('.list-item-checked').removeClass('list-item-checked').addClass('list-item').appendTo($('.item-list'));
  
});
  
// Show and hide checked items
$('.show-list-style').click(function() {
  $('.checked-list').toggle();
});


// $( "p" ).click(function() {
//   $( this ).slideUp();
// });


// .removeAttr('checked')


})();