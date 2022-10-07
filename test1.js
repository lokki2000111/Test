function countSheeps(arrayOfSheep) {
    const arr = arrayOfSheep;
    let count = 0;
    for(let i = 0 ; i <= arr.length ; i++){
      if(arr[i] === true){
        count++;
      }else{
        continue;
      }
    }
    return count;
  }