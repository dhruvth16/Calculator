let str = "";
let dotcount = 0;
let opcount = 0;
let btn = document.querySelectorAll('.op');
let values = document.querySelector('.values');

Array.from(btn).forEach((item) => {
    item.addEventListener('click', (e) => {
        if (e.target.innerHTML == '+') {
            if (opcount < 1) {
                str += e.target.innerHTML;
                values.innerHTML = str;
                opcount++;
                dotcount = 0;
            }
        }
        else if (e.target.innerHTML == '-') {
            if (opcount < 1) {
                str += e.target.innerHTML;
                values.innerHTML = str;
                opcount++;
                dotcount = 0;
            }
        }
        else if (e.target.innerHTML == '×') {
            if (opcount < 1) {
                str += '*';
                values.innerHTML = str;
                opcount++;
                dotcount = 0;
            }
        }
        else if (e.target.innerHTML == '÷') {
            if (opcount < 1) {
                str += '/';
                values.innerHTML = str;
                opcount++;
                dotcount = 0;
            }
        }
        else if (e.target.innerHTML == '.') {
            if (dotcount < 1) {
                str += '.';
                values.innerHTML = str;
                dotcount++;
            }
        }
        else if (e.target.innerHTML == '=') {
            str = eval(str);
            values.innerHTML = Number(str);
            if (Number(str) % 1 != 0) {
                dotcount = 1;
            }
        }
        else if (e.target.innerHTML == 'AC') {
            str = "";
            values.innerHTML = str;
            opcount = 0;
            dotcount = 0;
        }
        else if (e.target.id == 'back') {
            rem = str.charAt(str.length - 1);
            str = str.slice(0, str.length - 1);
            values.innerHTML = str;
            if (rem == '.') {
                dotcount = 0;
            } else if (rem == "+" || rem == "/" || rem == "*" || rem == "-") {
                opcount = 0;
            }
        }
        else {
            str += e.target.innerHTML;
            values.innerHTML = str;
            opcount = 0;
        }
    })
})

const content = 'https://482f429c-00ff-404c-a1fc-ab786e84c05e-00-2942r26trfe39.pike.replit.dev/'

document.getElementById('share').addEventListener('click', () => {
    let url = "whatsapp://send?text=" + encodeURIComponent(content);
    window.location.href = url;
})
