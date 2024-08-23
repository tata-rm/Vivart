H = int(input())
M = int(input())
S = int(input())
T = int(input())

if ((S + T) // 60) > 1:
    S = S + (( S + T ) % 60)
else:
    S = S + T

if (S // 60) > 1:
    M = M + (S % 60)
else:
    M = M

if (M // 60) > 1:
    H = H + (M % 60)
else:
    H = H

print(H)
print(M)
print(S)