let textbox = document.getElementById("textbox")
let qrImage = document.getElementById("qrimage")

function generateCode() {
    if(textbox.value){
        error.style.display = 'none'
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?data" + "=" + textbox.value + "size=100x100"
    }else{
        error.innerHTML = 'please input a valid text'
    }
   
    //  console.log(qrImage.src)
    
}



