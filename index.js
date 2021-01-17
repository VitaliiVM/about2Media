// let icon = document.getElementById("imicon");
// let icon2 = document.getElementById("imicon2");
// let icon3 = document.querySelector("#imicon3");
// let icon4 = document.querySelector("#imicon4");


// icon.onmouseenter = function () {
//     this.style.marginBottom = "15px";
// }

// icon.onmouseleave = function () {
//     this.style.marginBottom = null;
// }

// icon2.onmouseenter = function () {
//   this.style.marginBottom = "15px";
// }

// icon2.onmouseleave = function () {
//   this.style.marginBottom = null;
// }

// icon3.onmouseenter = function () {
//   this.style.marginBottom = "15px";
// }

// icon3.onmouseleave = function () {
//   this.style.marginBottom = null;
// }

// icon4.onmouseenter = function () {
//   this.style.marginBottom = "15px";
// }

// icon4.onmouseleave = function () {
//   this.style.marginBottom = null;
// }

let icon = document.querySelectorAll(".imicon");//Этот код заменил длинный код выше.....
for (let i = 0; i < icon.length; i++) {
  icon[i].onmouseenter = function () {
    console.log("Сработало наведение мышью!!!");
    this.style.marginBottom = "15px";
  }
  icon[i].onmouseleave = function () {
    this.style.marginBottom = null;
  }
}


//для кнопки
let knopka = document.querySelector('.btn1');

knopka.onclick = function () {
  console.log('Кнопка работает');
  alert("Кнопка работает");
}


let t = document.querySelector(".header_burger");
let i = document.querySelector(".header_menu");
let as = document.querySelector("body");
//var z = document.querySelector(".header_body");

t.onclick = function (event) {
  t.classList.toggle("active");
  i.classList.toggle("active");
  as.classList.toggle("lock");
};



