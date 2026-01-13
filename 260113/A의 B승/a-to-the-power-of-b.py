a, b = map(int, input().split())
prod = a

for _ in range(b - 1):
    if b <= 0:
        break
    prod = prod * a

print(prod)