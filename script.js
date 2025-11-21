function showSeetion(){
const id = location.hash.substring(1)
// document.querySelectorAll('section').forEach(s=>s.style.display = 'none');
const block = document.getElementById(id);
if(block)block.style.display = block;
}
document.getElementById('registrationForm').addEventListener('submit',function(e){
    e.preventDefault();
    const name = this.name.value;
    const email = this.email.value;
    const phone = this.phone.value;

    // document.getElementById('thanks-block').innerHTML 
})