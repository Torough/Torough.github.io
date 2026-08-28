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
      "Jupyter",
      "Statistical Analysis",
      "Machine Learning",
      "NLP",
    ],
  },
  {
    label: "Visualisation & BI",
    skills: [
      "Power BI",
      "Dashboard Development",
      "Data Storytelling",
      "Exploratory Data Analysis",
      "Reproducible Analytical Pipelines",
    ],
  },
];
