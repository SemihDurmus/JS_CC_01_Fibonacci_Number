const input_area = document.getElementById("inp");
const fibo_area = document.getElementById("fibonacci");

input_area.focus();


input_area.addEventListener("keyup", get_value_w_enter);

function get_value_w_enter(e){
    if (e.key === 'Enter') {
        e.preventDefault();
        show_fibo();
    }
}


function show_fibo() {

    let seq = input_area.value;
    let fibo_nr;

    if (seq == 0) {
        alert("Please enter an integer");
        location.reload();

    } else {
        let a = 1;
        let b = 1;
        let c;

        while (seq > 2) {
            c = a + b;
            a = b;
            b = c;
            seq--
        } 

        fibo_nr =  b;
    }

    fibo_area.style.display = "inline-block";
    fibo_area.innerHTML = fibo_nr;
    setTimeout(function() {
        if (confirm("Do you want to try once more?")) {
            location.reload();
          } else {
            alert("Thanks for joining...");
            window.close('','_parent','');
          }
        location.reload();
        }, 1000)
} 

