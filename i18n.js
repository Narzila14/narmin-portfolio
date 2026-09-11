// ============================================================
// i18n.js — shared translation data + engine, loaded on every page.
// Page-specific text (thesis.html, bulgaria.html) is added to
// window.I18N by that page's own translations file
// (thesis-i18n.js, bulgaria-i18n.js) before this file runs its
// init, so window.I18N is assembled additively per page.
// ============================================================

window.I18N = window.I18N || { en: {}, nl: {}, fr: {} };

Object.assign(window.I18N.en, {
  "nav.about": "About",
  "nav.projects": "Projects",
  "nav.experience": "Experience",
  "nav.education": "Education",
  "nav.skills": "Skills",
  "skip.content": "Skip to content",

  "hero.eyebrow": "Finance · Business Analysis · Data · Sustainability · Business Intelligence",
  "hero.title": "The bridge between the spreadsheet and the decision",
  "hero.lead": "Master's graduate in Business Administration, specialising in International and Sustainable Finance with a side track in Data Sciences at KU Leuven, with experience across financial analysis, reporting and business support. I enjoy working with data and AI tools, understanding what sits behind the numbers, and turning complex information into clear insights that support decision-making.",
  "hero.contact.email": "Email",
  "hero.contact.phone": "Phone",
  "hero.contact.linkedin": "LinkedIn",
  "hero.contact.location": "Location",
  "hero.location.value": "Brussels, Belgium",
  "hero.cta": "Download CV ↓",

  "projects.sectionTitle": "Projects →",
  "projects.intro": "A CV tells you what I did. Here's a look at how I think.",
  "projects.thesis.tag": "Master's Thesis",
  "projects.thesis.desc": "Analysed 66 listed Eurozone banks, with 64 non-Eurozone banks used as a comparison sample, using a fixed-effects panel regression on what actually pushed banks toward share buybacks once the ECB started tightening, with an interactive breakdown of every result.",
  "projects.bulgaria.tag": "Group Research Project",
  "projects.bulgaria.desc": "Logistic regression and factor analysis on 1,558 respondents from the 2017 European Values Study, testing whether life satisfaction, trust, age, education and gender predict who reports being happy.",
  "projects.readMore": "Read the full write-up →",

  "experience.sectionTitle": "Experience",
  "exp1.title": "Finance &amp; Administrative Intern",
  "exp1.meta": "Embassy of the Republic of Azerbaijan in Switzerland · Sep 2025–Dec 2025",
  "exp1.b1": "Maintained and updated Excel-based financial records supporting expense tracking, budget follow-up and internal reporting",
  "exp1.b2": "Verified financial information against invoices, receipts and supporting documentation, identifying missing or inconsistent information and following up where needed",
  "exp1.b3": "Organised financial data and documentation into clear, structured summaries for internal review",
  "exp1.b4": "Supported day-to-day finance and administrative activities while managing sensitive information accurately, independently and within deadlines",

  "exp2.title": "Marketing Intern & Student",
  "exp2.meta": "Belixys · Feb 2023–Sep 2023",
  "exp2.b1": "Supported the preparation of marketing and commercial materials, including product information, pricing documents and content used for campaigns and trade-show activities",
  "exp2.b2": "Conducted competitor and market research, comparing products, pricing and positioning to support commercial and marketing decisions",
  "exp2.b3": "Created and maintained structured product and pricing templates in Excel and Word, ensuring information was accurate, consistent and easy to use",
  "exp2.b4": "Assisted with planning for trade shows and promotional activities, including preparing budget estimates, organising cost information and supporting related administrative follow-up",
  "exp2.b5": "Helped manage expense and supporting documentation through the company's finance application",

  "exp3.title": "Human Resources Assistant",
  "exp3.meta": "StepStone · Jul 2022–Aug 2022",
  "exp3.b1": "Supported recruitment, onboarding and internal mobility processes for technical and business positions",
  "exp3.b2": "Maintained accurate candidate and employee information using Excel and SmartRecruiters, ensuring records and documentation remained organised and up to date",
  "exp3.b3": "Coordinated interviews, calendars and follow-up communication between candidates, hiring teams and internal stakeholders",
  "exp3.b4": "Assisted with onboarding and employee-transfer documentation while handling personal and recruitment information confidentially",

  "exp4.title": "Personal &amp; Administrative Assistant to the Ambassador",
  "exp4.meta": "Embassy of the Republic of Azerbaijan in Belgium · Jul 2018–Oct 2021",
  "exp4.b1": "Provided administrative and organisational support, managing correspondence, records and confidential documentation in an international diplomatic environment",
  "exp4.b2": "Coordinated meetings, appointments and communication with governmental, diplomatic and business stakeholders, acting as a reliable point of contact",
  "exp4.b3": "Prepared and organised documents, summaries and background information required for meetings, official activities and day-to-day office operations",
  "exp4.b4": "Managed multiple requests and competing priorities independently, ensuring information and documentation were prepared accurately and on time",
  "exp4.b5": "Supported official visits, events and general office coordination as required",

  "education.sectionTitle": "Education",
  "edu1.title": "Master of Business Administration (MSc) &ndash; Sustainable Finance",
  "edu1.meta": "Data Science for Finance side track · KU Leuven · Sep 2025 – Sep 2026",
  "edu1.b1": "Specialised in sustainable finance, banking, international finance and financial technology, complemented by applied data science for financial analysis",
  "edu1.b2": "<strong>Key coursework:</strong> Sustainable Finance, International Finance, Modern Banking and Financial Technology, Topics in Fintech, Data Science for Finance, Business Research Methods, and Ethics, Responsibility and Sustainability",
  "edu1.b3": "<strong>Master's thesis:</strong> Bank Payout Policy: Dividends versus Buybacks, using quantitative analysis to examine payout decisions across listed banks",

  "edu2.title": "Bridging Programme &ndash; Master of Business Administration",
  "edu2.meta": "KU Leuven · Sep 2023 – Sep 2025",
  "edu2.b1": "Strengthened my foundation in finance, economics, quantitative methods, reporting and business strategy in preparation for the MBA",
  "edu2.b2": "<strong>Key coursework:</strong> Corporate Finance, Internal and External Financial Reporting, Statistics for Business, Research Methods, Microeconomics, Macro- and International Economics, Mathematics for Business, Principles of Taxation, and Strategy and Entrepreneurship",
  "edu2.b3": "Developed stronger analytical and quantitative skills through financial decision-making, statistical analysis, economic reasoning and business research",

  "edu3.title": "Bachelor of Business Management &ndash; Specialisation in Marketing",
  "edu3.meta": "Odisee University of Applied Sciences · Feb 2020 – Sep 2023",
  "edu3.b1": "Built a broad foundation across business, finance, economics, marketing, statistics and organisational management",
  "edu3.b2": "<strong>Key coursework:</strong> Financial Business Management, Commercial Budgeting and Account Management, Micro- and Macroeconomics, Business Strategy, Statistics for Market Research, Market Research and Analysis, Project Management, Foreign Trade, and Commercial Law",
  "edu3.b3": "<strong>Bachelor thesis:</strong> Effective Marketing Strategies for Deployable Mobile Surveillance Solutions in the Belgian Market. Conducted qualitative interviews, a quantitative stakeholder survey, competitor analysis and desk research to develop market and communication recommendations for Belixys",

  "edu4.title":"Bachelor of Business Administration",
  "edu4.meta": "KU Leuven · Sep 2018 – Feb 2020",
  "edu4.b1": "Built an early foundation across business administration, financial accounting, economics, management, research methods, business mathematics and financial markets.",
  "edu4.b2": "<strong>Key coursework:</strong> Financial Institutions and Markets, Management, Financial Accounting, Mathematics for Business, Managerial Economics, Research Methods and Management Project.",

  "skills.sectionTitle": "Skills",
  "skills.finance": "Finance",
  "skills.analytics": "Analytics",
  "skills.methods": "Methods",
  "skills.business": "Business",
  "skills.finance.1": "Financial statement analysis",
  "skills.finance.2": "Budgeting/forecasting",
  "skills.finance.3": "Variance analysis",
  "skills.finance.4": "Financial reporting",
  "skills.analytics.2": "Power BI (learning)",
  "skills.analytics.3": "Python (fundamental)",
  "skills.analytics.4": "SQL (fundamental)",
  "skills.methods.1": "Regression",
  "skills.methods.2": "Panel-data analysis",
  "skills.methods.3": "Logistic regression",
  "skills.methods.4": "Factor analysis",
  "skills.methods.5": "Data visualisation",
  "skills.business.2": "Process modelling",
  "skills.business.3": "Requirements gathering",

  "footer.text": "Built by Narmin Musayeva.",
  "common.viewDetails": "View details &#9662;",
  "common.hideDetails": "Hide details &#9652;",
});

