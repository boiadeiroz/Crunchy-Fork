//Nav bar animation
/*
const nav = document.getElementById("Barr");

document.addEventListener('scroll', (event) => {
    if (document.body.scrollTop > 200) {
        nav.className = 'nav-scrolled';
        //nav.classList.add('nav-scrolled');
    } else {
        nav.className = 'nav-bar';
        //nav.classList.remove('nav-scrolled');
    }
});
*/
const nav = document.getElementById('Barr');

document.addEventListener('scroll', (event) => {
    if (document.documentElement.scrollTop > 150){
        document.getElementById('Barr').className='nav-bar-scrolled';
    }   else{
        document.getElementById('Barr').className='nav-bar';
    }
});