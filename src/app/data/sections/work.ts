export const workExperience = [
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
        title: "Shop Manager",
        location: "Liverpool",
        time: {
            start: {
                month: "April",
                year: 2022
            },
            end: {
                month: "July",
                year: 2023
            }
        },
        details: [
            "Developed web presence and E-Commerce capability",
            "Managed stock - maximising sales using month-to-month revenue generation strategies (promotions, reward schemes, bundled items)",
            "Optimised organic SEO ranking of website through SEO analytics",
            "Delivered a consistent service to customers, raising the store’s local presence (working with local influencers and celebrities)"
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
            "In excess of 10,000 successful deliveries",
        ]
    }

]




type TimePeriod = {
    start: {
        month: string | null;
        year: number;
    },
    end: {
        month: string | null;
        year: number;
    }

};

export type WorkExperience = {
    company: string;
    title: string;
    location: string;
    time: TimePeriod;
    details: string[];
}

export type WorkData = WorkExperience[];