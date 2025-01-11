using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ConstrainedExecution;
using System.Text;
using System.Threading.Tasks;

namespace Practical_Two
{
    internal class Candidate
    {
        int id;
        string name;
        int age;
        int weight;
        int height;
        public void GetDetails()
        {
            Console.WriteLine("Get Deatils:");
            Console.WriteLine("Enter ID:");
            id = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Name:");
            name = Console.ReadLine();
            Console.WriteLine("Enter Age:");
            age = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Weight:");
            weight = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Height:");
            height = Convert.ToInt32(Console.ReadLine());
        }
        public void DisplayDeatil()
        {
            Console.WriteLine("Display Detail:");
            Console.WriteLine(id);
            Console.WriteLine(name);
            Console.WriteLine(age);
            Console.WriteLine(weight);
            Console.WriteLine(height);
        }
    }
}
