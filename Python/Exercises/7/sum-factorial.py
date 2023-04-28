def sum_factorial(lst):
    result = 1
    for x in lst:
        loopResult = 1
        while x > 0:
            loopResult = loopResult * x
            x-=1
        result += loopResult
    return result -1
print(sum_factorial([4, 6]))