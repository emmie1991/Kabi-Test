$(document).ready(function(){
  $('.openBtn').click(function(e) {
    //get current card item number
    let itemNo = e.currentTarget.innerText.slice(-1)

    //get current card details
    let cardDetails = $('.item-' + itemNo).clone()
    
    cardDetails.append('<span class="btn closeBtn"><i class="fa-solid fa-chevron-left"></i>nazaj na seznam</span>')

    // put current card details in the modal-more-content
    $('#modal-more-content').html(cardDetails)

    $('.modal, .scroll-lock').addClass('active');
  })

  setInterval(function(){
    $('.closeBtn').click(function(){
      $('#modal-more-content').empty()
      $('.modal, .scroll-lock').removeClass('active')})
    }, 100); 
  })







