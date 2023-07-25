const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const pname = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)
console.log(header);
function getData() {
  header.innerHTML =
    '<img src="./assets/img1.png" alt="" />'
  title.innerHTML = 'Consequat '
  excerpt.innerHTML =
    'Minim dolor in amet nulla laboris enim dolore consequat proident fugiat culpa eiusmod.'
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/women/26.jpg" alt="" />'
  pname.innerHTML = 'Cameron Williamson'
  date.innerHTML = '16 January 2017'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}