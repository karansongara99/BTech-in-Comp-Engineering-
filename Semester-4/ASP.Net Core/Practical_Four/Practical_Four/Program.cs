namespace Practical_Four
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
                    TwoNumber tw = new TwoNumber();
                    tw.Additon(5, 1);
                    tw.Additon(6, 2, 4);
                    break;
                case 2:
                    AreaofSqRec arc = new AreaofSqRec();
                    arc.Areaof(10);
                    arc.Areaof(20,4);
                    break;
                case 3:
                    Banking bank1;
                    bank1 = new HDFC();
                    bank1.calculateInterest();
                    bank1 = new SBI();
                    bank1.calculateInterest();
                    bank1 = new ICICI();
                    bank1.calculateInterest();
                    break;
                case 4:
                    Hospital hos;
                    hos = new Apollo();
                    hos.HsopitalDetail();
                    hos = new Wockhdart();
                    hos.HsopitalDetail();
                    hos = new Gokul_Supercity();
                    hos.HsopitalDetail();
                    break;
                case 5:
                    AreaOFLast2 alt = new AreaOFLast2();
                    double squareSide = 5;
                    double squareArea = alt.CalculateArea(squareSide);
                    Console.WriteLine("Area of Square: " + squareArea);

                    double rectangleLength = 4.0;
                    double rectangleWidth = 3.0;
                    double rectangleArea = alt.CalculateArea(rectangleLength, rectangleWidth);
                    Console.WriteLine("Area of Rectangle: " + rectangleArea);

                    double circleRadius = 2.5;
                    double circleArea = alt.CalculateArea(circleRadius);
                    Console.WriteLine("Area of Circle: " + circleArea);

                    Console.ReadLine();
                    break;
                case 6:
                    BankAccountLast bank = new BankAccountLast();
                    bank.Deposit(100);
                    bank.Deposit("242ADBD97");
                    bank.Withdraw(200);
                    bank.Withdraw("454HDHLD");
                    break;   
                default:
                    Console.WriteLine("Invalid Choose:");
                    break;
            }
        }
    }
}
