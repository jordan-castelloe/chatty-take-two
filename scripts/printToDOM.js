'use strict';

const messageMaker = require("./messageMaker.js");


const messageContainer = document.getElementById("message-area");
const messageTextArea = document.getElementById("message-textarea");

let user = "You";

module.exports.printMessage = function(){
    let messageText = messageTextArea.value;
    createMessageDiv(messageText, user, Date.now());
    messageMaker.saveMessage(messageText, user, Date.now());
    clearTextArea();
};

module.exports.printOldMessages = function(array){
    for(let i = 0; i < array.length; i++){
        let currentMessage = array[i];
        createMessageDiv(currentMessage.text, currentMessage.user, currentMessage.timestamp);
    }
};


function createMessageDiv(text, user, timestamp){
    let messageDiv = document.createElement("div");
    messageDiv.classList.add("message-div");
    messageDiv.classList.add("container");
    messageDiv.classList.add(`${user}`);
    messageDiv.id = Date.now();
    let messageText = document.createElement("p");
    messageText.innerText = `${user}: ${text}`;

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "x";
    deleteButton.classList.add("delete-button");
    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-light");

    deleteButton.id = "delete-button";

    messageDiv.appendChild(messageText);
    messageDiv.appendChild(deleteButton);
    messageContainer.appendChild(messageDiv);
    messageDiv.scrollIntoView(false);
}

function clearTextArea (){
    messageTextArea.value= "";
}
