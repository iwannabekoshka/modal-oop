class Modal {
	constructor(obj) {
		this.title = obj?.title;
		this.text = obj.text;
		this.buttons = obj.buttons;
		this.width = obj.width;
	}

	#initModal() {
		const modal = this.#createModal();
		this.#initEvents(modal);
		document.body.appendChild(modal);
		if (this.buttons && this.buttons.length > 0) this.#appendFooter();

		return modal;
	}
	#createModal() {
		const modal = document.createElement('div');
		modal.classList.add('modal');

		modal.insertAdjacentHTML('afterbegin', `
			<div class="modal-overlay" data-close="true">
				<div class="modal-window" style="width: ${this.width}">
					<div class="modal-header">
						<span>${this.title}</span>
						<button class="btn-close" data-close="true">&times;</button>
					</div>
					<div class="modal-body">${this.text}</div>
				</div>
			</div>
		`);

		return modal;
	}
	#createFooter() {
	    const footer = document.createElement('div');
        footer.classList.add('modal-footer');

        this.buttons.forEach(btn => {
            const button = document.createElement('button');

            button.classList.add('btn');
            button.classList.add('btn-footer');

            if (btn.classes && btn.classes.length > 0) {
            	btn.classes.forEach(btnClass => {
            		button.classList.add(btnClass);
				});
			}

            button.innerText = btn.text;

            const btnAction = btn.action?.bind(this);
			button.addEventListener('click', btnAction);

			footer.append(button);
        });

		return footer;
    }
    #appendFooter() {
		const footer = this.#createFooter();
		const modalWindow = document.querySelector('.modal-window');
		modalWindow.append(footer)
	}
	#initEvents(modal) {
		modal.addEventListener("click", (event) => {
			if (event.target.dataset.close) {
				this.close();
			}
		})
	}

	open() {
		this.modal = this.#initModal();
		this.modal.classList.add('open');
	}
	close() {
		this.modal.classList.remove('open');
		this.modal.remove();
	}
}