let str = "";
let btn = document.querySelectorAll('.op');


Array.from(btn).forEach((item) => {
    item.addEventListener('click', (e) => {
        console.log(item);
        if (e.target.innerHTML == '+') {
            str += e.target.innerHTML;
            document.querySelector('input').value = str;
        }
        else if (e.target.innerHTML == '-') {
            str += e.target.innerHTML;
            document.querySelector('input').value = str;
        }
        else if (e.target.innerHTML == '×') {
            str += '*';
            document.querySelector('input').value = str;
        }
        else if (e.target.innerHTML == '÷') {
            str += '/';
            document.querySelector('input').value = str;
        }
        else if (e.target.innerHTML == '=') {
            str = eval(str);
            document.querySelector('input').value = str;
        }
        else if (e.target.innerHTML == 'AC') {
            str = "";
            document.querySelector('input').value = str;
        }
        else if (e.target.id == 'back') {
            str = str.slice(0, str.length - 1);
            document.querySelector('input').value = str;
        }
        else {
            str += e.target.innerHTML;
            document.querySelector('input').value = str;
        }
    })
})

const content = 'https://482f429c-00ff-404c-a1fc-ab786e84c05e-00-2942r26trfe39.pike.replit.dev/'

document.getElementById('share').addEventListener('click', () => {
    let url = "whatsapp://send?text=" + encodeURIComponent(content);
    window.location.href = url;
})