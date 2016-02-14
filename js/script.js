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


// Right-click menu
 $(function() {
        $.contextMenu({
            selector: 'li', 
            callback: function(key, options) {
              
                if (key=='quit') {
                  $(this).
                  closest('.list-item').removeClass('list-item')
                  .addClass('list-item-checked').prependTo($('.checked-list'));
                var checkbox = $(this.find('.checkbox'));
                $(checkbox).prop('checked',true);
                }


                if (key=='delete') {
                  $(this).remove();
                }

                if (key == 'edit') {
                  // Change li item to input field
                  var editItem = $(this.find('.item'));
                  console.log(editItem);
                  $(editItem).text("");
                  var input = $("<input type='text'>");
                  $(input).appendTo(editItem).focus();
                  
                  // Finish when enter is pressed
                  $(this).keyup(function (e) {
                  if (e.which == 13) {
                    var change = $(input).val(); 
                    console.log(change);
                    $(editItem).append(change);
                    $(input).remove(); //remove input field
                    $(this).blur();
                    change = null;
                    console.log(change);
                    }
                  });
                }
            },

            items: {
                "quit": {name: "Mark as checked", icon: "quit"},
                "edit": {name: "Edit", icon: "edit"},
                "delete": {name: "Delete", icon: "delete"}
            }
        });

        $('.context-menu-one').on('click', function(e){
            console.log('clicked', this);
        })
  });    


})();