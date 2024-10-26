public class Plan {

    public final double MAX_GRANT = 7395;

    double grant;


    public Plan(Double income, double tuition) {

        //set field to numbers based on income and tuition.
        if (income >= 66500) {
            double difference = income - (income * 0.6805);
            double EFC = difference - tuition;
            grant = tuition - EFC;

        } else if (66500 > income && 63079.1 <= income) {
            double difference = income - (income * 0.67);
            double EFC = difference - tuition;
            grant = tuition - EFC;

        } else if (63079.1 > income && 59658.2 <= income) {
            double difference = income - (income * 0.66);
            double EFC = difference - tuition;
            grant = tuition - EFC;

        } else if (59658.2 > income && 56237.3 <= income) {
            double difference = income - (income * 0.65);
            double EFC = difference - tuition;
            grant = tuition - EFC;

        } else if (56237.3 > income && 52816.4 <= income) {
            double difference = income - (income * 0.64);
            double EFC = difference - tuition;
            grant = tuition - EFC;

        } else if (52816.4 > income && 49395.5 <= income) {
            double difference = income - (income * 0.63);
            double EFC = difference - tuition;
            grant = tuition - EFC;

        } else if (49395.5 > income && 45974.6 <= income) {
            double difference = income - (income * 0.62);
            double EFC = difference - tuition;
            grant = tuition - EFC;

        } else if (45974.6 > income && 42553.7 <= income) {
            double difference = income - (income * 0.61);
            double EFC = difference - tuition;
            grant = tuition - EFC;

        } else if (42553.7 > income && 39132.8 <= income) {
            double difference = income - (income * 0.60);
            double EFC = difference - tuition;
            grant = tuition - EFC;

        } else if (39132.8 > income && 35711.9 <= income) {
            double difference = income - (income * 0.59);
            double EFC = difference - tuition;
            grant = tuition - EFC;

        } else if (35711.9 > income && 32291 <= income) {
            double difference = income - (income * 0.58);
            double EFC = difference - tuition;
            grant = tuition - EFC;

        } else if (income < 32291) {
            double difference = income - (income * 0.57142857);
            double EFC = difference - tuition;
            grant = tuition - EFC;
        }
    }
    public double getGrant() {
        return grant;
    }

}