Object.assign(window.I18N.nl, {
  "nav.about": "Over mij",
  "nav.projects": "Projecten",
  "nav.experience": "Ervaring",
  "nav.education": "Opleiding",
  "nav.skills": "Vaardigheden",
  "skip.content": "Ga naar inhoud",

  "hero.eyebrow": "Finance · Bedrijfsanalyse · Data · Duurzaamheid · Business Intelligence",
  "hero.title": "De brug tussen het rekenblad en de beslissing",
  "hero.lead": "Masterafgestudeerde in Bedrijfskunde, met een specialisatie in Internationale en Duurzame Financiering en een neventraject in Data Science aan KU Leuven, met ervaring in financiële analyse, rapportering en bedrijfsondersteuning. Ik werk graag met data en AI-tools, doorgrond graag wat achter de cijfers schuilgaat, en vertaal complexe informatie naar heldere inzichten die besluitvorming ondersteunen.",
  "hero.contact.email": "E-mail",
  "hero.contact.phone": "Telefoon",
  "hero.contact.linkedin": "LinkedIn",
  "hero.contact.location": "Locatie",
  "hero.location.value": "Brussel, België",
  "hero.cta": "Download cv ↓",

  "projects.sectionTitle": "Projecten →",
  "projects.intro": "Een cv vertelt wat ik heb gedaan. Dit laat zien hoe ik denk.",
  "projects.thesis.tag": "Masterproef",
  "projects.thesis.desc": "Analyse van 66 beursgenoteerde eurozonebanken, met 64 niet-eurozonebanken als vergelijkingsgroep, via een fixed-effects panelregressie naar wat banken daadwerkelijk richting aandeleninkoop dreef zodra de ECB begon te verkrappen, met een interactief overzicht van elk resultaat.",
  "projects.bulgaria.tag": "Groepsonderzoeksproject",
  "projects.bulgaria.desc": "Logistische regressie en factoranalyse op 1.558 respondenten uit de European Values Study 2017, waarbij werd getoetst of levenstevredenheid, vertrouwen, leeftijd, opleiding en geslacht voorspellen wie zich gelukkig noemt.",
  "projects.readMore": "Lees de volledige uitwerking →",

  "experience.sectionTitle": "Ervaring",
  "exp1.title": "Financieel-administratief stagiair",
  "exp1.meta": "Ambassade van de Republiek Azerbeidzjan in Zwitserland · sep 2025–dec 2025",
  "exp1.b1": "Onderhield en actualiseerde Excel-gebaseerde financiële registraties ter ondersteuning van uitgavenopvolging, budgetopvolging en interne rapportering",
  "exp1.b2": "Verifieerde financiële informatie aan de hand van facturen, kwitanties en ondersteunende documentatie, en spoorde ontbrekende of inconsistente informatie op met de nodige opvolging",
  "exp1.b3": "Structureerde financiële gegevens en documentatie in heldere, overzichtelijke samenvattingen voor intern gebruik",
  "exp1.b4": "Ondersteunde dagelijkse financiële en administratieve activiteiten en beheerde daarbij gevoelige informatie nauwkeurig, zelfstandig en binnen deadlines",

  "exp2.title": "Marketingstagiair en Student",
  "exp2.meta": "Belixys · feb 2023–sep 2023",
  "exp2.b1": "Ondersteunde de voorbereiding van marketing- en commerciële materialen, waaronder productinformatie, prijsdocumenten en content voor campagnes en beursactiviteiten",
  "exp2.b2": "Voerde concurrentie- en marktonderzoek uit, met vergelijking van producten, prijszetting en positionering ter ondersteuning van commerciële en marketingbeslissingen",
  "exp2.b3": "Creëerde en onderhield gestructureerde product- en prijstemplates in Excel en Word, met aandacht voor nauwkeurigheid, consistentie en bruikbaarheid",
  "exp2.b4": "Assisteerde bij de planning van beursdeelnames en promotionele activiteiten, met inbegrip van budgetramingen, kostenoverzichten en bijhorende administratieve opvolging",
  "exp2.b5": "Hielp bij het beheer van onkosten en ondersteunende documentatie via de financiële applicatie van het bedrijf",

  "exp3.title": "HR-medewerker",
  "exp3.meta": "StepStone · jul 2022–aug 2022",
  "exp3.b1": "Ondersteunde werving, onboarding en interne mobiliteitsprocessen voor technische en business functies",
  "exp3.b2": "Hield kandidaat- en medewerkersinformatie nauwkeurig bij in Excel en SmartRecruiters, en zorgde dat dossiers en documentatie overzichtelijk en actueel bleven",
  "exp3.b3": "Coördineerde sollicitatiegesprekken, agenda's en opvolgcommunicatie tussen kandidaten, wervingsteams en interne stakeholders",
  "exp3.b4": "Assisteerde bij onboarding- en transferdocumentatie van medewerkers, met vertrouwelijke omgang met persoons- en wervingsgegevens",

  "exp4.title": "Persoonlijk en administratief assistent van de ambassadeur",
  "exp4.meta": "Ambassade van de Republiek Azerbeidzjan in België · jul 2018–oct 2021",
  "exp4.b1": "Bood administratieve en organisatorische ondersteuning, met beheer van correspondentie, dossiers en vertrouwelijke documentatie binnen een internationale diplomatieke omgeving",
  "exp4.b2": "Coördineerde vergaderingen, afspraken en communicatie met overheids-, diplomatieke en zakelijke stakeholders, als betrouwbaar aanspreekpunt",
  "exp4.b3": "Bereidde documenten, samenvattingen en achtergrondinformatie voor en organiseerde deze voor vergaderingen, officiële activiteiten en de dagelijkse kantoorwerking",
  "exp4.b4": "Beheerde zelfstandig meerdere verzoeken en tegenstrijdige prioriteiten, met accurate en tijdige voorbereiding van informatie en documentatie",
  "exp4.b5": "Ondersteunde officiële bezoeken, evenementen en algemene kantoorcoördinatie waar nodig",

  "education.sectionTitle": "Opleiding",
  "edu1.title": "Master of Business Administration (MSc) &ndash; Sustainable Finance",
  "edu1.meta": "Data Science for Finance side track · KU Leuven · sep 2025 – sep 2026",
  "edu1.b1": "Specialiseerde zich in sustainable finance, bankwezen, internationale financiën en financiële technologie, aangevuld met toegepaste data science voor financiële analyse",
  "edu1.b2": "<strong>Belangrijkste vakken:</strong> Sustainable Finance, International Finance, Modern Banking and Financial Technology, Topics in Fintech, Data Science for Finance, Business Research Methods, en Ethics, Responsibility and Sustainability",
  "edu1.b3": "<strong>Masterproef:</strong> Bank Payout Policy: Dividends versus Buybacks, met kwantitatieve analyse van uitkeringsbeslissingen bij beursgenoteerde banken",

  "edu2.title": "Schakelprogramma &ndash; Master of Business Administration",
  "edu2.meta": "KU Leuven · sep 2023 – sep 2025",
  "edu2.b1": "Versterkte mijn basis in finance, economie, kwantitatieve methoden, rapportering en bedrijfsstrategie ter voorbereiding op de MBA",
  "edu2.b2": "<strong>Belangrijkste vakken:</strong> Corporate Finance, Internal and External Financial Reporting, Statistics for Business, Research Methods, Microeconomics, Macro- and International Economics, Mathematics for Business, Principles of Taxation, en Strategy and Entrepreneurship",
  "edu2.b3": "Ontwikkelde sterkere analytische en kwantitatieve vaardigheden via financiële besluitvorming, statistische analyse, economische redenering en bedrijfsonderzoek",

  "edu3.title": "Bachelor Bedrijfsmanagement &ndash; Afstudeerrichting Marketing",
  "edu3.meta": "Odisee Hogeschool · feb 2020 – sep 2023",
  "edu3.b1": "Bouwde een brede basis op in business, finance, economie, marketing, statistiek en organisatiemanagement",
  "edu3.b2": "<strong>Belangrijkste vakken:</strong> Financial Business Management, Commercial Budgeting and Account Management, Micro- and Macroeconomics, Business Strategy, Statistics for Market Research, Market Research and Analysis, Project Management, Foreign Trade, en Commercial Law",
  "edu3.b3": "<strong>Bachelorproef:</strong> Effective Marketing Strategies for Deployable Mobile Surveillance Solutions in the Belgian Market. Voerde kwalitatieve interviews, een kwantitatieve stakeholdersurvey, concurrentieanalyse en deskresearch uit om markt- en communicatieaanbevelingen te ontwikkelen voor Belixys",

  "edu4.title": "Bachelor of Business Administration",
  "edu4.meta": "KU Leuven · Sep 2018 – Feb 2020",
  "edu4.b1": "Een eerste brede basis opgebouwd in bedrijfsadministratie, financiële boekhouding, economie, management, onderzoeksmethoden, bedrijfskunde-wiskunde en financiële markten.",
  "edu4.b2": "<strong>Belangrijkste vakken:</strong> Financiële Instellingen en Markten, Management, Financiële Boekhouding, Wiskunde voor Bedrijfskunde, Managerial Economics, Onderzoeksmethoden en Managementproject.",

  "skills.sectionTitle": "Vaardigheden",
  "skills.finance": "Financiën",
  "skills.analytics": "Data-analyse",
  "skills.methods": "Methoden",
  "skills.business": "Bedrijfsprocessen",
  "skills.finance.1": "Analyse van jaarrekeningen",
  "skills.finance.2": "Budgettering/prognoses",
  "skills.finance.3": "Variantieanalyse",
  "skills.finance.4": "Financiële rapportering",
  "skills.analytics.2": "Power BI (in ontwikkeling)",
  "skills.analytics.3": "Python (basis)",
  "skills.analytics.4": "SQL (basis)",
  "skills.methods.1": "Regressie",
  "skills.methods.2": "Panel-data-analyse",
  "skills.methods.3": "Logistische regressie",
  "skills.methods.4": "Factoranalyse",
  "skills.methods.5": "Datavisualisatie",
  "skills.business.2": "Procesmodellering",
  "skills.business.3": "Requirementsanalyse",

  "footer.text": "Gebouwd door Narmin Musayeva.",
  "common.viewDetails": "Bekijk details &#9662;",
  "common.hideDetails": "Verberg details &#9652;",
});

