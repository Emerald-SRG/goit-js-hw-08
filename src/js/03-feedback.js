import throttle from 'lodash.throttle';
const takenForm = document.querySelector(".feedback-form");
const KEY_BOX = "feedback-form-state";
const formBox = {};
takenForm.addEventListener("submit", onFormSubmit);
takenForm.addEventListener('input', throttle(onFormData, 500));
function toSaveOnPage() {
    let pageContent = localStorage.getItem(KEY_BOX);
    if (toSaveOnPage) {
        const dataSave = JSON.parse(toSaveOnPage);
    for (const property in dataSave) {
        if (dataSave.hasOwnProperty(property)) {
            takenForm.elements[property].value = dataSave[property];
            formBox[property] = dataSave[property];
        }
    }
    }
};
function onFormSubmit(event) {
    event.preventDefault();
    formBox.email = takenForm.elements.email.value;
    formBox.message = takenForm.elements.message.value;
    console.log(formBox);
    takenForm.reset();
    localStorage.removeItem(KEY_BOX);
};
function onFormData(event) {
    formBox[event.target.name] = event.target.value;
    localStorage.setItem(KEY_BOX, JSON.stringify(formBox));
};