#include <math.h> //erf, sqrt
#include <stdio.h> //printf

int main(int argc, char *argv[]) {
    printf("The integral of a Normal(0, 1) distribution "
           "between -1.96 and 1.96 if: %g\n",
           erf(1.96*sqrt(1/2.)));
}
