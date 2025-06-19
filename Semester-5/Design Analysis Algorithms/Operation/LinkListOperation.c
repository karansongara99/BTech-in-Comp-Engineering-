#include <stdio.h>
#include <stdlib.h>

struct LinkListOperation
{
    int data;
    struct LinkListOperation* next;
};

struct LinkListOperation* head = NULL;

void insert(int data) {
    struct LinkListOperation* newNode = (struct LinkListOperation*)malloc(sizeof(struct LinkListOperation));
    newNode->data = data;
    newNode->next = head;
    head = newNode;
}

int delete(int data) {
    struct LinkListOperation* current = head;
    struct LinkListOperation* previous = NULL;

    while (current != NULL && current->data != data) {
        previous = current;
        current = current->next;
    }

    if (current == NULL) {
        printf("Element %d not found in the list.\n", data);
        return 0; 
    }

    if (previous == NULL) {
        head = current->next; 
    } else {
        previous->next = current->next; 
    }

    free(current);
    printf("Element %d deleted from the list.\n", data);
    return 1; 
}

void search(int data) {
    struct LinkListOperation* current = head;
    int position = 0;

    while (current != NULL) {
        if (current->data == data) {
            printf("Element %d found at position %d.\n", data, position);
            return;
        }
        current = current->next;
        position++;
    }

    printf("Element %d not found in the list.\n", data);
}

void display() {
    struct LinkListOperation* current = head;

    if (current == NULL) {
        printf("No elements in the list.\n");
        return;
    }

    printf("List elements: ");
    while (current != NULL) {
        printf("%d ", current->data);
        current = current->next;
    }
    printf("\n");
}

int main() {
    int choice, data;

    do {
        printf("\n--- Link List Operations ---\n");
        printf("1. Insert\n");
        printf("2. Delete\n");
        printf("3. Searching\n");
        printf("4. Display\n");
        printf("5. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
            printf("Enter data to insert: ");
                scanf("%d", &data);
                insert(data);
                printf("Element %d inserted into the list.\n", data);
                break;
               
            case 2:
                printf("Enter data to delete: ");
                scanf("%d", &data);
                delete(data);
                break;
           
            case 3:
            printf("Enter data to search: ");
                scanf("%d", &data);
                search(data);
                break;
            
            case 4:
            display();
                
            default:
                printf("Invalid choice. Please try again.\n");
        }
    } while (choice != 3);

    return 0;
}
