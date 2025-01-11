using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical_Two
{
    internal class DistanceONX
    {
        int dist1;
        int dist2;
        int dist3;

        public DistanceONX(int dist1, int dist2, int dist3)
        {
            this.dist1 = dist1;
            this.dist2 = dist2;
        }

        public void CalculateDispaly()
        {
            dist3 = dist1 + dist2;
            Console.WriteLine(dist3);
        }

        public void DisplayDistance()
        {
            Console.WriteLine("Distance 1: "+dist1);
            Console.WriteLine("Distance 2 : " + dist2);
            Console.WriteLine("Distance 3: " + dist3);
        }
    }
}
