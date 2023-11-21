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


var car2 = {name : '소나타', price : [50000, 3000, 4000] }

$('span:eq(0)').html(car2.name);
$('span:eq(1)').html(car2.price[0]);


// $(document).ready(function() {
//   $('#productSelect').on('change', function() {
//     var selectionOption = $(this).val();
//     var shirtOp = $('.shirtOption');

//     if (selectionOption === '셔츠') {
//       shirtOp.css('display', 'block');
//     } else {
//       shirtOp.css('display', 'none');
//     }
//   });
// });

$('.form-select').eq(0).on('input', function(e) {
  var value = e.currentTarget.value;
  var select = $('.form-select').eq(1);

  select.empty();

  if (value == '셔츠') {
    select.removeClass('shirtOption');

    var shirtOptions = `
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
    `;

    select.append(shirtOptions);
  } else if (value == '바지') {
    select.removeClass('shirtOption');
    // select.html('');
    var bottom = `
        <option>28</option>
        <option>30</option>
    ;`
    select.append(bottom);
    // $select.append(bottom);
  } else {
    select.addClass('shirtOption');
  }
})

  var 템플릿 = '<p>안녕하세요ㅇㅇ</p>';

  $('#test').append(템플릿);

  var a = document.createElement('p');
  a.innerHTML = 'ㅎㅇㅎㅇ';
  document.querySelector('#test').appendChild(a);


console.log(car2);