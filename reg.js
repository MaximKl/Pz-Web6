const registr=document.getElementById("myreg")
const log3=document.getElementById("but")
const back=document.getElementById("mr")
const log2=document.getElementById("jj")
const topnav=document.getElementById("nav")
const vhod=document.getElementById("vsh")
const regbut=document.getElementById("b1")
const logbut=document.getElementById("b2")
function myFunction() {
    var x = document.getElementById('myreg');
if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
  const form = document.getElementById('form');
  const tel = document.getElementById('tel');
  const email = document.getElementById('email1');
  const password = document.getElementById('pass1');
  const password2 = document.getElementById('pass2');
  
  form.addEventListener('submit', e => {
      e.preventDefault();
      
      checkInputs();
  });
  
  function checkInputs() {
      const telValue = tel.value.trim();
      const emailValue = email.value.trim();
      const passwordValue = password.value.trim();
      const password2Value = password2.value.trim();
      
      if(telValue === '') {
          setErrorFor(tel, 'Не может быть пустым');
          
      } else {
          setSuccessFor(tel);
          
      }
      if(emailValue === '') {
          setErrorFor(email, 'Не может быть пустым');
          chek=0;
      } else if (!isEmail(emailValue)) {
          setErrorFor(email, 'Неправильно введён E-mail');
          
      } else {
          setSuccessFor(email);
          
      }
      if(passwordValue === '') {
          setErrorFor(password, 'Не может быть пустым');
          
      } else {
          setSuccessFor(password);
          
      }
      
      if(password2Value === '') {
          setErrorFor(password2, 'Не может быть пустым');
          
      } else if(passwordValue !== password2Value) {
          setErrorFor(password2, 'Пароли не совпадают');
          
      } else{
          setSuccessFor(password2);
          logbut.onclick=function(){
            log3.style.display="none";
            vhod.style.display="block";
      }
    
  }
}
  function setErrorFor(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');
      formControl.className = 'form-control error';
      small.innerText = message;
  }
  
  function setSuccessFor(input) {
      const formControl = input.parentElement;
      formControl.className = 'form-control success';
  }
      
  function isEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }
}

back.onclick=function(){
    registr.style.display="none";
}
log2.onclick=function(){
    registr.style.display="none";
}
topnav.onclick=function(){
    registr.style.display="none";
}
regbut.onclick=function(){
    log3.style.display="none";
    vhod.style.display="block";
}
registr.style.zIndex = 9999;
const animitems=document.querySelectorAll('._anim-items');
if(animitems.length>0){
    window.addEventListener('scroll',animOnScroll);
    function animOnScroll(){
        for(let index=0;index<animitems.length;index++){
            const animitem=animitems[index];
            const animitemHeight= animitem.offsetHeight;
            const animitemOffset=offset(animitem).top
            const animStrart=4;
            let animitemPoint=window.innerHeight-animitemHeight/animStrart;
            if(animitemHeight>window.innerHeight){
                animitemPoint=window.innerHeight-animitemHeight/animStrart;
            }
            if((pageYOffset > animitemOffset - animitemPoint)&&pageYOffset< (animitemOffset+animitemHeight)){
                animitem.classList.add('_active');
            }else{
                if(animitem.classList.contains('_anim-no-hide'))
                animitem.classList.remove('_active');
            }
        }
    }
    function offset(el){
        const rect=el.getBoundingClientRect(),
        scrollLeft=window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop=window.pageYOffset||document.documentElement.scrollTop;
        return{top:rect.top+scrollTop,left:rect.left+scrollLeft}
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}