using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Practical_Two
{
    internal class Furniture
    {
        public string Material;
        public decimal Price;
       public Furniture(string material, decimal price) 
        { 
            Material = material; 
            Price = price; 
        } 
        public void DisplayFurnitureDetails() 
        { 
            Console.WriteLine($"Material: {Material}"); 
            Console.WriteLine($"Price: {Price}"); 
        }
    }
    class XYZ : Furniture
    {
        public double Height;
        public double SurfaceArea; 
        public XYZ(string material, decimal price, double height, double surfaceArea) : base(material, price) 
        { 
            Height = height; 
            SurfaceArea = surfaceArea; 
        } 
        public void DisplayTableDetails() 
        {  
            DisplayFurnitureDetails(); 
            Console.WriteLine($"Height: {Height}"); 
            Console.WriteLine($"Surface Area: {SurfaceArea}"); 
        }
    }
}
