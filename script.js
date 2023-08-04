let fotoğraflar = [
    { img:"./fotoğraflar/büyücü.webp",ırk:"büyücü"},
    { img:"./fotoğraflar/cüce.jpg",ırk:"cüce"},
    { img:"./fotoğraflar/elf.jpg",ırk:"elf"},
    { img:"./fotoğraflar/ork.jpg",ırk:"ork"},]

    

function random (){
    let randomsayi = Math.floor(Math.random() * 4)
    let resim = fotoğraflar[randomsayi].img
    let ırk = fotoğraflar[randomsayi].ırk
    console.log(resim )
    

    
    document.getElementById("foto").src = resim
   



}

