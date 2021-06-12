export const insertionSort = async(
    arr : Array<number>,
    setI : (n:number) => void,
    setJ : (n:number) => void,
    SetKey:(n:number)=>void,
    stepSpeed :number = 1000
)=>{
    let key : any;
    let j : any
    for(let i = 1; i<arr.length;i++){
         key  = arr[i];
         j  = i+1;
        while(j >=0 && arr[j] > key){
            await new Promise<void>((res) =>
            setTimeout(() => {
              res()
            }, stepSpeed)
          )
          setI(i)
          setJ(j)
          SetKey(key)
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}