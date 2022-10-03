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

































// const modal = document.getElementById('simpleModal');
// const scrollLock = document.getElementsByClassName('scroll-lock')[0];
// const moreBtns = document.querySelectorAll(".item-more-btn");
// const modalMoreContent = document.getElementById("modal-more-content");

// const modalBtnEvent = document.querySelectorAll('.modalBtn');
// const closeBtn = document.getElementsByClassName('closeBtn')[0];


// // Listen for OPEN Click
// modalBtnEvent.forEach(function(e) {
//   e.addEventListener('click', openModal);
//   })
//   // Listen for CLOSE Click
//   closeBtn.addEventListener('click', closeModal);
  
//   // Function to OPEN modal
//   function openModal() {
//     //get first itemContent details from item-*


//     // let itemContent = document.getElementsByClassName(`item-${modalBtn.innerText.slice(-1)}`)[0];

//     //css
//     modal.style.display = 'block';
//     scrollLock.style.overflowY = 'hidden';

//     //add html
//     let html = itemContent.innerHTML+`<span class="btn closeBtn"><i class="fa-solid fa-chevron-left"></i>nazaj na seznam</span>`
//     console.log(html)

//     modalMoreContent.innerHTML = itemContent.innerHTML.replace(itemContent.innerHTML, html)
//   }
  
//   // Function to CLOSE modal
//   function closeModal() {
//     modal.style.display = 'none';
//     scrollLock.style.overflowY = 'auto';
  
//     console.log('closed')
//   }
  










