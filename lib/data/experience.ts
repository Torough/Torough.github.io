export interface Role {
  id: string;
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

export const experience: Role[] = [
  {
    id: "nhs-higher",
    title: "Higher Information Analyst",
    company: "NHS England",
    period: "August 2022 – Present",
    bullets: [
      "Collaborate with internal and external stakeholders to deliver key NHS publications on a monthly, quarterly, and annual basis.",
      "Lead the migration of data processing workflows from SAS to Python using reproducible analytical pipelines (RAP) with Python and Git, enhancing automation, transparency, and reproducibility.",
      "Provide timely ad hoc data analysis and insights to support decision-making across the organisation.",
    ],
  },
  {
    id: "mdoc",
    title: "Data Analyst",
    company: "mDoc Healthcare",
    period: "February 2022 – July 2022",
    bullets: [
      "Designed and developed executive dashboards to track key demographic and clinical metrics, enabling data-driven decision-making at the leadership level.",
      "Performed complex descriptive analyses on large-scale datasets to support business strategy.",
      "Delivered weekly analytics presentations and actionable recommendations to clinical operations teams.",
      "Collaborated closely with data analysts to efficiently fulfill diverse data requests.",
    ],
  },
  {
    id: "polaris",
    title: "Data Scientist",
    company: "Polaris Bank",
    period: "July 2021 – January 2022",
    bullets: [
      "Partnered with Business Analysts to design and implement data science solutions from ideation through deployment, including NLP chatbot development and credit risk modeling for nanoloans.",
      "Actively contributed to the innovation team by researching cutting-edge techniques and fostering cross-functional collaboration to integrate advanced analytics into business operations.",
      "Managed and optimised SSIS ETL pipelines and OLAP databases to maintain high data quality.",
      "Delivered actionable insights through complex SQL queries, analytical reports, and interactive dashboards.",
    ],
  },
  {
    id: "hace",
    title: "Data Scientist",
    company: "HACE",
    period: "July 2020 – March 2021",
    bullets: [
      "Conducted research and analysis on cross-sectoral factors influencing child labour, contributing to the HACE 2020 Education report by leading data gathering, transformation, and reporting for the Bangladeshi pilot program.",
      "Managed ETL processes for various global indicators by ingesting and transforming data from multiple publicly available datasets into a cloud-based relational database.",
      "Collaborated with social scientists to develop statistical models and created impactful visualisations to support research and reporting.",
    ],
  },
];
