def solution(slice, n):
    answer = 0
    for _ in range(n):
        if slice * answer < n:
            answer += 1
        else:
            break
    return answer