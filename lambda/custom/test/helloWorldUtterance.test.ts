import * as Mocha from 'mocha';
import { assert } from 'chai';
import { HelloWorldUtterance as Utterance } from '../src/utterances/helloWorldUtterance';

describe('HelloWorldUtterance Class', () => {
  let target: Utterance;

  before(() => {
    target = new Utterance();
  });

  describe('respond()', () => {
    it('発話テキストが一致すること', () => {
      const result = target.respond();

      assert.equal(result.speech, 'Hello World!');
    })
  });
});
