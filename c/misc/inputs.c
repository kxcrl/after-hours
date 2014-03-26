#include <stdio.h>
#include <string.h>


int main() {
  /* char firstName[256]; */
  /* char lastName[256]; */
  char ch;
  char name[80];
  int char_count;
  int age;
  int id;

  puts("What is your name?");
  ch = getchar();
  char_count = 0;
  while( (ch != '\n') && (char_count < 80)) {
    name[char_count++] = ch;
    ch = getchar();
  }
  name[char_count] = '\0';

  if(strcmp(name, "exit\n")){
    return(0);
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
