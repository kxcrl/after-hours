#include <stdio.h>
#include <string.h>

char ch;
char name[80];
int char_count;
int age;
int id;

void get_name(){
  ch = getchar();
  char_count = 0;
  while( (ch != '\n') && (char_count < 80)) {
    name[char_count++] = ch;
    ch = getchar();
  }
  name[char_count] = '\0';
}

int main() {
  puts("What is your name?");
  get_name();

  if(strcmp(name, "exit") == 0){
    return 0;
  }

  puts("How old are you?");
  scanf("%d", &age);

  puts("What ID would you like?");
  puts("Please choose 5 numbers.");
  scanf("%d", &id);

  printf("You are %s.\n", name);
  printf("You are %d years old, and next year you will be %d.\n", age, age+1);
  printf("Your user id is %d.\n", id);
}
