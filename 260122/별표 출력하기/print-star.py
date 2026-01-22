n = int(input())
cnt = 0

for i in range(n * 2):
    if i < n:
        cnt += 1
    else:
        cnt -= 1
    for _ in range(cnt):
        print("*", end=" ")
    print()

    