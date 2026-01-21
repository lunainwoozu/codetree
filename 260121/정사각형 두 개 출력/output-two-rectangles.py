n = int(input())

for i in range(n * 2 + 1):
    if i == n:
        print(" ")
    else:
        for _ in range(n):
            print("*", end= "")
        print()