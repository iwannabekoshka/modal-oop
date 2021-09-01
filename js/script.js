const btn = document.querySelector('.btn');

const myModal = new Modal({
    title: 'Koshka',
    text: 'some text'
});

btn.addEventListener('click', function() {
    myModal.open();
})