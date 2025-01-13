using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical_Five
{
    internal class Queueeee
    {
        public void QueData()
        {
            Queue qure = new Queue();
            Console.WriteLine("Data Entered:");
            qure.Enqueue(10);
            qure.Enqueue(20);
            qure.Enqueue(30);
            qure.Enqueue(40);
            PrintingDataatat(qure);

            Console.WriteLine("Data Dequered:");
            qure.Dequeue();
            PrintingDataatat(qure);

            Console.WriteLine("Queue Peek:");
            qure.Peek();
            PrintingDataatat(qure);

            Console.WriteLine("Queue Contains:");
            qure.Contains(10);
            PrintingDataatat(qure);

            Console.WriteLine("Queue Clear:");
            qure.Clear();
            PrintingDataatat(qure);
        }

        public static void PrintingDataatat(Queue qure)
        {
            foreach (var item in qure) 
            {
                Console.WriteLine(item);
            }
        }
    }
}
