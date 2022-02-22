var image = document.getElementById('file-image');
var namef = document.getElementById('nameFile');
var check = document.getElementById('labelfile');
if(image && namef && check){
    check.addEventListener('click', function () {
        image.value =''
        var checkName = setInterval(()=>{
            namef.innerHTML = image.value;
            if(namef.innerHTML != ''){
                clearInterval(checkName);
            }
        },10)
     })
}
 var textarea = document.querySelector("textarea")||null;
  if(textarea){
    textarea.addEventListener('click',()=>{
        var selectt = 1
        if( textarea.value.trim().length == 0)
        {
           textarea.setSelectionRange(0,0);
        }
        else
        {   textarea.addEventListener('select',()=>{
                selectt =0;
             })
            if(selectt)
            {
                textarea.setSelectionRange(textarea.value.trim().length,textarea.value.trim().length);
                textarea.scrollTop = textarea.value.trim().length;
            }
        }
     }) //set the focus - cursor at end
  }

