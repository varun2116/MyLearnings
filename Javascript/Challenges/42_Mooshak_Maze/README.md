Problem:
Mooshak the mouse has been placed in a maze.There is a huge chunk of cheese somewhere in the maze. The maze is represented as a two dimensional array of integers, where 0 represents walls.1 repersents paths where mooshak can move and 9 represents the huge chunk of cheese.




Mooshak starts in the top left corner at 0.
Write a method is Path of class Maze Path to determine if Mooshak can reach the huge chunk of cheese. The input to is Path consists of a two dimensional array gnd for the maze matrix. the method should return 1 if there is a path from Mooshak to the cheese.and 0 if not Mooshak is not allowed to leave the maze or climb on walls.
EX: 8 by 8(8*8) matrix maze where Mooshak can get the cheese.

1 0 1 1 1 0 0 1
1 0 0 0 1 1 1 1
1 0 0 0 0 0 0 0
1 0 1 0 9 0 1 1
1 1 1 0 1 0 0 1
1 0 1 0 1 1 0 1
1 0 0 0 0 1 0 1
1 1 1 1 1 1 1 1
Test Cases:
Case 1:


Input:[[1,1,1,][9,1,1],[0,1,0]]
Expected return value :1
Explanation:
The piece of cheese is placed at(1,0) on the grid Mooshak can move from (0,0) to (1,0) to reach it or can move from (0,0) to (0,1) to (1,1) to (1,0)
Test case 2:
Input: [[0,0,0],[9,1,1],[0,1,1]]
Expected return value: 0
Explanation:
Mooshak cannot move anywhere as there exists a wall right on (0,0)
