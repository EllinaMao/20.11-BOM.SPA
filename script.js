


function showSeetion(){
const id = location.hash.substring(1)
document.querySelectorAll('section').forEach(s=>s.style.display = 'none')|| '#home';
const block = document.getElementById(id);
if(block)block.style.display = block;
const activeblock = document.getElementById(id)
if(activeblock){
    activeblock.style.display = "block";
    window.scrollTo(0,0);
}
}
window.addEventListener('load', showSeetion);
window.addEventListener('hashchange', showSeetion);
window.addEventListener('DOMContentLoaded', showSeetion);

function regitrationForm(e){
        e.preventDefault();

        const form = document.getElementById('registrationForm');//как же я тупила
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        document.getElementById('display-name').textContent = name;
        document.getElementById('display-email').textContent = email;
        document.getElementById('display-phone').textContent = phone;

        form.reset();
        window.location.hash = '#thanks';
}

document.getElementById('register').addEventListener('submit',regitrationForm);