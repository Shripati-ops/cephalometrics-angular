export interface Distance{
    id : string;
	name?: string
    description : string;
    mean: number;
    deviation : number;
    inc : string;
    dec : string;
    norm : string;
	invert ?:boolean;
	typeOfMeasurement ?: string;
	abs?: boolean;
	sortorder? : number|undefined
}
export const distance: {[k:string] : Distance} = {
	//LAFH
	'ANS-Me': {
		id: 'ANS-Me',
		name : "LAFH",
		description: 'MMPA, maxillary-mandibular plane angle',
		mean: 0.8,
		deviation: 3,
		inc: 'Skeletal open bite, increases facial height',
		dec: 'Skeletal deep bite, decreases facial height',
		norm: 'Normal skeletal bite, normal facial height',
		typeOfMeasurement : "Linear",
		sortorder : 1
	},
	//UAFH
	'ANS-N': {
		id: 'ANS-N',
		name : 'UAFH/LAFH',
		description: 'Maxillary plane to cranial base',
		mean: 0.8,
		deviation: 3,
		inc: 'Increased maxillary plane downward growth',
		dec: 'Decreased maxillary plane downward growth',
		norm: 'Normal maxillary plane growth',
		typeOfMeasurement : "Linear",
		sortorder : 10
	},
	'Pog-NB':{
		id : "Pog-NB",
		name : "Pg-NB",
		description: "Maxillary plane to cranial base",
		mean : 3,
		deviation : 5,
		inc : "",
		dec : "",
		norm : "",
		typeOfMeasurement : "Linear",
		sortorder : 5
	},
	'UIe-Arb':{
		id : "UIe-Arb",
		name : "U1-NA(Linear)",
		description : "",
		mean : 3,
		deviation : 2,
		inc : "",
		dec : "",
		norm : "",
		typeOfMeasurement : "Linear",
		sortorder : 13
	},
	'LIe-Arb':{
		id : "LIe-Arb",
		name : "L1-NB(Linear)",
		description : "",
		mean : 3,
		deviation : 2,
		inc : "",
		dec : "",
		norm : "",
		typeOfMeasurement : "Linear",
		sortorder : 15
	},
	'C1-C2': {
		id: 'C1-C2',
		description: 'SNA angle, describes anteroposterior position of the maxilla in relation to the cranial base',
		mean: 82,
		deviation: 2,
		inc: 'Prognathic maxilla',
		dec: 'Retrognathic maxilla',
		norm: 'Normal anteroposterior position of the maxilla',
		typeOfMeasurement : "Linear",
		sortorder: 0

	},
	'apOcP-ppOcP':{
		id: 'apOcP-ppOcP',
		name : "apOcP-ppOcP",
		description : "",
		mean : 1,
		deviation : 2,
		inc : "",
		dec : "",
		norm : "",
		typeOfMeasurement : "Linear",
		sortorder : 17
	},
	// 'A!-B!' : {
	// 	id: 'A!-B!',
	// 	name : "A!-B!",
	// 	description : "",
	// 	mean : 1,
	// 	deviation : 2,
	// 	inc : "",
	// 	dec : "",
	// 	norm : "",
	// 	typeOfMeasurement : "Linear"
	// }
}