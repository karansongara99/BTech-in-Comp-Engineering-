#include <stdio.h>

#define MAX 100

struct Edge
{
    int s, d, weight;
};

int find(int parent[], int i)
{
    if (parent[i] == -1)
        return i;
    return find(parent, parent[i]);
}

void unionSets(int parent[], int rank[], int x, int y)
{
    int xroot = find(parent, x);
    int yroot = find(parent, y);

    if (rank[xroot] < rank[yroot])
    {
        parent[xroot] = yroot;
    }
    else if (rank[xroot] > rank[yroot])
    {
        parent[yroot] = xroot;
    }
    else
    {
        parent[yroot] = xroot;
        rank[xroot]++;
    }
}

void kruskal(int n, struct Edge edges[], int m)
{
    int parent[MAX], rank[MAX];
    for (int i = 0; i < n; i++)
    {
        parent[i] = -1;
        rank[i] = 0;
    }

    printf("Edge : Weight\n");
    for (int i = 0; i < m; i++)
    {
        int x = find(parent, edges[i].s);
        int y = find(parent, edges[i].d);

        if (x != y)
        {
            printf("%d - %d : %d\n", edges[i].s, edges[i].d, edges[i].weight);
            unionSets(parent, rank, x, y);
        }
    }
}

int main()
{
    int n = 4;
    int m = 5; 

    struct Edge edges[MAX] = {
        {0, 1, 10},
        {0, 2, 6},
        {0, 3, 5},
        {1, 3, 15},
        {2, 3, 4}};

    for (int i = 0; i < m - 1; i++)
    {
        for (int j = 0; j < m - i - 1; j++)
        {
            if (edges[j].weight > edges[j + 1].weight)
            {
                struct Edge temp = edges[j];
                edges[j] = edges[j + 1];
                edges[j + 1] = temp;
            }
        }
    }

    kruskal(n, edges, m);

    return 0;
}
