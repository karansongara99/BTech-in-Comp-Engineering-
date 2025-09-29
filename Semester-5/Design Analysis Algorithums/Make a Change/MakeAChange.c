#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int min(int a, int b) {
    return (a < b) ? a : b;
}

int main() {
    int n,N;
    scanf("%d", &n);


    int d[n+1];
    for(int i = 0; i < n; i++) {
        scanf("%d", &d[i]);
    }
    
    printf("Enter the amount: ");
    scanf("%d", &N);

    int c[n+1][N+1];

    for(int i = 0; i <= n; i++) {
        c[i][0] = 1;
    }

    
    for(int j = 1; j <= N; j++) {
        c[0][j] = INT_MAX - 1;
    }

    for(int i = 1; i <= n; i++) {
        for(int j = 1; j <= N; j++) {
            if(i==1) {
                if(j>=d[1]) {
                    c[i][j] = 1  + c[i][j-d[1]];
                } else {
                    c[i][j] = INT_MAX - 1;
                }
            }
            else {
                if(j>=d[i]) {
                    c[i][j] = min(1 + c[i][j-d[i]], c[i-1][j]);
                } else {
                    c[i][j] = c[i-1][j];
                }
            }
        }
    }

    if(c[n][N] == INT_MAX - 1) {
        printf("Not possible\n");
    } else {
        printf("Minimum coins needed: %d\n", c[n][N]);
    }
}
