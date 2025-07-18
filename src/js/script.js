// HORARIO DO DIA (EXERCÍCIO)
function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let hr = new Date()
    let hora = hr.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = './src/assets/manha.jpg'
        document.getElementById('hora').style.backgroundColor = '#e2cd9f'
        document.getElementsByTagName('article')[0].style.backgroundColor = 'var(--amareloClaro)'
        msg.style.color = 'var(--preto)' 
    } 
    else if(hora >= 12 && hora < 18){
        img.src = './src/assets/tarde.jpg'
        document.getElementById('hora').style.backgroundColor= '#b9846f'
    }
    else{
        img.src = './src/assets/noite.jpg'
        document.getElementById('hora').style.backgroundColor= '#0F2426'
        document.getElementsByTagName('h1')[1].style.color = 'var(--amareloClaro)'
    }
}
// MÉDIA DO ALUNO (DESAFIO)
function verificar(){
    let nome = prompt('Qual é o nome do aluno?')
    let n1 = prompt(`Digite a primeira nota de ${nome}`)
    let n2 = prompt(`Digite a segunda nota de ${nome}`)
    let n3 = prompt(`Digite a terceira nota de ${nome}`)
    let nota1 = Number(n1)
    let nota2 = Number(n2)
    let nota3 = Number(n3)
    let media = (nota1 + nota2 + nota3) / 3
    if(media > 6){
        alert(`O(a) ${nome} foi aprovado(a), e obteve média de ${media} pontos.`)
    }
    else{
        alert(`O(a) ${nome} foi reprovado(a), e obteve média de ${media} pontos.`)
    }
}
// BHASKARA (DESAFIO)
function calcular(){
    let fa = document.getElementById('a')
    let fb = document.getElementById('b')
    let fc = document.getElementById('c')
    let conta = document.getElementById('conta')
    let px1 = document.getElementById('x1')
    let px2 = document.getElementById('x2')
    let a = Number(fa.value)
    let b = Number(fb.value)
    let c = Number(fc.value)
    let delta = (b*b) -4 * a * c
    let resx1 = (-b + Math.sqrt(delta)) / (2 * a)
    let resx2 = (-b - Math.sqrt(delta)) / (2 * a)
    if(delta < 0){
        conta.innerHTML = `A equação é: <strong>(${a})x² + (${b})x + ${c}</strong></br>Delta é: <strong>${delta}</strong></br> As raízes não são reais`
        px1.innerHTML = ``
        px2.innerHTML = ``
    }
    else{
        conta.innerHTML = `A equação é: <strong>(${a})x² + (${b})x + ${c}</strong></br>Delta é: <strong>${delta}</strong>`
        px1.innerHTML = `x¹ é: <strong>${resx1}`
        px2.innerHTML = `x² é: <strong>${resx2}`
    }
}
// CONTADOR (EXERCÍCIO)
function contar(){
    let inicio = document.getElementById('cInicio')
    let fim = document.getElementById('cFim')
    let passos = document.getElementById('cPassos')
    let result = document.getElementById('cResult')
    if(inicio.value == 0 || fim.value == 0 || passos == 0){
        alert('[ERRO] Faltam dados')
    }
    else{
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passos.value)
        if(p <= 0){
            alert('Passo inválido! Será considerado como 1')
            p = 1
        }
        result.innerHTML = ''
        if(i < f){
            // CONTAGEM PROGRESSIVA
            for(let c = i; c <= f; c += p){
                result.innerHTML += `${c} \u{1F449} `
            }
        }
        else{
            // CONTAGEM REGRESSIVA
            for(let c = i; c >= f; c -= p){
                result.innerHTML += `${c} \u{1F449} `
            }
        }
        result.innerHTML += `\u{1F3C1}`
    }
}
// TABUADA (EXERCÍCIO)
function tabuada(){
    let num = document.getElementById('tNum')
    let tab = document.getElementById('tTab')
    if(num.value == 0){
        alert('[ERRO] Digite um número')
    }
    else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while(c <= 100){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}