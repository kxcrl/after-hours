#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define INPUTBUFFER 80

int age;
int id;

char * get_input(){
  char ch;
  static char input[INPUTBUFFER];
  int char_count;

  ch = getchar();
  char_count = 0;
  while( (ch != '\n') && (char_count < INPUTBUFFER)) {
    input[char_count++] = ch;
    ch = getchar();
  }
  input[char_count] = '\0';

  if(strcmp(input, "exit") == 0){
    exit(0);
  }

  return input;
}

int main() {
  char *input;
  char name[INPUTBUFFER];
  char friend[INPUTBUFFER];

  puts("What is your name?");
  input = get_input();
  strcpy(name, input);

  puts("What is your friend's name?");
  input = get_input();
  strcpy(friend, input);

  puts("How old are you?");
  scanf("%d", &age);

  puts("What ID would you like?");
  puts("Please choose 5 numbers.");
  scanf("%d", &id);

  printf("You are %s.\n", name);
  printf("Your friend is %s.\n", friend);
  printf("You are %d years old, and next year you will be %d.\n", age, age+1);
  printf("Your user id is %d.\n", id);
}
