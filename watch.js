document.getElementById('submit-btn-watch').addEventListener('click', function () {
    const inputCode = getTheInputValue('code-input-watch');
    if (inputCode == 'Demo') {
        setNewValue = setTheValue('price-watch');
        
        changeTheModal('correct-vouchar-watch','watch-modal-input','watch-btn')
    }
    else{
        alert('Wrong Code! please try the right one');
    }
})

