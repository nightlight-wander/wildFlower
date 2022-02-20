const tabs=document.querySelectorAll('[data-tab-target]')
const tabContents=document.querySelectorAll('[data-tab-content]')
console.log(Array.from(tabs))

Array.from(tabs).forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target=document.querySelector(tab.dataset.tabTarget)
        Array.from(tabContents).forEach(tabContent=>{
            tabContent.classList.remove('active')
        })
        Array.from(tabs).forEach(tab=>{
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})