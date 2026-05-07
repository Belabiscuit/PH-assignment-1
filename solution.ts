//Problem 1
const filterEvenNumbers=(sifat:number[]):number[]=>{
    const rslt:number[]=[];
    for(let i=0;i<sifat.length;i++){
        if(sifat[i]%2==0){
            rslt.push(sifat[i])
        }
    }
    return rslt
}


//Problem 2
const reverseString=(sifat:string):string =>{
    let str:string ="";
    for(let i=sifat.length-1;i>=0;i--){
        str+=sifat[i]
    }
 return str;
}


//Problem 3
type StringOrNumber=string|number;
const checkType=(sifat:StringOrNumber):StringOrNumber=>{
     if(typeof sifat === "string"){
        return "String"
     }
     else{
        return "Number"
     }
};


//Problem 4

const getProperty=<X>(obj:X,key:keyof X)=>{
   return obj[key]
}


///problem 5
interface Book{
 title:string,
 author:string,
 publishedYear:number,
 
}
function toggleReadStatus(book:Book, isRead?:boolean){
    return {...book,isRead:!isRead}

}

//problem 6

class Person{
 name:string
 age:number
 constructor(name:string,age:number){
    this.name=name
    this.age=age
 }
}

class Student extends Person{
    grade:string
    constructor(name:string,age:number,grade:string){
        super(name,age)
        this.grade=grade
    }
    getDetails(){
        return(`"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}"`);
    }
}

//problem 7

const getIntersection=(arr1:number[],arr2:number[]):number[]=>{
    let sifat:number[]=[]
    for(let i=0;i<arr1.length;i++){
        for(let k=0;k<arr2.length;k++){
            if(arr1[i]===arr2[k]){
              sifat.push(arr2[k])
            }
        }
    }
    return sifat
}






