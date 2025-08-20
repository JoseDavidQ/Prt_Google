def find_sums(numbers: list, target: int) -> list:
    def find_comb(start: int, combinacion: list, target: int):
        # encontramos la solución
        if target == 0:
            result.append(combinacion.copy())
            return
        
        # No encontramos la solución
        if target < 0 or start >= len(numbers):
            return
        
        for i in range(start, len(numbers)):
            if i > start and numbers[i] == numbers[i - 1]:
                continue
            
            current_number = numbers[i]
            if current_number > target:
                continue
            
            combinacion.append(current_number)
            find_comb(i + 1, combinacion, target - current_number)
            combinacion.pop()
    
    numbers.sort()
    result = []
    find_comb(0, [], target)
    return result


print(find_sums([10, 1, 2, 7, 6, 1, 5, 5, 5, 7, 6, 3, 5, 2, 4, 4, 6, 3], 8))