document.getElementById('submit-btn-mac').addEventListener('click', function () {
    const inputCode = getTheInputValue('code-input-mac');
    if (inputCode == 'Demo') {
        setNewValue = setTheValue('price-mac');
        
        changeTheModal('correct-vouchar-mac','mac-modal-input','mac-btn')
    }
    else{
        alert('Wrong Code! please try the right one');
    }
})