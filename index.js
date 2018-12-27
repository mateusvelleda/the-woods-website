const video = document.getElementById('bg-video')
const soundButtons = [...document.querySelectorAll('.toggle-sound')]
const toggleSoundButtons = () => soundButtons.forEach(button => button.classList.toggle('hidden'))

soundButtons.forEach(el => {
    el.addEventListener('click', () => {
        video.muted = !(el.getAttribute('data-sound') == 1)
        toggleSoundButtons()
    })
})

setTimeout(() => window.scrollTo(0, 1), 99)

video.muted = true
video
  .play()
  .catch(() => {
    const playButton = document.getElementById('play')

    playButton.style.display = 'block'
    playButton
      .addEventListener('click', () => {
        video.play()
        playButton.style.display = 'none'
      })
  })

const qsaToArr = (selector) => [...document.querySelectorAll(selector)]

const effect = () => {
  qsaToArr('.social-nav, .media-channels, .slogan, .download')
    .forEach(el => el.classList.add('enter'))
}

qsaToArr('a').forEach((a) => {
    a.addEventListener('click', () => {
        try {
            ga('send', 'event', 'click', a.title)
        } catch (e) {
            console.warn(e)
        }
    })
})

setTimeout(effect, 999)
