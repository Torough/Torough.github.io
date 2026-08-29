export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Engineering",
    skills: [
      "Python",
      "PySpark",
      "SQL",
      "R",
      "Java",
      "Git",
      "Docker",
      "Apache Airflow",
      "AWS",
      "Palantir Foundry",
      "Analytics Engineering",
      "ETL/ELT Pipeline Development",
      "Data Modeling",
      "Reproducible Analytical Pipelines",
    ],
  },
  {
    label: "Analytics & Science",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Keras",
      "Matplotlib",
      "Jupyter Lab",
      "Statistical Analysis",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "Data Wrangling",
    ],
  },
  {
    label: "Visualisation & BI",
    skills: [
      "Power BI",
      "Executive Dashboard Design",
      "Strategic Reporting",
      "Data Storytelling",
      "Exploratory Data Analysis",
    ],
  },
];
