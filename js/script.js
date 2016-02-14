(function(){
 
 //Clears text input when clicked 
 $('.add-item').click(function() {
  this.value="";
 }); 

//Adds Item to List
$('.add-item').keyup(function (e) {
  if (e.which == 13) {
    $('.item-list').prepend('<li class=\"list-item\"> <input type=\"checkbox\" value=\"None\" id=\"' + $('.add-item').val() + '\" name=\"check\"/> <label for=\"' + $('.add-item').val() + '\"></label><h3 class=\"item\">' +
    $('.add-item').val() + '</h3></li>');
    
    $('.add-item').val('+ Add an item...');
    $('.add-item').blur();   
  }
});

// Checked items move to checked list

// $('input[type="checkbox"]').click(function() {
  
//   $('.list-item').remove();
//   $('.checked-list').prepend('.list-item');
//   $('.list-item').slideUp();
// });


  $('.list-item input[type="checkbox"]').click(function() {
    
    $(this).
      prop('checked', true).
      closest('.list-item').removeClass('list-item').addClass('list-item-checked').prependTo($('.checked-list'));
  
});
  
// Show and hide checked items
$('.show-list-style').click(function() {
  $('.checked-list').toggle();
});


// $( "p" ).click(function() {
//   $( this ).slideUp();
// });





})();