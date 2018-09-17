function MazePath(arr, m ,n) {
    return SolveMaze(arr,0,0,m,n);
}

function SolveMaze(arr, x, y, m, n) {
    if(x >= 0 && x < m && y >= 0 && y < n){
        if(arr[x][y] == 9){
            return 1;
        }

        //check for path
        if(arr[x][y] == 1){
            //Move in x direction
            if(SolveMaze(arr, x+1, y, m, n) == 1){
                return 1;
            }
            //Move in y direction
            if (SolveMaze(arr, x, y+1, m, n) == 1) {
                return 1;
            }
        }
    }
    return 0;
}
