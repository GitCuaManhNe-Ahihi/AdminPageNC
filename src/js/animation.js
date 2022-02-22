var eyePass = document.querySelector('.hidden-pass')||null;
if(eyePass){
    eyePass.addEventListener('click', function () {
        if(eyePass.classList[2] == 'fa-eye-slash'){
            eyePass.classList.remove('fa-eye-slash');
            eyePass.classList.add('fa-eye');
        }
        else{
            eyePass.classList.remove('fa-eye');
            eyePass.classList.add('fa-eye-slash');
        }
        console.log(eyePass.classList);
    
    })
}

var listNotify = document.querySelector('.list-notify');
var bellNotify = document.querySelector('#bellNotify');
if(listNotify && bellNotify){
bellNotify.addEventListener('click', function () {
            listNotify.classList.toggle('active');  
            console.log(listNotify.classList);
})
}
var overlay = document.querySelector('.overlay');
var btnClose = document.querySelector('.close-post');
var postDetail = document.querySelector('.detail-post');
var elementPost = document.getElementsByClassName('post');
var detailPostbtnchange = document.querySelector('.btn-change');
var mainchangePost = document.querySelector('.change-post')
var changePost = document.querySelector('.change-p');
var cancelPost = document.querySelector('.cancel-p');
var  deletePost = document.querySelector('.btn-delete');
if(overlay && btnClose && postDetail && elementPost ){
for(var i = 0; i < elementPost.length; i++){

    elementPost[i].addEventListener('click', function () {
        overlay.classList.add('active');
        postDetail.classList.add('active');
    }
    )}
btnClose.addEventListener('click', function () {
    overlay.classList.remove('active');
    postDetail.classList.remove('active');
})
}
if(changePost && cancelPost && deletePost && detailPostbtnchange && mainchangePost){
    cancelPost.addEventListener('click', function () {
        overlay.classList.remove('active');
        mainchangePost.classList.remove('active');
    })
    changePost.addEventListener('click', function () {
        overlay.classList.remove('active');
        mainchangePost.classList.remove('active');
    })
    detailPostbtnchange.addEventListener('click', function () {
        postDetail.classList.remove('active');
        mainchangePost.classList.add('active');
    })
    deletePost.addEventListener('click', function () {
        overlay.classList.remove('active');
        postDetail.classList.remove('active');
    })
}
var info = document.querySelector('#infor-user-detail');
var avartar = document.querySelector('.avatar');

avartar.addEventListener('click', function () {
    overlay.classList.add('active');
    info.classList.add('active');
})
var btnCloseInfo = document.querySelector('.cancel-change-main');
var btnChangeInfo = document.querySelector('.accept-change-main');
btnCloseInfo.addEventListener('click', function () {
    overlay.classList.remove('active');
    info.classList.remove('active');
})
btnChangeInfo.addEventListener('click', function () {
    overlay.classList.remove('active');
    info.classList.remove('active');
})