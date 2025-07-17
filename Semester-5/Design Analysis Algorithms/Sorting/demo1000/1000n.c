#include<stdio.h>
#include<time.h>
#include<stdlib.h>
#define N 1000

void best_case()
{
    FILE *fp = fopen("Best_case.txt", "w");
    for(int i = 1; i <= N; i++)
    {
        fprintf(fp, "%d\n", i);
    }
    fclose(fp);
}

void worst_case()
{
    FILE *fp = fopen("Worst_case.txt", "w");
    for(int i = N; i >= 1; i--)
    {
        fprintf(fp, "%d\n", i);
    }
    fclose(fp);
}

void average_case()
{
    FILE *fp = fopen("Average_case.txt", "w");
    int arr[N];
    for (int i = 0; i < N; i++) {
        arr[i] = i + 1;
    }

    srand(time(NULL));
    for (int i = N - 1; i > 0; i--) {
        int j = rand() % (i + 1);
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    for (int i = 0; i < N; i++) {
        fprintf(fp, "%d\n", arr[i]);
    }

    fclose(fp);
}

int main()
{
    best_case();
    worst_case();
    average_case();
    return 0;
}