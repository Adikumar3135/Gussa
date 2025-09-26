document.addEventListener('DOMContentLoaded', () => {
    const frist_yes = document.querySelector('.frist_yes');
    const frist_no = document.querySelector('.frist_no');

    frist_yes.addEventListener("click", () => {
        document.getElementById('frist').style.display = 'none'
        document.getElementById('fifth').style.visibility = 'visible';
    });

    frist_no.addEventListener("click", () => {
        document.getElementById('frist').style.display = 'none'
        document.getElementById('second').style.visibility = 'visible';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const second_yes = document.querySelector('.second_yes');
    const second_no = document.querySelector('.second_no');

    second_yes.addEventListener("click", () => {
        document.getElementById('second').style.display = 'none';
        document.getElementById('fifth').style.visibility = 'visible';
    });

    second_no.addEventListener("click", () => {
        document.getElementById('second').style.display = 'none';
        document.getElementById('third').style.visibility = 'visible';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const third_yes = document.querySelector('.third_yes');
    const third_no = document.querySelector('.third_no');

    third_yes.addEventListener("click", () => {
        document.getElementById('second').style.display = 'none';
        document.getElementById('fifth').style.visibility = 'visible';
    });

    third_no.addEventListener("click", () => {
        document.getElementById('third').style.display = 'none';
        document.getElementById('fourth').style.visibility = 'visible';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const fourth_yes = document.querySelector('.fourth_yes');
    const fourth_no = document.querySelector('.fourth_no');

    fourth_yes.addEventListener("click", () => {
        document.getElementById('fifth').style.visibility = 'visible';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.fifth_yes');
    const input = document.querySelector('#form_input');
    const message = document.querySelector('.message');
    const message1 = document.querySelector('.message-1');
    const suprise_btn = document.querySelector('.suprise-btn');

    let clickedOnce = false; 

    btn.addEventListener('click', () => {
        if (!clickedOnce) {
            
            input.style.visibility = 'visible';
            input.focus();
            btn.textContent = 'Submit';
            clickedOnce = true;
        } else {
            
            const answer = input.value.trim().toLowerCase();

            if (answer === "i love you") {
                message.textContent = "Aww! I knew it 😘❤️";
                message1.textContent = "I Love You Too....."
                message.style.visibility = "visible"
                message1.style.visibility = "visible"
                message.style.color = "green";
                input.style.visibility = "hidden"
                btn.style.visibility = "hidden";
                suprise_btn.style.visibility = "hidden";

            } else {
                message.textContent = "Oops! Try again 💔";
                message.style.visibility = "visible"
                message.style.color = "red";
            }

            message.style.display = 'block';
            input.value = '';
            input.focus();
        }
    });
});
