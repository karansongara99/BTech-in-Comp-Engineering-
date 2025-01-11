using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical_Two
{
    internal class InterfaccccceLast
    {
        public interface GrossONE
        {
            public void Groos_Sal();
        }

        public class Salary
        {
            public decimal HRA;
            public decimal TA;
            public decimal DA;

            public void DisplaySAL()
            {
                Console.WriteLine($"HRA : {HRA} , TA : {TA} , DA : {DA}");
            }
        }
        public class Employee : Salary, GrossONE
        {
            public string Name;
            public decimal BasicSal;
            public decimal GrossSalary;

            public void basic_sal() 
            { 
                Console.WriteLine($"Basic Salary of {Name}: {BasicSal}"); 
            }

            public void Groos_Sal()
            {
                throw new NotImplementedException();
            }

            public void Gross_sal() 
            { 
                GrossSalary = BasicSal + HRA + TA + DA; 
                Console.WriteLine($"Gross Salary of {Name}: {GrossSalary}"); 
            }
        }
    }
}
