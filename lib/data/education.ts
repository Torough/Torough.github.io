export interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  period: string;
}

export interface Certification {
  name: string;
  status?: string;
}

export const education: EducationEntry[] = [
  {
    institution: "Coventry University",
    degree: "Master of Science",
    field: "Data Science and Computational Intelligence",
    period: "September 2018 – December 2019",
  },
  {
    institution: "Covenant University",
    degree: "Bachelor of Science",
    field: "Computer Science",
    period: "September 2012 – June 2016",
  },
];

export const certifications: Certification[] = [
  { name: "AWS Cloud Practitioner", status: "In View" },
];
