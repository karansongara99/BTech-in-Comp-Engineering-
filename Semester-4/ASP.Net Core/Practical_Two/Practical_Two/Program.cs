using System.Drawing;
using static Practical_Two.InterfaccccceLast;

namespace Practical_Two
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
                    Candidate candidate = new Candidate();
                    candidate.GetDetails();
                    candidate.DisplayDeatil();
                    break;
                case 2:
                    Staff[] staffArray = new Staff[5];
                    for (int i = 0; i < 5; i++)
                    {
                        staffArray[i] = new Staff();
                        Console.WriteLine($"Enter details for Staff {i + 1}:");
                        staffArray[i].GetDetail();
                        if (staffArray[i].designation.ToLower() == "hod")
                        {
                            staffArray[i].DisplayHODDeatil();
                        }
                    }
                    break;
                case 3:
                    Bank_Account account = new Bank_Account(); 
                    account.GetAccountDetails();
                    account.DisplayAccountDetails();
                    break;
                case 4:
                    Student stu = new Student("240A54545","karan",4,8.25,8.00);
                    stu.DisplayDetail();
                    break;
                case 5:
                    AreaofRec r = new AreaofRec(10,50);
                    r.CalculateArea();
                    break;
                case 6:
                    Interest obj = new Interest();
                    obj.get_interest_details();
                    obj.calculate_interest();
                    obj.display();
                    break;
                case 7:
                    Console.Write("Enter Basic Salary: ");
                    Salary s = new Salary(10.0,20.0,30.0,40.0);
                    s.totalSalary();
                    s.DisplayDetail();
                    break;
                case 8:
                    DistanceONX d = new DistanceONX(10, 20,30);
                    d.CalculateDispaly();
                    d.DisplayDistance();
                    break;
                case 9:
                    XYZ table = new XYZ("Wood", 1500.00m, 1.2, 2.5);
                    table.DisplayTableDetails();
                    break;
                case 10:
                    Employee emp = new Employee 
                    { 
                        Name = "John Doe", 
                        BasicSal = 50000, 
                        HRA = 10000, 
                        TA = 5000, 
                        DA = 8000 
                    };
                    emp.basic_sal();
                    emp.DisplaySAL();
                    emp.Gross_sal();
                    break;
                default:
                    Console.WriteLine("Invalid Choose:");
                    break;
            }
        }
    }
}
