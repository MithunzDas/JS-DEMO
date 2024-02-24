function User(name,age,isAdmin){
    this.name=name;
    this.age=age;
    this.isAdmin=isAdmin;
    this.canDrive=()=>(this.age>=18 ? 'User can drive' : 'User canot drive');
    this.accessAccount=()=>(isAdmin?'You have access...' : 'Access denied...');
};
const Mithun=new User('Mithun Das',27,true);
const Mohona=new User('Mohona Roy',22,false);
console.log(Mithun.canDrive());
console.log(Mohona);
console.log(Mohona.accessAccount());