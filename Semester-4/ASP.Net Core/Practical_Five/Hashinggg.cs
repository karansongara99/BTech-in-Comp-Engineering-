using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical_Five
{
    internal class Hashinggg
    {
        public void HashingDAsh() 
        {
            Hashtable students = new Hashtable();

            Console.WriteLine("Student Name:");
            students.Add(1, "Karan");
            students.Add(2, "Kevin");
            students.Add(3, "Hatsh");
            HashinggData(students);


            Console.WriteLine("Student Remove:");
            students.Remove(1);
            HashinggData(students);


            Console.WriteLine("Contains Keys = " + students.ContainsKey(2));

            Console.WriteLine("Contains Values:" + students.ContainsValue("Hatsh"));

            Console.WriteLine("Hashtable Clear:");
            students.Remove(2);
            HashinggData(students);
        }

        public static void HashinggData(Hashtable students) 
        {
            foreach (var stu in students) 
            {
                Console.WriteLine(stu);
            }
        }
    }
}
