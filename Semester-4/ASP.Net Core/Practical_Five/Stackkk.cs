using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Collections;
using System.Threading.Tasks;

namespace Practical_Five
{
    internal class Stackkk
    {
        public void Skickyy() 
        {
            Console.WriteLine("Number Pushed");
            Stack stack = new Stack();
            stack.Push(12);
            stack.Push(20);
            stack.Push(15);
            stack.Push(63);
            stack.Push(78);
            stack.Push(41);
            PrintData(stack);

            Console.WriteLine("Element Pop");
            stack.Pop();
            PrintData(stack);

            Console.WriteLine("Element Peek:");
            stack.Peek();
            PrintData(stack);

            Console.WriteLine("Constains Function:");
            stack.Contains(3);
            PrintData (stack);

            Console.WriteLine("Stack Clear:");
            stack.Clear();
            PrintData(stack);
        }

        public static void PrintData(Stack stack) 
        {
            foreach (var item in stack) 
            {
                Console.WriteLine(item);
            }
        }
    }
}
