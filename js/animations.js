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

//chooseAuthor

document.querySelectorAll('.list-of-authors__item').forEach(e=>{
  e.addEventListener('mouseover',function(){
    this.classList.add('list-of-authors__item_hover')
  })
  e.addEventListener('mouseout',function(){
    this.classList.remove('list-of-authors__item_hover')
  })
})

//categoryCard

document.querySelectorAll('.category-section__category-card').forEach(e=>{
  e.addEventListener('mouseover',function(){
    this.classList.add('category-section__category-card_selected')
  })
  e.addEventListener('mouseout',function(){
    this.classList.remove('category-section__category-card_selected')
  })
})