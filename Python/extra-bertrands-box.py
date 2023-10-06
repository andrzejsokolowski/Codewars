# THERE are 3 boxes. Each box contains 2 balls. One box contains 2 gold balls
# another box contains 2 silver balls, and the final box contains one gold ball and one silver ball.
# You pick a box at random. You put your hand in and take a ball from that box at random.
# It's a gold ball (You did NOT pick box Silver-Silver, effectively removing box S-S from the equation)
# What's the probability that the next ball you take from the same box will also be gold?
# Note: You cannot see into any of the boxes

# Author's note:
# This question is different from the standard bertrand's box paradox - It posits that a gold ball WAS ALREADY selected.
# Using this, we can simplify the probability - you either chose the g-g box, or the g-s box.
# Since the experiment STARTS from this process, it is a pure 50/50 - you either chose box 1, or box 2. 
# No additional math is required
# This, of course, means that you did not pick box 3, so we may remove it from the equation
import random
boxes = [['G', 'G'], ['G', 'S']]
secondBallWasGold = 0
secondBallWasSilver = 0
counter = 0
samples = 1000000

for i in range(samples):
    box = random.choice(boxes)
    # this simplifies the process
    # we can take either gold ball from box 1, and from box G-S we know that the golden one was picked (box[0])
    ball = box[0]
    if box[1] == "G":
        secondBallWasGold += 1
        counter += 1
    else:
        secondBallWasSilver += 1
        counter += 1


print(f"The second ball was gold {secondBallWasGold} times")
print(f"The second ball was gold {secondBallWasSilver} times")
print(f"The total amount of iterations was: {counter}")