Object.assign(window.I18N.fr, {
  "nav.about": "À propos",
  "nav.projects": "Projets",
  "nav.experience": "Expérience",
  "nav.education": "Formation",
  "nav.skills": "Compétences",
  "skip.content": "Aller au contenu",

  "hero.eyebrow": "Finance · Analyse d'affaires · Données · Durabilité · Business Intelligence",
  "hero.title": "Catalyseur pour transformer vos outils en les décisions",
  "hero.lead": "Diplômée d’un master en gestion d’entreprise, avec une spécialisation en finance internationale et durable et un parcours complémentaire en data science à la KU Leuven. J'ai acquis une expérience avec analyse financière, reporting et support aux activités d’entreprise. Passionnée par l'exploitation de l'intelligence artificielle (IA) et de la data, je transforme la complexité des données et des outils en leviers décisionnels clairs.",
  "hero.contact.email": "E-mail",
  "hero.contact.phone": "Téléphone",
  "hero.contact.linkedin": "LinkedIn",
  "hero.contact.location": "Localisation",
  "hero.location.value": "Bruxelles, Belgique",
  "hero.cta": "Télécharger le CV ↓",

  "projects.sectionTitle": "Projets →",
  "projects.intro": "Un CV dit ce que j'ai fait. Voici un aperçu de ma façon de penser.",
  "projects.thesis.tag": "Mémoire de master",
  "projects.thesis.desc": "Analyse de 66 banques cotées de la zone euro, avec 64 banques hors zone euro comme échantillon de comparaison, à l'aide d'une régression à effets fixes sur ce qui a réellement poussé les banques vers les rachats d'actions dès le début du resserrement monétaire de la BCE, avec une présentation interactive de chaque résultat.",
  "projects.bulgaria.tag": "Projet de recherche de groupe",
  "projects.bulgaria.desc": "Régression logistique et analyse factorielle sur 1 558 répondants de l'European Values Study 2017, testant si la satisfaction de vie, la confiance, l'âge, le niveau d'éducation et le genre permettent de prédire qui se déclare heureux.",
  "projects.readMore": "Lire l'analyse complète →",

  "experience.sectionTitle": "Expérience",
  "exp1.title": "Stagiaire finance et administration",
  "exp1.meta": "Ambassade de la République d'Azerbaïdjan en Suisse · sept. 2025–déc. 2025",
  "exp1.b1": "Tenue et mise à jour de registres financiers sous Excel pour le suivi des dépenses, le suivi budgétaire et le reporting interne",
  "exp1.b2": "Vérification des informations financières par rapport aux factures, reçus et pièces justificatives, en identifiant les informations manquantes ou incohérentes et en assurant le suivi nécessaire",
  "exp1.b3": "Organisation des données et documents financiers en synthèses claires et structurées pour la revue interne",
  "exp1.b4": "Soutien aux activités financières et administratives quotidiennes tout en gérant des informations sensibles avec précision, de manière autonome et dans les délais",

  "exp2.title": "Stagiaire marketing et étudiante",
  "exp2.meta": "Belixys · févr. 2023–sept. 2023",
  "exp2.b1": "Participation à la préparation de supports marketing et commerciaux, notamment fiches produits, documents tarifaires et contenus pour campagnes et salons professionnels",
  "exp2.b2": "Réalisation d'études concurrentielles et de marché, comparant produits, prix et positionnement pour appuyer les décisions commerciales et marketing",
  "exp2.b3": "Création et maintenance de modèles structurés de produits et de tarifs sous Excel et Word, garantissant des informations exactes, cohérentes et faciles à utiliser",
  "exp2.b4": "Assistance à la planification de salons professionnels et d'activités promotionnelles, incluant l'estimation des budgets, l'organisation des informations de coûts et le suivi administratif associé",
  "exp2.b5": "Aide à la gestion des notes de frais et des pièces justificatives via l'application financière de l'entreprise",

  "exp3.title": "Assistante Ressources Humaines",
  "exp3.meta": "StepStone · juill. 2022–août 2022",
  "exp3.b1": "Soutien aux processus de recrutement, d'intégration et de mobilité interne pour des postes techniques et commerciaux",
  "exp3.b2": "Mise à jour précise des informations sur les candidats et les employés via Excel et SmartRecruiters, garantissant des dossiers organisés et à jour",
  "exp3.b3": "Coordination des entretiens, des agendas et des communications de suivi entre candidats, équipes de recrutement et parties prenantes internes",
  "exp3.b4": "Assistance pour la documentation d'intégration et de mutation des employés, en traitant les informations personnelles et de recrutement de manière confidentielle",

  "exp4.title": "Assistante personnelle et administrative de l'Ambassadeur",
  "exp4.meta": "Ambassade de la République d'Azerbaïdjan en Belgique · juil. 2018–oct. 2021",
  "exp4.b1": "Soutien administratif et organisationnel, gestion de la correspondance, des dossiers et des documents confidentiels dans un environnement diplomatique international",
  "exp4.b2": "Coordination des réunions, rendez-vous et communications avec des interlocuteurs gouvernementaux, diplomatiques et commerciaux, en tant que point de contact fiable",
  "exp4.b3": "Préparation et organisation de documents, synthèses et informations de contexte nécessaires aux réunions, activités officielles et au fonctionnement quotidien du bureau",
  "exp4.b4": "Gestion autonome de demandes multiples et de priorités concurrentes, garantissant une préparation précise et ponctuelle des informations et documents",
  "exp4.b5": "Soutien aux visites officielles, événements et à la coordination générale du bureau selon les besoins",

  "education.sectionTitle": "Formation",
  "edu1.title": "Master of Business Administration (MSc) &ndash; Sustainable Finance",
  "edu1.meta": "Data Science for Finance side track · KU Leuven · sep. 2025 – sep.  2026",
  "edu1.b1": "Spécialisation en finance durable, banque, finance internationale et technologie financière, complétée par la data science appliquée à l'analyse financière",
  "edu1.b2": "<strong>Cours principaux :</strong> Sustainable Finance, International Finance, Modern Banking and Financial Technology, Topics in Fintech, Data Science for Finance, Business Research Methods, et Ethics, Responsibility and Sustainability",
  "edu1.b3": "<strong>Mémoire de master :</strong> Bank Payout Policy: Dividends versus Buybacks, une analyse quantitative des décisions de distribution au sein de banques cotées",

  "edu2.title": "Programme passerelle &ndash; Master of Business Administration",
  "edu2.meta": "KU Leuven · sep. 2023 – sep. 2025",
  "edu2.b1": "Renforcement des bases en finance, économie, méthodes quantitatives, reporting et stratégie d'entreprise en préparation du MBA",
  "edu2.b2": "<strong>Cours principaux :</strong> Corporate Finance, Internal and External Financial Reporting, Statistics for Business, Research Methods, Microeconomics, Macro- and International Economics, Mathematics for Business, Principles of Taxation, et Strategy and Entrepreneurship",
  "edu2.b3": "Développement de compétences analytiques et quantitatives à travers la prise de décision financière, l'analyse statistique, le raisonnement économique et la recherche en gestion",

  "edu3.title": "Bachelier en Gestion d'entreprise &ndash; Spécialisation Marketing",
  "edu3.meta": "Haute École Odisee · févr. 2020 – sept. 2023",
  "edu3.b1": "Construction d'une base solide en gestion d'entreprise, finance, économie, marketing, statistiques et management organisationnel",
  "edu3.b2": "<strong>Cours principaux :</strong> Financial Business Management, Commercial Budgeting and Account Management, Micro- and Macroeconomics, Business Strategy, Statistics for Market Research, Market Research and Analysis, Project Management, Foreign Trade, et Commercial Law",
  "edu3.b3": "<strong>Mémoire de bachelier :</strong> Effective Marketing Strategies for Deployable Mobile Surveillance Solutions in the Belgian Market. Réalisation d'entretiens qualitatifs, d'une enquête quantitative auprès des parties prenantes, d'une analyse concurrentielle et de recherches documentaires afin de développer des recommandations marketing et de communication pour Belixys",

  "edu4.title": "Bachelor of Business Administration",
  "edu4.meta": "KU Leuven · sept. 2018 – févr. 2020",
  "edu4.b1": "A acquis une première base solide en administration des affaires, comptabilité financière, économie, gestion, méthodes de recherche, mathématiques appliquées à l’entreprise et marchés financiers.",
  "edu4.b2": "<strong>Cours principaux :</strong> Institutions et marchés financiers, Management, Comptabilité financière, Mathématiques pour l’entreprise, Économie managériale, Méthodes de recherche et Projet de management.",

  "skills.sectionTitle": "Compétences",
  "skills.finance": "Finance",
  "skills.analytics": "Analyse de données",
  "skills.methods": "Méthodes",
  "skills.business": "Gestion d'entreprise",
  "skills.finance.1": "Analyse des états financiers",
  "skills.finance.2": "Budgétisation/prévisions",
  "skills.finance.3": "Analyse des écarts",
  "skills.finance.4": "Reporting financier",
  "skills.analytics.2": "Power BI (en cours d'apprentissage)",
  "skills.analytics.3": "Python (bases)",
  "skills.analytics.4": "SQL (bases)",
  "skills.methods.1": "Régression",
  "skills.methods.2": "Analyse de données de panel",
  "skills.methods.3": "Régression logistique",
  "skills.methods.4": "Analyse factorielle",
  "skills.methods.5": "Visualisation de données",
  "skills.business.2": "Modélisation des processus",
  "skills.business.3": "Recueil des besoins",

  "footer.text": "Créé par Narmin Musayeva.",
  "common.viewDetails": "Voir les détails &#9662;",
  "common.hideDetails": "Masquer les détails &#9652;",
});

// ============================================================
// Engine: applies translations, persists choice, re-runs on switch
// ============================================================
(function () {
  function getLang() {
    return localStorage.getItem("lang") || "en";
  }

  function applyTranslations(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const dict = window.I18N[lang] || window.I18N.en;
      const text = dict[key] !== undefined ? dict[key] : window.I18N.en[key];
      if (text !== undefined) {
        el.innerHTML = text;
      }
    });
    document.documentElement.lang = lang;
    document.querySelectorAll(".lang-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });

    const langCurrent = document.querySelector(".lang-current");
    if (langCurrent) {
      langCurrent.textContent = `${lang.toUpperCase()} ▾`;
    }

    localStorage.setItem("lang", lang);
    document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
  }

  window.currentLang = getLang();
  window.t = function (key) {
    const dict = window.I18N[window.currentLang] || window.I18N.en;
    return dict[key] !== undefined ? dict[key] : window.I18N.en[key];
  };

  document.addEventListener("DOMContentLoaded", () => {
    applyTranslations(window.currentLang);
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        window.currentLang = btn.dataset.lang;
        applyTranslations(window.currentLang);
      });
    });
  });
})();
