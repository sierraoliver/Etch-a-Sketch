let main = document.getElementById("main");
let body = document.querySelector("body");
const backColor = (window.getComputedStyle(body)).getPropertyValue("background-color");
const squares = document.getElementsByClassName("square");
colorEvents(squares);
gridCreation(16);

function colorEvents(squares){
    for (let x = 0; x< squares.length; x++){
        squares[x].addEventListener ("mouseover", function(){
            squares[x].style.backgroundColor = "#C1121F";
        });
    };
}

const gridButton = document.getElementById("grid");
gridButton.addEventListener ("click", function(){
    let gridSize = prompt ("Enter a grid size < 100: ");
    while(gridSize === null || gridSize<=0 || gridSize>=100){
        gridSize = prompt ("Enter a grid size < 100: ");
    }
    gridCreation(gridSize);

});

const resetButton = document.getElementById("reset");
resetButton.addEventListener ("click", function(){
    for (let x = 0;x<squares.length;x++){
        squares[x].style.backgroundColor = backColor;
    }
})

function gridCreation(value){
    main.innerHTML="";

    for(let i=0;i<value;i++){
        let div = document.createElement("div");
        div.classList.add("container");
        main.appendChild(div);

        for (let y = 0;y<value;y++){
            const content = document.createElement("div");
            content.classList.add("square");
            div.appendChild(content);
        }
    }

    const squares = document.getElementsByClassName("square");
    colorEvents(squares);   
    
}
