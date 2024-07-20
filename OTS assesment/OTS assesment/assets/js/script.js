$(document).ready(function() {
    // Attach click event to the button
    $('#toggle-btn').on('click', function() {
      // Toggle visibility of col-md-3
      $('#description-box').toggle();
      
      // Toggle classes for col-md-6
      $('#avg-box').toggleClass('col-md-6 col-md-9');

      // Toggle visibility of div abc
      $('#revert').toggle();

      // $('#toggle-btn').on()
    });
    $('#revert-btn').on('click', function() {
      // Toggle visibility of col-md-3
      $('#description-box').toggle();
      
      // Toggle classes for col-md-6
      $('#avg-box').toggleClass('col-md-6 col-md-9');

      // Hide div abc
      $('#revert').hide();
    });





    $('#auction-btn').on('click', function() {
      // Toggle visibility of col-md-3
      $('#auction-box').toggle();
      
      // Toggle classes for col-md-6
      $('#breakdown-box').toggleClass('col-md-6 col-md-9');

      // Toggle visibility of div abc
      $('#revert-auction').toggle();

      // $('#toggle-btn').on()
    });
    $('#auc-revert-btn').on('click', function() {
      // Toggle visibility of col-md-3
      $('#auction-box').toggle();
      
      // Toggle classes for col-md-6
      $('#breakdown-box').toggleClass('col-md-6 col-md-9');

      // Hide div abc
      $('#revert-auction').hide();
    });




    $('#blocks-btn').on('click', function() {
      // Toggle visibility of col-md-3
      $('#blocks-box').toggle();
      
      // Toggle classes for col-md-6
      $('#analytics-box').toggleClass('col-md-6 col-md-9');

      // Toggle visibility of div abc
      $('#revert-blocks').toggle();

      // $('#toggle-btn').on()
    });
    $('#revert-blocks-btn').on('click', function() {
      // Toggle visibility of col-md-3
      $('#blocks-box').toggle();
      
      // Toggle classes for col-md-6
      $('#analytics-box').toggleClass('col-md-6 col-md-9');

      // Hide div abc
      $('#revert-blocks').hide();
    });
  });