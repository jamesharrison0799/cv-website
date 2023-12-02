type Time = {
    start: {
        month: string | null;
        year: number;
    };
    end: {
        month: string | null;
        year: number;
    };
};

type Details = string[];

type Experience = {
    company:string;
    title:string;
    location:string;
    time:Time;
    details:Details;
}

type Education = {
    establishment:string;
    location:string;
    subject: string | null;
    time: Time;
    details: Details;
}

export type Resume = {
    title:string;
    tagline:string;
    address:string;
    postcode:string;
    emailAddr:string;
    experience: Experience[];
    education: Education[];
    skills:string[];
    interests:string[];
    certificates:string[];
}


export const resume = [
    {
        title: "James Harrison",
        tagline: "Dynamic self-starter with interests and capabilities in computing and development, photography and customer-facing activity.",
        address: "14 Edale Road",
        postcode: "L18 5HR",
        emailAddr: "james@j-harrison.com",
        experience: [
            {
                company: "Getir",
                title: "Courier",
                location: "Liverpool",
                time: {
                    start: {
                        month: "October",
                        year: 2022
                    },
                    end: {
                        month: "September",
                        year: 2023
                    }
                },
                details: [
                    "Managed customer relationships",
                    "Responsible for resource and fleet management capability (defect checks, resource allocation)",
                    "Highest rated driver in regional division"
                ]
            },
            {
                company: "Formby Shoe Repairs",
                title: "Shop Manager (Part-Time)",
                location: "Liverpool",
                time: {
                    start: {
                        month: "October",
                        year: 2022
                    },
                    end: {
                        month: "September",
                        year: 2023
                    }
                },
                details: [
                    "Developed web presence and E-Commerce capability",
                    "Managed stock - maximising sales using month-to-month revenue generation strategies (promotions, reward schemes, bundled items)",
                    "Optimised organic SEO ranking of website through SEO analytics",
                    "Delivered a consistent service to customers, raising the store&apos;s local presence (working with local influencers and celebrities)"
                ]
            },
            {
                company: "Self-Employed",
                title: "Courier",
                location: "Liverpool",
                time: {
                    start: {
                        month: "September",
                        year: 2017
                    },
                    end: {
                        month: "September",
                        year: 2023
                    }
                },
                details: [
                    "Self-starter - achieved driving licence, and police-accredited motorcycle course",
                    "In excess of 10,000 successful deliveries"
                ]
            }
        ],
        education: [
            {
                establishment: "Liverpool John Moores University",
                location: "Liverpool",
                subject: "Computer Science",
                time: {
                    start: {
                        month:null,
                        year: 2019
                    },
                    end: {
                        month:null,
                        year: 2020
                    }
                },
                details: [
                    "Engaged in learning to develop understanding of Discrete Mathematics, Introduction to Programming, Computer Systems, Computer Science workshop, Data Modelling, Introduction to Web Development, Personal and Professional Development",
                    "Achieved a Certificate of Higher Education with Merit",
                    "Discontinued studies for personal reasons"
                ]
            },
            {
                establishment: "West Derby Sixth Form",
                location: "Liverpool",
                subject: null,
                time: {
                    start: {
                        month:null,
                        year: 2016
                    },
                    end: {
                        month:null,
                        year: 2018
                    }
                },
                details: [
                    "Grades for CTEC Media Studies (2 part) and CTEC Computing with Distinction, Distinction*, Distinction*"
                ]
            }
        ],
        skills: [
            "Programming (Python, Java, JS, PHP)",
            "E-Commerce & Point of Sale",
            "Website Development & CMS",
            "Database / SQL",
            "Photography"
        ],
        interests: [
            "Motorsports",
            "Motorcycle Maintenance and Fabrication",
            "Photography",
            "Smart Home Intergrations",
            "DIY / Restoration",
            "Driving / Roadcraft"

        ],
        certificates: [
            "NCFE L2 - Understanding Climate Change and Envrionmental Awareness"
        ]

    }
]