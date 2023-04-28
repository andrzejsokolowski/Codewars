# this is not fast enough!
def digit_sum(n):
    result = 0
    for i in iter(str(n)):
        result+=int(i)
    return result
        
        
print(digit_sum(2070))