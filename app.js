var platesBetweenCandles = function(s, queries) {
    
    let output = []
    let candles = []
    for(let i=0;i < s.length; i++){
        if (s[i] === "|"){
            candles.push(i)
        }
    }

    if (candles.length === 0){
        output.push(0)
        return output
    }

   for (let [start, end] of queries){
        let indexStart = 0
        let indexEnd = 0
        let ban = true

        for(let i=candles.length-1; i >= 0 && ban; i--){
            if(candles[i] <= end){
                ban = false
                end = candles[i]
                indexEnd = i
            }
        }

        ban = true
        for(let i=0; i < candles.length && ban; i++){
            if(candles[i] >= start){
                start = candles[i]
                ban = false
                indexStart = i
            }
        }

        if(start >= end) {
             output.push(0)
        } else {
            let out = end - start - (indexEnd - indexStart)
            output.push(out)
        }
   }
   return output
   
};