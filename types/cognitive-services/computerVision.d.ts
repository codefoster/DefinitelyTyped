export class computerVision {
	constructor(options: computerVisionOptions);
	analyzeImage(options: AnalyzeImageOptions): Promise<AnalyzeImageReturnValue>;
	describeImage(options: DescribeImageOptions): Promise<DescribeImageReturnValue>;
	getHandwrittenTextOperationResult(options: GetHandwrittenTextOperationResultOptions): Promise<GetHandwrittenTextOperationReturnValue>;
	getThumbnail(options: GetThumbnailOptions): Promise<GetThumbnailReturnValue>;
	listDomainSpecificModels(): Promise<ListDomainSpecificModelsReturnValue>;
	ocr(options: OCROptions): Promise<OCRReturnValue>;
	recognizeDomainSpecificContent(options: RecognizeDomainSpecificContentOptions): Promise<RecognizeDomainSpecificContentReturnValue>;
	recognizeHandwrittenText(options: RecognizeHandwrittenTextOptions): Promise<RecognizeHandwrittenTextReturnValue>;
	tagImage(options: TagImageOptions): Promise<TagImageReturnValue>;
}

export interface computerVisionOptions {
	apiKey: string,
	endpoint: string
}

// Analyze Image
export interface AnalyzeImageOptions {
	parameters?: AnalyzeImageParameters,
	headers?: AnalyzeImageHeaders,
	body?: { "url"?: string } | any
}

export interface AnalyzeImageParameters {
	visualFeatures?: string,
	details?: string,
	language?: string
}

export interface AnalyzeImageHeaders {
	"Content-Type"?: string,
	"Ocp-Apim-Subscription-Key"?: string
}

export interface AnalyzeImageReturnValue {
	categories: { name: string, score: number, detail: any }[],
	adult: { isAdultContent: boolean, isRacyContent: boolean, adultScore: number, racyScore: number },
	tags: { name: string, confidence: number }[],
	description: {
		tags: string[],
		captions: { text: string, confidence: number }[]
	}
	requestId: string,
	metadata: { width: number, height: number, format: string },
	faces: { age: number, gender: string, faceRectangle: { left?: number, top?: number, width?: number, height?: number } }[],
	color: {
		dominantColorForeground: string,
		dominantColorBackground: string,
		dominantColors: string[],
		accentColor: string,
		isBWImg: boolean
	},
	imageType: {
		clipArtType: number,
		lineDrawingType: number
	}
}

// Describe Image

export interface DescribeImageOptions {
	parameters?: DescribeImageParameters,
	headers?: DescribeImageHeaders,
	body?: { "url"?: string } | any
}

export interface DescribeImageParameters {
	maxCandidates?: string
}

export interface DescribeImageHeaders {
	"Content-Type"?: string,
	"Ocp-Apim-Subscription-Key"?: string
}

export interface DescribeImageReturnValue {
	"description"?: {
		"tags"?: string[],
		"captions"?: { "text": string, "confidence": number }[]
	},
	"requestId"?: string,
	"metadata"?: { "width": number, "height": number, "format": number }
}

// getHandwrittenTextOperationResult

export interface GetHandwrittenTextOperationResultOptions {
	parameters?: GetHandwrittenTextOperationResultParameters,
	headers?: GetHandwrittenTextOperationResultHeaders
}

export interface GetHandwrittenTextOperationResultParameters {
	operationId?: string
}

export interface GetHandwrittenTextOperationResultHeaders {
	"Ocp-Apim-Subscription-Key"?: string
}

export interface GetHandwrittenTextOperationResultReturnValue {
	status: string,
	recognitionResult: {
		lines: {
			boundingBox: number[],
			text: string,
			words: { boundingBox: number[], text: string }[]
		}[]
	}

}

// getThumbnail
export interface GetThumbnailOptions {
	parameters?: GetThumbnailParameters,
	headers?: GetThumbnailHeaders,
	body?: { "url"?: string } | any
}

export interface GetThumbnailParameters {
	width: number,
	height: number,
	smartCropping?: boolean
}

export interface GetThumbnailHeaders {
	"Content-Type"?: string,
	"Ocp-Apim-Subscription-Key"?: string
}

export interface GetThumbnailReturnValue {
	"models": { "name": string, "categories": string[] }[]
}

// List Domain Specific Models
export interface ListDomainSpecificModelsOptions {
	headers?: ListDomainSpecificModelsHeaders,
}

export interface ListDomainSpecificModelsHeaders {
	"Ocp-Apim-Subscription-Key"?: string
}

export interface ListDomainSpecificModelsReturnValue {
	"models": { "name": string, "categories": string[] }[]
}

// OCR
export interface OCROptions {
	parameters?: OCRParameters,
	headers?: OCRHeaders,
	body?: { "url"?: string } | any
}

export interface OCRParameters {
	language?: string,
	detectOrientation?: boolean
}

export interface OCRHeaders {
	"Content-Type"?: string,
	"Ocp-Apim-Subscription-Key"?: string
}

export interface OCRReturnValue {
	language?: string,
	textAngle?: number,
	orientation?: string,
	regions?:
	{
		boundingBox: string,
		lines:
		{
			boundingBox: string,
			words: { boundingBox: string, text: string }[]
		}[]
	}[]
}

// Recognize Domain Specific Content
export interface RecognizeDomainSpecificContentOptions {
	parameters?: RecognizeDomainSpecificContentParameters,
	headers?: RecognizeDomainSpecificContentHeaders,
	body?: { "url"?: string } | any
}

export interface RecognizeDomainSpecificContentParameters {
	model: string
}

export interface RecognizeDomainSpecificContentHeaders {
	"Content-Type"?: string,
	"Ocp-Apim-Subscription-Key"?: string
}

export interface RecognizeDomainSpecificContentReturnValue {
	requestId: string,
	metadata?: { width: number, height: number, format: string },
	result: {
		"celebrities": {
			name?: string,
			faceRectangle?: { left: number, top: number, width: number, height: number },
			confidence?: number
		}[]
	}
}

// Recognize Domain Specific Content
export interface RecognizeHandwrittenTextOptions {
	parameters?: RecognizeHandwrittenTextParameters,
	headers?: RecognizeHandwrittenTextHeaders,
	body?: { "url"?: string } | any
}

export interface RecognizeHandwrittenTextParameters {
	handwriting: boolean
}

export interface RecognizeHandwrittenTextHeaders {
	"Content-Type"?: string,
	"Ocp-Apim-Subscription-Key"?: string
}

export interface RecognizeHandwrittenTextReturnValue {
	"Operation-Location"?: string
}


// Tag Image

export interface TagImageOptions {
	headers?: TagImageHeaders,
	body?: { "url"?: string } | any
}

export interface TagImageHeaders {
	"Content-Type"?: string,
	"Ocp-Apim-Subscription-Key"?: string
}

export interface TagImageReturnValue {
	tags: { name: string, confidence: number }[],
	requestId: string,
	metadata: { width: number, height: number, format: string }
}
