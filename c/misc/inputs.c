#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define INPUTBUFFER 80

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
  int age;
  int id;

  puts("");
  puts("Welcome to the program!");
  puts("Let's learn a little bit about you.");
  puts("You can exit at anytime by entering 'exit' at the prompt.");

  puts("");
  puts("What is your name?");
  input = get_input();
  strcpy(name, input);

  puts("");
  puts("What is your friend's name?");
  input = get_input();
  strcpy(friend, input);

  puts("");
  puts("How old are you?");
  input = get_input();
  while(atoi(input) == 0){
    puts("Please enter a number (1 or greater) for your age.");
    input = get_input();
  }
  age = atoi(input);

  puts("");
  puts("What ID would you like? (Choose up to 5 numbers)");
  input = get_input();
  while(atoi(input) == 0 || atoi(input) > 99999){
    puts("Please choose up to 5 numbers for your ID.");
    input = get_input();
  }
  id = atoi(input);

  puts("");
  printf("You are %s.\n", name);
  printf("Your friend is %s.\n", friend);
  printf("You are %d years old, and next year you will be %d.\n", age, age+1);
  printf("Your user id is %d.\n", id);
}
