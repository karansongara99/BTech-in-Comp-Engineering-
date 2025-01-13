using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical_Five
{
    internal class ArrayList1
    {
        public void StudentDetail() 
        {
            ArrayList studentList = new ArrayList();
            studentList.Add("Karan");
            studentList.Add("Kavyam");
            studentList.Add("Nikhil");
            studentList.Add("Ayush");
            studentList.Add("Khush");
            PrintStudents(studentList);

            studentList.RemoveAt(2); 
            Console.WriteLine("\nStudents after RemoveAt(2):");
            PrintStudents(studentList);

            studentList.RemoveRange(1, 2); 
            Console.WriteLine("\nStudents after RemoveRange(1, 2):");
            PrintStudents(studentList);

            studentList.Clear();
            Console.WriteLine("\nStudents after Clear:");
            PrintStudents(studentList);

            static void PrintStudents(ArrayList studentList)
            {
                
                foreach (var student in studentList)
                {
                    Console.WriteLine(student);
                }
                
            }
        }
    }
}
