def solution(number):
    i = 0
    solution = 0
    while i < number:
        if i % 3 == 0 or i % 5 == 0:
            solution = solution + i
            i = i + 1
            continue
        i = i + 1
    return solution

print(solution(10))