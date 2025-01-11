using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace Practical_Two
{
    internal class Account_Detail
    {
        public double principle;
        public double rate_of_interest;
        public double time;
        public double simple_interest;
    }

    class Interest : Account_Detail
    {
        public void get_interest_details()
        {
            Console.WriteLine("Enter Principle:");
            principle = double.Parse(Console.ReadLine());   

            Console.Write("Enter Rate of Interest: ");
            rate_of_interest = double.Parse(Console.ReadLine());

            Console.Write("Enter Time Period: ");
            time = double.Parse(Console.ReadLine());
        }

        public void calculate_interest()
        {
            simple_interest = ((principle * rate_of_interest * time) / 100);
        }

        public void display()
        {
            Console.WriteLine("Principle: " + principle);
            Console.WriteLine("Rate or Intersret : " + rate_of_interest);
            Console.WriteLine("Time: " + time);
            Console.WriteLine("Simple Interest: " + simple_interest);
        }
    }
}
