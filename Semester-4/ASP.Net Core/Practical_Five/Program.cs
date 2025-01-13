using System.Collections;

namespace Practical_Five
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter Number to Programmm...... ");
            int a = Convert.ToInt16(Console.ReadLine());
            switch (a)
            {
                case 1:
                    ArrayList1 stu = new ArrayList1();
                    stu.StudentDetail();
                    break;
                case 2:
                    Listingg listingg = new Listingg();
                    listingg.StudentName();
                    break;
                case 3:
                    Stackkk stackkk = new Stackkk();
                    stackkk.Skickyy();
                    break;
                case 4:
                    Queueeee queueeee = new Queueeee();
                    queueeee.QueData();
                    break;
                case 5:
                    Dictoiaryyy dict = new Dictoiaryyy();
                    dict.Dictoinayyy();
                    break;
                case 6:
                    Hashinggg hashinggg = new Hashinggg();
                    hashinggg.HashingDAsh();
                    break;
                default:
                    Console.WriteLine("Invalid Choose:");
                    break;
            }
        }
    }
}
