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


// Right-click menu
 $(function() {
        $.contextMenu({
            selector: 'li', 
            callback: function(key, options) {
                // var m = "clicked: " + key;
                // window.console && console.log(m) || alert(m); 
                if (key=='delete') {
                  $(this).remove();
                }
                if (key == 'edit') {
                 
                  $(this).find('.item').text("");
                  $("<input type='text'>").appendTo(this.find('.item')).focus();
                  $(this).keyup(function (e) {
                  if (e.which == 13) {
                    $(this).appendTo(this.find('.item')).text($("<input type='text'>").val());
                    $(this).blur();
                    
    // $(this).append('<li class=\"list-item\"> <input class=\"checkbox\" type=\"checkbox\" value=\"None\" id=\"' + $(this).val() + '\" name=\"check\"/> <label for=\"' + $(this).val() + '\"></label><h3 class=\"item\">' +
    // $(this).val() + '</h3></li>');  
  }
});
                }
            },
            

            items: {
                "edit": {name: "Edit", icon: "edit"},
                "cut": {name: "Cut", icon: "cut"},
               copy: {name: "Copy", icon: "copy"},
                "paste": {name: "Paste", icon: "paste"},
                "delete": {name: "Delete", icon: "delete"},
                
            }
        });

        $('.context-menu-one').on('click', function(e){
            console.log('clicked', this);
        })
           });    


})();