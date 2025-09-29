#include <stdio.h>
#include <stdlib.h> 

#define SIZE 100

int top = -1;
int arr[SIZE];

void PUSH(int element) {
    if (top >= SIZE - 1) {
        printf("Stack Overflow\n");
        return;
    }
    top++;
    arr[top] = element;
    printf("%d pushed to stack.\n", element);
}

int POP() {
    if (top == -1) {
        printf("Stack Underflow\n");
        return -1; 
    }
    int element = arr[top];
    top--;
    printf("%d popped from stack.\n", element);
    return element;
}

int PEEP(int i) {
    if (top - i + 1 < 0 || i <= 0) { 
        printf("Stack Underflow or Invalid position.\n");
        return -1; 
    }
    int element = arr[top - i + 1];
    printf("Element at position %d from top: %d\n", i, element);
    return element;
}

void display() {
    if (top < 0) {
        printf("Stack is empty.\n");
    } else {
        printf("Stack elements: \n");
        for (int i = 0; i <= top; i++) {
            printf("%d ", arr[i]);
        }
        printf("\n");
    }
}

int main() {
    int choice, element, position;

    do {
        printf("\n--- Stack Operations ---\n");
        printf("1. PUSH\n");
        printf("2. POP\n");
        printf("3. PEEP\n");
        printf("4. Display\n");
        printf("5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter element to push: ");
                scanf("%d", &element);
                PUSH(element);
                break;
            case 2:
                POP();
                break;
            case 3:
                printf("Enter position from top to peek (e.g., 1 for top element): ");
                scanf("%d", &position);
                PEEP(position);
                break;
            case 4:
                display();
                break;
            case 5:
                printf("Exiting program.\n");
                exit(0); 
            default:
                printf("Invalid choice. Please try again.\n");
        }
    } while (1); 

    return 0;
}