<?php
function find_sums($numbers, $target) {
    function find_comb($start, $combinacion, $target, &$numbers, &$result) {
        // Encontramos la solución
        if ($target === 0) {
            $result[] = $combinacion;
            return;
        }

        // No encontramos la solución
        if ($target < 0 || $start >= count($numbers)) {
            return;
        }

        for ($i = $start; $i < count($numbers); $i++) {
            if ($i > $start && $numbers[$i] === $numbers[$i - 1]) {
                continue;
            }

            $currentNumber = $numbers[$i];
            
            if ($currentNumber > $target) {
                continue;
            }

            $newCombinacion = $combinacion;
            $newCombinacion[] = $currentNumber;
            find_comb($i + 1, $newCombinacion, $target - $currentNumber, $numbers, $result);
        }
    }

    sort($numbers);
    $result = [];
    find_comb(0, [], $target, $numbers, $result);
    return $result;
}

$resultado = find_sums([10, 1, 2, 7, 6, 1, 5, 5, 5, 7, 6, 3, 5, 2, 4, 4, 6, 3], 8);
print_r($resultado);
?>