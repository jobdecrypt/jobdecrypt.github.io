

let x = document.getElementById("click1");
//let submit = document.getElementById("submit");
let text = document.getElementsByName("item_name");

let makeButtons = () => {
    x.outerHTML += "<div class='button1' id='a'><a href='#'>" + text + "</a></div>";
    return;
}

let getText = (text) => {
    return text;
}

