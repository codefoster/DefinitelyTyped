import * as CognitiveServices from 'cognitive-services';

function test_intantiate_apis() {
    const clients = {
        academicKnowledge: new CognitiveServices.academicKnowledge({}),
        bingAutosuggest: new CognitiveServices.bingAutosuggest({}),
        bingImageSearch: new CognitiveServices.bingImageSearch({}),
        bingNewsSearch: new CognitiveServices.bingNewsSearch({}),

        bingSpellCheck: new CognitiveServices.bingSpellCheck({}),
        bingVideoSearch: new CognitiveServices.bingVideoSearch({}),
        bingWebSearch: new CognitiveServices.bingWebSearch({}),
        computerVision: new CognitiveServices.computerVision({ apiKey: "", endpoint: "" }),
        emotion: new CognitiveServices.emotion({}),
        entityLinking: new CognitiveServices.entityLinking({}),
        face: new CognitiveServices.face({}),
        qnaMaker: new CognitiveServices.qnaMaker({}),
        recommendations: new CognitiveServices.recommendations({}),
        speakerRecognition: new CognitiveServices.speakerRecognition({}),
        textAnalytics: new CognitiveServices.textAnalytics({}),
        textTranslator: new CognitiveServices.textTranslator({}),
        video: new CognitiveServices.video({}),
        webLanguageModel: new CognitiveServices.webLanguageModel({})

    }
}