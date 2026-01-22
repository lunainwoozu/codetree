n = int(input())
cnt = 0

for i in range(1, n * 2):
    for _ in range(cnt+1):
        print("*", end="")
    print("\n")

    if i < n:
        cnt += 1
    else:
        cnt -= 1