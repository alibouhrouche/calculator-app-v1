enum OP {
    nop,
    add,
    sub,
    mul,
    div,
}
const ops:{
    [k in OP]:((n:number,m:number)=>number)
} = [
    (_n,m)=>m,
    (n,m)=>n+m,
    (n,m)=>n-m,
    (n,m)=>n*m,
    (n,m)=>n/m
]
export class Calc {
    #out:HTMLDivElement
    #int: number = 0
    #frac: number = 0
    #hasFrac: boolean = false
    #isFrac: boolean = false
    #edited: boolean = true
    #res = 0
    #lastOP:OP = OP.nop
    #formatter = new Intl.NumberFormat()
    constructor(out: HTMLDivElement) {
        this.#out = out
    }
    #toSafe(n: number,m :number){
        return ((n > Number.MAX_SAFE_INTEGER)||(n < Number.MIN_SAFE_INTEGER))?m:n
    }
    #addBuffer(n: number){
        if(this.#hasFrac){
            this.#frac = this.#frac*10 + n
            this.#isFrac = true
        }else{
            this.#int = this.#toSafe(this.#int*10 + n,this.#int)
        }
        return this.#buffer()
    }
    #delBuffer(){
        if(this.#hasFrac){
            if(this.#frac == 0) this.#hasFrac = false
            this.#frac = Math.floor(this.#frac/10)
            if(this.#frac == 0)  this.#isFrac = false
        }else{
            this.#int = this.#toSafe(Math.floor(this.#int/10),this.#int)
        }
        return this.#buffer()
    }
    #clearBuffer(){
        this.#hasFrac = false
        this.#isFrac = false
        this.#frac = 0
        this.#int = 0
    }
    #buffer(){
        return `${this.#format(this.#int)}${(this.#hasFrac?`.${this.#isFrac?this.#frac:''}`:'')}`
    }
    #format(str: number){
        return this.#formatter.format(str)
    }
    #value(){
        return parseFloat(`${this.#int}${(this.#hasFrac?`.${this.#frac}`:'')}`)
    }
    #op(op: OP){
        if(this.#edited){
            this.#edited = false
            this.#res = ops[this.#lastOP](this.#res,this.#value())
            this.#clearBuffer()
            let int = Math.floor(this.#res)
            let frac = parseInt((this.#res.toString()).split('.')[1] ?? '')
            let isFrac = frac > 0
            this.#out.textContent = `${this.#format(int)}${isFrac?`.${frac}`:''}`
        }
        this.#lastOP = op
    }
    digit(n: number){
        this.#edited = true
        this.#out.textContent = this.#addBuffer(n)
    }
    del(){
        this.#out.textContent = this.#delBuffer()
    }
    comma(){
        this.#hasFrac = true
        this.#out.textContent = this.#buffer()
    }
    add(){
        this.#op(OP.add)
    }
    div(){
        this.#op(OP.div)
    }
    mul(){
        this.#op(OP.mul)
    }
    sub(){
        this.#op(OP.sub)
    }
    equal(){
        this.#op(OP.nop)
    }
    reset(){
        this.#op(OP.nop)
        this.#clearBuffer()
        this.#out.textContent = '0'
    }
}
