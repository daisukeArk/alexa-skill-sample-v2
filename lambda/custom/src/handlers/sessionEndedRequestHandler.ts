import * as Alexa from 'ask-sdk-core';

export const SessionEndedRequestHandler: Alexa.RequestHandler = {
  canHandle(handlerInput: Alexa.HandlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput: Alexa.HandlerInput) {
    if (handlerInput.requestEnvelope.request.type === 'SessionEndedRequest') {
      console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
    }

    return handlerInput.responseBuilder.getResponse();
  },
};
