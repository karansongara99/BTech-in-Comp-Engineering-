#include<stdio.h>
#define N 5 

void dfshelper(int arr[N][N], int visited[], int key){
    visited[key] = 1;
    printf("%d ", key + 1); 
    for(int i=0; i<N; i++){
        if(arr[key][i] && !visited[i]){
            dfshelper(arr, visited, i);
        }
    }
}

void dfs(int arr[N][N]){
    int visited[N] = {0};
    for(int i=0; i<N; i++){
        if(!visited[i]){
            dfshelper(arr, visited, i);
        }
    }
}

int main(){
    int arr[N][N] = {
        {0, 1, 0, 0, 0},
        {1, 0, 1, 0, 0},
        {0, 1, 0, 1, 0},
        {0, 0, 1, 0, 1},
        {0, 0, 0, 1, 0}
    };
    printf("DFS traversal of the graph:\n");
    dfs(arr);  
    return 0;
}
