document.addEventListener("DOMContentLoaded", function() {
    const element = document.querySelector('.rolling-name');
    element.textContent = "";
    const initialText = "Rohit Bobli";
    const words = ["Rohit bobli","Student", "Coder", "Math", "Baby"];
    let text = initialText;
    let index = 0;
    let wordIndex = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 300); // Adjust typing speed here
        } else {
            setTimeout(erase, 2000);
        }
    }

    function erase() {
        if (index > 0) {
            element.textContent = text.substring(0, index - 1);
            index--;
            setTimeout(erase, 100); // Adjust erasing speed here
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            text = words[wordIndex];
            setTimeout(type, 500);
        }
    }

    type();
});
