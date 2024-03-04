const word='RESPECT';
for(const w of word)
{
    console.log(w);
}

const user={
    name:'Mithun Das',
    id:0001,
    email:'mithun.here01@gmail.com',
    ph:8768138086,
    introduction:function()
    {
        console.log(`id no: ${this.id} candidate name is ${this.name} who's mail id is ${this.email} and ph no: ${this.ph}`);
    }
};
user.introduction();

const obj={
    val:21,
    func:function() 
    {
        return this.val;
    },
};
console.log(obj.func());
