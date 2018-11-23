'use strict';

var Alexa = require('ask-sdk-core');

function createUtterance(utterance) {
    return new utterance();
}

class UtteranceBase {
    constructor() {
    }
}

class LaunchRequestUtterance extends UtteranceBase {
    constructor() {
        super();
    }
    respond() {
        const speechText = 'Welcome to the Alexa Skills Kit, you can say hello!';
        return {
            speech: speechText,
            repromptSpeech: speechText,
            cardTitle: 'Hello World',
            cardContent: speechText
        };
    }
}

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const uttranceResult = createUtterance(LaunchRequestUtterance).respond();
        return handlerInput.responseBuilder
            .speak(uttranceResult.speech)
            .reprompt(uttranceResult.repromptSpeech)
            .withSimpleCard(uttranceResult.cardTitle, uttranceResult.cardContent)
            .getResponse();
    },
};

var GreetingTypes;
(function (GreetingTypes) {
    GreetingTypes[GreetingTypes["Morning"] = 0] = "Morning";
    GreetingTypes[GreetingTypes["Afternoon"] = 1] = "Afternoon";
    GreetingTypes[GreetingTypes["Evening"] = 2] = "Evening";
})(GreetingTypes || (GreetingTypes = {}));
function getGreetingType(hours) {
    let retValue;
    if (hours >= 6 && hours < 12) {
        retValue = GreetingTypes.Morning;
    }
    else if (hours >= 12 && hours < 17) {
        retValue = GreetingTypes.Afternoon;
    }
    else {
        retValue = GreetingTypes.Evening;
    }
    return retValue;
}

class HelloWorldUtterance extends UtteranceBase {
    constructor() {
        super();
    }
    respond(hours) {
        const type = getGreetingType(hours);
        let speechText;
        switch (type) {
            case GreetingTypes.Morning:
                speechText = 'Good morning!';
                break;
            case GreetingTypes.Afternoon:
                speechText = 'Good afternoon!';
                break;
            case GreetingTypes.Evening:
                speechText = 'Good evening!';
                break;
            default:
                speechText = 'Hello World!';
                break;
        }
        return {
            speech: speechText,
            cardTitle: 'Hello World',
            cardContent: speechText
        };
    }
}

const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const currentHours = (new Date()).getHours();
        const uttranceResult = createUtterance(HelloWorldUtterance).respond(currentHours);
        return handlerInput.responseBuilder
            .speak(uttranceResult.speech)
            .withSimpleCard(uttranceResult.cardTitle, uttranceResult.cardContent)
            .getResponse();
    },
};

class HelpUtterance extends UtteranceBase {
    constructor() {
        super();
    }
    respond() {
        const speechText = 'You can say hello to me!';
        return {
            speech: speechText,
            repromptSpeech: speechText,
            cardTitle: 'Hello World',
            cardContent: speechText
        };
    }
}

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const uttranceResult = createUtterance(HelpUtterance).respond();
        return handlerInput.responseBuilder
            .speak(uttranceResult.speech)
            .reprompt(uttranceResult.repromptSpeech)
            .withSimpleCard(uttranceResult.cardTitle, uttranceResult.cardContent)
            .getResponse();
    },
};

class CancelAndStopUtterance extends UtteranceBase {
    constructor() {
        super();
    }
    respond() {
        const speechText = 'Goodbye!';
        return {
            speech: speechText,
            cardTitle: 'Hello World',
            cardContent: speechText
        };
    }
}

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const uttranceResult = createUtterance(CancelAndStopUtterance).respond();
        return handlerInput.responseBuilder
            .speak(uttranceResult.speech)
            .withSimpleCard(uttranceResult.cardTitle, uttranceResult.cardContent)
            .getResponse();
    },
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        if (handlerInput.requestEnvelope.request.type === 'SessionEndedRequest') {
            console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);
        }
        return handlerInput.responseBuilder.getResponse();
    },
};

class ErrorUtterance extends UtteranceBase {
    constructor() {
        super();
    }
    respond() {
        const speechText = 'Sorry, I can\'t understand the command. Please say again.';
        return {
            speech: speechText,
            repromptSpeech: speechText
        };
    }
}

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error handled: ${error.message}`);
        const uttranceResult = createUtterance(ErrorUtterance).respond();
        return handlerInput.responseBuilder
            .speak(uttranceResult.speech)
            .reprompt(uttranceResult.repromptSpeech)
            .getResponse();
    },
};

const skillBuilder = Alexa.SkillBuilders.custom();
exports.handler = skillBuilder
    .addRequestHandlers(LaunchRequestHandler, HelloWorldIntentHandler, HelpIntentHandler, CancelAndStopIntentHandler, SessionEndedRequestHandler)
    .addErrorHandlers(ErrorHandler)
    .lambda();
