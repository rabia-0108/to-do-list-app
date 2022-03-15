function newItem() {
    let li = $('<li></li>');
    let inputValue = $('#input').val();
      li.append(inputValue);

  // Add button enables
  if (inputValue === ''){
    alert("Must fill this area to add an item!");
  }   else {
        $('#list').append(li);
  }

// Adding the feature to crossing/'striking' the items
  function crossOut() {
      li.toggleClass("strike");
  }
      li.on("click", crossOut);

  //  Crossing out button (for the list) ('X')
  let crossOutButton = document.createElement("crossOutButton");
      crossOutButton.appendChild(document.createTextNode("X"));
      li.appendChild(crossOutButton);

  // Enableing the X button
      crossOutButton.addEventListener("click", deleteListItem);

  //  DeleteButton enabled
  function deleteListItem() {
      li.addClass("delete");
  }
  deleteButton.on("click", deleteListItem);

  // Now you'll be able to change the order of the items
  $('#list').sortable();
}

// Adding items with the enter key //
$('#input').keydown(function(event){
  var keyCode = (event.keyCode ? event.keyCode : event.which);
  if (keyCode == 13) {
     newItem();
  }
});
