#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

#define V 5
int main()
{
    int graph[V][V] = {
        {0, 2, 0, 6, 0},
        {2, 0, 3, 8, 5},
        {0, 3, 0, 0, 7},
        {6, 8, 0, 0, 9},
        {0, 5, 7, 9, 0}
    };

    int selected[V] = {0};
    selected[0] = 1;

    int edges = 0;

    printf("Edge : Weight\n");

    int i,j;
    while (edges < V - 1)
    {
        int min = INT_MAX;
        int x = 0;
        int y = 0;

        for (i = 0; i < V; i++)
        {
            if (selected[i])
            {
                for (j = 0; j < V; j++)
                {
                    if (!selected[j] && graph[i][j])
                    {
                        if (min > graph[i][j])
                        {
                            min = graph[i][j];
                            x = i;
                            y = j;
                        }
                    }
                }
            }
        }

        printf("%d - %d : %d\n", x, y, min);
        selected[y] = 1;
        edges++;
    }
    
    return 0;
}
