var nascimento = window.prompt('Qual sua data de nascimento?')
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var res1 = document.querySelector('div#res1')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Erro, verifique os dados e tente novamente!')
    } else {
        var fgen = document.getElementsByName('radgen')
        var idade = ano - Number(fano.value)
        var etinia = document.getElementsByName('radrac')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fgen[0].checked && etinia[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 14) {
                //criança
                img.setAttribute('src', 'image/chomemamarelo.png')
            } else if (idade <= 29) {
                //Jovem
                img.setAttribute('src', 'image/jhomemamarelo.png')
            } else if (idade < 55) {
                //Adulto
                img.setAttribute('src', 'image/mhomemamarelo.png')
            } else if(idade < 113){
                //idoso
                img.setAttribute('src', 'image/ihomemamarelo.png')
            } else {
                img.setAttribute('src', 'image/esqueleto.png')
                res1.innerHTML = `<p>Homem mais velho a viver no mundo viveu 112 anos e 211 dias segundo a organização Guinness World Records.<p>`
                
            }
        } else if (fgen[0].checked && etinia[1].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 14) {
                //criança
                img.setAttribute('src', 'image/chomembranco.png')
            } else if (idade < 29) {
                //Jovem
                img.setAttribute('src', 'image/jhomembranco.png')
            } else if (idade < 55) {
                //Adulto
                img.setAttribute('src', 'image/mhomembranco.png')
            } else if(idade < 113){
                //idoso
                img.setAttribute('src', 'image/ihomembranco.png')
            } else {
                img.setAttribute('src', 'image/esqueleto.png')
                res1.innerHTML = `<p>Homem mais velho a viver no mundo viveu 112 anos e 211 dias segundo a organização Guinness World Records.<p>`
            }
        } else if (fgen[0].checked && etinia[2].checked) {
            genero = 'homem'
            if(idade >= 0 && idade <14) {
                img.setAttribute('src', 'image/chomembrown.png')
            } else if (idade < 29) {
                img.setAttribute('src', 'image/jhomembrown.png')
            } else if (idade < 55) {
                img.setAttribute('src', 'image/mhomembrown.png')
            } else if(idade < 113){
                img.setAttribute('src', 'image/ihomembrown.png')
            } else {
                img.setAttribute('src', 'image/esqueleto.png')
                res1.innerHTML = `<p>Homem mais velho a viver no mundo viveu 112 anos e 211 dias segundo a organização Guinness World Records.<p>`
            }
        } else if (fgen[0].checked && etinia[3].checked) {
            genero = 'homem'
             if (idade >= 0 && idade < 14) {
                 img.setAttribute('src', 'image/chomempreto.png')
             } else if (idade < 29) {
                 img.setAttribute('src', 'image/jhomempreto.png')
             } else if (idade < 55) {
                 img.setAttribute('src', 'image/mhomempreto.png')
             } else if(idade < 113){
                 img.setAttribute('src', 'image/ihomempreto.png')
             } else {
                 img.setAttribute('src', 'image/esqueleto.png')
                 res1.innerHTML = `<p>Homem mais velho a viver no mundo viveu 112 anos e 211 dias segundo a organização Guinness World Records.<p>`
             }
            } else if (fgen[1].checked && etinia[0].checked) {
               genero = 'mulher'
               if (idade >= 0 && idade < 14) {
                   img.setAttribute('src', 'image/cmulheramarela.png')
               } else if (idade < 29) {
                   img.setAttribute('src', 'image/jmulheramarela.png')
               } else if (idade < 55) {
                    img.setAttribute('src', 'image/mmulheramarela.png')
               } else if(idade < 123) {
                   img.setAttribute('src', 'image/imulheramarela.png')
               } else {
                   img.setAttribute('src', 'image/esqueleto.png')
                   res1.innerHTML = `<p>Mulher mais velha  a viver no mundo viveu 122 anos e 164 dias segundo a organização do Guinness World Records.</p>`
               }
            } else if (fgen[1].checked && etinia[1].checked) {
                genero = 'mulher'
                if (idade >= 0 && idade < 14) {
                    img.setAttribute('src', 'image/cmulherbranca.png') 
                } else if (idade < 29) {
                    img.setAttribute('src', 'image/jmulherbranca.png')
                } else if (idade < 55) {
                    img.setAttribute('src', 'image/mmulherbranca.png')
                } else if(idade < 123) { 
                    img.setAttribute('src', 'image/imulherbranca.png')
                } else {
                    img.setAttribute('src', 'image/esqueleto.png')
                    res1.innerHTML = `<p>Mulher mais velha  a viver no mundo viveu 122 anos e 164 dias segundo a organização do Guinness World Records.</p>`
                }
            } else if (fgen[1].checked && etinia[2].checked) {
                genero = 'mulher'
                if (idade >=0 && idade < 14) {
                    img.setAttribute('src', 'image/cmulherbrown.png')
                } else if (idade < 29) {
                    img.setAttribute('src', 'image/jmulherbrown.png')
                } else if (idade < 55) {
                    img.setAttribute('src', 'image/mmulherbrown.png')
                } else if (idade < 123){
                    img.setAttribute('src', 'image/imulherbrown.png')
                } else {
                    img.setAttribute('src', 'image/esqueleto.png')
                    res1.innerHTML = `<p>Mulher mais velha  a viver no mundo viveu 122 anos e 164 dias segundo a organização do Guinness World Records.</p>`
                }
            } else if (fgen[1].checked && etinia[3].checked) {
                genero = 'mulher'
                if (idade >= 0 && idade < 14) {
                    img.setAttribute('src', 'image/cmulherpreta.png')
                } else if (idade < 29) {
                    img.setAttribute('src', 'image/jmulherpreta.png')
                } else if (idade < 55) {
                    img.setAttribute('src', 'image/mmulherpreta.png')
                } else if (idade < 123){
                    img.setAttribute('src', 'image/imulherpreta.png')
                } else {
                    img.setAttribute('src', 'image/esqueleto.png')
                    res1.innerHTML = `<p>Mulher mais velha  a viver no mundo viveu 122 anos e 164 dias segundo a organização do Guinness World Records.</p>`
                }
            }
            
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. Com data de nascimento em ${nascimento}.`
        res1.appendChild(img)
    }
}   
    