using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical_Four
{
    internal class Hospital
    {
        public virtual void HsopitalDetail()
        {
            Console.WriteLine("Hospital Class....");
        }
    }

    class Apollo : Hospital 
    {
        public override void HsopitalDetail() 
        {
            Console.WriteLine("Apollo Hospital......");   
        }

    }

    class Wockhdart : Hospital 
    {
        public void HospitalDetail()
        {
            Console.WriteLine("Wockhdart Hospital....");
        }

    }

    class Gokul_Supercity : Hospital 
    {
        public override void HsopitalDetail()
        {
            Console.WriteLine("Gokul_Supercity Hospital.......");
        }
    }
}
