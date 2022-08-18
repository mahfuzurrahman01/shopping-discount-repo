function getTheInputValue(inputId) {
    const Field = document.getElementById(inputId);
    const valueInteger = Field.value;
    Field.value = '';
    // const valueNumeric = parseFloat(valueInteger);
    return valueInteger;
}
//set function
function setTheValue(inputId) {
    const regularPrice = document.getElementById(inputId);
    const regularPriceValue = regularPrice.innerText;
    const regularPriceNumeric = parseFloat(regularPriceValue);
    const calculateMulti = (regularPriceNumeric * 0.3)
    const final = parseFloat(regularPriceNumeric - calculateMulti);
    regularPrice.innerText = final;
    return final;
}
//change the modal
function changeTheModal(inputId,inputIdTwo,inputIdThree) {
    const changeModal = document.getElementById(inputId);
    const oldModal = document.getElementById(inputIdTwo);
    const hideButton = document.getElementById(inputIdThree);
    hideButton.style.display = 'none';
    changeModal.style.display = 'block';
    oldModal.style.display = 'none';
}