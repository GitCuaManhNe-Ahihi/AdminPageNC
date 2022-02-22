var notification = document.getElementById('notification');
var avartar = document.querySelector('.avatar');

avartar.addEventListener('click', function() {
    var widthtime = 230;
    var spanSignal = document.createElement('span');
    spanSignal.classList.add('signal');
    var spanText = document.createElement('span');
    spanText.classList.add('message');
    spanSignal.style.backgroundColor = Math.floor(Math.random() * 100)>50? '#00bcd4' :Math.floor(Math.random() * 100)>50? "red":'#ff9800';
    spanText.innerHTML = 'You have';
    var spanTimes = document.createElement('span');
    spanTimes.classList.add('close');
    spanTimes.classList.add('fa')
    spanTimes.classList.add('fa-times');
    var  timestamp = document.createElement('span');
    timestamp.classList.add('timestamp');
    timestamp.style.width = `${widthtime}px`;
    var li = document.createElement('li');

    li.appendChild(spanSignal);
    li.appendChild(spanText);
    li.appendChild(spanTimes);
    li.appendChild(timestamp);
    notification.appendChild(li);

    var countdown = setInterval(()=>{
        timestamp.style.width = `${widthtime-=7.6}px`;
    },100)
     var close = setTimeout(()=>{
        li.style.transform = 'translateX(50px)';
        li.style.opacity = '0';
        setTimeout(()=>{
        notification.removeChild(li)
        clearInterval(countdown);
        }, 500);
    },3000)
    spanTimes.addEventListener('click', function(){
        clearTimeout(close);
        clearInterval(countdown);
        li.style.transform = 'translateX(50px)';
        li.style.opacity = '0';
        setTimeout(()=>{
            notification.removeChild(li)
            }, 500);
    })
})