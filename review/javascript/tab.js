let button = document.querySelectorAll(".tab-button");
let tabs = document.querySelectorAll('.tab-content');


for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function() {
    button.forEach(function(btn) {
      btn.classList.remove('orange');
    });
    button[i].classList.add("orange");

    tabs.forEach(function (tab) {
      tab.classList.remove("show");
    });
    tabs[i].classList.add('show');
  });
}


// for (let i = 0; i < button.length; i++) {
//   $('.tab-button').eq(i).on('click', function () {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(i).addClass('orange');
//     $(".tab-content").removeClass("show");
//     $(".tab-content").eq(i).addClass("show");
//   })
// }