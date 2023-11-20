var tabBtn = $('.tab-button');
var tabCont = $('.tab-content');

/* 탭 기능 다르게 구현해보기 (이벤트 응용)*/
$('.list').click(function(e) {
  console.log(+e.target.dataset.id);
  openTap(+e.target.dataset.id);
});



/* 반복문으로 탭 기능 구현 */
// for (let i  = 0; i < 3; i++) {
//   tabBtn.eq(i).on('click', function() {
//     openTap(i)
//   });
// }

function openTap(num) {
  tabBtn.removeClass('orange');
  tabBtn.eq(num).addClass('orange');
    
  tabCont.removeClass('show');
  tabCont.eq(num).addClass('show');
}

// var tabBtn = $('.tab-button');
// var tabCont = $('.tab-content');


// tabBtn.on('click', function() {
//   tabBtn.removeClass('orange');
//   tabCont.removeClass('show');
// });

// tabBtn.eq(0).on('click', function() {
//   tabBtn.eq(0).addClass('orange');
//   tabCont.eq(0).addClass('show');
// });

// tabBtn.eq(1).on('click', function() {
//   tabBtn.eq(1).addClass('orange');
//   tabCont.eq(1).addClass('show');
// });

// tabBtn.eq(2).on('click', function() {
//   tabBtn.eq(2).addClass('orange');
//   tabCont.eq(2).addClass('show');
// });


var car2 = {name : '소나타', price : 50000}

$('span:eq(0)').html(car2.name);
$('span:eq(1)').html(car2.price);