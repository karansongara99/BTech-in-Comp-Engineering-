#include<stdio.h>
#define N 5

// Queue implementation with proper return values
int enqueue(int queue[], int *rear, int key) {
    if(*rear >= N-1) {
        return 0;  // Queue is full
    }
    queue[++(*rear)] = key;
    return 1;
}

int dequeue(int queue[], int *front, int rear) {
    if(*front > rear) {
        return -1;  // Queue is empty
    }
    return queue[(*front)++];
}

void bfs(int graph[N][N], int start) {
    int queue[N];
    int visited[N] = {0};
    int front = 0, rear = -1;
    
    // Start with the first node
    enqueue(queue, &rear, start);
    visited[start] = 1;
    
    printf("BFS traversal starting from vertex %d:\n", start + 1);
    
    while(front <= rear) {
        // Get the front vertex from queue
        int current = dequeue(queue, &front, rear);
        printf("%d ", current + 1);
        
        // Check all adjacent vertices
        for(int i = 0; i < N; i++) {
            if(graph[current][i] == 1 && !visited[i]) {
                enqueue(queue, &rear, i);
                visited[i] = 1;
            }
        }
    }
    printf("\n");
}

int main() {
    int graph[N][N] = {
        {0, 1, 0, 0, 0},
        {1, 0, 1, 0, 0},
        {0, 1, 0, 1, 0},
        {0, 0, 1, 0, 1},
        {0, 0, 0, 1, 0}
    };
    
    bfs(graph, 0);  // Start BFS from vertex 0 (first vertex)
    return 0;
}
