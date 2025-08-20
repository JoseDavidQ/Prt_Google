function find_sums(numbers: number[], target: number): number[][] {

        function find_comb(start: number, combinacion: number[], target: number){

        // encontramos la solución   
        if (target === 0) {  
            result.push([...combinacion])
            return
        }

        // No encontramos la solución
        if ( target < 0 || start >= numbers.length){
            return
        }

        for (let i = start; i < numbers.length; i++){
           
            if (i > start && numbers[i] === numbers[i - 1]) {
                continue
            }

            const currentNumber = numbers[i];
            if (currentNumber === undefined) continue;

            if (currentNumber > target) {
                continue;
            }

            combinacion.push(currentNumber);
            find_comb(i + 1, combinacion, target - currentNumber);
            combinacion.pop();
        }
        }
    numbers.sort()
    const result: number[][] = []
    find_comb(0,[],target)
    return result
}
console.log(find_sums([10,1,2,7,6,1,5,5,5,7,6,3,5,2,4,4,6,3], 8))

