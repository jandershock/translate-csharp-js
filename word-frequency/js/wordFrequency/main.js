function main() {
  const text = getText().replace(/[^a-zA-Z ]/g, "");
  console.log(text);
  const words = text.split(" ");
  const freqCounts = {};

  for (const word of words) {
    if (word.trim() === "") {
      continue;
    }

    if (freqCounts.hasOwnProperty(word)) {
      freqCounts[word] += 1;
    } else {
      freqCounts[word] = 1;
    }
  }

  // Printing a C# Dictionary might not be this easy.
  console.log(freqCounts);
}

function getText() {
  return `
  As an unperfect actor on the stage
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
  To hear with eyes belongs to love’s fine wit.
  `;
}

main();