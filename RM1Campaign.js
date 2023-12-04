document.addEventListener('DOMContentLoaded',function() {
    const select = document.querySelector("#details");
    const infoDisplay = document.querySelector("#infoDisplay");

    select.onchange = function() {
        const details = select.value;

        switch (details) {
            case "PhoneNumber":
                infoDisplay.innerHTML = ">> 03 61964268";
                break;
            case "Email":
                infoDisplay.innerHTML = ">> ief@iium.edu.my";
                break;
            case "Website":
                infoDisplay.innerHTML = ">> www.iium.edu.my/ief";
                break;
            case "Facebook":
                infoDisplay.innerHTML = ">> www.facebook.com/ief.official/";
                break;
            default:
                infoDisplay.innerHTML = ""; 
        }
    }
});

function showContent(divPage) {
    var pages = document.querySelectorAll('.content');
    
    pages.forEach(function(page) {
        page.classList.add('hidden');
    });

    var selectedPage = document.getElementById(divPage);
    selectedPage.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('generalForm').addEventListener('submit', function (event) {
        event.preventDefault();
        alert("Your form is submitted! Thank you.");
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('kuliyyahBasedForm').addEventListener('submit', function (event) {
        event.preventDefault();
        alert("Your form is submitted! Thank you.");
    });
});
