export class User {
    
    /**
     * Password
     */
    public password: string;
    
    /**
     * Username
     */
    public username: string;
   
    /**
     * Id
     */
    public _id: string;

    /**
     * I don't know =)
     */
    // TODO delete from backend and here
    public _v: number;

    public constructor(username: string, password: string, _id: string, _v: number) {
            this.username = username;
            this.password = password;
            this._id = _id;
            this._v = _v;
    }
}