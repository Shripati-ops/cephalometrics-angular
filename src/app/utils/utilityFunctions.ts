import html2canvas from "html2canvas"; 
import {jsPDF} from "jspdf";
import { pointsLines } from "./pointToLines";
import { IPoints } from "../interfaces/pointInterface";
import { IPoint } from "fabric/fabric-impl";
var resultDataUrl:any;

let isLoaded = false;
export const convertImageToBase64URL = (items: FileList): boolean =>{
    for(let i = 0; i < items.length; i++){
        const item = items.item(i);
        if(item){
            const reader = new FileReader();
            reader.readAsDataURL(item);
            reader.onload = (event: ProgressEvent<FileReader>) => {
                const result = event.target?.result;
                if (result && typeof result == "string") {
                        localStorage.setItem("imageData", result); 
                        var memoryImg = document.createElement('img');
                        memoryImg.src = result;
                        var width = memoryImg.width;
                        var height = memoryImg.height;
                        localStorage.setItem("width", ""+width); 
                        localStorage.setItem("height", ""+height);
                    

                    isLoaded = true;
                }
                
            };
        }
    }
    return isLoaded;
}

export const calculateAngle = (lineA: any, lineB: any,invert?:boolean, abs?:boolean)=> {
    
		if (!(lineA.angle && lineB.angle)) {
			return;
		}
		let angle = Math.round((lineA.angle - lineB.angle) * 10) / 10;
		if (angle > 180) {
			angle = angle - 180;
		}

        if (invert) {
			angle = 180 - angle;
		}
        if(abs) {
            angle = Math.abs(angle)
        }

		return Math.round(angle * 10) / 10;
}

export const converDivToJPEG = async(element:HTMLElement, imageName:string) => {
    const canvas = await html2canvas(element,{
        width: 1700,
        height: 800
    });
    const image = canvas.toDataURL('image/png');
    console.log(image)
    downloadImage(image,imageName)

}

export const convertDivToPDF = async(element:HTMLDivElement, tableElement:any,docname:string) =>{
    const canvas = await html2canvas(element,{
        width: 899,
        height: 800
    });
    const image = canvas.toDataURL('image/png');
    console.log(image)

    const tableCanvas = await html2canvas(tableElement,{
        width:1196,
        height:1173
    });

    const tableImage = tableCanvas.toDataURL("image/png");
    

    downloadPDF(image,tableImage,docname)
}

 export const downloadImage = (image:any,imageName:string) => {
    var fakeLink = window.document.createElement("a");
    fakeLink.style.display = "none;";
    fakeLink.download = imageName + ".jpeg";

    fakeLink.href = image;

    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);

    fakeLink.remove();
}

export const downloadPDF = (image:any, tableElement:any ,docName:string) => {
    var pdf = new jsPDF('l','px',[1700,800]);
    pdf.addImage(image, 'PNG', 10,10,899,800);
    pdf.addPage()
    console.log(tableElement)
    pdf.addImage(tableElement,'PNG',10,10,1166,800)
    pdf.save(docName+'.pdf');
}

export const calculateIntersection =  (p1 : any, p2 : any, p3 : any, p4 : any) => {
    var c2x = p3.x - p4.x; // (x3 - x4)
    var c3x = p1.x - p2.x; // (x1 - x2)
    var c2y = p3.y - p4.y; // (y3 - y4)
    var c3y = p1.y - p2.y; // (y1 - y2)

    // down part of intersection point formula
    var d  = c3x * c2y - c3y * c2x;

    if (d == 0) {
        throw new Error('Number of intersection points is zero or infinity.');
    }

    // upper part of intersection point formula
    var u1 = p1.x * p2.y - p1.y * p2.x; // (x1 * y2 - y1 * x2)
    var u4 = p3.x * p4.y - p3.y * p4.x; // (x3 * y4 - y3 * x4)

    // intersection point formula

    var px = (u1 * c2x - c3x * u4) / d;
    var py = (u1 * c2y - c3y * u4) / d;

    var p = { x: px, y: py };

    return p;
} 

