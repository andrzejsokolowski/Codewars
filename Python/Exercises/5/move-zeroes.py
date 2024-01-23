#https://www.codewars.com/kata/52597aa56021e91c93000cb0
#Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
def move_zeros(lst):
    filtered = [x for x in lst if x != 0]
    zeroes = len(lst)-len(filtered)
    for x in range(zeroes):
        filtered.append(0)
    return filtered

