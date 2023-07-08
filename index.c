#include <stdio.h>
#include <stdlib.h>

int main(){
    
    int n;
    int mul;
    printf("Indique la tabla que desea: ");
    scanf("%d",&n);

    printf("Tabla del %d\n",n);
    for(int i=0; i<=10; i++){
        mul=n*i;
        printf ("%d * %d = %d \n",n,i,mul);
    }
    return 0;
}