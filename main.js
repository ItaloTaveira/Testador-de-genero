function verificar(){
 var data = new Date()
 var ano = data.getFullYear()
 var formano = document.getElementById('txtano')
 var res = document.getElementById('res')
 if(formano.value.length == 0 || formano.value > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
 }
 else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(formano.value)
    var genero = ' '
    var img = document.createElement('img')
    img.setAttribute('id' , 'foto')
    if(fsex[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade < 10 ){
            //criança
            img.setAttribute('src', 'Menino 12.png')
        } else if (idade < 21){
            //Jovem
            img.setAttribute('src', 'Adolescente.png')
        } else if(idade < 50){
            //Adulto
            img.setAttribute('src', 'Homem 30.png')
        } else {
            //Velho
            img.setAttribute('src', 'Homem 70.png')
        }
    } else if (fsex [1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 10 ){
            //criança
            img.setAttribute('src', 'Menina 12.png')
        } else if (idade < 21){
            //Jovem
            img.setAttribute('src', 'Adolescente F.png')
        } else if(idade < 50){
            //Adulto
            img.setAttribute('src', 'Mulher 30.png')
        } else {
            //Velho
            img.setAttribute('src', 'Mulher 70.png')
        }
    } 
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
    res.appendChild(img)
 }
}