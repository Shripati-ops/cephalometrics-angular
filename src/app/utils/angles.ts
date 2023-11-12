export interface Angle {
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
	sortorder:number|undefined;
}

export const angles : {[k: string] : Angle} = {
	//SNA
    'S-N^N-A': {
		id: 'S-N^N-A',
		name : "SNA",
		description: 'SNA angle, describes anteroposterior position of the maxilla in relation to the cranial base',
		mean: 82,
		deviation: 2,
		inc: 'Prognathic maxilla',
		dec: 'Retrognathic maxilla',
		norm: 'Normal anteroposterior position of the maxilla',
		typeOfMeasurement : "Angular",
		sortorder : 1
	},
	//SNB
	'S-N^N-B': {
		id: 'S-N^N-B',
		name: 'SNB',
		description: 'SNB angle, describes anteroposterior position of the mandible in relation to the cranial base',
		mean: 80,
		deviation: 2,
		inc: 'Prognathic mandible',
		dec: 'Retrognathic mandible',
		norm: 'Normal anteroposterior position of the mandible',
		typeOfMeasurement : "Angular",
		sortorder:2
	},
	//ANB
	'N-B^N-A': {
		id: 'N-B^N-A',
		description: 'ANB, a relative determination of the relation­ship of the maxilla to the mandible.',
		name : "ANB",
		mean: 2,
		deviation: 2,
		inc: 'Skeletal Class II relationship',
		dec: 'Skeletal Class III relationship',
		norm: 'Skeletal Class I relationship',
		typeOfMeasurement : "Angular",
		sortorder : 3
	}, 
	//SN-Pg
	'S-N^Pog-N': {
		id: 'S-N^Pog-N',
		name : "SN-Pg",
		description:
			'The angle of convexity is a measure of maxillary protrusion in relation to the total profile and is the angle formed between lines running from N–A to A–Pog.',
		mean: 80,
		deviation: 5.9,
		inc: 'Concave skeletal profile',
		dec: 'Convex skeletal profile',
		norm: 'Straight skeletal profile',
		typeOfMeasurement : "Angular",
		sortorder :4
	},
	//NPg-FH
	'P-O^N-Pog': {
		id: 'P-O^N-Pog',
		name : "NPg-FH",
		description:
			'The angle of convexity is a measure of maxillary protrusion in relation to the total profile and is the angle formed between lines running from N–A to A–Pog.',
		mean: 87,
		deviation: 5.9,
		inc: 'prognathic mandible',
		dec: 'retrognathic mandible',
		norm: 'retrognathic mandible',
		invert : false,
		abs : true,
		typeOfMeasurement : "Angular",
		sortorder:5
	},
	//FH-MP
	'P-O^Me-Go' : {
		id : 'P-O^Me-Go',
		name : 'FH-MP',
		description : "Also known as Frankfort Mandibular-Plane Angle (FMA) many orthodontists prefer to use Frankfort Horizontal than SN.",
		mean : 24,
		deviation : 3,
		inc : 'Skeletal open bite, increases facial height',
		dec: 'Skeletal deep bite, decreases facial height',
		norm: 'Normal skeletal bite, normal facial height',
		invert:true,
		typeOfMeasurement : "Angular",
		sortorder:6
	},

	// SN-MP
	'S-N^Me-Go': {
		id: 'S-N^Me-Go',
		name : "SN-MP",
		description: 'SN-MP, The mandibular plane angle, SN-NP, measure for vertical growth patterns',
		mean: 32,
		deviation: 5,
		inc: 'Clockwise rotation of the mandible growth, unfavorable hyperdivergent pattern',
		norm: 'Normal mandible rotation',
		dec: 'Counterclockwise rotation of the mandible growth',
		invert:true,
		typeOfMeasurement : "Angular",
		sortorder:7
		
	},
	// Y-Axis SN
	'S-N^Gn-S': {
		id: 'S-N^Gn-S',
		name : "Y-Axis SN",
		description:
			'Y-Axis, SN, Anteroinferior angle formed by the intersect­ion of a line drawn from sella to gnathion and the Frankfort horizontal, determines the overall growth pattern of the face',
		mean: 66,
		deviation: 4,
		inc:
			'Class II division 2',
		dec:
			'Class II division 1',
		norm: 'Normal mandible rotation',
		invert : true,
		typeOfMeasurement : "Angular",
		sortorder:8
	},
	// Y-Axis FH
	"P-O^Gn-S":{
		id : 'P-O^Gn-S',
		name : "Y-Axis FH",
		description : "The same interpretation as above using Sella-Nasion. Many orthodontists prefer to use Frankfort Horizontal than SN.",
		mean : 59,
		deviation : 3,
		inc : 'Class II division 2 cases usually have a smaller Y-axis',
		dec : 'Class II division 1 cases usually have an average to high Y- axis.',
		norm  : "Normal mandible rotation",
		invert : true,
		typeOfMeasurement : "Angular",
		sortorder:9
	},

	//NA-FH
	'P-O^N-A': {
		id: 'P-O^N-A',
		name : 'NA-FH',
		description:
			'Facial Angle, Frankfort plane with N-Pog, measure the degree of retrusion or protrusion of the lower jaw.',
		mean: 90,
		deviation:4,
		dec: 'deficient or retrognathic maxilla',
		inc: 'protrusive or prognathic maxilla',
		norm: 'Normal chin, mandible',
		invert: false,
		abs:true,
		typeOfMeasurement : "Angular",
		sortorder:10
	},
	'S-N^UIe-UIa':{
		id : 'S-N^UIe-UIa',
		name: 'U1-SN',
		description : "This angular measurement determines the inclination of the central incisor relative to the anterior cranial base",
		mean : 103,
		deviation : 6,
		dec : "Class II division 2 cases",
		inc : "Class II division 1 cases",
		typeOfMeasurement : "Angular",
		norm : "Normal Measurement",
		invert: false,
		abs : true,
		sortorder:11
	},
	'UIe-UIa^N-A':{
		id : 'UIe-UIa^N-A',
		name : 'U1-NA',
		description : "The relationship of the maxillary central incisor to the N-A reference line is used to establish the position of maxillary incisors relative to the maxillary apical base.",
		mean : 22,
		deviation : 6,
		dec : "Class II division 2 ",
		inc : "Class II division 1 ",
		typeOfMeasurement : "Angular",
		norm : "Normal Measurement",
		invert:true,
		abs:true,
		sortorder:12
	},
	"LIe-LIa^N-B": {
		id : "LIe-LIa^N-B",
		name : "L1-NB",
		description : "The relationship of the mandibular central incisor to the N-B  reference line is used to establish the position of the mandibular incisors relative to the mandibular apical base.",
		mean: 25,
		deviation : 7,
		dec : "Class II division 2 ",
		inc : "Class II division 1 ",
		typeOfMeasurement : "Angular",
		norm : "Normal Measurement",
		invert:false,
		abs : true,
		sortorder : 13
	},
	"Me-Go^LIe-LIa":{
		id : "Me-Go^LIe-LIa",
		name : "L1-MP (IMPA)",
		description : "Also known as IMPA (Incisor Mandibular Plane Angle). It defines the axial inclination between the mandibular incisor and the inferior border of the mandible",
		mean : 90,
		deviation : 5,
		dec : "Class II division 2 ",
		inc : "Class II division 1 ",
		typeOfMeasurement : "Angular",
		norm : "Normal Measurement",
		invert:false,
		abs : true,
		sortorder:14
	},
	"UIe-UIa^LIe-LIa":{
		id : "UIe-UIa^LIe-LIa",
		name : "U1-L1",
		description : "The interincisal angle measures the relative spatial position along the long axis of the most prominent (anteriorly positioned) maxillary and mandibular central incisors. It determines the degree of procumbency (labial inclination) of the incisors.",
		mean : 135,
		deviation : 11,
		dec : "Class II division 2 ",
		inc : "Class II division 1 ",
		typeOfMeasurement : "Angular",
		norm : "Normal Measurement",
		invert:false,
		abs : false,
		sortorder:16
	}

	// 'ANS-Me^': {
	// 	id: 'ANS-Me^',
	// 	name : "LAFH",
	// 	description: 'MMPA, maxillary-mandibular plane angle',
	// 	mean: 27,
	// 	deviation: 5,
	// 	inc: 'Skeletal open bite, increases facial height',
	// 	dec: 'Skeletal deep bite, decreases facial height',
	// 	norm: 'Normal skeletal bite, normal facial height',
	// },
	
	
}