using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical_Two
{
    internal class Student
    {
        string enrolllment_no;
        string name;
        int semester;
        double spi;
        double cpi;

        public Student(string enrolllment_no,string name,int semester,double cpi,double spi) 
        { 
            this.enrolllment_no = enrolllment_no;   
            this.name = name;
            this.semester = semester;
            this.cpi = cpi;
            this.spi = spi;
        }

        public void DisplayDetail()
        {
            Console.WriteLine("Enrollment No:" + enrolllment_no);
            Console.WriteLine("Name:" + name);
            Console.WriteLine("Semester:" + semester);
            Console.WriteLine("CPI:" + cpi);
            Console.WriteLine("SPI:" + spi);
        }
    }
}
