const btnModal = document.querySelector('#btn-modal');
const btnAlert = document.querySelector('#btn-alert');

const myModal = new Modal({
    title: 'Koshka',
    text: 'some text',
    width: '400px',
    buttons: [
        {
            text: 'Ok',
            action: function() {
                this.close();
            }
        },
        {
            text: 'Cancel'
        }
    ]
});

const myModalAlert = new ModalAlert({
    text: 'AAAAAAAAAAAAAAAAAAAAa'
})

btnModal.addEventListener('click', function() {
    myModal.open();
})
btnAlert.addEventListener('click', function() {
    myModalAlert.open();
})