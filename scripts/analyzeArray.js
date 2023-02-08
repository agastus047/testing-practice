function analyzeArray(arr) {
    let average,min,max,length;
    let sum=0;
    length = arr.length;
    min=max=arr[0];
    for(let element of arr) {
        if(element<min)
            min=element;
        if(element>max)
            max=element;
        sum+=element;
    }
    average=sum/length; 

    return {average,min,max,length};
}

export default analyzeArray;