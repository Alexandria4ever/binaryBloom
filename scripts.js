// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM22aIXGhkuV1K6UVOe4DRIi3kDkSSn6o",
  authDomain: "binarybloom-7c450.firebaseapp.com",
  projectId: "binarybloom-7c450",
  storageBucket: "binarybloom-7c450.firebasestorage.app",
  messagingSenderId: "655041968048",
  appId: "1:655041968048:web:a92b86179521bf0a660875",
  measurementId: "G-C3K9D7C9F1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            if (validateForm(form)) {
                window.location.href = "dashboard.html";  
            } else {
                form.classList.add("was-validated");
            }
        });
    }

    function showAlert(message) {
        let alertBox = document.getElementById("customAlert");
        alertBox.innerHTML = `<strong>Warning!</strong> ${message} <button type="button" class="btn-close" onclick="closeAlert()"></button>`;
        alertBox.classList.remove("d-none"); 
    }

    function closeAlert() {
        document.getElementById("customAlert").classList.add("d-none");  
    }

    function validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll("input");

        inputs.forEach(input => {
            if (!input.checkValidity()) {
                isValid = false;
                input.classList.add("is-invalid");  
                input.classList.remove("is-valid"); 
            } else {
                input.classList.add("is-valid");  
                input.classList.remove("is-invalid");  
            }
        });

        const password = form.querySelector("#password");
        const confirmPassword = form.querySelector("#confirmPassword");

        if (password && confirmPassword) {
            if (password.value !== confirmPassword.value) {
                isValid = false;
                confirmPassword.classList.add("is-invalid");
                confirmPassword.classList.remove("is-valid");
                showAlert("Password fields do not match!");  
            } else {
                confirmPassword.classList.add("is-valid");
                confirmPassword.classList.remove("is-invalid");
            }
        }

        return isValid;
    }

    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    password.addEventListener('input', checkPasswordsMatch);
    confirmPassword.addEventListener('input', checkPasswordsMatch);

    function checkPasswordsMatch() {
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');

        if (password.value && confirmPassword.value && password.value === confirmPassword.value) {
            confirmPassword.classList.remove("is-invalid");
            confirmPassword.classList.add("is-valid");
            closeAlert(); // alert close
        } else {
            confirmPassword.classList.remove("is-valid");
            confirmPassword.classList.add("is-invalid");
            showAlert("Password fields do not match!"); // alert
        }
    }


    // auto validation stuff
    const allInputs = document.querySelectorAll("input");
    allInputs.forEach(input => {
        input.addEventListener("input", function () {
            if (input.checkValidity()) {
                input.classList.add("is-valid");
                input.classList.remove("is-invalid");
            } else {
                input.classList.add("is-invalid");
                input.classList.remove("is-valid");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    initializeStarryBackground();
});

function initializeStarryBackground() {
    const canvas = document.getElementById("starsCanvas");
    if (!canvas) return; 

    const ctx = canvas.getContext("2d");
    let stars = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createStars(100);
    }

    function createStars(count) {
        stars = [];
        for (let i = 0; i < count; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2,
                brightness: Math.random(),
                speed: Math.random() * 0.02 + 0.005
            });
        }
    }

    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let star of stars) {
            star.brightness += star.speed;
            if (star.brightness > 1 || star.brightness < 0.2) {
                star.speed *= -1;
            }
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`;
            ctx.fill();
        }
        requestAnimationFrame(drawStars);
    }

    resizeCanvas();
    drawStars();
    window.addEventListener("resize", resizeCanvas);
}

function logout() {
    window.location.href = "sign_in.html";
}