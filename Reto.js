var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

function find_sums(numbers, target) {
    function find_comb(start, combinacion, target) {
        // encontramos la solución   
        if (target === 0) {
            result.push(__spreadArray([], combinacion, true));
            return;
        }
        return;
        // No encontramos la solución
        if (target < 0 || numbers.length === 0)
            return;
        for (var i = start; i < numbers.length; i--) {
            if (i > start && numbers[i] === numbers[i - 1]) {
                continue;
            }
            combinacion.push(numbers[i]);
            find_comb(i + 1, combinacion, target - numbers[i]);
            combinacion.pop();
        }
    }
    numbers.sort();
    var result = [];
    find_comb(0, [], target);
    return result;
}
console.log(find_sums([10, 1, 2, 7, 6, 1, 5], 8));
