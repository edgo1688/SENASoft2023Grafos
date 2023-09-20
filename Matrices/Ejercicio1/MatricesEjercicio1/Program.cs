//código inicial
namespace Matrices
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Matrices Practice");

            /*
            int[,] matriz = new int[2, 3];

            matriz[0, 1] = 6;

            Console.WriteLine(matriz.GetLength(0));

            imprimirMatriz(matriz);

            Random r = new Random();
            r.Next(200);
            */

            int[,] matrizAleatoria = inicializarMatriz(5, 4, 300);
            imprimirMatriz(matrizAleatoria);

        }

        //función imprimir
        public static void imprimirMatriz(int[,] matriz)
        {
            for (int i = 0; i < matriz.GetLength(0); i++)
            {
                for (int j = 0; j < matriz.GetLength(1); j++)
                {
                    Console.Write(matriz[i, j] + " ");
                }
                Console.WriteLine();
            }
        }

        //función inicializar Matriz
        public static int[,] inicializarMatriz(int f, int c, int maxValue)
        {
            int[,] matriz = new int[f, c];
            Random r = new Random();

            for (int i = 0; i < matriz.GetLength(0); i++)
            {
                for (int j = 0; j < matriz.GetLength(1); j++)
                {
                    matriz[i, j] = r.Next(maxValue);
                }
            }
            return matriz;
        }
    }
}