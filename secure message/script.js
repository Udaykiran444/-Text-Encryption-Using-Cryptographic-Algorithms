function encrypt() {
    var message = document.getElementById('encryptMessage').value;
    var key = document.getElementById('encryptKey').value;

    // Encrypt using AES
    var encryptedMessage = CryptoJS.AES.encrypt(message, key).toString();

    document.getElementById('encryptedMessage').value = encryptedMessage;
}

function decrypt() {
    var encryptedMessage = document.getElementById('decryptMessage').value;
    var key = document.getElementById('decryptKey').value;

    // Decrypt using AES
    var decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, key);
    var decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);

    document.getElementById('decryptedMessage').value = decryptedMessage;
}
