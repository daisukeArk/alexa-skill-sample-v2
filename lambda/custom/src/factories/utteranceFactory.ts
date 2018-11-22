import { UtteranceBase } from '../utterances/utteranceBase';

export function createUtterance<TUtterance extends UtteranceBase>(
  utterance: new () => TUtterance
): TUtterance {
  return new utterance();
}
