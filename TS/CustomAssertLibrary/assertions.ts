export class UnitTests {
  constructor() {}

  static strictEqual(input: any, expect: any) {
    if (input !== expect) {
      if (typeof input === 'object') {
        console.log(`🟥 actual: ${JSON.stringify(input)} is different than expected: ${expect}`);
        return false;
      }
      console.log(`🟥 actual: ${input} is different than expected: ${expect}`);
      return false;
    } else {
      console.log('🟩 Success');
      return true;
    }
  }
}
