(function() {

    // Items
    const hideButton = document.getElementsByClassName('hide')[0];
    const viewButton = document.getElementsByClassName('view')[0];
    const closeButton = document.getElementsByClassName('close')[0];
    const textArea = document.getElementsByClassName('output_area')[0];
    const shiftBlock = document.getElementsByClassName('shift');
    const keyboardWrap = document.getElementsByClassName('keyboard_wrap')[0];
    let isUpper = false;

    // Function
    function writeTextArea(event) {
        if (event.target.classList.contains('keyboard_item') && !event.target.classList.contains('special')) {
            let text = isUpper ? event.target.innerText.toUpperCase() : event.target.innerText.toLowerCase();
            textArea.textContent += text;
        }
        else if (event.target.classList.contains('special')) {
            let nameSpecial;
            if (event.target.classList.contains('backspace')) {
                nameSpecial = 'backspace';
            }
            else if (event.target.classList.contains('enter')) {
                nameSpecial = 'enter';
            }
            else if (event.target.classList.contains('shift')) {
                nameSpecial = 'shift';
            }
            else if (event.target.classList.contains('space')) {
                nameSpecial = 'space';
            }
            else if (event.target.classList.contains('arrow_left')) {
                nameSpecial = 'arrow_left';
            }
            else if (event.target.classList.contains('arrow_right')) {
                nameSpecial = 'arrow_right';
            }
            
            switch (nameSpecial) {
                case 'backspace': {
                    if (textArea.textContent.length) { 
                        let text = textArea.textContent.slice(0,textArea.textContent.length-1);
                        textArea.textContent = text;
                    }
                    break;
                }
                case 'enter': {
                    textArea.textContent += '\n';
                    break;
                }
                case 'space': {
                    textArea.textContent += ' ';
                    break;
                }
                case 'shift': {
                    isUpper = !isUpper;
                    shiftBlock[0].classList.toggle('shift_clicked');
                    shiftBlock[1].classList.toggle('shift_clicked');
                    break;
                }
                case 'arrow_left': {
                    textArea.textContent += event.target.innerText;
                }
                case 'arrow_right': {
                    textArea.textContent += event.target.innerText;
                }
            } 
        }
    }

    // Action
    keyboardWrap.addEventListener('click', writeTextArea);

})()