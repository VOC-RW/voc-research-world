const VOC_AUTHORS = {
  voc: {
    id: "voc",
    name: "VOC Research World Editorial Team",
    role: "Scientific Education & Research Communication",
    initials: "VOC",
    bio: "The editorial team develops accessible scientific learning resources, research explainers and laboratory-focused content. Individual authors will be added as the platform grows.",
    interests: ["Scientific literacy", "Biochemistry", "Laboratory science", "Research communication"]
  },
  adekunle: {
    id: "adekunle",
    name: "VOC Research Contributor",
    role: "Biochemistry & Laboratory Science",
    initials: "VR",
    bio: "A developing scientific contributor focused on connecting university-level biochemistry and laboratory technology with practical analytical thinking, instrumentation and data.",
    interests: ["Biochemistry", "Instrumentation", "Analytical science", "Data & AI"]
  }
};

const VOC_ARTICLES = {
  metabolism: {
    id: "metabolism",
    title: "Understanding Metabolic Regulation",
    category: "Biochemistry",
    type: "Explainer",
    authorId: "adekunle",
    date: "2026-09-17",
    readTime: "8 min read",
    summary: "A structured introduction to how cells coordinate metabolic pathways through enzymes, feedback, hormones and energy status.",
    keywords: ["metabolism", "enzymes", "feedback inhibition", "insulin", "glucagon"],
    body: [
      ["h2","Why regulation matters"],
      ["p","Metabolic pathways are not independent reactions operating at a constant rate. Cells continuously adjust pathway flux according to nutrient availability, energy demand and hormonal signals. Regulation therefore allows a cell to conserve resources while still responding rapidly to changing conditions."],
      ["h2","Three levels of control"],
      ["p","A pathway can be controlled through rapid changes in enzyme activity, changes in enzyme abundance, and changes in substrate or product availability. Allosteric regulation can alter an enzyme within seconds, whereas altered gene expression can change the amount of enzyme over a longer period."],
      ["h2","Feedback inhibition"],
      ["p","In feedback inhibition, a downstream product decreases the activity of an earlier enzyme in the same pathway. This prevents unnecessary accumulation of product and reduces waste of substrates and cellular energy."],
      ["h2","Hormonal coordination"],
      ["p","In mammals, insulin and glucagon help coordinate metabolism across tissues. In broad terms, insulin signalling is associated with the fed state, whereas glucagon signalling becomes important during fasting. The exact response depends on tissue, pathway and cellular context."],
      ["h2","Research perspective"],
      ["p","A useful way to study regulation is to ask four questions: What signal changes? Which molecular target detects it? What enzyme or pathway changes? What measurable outcome follows? This converts a memorized pathway into an experimentally testable model."]
    ],
    references: [
      "Nelson DL, Cox MM. Lehninger Principles of Biochemistry. W.H. Freeman.",
      "Berg JM, Tymoczko JL, Gatto GJ, Stryer L. Biochemistry. W.H. Freeman."
    ]
  },
  uvvis: {
    id: "uvvis",
    title: "UV–Visible Spectrophotometry",
    category: "Instrumentation",
    type: "Technical Note",
    authorId: "voc",
    date: "2026-09-17",
    readTime: "7 min read",
    summary: "How a UV–Vis spectrophotometer converts light absorption into an analytical measurement.",
    keywords: ["UV-Vis", "Beer-Lambert law", "absorbance", "calibration"],
    diagram: "uvvis",
    body: [
      ["h2","What is being measured?"],
      ["p","UV–Visible spectrophotometry measures how strongly a sample absorbs electromagnetic radiation at selected wavelengths. The instrument compares the intensity of transmitted light with the incident light and reports the result as absorbance or transmittance."],
      ["h2","Beer–Lambert relationship"],
      ["p","For an ideal system, absorbance is related to concentration by A = εbc, where A is absorbance, ε is molar absorptivity, b is optical path length and c is concentration. Real measurements can deviate from ideal behaviour because of chemical and instrumental effects."],
      ["h2","A defensible workflow"],
      ["p","A good analytical workflow includes appropriate blank correction, wavelength selection, standards, replicate measurements and inspection of the calibration relationship. Unknown samples should be measured within the validated working range rather than extrapolated without justification."],
      ["h2","What the instrument cannot tell you automatically"],
      ["p","An absorbance value alone does not prove the identity of a compound. Selectivity depends on wavelength choice, matrix effects and possible overlap from other absorbing species. Analytical interpretation therefore requires knowledge of the sample and method."]
    ],
    references: [
      "Skoog DA, Holler FJ, Crouch SR. Principles of Instrumental Analysis.",
      "Harris DC. Quantitative Chemical Analysis."
    ]
  },
  data: {
    id: "data",
    title: "From Laboratory Data to Insight",
    category: "Data & AI",
    type: "Research Methods",
    authorId: "voc",
    date: "2026-09-17",
    readTime: "6 min read",
    summary: "A practical framework for turning raw laboratory measurements into traceable, interpretable scientific evidence.",
    keywords: ["laboratory data", "quality control", "visualization", "AI"],
    body: [
      ["h2","Raw data are not yet evidence"],
      ["p","A spreadsheet full of numbers is only the beginning. Scientific interpretation requires metadata, units, sample identifiers, instrument conditions, quality checks and a documented analysis process."],
      ["h2","A simple analytical pipeline"],
      ["p","Start by preserving the raw dataset. Then perform validation, cleaning, descriptive statistics, visualization and appropriate inferential analysis. Every transformation should be traceable so that another researcher can understand how the reported result was obtained."],
      ["h2","Where AI fits"],
      ["p","Machine-learning tools can help with classification, anomaly detection, pattern recognition and prediction. They do not remove the need for experimental design, quality control or domain expertise. A model can learn a systematic error as easily as it can learn a useful pattern."],
      ["h2","The VOC principle"],
      ["p","A useful laboratory data system should make the chain visible: sample → measurement → quality check → analysis → interpretation → conclusion."]
    ],
    references: [
      "National Academies of Sciences, Engineering, and Medicine. Reproducibility and Replicability in Science.",
      "Hastie T, Tibshirani R, Friedman J. The Elements of Statistical Learning."
    ]
  }
};

