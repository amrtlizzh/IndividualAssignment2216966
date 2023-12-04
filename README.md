# IndividualAssignment2216966
RM1 Campaign website
// JAVASCRIPT INTERACTION 1
document.addEventListener("DOMContentLoaded", function() {
    const select = document.querySelector("#website");
    const infoDisplay = document.querySelector("#infoDisplay");

    select.onchange = function() {
        const website = select.value;
        switch (website) {
            case "PhoneNumber":
                infoDisplay.innerHTML = "03 6196 4268";
                break;
            case "Email":
                infoDisplay.innerHTML = "ief@iium.edu.my";
                break;
            case "Website":
                infoDisplay.innerHTML = "www.iium.edu.my/ief";
                break;
            case "Facebook":
                infoDisplay.innerHTML = "www.facebook.com/ief.official/";
                break;
            default:
                infoDisplay.innerHTML = "";
        }
    }		});
I created a drop-down menu in the details section so that customers could select and view the social media accounts that IIUM Endowment Fund has. Following their selection, the social media information will display as Figure 1 illustrates.

// JAVASCRIPT INTERACTION 2
function showContent(divPage) {
    var pages = document.querySelectorAll('.content');
   
    pages.forEach(function(page) {
        page.classList.add('hidden');
    });

    var selectedPage = document.getElementById(divPage);
    selectedPage.classList.remove('hidden');
}
Afterwards, there are two forms available on my website: the general form and the kuliyyah-based form. If they want to, users can select a kuliyyah-based form. However, if you've successfully entered this website, the general form will show up first.
