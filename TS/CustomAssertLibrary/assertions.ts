export class UnitTests {
  constructor() {}

  static strictEqual(input: any, expect: any) {
    if (input !== expect) {
      console.log(`🟥 input: ${input} is different than expected: ${expect}`);
      return false;
    } else {
      console.log('🟩 Success');
      return true;
    }
  }
}
