def solution(n):
    arrayOfRomans = []

    stringifiedN = str(n)
    arrayN = list(stringifiedN)
    
    lengthOfArray = len(arrayN)
    letters = ['I', 'V', 'X', 'L', 'C', 'D', 'M']

    for index in range(lengthOfArray):
        doubleIndex = index*2
        numberOnIndex = int(arrayN[-index -1])
        if numberOnIndex <= 3: 
            for x in range(numberOnIndex):
                  arrayOfRomans.append(letters[doubleIndex])

        if numberOnIndex == 4:
             arrayOfRomans.append(letters[doubleIndex+1])
             arrayOfRomans.append(letters[doubleIndex])
             
        if numberOnIndex == 5:
            arrayOfRomans.append(letters[doubleIndex+1])
             
        if 6 <= numberOnIndex < 9:
            for x in range(numberOnIndex - 5):
                  arrayOfRomans.append(letters[doubleIndex])
            arrayOfRomans.append(letters[doubleIndex+1])

        if  numberOnIndex == 9:
                arrayOfRomans.append(letters[doubleIndex+2])
                arrayOfRomans.append(letters[doubleIndex])



           
    arrayOfRomans.reverse()
    finalString = ''.join(arrayOfRomans)
    return finalString
#C M L X X X I V
print(solution(1666))
