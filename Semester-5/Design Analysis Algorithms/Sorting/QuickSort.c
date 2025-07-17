#include <stdio.h>
#include <time.h>
#define N 100

int readFile(const char *filename, int arr[], int n){
    FILE *f = fopen(filename,"r");
    if(!f){
        printf("\nCannot open file: %s\n", filename);
        return 0;
    }
    for(int i = 0; i < n; i++){
        fscanf(f, "%d", &arr[i]);
    }
    fclose(f);
    return 1;
}

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pivot = arr[high];
        int i = low - 1;

        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                swap(&arr[i], &arr[j]);
            }
        }
        swap(&arr[i + 1], &arr[high]);
        int pi = i + 1;
        
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}


void printArray(int arr[], int n){
    printf("Sorted Array:\n");
    for(int i = 0; i < n; i++){
        
        printf("%d ", arr[i]);

    }
    printf("\n"); 
    
}

int main(){
    int arr100[N];

    if(readFile("D:\\Programer\\BTech\\Sem-5\\DAA\\Sorting\\best_case_100.txt", arr100, N)){
        clock_t t = clock();
        quickSort(arr100, 0, N - 1);
        t = clock() - t;
        printf("\nExecution time of best case with 100 elements = %f seconds", ((double)t / CLOCKS_PER_SEC));
    }

    if(readFile("D:\\Programer\\BTech\\Sem-5\\DAA\\Sorting\\average_case_100.txt", arr100, N)){
        clock_t t = clock();
        quickSort(arr100, 0, N - 1);
        t = clock() - t;
        printf("\nExecution time of average case with 100 elements = %f seconds", ((double)t / CLOCKS_PER_SEC));
    }

    if(readFile("D:\\Programer\\BTech\\Sem-5\\DAA\\Sorting\\worst_case_100.txt", arr100, N)){
        clock_t t = clock();
        quickSort(arr100, 0, N - 1);
        t = clock() - t;
        printf("\nExecution time of wrost case with 100 elements = %f seconds", ((double)t / CLOCKS_PER_SEC));
    }
}