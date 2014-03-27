#include <stdio.h>
#include <string.h>

int age;
int id;

char * get_input(){
  char ch;
  static char input[80];
  int char_count;

  ch = getchar();
  char_count = 0;
  while( (ch != '\n') && (char_count < 80)) {
    input[char_count++] = ch;
    ch = getchar();
  }
  input[char_count] = '\0';

  return input;
}

int main() {
  char *name;

  puts("What is your name?");
  name = get_input();

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
