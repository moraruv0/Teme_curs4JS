let semafor = 1

document.getElementById("cerc")
    .addEventListener("click", function() {
        if (semafor == 1) {
            document.getElementById("cerc").classList.add("move")
            semafor = 0
        } else {
            document.getElementById("cerc").classList.remove("move")
            semafor = 1
        }

    })