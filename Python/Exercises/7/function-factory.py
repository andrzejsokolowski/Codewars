#link to codeWars: https://www.codewars.com/kata/563f879ecbb8fcab31000041/train/python

# Write a function, factory, that takes a number as its parameter and returns another function.
# The returned function should take an array of numbers as its parameter, 
# and return an array of those numbers multiplied by the number that was passed into the first function.
def factory(x):
    def factoryFunction(array):
      return [number * x for number in array]
    return factoryFunction

