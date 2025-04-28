public class Metodos {
    static void meuMetodo() {
        System.out.println("Assim funciona um método");
    }
    // Static define que esse método pertence a classe main e não é
    //Objeto. Void significa que o método não vai ter um retorno

    static void meuMetodoComParametros(String nome, int idade) {
        System.out.println(nome + " tem " + idade);
    }

    public static void main(String[] args) {
        meuMetodo();
        meuMetodoComParametros("Renan", 16);
    }
}