using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical_Five
{
    internal class Dictoiaryyy
    {
        public void Dictoinayyy() 
        {
            Dictionary<int,string> dic = new Dictionary<int, string>();
            Console.WriteLine("Entered Data");
            dic.Add(1, "Karan");
            dic.Add(2, "Kanu");
            dic.Add(3, "Vivek");
            dic.Add(4, "Khush");
            dic.Add(5, "Keyur");
            PrintingDic(dic);

            Console.WriteLine("Remove Dictonary");
            dic.Remove(1);
            PrintingDic(dic);

            Console.WriteLine("Contains Keys = "+ dic.ContainsKey(2));
            
            Console.WriteLine("Contains Values:"+ dic.ContainsValue("Keyur"));
            
            Console.WriteLine("Dictonary Clear:");
            dic.Clear();
            PrintingDic(dic);
        }

        public static void PrintingDic(Dictionary<int,string> dic)
        {
            foreach (var item in dic)
            {
                Console.WriteLine(item);
            }
        }
    }
}
