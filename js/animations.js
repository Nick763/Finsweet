console.log('привет!')


// allPosts

document.querySelectorAll('.posts__post-card').forEach(e=>{
  e.addEventListener('mouseover',function(){
    this.classList.add('posts__post-card_selected')
  })
  e.addEventListener('mouseout',function(){
    this.classList.remove('posts__post-card_selected')
  })
})

// chooseCatagory

document.querySelectorAll('.choose__item').forEach(e=>{
  e.addEventListener('mouseover',function(){
    this.classList.add('choose__item_selected')
  })
  e.addEventListener('mouseout',function(){
    this.classList.remove('choose__item_selected')
  })
})