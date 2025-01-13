using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical_Four
{
    internal class AreaofSqRec
    {
        public void Areaof(int lenght)
        {
            Console.WriteLine("Area OF Square:");
            Console.WriteLine(lenght*lenght);
        }
        public void Areaof(double lenght, double breadth)
        {
            Console.WriteLine("Area OF Reactangle:");
            Console.WriteLine(lenght * breadth);
        }
    }
}
