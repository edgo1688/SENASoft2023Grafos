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

            //encontrar el menor y el mayor valor, e imprimirlos con sus posiciones
            int i_min = 0, j_min = 0;
            int i_max = 0, j_max = 0;

            int min = matrizAleatoria[i_min, j_min];
            int max = matrizAleatoria[i_max, j_max];

            //ciclos anidados
            for (int i = 0; i < matrizAleatoria.GetLength(0); i++)
            {
                for (int j = 0; j < matrizAleatoria.GetLength(1); j++)
                {
                    if(matrizAleatoria[i, j] < min)
                    {
                        min = matrizAleatoria[i,j];
                        i_min = i;
                        j_min = j;
                    }
                    
                    if(matrizAleatoria[i, j] > max)
                    {
                        max = matrizAleatoria[i,j];
                        i_max = i;
                        j_max = j;
                    }
                }
            }

            //Console.WriteLine("El valor mínimo es: " + min+ ", y se encuentra en la posición " + i_min);
            Console.WriteLine($"El valor mínimo es: {min} y se encuentra en la posición [{i_min},{j_min}]");
            Console.WriteLine($"El valor máximo es: {max} y se encuentra en la posición [{i_max},{j_max}]");

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