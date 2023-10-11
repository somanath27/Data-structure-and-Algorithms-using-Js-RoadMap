const obj={
    name:"somanath",
    age:25,
    "key-three": true,
    sayMyName:function()
    {
        console.log(this.name)
    }
}
obj.designation="Fullstack Developer"
delete obj.designation
console.log(obj)

// Object.keys()  .values()  .entries()
