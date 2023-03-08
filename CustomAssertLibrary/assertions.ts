export class UnitTests {
  constructor() {}

  static strictEqual(input: any, expect: any) {
    console.log(input + ' is the input');
    console.log(expect + ' is the assertion');
    if (input !== expect) {
      console.log(`🟥 ${input} input is different than ${expect} actual`);
      return false;
    } else {
      console.log('🟩 Success');
      return true;
    }
  }
}
