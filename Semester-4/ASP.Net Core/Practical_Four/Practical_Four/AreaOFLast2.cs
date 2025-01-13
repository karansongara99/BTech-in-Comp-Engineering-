using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical_Four
{
    internal class AreaOFLast2
    {
        public double CalculateArea(int side)
        {
            return side * side;
        }
        public double CalculateArea(double length, double width)
        {
            return length * width;
        }
        public double CalculateArea(double radius)
        {
            return Math.PI * radius * radius;
        }
    }
}
