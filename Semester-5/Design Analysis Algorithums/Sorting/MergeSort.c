#include <stdio.h>
#include <time.h>
#define N 100

int readFile(const char *filename, int arr[], int n){
    FILE *f = fopen(filename, "r");
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

void merge(int arr[], int left, int mid, int right){
    int n1 = mid - left + 1;
    int n2 = right - mid;

    int L[n1], R[n2];

    for(int i = 0; i < n1; i++)
        L[i] = arr[left + i];
    for(int j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    int i = 0, j = 0, k = left;

    while(i < n1 && j < n2){
        if(L[i] <= R[j]){
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while(i < n1){
        arr[k] = L[i];
        i++;
        k++;
    }

    while(j < n2){
        arr[k] = R[j];
        j++;
        k++;
    }
}

void mergeSort(int arr[], int left, int right){
    if(left < right){
        int mid = left + (right - left) / 2;

        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);

        merge(arr, left, mid, right);
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

    if(readFile("D:\\Programer\\BTech\\Sem-5\\DAA\\Sorting\\demo100\\Best_case.txt", arr100, N)){
        clock_t t = clock();
        mergeSort(arr100, 0, N - 1);
        t = clock() - t;
        printf("\nExecution time of best case with 100 elements = %f seconds", ((double)t / CLOCKS_PER_SEC));
    }

    if(readFile("D:\\Programer\\BTech\\Sem-5\\DAA\\Sorting\\demo100\\Average_case.txt", arr100, N)){
        clock_t t = clock();
        mergeSort(arr100, 0, N - 1);
        t = clock() - t;
        printf("\nExecution time of average case with 100 elements = %f seconds", ((double)t / CLOCKS_PER_SEC));
    }

    if(readFile("D:\\Programer\\BTech\\Sem-5\\DAA\\Sorting\\demo100\\Worst_case.txt", arr100, N)){
        clock_t t = clock();
        mergeSort(arr100, 0, N - 1);
        t = clock() - t;
        printf("\nExecution time of worst case with 100 elements = %f seconds", ((double)t / CLOCKS_PER_SEC));
    }

    return 0;
}
