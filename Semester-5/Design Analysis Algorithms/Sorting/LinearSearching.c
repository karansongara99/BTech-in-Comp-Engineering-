#include<stdio.h>
#include<time.h>
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
    fclose(f);
    return 1;
}
int linearSearch(int arr[], int n, int key){
    for(int i=0; i<n; i++){
        if(arr[i] == key)
            return i; 
        }
    return -1; 
}
int main(){
    int arr[N];
    int key, pos;
    if(!readFile("D:\\Programer\\BTech\\Sem-5\\DAA\\Sorting\\best_case_100.txt", arr, N)){
        return 1;
    }
    printf("Enter element to search: ");
    scanf("%d", &key);

    clock_t start = clock();
    pos = linearSearch(arr, N, key);
    clock_t end = clock();

    if(pos != -1)
        printf("Element found at index %d\n", pos);
    else
        printf("Element not found\n");

    double time_taken = ((double)(end - start)) / CLOCKS_PER_SEC * 1000;
    printf("Time taken: %f ms\n", time_taken);

    return 0;
}