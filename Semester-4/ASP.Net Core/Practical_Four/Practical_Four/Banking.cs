using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical_Four
{
    internal class Banking
    {
        public virtual void calculateInterest() 
        {
            Console.WriteLine("Bsnking....");
        }
    }

    class HDFC : Banking
    {
        public override void calculateInterest() 
        {
            Console.WriteLine("HDFC.....");
        }
    }

    class SBI : Banking
    {
        public override void calculateInterest() 
        {
            Console.WriteLine("SBI............");
        }
    }

    class ICICI : Banking
    {
        public override void calculateInterest()
        {
            Console.WriteLine("ICICI.........");
        }
    }
}
