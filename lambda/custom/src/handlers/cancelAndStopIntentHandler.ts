import * as Alexa from 'ask-sdk-core';
import { createUtterance } from '../factories/utteranceFactory';
import { CancelAndStopUtterance as Utterance } from '../utterances/cancelAndStopUtterance';

export const CancelAndStopIntentHandler: Alexa.RequestHandler = {
  canHandle(handlerInput: Alexa.HandlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
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
