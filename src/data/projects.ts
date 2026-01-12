export interface Project {
  id: string;
  title: string;
  company: string;
  url: string;
  tags: string[];
  overview: string;
  objectives: string[];
  tools: string[];
  contributions: string[];
  outcomes: string[];
}

export const projects: Project[] = [
  {
    id: "jazz-npm-telecom",
    title: "Jazz NPM Telecom",
    company: "Jazz Pakistan",
    url: "https://jazz.com.pk/",
    tags: ["SQL", "Python", "Plotly", "PRS (Huawei)", "NetNumen", "ZTE"],
    overview: "Jazz NPM (Network Performance Management) required deep analytics across heterogeneous, multi-vendor telecom systems to monitor network health, subscriber usage, and traffic behaviour at national scale. The challenge was handling high-volume, vendor-specific data formats while delivering unified KPIs for operations teams.",
    objectives: [
      "Consolidate data from PRS (Huawei), NetNumen, and ZTE platforms",
      "Normalize vendor-specific metrics into standardized KPIs",
      "Enable near real-time operational visibility",
      "Replace static reports with interactive visual analytics",
    ],
    tools: ["PRS (Huawei)", "NetNumen", "ZTE vendor systems", "SQL (large-scale aggregations)", "Python (data processing & visualization)", "Plotly (interactive dashboards)", "BI reporting tools"],
    contributions: [
      "Ingested and analyzed multi-vendor telecom datasets, handling schema differences and vendor-specific metric semantics",
      "Designed high-performance SQL transformations for traffic volume, subscriber usage, peak-hour analysis, and network health KPIs",
      "Built interactive Plotly dashboards enabling time-series traffic trend analysis, subscriber behaviour breakdowns, and vendor-wise KPI comparison",
      "Created reusable analytics layers to support recurring operational reporting",
      "Ensured cross-vendor KPI consistency, allowing leadership to compare performance objectively",
    ],
    outcomes: [
      "Unified visibility across multiple network vendors",
      "Reduced investigation time for performance issues",
      "Enabled faster root-cause analysis for NOC teams",
      "Eliminated dependence on static Excel/PDF reports",
      "Improved proactive monitoring and operational decision-making",
    ],
  },
  {
    id: "zain-iraq-automation",
    title: "Zain Iraq Automation",
    company: "Zain Iraq",
    url: "https://www.iq.zain.com/en/",
    tags: ["AWS", "Airflow", "NetAct", "SAP", "PRS", "Python"],
    overview: "Zain Iraq required automation across multiple telecom vendor platforms to replace manual, workforce-heavy reporting with reliable, scheduled data pipelines. The project aimed to centralize analytics across vendor and enterprise systems while improving accuracy and reporting frequency.",
    objectives: [
      "Automate telecom data ingestion and reporting",
      "Reduce operational dependency on manual processes",
      "Centralize analytics across vendor and enterprise systems",
      "Improve accuracy and reporting frequency",
    ],
    tools: ["NetAct", "SAP", "PRS", "AWS (EC2, S3, IAM, MWAA)", "Apache Airflow", "SQL", "Python"],
    contributions: [
      "Integrated NetAct, SAP, and PRS data sources into centralized pipelines",
      "Designed Airflow DAGs for scheduled ingestion, data validation, and KPI aggregation",
      "Leveraged AWS MWAA for scalable orchestration",
      "Replaced manual report preparation with fully automated workflows",
      "Standardized KPI logic across vendor systems to ensure reporting accuracy",
      "Implemented monitoring and retry logic to ensure pipeline reliability",
    ],
    outcomes: [
      "Major reduction in manual workforce dependency",
      "Faster reporting cycles (hours → automated schedules)",
      "Improved consistency and reliability of telecom KPIs",
      "Enabled scalable analytics without increasing headcount",
      "Increased trust in reporting across technical and business teams",
    ],
  },
  {
    id: "servicemarket-analytics",
    title: "ServiceMarket Analytics",
    company: "ServiceMarket",
    url: "https://servicemarket.com",
    tags: ["AWS Redshift", "AWS DMS", "Tableau", "Looker", "Adjust"],
    overview: "ServiceMarket operates a large on-demand services and e-commerce platform requiring near real-time analytics across transactional, operational, and marketing attribution data. The project focused on building a scalable Redshift-based analytics warehouse supporting marketing attribution alongside core business KPIs.",
    objectives: [
      "Build a scalable Redshift-based analytics warehouse",
      "Support marketing attribution alongside core business KPIs",
      "Enable low-latency dashboards for decision-makers",
    ],
    tools: ["AWS Redshift", "AWS DMS", "Amazon S3", "IAM", "CloudWatch", "Adjust (mobile attribution)", "Tableau", "Looker", "Advanced SQL", "Materialized Views"],
    contributions: [
      "Designed and maintained AWS DMS pipelines for near real-time replication",
      "Integrated Adjust attribution data with transactional datasets",
      "Modelled attribution metrics across installs, conversions, and revenue attribution",
      "Built materialized views optimized for BI performance",
      "Developed analytics for GMV & Revenue, marketing cohorts, cancellation and utilization metrics",
      "Diagnosed and resolved production issues (DMS failures, load errors, MV refreshes)",
      "Ensured schema evolution handling without breaking downstream dashboards",
    ],
    outcomes: [
      "Unified marketing + operational + financial analytics",
      "Accurate attribution insights for growth teams",
      "Faster dashboard performance in Tableau and Looker",
      "Reduced reporting latency and engineering intervention",
      "Established a trusted single source of truth",
    ],
  },
  {
    id: "terafort-gaming",
    title: "Terafort Gaming Analytics",
    company: "Terafort",
    url: "https://www.terafort.com/",
    tags: ["BigQuery", "Firebase", "GA4", "Singular", "Looker Studio", "GCP"],
    overview: "Terafort required full-funnel gaming analytics combining attribution, in-app behaviour, and retention metrics across multiple games. The project centralized marketing and product analytics to enable funnel analysis and retention cohorts for rapid experimentation and growth decisions.",
    objectives: [
      "Centralize marketing and product analytics",
      "Enable funnel analysis and retention cohorts",
      "Support rapid experimentation and growth decisions",
    ],
    tools: ["Singular", "Firebase Analytics", "GA4", "GCP (Cloud Run, BigQuery, GCS, IAM, Transfer Service)", "Fivetran", "Looker Studio", "SQL", "Python"],
    contributions: [
      "Integrated Singular + Firebase + GA4 into BigQuery",
      "Modelled event-level data into user funnels, retention cohorts, and attribution KPIs",
      "Designed funnel stages: Install → Signup, Signup → Purchase, in-app engagement milestones",
      "Built Looker Studio dashboards for acquisition efficiency, funnel drop-offs, and retention and monetization",
      "Created reusable SQL models supporting multiple games",
    ],
    outcomes: [
      "Clear visibility into player conversion bottlenecks",
      "Improved attribution-driven marketing decisions",
      "Faster iteration on product and campaign strategies",
      "Executive-ready dashboards with automated refresh",
    ],
  },
  {
    id: "biolabs-d2c",
    title: "Biolabs D2C Platform",
    company: "Scandinavian Biolabs",
    url: "https://scandinavianbiolabs.com/",
    tags: ["Shopify", "BigQuery", "Looker", "Fivetran", "Klaviyo", "GA4"],
    overview: "Biolabs required a full-funnel D2C analytics platform combining e-commerce, marketing, CRM, and lifecycle data. The project focused on measuring true customer lifetime value (LTV), optimizing acquisition spend using CPA & ROAS, and tracking cohort-based growth and retention.",
    objectives: [
      "Measure true customer lifetime value (LTV)",
      "Optimize acquisition spend using CPA & ROAS",
      "Track cohort-based growth and retention",
    ],
    tools: ["Shopify", "Facebook Ads", "Google Ads", "TikTok Ads", "Klaviyo", "GA4", "GCP (Cloud Run, BigQuery, GCS, IAM, Transfer Service)", "Fivetran", "Stitch", "Make", "Looker Studio", "Looker"],
    contributions: [
      "Unified Shopify + Ads + Klaviyo + GA4 into BigQuery",
      "Designed cohort-based LTV models",
      "Calculated CPA, ROAS, AOV, and conversion rates",
      "Built Looker dashboards for marketing performance, revenue cohorts, and lifecycle analysis",
      "Ensured consistent attribution logic across channels",
      "Enabled scalable multi-channel reporting",
    ],
    outcomes: [
      "Clear ROI visibility across paid channels",
      "Improved budget allocation efficiency",
      "Deep understanding of long-term customer value",
      "Scalable analytics foundation for D2C growth",
    ],
  },
  {
    id: "regeneron-enterprise",
    title: "Regeneron Enterprise",
    company: "Regeneron",
    url: "https://www.regeneron.com/",
    tags: ["Spark", "NiFi", "Airflow", "Redshift", "S3", "Enterprise"],
    overview: "Worked within a highly regulated pharmaceutical environment supporting analytics across multiple business units. The project focused on building compliant, scalable enterprise data pipelines while maintaining governance and audit readiness.",
    objectives: [
      "Build compliant, scalable enterprise data pipelines",
      "Support analytics across business units",
      "Maintain governance and audit readiness",
    ],
    tools: ["AWS Airflow", "Apache Spark", "Apache NiFi", "Amazon S3 (Data Lake)", "Amazon Redshift (Warehouse)"],
    contributions: [
      "Designed ingestion pipelines using NiFi and Airflow",
      "Processed large datasets using Spark",
      "Built S3-based data lake architecture",
      "Modeled curated, analytics-ready datasets in Redshift",
      "Supported analytics consumption across multiple BUs",
      "Followed strict governance, documentation, and compliance practices",
    ],
    outcomes: [
      "Enterprise-grade, scalable data platform",
      "Reliable analytics for regulated use cases",
      "Improved trust and data availability",
      "Strong alignment with compliance requirements",
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
