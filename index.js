//Transfers the control to input once any key is pressed anywhere on the page.
$(document).keydown(function (event){
    let keyPressed = $("#input-number")
    keyPressed.focus();

});

//Clears the recent input number using slice function
$("#backspace-button").click(function (){
   let back = $("#input-number");
   let newValue  = back.val().slice(0,-1); 
   back.val(newValue);
})

//clearing the whole input area using val() method 
$("#clear").click(function (){
    $("#input-number").val(' ')
})











