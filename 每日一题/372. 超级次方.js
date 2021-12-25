const MOD = 1337;

const superPow = function(a, b) {
  a %= MOD;
  if(a == 1) {
    return 1;
  }
  if(!b.length) {
    return 1;
  }
  const item = b.pop();
  const v1 = pow(a, item);
  const v2 = pow(superPow(a, b), 10);

  return (v1 * v2) % MOD;
} 

const pow = function(x, n) {
  if(n === 0) {
    return 1;
  } 

  let res = pow(x, Math.floor(n / 2));

  return (n % 2 === 0 ? res * res : res * res * x) % MOD;
}

superPow(a, b);