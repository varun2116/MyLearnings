function mergeSortArray(a,b){
  var mergedArr = [],
    a0 = a[0],
    b0 = b[0],
    i = 1, j = 1;

    if(a.length == 0)
      return b;
    if(b.length == 0)
      return a;

    while(a0 || b0){
      if((a0 && !b0) || a0 < b0){
        mergedArr.push(a0);
        a0 = a[i++];
      }
      else {
        mergedArr.push(b0);
        b0 = b[j++];
      }
    }

    return mergedArr;

}
