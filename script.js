$(function(){ //shorthand for doc ready IIFE
   
  
  consoloe.log('here');   
  consoloe.log($('#userSignInput')); 
  
  
  //capture user's sign message & update pricing
  $('#userSignInput').on('keyup', function(e) {
    
  var inputLength = $(this).val().length
  $('#tiles').text(inputLength);
  updatePrice(inputLength)
  //var inputFont = False;
 // var inputColor = False;
 
  })
   
  //capture user's font choice & update pricing
  $('#userFontInput').on('change', function(e) {
    
    inputFont = $(this).val(); 
    
//    console.log(inputFont); 
  //  console.log($(this).is(':checked').val());
    console.log($(this).val());
     
    
    
    //$('input[name=name_of_your_radiobutton]:checked').val();
    
    inputColor = $('#userColorInput').is(':checked');   
   
      // ('#previewMsg').css("font-family": "serif");
      // onclick="changeFont(this, 'helvetica')
      updatePrice($('#userSignInput').val().length, inputFont, inputColor)
  })
  
  //capture user's color choice & update pricing
  $('#userColorInput').on('click', function(e) {
    
    inputColor = $(this).is(':checked');
    inputFont = $('#userFontInput').is(':checked'); 
   
      updatePrice($('#userSignInput').val().length, inputFont, inputColor)
  })
  
  $('#confirmOrder').on('click', function(e) {
    event.preventDefault();
    // console.log('firing?')
    
    var previewMsg =  $('#userSignInput').val();
    // $('#previewScreen').html(); 
    
    $('#previewScreen').toggle();
    $('#defaultMsg').html(previewMsg);

    
  }) //closing tag to preview/confirm click event
  
  $('#cancelPreview').on('click', function(e) {
    event.preventDefault();
    // console.log('firing?')
   
    $('#previewScreen').toggle();
    
  }) //closing tag to cancel click event
  
  
  $('#confirmPreview').on('click', function(e) {
    event.preventDefault();
    // console.log('firing?')
   
    $('#previewScreen').text("Thanks for your purchase!");
    
  }) //closing tag to confirm click event
  
}) //closing tag to my doc.ready f/n
  
  
//updates pricing
function updatePrice(signLength, fontUpgrade, colorUpgrade) {
  
/*  alert( fontUpgrade);
  alert( colorUpgrade);
 */

  var costPerTile = 5;
  
  if (fontUpgrade && colorUpgrade) { costPerTile = 8; }
  else if (fontUpgrade) { costPerTile = 6; }
  else if (colorUpgrade) { costPerTile = 7; ;}
  else { costPerTile = 5; }
  
  var subTotal = signLength * costPerTile;
  var shipping = 7;
  
  if(signLength !=0) { shipping = 7; }
  else { shipping = 0; }
  
  var grandTotal = subTotal + shipping;
  
  $('#subTotal').text('$'+subTotal);
  $('#shipping').text('$'+shipping);
  $('#grandTotal').text('$'+grandTotal);
  
  return grandTotal;
}


/* function calcPriceColor(usersColor) {
  
  //did they select a color? if not, charge nothing extra
  if(usersColor == 'none') {
    return 0; 
  }
  elsif(usersColor == 'yellow') {
    return 3; 
  }
  elsif(usersColor == 'blue') {
    return 2; 
  }
  else{return 1}


  
} */