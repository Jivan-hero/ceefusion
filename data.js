/**
 * EduPeak CEE/NEET Preparation Platform - Global Seed Data
 * Maps the complete 84-chapter CEE syllabus nested under subjects and category divisions.
 * Schema structure: eduPeakData[subject][category][chapterKey] = { name, formulas, quiz }
 */

window.eduPeakData = {
  physics: {
    mechanics: {
      units: {
        name: "Units, Dimensions, & Vectors",
        formulas: ["Dimension of G = [M^-1 L^3 T^-2]", "A . B = AB cos(θ)", "A x B = AB sin(θ) n_hat"],
        quiz: []
      },
      kinematics: {
        name: "Kinematics",
        formulas: ["v = u + at", "s = ut + 0.5at^2", "v^2 = u^2 + 2as"],
        quiz: []
      },
      projectile: {
        name: "Projectile & Circular Motion",
        formulas: ["Range = u^2 sin(2θ) / g", "T = 2u sin(θ) / g", "a_c = v^2 / r"],
        quiz: []
      },
      newton: {
        name: "Newton’s Laws of Motion",
        formulas: ["F = dp/dt = ma", "f_k = μ_k * N", "p = mv"],
        quiz: []
      },
      work: {
        name: "Work, Energy, & Power",
        formulas: ["W = F . d", "KE = 0.5mv^2", "P = dW/dt = F . v"],
        quiz: []
      },
      rotational: {
        name: "Rotational Motion",
        formulas: ["τ = I * α", "L = I * ω", "KE_rot = 0.5 * I * ω^2"],
        quiz: []
      },
      gravitation: {
        name: "Gravitation",
        formulas: ["F = G * M * m / r^2", "g = G * M / R^2", "v_escape = sqrt(2GM/R)"],
        quiz: []
      }
    },
    thermodynamics: {
      solids: {
        name: "Solids & Fluids",
        formulas: ["Young's Modulus Y = (F/A) / (ΔL/L)", "Pressure P = ρgh", "Continuity Equation A1 * v1 = A2 * v2"],
        quiz: []
      },
      thermal: {
        name: "Thermal Properties",
        formulas: ["ΔQ = mcΔT", "L = Q/m", "Thermal Expansion ΔL = L_0 * α * ΔT"],
        quiz: []
      },
      thermodynamics: {
        name: "Thermodynamics (Laws & Heat Engines)",
        formulas: ["dQ = dU + dW", "W = PΔV", "Efficiency η = 1 - T_c / T_h"],
        quiz: []
      },
      kinetic: {
        name: "Kinetic Theory of Gases",
        formulas: ["PV = nRT", "v_rms = sqrt(3RT/M)", "KE_avg = 1.5 * k_B * T"],
        quiz: []
      }
    },
    waves: {
      shm: {
        name: "Simple Harmonic Motion (SHM)",
        formulas: ["x(t) = A sin(ωt + φ)", "v = ω * sqrt(A^2 - x^2)", "T = 2π * sqrt(m/k)"],
        quiz: []
      },
      sound: {
        name: "Wave Motion and Sound",
        formulas: ["v = f * λ", "v_sound = sqrt(γRT/M)", "Doppler Effect f' = f * (v ± v_o) / (v ∓ v_s)"],
        quiz: []
      }
    },
    electromagnetism: {
      electrostatics: {
        name: "Electrostatics",
        formulas: ["F = k * q1 * q2 / r^2", "E = k * q / r^2", "Gauss's Law Φ = Q_enclosed / ε_0"],
        quiz: []
      },
      potential: {
        name: "Potential & Capacitance",
        formulas: ["V = k * q / r", "C = Q/V", "U = 0.5 * C * V^2"],
        quiz: []
      },
      current: {
        name: "Current Electricity",
        formulas: ["V = I * R", "R = ρ * L / A", "P = I^2 * R = V^2 / R"],
        quiz: []
      },
      magnetism: {
        name: "Moving Charges & Magnetism",
        formulas: ["F_magnetic = q(v x B)", "B = μ_0 * I / (2πr)", "B_solenoid = μ_0 * n * I"],
        quiz: []
      },
      emi: {
        name: "Electromagnetic Induction (EMI)",
        formulas: ["EMF = -dΦ/dt", "Φ_magnetic = B . A", "Self Induced EMF = -L * dI/dt"],
        quiz: []
      },
      ac: {
        name: "Alternating Current (AC)",
        formulas: ["Z = sqrt(R^2 + (X_L - X_C)^2)", "Power P_avg = V_rms * I_rms * cos(φ)", "f_resonance = 1 / (2π * sqrt(LC))"],
        quiz: []
      },
      em_waves: {
        name: "EM Waves",
        formulas: ["c = E_0 / B_0 = 1 / sqrt(μ_0 * ε_0)", "Energy density u = ε_0 * E^2"],
        quiz: []
      }
    },
    optics: {
      ray: {
        name: "Ray Optics & Optical Instruments",
        formulas: ["1/f = 1/v + 1/u", "Refractive Index n = c/v", "Lens Maker's Formula 1/f = (n - 1)(1/R1 - 1/R2)"],
        quiz: []
      },
      wave: {
        name: "Wave Optics",
        formulas: ["Fringe Width w = D * λ / d", "Brewster's Law n = tan(i_p)", "Path Difference Δx = d sin(θ)"],
        quiz: []
      }
    },
    modern_physics: {
      dual_nature: {
        name: "Dual Nature of Matter",
        formulas: ["E = h * f", " Einstein Photoelectric K_max = hf - φ_0", "λ_deBroglie = h / p"],
        quiz: []
      },
      atoms: {
        name: "Atoms and Nuclei",
        formulas: ["R = R_0 * A^(1/3)", "Half Life T_half = ln(2) / λ", "E = Δm * c^2"],
        quiz: []
      },
      semiconductors: {
        name: "Semiconductor Electronics",
        formulas: ["Conductivity σ = e * (n_e * μ_e + n_h * μ_h)", "Diode Equation I = I_0 * (e^(eV/ηkT) - 1)"],
        quiz: []
      }
    }
  },
  chemistry: {
    physical: {
      mole: {
        name: "Mole Concept",
        formulas: ["Moles = Mass / Molar_Mass", "Molarity = Moles / Volume(L)", "Normality = Equivalents / Volume(L)"],
        quiz: []
      },
      atom: {
        name: "Structure of Atom",
        formulas: ["E_n = -13.6 / n^2 eV", "λ = h / mv", "Uncertainty Principle Δx * Δp >= h / 4π"],
        quiz: []
      },
      states: {
        name: "States of Matter",
        formulas: ["PV = nRT", "Graham's Law r1/r2 = sqrt(M2/M1)", "Van der Waals (P + an^2/V^2)(V - nb) = nRT"],
        quiz: []
      },
      thermodynamics: {
        name: "Chemical Thermodynamics",
        formulas: ["ΔH = ΔU + PΔV", "ΔG = ΔH - TΔS", "Entropy ΔS = q_rev / T"],
        quiz: []
      },
      equilibrium: {
        name: "Chemical & Ionic Equilibrium",
        formulas: ["K_p = K_c(RT)^Δn", "pH = -log[H+]", "Henderson pH = pKa + log([Salt]/[Acid])"],
        quiz: []
      },
      redox: {
        name: "Redox Reactions",
        formulas: ["Oxidation Number balance", "E_cell = E_cathode - E_anode"],
        quiz: []
      },
      electrochemistry: {
        name: "Electrochemistry",
        formulas: ["Nernst Equation E = E_0 - (0.0591/n)*log(Q)", "Faraday's Law W = Z * I * t"],
        quiz: []
      },
      kinetics: {
        name: "Chemical Kinetics",
        formulas: ["Rate = k[A]^x [B]^y", "Arrhenius Equation k = A * e^(-E_a / RT)", "First Order t_half = 0.693 / k"],
        quiz: []
      },
      surface: {
        name: "Surface Chemistry",
        formulas: ["Freundlich Adsorption x/m = k * P^(1/n)"],
        quiz: []
      }
    },
    inorganic: {
      periodicity: {
        name: "Periodicity",
        formulas: ["Z_effective = Z - S", "Electronegativity = (IE + EA) / 5.6"],
        quiz: []
      },
      bonding: {
        name: "Chemical Bonding & Molecular Structure",
        formulas: ["Bond Order = 0.5 * (N_b - N_a)", "Formal Charge = V - L - 0.5*B"],
        quiz: []
      },
      s_block: {
        name: "s-Block Elements",
        formulas: ["Hydration Energy ∝ 1/Radius", "Thermal Stability of Carbonates increases down the group"],
        quiz: []
      },
      p_block: {
        name: "p-Block Elements",
        formulas: ["Inert Pair Effect stability increases down the group", "Acidic strength: HF < HCl < HBr < HI"],
        quiz: []
      },
      d_f_block: {
        name: "d- and f-Block Elements",
        formulas: ["Magnetic Moment μ = sqrt(n(n+2)) BM", "Lanthanoid Contraction causes size similarity in 4d & 5d"],
        quiz: []
      },
      coordination: {
        name: "Coordination Compounds",
        formulas: ["CFSE = -0.4 * t2g * Δo + 0.6 * eg * Δo", "Effective Atomic Number EAN = Z - ON + 2 * CN"],
        quiz: []
      }
    },
    organic: {
      principles: {
        name: "Basic Principles & Techniques",
        formulas: ["Inductive, Resonance, and Electromeric Effects", "Carbocation stability: 3° > 2° > 1° > Methyl"],
        quiz: []
      },
      hydrocarbons: {
        name: "Hydrocarbons",
        formulas: ["Wurtz Reaction: 2R-X + 2Na -> R-R + 2NaX", "Markovnikov's addition rules"],
        quiz: []
      },
      haloalkanes: {
        name: "Haloalkanes & Haloarenes",
        formulas: ["SN1 rate ∝ [Substrate]", "SN2 rate ∝ [Substrate][Nucleophile]"],
        quiz: []
      },
      alcohols: {
        name: "Alcohols, Phenols, & Ethers",
        formulas: ["Lucas Test: 3° Alcohols react instantly", "Phenol acidity due to resonance stabilization"],
        quiz: []
      },
      carbonyls: {
        name: "Aldehydes, Ketones, & Carboxylic Acids",
        formulas: ["Aldol Condensation: α-hydrogen requirement", "Cannizzaro Reaction: no α-hydrogen"],
        quiz: []
      },
      amines: {
        name: "Amines",
        formulas: ["Hinsberg Test: separates 1°, 2°, 3° Amines", "Basicity: aliphatic > ammonia > aromatic amines"],
        quiz: []
      },
      biomolecules: {
        name: "Biomolecules",
        formulas: ["Isoelectric point of amino acids pH_I = (pKa1 + pKa2)/2"],
        quiz: []
      },
      polymers: {
        name: "Polymers & Everyday Chemistry",
        formulas: ["Monomer units identification", "Thermosetting vs Thermoplastic polymers"],
        quiz: []
      }
    }
  },
  biology: {
    diversity_structure: {
      classification: {
        name: "Biological Classification",
        formulas: ["Five Kingdom Classification (Monera, Protista, Fungi, Plantae, Animalia)"],
        quiz: []
      },
      plant_kingdom: {
        name: "Plant Kingdom",
        formulas: ["Alternation of Generations: Gametophyte (n) to Sporophyte (2n)"],
        quiz: []
      },
      animal_kingdom: {
        name: "Animal Kingdom",
        formulas: ["Symmetry: Bilateral vs Radial", "Coelom: Acoelomate, Pseudocoelomate, Coelomate"],
        quiz: []
      },
      morphology: {
        name: "Morphology & Anatomy of Flowering Plants",
        formulas: ["Root, Stem, Leaf modifications", "Xylem vs Phloem cell structure"],
        quiz: []
      },
      organization: {
        name: "Structural Organisation in Animals",
        formulas: ["Epithelial, Connective, Muscular, and Nervous tissues"],
        quiz: []
      }
    },
    cell_biology: {
      cell_life: {
        name: "Cell: The Unit of Life",
        formulas: ["Cell Theory: Schleiden, Schwann, and Virchow", "Prokaryotic vs Eukaryotic organelles"],
        quiz: []
      },
      biomolecules: {
        name: "Biomolecules (Enzymes, Lipids, Proteins)",
        formulas: ["Michaelis constant K_m", "Enzyme inhibition: Competitive vs Non-competitive"],
        quiz: []
      },
      cell_cycle: {
        name: "Cell Cycle & Division",
        formulas: ["Mitosis: Prophase, Metaphase, Anaphase, Telophase", "Meiosis: Crossing over at Pachytene of Prophase I"],
        quiz: []
      }
    },
    plant_physiology: {
      transport: {
        name: "Transport & Mineral Nutrition",
        formulas: ["Water Potential Ψ_w = Ψ_s + Ψ_p", "Essential macronutrients and micronutrients"],
        quiz: []
      },
      photosynthesis: {
        name: "Photosynthesis",
        formulas: ["6CO2 + 6H2O -> C6H12O6 + 6O2", "Z-scheme of light reaction", "Calvin Cycle phases"],
        quiz: []
      },
      respiration: {
        name: "Respiration",
        formulas: ["Glycolysis yields 2 Pyruvate + 2 ATP + 2 NADH", "Krebs Cycle ATP yield per glucose = 36-38 ATP"],
        quiz: []
      },
      growth: {
        name: "Plant Growth & Development",
        formulas: ["Phytohormones: Auxin, Gibberellin, Cytokinin, ABA, Ethylene"],
        quiz: []
      }
    },
    human_physiology: {
      digestion: {
        name: "Digestion & Breathing",
        formulas: ["Dental Formula: 2123/2123", "Bohr Effect: Hemoglobin oxygen dissociation"],
        quiz: []
      },
      circulation: {
        name: "Body Fluids & Circulation",
        formulas: ["Cardiac Output = Stroke Volume * Heart Rate", "ECG: P-wave, QRS complex, T-wave"],
        quiz: []
      },
      excretion: {
        name: "Excretory Products",
        formulas: ["Glomerular Filtration Rate GFR = 125 mL/min", "Countercurrent multiplier mechanism in Loop of Henle"],
        quiz: []
      },
      locomotion: {
        name: "Locomotion",
        formulas: ["Sarcomere structure: Actin and Myosin filaments", "Types of joints: Synovial, Cartilaginous, Fibrous"],
        quiz: []
      },
      neural: {
        name: "Neural Control",
        formulas: ["Resting membrane potential = -70 mV", "Reflex arc components"],
        quiz: []
      },
      coordination: {
        name: "Chemical Coordination (Hormones)",
        formulas: ["Hypothalamus-Pituitary axis", "Mechanism of peptide vs steroid hormones"],
        quiz: []
      }
    },
    reproduction_genetics: {
      reproduction: {
        name: "Plant & Human Reproduction",
        formulas: ["Double Fertilization: Zygote (2n) + Endosperm (3n)", "Spermatogenesis and Oogenesis stages"],
        quiz: []
      },
      mendelian: {
        name: "Mendelian Genetics",
        formulas: ["Monohybrid Ratio = 3:1 (Phenotypic) / 1:2:1 (Genotypic)", "Dihybrid Phenotypic Ratio = 9:3:3:1"],
        quiz: []
      },
      molecular: {
        name: "Molecular Basis of Inheritance (DNA/RNA)",
        formulas: ["Chargaff's Rule: A + G = T + C", "Transcription and Translation direction: 5' to 3'"],
        quiz: []
      },
      evolution: {
        name: "Evolution",
        formulas: ["Hardy-Weinberg equilibrium: p^2 + 2pq + q^2 = 1", "Homologous vs Analogous organs"],
        quiz: []
      }
    },
    biotechnology_ecology: {
      biotech: {
        name: "Principles & Applications",
        formulas: ["Recombinant DNA: Restriction enzymes and Ligases", "PCR steps: Denaturation, Annealing, Extension"],
        quiz: []
      },
      health: {
        name: "Human Health and Disease",
        formulas: ["Active vs Passive Immunity", "Pathogens: Malaria life cycle, Typhoid, AIDS"],
        quiz: []
      },
      populations: {
        name: "Populations",
        formulas: ["Population growth equation: dN/dt = rN(1 - N/K)"],
        quiz: []
      },
      ecology: {
        name: "Ecosystems & Biodiversity",
        formulas: ["Lindeman's 10% Energy Law", "Species-Area relationship: log S = log C + Z log A"],
        quiz: []
      }
    }
  },
  mathematics: {
    algebra: {
      sets: {
        name: "Sets, Relations, & Functions",
        formulas: ["n(A U B) = n(A) + n(B) - n(A ∩ B)", "Domain and Range calculation"],
        quiz: []
      },
      complex: {
        name: "Complex Numbers & Quadratics",
        formulas: ["1 + ω + ω^2 = 0", "z = x + iy = r * e^(iθ)", "Roots of quadratic ax^2 + bx + c = 0"],
        quiz: []
      },
      inequalities: {
        name: "Linear Inequalities",
        formulas: ["Interval notation, sign scheme method"],
        quiz: []
      },
      permutations: {
        name: "Permutations & Combinations",
        formulas: ["nPr = n! / (n - r)!", "nCr = n! / (r! * (n - r)!)"],
        quiz: []
      },
      binomial: {
        name: "Binomial Theorem",
        formulas: ["General term T_(r+1) = nCr * a^(n-r) * b^r"],
        quiz: []
      },
      sequences: {
        name: "Sequences & Series (AP, GP, HP)",
        formulas: ["AP Sum S_n = n/2 * (2a + (n-1)d)", "GP Sum S_n = a(r^n - 1) / (r - 1)"],
        quiz: []
      },
      matrices: {
        name: "Matrices & Determinants",
        formulas: ["A * A^-1 = I", "Cramer's Rule for system of linear equations"],
        quiz: []
      }
    },
    trigonometry: {
      identities: {
        name: "Functions & Identities",
        formulas: ["sin^2(A) + cos^2(A) = 1", "sin(2A) = 2sin(A)cos(A)", "cos(2A) = cos^2(A) - sin^2(A)"],
        quiz: []
      },
      inverse: {
        name: "Inverse Trigonometric Functions",
        formulas: ["sin^-1(x) + cos^-1(x) = π/2", "tan^-1(x) + tan^-1(y) = tan^-1((x+y)/(1-xy))"],
        quiz: []
      }
    },
    geometry: {
      lines: {
        name: "Straight Lines",
        formulas: ["Slope m = (y2 - y1) / (x2 - x1)", "Equation y - y1 = m(x - x1)", "Distance d = |ax1 + by1 + c| / sqrt(a^2 + b^2)"],
        quiz: []
      },
      conics: {
        name: "Conic Sections (Circles, Parabola, Ellipse, Hyperbola)",
        formulas: ["Circle x^2 + y^2 = r^2", "Parabola y^2 = 4ax", "Ellipse x^2/a^2 + y^2/b^2 = 1"],
        quiz: []
      }
    }
  },

  // CEE Nepal Mental Agility Test (MAT) seed pool (10 standard high-quality questions)
  mentalAgility: [
    { id: 1, type: "MAT", question: "Which number should come next in the sequence: 2, 6, 12, 20, 30, ...?", options: ["38", "40", "42", "46"], correct: 2, explanation: "The differences between consecutive terms are +4, +6, +8, +10. Following this pattern, the next difference must be +12. 30 + 12 = 42." },
    { id: 2, type: "MAT", question: "If 'DOCTOR' is coded as 'FQAQRT', how would 'PATIENT' be coded under the same logic?", options: ["RCVKGPV", "RCVKGRV", "RDVJGNT", "RCVJGOT"], correct: 0, explanation: "The coding shifts letters forward in the alphabet by +2: P(+2)->R, A(+2)->C, T(+2)->V, I(+2)->K, E(+2)->G, N(+2)->P, T(+2)->V. This matches RCVKGPV." },
    { id: 3, type: "MAT", question: "Identify the odd one out from the following options:", options: ["Lungs", "Heart", "Kidneys", "Liver"], correct: 1, explanation: "Lungs, kidneys, and liver are primary excretory/metabolic organs. The heart is purely circulatory and hollow." },
    { id: 4, type: "MAT", question: "If 5 workers can build a wall in 12 days, how many days would it take 6 workers to build the same wall?", options: ["8 days", "10 days", "14 days", "15 days"], correct: 1, explanation: "Man-days remain constant: 5 * 12 = 60 man-days. Days required for 6 workers = 60 / 6 = 10 days." },
    { id: 5, type: "MAT", question: "Choose the word that is most opposite in meaning to 'OBSTINATE':", options: ["Stubborn", "Flexible", "Rigid", "Dogmatic"], correct: 1, explanation: "Obstinate means stubborn. The opposite is flexible." },
    { id: 6, type: "MAT", question: "Which letter replaces the question mark in the sequence: A, D, I, P, ...?", options: ["V", "W", "Y", "Z"], correct: 2, explanation: "The letters correspond to square numbers: A = 1st letter (1²), D = 4th letter (2²), I = 9th letter (3²), P = 16th (4²). The next is 25th (5²), which is Y." },
    { id: 7, type: "MAT", question: "A clock shows 3:15. What is the angle between the hour and minute hands?", options: ["0 degrees", "7.5 degrees", "15 degrees", "30 degrees"], correct: 1, explanation: "At 3:15, the hour hand has moved forward by 15 minutes. Speed of hour hand = 0.5 degrees/minute. Angle = 15 * 0.5 = 7.5 degrees." },
    { id: 8, type: "MAT", question: "Pointing to a photograph, Rohan said, 'Her brother's father is the only son of my grandfather.' How is the lady in the photograph related to Rohan?", options: ["Mother", "Aunt", "Sister", "Cousin"], correct: 2, explanation: "'Only son of Rohan's grandfather' is Rohan's father. 'Her brother's father' is that lady's father. Thus, they are siblings." },
    { id: 9, type: "MAT", question: "If '+' means '×', '×' means '÷', '÷' means '-', and '-' means '+', evaluate: 12 + 3 × 2 - 8 ÷ 4", options: ["18", "20", "22", "24"], correct: 2, explanation: "Substitute symbols: 12 × 3 ÷ 2 + 8 - 4 = 18 + 8 - 4 = 22." },
    { id: 10, type: "MAT", question: "A man walks 6 km North, then turns East and walks 8 km. How far is he from his starting point?", options: ["10 km", "12 km", "14 km", "16 km"], correct: 0, explanation: "Using Pythagoras theorem: d = sqrt(6^2 + 8^2) = 10 km." }
  ]
};
