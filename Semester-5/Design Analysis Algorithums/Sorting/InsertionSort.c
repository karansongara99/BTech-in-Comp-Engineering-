#include <stdio.h>
#include <time.h>
#define N 100

int readFile(const char *filename, int arr[], int n){
    FILE *f = fopen(filename,"r");
    if(!f){
        printf("\ncan not open file\n");
        return 0;
    }
    for(int i=0 ; i<n ; i++){
        fscanf(f,"%d ",&arr[i]);
    }
    return 1;
}

void insertionSort(int arr[], int n){
    for (int i = 1; i < n; i++){
        int key = arr[i];
        int  j = i-1;
        while (j>=0 && arr[j] > key){
            arr[j+1] = arr[j];
            j -= 1;
        }
        arr[j+1] = key;
    }
    
}


void printArray(int arr[], int n){
    printf("Sorted Array:\n");
    for(int i=0 ; i<n ; i++)
    {
        printf("%d ",arr[i]);
    }
    printf("\n");
}

int main(){
    int arr100[100];
    if(readFile("D:\\Programer\\BTech\\Sem-5\\DAA\\Sorting\\best_case_100.txt",arr100, 100)){
        clock_t t = clock();
        insertionSort(arr100,100);
        printf("\nExecution time of best case with 100 elements = %f", ((double)(clock() - t)/CLOCKS_PER_SEC));
    }
    if(readFile("D:\\Programer\\BTech\\Sem-5\\DAA\\Sorting\\average_case_100.txt",arr100, 100)){
        clock_t t = clock();
       insertionSort(arr100,100);
        printf("\nExecution time of average case with 100 elements = %f", ((double)(clock() - t)/CLOCKS_PER_SEC));
    }
    if(readFile("D:\\Programer\\BTech\\Sem-5\\DAA\\Sorting\\worst_case_100.txt",arr100, 100)){
        clock_t t = clock();
        insertionSort(arr100,100);
        printf("\nExecution time of worst case with 100 elements = %f", ((double)(clock() - t)/CLOCKS_PER_SEC));
    }
}