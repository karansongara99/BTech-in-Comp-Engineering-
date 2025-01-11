using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical_Two
{
    internal class Salary
    {
        double basic;
        double ta;
        double da;
        double hra;
        public double total;

        public Salary(double basic, double ta, double da, double hra)
        {
            this.basic = basic;
            this.ta = ta;
            this.da = da;
            this.hra = hra;
        }

        public void totalSalary()
        {
            total = (basic + ta + da + hra);
            Console.WriteLine(total);
        }

        public void DisplayDetail()
        {
            Console.WriteLine("Totl Slary Printed....:");
            Console.WriteLine(basic);
            Console.WriteLine(ta);
            Console.WriteLine(da);
            Console.WriteLine(hra);
            Console.WriteLine(total);
        }
    }
}
