let button = document.querySelectorAll(".tab-button");
let tabs = document.querySelectorAll('.tab-content');


// for (let i = 0; i < button.length; i++) {
//   button[i].addEventListener('click', function() {
//     tabOpen(i);
//   });
// }


// for (let i = 0; i < button.length; i++) {
//   $('.tab-button').eq(i).on('click', function () {
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(i).addClass('orange');
//     $(".tab-content").removeClass("show");
//     $(".tab-content").eq(i).addClass("show");
//   })
// }
function tabOpen(param) {
  button.forEach(function (btn) {
    btn.classList.remove("orange");
  });
  button[param].classList.add("orange");

  tabs.forEach(function (tab) {
    tab.classList.remove("show");
  });
  tabs[param].classList.add("show");
};

document.querySelector('.list').addEventListener('click', function(e) {
  tabOpen(e.target.dataset.id);
});
