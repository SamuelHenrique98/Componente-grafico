const allColumn = document.querySelectorAll("div.column")
const allValue = document.querySelectorAll("h4");

var dt = new Date;
var day = dt.getDay();

function graphic() {
    dataJson();
    weekday(day);
}

function dataJson(value) {
    let origin = arguments.callee.caller.name;
    fetch('../data.json').then(function(response) {
        return response.json();
    }).then(function (response) {
        if (origin == 'graphic') {
            for (let i = 0; i < response.length; i++) {
                allColumn[i].style.height = `${response[i].amount}%`;
            }
        } else if (value.className == "value"){
            for (let i = 0; i < response.length; i++) {
                if (value.id == response[i].day) {
                    allValue[i].innerText = `$${response[i].amount}`;
                }
            }
        } else{
            for (let i = 0; i < response.length; i++) {
                if (value.id == response[i].day) {
                    allValue[i].innerText = '';
                }
            }   
        } 
    });
}

function weekday(day) {
    switch (day) {
        case 1:
            allColumn[day-1].classList.add('weekday');
            break;

        case 2:
            allColumn[day-1].classList.add('weekday');
            break;
        
        case 3:
            allColumn[day-1].classList.add('weekday');
            break;

        case 4:
            allColumn[day-1].classList.add('weekday');
            break;
        
        case 5:
            allColumn[day-1].classList.add('weekday');
            break;
        
        case 6:
            allColumn[day-1].classList.add('weekday');
            break;
            
        case 7:
            allColumn[day-1].classList.add('weekday');
            break;
        
        default:
            break;
    }
}

function showValue(weekday) {
    allValue.forEach(value =>{
        if (weekday === value.id) {
            value.classList.add('value');
            dataJson(value);
            exit(value);
        }
    });
}

function exit(value) {
    allColumn.forEach(column => {
        column.addEventListener("mouseout", function () {
            value.classList.remove('value');
            dataJson(value);
        });
    });
}