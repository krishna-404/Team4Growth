window.addEventListener("load", () => {
    
    const form = document.getElementById("waitlist-form");
    form.addEventListener("submit", (formData) => {
        // console.log(formData);
        formData.preventDefault();
        const data = new FormData(form);
        const action = formData.target.action;
        fetch(action, {
            method:'POST',
            body: data
        })
        .then((res) => {
            // console.log({res});
            closeWaitlistForm();
        })
    })
})

const showWaitlistForm = (elementMeta) => {

    console.log({elementMeta});
    let formSection = document.getElementById("waitlist-form-section");
    formSection.classList.remove("hideElement");
    formSection.classList.add("showForm");

    let buttonElement = document.getElementById("ButtonId");
    buttonElement.value = elementMeta.id;
    // console.log({buttonElement});

    let fieldElements = document.getElementsByClassName("hiddenField");
    // console.log({fieldElements});
    for (let i=(fieldElements.length-1); i>=0; i-- ) {
        // console.log(child);
        // console.log(fieldElements);
        fieldElements[i].classList.add("hideElement");
    }
}

const closeWaitlistForm = () => {
    let formSection = document.getElementById("waitlist-form-section");
    formSection.classList.add("hideElement");
    formSection.classList.remove("showForm");

}