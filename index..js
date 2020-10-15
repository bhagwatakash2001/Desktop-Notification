const btn = document.getElementById('btn');
const conatiner= document.getElementById('container');


btn.addEventListener('click', () =>{

    createNotification();
});


function createNotification(){

    const notif = document.createElement('div');

    notif.innerText= 'This is a toast notification notification';

    notif.classList.add('toast');

    conatiner.appendChild(notif);

    setTimeout( () => {

        notif.remove();

    },4000)

    

    

}