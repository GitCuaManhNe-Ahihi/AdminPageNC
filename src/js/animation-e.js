
var overlay = document.querySelector('.overlay');
var opendetail = document.getElementsByClassName('btn-edit');
var detail = document.querySelector('.detail-employ');
var btnClose = document.querySelector('.cancel-change');
var btnChange = document.querySelector('.accept-change');
for(var i = 0; i < opendetail.length; i++){
    opendetail[i].addEventListener('click', function () {
        overlay.classList.add('active');
        detail.classList.add('active');
    })
}
btnChange.addEventListener('click', function () {
    overlay.classList.remove('active');
    detail.classList.remove('active');
})
btnClose.addEventListener('click', function () {
    overlay.classList.remove('active');
    detail.classList.remove('active');
})

