class ModalAlert extends Modal {
	constructor(obj) {
		super(obj);

		this.text = obj.text;

		this.title = 'Внимание!';
		this.width = '30%';
		this.buttons = [
			{
				text: 'Pe4al',
				action: function() {
					this.close();
				},
				classes: ['btn-alert']
			},
		];
	}
}