btn.addEventListener("click",fnc);
function fnc(){
    console.log(a1.checked);
    console.log(a2.checked);
    console.log(a3.checked);
    console.log(a4.checked);
    if (a3.checked){
        alert("Правильна відповідь");
    } else {
        alert("Неправильна відповідь");
    }
}