document.getElementById('shareButton').addEventListener('click', function() {
    this.classList.toggle('button--light');
    this.classList.toggle('button--dark');

    let popup =  document.getElementById('sharePopup');
    popup.classList.toggle('popup--hidden');
});
