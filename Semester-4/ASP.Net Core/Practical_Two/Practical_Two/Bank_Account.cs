using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical_Two
{
    internal class Bank_Account
    {
        int Account_No;
        string Email;
        string User_Name;
        string Account_Type;
        int Account_Balance;

        public void GetAccountDetails() 
        { 
            Console.Write("Enter Account Number: "); 
            Account_No = Convert.ToInt32(Console.ReadLine()); 
            Console.Write("Enter Email: "); 
            Email = Console.ReadLine(); 
            Console.Write("Enter User Name: "); 
            User_Name = Console.ReadLine(); 
            Console.Write("Enter Account Type:"); 
            Account_Type = Console.ReadLine(); Console.Write("Enter Account Balance: "); 
            Account_Balance = Convert.ToInt32(Console.ReadLine()); 
        }

        public void DisplayAccountDetails() 
        { 
            Console.WriteLine("\nAccount Details:"); 
            Console.WriteLine("Account Number:"+Account_No);
            Console.WriteLine("Email:" + Email); 
            Console.WriteLine("User Name:" +User_Name); 
            Console.WriteLine("Account Type:" + Account_Type); 
            Console.WriteLine("Account Balance:" + Account_Balance); 
        }
    }
}
