namespace Practical_one
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter Number:");
            int n = Convert.ToInt32(Console.ReadLine());
            if (n == 1)
            {
                Console.WriteLine("Fetaching Your Detail......");

                String name, address, city;
                int phone;

                Console.WriteLine("Enter Name:");
                name = Console.ReadLine();

                Console.WriteLine("Enter Address:");
                address = Console.ReadLine();

                Console.WriteLine("Enter Contact Number:");
                phone = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Enter City:");
                city = Console.ReadLine();

                Console.WriteLine("Finalyyyyy Priinting Detail......");
                Console.WriteLine(name);
                Console.WriteLine(address);
                Console.WriteLine(phone);
                Console.WriteLine(city);
            }
            else if (n == 2)
            {
                Console.WriteLine("Enterring TTwo User Value.......");

                int num1, num2;

                Console.WriteLine("Enter Number One");
                num1 = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Enter Number Two");
                num2 = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Number is 1: " + num1 + "Number is 2: " + num2);
            }
            else if (n == 3)
            {
                Console.WriteLine("Enterring Name or Country........");

                String name, country;

                Console.WriteLine("Enter Name:");
                name = Console.ReadLine();

                Console.WriteLine("Enter Country:");
                country = Console.ReadLine();

                Console.WriteLine("Hello" + name + "From Country" + country);
            }
            else if (n == 4)
            {
                Console.WriteLine("Sqaure Based...........");
                int lenght, breadth;

                Console.WriteLine("Enter Lenght");
                lenght = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Enter Breadth");
                breadth = Convert.ToInt32(Console.ReadLine());

                int area;

                area = lenght * breadth;

                Console.WriteLine("Final Area Of Square" + area);
            }
            else if (n == 5)
            {
                Console.WriteLine("Enterring Area OF Circle Square Rectangle..........");

                Console.WriteLine("Circle");
                int radius;
                Console.WriteLine("Enter Raduis");
                radius = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Final Area of Circle:" + 3.14 * radius * radius);

                Console.WriteLine("Rectangle");
                float lenght, breadth;
                Console.WriteLine("Enter Lenght:");
                lenght = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Enter Breadht:");
                breadth = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Final Area of Rectangle:" + lenght * breadth);


                Console.WriteLine("Sqaure");
                float side;
                Console.WriteLine("Enter Side By Side:");
                side = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Final Area of Square:" + side * side);
            }
            else if (n == 6)
            {
                Console.WriteLine("Convert Feh and Cel...........");
                Console.WriteLine("Enter Fahrenheit: ");
                int feh, cel;
                feh = Convert.ToInt32(Console.ReadLine());
                cel = (feh - 32) * 5 / 9;
                Console.WriteLine("Final Answer is:" + cel);

                Console.WriteLine("Enter Celsuis: ");
                int feha, cels;
                cels = Convert.ToInt32(Console.ReadLine());
                feha = (cels * 5 / 9) + 32;
                Console.WriteLine("Final Answer is:" + feha);
            }
            else if (n == 7)
            {

                Console.WriteLine("Enter P");
                int p = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Enter R");
                int r = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Enter N");
                int n1 = Convert.ToInt32(Console.ReadLine());
                int total = p * r * n1 / 100;
                Console.WriteLine("Final Principal:" + total);

            }
            else if (n == 8)
            {
                Console.WriteLine("Two Value Calculation:");
                Console.WriteLine("Enter N1");
                int num1 = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Enter N2");
                int num2 = Convert.ToInt32(Console.ReadLine());
                Console.WriteLine("Add , Sub , Mul , Div");
                int opr = Convert.ToInt32(Console.ReadLine());
                if (opr == '+')
                {
                    opr = num1 + num2;
                    Console.WriteLine(opr);
                }
                else if (opr == '-')
                {
                    opr = num1 - num2;
                    Console.WriteLine(opr);
                }
                else if (opr == '*')
                {
                    opr = num1 * num2;
                    Console.WriteLine(opr);
                }
                else if (opr == '/')
                {
                    opr = num1 / num2;
                    Console.WriteLine(opr);
                }
                else
                {
                    Console.WriteLine("Invalid Choose:");
                }
            }
            else if (n == 9)
            {
                Console.WriteLine("Two Value Swapping");
                int x = 10;
                int y = 5;

                x = x + y;
                y = x - y;
                x = x - y;
                Console.WriteLine("After swapping: x = " + x + ", y = " + y);
            }
            else if (n == 10)
            {
                Console.Write("Ternary Max Value:");
                int a;
                int b;
                int c;

                Console.WriteLine("Enter Number One");
                a = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Enter Number Two");
                b = Convert.ToInt32(Console.ReadLine());

                Console.WriteLine("Enter Number Three");
                c = Convert.ToInt32(Console.ReadLine());
                int total;
                total = (a > b) ? (a > c ? a : c) : (b > c ? b : c);
                Console.WriteLine("Max Value:" + total);
            }
            else {
                Console.WriteLine("Invalid");
            }
        }
    }
}
