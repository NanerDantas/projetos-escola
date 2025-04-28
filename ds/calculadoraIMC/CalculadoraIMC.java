public class CalculadoraIMC {
    public static void main(String[] args) {

        double peso = 60;
        double altura = 1.67;
        double imc = calcularIMC(peso, altura);

        System.out.println("Peso: " + peso + "kg");
        System.out.println("Altura: " + altura + " metros");
        System.out.println("IMC: " + imc);

        if (imc < 18.5) {
            System.out.println("Classificação: Magreza");
        } else if (imc < 25) {
            System.out.println("Classificação: Normal");
        } else if (imc < 30) {
            System.out.println("Classificação: Sobrepeso");
        } else if (imc < 40) {
            System.out.println("Classificação: Obesidade");
        } else {
            System.out.println("Classificação: Obesidade Grave");
        }
    }

    public static double calcularIMC(double peso, double altura) {
        return peso / (altura * altura);
    }
}