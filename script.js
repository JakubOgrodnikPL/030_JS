const ulList = document.createElement('ul')
document.body.append(ulList)
for(let i=1;i<11;i++){
    const liItem = document.createElement('li')
    liItem.textContent = i
    ulList.append(liItem)
}
const lastLi = ulList.querySelector('li:last-child')
lastLi.textContent = 'Jestem ostatnim elementem'

lastLi.style.backgroundColor = 'royalblue'
lastLi.style.padding = '20px 40px'
lastLi.style.fontSize = '48px'