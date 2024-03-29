function sendMessage() {
    // Получаем текст сообщения из поля ввода
    var userInput = document.getElementById("user-input").value;

    // Отображаем сообщение пользователя в чате
    displayMessage(userInput, "user");

    // Очищаем поле ввода после отправки сообщения
    document.getElementById("user-input").value = "";

    // Вызываем функцию для ответа бота
    botResponse(userInput);

    // Прокручиваем чат вниз, чтобы отобразить новое сообщение
    scrollToBottom();
}

function botResponse(userInput) {
    // Генерируем ответ от бота в зависимости от введенного пользователем сообщения
    var botMessage;

    // Пример: если пользователь спрашивает о погоде
    if (userInput.includes("погода")) {
        botMessage = "Сейчас слишком холодно, лучше останьтесь дома!";
    } 
    // Пример: если пользователь спрашивает о калькуляторе
    else if (userInput.includes("калькулятор")) {
        botMessage = "Я не умею считать, но могу помочь вам найти калькулятор в интернете!";
    } 
    // Пример: если пользователь спрашивает о других опциях
    else {
        botMessage = "Извините, я не могу понять ваш запрос. Могу ли я помочь вам чем-то еще?";
    }

    // Отображаем ответ от бота в чате
    displayMessage(botMessage, "bot");
}

function displayMessage(message, sender) {
    // Создаем новый элемент для сообщения
    var messageElement = document.createElement("div");
    messageElement.classList.add("message", sender === "user" ? "user-message" : "bot-message"); // Добавляем класс в зависимости от отправителя

    // Создаем текстовый узел с содержимым сообщения
    var messageText = document.createTextNode(message);

    // Добавляем текстовый узел в элемент сообщения
    messageElement.appendChild(messageText);

    // Добавляем сообщение в чат
    document.getElementById("chat-box").appendChild(messageElement);
}

function scrollToBottom() {
    // Прокручиваем чат вниз
    var chatBox = document.getElementById("chat-box");
    chatBox.scrollTop = chatBox.scrollHeight;
}


document.getElementById("user-input").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Проверяем, была ли нажата клавиша Enter (код 13)
        event.preventDefault(); // Предотвращаем действие по умолчанию (обычно переход на новую строку)
        sendMessage(); // Вызываем функцию отправки сообщения
    }
});
