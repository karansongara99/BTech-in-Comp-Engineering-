#include <stdio.h>
#include <stdlib.h> 

#define SIZE 100
int arr[SIZE];
int rear = -1;
int front = -1;


void Enqueue(int element)
{
    if (rear == SIZE - 1)
    {
        printf("Queue Overflow\n");
        return;
    }
    if (front == -1) 
    {
        front = 0;
    }
    rear++;
    arr[rear] = element;
}
void Dequeue()
{
    if (front == -1 || front > rear)
    {
        printf("Queue Underflow\n");
        return;
    }
    int element = arr[front];
    front++;
    if (front > rear) 
    {
        front = -1;
        rear = -1;
    }
    printf("%d dequeued from queue.\n", element);
}

void display() {
    if (front == -1) {
        printf("No element in the Queue\n");
        return;
    }
    printf("Queue elements: \n");
    for (int i = front; i <= rear; i++) {
        printf("%d ", arr[i]);
    }
}

int main() {
    int choice, element, position;

    do {
        printf("\n--- Queue Operations ---\n");
        printf("1. Enquque\n");
        printf("2. Dequeue\n");
        printf("3. Display\n");
        printf("4. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                printf("Enter element to Enqueue: ");
                scanf("%d", &element);
                Enqueue(element);
                break;
            case 2:
                Dequeue();
                break;
            case 3:
                display();
                break;
            case 4:
                printf("Exiting program.\n");
                exit(0); 
            default:
                printf("Invalid choice. Please try again.\n");
        }
    } while (1); 

    return 0;
}