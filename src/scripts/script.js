const questionNodes = document.querySelectorAll('.accordion__question')
const textContentNodes = document.querySelectorAll('.accordion__content')

questionNodes.forEach(question => {
  question.addEventListener('click', e => {
    if (e.target.classList.contains('active')) {
      removeActiveClass()
    } else {
      removeActiveClass()
      addActiveClass(question)
      let el = question.nextElementSibling
      addActiveClass(el)
    }
  })
})

const addActiveClass = element => {
  element.classList.add('active')
}

const removeActiveClass = () => {
  questionNodes.forEach(question => {
    question.classList.remove('active')
  })
  textContentNodes.forEach(content => {
    content.classList.remove('active')
  })
}
