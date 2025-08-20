package main

import (
	"fmt"
	"sort"
)

func findSums(numbers []int, target int) [][]int {
    sort.Ints(numbers)
    
    result := [][]int{}
    
    var findComb func(start int, combination []int, target int)
    findComb = func(start int, combination []int, target int) {
        // Encontramos la solución
        if target == 0 {
            // Crear una copia de la combinación
            temp := make([]int, len(combination))
            copy(temp, combination)
            result = append(result, temp)
            return
        }
        
        // No encontramos la solución
        if target < 0 || start >= len(numbers) {
            return
        }
        
        for i := start; i < len(numbers); i++ {
            if i > start && numbers[i] == numbers[i-1] {
                continue
            }
            
            currentNumber := numbers[i]
            if currentNumber > target {
                continue
            }
            
            // Agregar el número a la combinación actual
            newCombination := append(combination, currentNumber)
            findComb(i+1, newCombination, target-currentNumber)
        }
    }
    
    findComb(0, []int{}, target)
    return result
}

func main() {
    numbers := []int{10, 1, 2, 7, 6, 1, 5, 5, 5, 7, 6, 3, 5, 2, 4, 4, 6, 3}
    target := 8
    result := findSums(numbers, target)
    
    fmt.Println("Resultados:")
    for _, combination := range result {
        fmt.Println(combination)
    }
}