// HORARIO DO DIA
function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let hr = new Date()
    let hora = hr.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = './src/assets/manha.jpg'
        document.getElementsByTagName('section')[0].style.backgroundColor = '#e2cd9f'
        document.getElementsByTagName('article')[0].style.backgroundColor = 'var(--amareloClaro)'
        msg.style.color = 'var(--preto)' 
    } 
    else if(hora >= 12 && hora < 18){
        img.src = './src/assets/tarde.jpg'
        document.getElementsByTagName('section')[0].style.backgroundColor= '#b9846f'
    }
    else{
        img.src = './src/assets/noite.jpg'
        document.getElementsByTagName('section')[0].style.backgroundColor= '#0F2426'
        document.getElementsByTagName('h1')[1].style.color = 'var(--amareloClaro)'
    }
}