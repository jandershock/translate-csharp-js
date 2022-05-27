using System;
using System.Text.RegularExpressions;
using System.Collections.Generic;

namespace csharp
{
    class Program
    {
        static void Main(string[] args)
        {
            string regexText = Regex.Replace(getText(), "[^A-Za-z ]", "");
            Console.WriteLine(regexText);
            List<string> words = new List<string>();
            words.AddRange(regexText.Split(" "));

            Dictionary<string, int> freqCounts = new Dictionary<string, int>();

            foreach (string word in words)
            {
                if (word.Trim() == "")
                {
                    continue;
                }

                if (freqCounts.ContainsKey(word))
                {
                    freqCounts[word] += 1;
                }
                else {
                    freqCounts.Add(word, 1);
                }
            }

            foreach (KeyValuePair<string, int> kv in freqCounts)
            {
                Console.WriteLine($"{kv.Key}: {kv.Value}");
            }

        }

        static string getText()
        {
            return @"As an unperfect actor on the stage
  Who with his fear is put beside his part,
  Or some fierce thing replete with too much rage,
  Whose strength’s abundance weakens his own heart;
  So I for fear of trust forget to say
  The perfect ceremony of love’s rite,
  And in mine own love’s strength seem to decay,
  O’ercharged with burden of mine own love’s might.
  O, let my books be then the eloquence
  And dumb presagers of my speaking breast,
  Who plead for love and look for recompense
  More than that tongue that more hath more expressed.
  O, learn to read what silent love hath writ.
  To hear with eyes belongs to love’s fine wit.";
        }
    }
}
