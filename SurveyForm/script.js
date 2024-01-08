
const surveyForm = document.getElementById('surveyForm');

surveyForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(surveyForm);
    const values = {};

    formData.forEach((value, key) => {
        values[key] = value;
    });

    // Display the collected data in a popup
    const popupContent = Object.keys(values)
        .map(key => `${key}: ${values[key]}`)
        .join('\n');

    alert(`Survey Data:\n${popupContent}`);

    // Reset the form
    surveyForm.reset();
});
