const video = document.getElementById('bg-video')
const soundButtons = [...document.querySelectorAll('.toggle-sound')]
const toggleSoundButtons = () => soundButtons.forEach(button => button.classList.toggle('hidden'))

soundButtons.forEach(el => {
    el.addEventListener('click', () => {
        if (el.getAttribute('data-sound') == 1) video.muted = false
        else video.muted = true
        toggleSoundButtons()
    })
})

video.play()

const effect = () => {
  const social = document.querySelector('.social-nav')
  const media = document.querySelector('.media-channels')
  const slogan = document.querySelector('.slogan')
  const download = document.querySelector('.download')

  social.classList.add('enter')
  media.classList.add('enter')
  slogan.classList.add('enter')
  download.classList.add('enter')
}

setTimeout(() => {
  effect()
}, 1000)