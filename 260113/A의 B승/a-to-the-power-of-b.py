a, b = map(int, input().split())
prod = 1

for _ in range(b):
    if b <= 0:
        break
    prod = prod * a

print(prod)