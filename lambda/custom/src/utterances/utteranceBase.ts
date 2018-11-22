import { IUtteranceResultBase } from '../entities/utteranceResultBase';

export abstract class UtteranceBase {
  constructor() {
  }

  public abstract respond(...args: any[]): IUtteranceResultBase;
}
