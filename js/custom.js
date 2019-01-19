var count = 0;

function openCart() {
  document.getElementById("cart-wrapper").style.height = '100%';
}

function closeCart() {
  document.getElementById("cart-wrapper").style.height = '0';
}

$('.item .add').click(function() {
  var item_name = $(this).prev().html();
  count = count + 1;
  console.log(count);
  $('#cart-count').html(count);
  $('.cart-item-wrapper').append('<div class="cart-item"><img src="/images/' + item_name + '.png" alt=""><p>'+ item_name +'</p><p class="qtn">Qtn: 1</p><p class="price">530 TK</p><p class="remove">X</button></p>');
  console.log(item_name);
});

$('.checkout-btn').on('click', function () {
  $('.cart-item-wrapper').html('<h4>Purchase Successfull</h4>');
  $('.checkout').remove();
  $('#cart-count').html(0);
  count = 0;
});



