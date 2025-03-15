document.addEventListener("DOMContentLoaded", function () {
    const formSteps = document.querySelectorAll(".form-step");
    const nextBtns = document.querySelectorAll(".next-btn");
    const prevBtns = document.querySelectorAll(".prev-btn");
    const progressSteps = document.querySelectorAll(".step");
    const form = document.getElementById("multiStepForm");
    const summary = document.getElementById("summary");

    let currentStep = loadProgress() || 0; 
    showStep(currentStep);
    loadFormData(); 

    function showStep(step) {
        formSteps.forEach((stepDiv, index) => {
            stepDiv.classList.toggle("active", index === step);
        });

        progressSteps.forEach((stepDiv, index) => {
            stepDiv.classList.toggle("active", index <= step);
        });

        saveProgress(step);
    }

    nextBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            if (!validateStep(currentStep)) return;
            currentStep++;
            showStep(currentStep);
            if (currentStep === formSteps.length - 1) updateSummary();
        });
    });

    prevBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            currentStep--;
            showStep(currentStep);
        });
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Form submitted successfully!");
        localStorage.clear(); 
        form.reset();
        currentStep = 0;
        showStep(currentStep);
    });

    function validateStep(step) {
        const inputs = formSteps[step].querySelectorAll("input, select");

        for (let input of inputs) {
            if (!input.value) {
                alert(`Please fill all fields in Step ${step + 1}.`);
                return false;
            }

            if (input.id === "email" && !validateEmail(input.value)) {
                alert("Please enter a valid email address.");
                return false;
            }

            if (input.id === "phone" && !validatePhone(input.value)) {
                alert("Please enter a valid 10-digit phone number.");
                return false;
            }
        }
        saveFormData();
        return true;
    }

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    function validatePhone(phone) {
        const phonePattern = /^[0-9]{10}$/;
        return phonePattern.test(phone);
    }

    function updateSummary() {
        const name = document.getElementById("name").value;
        const dob = document.getElementById("dob").value;
        const gender = document.getElementById("gender").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;

        summary.innerHTML = `
            <p><b>Name:</b> ${name}</p>
            <p><b>DOB:</b> ${dob}</p>
            <p><b>Gender:</b> ${gender}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Address:</b> ${address}</p>
        `;
    }

    function saveProgress(step) {
        localStorage.setItem("currentStep", step);
    }

    function loadProgress() {
        return parseInt(localStorage.getItem("currentStep")) || 0;
    }

    function saveFormData() {
        const formData = {};
        document.querySelectorAll("input, select").forEach((input) => {
            formData[input.id] = input.value;
        });
        localStorage.setItem("formData", JSON.stringify(formData));
    }

    function loadFormData() {
        const savedData = JSON.parse(localStorage.getItem("formData"));
        if (savedData) {
            Object.keys(savedData).forEach((key) => {
                if (document.getElementById(key)) {
                    document.getElementById(key).value = savedData[key];
                }
            });
        }
    }
});
