/*переключение по странице*/

class PageNavigate {
    constructor() {

        // Хеш по умолчанию, если в адресной строке пусто
        this.defaultHash = '#home'; 
        
        // привязвываем что бы работал this ибо стрикт привязывается
        this.handleRoute = this.handleRoute.bind(this);
    }

    // прослушка
    init() {
        window.addEventListener('hashchange', this.handleRoute);
        window.addEventListener('DOMContentLoaded', this.handleRoute);
        window.addEventListener('load', this.handleRoute);
    }


    handleRoute() {
        // хэш со странички по клику. То что у нас с хештегом
        const hash = window.location.hash || this.defaultHash;
        
        // убрали решетку - получили айди
        const id = hash.substring(1);

        // скрыли все, так проще
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });

        // нашли, показали
        const activeBlock = document.getElementById(id);
        if (activeBlock) {
            activeBlock.style.display = 'block';
            activeBlock.scrollIntoView({ behavior: 'smooth' });        }
    }
}


