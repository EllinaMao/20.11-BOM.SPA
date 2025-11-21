/*ввод данных и спасибо*/
class RegistrationForm {
    constructor(formId) {
        // нужная форма и айди
        this.form = document.getElementById(formId);     
        // Привязываем к this, аааааааааааааа
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // вешаем событие submit
    init() {
        if (this.form) {
            this.form.addEventListener('submit', this.handleSubmit);
        } else {
            console.error('Форма не найдена!');
        }
    }

    // обработка отправки
    handleSubmit(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        
        // Вставка данных в блок спасибо
        this.updateThanksBlock(name, email, phone);
        // Очистка формы
        this.form.reset(); 
        // Переход на страницу спасибо
        window.location.hash = '#thanks';
    }

    // обновили страницу, а точнее вставили в списибо
    updateThanksBlock(name, email, phone) {
        const nameDis = document.getElementById('display-name');
        const emailDis = document.getElementById('display-email');
        const phoneDis = document.getElementById('display-phone');

        if (nameDis) nameDis.textContent = name;
        if (emailDis) emailDis.textContent = email;
        if (phoneDis) phoneDis.textContent = phone;
    }
}