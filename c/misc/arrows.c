#include <stdio.h>
#include <unistd.h>


int main() {
  int arrows;

  puts("How many arrows would you like to unleash?");
  scanf("%d", &arrows);

  while(arrows > 0) {
    if(arrows == 1) {
      puts("1 arrow left\n");
    } else {
      printf("%d arrows left\n", arrows);
    }

    sleep(1);
    puts("Fire!\n");
    arrows--;
  }

  puts("All arrows fired");
}
