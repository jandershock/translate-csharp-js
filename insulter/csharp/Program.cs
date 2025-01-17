﻿using System;
using System.Collections.Generic;

namespace csharp
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> insults = new List<string>(){
                "You look like what morning breath smells like.",
                "I am not a fan of you",
                "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
                "I'd rather walk than be on the same plane as you",
                "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
                "Do you have to be so...like that?"
            };

            List<int> indexes = new List<int>();
            while (indexes.Count < 3)
            {
                int candidate = new Random().Next(0, insults.Count);
                if (!indexes.Contains(candidate))
                {
                    indexes.Add(candidate);
                }
            }

            foreach(int i in indexes)
            {
                Console.WriteLine($"{insults[i]}");
            }
        }
    }
}