const VOC_PROJECTS = {
  natural: {
    id: "natural",
    title: "Natural Products: From Local Plant Resources to Analytical Evidence",
    status: "Concept / Future Study",
    area: "Natural Products",
    lead: "VOC Research World",
    summary: "A proposed research direction for documenting local biological resources, preparing samples responsibly, characterizing chemical profiles and evaluating evidence.",
    objectives: [
      "Create a structured inventory of candidate plant materials.",
      "Document extraction and sample-preparation methods.",
      "Apply appropriate analytical techniques to characterize extracts.",
      "Separate traditional claims from experimentally testable hypotheses.",
      "Build reproducible datasets for future comparative studies."
    ],
    methods: ["Literature review", "Sample documentation", "Extraction", "Chromatography", "Spectroscopy", "Data analysis"],
    outputs: ["Research protocols", "Dataset", "Technical report", "Future publication"]
  },
  {
    id: "instrument",
    title: "Accessible Analytical Instrumentation",
    status: "Concept / Development",
    area: "Instrumentation",
    lead: "VOC Research World",
    summary: "A platform-level research direction exploring how low-cost measurement systems, calibration practice and data workflows can support laboratory learning and field applications.",
    objectives: [
      "Map common analytical measurement problems.",
      "Study low-cost sensing and measurement approaches.",
      "Develop calibration and validation workflows.",
      "Compare measurements against reference methods where appropriate.",
      "Document uncertainty, limitations and reproducibility."
    ],
    methods: ["Sensor development", "Calibration", "Validation", "Signal processing", "Data visualization"],
    outputs: ["Prototype designs", "Calibration datasets", "Open technical notes", "Research reports"]
  }
};
