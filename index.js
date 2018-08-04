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
