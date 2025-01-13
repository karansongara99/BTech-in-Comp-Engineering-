using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical_Five
{
    internal class Listingg
    {
        public void StudentName() 
        {
            List<string> lista = new List<string>();
            Console.WriteLine("Student Name:");
            lista.Add("Karan");
            lista.Add("Pratik");
            lista.Add("Khush");
            lista.Add("Keyur");
            lista.Add("Mahesh");
            Printinggg(lista);

            Console.WriteLine("Student Remove:");
            lista.RemoveAt(2);
            Printinggg(lista);

            Console.WriteLine("Remove Range:");
            lista.RemoveRange(0, 3);
            Printinggg(lista);

            Console.WriteLine("List Clear:");
            lista.Clear();
            Printinggg(lista);

            static void Printinggg(List<string> list)
            {

                foreach (var student in list)
                {
                    Console.WriteLine(student);
                }

            }
        }
    }
}
