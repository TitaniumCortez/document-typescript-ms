function superHero(target:any, key:any, descriptor:any){
target.isSuperHero = true;
//target.power = 'fliew';
console.log(target);
}

function log(target:any, name :any, descriptor:any) {
    const original = descriptor.value;
    if (typeof original === 'function') {
      descriptor.value = function(...args:any) {
        console.log(`Arguments: ${args}`);
        try {
          const result = original.apply(this, args);
          console.log(`Result: ${result}`);
          return result;
        } catch (e) {
          console.log(`Error: ${e}`);
          throw e;
        }
      }
    }
    return descriptor;
  }


class MysuperHero {


    static decoret(){}

    @log
    static sum(a:any, b:any) {
        return a + b;
    }
}

console.log(MysuperHero.sum(4,5));