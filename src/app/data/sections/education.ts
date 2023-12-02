export const education = [
    {
        establishment: "LJMU",
        course: "Computer Science",
        location: "Liverpool",
        time: {
            start: {
                year: 2022
            },
            end: {
                year: 2023
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
        course: null,
        location: "Liverpool",
        time: {
            start: {
                year: 2022
            },
            end: {
                year: 2023
            }
        },
        details: [
            "Engaged in learning to develop understanding of Discrete Mathematics, Introduction to Programming, Computer Systems, Computer Science workshop, Data Modelling, Introduction to Web Development, Personal and Professional Development",
            "Achieved a Certificate of Higher Education with Merit",
            "Discontinued studies for personal reasons"
        ]
    }


]


export type Education = {
    establishment: string;
    course: string | null;
    location: string;
    time:{
        start:{
            year:number
        },
        end:{
            year:number
        }
    };
    details: string[];
}

export type EducationData = Education[];