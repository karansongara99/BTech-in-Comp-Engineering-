using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical_Four
{
    internal class BankAccountLast
    {
        public int initialBalance;
        public int accountHolderName;
        public BankAccountLast()
        {
            Console.WriteLine("Enter Initak=lBalnce:");
            initialBalance = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter Account Holder Number");
            accountHolderName = Convert.ToInt32(Console.ReadLine());
        }
        public void Deposit(int Cash)
        {
            Console.WriteLine("Deposit For Cash...");
            Console.WriteLine(initialBalance);
            Console.WriteLine(accountHolderName);
            Console.WriteLine(Cash);
        }
        public void Deposit(string CheckNumber)
        {
            Console.WriteLine("Deposit For Check Number....");
            Console.WriteLine(initialBalance);
            Console.WriteLine(accountHolderName);
            Console.WriteLine(CheckNumber);
        }
        public void Withdraw(int Cash)
        {
            Console.WriteLine("Withdraw For Cash...");
            Console.WriteLine(initialBalance);
            Console.WriteLine(accountHolderName);
            Console.WriteLine(Cash);
        }
        public void Withdraw(string CheckNumber)
        {
            Console.WriteLine("Withdraw For CheckNumber....");
            Console.WriteLine(initialBalance);
            Console.WriteLine(accountHolderName);
            Console.WriteLine(CheckNumber);
        }
    }
}


