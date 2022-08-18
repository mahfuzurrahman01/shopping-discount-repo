document.getElementById('submit-btn-iphone').addEventListener('click', function () {
    const inputCode = getTheInputValue('code-input-iphone');
    if (inputCode == 'Demo') {
        setNewValue = setTheValue('price-iphone');

        changeTheModal('correct-vouchar-iphone','iphone-modal-input','iphone-btn')
    }
    else{
        alert('Wrong Code! please try the right one');
    }
})
