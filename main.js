
//select
const optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text");
selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));
options.forEach(option => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;
    optionMenu.classList.remove("active");
  });
});



let switch__items = document.querySelectorAll('.switch__item');
let content__containers = document.querySelectorAll('.content__container');


switch__items.forEach(item => {
  item.onclick = () => {
    switch__items.forEach(q => q.classList.remove('item-act'))
    item.classList.add('item-act');
    content__containers.forEach(content=>{
      content.classList.remove('vsb')
      if (content.classList[1]===item.classList[1]){
        content.classList.add('vsb')

      }
    })
  }
})