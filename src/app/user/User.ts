export class User{

    _id: number;
    _name: string;
    _username: string;
    _password: string;
    
    constructor(id: number=0, name: string="CM", username: string="CM", password: string="CM"){
         this._id = id;  
         this._name = name; 
         this._username = username;
         this._password = password;

    }

    get name(): string{
        return this._name;
    }

    get id(): number{
        return this._id;
    }

    get username(): string{
        return this._username;
    }

    get password(): string{
        return this._password;
    }

    set name(value){
        this._name = value;
    }

    set id(value){
        this._id = value;
    }

    set username(value){
        this._username = value;
    }

    set password(value){
        this._password = value;
    }

    
}