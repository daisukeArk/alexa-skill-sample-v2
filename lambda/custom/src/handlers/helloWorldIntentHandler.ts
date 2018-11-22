import * as Alexa from 'ask-sdk-core';
import { createUtterance } from '../factories/utteranceFactory';
import { HelloWorldUtterance as Utterance } from '../utterances/helloWorldUtterance';

export const HelloWorldIntentHandler: Alexa.RequestHandler = {
  canHandle(handlerInput: Alexa.HandlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
  },
  handle(handlerInput: Alexa.HandlerInput) {
    const uttranceResult = createUtterance(Utterance).respond();

    return handlerInput.responseBuilder
      .speak(uttranceResult.speech)
      .withSimpleCard(
        (uttranceResult.cardTitle as string),
        (uttranceResult.cardContent as string)
      )
      .getResponse();
  },
};
