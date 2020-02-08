//--->ALGORITHMS


//SELECTION-SORT

function selectionSort (){
    
    console.log(algoArray);
    
    var min;
    var L = algoArray.length;
    
    for(let i = 0; i < L - 1; i++){
        
        min = i;
        
        for(let j = i+1; j < L; j++)
            if(algoArray[j] < algoArray[min])
                min = j;
            
        if(i != min)
            exch(i, min);
    }
    
    console.log(algoArray);
}



//INSERTION-SORT

function insertionSort() {
    
    console.log(algoArray);
    
    var L = algoArray.length;
    
    for (let i = 1; i < L; i++)
        for(let j = i; j >= 1; j--)
            if (algoArray[j - 1] > algoArray[j])
                exch(j - 1, j);
  
  console.log(algoArray);
}



//MERGE-SORT

function mergeSort() {
  if (algoArray.length < 2){
    console.log(algoArray);
    return algoArray;
    
  }

  const middle = Math.floor(algoArray.length / 2);
  const left = algoArray.slice(0, middle);
  const right = algoArray.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}




//--->HELPER FUNCTIONS


//merge two arrays (mergesort)
function merge(left, right) {
  let arr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) 
      arr.push(left.shift());
    else 
      arr.push(right.shift());
    
  }
  return arr.concat(left.concat(right));
}



//swap two elements in the array. 
function exch (firstIndex, secondIndex){
    
    exchRectangles(firstIndex, secondIndex);
    
    var temp = algoArray[firstIndex];
    algoArray[firstIndex]  = algoArray[secondIndex];
    algoArray[secondIndex] = temp;
    
    
}

