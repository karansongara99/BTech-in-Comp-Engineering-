using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Practical_Two
{
    internal class Staff
    {
        string name;
        string department;
       public  string designation;
        int experirence;
        int salary;

        public void GetDetail()
        {
            Console.WriteLine("Enter Name:");
            name = Console.ReadLine();
            Console.WriteLine("Enter Department:");
            department = Console.ReadLine();
            Console.WriteLine("Enter Designation:");
            designation = Console.ReadLine();
            Console.WriteLine("Enter Experirence:");
            experirence = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Salary:");
            salary = Convert.ToInt32(Console.ReadLine());
        }

        public void DisplayHODDeatil()
        {
            
                Console.WriteLine($"Name: {name}");
                Console.WriteLine($"Salary: {salary}");
            
        }
    }
}
