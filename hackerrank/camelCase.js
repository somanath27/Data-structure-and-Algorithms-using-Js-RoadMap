function processData(input) {
    let splittedArray=input.split(';')
    let operation=splittedArray[0].charAt(0);
    let type=splittedArray[1].charAt(0);
    let words=splittedArray[2]
    let wordsArr=words.split('')
    let output="";
    // First Condition
    if(operation=='S')
    {
        for (let char in wordsArr)
        {
          if(wordsArr[char]===wordsArr[char].toUpperCase() && /[A-Za-z]/.test(wordsArr[char]))
          {
              output+= " "+ wordsArr[char].toLowerCase()
          }
          else if(wordsArr[char] != '(' && wordsArr[char] != ')')
          {
              output+=wordsArr[char]
          }
        }
    }
    else if(operation=='C')
    {
         for (let char in wordsArr)
        {
            let currentChar=wordsArr[char]
            if(currentChar!= " ")
            {
                if(char>0 && wordsArr[char-1]==" ")
                {
                currentChar=currentChar.toUpperCase()
                }
                output+=currentChar
            }
        }
        if(type=='M')
        {
            output+="()"
        }
         else if (type === 'C') {
    output = output.charAt(0).toUpperCase() + output.slice(1);
    }
    
    }
    return output.trim()
    } 
    console.log(processData('S;V;iPad'))