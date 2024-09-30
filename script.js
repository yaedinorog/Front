// Получаем элементы модального окна и кнопок
const modal = document.getElementById("modal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
const btn2 = document.getElementById("submit_form");


// Открываем модальное окно при нажатии на кнопку
btn.onclick = function() {
    modal.style.display = "inline";
}

// Закрываем модальное окно при нажатии на "X"
span.onclick = function() {
    modal.style.display = "none";
}

// Закрываем модальное окно при клике вне его области
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

btn2.onclick = function() {
    if (form.checkValidity()) {
        modal.style.display = "none";
        alert("Спасибо за данные!!!!!!!!!!!");
        document.querySelector('form').reset();    
    }
}

// Валидация формы и обработка отправки

