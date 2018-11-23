import * as Mocha from 'mocha';
import { assert } from 'chai';
import { HelloWorldUtterance as Utterance } from '../src/utterances/helloWorldUtterance';

describe('HelloWorldUtterance Class', () => {
  let target: Utterance;

  before(() => {
    target = new Utterance();
  });

  describe('respond() GreetingTypes Morning', () => {
    it('発話テキストが一致すること', () => {
      const result = target.respond(6);

      assert.equal(result.speech, 'Good morning!');
    })
  });

  describe('respond() GreetingTypes Afternoon', () => {
    it('発話テキストが一致すること', () => {
      const result = target.respond(12);

      assert.equal(result.speech, 'Good afternoon!');
    })
  });

  describe('respond() GreetingTypes Evening', () => {
    it('発話テキストが一致すること', () => {
      const result = target.respond(18);

      assert.equal(result.speech, 'Good evening!');
    })
  });
});
