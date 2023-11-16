var tabBtn = $('.tab-button');
var tabCont = $('.tab-content');

for (let i  = 0; i < 3; i++) {
  tabBtn.eq(i).on('click', function() {
    tabBtn.removeClass('orange');
    tabBtn.eq(i).addClass('orange');
    
    tabCont.removeClass('show');
    tabCont.eq(i).addClass('show');
  });
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