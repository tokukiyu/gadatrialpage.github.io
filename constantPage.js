const nav = document.querySelector('.constantPageHeader')
fetch('constantPageHeader.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})

const foot = document.querySelector('.constantPageFooter')
fetch('constantPageFooter.html')
.then(res=>res.text())
.then(data=>{
    foot.innerHTML=data
})
