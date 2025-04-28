import java.util.Scanner;
class Input{
    public static void main(String[] args) {
        Scanner myObj = new Scanner(System.in);
        String msg;
        System.out.println("Insira a mensagem");
        msg = myObj.nextLine();

        System.out.println(msg);
        myObj.close();
    }
}