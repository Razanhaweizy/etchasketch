const container = document.querySelector(".container");

for (i = 0; i < 16; i++) {
    let newRow = document.createElement("div");
    container.appendChild(newRow)
        for (j = 0; j < 16; j++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("box");
        newDiv.style.border = "1px solid black";
        //newDiv.style.borderWidth  = "thin";
        newRow.appendChild(newDiv);
    }
}