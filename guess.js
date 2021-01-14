var nr = Math.floor(Math.random() * 100) + 1;

var guess = document.getElementById("test")
    .addEventListener("click", function() {
        //input value (id guess)
        input = document.getElementById("guess")
        if (input.value > nr) {
            document.getElementById("raspuns").innerText = "Prea mare"
        } else if (input.value < nr) {
            document.getElementById("raspuns").innerText = "Prea mic"
        } else {
            document.getElementById("raspuns").innerText = ("Ai ghicit! numarul este " + nr)
        }
    }) 