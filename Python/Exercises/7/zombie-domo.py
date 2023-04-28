def zombie_shootout(zombies, distance, ammo):
    killed = 0
    distance = distance * 2 #times two to decrement by 1
    if zombies == 0:
         return "You shot all " + str(killed) + " zombies."
    while distance > 0 and zombies > 0:
        if ammo >0:
            zombies -=1
            killed +=1
            ammo-=1
        else: 
            return "You shot " + str(killed) +" zombies before being eaten: ran out of ammo."
        if zombies == 0:
            return "You shot all " + str(killed) + " zombies."

        distance-=1
    else: 
        return "You shot " + str(killed) + " zombies before being eaten: overwhelmed."
        
        
        


print(zombie_shootout(50, 10, 8))