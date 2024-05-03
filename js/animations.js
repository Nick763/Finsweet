console.log('привет!')



let item = document.querySelectorAll(".posts__post-card");
/* 
let index = 0;
setInterval(function() {
  items[index].classList.add("posts__post-card_selected");
  for (let i = 0; i < items.length; i++) {
    if (i !== index) {
      items[i].classList.contains("posts__post-card_selected") &&
        items[i].classList.remove("posts__post-card_selected");
    }
  }
  index++;
  if (index === items.length) {
    index = 0;
  }
}, 2000);
*/



document.querySelectorAll('.item').forEach(e=>{
  e.addEventListener('mouseover',function(){
    this.classList.add('active_item')
  })
  e.addEventListener('mouseout',function(){
    this.classList.remove('active_item')
  })
})