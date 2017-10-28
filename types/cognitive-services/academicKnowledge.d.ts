export class academicKnowledge {
	constructor(options: academicKnowledgeOptions);
	calcHistogram(options: CalcHistogramOptions): Promise<CalcHistogramReturnValue>;
	calcHistogramPost(options: CalcHistogramPostOptions): Promise<CalcHistogramReturnValue>;
	evaluate(options: EvaluateOptions): Promise<EvaluateReturnValue>;
	evaluatePost(options: EvaluatePostOptions): Promise<EvaluateReturnValue>;
	getSimilarity(_ref9: any): any;
	graphSearch(_ref6: any): any;
	interpret(_ref7: any): any;
	interpretPost(_ref8: any): any;
	postSimilarity(_ref10: any): any;
}

export interface academicKnowledgeOptions {
	apiKey: string,
	endpoint: string
}

// Calc Histogram
export interface CalcHistogramOptions {
	parameters?: CalcHistogramParameters,
	headers?: CalcHistogramHeaders
}

export interface CalcHistogramParameters {
	expr: string,
	model?: string,
	attributes?: string,
	count?: number,
	offset?: number
}

export interface CalcHistogramHeaders {
	"Ocp-Apim-Subscription-Key"?: string
}

export interface CalcHistogramReturnValue {
	expr: string,
	num_entities: number,
	histograms:
	{
		attribute: string,
		distinct_values: number,
		total_count: number,
		histogram: {
			value: number,
			prob: number,
			count: number
		}[]
	}[]
}

//Calc Histogram POST
export interface CalcHistogramPostOptions {
	headers?: CalcHistogramPostHeaders,
	body?: CalcHistogramPostBody
}

export interface CalcHistogramPostHeaders {
	"Content-Type"?: string,
	"Ocp-Apim-Subscription-Key"?: string
}

export interface CalcHistogramPostBody {
	expr: string,
	model: any,
	attributes: string,
	count: number,
	offset: number
}

//Evaluate
export interface EvaluateOptions {
	parameters?: EvaluateParameters,
	headers?: EvaluateHeaders,
}

export interface EvaluateHeaders {
	"Ocp-Apim-Subscription-Key"?: string
}

export interface EvaluateParameters {
	/// A query expression that specifies which entities should be returned.
	expr:string,
	
	/// Name of the model that you wish to query. Currently, the value defaults to "latest".
	model?:string,
	
	/// Number of results to return.
	count?:number,
	
	/// Index of the first result to return.
	offset?:number,
	
	/// Name of an attribute that is used for sorting the entities. Optionally, ascending/descending can be specified. The format is: name:asc or name:desc.
	orderby?:string,
	
	/// A comma delimited list that specifies the attribute values that are included in the response. Attribute names are case-sensitive.
	attributes?:string,
}

export interface EvaluateBody {
	expr: string,
	model: any,
	attributes: string,
	count: number,
	offset: number
}

export interface EvaluateReturnValue {
	expr: string,
	entities: {
		prob: number,
		Ti: string,
		Y: number,
		CC: number,
		AA: {
			AuN: string,
			AuId: number
		}[]
	}[]

}

//Evaluate POST
export interface EvaluatePostOptions {
	headers?: EvaluatePostHeaders,
	body?: EvaluateBody
}

export interface EvaluatePostHeaders {
	"Content-Type"?: string,
	"Ocp-Apim-Subscription-Key"?: string
}


//Get Similarity
export interface GetSimilarityOptions {}
export interface GetSimilarityParameters {}
export interface GetSimilarityHeaders {}
export interface GetSimilarityBody {}
export interface GetSimilarityReturnValue {}

//Graph Search
export interface GraphSearchOptions {}
export interface GraphSearchParameters {}
export interface GraphSearchHeaders {}
export interface GraphSearchBody {}
export interface GraphSearchReturnValue {}

//Interpret
export interface InterpretOptions {}
export interface InterpretParameters {}
export interface InterpretHeaders {}
export interface InterpretBody {}
export interface InterpretReturnValue {}

//Interpret POST
export interface InterpretPostOptions {}
export interface InterpretPostParameters {}
export interface InterpretPostHeaders {}
export interface InterpretPostBody {}
export interface InterpretPostReturnValue {}

//Post Similarity
export interface PostSimilarityOptions {}
export interface PostSimilarityParameters {}
export interface PostSimilarityHeaders {}
export interface PostSimilarityBody {}
export interface PostSimilarityReturnValue {}
