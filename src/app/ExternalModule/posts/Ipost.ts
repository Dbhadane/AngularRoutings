export class IPosts {
    userId: number;
    id: number;
    title: string;
    body: string;
    constructor(uid:number,i1:number,t:string,b:string)
    {
        this.userId=uid;
        this.id=i1;
        this.title=t;
        this.body=b;
    }
}