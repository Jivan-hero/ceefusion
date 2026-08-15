import json

chemistry_data = {
  # Physical Chemistry (9 chapters)
  "mole": {
    "name": "Mole Concept",
    "formulas": [
      "Moles (n) = Mass (g) / Molar Mass (g/mol) = N / N_A = V_STP (L) / 22.4",
      "Molarity (M) = Moles of solute / Volume of solution (L)",
      "Molality (m) = Moles of solute / Mass of solvent (kg)",
      "Normality (N) = Equivalent moles / Volume of solution (L) = Molarity * n-factor",
      "Mole Fraction (χ_A) = n_A / (n_A + n_B)",
      "Dilution Formula: M_1 V_1 = M_2 V_2, N_1 V_1 = N_2 V_2",
      "Percentage Yield = (Actual Yield / Theoretical Yield) * 100%"
    ],
    "notes": {
      "theoretical": "The mole is the SI unit for amount of substance containing Avogadro's number (N_A = 6.022 x 10^23) of elementary entities. Stoichiometry relates relative quantities of reactants and products in chemical reactions based on law of conservation of mass.",
      "framework": "Concentration terms: Molarity (M) depends on temperature due to volume expansion; Molality (m) and Mole Fraction (χ) are temperature-independent mass-based measures. Equivalent mass = Molar Mass / n-factor (acidity, basicity, or valence change).",
      "strategy": "Identify the Limiting Reagent first in multi-reactant stoichiometric problems by calculating moles of each reactant divided by its stoichiometric coefficient; the smallest ratio determines theoretical product yield."
    }
  },
  "atom": {
    "name": "Structure of Atom",
    "formulas": [
      "Bohr Radius: r_n = 0.529 * (n^2 / Z) Å",
      "Bohr Velocity: v_n = 2.18 x 10^6 * (Z / n) m/s",
      "Bohr Energy: E_n = - 13.6 * (Z^2 / n^2) eV/atom",
      "Rydberg Equation: 1 / λ = R Z^2 (1/n_1^2 - 1/n_2^2) [R = 1.097 x 10^7 m^-1]",
      "de Broglie Wavelength: λ = h / (m v) = h / sqrt(2 m KE)",
      "Heisenberg Uncertainty Principle: Δx * Δp ≥ h / (4 π)",
      "Quantum Numbers: n (1,2..), l (0 to n-1), m_l (-l to +l), m_s (±1/2)"
    ],
    "notes": {
      "theoretical": "Atom consists of a dense positively charged nucleus surrounded by electrons. Quantum mechanics describes electron positions probabilistically via atomic orbitals identified by four quantum numbers (n, l, m_l, m_s).",
      "framework": "Aufbau Principle dictates orbital filling in order of increasing (n + l) energy. Pauli Exclusion Principle limits each orbital to 2 electrons with opposite spins. Hund's Rule maximizes spin multiplicity in degenerate orbitals.",
      "strategy": "Chromium (Z=24: [Ar] 4s^1 3d^5) and Copper (Z=29: [Ar] 4s^1 3d^10) exhibit anomalous electronic configurations due to extra stability of half-filled and fully-filled d-subshells."
    }
  },
  "states": {
    "name": "States of Matter",
    "formulas": [
      "Ideal Gas Law: P V = n R T = (w / M) R T",
      "Dalton's Law of Partial Pressures: P_total = P_A + P_B = ∑ (χ_i P_total)",
      "Graham's Law of Diffusion: r_1 / r_2 = sqrt(M_2 / M_1) = sqrt(d_2 / d_1)",
      "van der Waals Real Gas Equation: (P + a n^2 / V^2) (V - n b) = n R T",
      "Critical Temperature: T_c = 8a / (27 R b), Critical Pressure: P_c = a / (27 b^2)",
      "Compressibility Factor: Z = P V / (n R T) [Z=1 ideal, Z<1 attractive, Z>1 repulsive]"
    ],
    "notes": {
      "theoretical": "States of matter (gas, liquid, solid) are determined by balance between thermal energy and intermolecular forces. Ideal gases follow kinetic molecular theory without intermolecular forces or particle volume.",
      "framework": "Real gases deviate from ideal behavior at high pressures and low temperatures. van der Waals parameter 'a' measures intermolecular attraction strength (higher 'a' = easier liquefaction), while 'b' accounts for effective molecular volume.",
      "strategy": "Gases liquefy most easily when temperature is below Critical Temperature T_c. Gases show ideal behavior (Z ≈ 1) at high temperature and low pressure (Boyle Temperature T_b = a / (Rb))."
    }
  },
  "thermodynamics": {
    "name": "Chemical Thermodynamics",
    "formulas": [
      "First Law of Thermodynamics: ΔU = q + w",
      "Enthalpy Relation: H = U + P V, ΔH = ΔU + Δn_g R T",
      "Work done in Reversible Isothermal Expansion: w = - 2.303 n R T log(V_2 / V_1)",
      "Gibbs Free Energy: G = H - T S, ΔG = ΔH - T ΔS",
      "Standard Free Energy and Equilibrium Constant: ΔG° = - 2.303 R T log(K_eq)",
      "Hess's Law: ΔH_reaction = ∑ ΔH_f°(products) - ∑ ΔH_f°(reactants)"
    ],
    "notes": {
      "theoretical": "Chemical thermodynamics evaluates energy transformations and spontaneity. State functions (U, H, S, G) depend only on system state, whereas path functions (q, w) depend on process mechanism.",
      "framework": "Second Law establishes that spontaneous processes increase total entropy of universe (ΔS_total > 0). Gibbs Free Energy change ΔG determines spontaneity at constant T and P: ΔG < 0 (spontaneous), ΔG = 0 (equilibrium), ΔG > 0 (non-spontaneous).",
      "strategy": "An exothermic reaction (ΔH < 0) with positive entropy change (ΔS > 0) is spontaneous at ALL temperatures (ΔG < 0 always). Endothermic reactions with positive ΔS become spontaneous only at high temperatures (T > ΔH / ΔS)."
    }
  },
  "equilibrium": {
    "name": "Chemical & Ionic Equilibrium",
    "formulas": [
      "Equilibrium Constant relation: K_p = K_c (R T)^(Δn_g)",
      "pH and pOH definitions: pH = - log[H+], pOH = - log[OH-], pH + pOH = 14 (at 25°C)",
      "Ostwald Dilution Law for weak acid: α = sqrt(K_a / c), [H+] = sqrt(K_a c)",
      "Henderson-Hasselbalch (Acidic Buffer): pH = pK_a + log([Salt] / [Acid])",
      "Henderson-Hasselbalch (Basic Buffer): pOH = pK_b + log([Salt] / [Base])",
      "Solubility Product for A_x B_y: K_sp = x^x y^y S^(x+y)"
    ],
    "notes": {
      "theoretical": "Equilibrium represents dynamic state where forward and reverse reaction rates are equal. Le Chatelier's principle states that if a system at equilibrium is disturbed, it adjusts to counteract the disturbance.",
      "framework": "Ionic equilibrium involves weak electrolytes, water auto-ionization (K_w = [H+][OH-] = 10^-14 at 25°C), and buffer solutions resisting pH change. Salt hydrolysis determines acidic, basic, or neutral nature of aqueous salts.",
      "strategy": "Common Ion Effect decreases ionization of weak electrolytes and reduces solubility of sparingly soluble salts. Precipitation occurs ONLY when Ionic Product Q_sp EXCEEDS Solubility Product K_sp."
    }
  },
  "redox": {
    "name": "Redox Reactions",
    "formulas": [
      "Oxidation State Rules: Group 1 (+1), Group 2 (+2), F (-1), O (-2 except peroxides -1, OF2 +2)",
      "Equivalent Weight in Redox = Molar Mass / Change in Oxidation Number per mole",
      "Nernst Half-Cell Potential: E = E° - (0.0591 / n) log([Reduced] / [Oxidized])"
    ],
    "notes": {
      "theoretical": "Redox (Reduction-Oxidation) reactions involve electron transfer. Oxidation is loss of electrons (increase in oxidation number); Reduction is gain of electrons (decrease in oxidation number).",
      "framework": "Oxidizing agents (e.g. KMnO4, K2Cr2O7) undergo reduction and gain electrons. Reducing agents (e.g. H2S, Zn, Na) undergo oxidation. n-factor in redox equals total change in oxidation state per formula unit.",
      "strategy": "KMnO4 acts as self-indicator in acid medium (purple to colorless) with n-factor = 5 (Mn+7 → Mn+2). In neutral/faintly alkaline medium, n-factor = 3 (Mn+7 → Mn+4 in MnO2); in strongly alkaline medium n-factor = 1 (Mn+7 → Mn+6)."
    }
  },
  "electrochemistry": {
    "name": "Electrochemistry",
    "formulas": [
      "Cell EMF: E°_cell = E°_cathode - E°_anode = E°_right - E°_left",
      "Nernst Cell Equation: E_cell = E°_cell - (0.0591 / n) log(Q)",
      "Gibbs Free Energy and Cell EMF: ΔG° = - n F E°_cell",
      "Faraday's 1st Law of Electrolysis: m = Z I t = (M / (n F)) I t",
      "Faraday's 2nd Law: m_1 / m_2 = E_1 / E_2",
      "Molar Conductivity: Λ_m = (κ * 1000) / M",
      "Kohlrausch Law: Λ°_m = ν_+ λ°_+ + ν_- λ°_-"
    ],
    "notes": {
      "theoretical": "Electrochemistry links chemical reactions and electricity. Galvanic/Voltaic cells convert spontaneous chemical energy into electrical work; Electrolytic cells use external electricity to drive non-spontaneous reactions.",
      "framework": "Anode is always the site of OXIDATION (negative electrode in galvanic, positive in electrolytic). Cathode is site of REDUCTION. Standard Hydrogen Electrode (SHE) serves as reference with assigned potential E° = 0.00 V.",
      "strategy": "Higher standard reduction potential E° indicates stronger oxidizing power (greater tendency to accept electrons). A galvanic cell is spontaneous when E°_cell > 0 and ΔG° < 0."
    }
  },
  "kinetics": {
    "name": "Chemical Kinetics",
    "formulas": [
      "Rate Law: Rate = k [A]^m [B]^n (Overall order = m + n)",
      "Zero-Order Rate Equation: k = (A_0 - A_t) / t, Half-Life t_1/2 = A_0 / (2 k)",
      "First-Order Rate Equation: k = (2.303 / t) log(A_0 / A_t), Half-Life t_1/2 = 0.693 / k",
      "Second-Order Rate Equation: 1 / A_t - 1 / A_0 = k t",
      "Arrhenius Equation: k = A e^(-E_a / R T), log(k_2 / k_1) = (E_a / 2.303 R) (1/T_1 - 1/T_2)"
    ],
    "notes": {
      "theoretical": "Chemical kinetics studies reaction rates, factors influencing speed, and multi-step reaction mechanisms. Order of reaction is experimentally determined, while molecularity is theoretical count of colliding species in an elementary step.",
      "framework": "First-order kinetics half-life t_1/2 = 0.693 / k is completely independent of initial reactant concentration. Arrhenius equation links rate constant k to activation energy E_a and absolute temperature T.",
      "strategy": "A catalyst increases reaction rate by offering an alternative pathway with lower activation energy E_a; it does NOT alter ΔH, ΔG, or equilibrium constant K_eq."
    }
  },
  "surface": {
    "name": "Surface Chemistry",
    "formulas": [
      "Freundlich Adsorption Isotherm: x/m = k P^(1/n) (n > 1)",
      "Logarithmic Freundlich Equation: log(x/m) = log k + (1/n) log P",
      "Hardy-Schulze Rule: Flocculating power ∝ (Valence of coagulating ion)^4"
    ],
    "notes": {
      "theoretical": "Surface chemistry deals with phenomena at interfaces. Adsorption is accumulation of molecular species at surface rather than bulk. Physisorption involves weak van der Waals forces (reversible, non-specific); Chemisorption involves chemical bonds (irreversible, highly specific).",
      "framework": "Colloids are heterogeneous systems with dispersed particle sizes between 1 nm and 1000 nm. Tyndall effect (scattering of light) and Brownian motion (zig-zag movement) stabilize colloidal suspensions.",
      "strategy": "Hardy-Schulze rule: Higher valence of oppositely charged ion gives greater coagulating power (e.g. for negatively charged As2S3 sol, coagulating power is Al3+ > Ba2+ > Na+). Gold Number measures protective power of lyophilic colloids."
    }
  },

  # Inorganic Chemistry (6 chapters)
  "periodicity": {
    "name": "Periodicity",
    "formulas": [
      "Effective Nuclear Charge: Z* = Z - S (Slater's Rules)",
      "Electronegativity (Pauling): |χ_A - χ_B| = 0.208 sqrt(Δ [kcal/mol])",
      "Mulliken Electronegativity: χ_M = (IE + EA) / 2 (in eV)"
    ],
    "notes": {
      "theoretical": "Periodic law organizes elements by increasing atomic number Z. Periodic trends (atomic radius, ionization energy, electron affinity, electronegativity) reflect effective nuclear charge Z* and electron shielding.",
      "framework": "Across a period (left to right): Atomic radius decreases, IE and electronegativity generally increase. Down a group: Atomic radius increases, IE decreases. Isoelectronic species radii decrease with increasing nuclear charge Z.",
      "strategy": "First Ionization Energy anomalies: IE(Be) > IE(B) due to stable 2s² full subshell; IE(N) > IE(O) due to stable 2p³ half-filled subshell. Chlorine has higher Electron Affinity than Fluorine due to smaller inter-electronic repulsion in 3p subshell."
    }
  },
  "bonding": {
    "name": "Chemical Bonding & Molecular Structure",
    "formulas": [
      "Formal Charge = Valence e- - Non-bonding e- - 0.5 (Bonding e-)",
      "Bond Order = 0.5 (N_b - N_a)",
      "Dipole Moment: μ = q * d (1 Debye = 3.336 x 10^-30 C·m)",
      "Hybridization Steric Number = 0.5 (Valence e- of central atom + Monovalent atoms - Charge)"
    ],
    "notes": {
      "theoretical": "Chemical bonding holds atoms together via ionic, covalent, or metallic forces. VSEPR theory predicts 3D molecular geometries based on electron pair repulsion around central atoms.",
      "framework": "Valence Bond Theory utilizes orbital hybridization (sp, sp2, sp3, sp3d, sp3d2). Molecular Orbital Theory (MOT) describes delocalized MOs; paramagnetic behavior indicates presence of unpaired electrons.",
      "strategy": "Bond Order ∝ Bond Strength ∝ 1 / Bond Length. If Bond Order = 0, molecule cannot exist (e.g. He2). O2 is paramagnetic with 2 unpaired electrons in anti-bonding π*2p orbitals."
    }
  },
  "s_block": {
    "name": "s-Block Elements",
    "formulas": [
      "Alkali Metal Hydrides: 2 M + H2 → 2 MH",
      "Flame Colors: Li (Crimson), Na (Yellow), K (Violet), Rb (Red-violet), Cs (Blue), Ca (Brick red), Sr (Crimson), Ba (Apple green)"
    ],
    "notes": {
      "theoretical": "s-Block comprises Group 1 (Alkali metals, ns1) and Group 2 (Alkaline earth metals, ns2). Highly reactive, low ionization energy, strong reducing agents forming predominantly ionic +1 and +2 compounds.",
      "framework": "Solubility of sulfates: Group 2 sulfates become LESS soluble down group (BaSO4 insoluble). Solubility of hydroxides: Group 2 hydroxides become MORE soluble down group. Lithium and Beryllium show diagonal relationships with Mg and Al.",
      "strategy": "Plaster of Paris is CaSO4 · 0.5 H2O; Gypsum is CaSO4 · 2 H2O. When POP is mixed with water, it sets into a hard mass of Gypsum. Sodium hydrogen carbonate NaHCO3 is baking soda; Na2CO3 · 10 H2O is washing soda."
    }
  },
  "p_block": {
    "name": "p-Block Elements",
    "formulas": [
      "Boric Acid: H3BO3 + H2O ⇌ [B(OH)4]- + H+",
      "Inert Pair Effect: Heavy elements (Tl, Pb, Bi) prefer oxidation state (Group N - 2)"
    ],
    "notes": {
      "theoretical": "p-Block elements (Groups 13 to 18) exhibit electronic configuration ns2 np1-6, encompassing metals, metalloids, and non-metals with variable oxidation states.",
      "framework": "Inert pair effect: Reluctance of s-electrons to participate in bonding in heavier p-block elements leads to stability of lower oxidation states (e.g. Pb+2 > Pb+4, Tl+1 > Tl+3, Bi+3 > Bi+5).",
      "strategy": "Structure of Diborane B2H6 features 2 3-center-2-electron (3c-2e) 3D banana bonds and 4 terminal 2c-2e C-H bonds. XeF2 is linear (sp3d), XeF4 is square planar (sp3d2), XeF6 is distorted octahedral (sp3d3)."
    }
  },
  "d_f_block": {
    "name": "d- and f-Block Elements",
    "formulas": [
      "Spin-Only Magnetic Moment: μ_s = sqrt(n (n + 2)) BM [n = unpaired electrons]",
      "Lanthanoid Contraction: Steady decrease in ionic radii from La3+ to Lu3+"
    ],
    "notes": {
      "theoretical": "d-Block (Transition metals) have incomplete d-subshells, exhibiting variable oxidation states, catalytic activity, colored ion formation, and paramagnetic complexes.",
      "framework": "Lanthanoid Contraction occurs due to poor shielding of nuclear charge by 4f electrons, causing 4d and 5d transition elements in same group (e.g. Zr and Hf, Nb and Ta) to have nearly identical atomic radii.",
      "strategy": "KMnO4 (Permanganate) is intense purple due to Charge Transfer (L → M), not d-d transition (Mn+7 has d0). K2Cr2O7 (Dichromate) is orange. In acidic medium, Cr2O7^2- converts to Cr3+ (green)."
    }
  },
  "coordination": {
    "name": "Coordination Compounds",
    "formulas": [
      "Crystal Field Stabilization Energy (Octahedral): CFSE = (- 0.4 t_2g + 0.6 e_g) Δ_o",
      "Effective Atomic Number (EAN): EAN = Z - Oxidation State + 2 * (Coordination Number)"
    ],
    "notes": {
      "theoretical": "Coordination compounds consist of central metal ion bound to surrounding ligands via coordinate covalent bonds. Werner's theory distinguishes primary (valence/charge) and secondary (coordination number) valencies.",
      "framework": "Crystal Field Theory (CFT) explains d-orbital splitting under octahedral (t2g lower, eg higher) and tetrahedral fields. Strong field ligands (e.g. CN-, CO, en) cause low-spin pairing; weak field ligands (e.g. F-, Cl-, H2O) form high-spin complexes.",
      "strategy": "Spectrochemical Series order: I- < Br- < Cl- < F- < OH- < H2O < NH3 < en < CN- < CO. Linkage isomerism occurs with ambidentate ligands like NO2- (nitro vs nitrito) and SCN- (thiocyanato vs isothiocyanato)."
    }
  },

  # Organic Chemistry (8 chapters)
  "principles": {
    "name": "Basic Principles & Techniques",
    "formulas": [
      "Homolytic Cleavage → Free Radicals; Heterolytic Cleavage → Carbocation + Carbanion",
      "Dumas Nitrogen Estimation: % N = (28 / 22400) * (V_N2 at STP / W_sample) * 100",
      "Kjeldahl Nitrogen Estimation: % N = (1.4 * N * V) / W_sample"
    ],
    "notes": {
      "theoretical": "Organic chemistry focuses on carbon compounds. IUPAC nomenclature systematically names molecules based on principal functional group, longest chain, and substituent locants.",
      "framework": "Electronic effects: Inductive (I), Resonance/Mesomeric (M), Hyperconjugation (no-bond resonance), and Electromeric (E). Carbocation stability order: 3° > 2° > 1° > CH3+ (stabilized by hyperconjugation and +I effect).",
      "strategy": "Carbanion stability order is opposite to carbocations: CH3- > 1° > 2° > 3° (due to destabilizing +I alkyl groups). Free radical stability follows carbocation order: 3° > 2° > 1°."
    }
  },
  "hydrocarbons": {
    "name": "Hydrocarbons",
    "formulas": [
      "Wurtz Reaction: 2 R-X + 2 Na (ether) → R-R + 2 NaX",
      "Markownikoff's Rule: H+ adds to double-bond carbon with MORE hydrogens",
      "Anti-Markownikoff (Peroxide effect): HBr + Peroxide adds Br to LESS substituted carbon",
      "Huckel's Rule of Aromaticity: (4n + 2) π electrons in planar conjugated ring"
    ],
    "notes": {
      "theoretical": "Hydrocarbons are organic compounds containing only C and H, categorized as Alkanes (saturated), Alkenes/Alkynes (unsaturated), and Aromatics (e.g. Benzene).",
      "framework": "Alkenes undergo Electrophilic Addition. Addition of HBr follows Markownikoff's rule via carbocation intermediate; in presence of peroxides (Kharasch effect), HBr adds via free radical mechanism following Anti-Markownikoff rule.",
      "strategy": "Ozonolysis (O3 followed by Zn/H2O) cleaves C=C double bonds to form carbonyl compounds (aldehydes/ketones), serving as key structural determination tool for unsaturated alkenes."
    }
  },
  "haloalkanes": {
    "name": "Haloalkanes & Haloarenes",
    "formulas": [
      "SN2 Rate = k [R-X] [Nucleophile] (Inversion of Configuration - Walden Inversion)",
      "SN1 Rate = k [R-X] (Racemization via Carbocation Intermediate)",
      "Finkelstein Reaction: R-Cl/R-Br + NaI (acetone) → R-I + NaCl/NaBr",
      "Swarts Reaction: R-Cl + AgF → R-F + AgCl"
    ],
    "notes": {
      "theoretical": "Haloalkanes contain halogen bonded to sp3 carbon; Haloarenes contain halogen bonded to aromatic sp2 carbon. Haloalkanes undergo nucleophilic substitution (SN1, SN2) and elimination (E1, E2).",
      "framework": "SN2 mechanism: Bimolecular, single concerted step, back-side attack causing 100% inversion of configuration. Reactivity order: Methyl > 1° > 2° > 3°. SN1 mechanism: Unimolecular, 2-step via carbocation intermediate, leading to racemization. Reactivity order: 3° > 2° > 1°.",
      "strategy": "Haloarenes (e.g. Chlorobenzene) are extremely UNREACTIVITY towards nucleophilic substitution due to resonance stabilization of C-Cl bond (partial double bond character) and sp2 hybridization of aromatic carbon."
    }
  },
  "alcohols": {
    "name": "Alcohols, Phenols, & Ethers",
    "formulas": [
      "Lucas Test: R-OH + conc. HCl + ZnCl2 → R-Cl (Turbidity order: 3° immediate, 2° 5 min, 1° hot)",
      "Williamson Ether Synthesis: R-ONa + R'-X → R-O-R' + NaX",
      "Reimer-Tiemann Reaction: Phenol + CHCl3 + KOH → Salicylaldehyde"
    ],
    "notes": {
      "theoretical": "Alcohols (R-OH) and Phenols (Ar-OH) contain hydroxyl groups. Phenols are significantly MORE acidic than alcohols due to resonance stabilization of phenoxide anion over multiple aromatic ring structures.",
      "framework": "Dehydration of alcohols with conc. H2SO4 at 170°C yields alkenes following Saytzeff rule (more substituted alkene is major product). Lucas reagent distinguishes 1°, 2°, and 3° alcohols based on turbidity formation speed.",
      "strategy": "Williamson synthesis of unsymmetrical ethers requires primary alkyl halide (R'-X) and alkoxide (R-ONa); using 3° alkyl halide yields ALKENE as major product via E2 elimination instead of ether."
    }
  },
  "carbonyls": {
    "name": "Aldehydes, Ketones, & Carboxylic Acids",
    "formulas": [
      "Tollen's Test (Silver Mirror): R-CHO + 2 [Ag(NH3)2]+ + 3 OH- → R-COO- + 2 Ag(s) + 4 NH3 + 2 H2O",
      "Fehling's Test: R-CHO + 2 Cu2+ + 5 OH- → R-COO- + Cu2O(red ppt) + 3 H2O",
      "Aldol Condensation: α-H containing carbonyls + dil. NaOH → β-hydroxy aldehyde/ketone",
      "Cannizzaro Reaction: Non-α-H aldehydes + conc. NaOH → Alcohol + Carboxylate salt"
    ],
    "notes": {
      "theoretical": "Carbonyl compounds contain C=O group. Aldehydes are highly reactive towards Nucleophilic Addition. Carboxylic acids (R-COOH) are acidic due to resonance stabilization of carboxylate anion.",
      "framework": "Tollen's (silver mirror) and Fehling's (red Cu2O ppt) tests distinguish aldehydes from ketones (ketones do NOT reduce Tollen's or Fehling's reagents). Aldol condensation requires α-hydrogens; Cannizzaro reaction occurs ONLY in aldehydes lacking α-hydrogens (e.g. HCHO, C6H5CHO).",
      "strategy": "Haloform reaction: Carbonyls containing CH3-C=O methyl ketone group (or CH3-CH(OH)-) react with I2/NaOH to yield yellow precipitate of Iodoform (CHI3)."
    }
  },
  "amines": {
    "name": "Amines",
    "formulas": [
      "Carbylamine Reaction: R-NH2 + CHCl3 + 3 KOH (alc) → R-NC (foul smell) + 3 KCl + 3 H2O",
      "Hinsberg Test: Benzenesulfonyl chloride + 1° amine → Soluble in KOH; 2° amine → Insoluble in KOH; 3° → No reaction",
      "Hoffmann Bromamide Degradation: R-CONH2 + Br2 + 4 NaOH → R-NH2 + Na2CO3 + 2 NaBr + 2 H2O"
    ],
    "notes": {
      "theoretical": "Amines are nitrogenous organic bases derived from ammonia (NH3). Basic strength depends on lone pair availability on nitrogen.",
      "framework": "Basic strength of aliphatic amines in aqueous solution: 2° > 1° > 3° > NH3 (for methyl amines: (CH3)2NH > CH3NH2 > (CH3)3N > NH3). Aromatic amines (Aniline) are LESS basic than ammonia because lone pair delocalizes into aromatic ring.",
      "strategy": "Hoffmann Bromamide reaction degrades primary acid amides to primary amines containing ONE LESS CARBON atom than starting amide. Carbylamine test uniquely detects primary (1°) aliphatic or aromatic amines."
    }
  },
  "biomolecules": {
    "name": "Biomolecules",
    "formulas": [
      "Glucose (Aldohexose): C6H12O6, Fructose (Ketohexose): C6H12O6",
      "Peptide Linkage: -CO-NH- formed between amino acid -COOH and -NH2",
      "Isoelectric Point (pI): pH at which amino acid exists predominantly as neutral Zwitterion"
    ],
    "notes": {
      "theoretical": "Biomolecules are complex organic molecules sustaining living organisms, including carbohydrates, proteins, nucleic acids (DNA/RNA), lipids, and enzymes.",
      "framework": "Carbohydrates: Monosaccharides (Glucose, Fructose), Disaccharides (Sucrose = Glucose + Fructose, Maltose = Glucose + Glucose, Lactose = Glucose + Galactose). Sucrose is a NON-REDUCING sugar because anomeric carbons are linked.",
      "strategy": "Proteins are polymers of α-amino acids linked by peptide bonds (-CO-NH-). Denaturation destroys secondary and tertiary protein structures without breaking primary peptide bonds. RNA contains Uracil (U); DNA contains Thymine (T)."
    }
  },
  "polymers": {
    "name": "Polymers & Everyday Chemistry",
    "formulas": [
      "Addition Polymers: Polyethene, PTFE (Teflon), PVC, Polystyrene",
      "Condensation Polymers: Nylon-6,6 (Adipic acid + Hexamethylenediamine), Terylene/Dacron (Terephthalic acid + Ethylene glycol)",
      "Natural Rubber Monomer: Isoprene (2-methyl-1,3-butadiene)"
    ],
    "notes": {
      "theoretical": "Polymers are high-molecular-mass macromolecules formed by repeating monomer units. Addition polymers form without byproduct loss; Condensation polymers form with elimination of small molecules (H2O, HCl, alcohol).",
      "framework": "Vulcanization of natural rubber by heating with sulfur forms disulfide cross-links, dramatically improving elasticity, tensile strength, and thermal stability.",
      "strategy": "Analgesics: Narcotics (Morphine, Codeine) vs Non-narcotics (Aspirin, Paracetamol). Antiseptics (applied to living tissue e.g. Dettol = Chloroxylenol + Terpineol) vs Disinfectants (applied to inanimate objects e.g. 1% Phenol)."
    }
  }
}

with open("chemistry_data_temp.json", "w") as f:
    json.dump(chemistry_data, f, indent=2)

print("Loaded 23 Chemistry chapters data successfully.")
