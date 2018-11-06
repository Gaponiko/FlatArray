function flat(arr) {
    function pushing(sourceArr, newArr)
    {
        sourceArr.forEach(function (element) {
            if(Array.isArray(element))
            {
                pushing(element, newArr);
            }
            else
            {
                newArr.push(element);
            }
        })

        return newArr;
    }

    if(Array.isArray(arr))
    {
        var newArr = pushing(arr, []);

        arr.forEach(function () {
            arr.pop();
        })

        newArr.forEach(function (element) {
            arr.push(element);
        })
    }
}

var array = [0, 1, [2, 3, [4, 5, [6, 7, [8, 9,[0]]]]]];
flat(array);
console.log(array);
