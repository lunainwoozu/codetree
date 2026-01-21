n = int(input())

noc = 'N'

for i in range(2, n):
    if n % i == 0:
        noc = 'C'
        break

print(noc)