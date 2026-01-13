a, b = map(int, input().split())
prod = a

for _ in range(1, b):
    prod = prod * a

print(prod)