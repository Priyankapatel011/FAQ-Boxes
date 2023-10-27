const toggles = document.querySelectorAll('.faq-toggle')
// const active = document.querySelectorAll('.faq-active')

toggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})