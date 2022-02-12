import { _id } from "./helpers";
import { Calc } from "./calc";
let calc = new Calc(_id<HTMLDivElement>('scr')!);
const _theme = _id<HTMLDivElement>('theme');
const _switch = _id<HTMLDivElement>('theme-switch');
let theme = 0;
const switchThemeBtn = ()=>{
  _switch?.classList.remove('theme1','theme2','theme3')
  _switch?.classList.add(`theme${theme+1}`)
}
const switchTheme = ()=>{
  document.body.classList.remove('theme-1','theme-2','theme-3')
  document.body.classList.add(`theme-${theme+1}`)
}
_theme?.addEventListener('click',function () {
  theme += 1;
  theme %= 3;
  switchThemeBtn()
  switchTheme()
})
const _nums = [0,1,2,3,4,5,6,7,8,9]
const getKey = (v:string|number)=>_id<HTMLButtonElement>(`key${v}`)
const nKeys = _nums.map(getKey)
const [del,add,sub,mul,div,reset,equal,comma] =
['Del','Add','Sub','Mul','Div','Reset','Equal','Comma'].map(getKey)
nKeys.forEach((el,i)=>{
    el?.addEventListener('click',_ => calc.digit(i))
})
del?.addEventListener('click',_ => calc.del())
reset?.addEventListener('click',_ => calc.reset())
comma?.addEventListener('click',_ => calc.comma())
add?.addEventListener('click',_ => calc.add())
div?.addEventListener('click',_ => calc.div())
mul?.addEventListener('click',_ => calc.mul())
sub?.addEventListener('click',_ => calc.sub())
equal?.addEventListener('click',_ => calc.equal())
window.addEventListener('keydown',function (ev){
  let n = parseInt(ev.key)
  if(!isNaN(n))
    calc.digit(n)
  else
    switch (ev.key) {
      case '.':
        calc.comma()
        break;
      case '-':
        calc.sub()
        break;
      case '+':
        calc.add()
        break;
      case '/':
        calc.div()
        break;
      case '=':
      case 'Enter':
        calc.equal()
        break;
      case 'Backspace':
        calc.del()
        break;
      case 'c':
        calc.reset()
        break;
    }
})