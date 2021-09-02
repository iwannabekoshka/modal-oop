const btnModal = document.querySelector('#btn-modal');
const btnAlert = document.querySelector('#btn-alert');

const myModal = new Modal({
    title: '',
    text: `
        <h1>HOHOHO</h1>
    `,
    width: '400px',
    buttons: [
        {
            text: 'Ok',
            action: function() {
                this.close();
            }
        },
        {
            text: 'Cancel',
            action: function () {
                alert('eto tozhe vihod');
                this.close();
            },
            classes: ['btn-alert']
        }
    ]
});

const myModalAlert = new ModalAlert({
    text: 'AAAAAAAAAAAAAAAAAAAAashibka'
})

btnModal.addEventListener('click', function() {
    myModal.open();
})
btnAlert.addEventListener('click', function() {
    myModalAlert.open();
})