import {PassPhrase} from './PassPhrase';

describe("PassPhrase tests", ()=> {
  test("An empty phrase should have 0 length", () => {
    // 1. set up the state
    let myPhrase: PassPhrase = new PassPhrase("");

    // 2. invoke action
    let actual: number = myPhrase.length();

    // 3. assert expected outcome
    expect(actual).toBe(0);
  });
  
  test("Phrase with 12 characters has correct length", () => {
    let myPhrase: PassPhrase = new PassPhrase("CSCI 630 SDM");
    let actual: number = myPhrase.length();
    expect(actual).toBe(12);
  });
  
  test("is_caps_locked returns true for a phrase with opposite case alphabetic characters", () => {
    // 1. set up the state
    let myPhrase: PassPhrase = new PassPhrase("PaSsPhRaSe");
    let attempt: string = "pAsSpHrAsE";
  
    // 2. invoke action
    let actual: boolean = myPhrase.is_caps_locked(attempt);

    // 3. assert expected outcome
    expect(actual).toBe(true);
  });
  
})
