# How does JS working behind the scene ?

## JavaScript Execution Context : <br/>

> It is refers to the process of executing code in JS.
>
> **1.Global Execution Context**
> This is kept in **this** keyword. The value of this in browser is **window** object.
>
> **2. Function Execution Context** <br> 
**3. Eval Execution Context** <br>

## Mainly, JS execute code in two phase , they are :

**1.Memory creation phase** <br>
**2.Execution phase**

Example:

```js
let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(5, 6);
```

## Execuion process

**1. Global Execution** -> this <br/>
**2. Memory phase:** <br/>
> This is a first cycle 
>
   ```js
   val1 = undefined;
   val2 = undefined;
   addNum = defination;
   result1 = undefined;
   result2 = undefine
   ```
**3.Execution phase:**
 ```js
   val1 = 10;
   val2 = 5;
   result1 = addNum(); 
   ```
  > The intresting things happened here : the new two phase is happened here memory and exection phase , 
  **new variable environment variable + execution**