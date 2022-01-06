#include <stdio.h>
#include <math.h>

int main() {
    const double PI = 3.14;
    double r, c, area;
    printf("Enter radius: ");
    scanf("%lf", &r);
    c = 2 * PI * r;
    area = PI * pow(r, 2);
    printf("circumference:  %lf", c);
    printf("\nArea: %lf", area);

    return 0;
}