export const calculatePointToLine = (pointsArray:{[k:string]:IPoint}) => {
    var distance:any = {};      
     if(pointsArray["Pog"] != undefined && pointsArray["N"] != undefined  && pointsArray["B"] != undefined){
        const pg_nb_point_1 = pointsLines['PogVN-B'].id.split("V")[0];
        const pg_nb_point_2 = pointsLines['PogVN-B'].id.split("V")[1].split("-")[0]
        const pg_nb_point_3 = pointsLines['PogVN-B'].id.split("V")[1].split("-")[1]

        var pg_nb_distance = 2*(12*(pointsArray[pg_nb_point_1].x * (pointsArray[pg_nb_point_2].y - pointsArray[pg_nb_point_3].y) + pointsArray[pg_nb_point_2].x * (pointsArray[pg_nb_point_3].y - pointsArray[pg_nb_point_1].y) + pointsArray[pg_nb_point_3].x * (pointsArray[pg_nb_point_1].y - pointsArray[pg_nb_point_2].y))) / Math.sqrt(Math.pow(pointsArray[pg_nb_point_2].x - pointsArray[pg_nb_point_3].x, 2) + Math.pow(pointsArray[pg_nb_point_2].y - pointsArray[pg_nb_point_3].y,2))
        distance['Pg-NB'] = {"final_measurement" :  Math.abs(Math.floor(pg_nb_distance/100))}
     }

     if(pointsArray["UIl"] != undefined && pointsArray['N'] != undefined && pointsArray['A'] != undefined){
        const u1_na_point_1 = pointsLines['UIlVN-A'].id.split("V")[0];
        const u1_na_point_2 = pointsLines['UIlVN-A'].id.split("V")[1].split("-")[0]
        const u1_na_point_3 = pointsLines['UIlVN-A'].id.split("V")[1].split("-")[1]

         var u1_na_distance = 2*(12*(pointsArray[u1_na_point_1].x * (pointsArray[u1_na_point_2].y - pointsArray[u1_na_point_3].y) + pointsArray[u1_na_point_2].x * (pointsArray[u1_na_point_3].y - pointsArray[u1_na_point_1].y) + pointsArray[u1_na_point_3].x * (pointsArray[u1_na_point_1].y - pointsArray[u1_na_point_2].y))) / Math.sqrt(Math.pow(pointsArray[u1_na_point_2].x - pointsArray[u1_na_point_3].x, 2) + Math.pow(pointsArray[u1_na_point_2].y - pointsArray[u1_na_point_3].y,2))
         distance['U1-NA(Linear)'] = {"final_measurement" : Math.abs(Math.floor(u1_na_distance/100))}

     } 
     if(pointsArray["LIl"] != undefined && pointsArray['N'] != undefined && pointsArray['B'] != undefined){
        const l1_nb_point_1 = pointsLines['LIlVN-B'].id.split("V")[0];
        const l1_nb_point_2 = pointsLines['LIlVN-B'].id.split("V")[1].split("-")[0]
        const l1_nb_point_3 = pointsLines['LIlVN-B'].id.split("V")[1].split("-")[1]

         var l1_nb_distance = 2*(12*(pointsArray[l1_nb_point_1].x * (pointsArray[l1_nb_point_2].y - pointsArray[l1_nb_point_3].y) + pointsArray[l1_nb_point_2].x * (pointsArray[l1_nb_point_3].y - pointsArray[l1_nb_point_1].y) + pointsArray[l1_nb_point_3].x * (pointsArray[l1_nb_point_1].y - pointsArray[l1_nb_point_2].y))) / Math.sqrt(Math.pow(pointsArray[l1_nb_point_2].x - pointsArray[l1_nb_point_3].x, 2) + Math.pow(pointsArray[l1_nb_point_2].y - pointsArray[l1_nb_point_3].y,2))
         distance['L1-NB(Linear)'] = {"final_measurement" : Math.abs(Math.floor(l1_nb_distance/100))}

     }
     return distance
}


export const calculateWitsAppraisal = (pointsArray :  {[k:string] : IPoint}) => {
    var x0y0Comp:any;
    var x4y4Comp:any;
    var distance:any = {};   
   if(pointsArray['apOcP'] != undefined && pointsArray['ppOcP'] != undefined && pointsArray['N'] != undefined && pointsArray['A'] != undefined || pointsArray['apOcP'] != undefined && pointsArray['ppOcP'] != undefined && pointsArray['N'] != undefined && pointsArray['B'] != undefined){
        x0y0Comp = calculateIntersection(pointsArray['apOcP'], pointsArray['ppOcP'], pointsArray['N'], pointsArray['A'])
        x4y4Comp = calculateIntersection(pointsArray['apOcP'], pointsArray['ppOcP'], pointsArray['N'], pointsArray['B'])
        distance['apOcP-ppOcP'] = {"final_measurement":Math.floor(Math.sqrt((x4y4Comp.x - x0y0Comp.x) * (x4y4Comp.x - x0y0Comp.x) + (x4y4Comp.y - x0y0Comp.y) * (x4y4Comp.y - x0y0Comp.y)) * (0.2645833333))}
        return distance
   }

}






