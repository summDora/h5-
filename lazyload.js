
// 数据转换
// {"a": {"n1": 1, "n2": 3 },  "b": {"n1": 2, "n2": 4},  "c": { "n1": 3,"n2": 5}}
// {"n1": {"a": 1, "b": 2, "c": 3 }, "n2": { "a": 3, "b": 4, "c": 5}}


const str = { "a": { "n1": 1, "n2": 3 }, "b": { "n1": 2, "n2": 4 }, "c": { "n1": 3, "n2": 5 } }

function fn(params) {
    let newObj = {}
    Object.keys(params).map(key => {
        // A B C
        Object.keys(params[key]).map(secKey => {
            // N1 N2
            if (!newObj[secKey]) {
                newObj[secKey] = {}
            }
            newObj[secKey][key] = params[key][secKey]
        })
    })
    console.log(newObj)
}

fn(str)

