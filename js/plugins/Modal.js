class Modal {
    constructor(obj) {
        this.title = obj.title;
        this.text = obj.text;

        this.#createModal(this.title, this.text);
    }

    #modal = this;

    #createModal(title, text) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.insertAdjacentHTML('afterbegin', `
            <div class="modal-overlay">
                <div class="modal-window">
                    <div class="modal-header">
                        <span>${title}</span>
                        <button class="btn-close" onclick="${this.close}">&times;</button>
                    </div>
                    
                    <div class="modal-body">${text}</div>
                </div>
            </div>
        `);

        document.body.appendChild(modal);
    }

    open() {
        const modal = document.querySelector('.modal');
        modal.classList.add('open');
    }
    close() {
        const modal = document.querySelector('.modal');
        modal.classList.remove('open');
    }
}

document.addEventListener('keypress', function(event) {
    const modal = document.querySelector('.modal');

    if (event.key === "q") {
        modal.classList.remove('open');
    }
});