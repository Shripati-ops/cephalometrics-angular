export interface pointList{
    pointName : string;
    pointAlias : string;
    isActive : boolean;
    imagePath : string;
}

export const steinerPoints: Array<pointList> = [
    
    {
        pointName : "Calibration Point 1",  
        pointAlias : "C1",
        isActive : true,
        imagePath : 'assets/img/C1.jpg'
    },
    {
        pointName : "Calibration Point 2",
        pointAlias : "C2",
        isActive : true,
        imagePath : 'assets/img/C2.jpg'
    },
    {
        pointName : "Sella (s)",
        pointAlias : "S",
        isActive : true,
        imagePath : 'assets/img/S.jpg'
    },
    {
        pointName : "Nasion (Na)",
        pointAlias : "N",
        isActive : true,
        imagePath : 'assets/img/Na.jpg'
    },
    {
        pointName : "A-point (A)",
        pointAlias : "A",
        isActive : true,
        imagePath : 'assets/img/A.jpg'
    },
    {
        pointName : "B-point (B)",
        pointAlias : "B",
        isActive : true,
        imagePath : 'assets/img/B.jpg'
    },
    {
        pointName: "Menton (Me)",
        pointAlias : "Me",
        isActive : true,
        imagePath : 'assets/img/Me.jpg'
    },
    {
        pointName: "Gonion (Go)",
        pointAlias : "Go",
        isActive : true,
        imagePath : 'assets/img/Go.jpg'
    },
    {
        pointName: "Pogonion (Pog)",
        pointAlias : "Pog",
        isActive : true,
        imagePath : 'assets/img/Pog.jpg'
    },
    {
        pointName : "Porion (P)",
        pointAlias : "P",
        isActive : true,
        imagePath : 'assets/img/P.jpg'
    },
    {
        pointName : "Orbitale (O)",
        pointAlias : "O",
        isActive : true,
        imagePath : 'assets/img/O.jpg'
    },

    {
        pointName: 'Gnathion (Gn)',
        isActive: true,
        pointAlias: 'Gn',
        imagePath: '',
    },

    {
        pointName: 'Anterior Nasal Spine (ANS)',
        isActive: true,
        pointAlias: 'ANS',
        imagePath: '',
    },
    {
        pointName : 'Upper Incisor edge',
        isActive : true,
        pointAlias : 'UIe',
        imagePath : ''
    },
    {
        pointName : 'Upper Incisor Labial outline',
        isActive: true,
        pointAlias : "UIl",
        imagePath : ""
    },
    {
        pointName : 'Upper Incisor apex',
        isActive : true,
        pointAlias : 'UIa',
        imagePath : ''
    },

    {
        pointName : 'Lower Incisor edge',
        isActive : true,
        pointAlias : 'LIe',
        imagePath : ''
    },
    {
        pointName : "Lower Incisor Labial outline",
        isActive : true,
        pointAlias : 'LIl',
        imagePath : ''
    },
    {
        pointName : 'Lower Incisor apex',
        isActive : true,
        pointAlias : 'LIa',
        imagePath : ''
    },

    {
        pointName: 'Anterior Point of Occlusal Plane (apOcP)',
        isActive: true,
        pointAlias: 'apOcP',
        imagePath: '',
    },
    {
        pointName: 'Posterior Point of Occlusal Plane (ppOcP)',
        isActive: true,
        pointAlias: 'ppOcP',
        imagePath: '',
    },
]

