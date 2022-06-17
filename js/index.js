
function myFunction() {
     document.getElementById("myDropdown").classList.toggle("show");
}
//for Registration
function myFunction1() {
     document.getElementById("myDropdown1").classList.toggle("show");
}
window.onclick = function (event) {
     if (!event.target.matches(".dropbtn")) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          for (var i = 0; i < dropdowns.length; i++) {
               var openDropdown = dropdowns[i];
               if (openDropdown.classList.contains("show")) {
                    openDropdown.classList.remove("show");
               }
          }
     }
};
let li = document.querySelectorAll(".faq-text li");
for (var i = 0; i < li.length; i++) {
     li[i].addEventListener("click", (e) => {
          let clickedLi;
          if (e.target.classList.contains("question-arrow")) {
               clickedLi = e.target.parentElement;
          } 
          else {
               clickedLi = e.target.parentElement.parentElement;
          }
          clickedLi.classList.toggle("showAnswer");
          console.log(e.target);
     });
}
const scrollbtn = document.querySelector(".go-to-top");
function refereshbtnvis() {
     if (document.documentElement.scrollTop <= 550) {
          scrollbtn.style.display = "none";
     } else {
          scrollbtn.style.display = "block";
     }
}
scrollbtn.addEventListener("click", function () {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
});
document.addEventListener("scroll", function (e) {
     refereshbtnvis();
});
