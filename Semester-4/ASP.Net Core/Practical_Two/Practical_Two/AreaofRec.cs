using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical_Two
{
    internal class AreaofRec
    {
        int length;
        int width;
        public AreaofRec(int length, int width)
        {
            this.length = length;
            this.width = width;
        }

        public void CalculateArea()
        {
            int total = length * width;
            Console.WriteLine(total);
        }
    }
}
