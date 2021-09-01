const btn = document.querySelector('.btn');

const myModal = new Modal({
    title: 'Koshka',
    text: 'some text',
    buttons: [
        {
            text: 'Ok',
            action: function() {
                console.log('ok')
            }
        },
        {
            text: 'Cancel'
        }
    ]
});

btn.addEventListener('click', function() {
    myModal.open();
})