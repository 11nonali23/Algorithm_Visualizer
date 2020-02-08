var algoArray;

function sort() {
    
    algoArray = [];
    algoArray = getVector();
    
    
    var selec = document.getElementById("selec");
    var insert = document.getElementById("insert");
    var quick = document.getElementById("quick");
    var merge = document.getElementById("merge");
    var slider = document.getElementById("slider");
     
    //algorithms are implemented in algorithms.js
    if(selec.checked)
        selectionSort();
    else if(insert.checked)
        insertionSort();
    else if (quick.checked)
        console.log("soon quickSort will be implemented");
    else if (merge.checked)
        mergeSort();
    else
        alert("Please select something");
}

