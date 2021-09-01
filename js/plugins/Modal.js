class Modal {
	constructor(obj) {
		this.title = obj.title;
		this.text = obj.text;
		this.buttons = obj.buttons;
	}

	#initModal() {
		const modal = this.#createModal();
		this.#initEvents(modal);
		document.body.appendChild(modal);

		return modal;
	}

	#createModal() {
		const modal = document.createElement('div');
		modal.classList.add('modal');

		modal.insertAdjacentHTML('afterbegin', `
			<div class="modal-overlay" data-close="true">
				<div class="modal-window">
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