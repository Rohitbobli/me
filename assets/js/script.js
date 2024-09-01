document.addEventListener("DOMContentLoaded", function() {
    const element = document.querySelector('.rolling-name');
    element.textContent = "";
    const initialText = "Rohit Bobli";
    const words = ["Student", "Code", "Math"];
    let text = initialText;
    let index = 0;
    let wordIndex = 0;

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, 500); // Adjust typing speed here
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
            if (text === initialText) {
                text = words[wordIndex];
                wordIndex = (wordIndex + 1) % words.length;
            } else {
                text = initialText;
            }
            setTimeout(type, 500);
        }
    }

    type();
});
