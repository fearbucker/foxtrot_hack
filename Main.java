import java.util.*;

public class Main {


    public static void main(String[] args) {


        Scanner scanner = new Scanner(System.in);

        System.out.println("enter your income");
        double income = scanner.nextDouble();

        System.out.println("enter tuition");
        double tuition = scanner.nextDouble();

        Plan p1 = new Plan(income, tuition);
        System.out.println(p1.getGrant());








    }
}