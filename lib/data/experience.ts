export interface Role {
  id: string;
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

export const experience: Role[] = [
  {
    id: "nhs-analytical-engineer",
    title: "Analytical Engineer",
    company: "NHS England (formerly NHS Digital)",
    period: "November 2025 – Present",
    bullets: [
      "Architect and maintain high-performance data pipelines within the NHS Federated Data Platform (Palantir Foundry), using PySpark and SQL to transform and aggregate millions of records across national, regional, and trust-level datasets.",
      "Engineer executive-level intelligence for the C-Suite and senior government officials, ensuring high-integrity data models are available for national strategic decision-making and high-priority briefings.",
      "Lead the implementation of Reproducible Analytical Pipelines (RAP) by transitioning team workflows into Foundry Code Repositories, ensuring reporting is automated, version-controlled, and meets national standards for transparency.",
      "Develop scalable transformation logic to harmonise complex downstream data from multiple healthcare domains, enabling stakeholders to drill down from national trends to granular trust-level performance.",
    ],
  },
  {
    id: "nhs-higher",
    title: "Higher Information Analyst",
    company: "NHS England",
    period: "August 2022 – October 2025",
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
    id: "polaris-ds",
    title: "Data Scientist",
    company: "Polaris Bank",
    period: "September 2021 – January 2022",
    bullets: [
      "Liaised with Business Analysts to design and implement data science solutions from ideation through deployment, including an NLP chatbot and credit risk modelling for nanoloans.",
      "Contributed to the innovation team by researching emerging best practices and championing new ideas and technologies, facilitating cross-functional collaboration to implement cutting-edge solutions that drove business growth and operational efficiency.",
    ],
  },
  {
    id: "polaris-da",
    title: "Data Analyst",
    company: "Polaris Bank",
    period: "June 2021 – August 2021",
    bullets: [
      "Managed and maintained SSIS data pipelines and the OLAP database for the analytics team, monitoring data quality, resolving issues, and optimising processes to enhance efficiency.",
      "Fulfilled SQL data requests from stakeholders across the institution and created insightful reports and dashboards to present findings.",
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
