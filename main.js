const qrText=document.getElementById("qr_text");
const Sizes=document.getElementById('sizes');
const GenerateBtn=document.getElementById('GenerateBtn');
const downloadBtn=document.getElementById('downloadBtn');

const qrContainer=document.querySelector('.qr_body');

let size = Sizes.value;
GenerateBtn.addEventListener('click', (e)=>{
   e.preventDefault();
   isEmptyInput()
   
});
Sizes.addEventListener('change', (e)=>{
   size = e.target.value;
   isEmptyInput()

});

downloadBtn.addEventListener('click', ()=>{
   let img=document.querySelector('.qr_body img');
   if(img !== null){
    let imgAtrr = img.getAttribute('src');
    downloadBtn.setAttribute('href', imgAtrr);
   }else{downloadBtn.setAttribute('href', `${document.querySelector('canvas').toDataURL()}`)}
});
function isEmptyInput(){
    if(qrText.value.length >0){
        generateQRCode();
       }else{
        alert('Enter the text or URL to Generate your QR Code');
       }
}

function generateQRCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight :'#ffffff',
        colorDark : '#000000',

    });
}