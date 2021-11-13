// jQuery(document).ready(function(){
//     // This button will increment the value
//     $('[data-quantity="plus"]').click(function(e){
//         // Stop acting like a button
//         e.preventDefault();
//         // Get the field name
//         fieldName = $(this).attr('data-field');
//         // Get its current value
//         var currentVal = parseInt($('input[name='+fieldName+']').val());
//         // If is not undefined
//         if (!isNaN(currentVal)) {
//             // Increment
//             $('input[name='+fieldName+']').val(currentVal + 1);
//         } else {
//             // Otherwise put a 0 there
//             $('input[name='+fieldName+']').val(0);
//         }
//     });
//     // This button will decrement the value till 0
//     $('[data-quantity="minus"]').click(function(e) {
//         // Stop acting like a button
//         e.preventDefault();
//         // Get the field name
//         fieldName = $(this).attr('data-field');
//         // Get its current value
//         var currentVal = parseInt($('input[name='+fieldName+']').val());
//         // If it isn't undefined or its greater than 0
//         if (!isNaN(currentVal) && currentVal > 0) {
//             // Decrement one
//             $('input[name='+fieldName+']').val(currentVal - 1);
//         } else {
//             // Otherwise put a 0 there
//             $('input[name='+fieldName+']').val(0);
//         }
//     });
// });

// function incrementValue(e) {
//     e.preventDefault();
//     var fieldName = $(e.target).data('field');
//     var parent = $(e.target).closest('div');
//     var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
  
//     if (!isNaN(currentVal)) {
//       parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
//     } else {
//       parent.find('input[name=' + fieldName + ']').val(0);
//     }
//   }
  
//   function decrementValue(e) {
//     e.preventDefault();
//     var fieldName = $(e.target).data('field');
//     var parent = $(e.target).closest('div');
//     var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
  
//     if (!isNaN(currentVal) && currentVal > 0) {
//       parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
//     } else {
//       parent.find('input[name=' + fieldName + ']').val(0);
//     }
//   }
  
//   $('.input-group').on('click', '.button-plus', function(e) {
//     incrementValue(e);
//   });
  
//   $('.input-group').on('click', '.button-minus', function(e) {
//     decrementValue(e);
//   });

function incrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
  
    if (!isNaN(currentVal)) {
      parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
      parent.find('input[name=' + fieldName + ']').val(0);
    }
  }
  
  function decrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
  
    if (!isNaN(currentVal) && currentVal > 0) {
      parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
      parent.find('input[name=' + fieldName + ']').val(0);
    }
  }
  
  $('.input-group').on('click', '.button-plus', function(e) {
    incrementValue(e);
  });
  
  $('.input-group').on('click', '.button-minus', function(e) {
    decrementValue(e);
  });