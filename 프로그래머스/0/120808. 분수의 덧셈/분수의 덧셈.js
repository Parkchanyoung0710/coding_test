function solution(numer1, denom1, numer2, denom2) {
  const denom = denom1 * denom2;
  const numer = numer1 * denom2 + numer2 * denom1

  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const gcdValue = gcd(numer, denom);

  const answer = [numer / gcdValue, denom / gcdValue];

  return answer;
}