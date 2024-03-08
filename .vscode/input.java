import java.util.*;
public class input {
        public static void main(String args []){
                /*
                 * hi i am made a calculater :
                 */
                Scanner sc = new Scanner(System.in);
                System.out.println("enter value of a :");
                int a = sc.nextInt();
                System.out.println("enter value of b :");
                int b = sc.nextInt();
                System.out.println("enter of operator :");
                char operator = sc.next().charAt(0);
                switch (operator) {
                        case '+' : System.out.println(a+b);
                                    break;
                        case '-' : System.out.println(a-b);
                                   break;
                        case '*' : System.out.println(a*b);
                                   break;
                        case '/' : System.out.println(a/b);
                                   break;
                        case '%' : System.out.println(a%b);
                                   break;
                        default : System.out.println(" wrong operator");
  
                }
        }
}