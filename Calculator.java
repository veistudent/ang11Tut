import java.util.*;

public class Calculator {
    //main method
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int qty = 0;
        String state = new String();
        double price = 0;
        // Boolean valid = false;
        ArrayList<Double> stateTaxes = new ArrayList<>(Arrays.asList(0.0625, 0.08, 0.045));
        ArrayList<String> states = new ArrayList<>(Arrays.asList("TX", "CA", "UT"));
        ArrayList<Double> discount = new ArrayList<>(Arrays.asList(0.03, 0.05, 0.07));
        ArrayList<Integer> balances = new ArrayList<>(Arrays.asList(1000, 3000, 5000));

        // while( !valid ) {
        //     try{
        //         qty = in.nextInt();
        //         if (qty.)
        //     } catch(Exception e){
        //         System.out.println("please enter a");
        //     }

        // }

        System.out.print("Enter a quantity of items: ");
        qty = in.nextInt();
        // System.out.println("the quantity entered is: " + qty);
        
        System.out.print("Enter a state: ");
        state = in.next();

        System.out.print("Enter a price: ");
        price = in.nextDouble();
        in.close();

        // NumberFormat dollar = Currency.getCurrencyInstance("US");

        System.out.println("the total after discounts and state taxes is: " + 
                            calculateTotal(qty, state, price));
        

    } //end of main()

    protected static double calculateTotal(int qty, String state, double price) {
        //select state taxes
        double value = Value(qty, price);
        double discount = Discount(value);
        double taxAmount = TaxAmount(value, discount, state);
        return Total(value, discount, taxAmount);
    }

    private static double Total(double value, double discount, double taxAmount) {
        return (value - discount) + taxAmount;
    }

    private static double TaxAmount(double value, double discount, String state) {
        double taxRate = TaxRate(state);
        double valueAfterDiscount = value - discount;
        double taxAmount = valueAfterDiscount * taxRate;
        return taxAmount;
    }

    private static double Discount(double value) {
        double discount = 0;
        if (value >= 5000) {
            discount = value * 0.07;
        } else if (value >= 3000) {
            discount = value * 0.05;
        } else if (value >= 1000) {
            discount = value * 0.03;
        }
        
        return discount;
    }

    private static double Value(int qty, double price){
        return (qty * price);
    }

    private static double TaxRate(String state) {
        double rate = 0;
        switch (state){
            case "TX":
                rate = 0.0625;
                break;
            case "CA":
                rate = 0.08;
                break;
            default:
                rate = 0.045;
        }
        return rate;
    }
}