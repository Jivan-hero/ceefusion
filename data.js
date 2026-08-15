/**
 * EduPeak CEE/NEET Preparation Platform - Global Seed Data
 * Maps the complete 84-chapter CEE syllabus nested under subjects and category divisions.
 * Schema structure: eduPeakData[subject][category][chapterKey] = { name, formulas, quiz }
 */

window.eduPeakData = {
  "physics": {
    "mechanics": {
      "units": {
        "name": "Units, Dimensions, & Vectors",
        "notes": {
          "theoretical": "Units and dimensions form the analytical foundation of physical quantities. Base SI units (m, kg, s, A, K, mol, cd) define fundamental dimensions. Vector algebra handles physical quantities possessing both magnitude and direction that satisfy the law of vector addition.",
          "framework": "Principle of Dimensional Homogeneity mandates equal dimensions across added or equated terms in any valid physical law. Dot product evaluates scalar projection (Work W = F.s, Flux \u03a6 = B.A), while cross product produces a perpendicular vector (Torque \u03c4 = r x F, Angular Momentum L = r x p).",
          "strategy": "Rapidly eliminate incorrect choices in CEE MCQs using dimensional analysis. Remember that trigonometric, exponential, and logarithmic functions must take dimensionless arguments. Resultant vector magnitude ranges strictly between |A-B| and (A+B)."
        },
        "formulas": [
          "Dimension of G: [M^-1 L^3 T^-2]",
          "Dimension of Planck's Constant (h): [M L^2 T^-1]",
          "Dimension of Permeability (\u03bc_0): [M L T^-2 A^-2]",
          "Dot Product: A . B = AB cos(\u03b8)",
          "Cross Product Magnitude: |A x B| = AB sin(\u03b8)",
          "Vector Resultant: R = sqrt(A^2 + B^2 + 2AB cos \u03b8)",
          "Direction of Resultant: tan(\u03b1) = (B sin \u03b8) / (A + B cos \u03b8)",
          "Unit Vector: a_hat = A / |A|"
        ],
        "quiz": []
      },
      "kinematics": {
        "name": "Kinematics",
        "notes": {
          "theoretical": "Kinematics describes motion in terms of position, displacement, velocity, and acceleration without reference to the underlying forces. Differentiation converts position to velocity and velocity to acceleration; integration reverses this path.",
          "framework": "For uniform acceleration, standard equations (v = u + at, s = ut + 0.5at^2, v^2 = u^2 + 2as) govern motion. The slope of a displacement-time graph equals instantaneous velocity, while the area under a velocity-time graph equals displacement.",
          "strategy": "Pay strict attention to sign conventions in vertical motion under gravity. At the maximum height of a vertical throw, velocity becomes zero while acceleration remains constant at -g (-9.8 m/s^2 or -10 m/s^2)."
        },
        "formulas": [
          "v = u + at",
          "s = ut + 0.5 a t^2",
          "v^2 = u^2 + 2 a s",
          "Distance in nth second: s_nth = u + 0.5 a (2n - 1)",
          "Average velocity (constant a): v_avg = (u + v) / 2",
          "Acceleration: a = dv/dt = v (dv/ds)",
          "Relative velocity (A w.r.t B): v_AB = v_A - v_B"
        ],
        "quiz": []
      },
      "projectile": {
        "name": "Projectile & Circular Motion",
        "notes": {
          "theoretical": "Projectile motion is two-dimensional motion under constant downward gravitational acceleration with zero horizontal acceleration. Circular motion involves continuous velocity vector rotation governed by a radial centripetal acceleration towards the center.",
          "framework": "Horizontal component u_x = u cos \u03b8 remains constant throughout projectile flight, while vertical component u_y = u sin \u03b8 undergoes uniform gravitational retardation. In uniform circular motion (UCM), speed is constant but acceleration a_c = v^2/r is non-zero due to direction change.",
          "strategy": "Maximum projectile range occurs at \u03b8 = 45\u00b0. Complementary angles of projection (\u03b8 and 90\u00b0-\u03b8) yield identical horizontal ranges for the same initial velocity. In circular motion, work done by centripetal force is always ZERO because force is perpendicular to velocity."
        },
        "formulas": [
          "Time of Flight: T = (2 u sin \u03b8) / g",
          "Maximum Height: H = (u^2 sin^2 \u03b8) / (2 g)",
          "Horizontal Range: R = (u^2 sin 2\u03b8) / g",
          "Equation of Trajectory: y = x tan \u03b8 - (g x^2) / (2 u^2 cos^2 \u03b8)",
          "Centripetal Acceleration: a_c = v^2 / r = \u03c9^2 r",
          "Centripetal Force: F_c = m v^2 / r",
          "Optimum speed on banked road (no friction): v = sqrt(r g tan \u03b8)",
          "Maximum safe speed on flat rough road: v_max = sqrt(\u03bc r g)"
        ],
        "quiz": []
      },
      "newton": {
        "name": "Newton\u2019s Laws of Motion",
        "notes": {
          "theoretical": "Newton's laws form the dynamic foundation of classical mechanics. First law defines inertia and inertial frames; Second law defines force as rate of momentum change; Third law states equal and opposite reaction forces act on distinct bodies.",
          "framework": "Force F = ma applies when mass is constant. Friction is a contact force opposing relative surface movement. Static friction is self-adjusting up to f_s_max = \u03bc_s N, after which sliding kinetic friction f_k = \u03bc_k N (with \u03bc_k < \u03bc_s) governs.",
          "strategy": "Always construct Free Body Diagrams (FBD) isolating individual system masses. Choose a coordinate system aligned with the direction of acceleration. Remember that contact normal force N is perpendicular to the contact surface, not necessarily equal to mg."
        },
        "formulas": [
          "Net Force: F_net = dp/dt = m a",
          "Impulse: J = \u222b F dt = \u0394p = m(v - u)",
          "Limiting Static Friction: f_s_max = \u03bc_s N",
          "Kinetic Friction: f_k = \u03bc_k N",
          "Apparent weight in accelerating elevator (upwards): N = m(g + a)",
          "Apparent weight in accelerating elevator (downwards): N = m(g - a)",
          "Atwood Machine Acceleration: a = (m_2 - m_1) g / (m_1 + m_2)",
          "Atwood Machine Tension: T = (2 m_1 m_2 g) / (m_1 + m_2)"
        ],
        "quiz": []
      },
      "work": {
        "name": "Work, Energy, & Power",
        "formulas": [
          "W = F . s = Fs cos(\u03b8)",
          "KE = 0.5 m v^2",
          "PE = mgh",
          "Work-Energy Theorem: W_net = \u0394KE = 0.5 m (v^2 - u^2)",
          "Power: P = dW/dt = F . v = Fv cos(\u03b8)",
          "Spring Potential Energy: U = 0.5 k x^2",
          "Coefficient of Restitution: e = (v_2 - v_1) / (u_1 - u_2)",
          "1 h.p. = 746 W, 1 kWh = 3.6 x 10^6 J"
        ],
        "notes": {
          "theoretical": "Work is done when a force produces displacement along its line of action. Energy is the capacity to perform work, existing as kinetic energy of motion and potential energy of system configuration under conservative forces.",
          "framework": "Work-Energy theorem dictates W_net = \u0394KE. Conservative forces (gravity, electrostatic, spring) allow defining scalar potential energy U such that F = -dU/dx, and total mechanical energy E = KE + PE is conserved in closed systems.",
          "strategy": "Work done by centripetal force, normal reaction (on fixed surfaces), and static friction (without sliding) is ZERO. In elastic 1D collisions, e = 1 and both momentum and KE are conserved; in perfectly inelastic collisions, e = 0 and bodies stick together."
        },
        "quiz": []
      },
      "rotational": {
        "name": "Rotational Motion",
        "notes": {
          "theoretical": "Rotational dynamics parallels linear dynamics with Moment of Inertia (I) playing the role of rotational mass, Torque (\u03c4) replacing Force, and Angular Velocity (\u03c9) replacing linear velocity.",
          "framework": "Moment of inertia depends on mass distribution relative to rotation axis. Torque \u03c4 = dL/dt = I\u03b1. When net external torque \u03c4_ext = 0, total angular momentum L = I\u03c9 is strictly conserved (e.g. spinning figure skater pulling in arms reduces I and increases \u03c9).",
          "strategy": "Memorize standard Moment of Inertia values: Ring/Hoop (MR^2), Disc (0.5 MR^2), Solid Sphere (2/5 MR^2), Hollow Sphere (2/3 MR^2), Solid Cylinder (0.5 MR^2), Thin Rod center (1/12 ML^2). In pure rolling down an incline, the body with smaller k^2/R^2 reaches the bottom first (Solid Sphere > Disc > Ring)."
        },
        "formulas": [
          "Torque: \u03c4 = r x F = I \u03b1",
          "Angular Momentum: L = r x p = I \u03c9",
          "Rotational Kinetic Energy: KE_rot = 0.5 I \u03c9^2",
          "Moment of Inertia: I = \u2211 m_i r_i^2 = M k^2",
          "Parallel Axis Theorem: I = I_cm + M d^2",
          "Perpendicular Axis Theorem (2D disc/plate): I_z = I_x + I_y",
          "Total Rolling Kinetic Energy: KE_total = 0.5 M v^2 (1 + k^2 / R^2)",
          "Acceleration down incline (rolling): a = (g sin \u03b8) / (1 + k^2 / R^2)"
        ],
        "quiz": []
      },
      "gravitation": {
        "name": "Gravitation",
        "notes": {
          "theoretical": "Gravitation is a universal attractive inverse-square force between masses. Gravity g decreases with altitude, depth, and earth's rotational spin (maximum at poles, minimum at equator).",
          "framework": "Escape velocity v_e = sqrt(2GM/R) is independent of projection angle or mass of the projectile. Satellite orbital velocity v_o = sqrt(GM/r). Total energy of a bound circular satellite orbit is E = -GMm/(2r) = -KE = 0.5 PE.",
          "strategy": "Note that acceleration due to gravity at Earth's center (d = R) is ZERO. Geostationary satellites orbit above the equator in the direction of Earth's rotation with a period of 24 hours at an altitude of approximately 36,000 km."
        },
        "formulas": [
          "Newton's Law of Gravitation: F = G m_1 m_2 / r^2",
          "Acceleration due to gravity at surface: g = G M / R^2",
          "Variation of g with height h: g_h = g (1 - 2h/R) [for h << R]",
          "Variation of g with depth d: g_d = g (1 - d/R)",
          "Variation of g with latitude \u03c6: g_\u03c6 = g - \u03c9^2 R cos^2(\u03c6)",
          "Gravitational Potential Energy: U = - G M m / r",
          "Escape Velocity: v_e = sqrt(2 G M / R) = sqrt(2 g R) \u2248 11.2 km/s (Earth)",
          "Orbital Velocity: v_o = sqrt(G M / r) = sqrt(g R) \u2248 7.9 km/s (near Earth surface)",
          "Kepler's 3rd Law: T^2 \u221d r^3"
        ],
        "quiz": []
      }
    },
    "thermodynamics": {
      "solids": {
        "name": "Solids & Fluids",
        "notes": {
          "theoretical": "Solids exhibit elastic deformation governed by Hooke's Law (Stress \u221d Strain). Fluids (liquids and gases) transmit pressure equally in all directions (Pascal's Law) and exhibit viscosity (internal fluid friction) and surface tension (surface energy per unit area).",
          "framework": "Continuity equation A1 v1 = A2 v2 expresses conservation of mass for incompressible fluid flow. Bernoulli's equation P + 0.5\u03c1v^2 + \u03c1gh = constant expresses energy conservation along a streamline. Viscous drag balance leads to constant terminal velocity v_t \u221d r^2.",
          "strategy": "Soap bubbles have TWO free surfaces, so excess pressure \u0394P = 4T/r and work done to form bubble W = 8\u03c0r^2 T. Liquid drops have ONE free surface, so \u0394P = 2T/r and W = 4\u03c0r^2 T. Angle of contact for pure water and clean glass is 0\u00b0."
        },
        "formulas": [
          "Young's Modulus: Y = (F / A) / (\u0394L / L)",
          "Bulk Modulus: B = - \u0394P / (\u0394V / V)",
          "Shear Modulus: \u03b7 = (F / A) / \u03b8",
          "Hydrostatic Pressure: P = P_0 + \u03c1 g h",
          "Pascal's Law (Hydraulic Lift): F_1 / A_1 = F_2 / A_2",
          "Equation of Continuity: A_1 v_1 = A_2 v_2",
          "Bernoulli's Principle: P + 0.5 \u03c1 v^2 + \u03c1 g h = constant",
          "Torricelli's Law (Efflux velocity): v = sqrt(2 g h)",
          "Stokes' Law (Viscous force): F_v = 6 \u03c0 \u03b7 r v",
          "Terminal Velocity: v_t = 2 r^2 (\u03c1 - \u03c3) g / (9 \u03b7)",
          "Surface Tension Energy: W = T \u0394A, Excess Pressure in sphere drop: \u0394P = 2T/r, bubble: \u0394P = 4T/r"
        ],
        "quiz": []
      },
      "thermal": {
        "name": "Thermal Properties",
        "notes": {
          "theoretical": "Thermal properties govern how matter absorbs heat, expands, changes phases, and transfers energy via conduction, convection, and radiation. Thermal expansion isotropic coefficients satisfy \u03b1 : \u03b2 : \u03b3 = 1 : 2 : 3.",
          "framework": "Heat transfer rate H = KA(T1-T2)/L parallels electrical current I = V/R where thermal resistance R_th = L/(KA). Blackbody thermal radiation power follows Stefan-Boltzmann law P = \u03c3 A T^4; peak emission wavelength obeys Wien's law \u03bb_max \u221d 1/T.",
          "strategy": "Anomalous expansion of water occurs between 0\u00b0C and 4\u00b0C (density is maximum at 4\u00b0C). When calculating mixture equilibrium temperatures, heat lost by hotter bodies = heat gained by colder bodies. Convert temperatures to Kelvin (T_K = T_C + 273.15) for radiation laws."
        },
        "formulas": [
          "Linear Expansion: \u0394L = L_0 \u03b1 \u0394T",
          "Areal Expansion: \u0394A = A_0 \u03b2 \u0394T (\u03b2 = 2\u03b1)",
          "Volume Expansion: \u0394V = V_0 \u03b3 \u0394T (\u03b3 = 3\u03b1)",
          "Heat Capacity: Q = m c \u0394T = n C \u0394T",
          "Latent Heat (Phase change): Q = m L",
          "Thermal Conduction (Fourier's Law): H = dQ/dt = K A (T_1 - T_2) / L",
          "Stefan-Boltzmann Law: P = e \u03c3 A T^4",
          "Wien's Displacement Law: \u03bb_max T = b \u2248 2.898 x 10^-3 m\u00b7K",
          "Newton's Law of Cooling: dT/dt = - k (T - T_environment)"
        ],
        "quiz": []
      },
      "thermodynamics": {
        "name": "Thermodynamics (Laws & Heat Engines)",
        "notes": {
          "theoretical": "Thermodynamics governs heat-work conversion. First Law (energy conservation): dQ = dU + dW. Internal energy U is a state function depending solely on temperature T (dU = n C_v dT). Second Law dictates heat cannot flow spontaneously from cold to hot body without external work.",
          "framework": "In Isothermal processes (\u0394T=0), dU=0 so dQ=dW. In Adiabatic processes (dQ=0), dW = -dU. Carnot engine represents the theoretical maximum reversible heat engine efficiency \u03b7 = 1 - T_c/T_h.",
          "strategy": "For monoatomic gas (He, Ar): C_v = 1.5R, C_p = 2.5R, \u03b3 = 5/3 \u2248 1.67. For diatomic gas (N2, O2): C_v = 2.5R, C_p = 3.5R, \u03b3 = 7/5 = 1.40. Efficiency \u03b7 is always less than 1 (100%) and temperatures MUST be in Kelvin."
        },
        "formulas": [
          "First Law of Thermodynamics: dQ = dU + dW",
          "Work done in Isobaric process: W = P \u0394V",
          "Work done in Isothermal process: W = n R T ln(V_2 / V_1)",
          "Work done in Adiabatic process: W = (P_1 V_1 - P_2 V_2) / (\u03b3 - 1) = n R (T_1 - T_2) / (\u03b3 - 1)",
          "Adiabatic Process Relation: P V^\u03b3 = constant, T V^(\u03b3-1) = constant",
          "Carnot Engine Efficiency: \u03b7 = 1 - T_cold / T_hot = W / Q_in",
          "Refrigerator Coefficient of Performance (COP): \u03b2 = Q_cold / W = T_cold / (T_hot - T_cold)",
          "Molar Heat Capacities: C_p - C_v = R, Adiabatic index \u03b3 = C_p / C_v"
        ],
        "quiz": []
      },
      "kinetic": {
        "name": "Kinetic Theory of Gases",
        "notes": {
          "theoretical": "Kinetic Theory models gases as large numbers of sub-microscopic particles in random elastic collision. Temperature is a direct macroscopic measure of average molecular translational kinetic energy.",
          "framework": "Equipartition theorem assigns 0.5 k_B T energy to each active degree of freedom per molecule. Degrees of freedom f: Monoatomic = 3 (translational), Diatomic room temp = 5 (3 trans + 2 rot), Polyatomic non-linear = 6.",
          "strategy": "Speed ordering: v_rms > v_avg > v_mp with ratio sqrt(3) : sqrt(8/\u03c0) : sqrt(2) \u2248 1.732 : 1.596 : 1.414. Note that gas molecular kinetic energy depends strictly on Absolute Temperature T in Kelvin, independent of molar mass or pressure."
        },
        "formulas": [
          "Ideal Gas Equation: P V = n R T = N k_B T",
          "Gas Pressure equation: P = (1/3) \u03c1 v_rms^2",
          "RMS Speed: v_rms = sqrt(3 R T / M) = sqrt(3 k_B T / m)",
          "Average Speed: v_avg = sqrt(8 R T / (\u03c0 M))",
          "Most Probable Speed: v_mp = sqrt(2 R T / M)",
          "Translational Kinetic Energy per molecule: E_k = (3/2) k_B T",
          "Total internal energy of N molecules: U = (f/2) N k_B T = (f/2) n R T",
          "Mean Free Path: \u03bb = 1 / (sqrt(2) n_v \u03c0 d^2)"
        ],
        "quiz": []
      }
    },
    "waves": {
      "shm": {
        "name": "Simple Harmonic Motion (SHM)",
        "notes": {
          "theoretical": "SHM is periodic oscillatory motion where restoring force is directly proportional to displacement from equilibrium position and directed towards equilibrium: F = -k x.",
          "framework": "Max velocity v_max = \u03c9 A occurs at mean position (x=0) where PE=0 and KE=E. Max acceleration a_max = \u03c9^2 A occurs at extreme positions (x = \u00b1A) where KE=0 and PE=E. At x = A/sqrt(2), KE = PE = E/2.",
          "strategy": "If a simple pendulum is taken to a high altitude or into a mine, g decreases so period T increases (clock runs slow). In a freely falling elevator, effective g = 0 so T \u2192 \u221e (pendulum does not oscillate)."
        },
        "formulas": [
          "Differential Equation of SHM: d^2x/dt^2 + \u03c9^2 x = 0",
          "Displacement: x(t) = A sin(\u03c9 t + \u03c6)",
          "Velocity: v(t) = dx/dt = \u03c9 sqrt(A^2 - x^2)",
          "Acceleration: a(t) = - \u03c9^2 x",
          "Time Period of Simple Pendulum: T = 2 \u03c0 sqrt(L / g)",
          "Time Period of Loaded Spring: T = 2 \u03c0 sqrt(m / k)",
          "Total Energy in SHM: E = 0.5 m \u03c9^2 A^2",
          "Kinetic Energy: KE = 0.5 m \u03c9^2 (A^2 - x^2), Potential Energy: PE = 0.5 m \u03c9^2 x^2"
        ],
        "quiz": []
      },
      "sound": {
        "name": "Wave Motion and Sound",
        "notes": {
          "theoretical": "Sound is a mechanical longitudinal compression wave requiring a material medium for propagation. Newton's isothermal velocity was corrected by Laplace as an adiabatic compression process v = sqrt(\u03b3 P/\u03c1).",
          "framework": "Open organ pipes produce ALL harmonics (fundamental f_1, 2f_1, 3f_1...), whereas closed organ pipes produce ONLY ODD harmonics (f_1, 3f_1, 5f_1...). Beats arise from superposition of two waves of slightly different frequencies.",
          "strategy": "Speed of sound in gas increases with temperature: v \u221d sqrt(T). Speed of sound is INDEPENDENT of gas pressure changes at constant temperature (since P/\u03c1 remains constant). Speed increases with humidity (moist air is less dense than dry air)."
        },
        "formulas": [
          "Wave Velocity: v = f \u03bb = \u03c9 / k",
          "Wave Equation: y(x,t) = A sin(k x - \u03c9 t + \u03c6), k = 2\u03c0 / \u03bb",
          "Speed of sound in solid rod: v = sqrt(Y / \u03c1)",
          "Speed of sound in gas (Laplace formula): v = sqrt(\u03b3 P / \u03c1) = sqrt(\u03b3 R T / M)",
          "Organ Pipe (Open at both ends): f_n = n v / (2 L), n = 1, 2, 3...",
          "Organ Pipe (Closed at one end): f_n = (2n - 1) v / (4 L), n = 1, 2, 3...",
          "Beat Frequency: f_beat = |f_1 - f_2|",
          "Doppler Effect observed frequency: f' = f_0 (v \u00b1 v_observer) / (v \u2213 v_source)"
        ],
        "quiz": []
      }
    },
    "electromagnetism": {
      "electrostatics": {
        "name": "Electrostatics",
        "notes": {
          "theoretical": "Electrostatics deals with forces, fields, and potentials of static electric charges. Quantization of charge Q = ne; electric charge is strictly conserved and independent of reference frame velocity.",
          "framework": "Coulomb force is an inverse-square central force. Gauss's Law \u222e E.dA = Q_enc/\u03b5_0 simplifies field calculations for symmetric charge distributions (spheres, cylinders, planes). Inside a hollow conducting sphere, electric field E = 0.",
          "strategy": "Electric field lines point away from positive charges and towards negative charges; they NEVER intersect. Electric dipole in uniform field experiences net force ZERO but non-zero torque \u03c4 = p E sin \u03b8 (stable equilibrium at \u03b8=0\u00b0, unstable at \u03b8=180\u00b0)."
        },
        "formulas": [
          "Coulomb's Law: F = (1 / (4 \u03c0 \u03b5_0)) * (q_1 q_2 / r^2)",
          "Electric Field of Point Charge: E = (1 / (4 \u03c0 \u03b5_0)) * (q / r^2)",
          "Electric Field due to infinite linear charge: E = \u03bb / (2 \u03c0 \u03b5_0 r)",
          "Electric Field due to infinite plane sheet: E = \u03c3 / (2 \u03b5_0)",
          "Electric Dipole Moment: p = q * 2a",
          "Torque on Dipole in Uniform E-field: \u03c4 = p x E = p E sin \u03b8",
          "Potential Energy of Dipole in E-field: U = - p . E = - p E cos \u03b8",
          "Gauss's Law: \u03a6_E = \u222e E . dA = Q_enclosed / \u03b5_0"
        ],
        "quiz": []
      },
      "potential": {
        "name": "Potential & Capacitance",
        "notes": {
          "theoretical": "Electric potential V is scalar work done per unit positive test charge in bringing it from infinity to a point. Capacitance C = Q/V measures charge storage capacity per unit potential difference.",
          "framework": "Equipotential surfaces are everywhere perpendicular to electric field lines; no work is done moving a charge along an equipotential surface (W = q \u0394V = 0). Inserting a dielectric slab of constant K multiplies capacitance by K.",
          "strategy": "When a capacitor is disconnected from battery before dielectric insertion: Charge Q remains CONSTANT, C increases K-fold, Voltage V decreases (V0/K), Energy U decreases (U0/K). If battery remains CONNECTED: Voltage V remains CONSTANT, Q increases K-fold, C increases K-fold, U increases K-fold."
        },
        "formulas": [
          "Electric Potential of Point Charge: V = q / (4 \u03c0 \u03b5_0 r)",
          "Relation between E and V: E = - dV/dr",
          "Capacitance of Parallel Plate Capacitor: C = \u03b5_0 A / d",
          "Capacitance with Dielectric K: C' = K C_0 = K \u03b5_0 A / d",
          "Capacitors in Series: 1/C_eq = 1/C_1 + 1/C_2 + ...",
          "Capacitors in Parallel: C_eq = C_1 + C_2 + ...",
          "Energy Stored in Capacitor: U = 0.5 C V^2 = 0.5 Q V = Q^2 / (2 C)",
          "Energy Density of Electric Field: u_E = 0.5 \u03b5_0 E^2"
        ],
        "quiz": []
      },
      "current": {
        "name": "Current Electricity",
        "notes": {
          "theoretical": "Electric current is rate of charge flow. Drift velocity v_d = e E \u03c4 / m is the small average velocity acquired by free electrons under an applied electric field (typically ~10^-4 m/s).",
          "framework": "Kirchhoff's Junction Rule expresses conservation of electric charge. Kirchhoff's Loop Rule expresses conservation of energy in closed electrical circuits. Meter Bridge and Potentiometer operate on balanced Wheatstone principle.",
          "strategy": "A potentiometer is an IDEAL voltmeter because it draws zero current from the source at null point. Terminal voltage V of a battery during discharge is V = E - I r; during charging V = E + I r; on open circuit V = E."
        },
        "formulas": [
          "Electric Current: I = dQ/dt = n A e v_d",
          "Ohm's Law: V = I R, J = \u03c3 E",
          "Resistance: R = \u03c1 L / A, Conductance: G = 1/R",
          "Temperature dependence of R: R_T = R_0 (1 + \u03b1 \u0394T)",
          "Resistors in Series: R_eq = R_1 + R_2 + ...",
          "Resistors in Parallel: 1/R_eq = 1/R_1 + 1/R_2 + ...",
          "Kirchhoff's Current Law (KCL / Junction): \u2211 I = 0 (Conservation of Charge)",
          "Kirchhoff's Voltage Law (KVL / Loop): \u2211 V = 0 (Conservation of Energy)",
          "Wheatstone Bridge Balance Condition: P / Q = R / S",
          "Joule Heating Power: P = V I = I^2 R = V^2 / R"
        ],
        "quiz": []
      },
      "magnetism": {
        "name": "Moving Charges & Magnetism",
        "notes": {
          "theoretical": "Moving charges and electric currents produce magnetic fields. Magnetic forces act strictly perpendicular to both velocity and magnetic field vectors, performing ZERO work on moving charges.",
          "framework": "A charged particle injected perpendicular to uniform magnetic field undergoes uniform circular motion with radius r = mv/(qB) and period T = 2\u03c0m/(qB) (independent of velocity/radius). Biot-Savart and Ampere laws calculate magnetic field vectors.",
          "strategy": "Work done by magnetic force on a moving point charge is ALWAYS ZERO because F \u22a5 v, meaning kinetic energy and speed remain constant (only velocity direction changes). Two parallel wires carrying current in SAME direction ATTRACT; OPPOSITE directions REPEL."
        },
        "formulas": [
          "Biot-Savart Law: dB = (\u03bc_0 / 4\u03c0) * (I dl x r_hat) / r^2",
          "Magnetic Field of straight current wire: B = \u03bc_0 I / (2 \u03c0 r)",
          "Magnetic Field at center of circular coil: B = \u03bc_0 N I / (2 R)",
          "Ampere's Circuital Law: \u222e B . dl = \u03bc_0 I_enclosed",
          "Magnetic Field inside Solenoid: B = \u03bc_0 n I",
          "Lorentz Force: F = q(E + v x B)",
          "Magnetic Force on current wire: F = I (L x B) = I L B sin \u03b8",
          "Cyclotron Radius: r = m v / (q B), Cyclotron Frequency: f = q B / (2 \u03c0 m)",
          "Magnetic Dipole Moment: M = N I A"
        ],
        "quiz": []
      },
      "emi": {
        "name": "Electromagnetic Induction (EMI)",
        "notes": {
          "theoretical": "Electromagnetic induction is the production of electromotive force (EMF) across an electrical conductor in a changing magnetic field. Lenz's law is a direct consequence of the Law of Conservation of Energy.",
          "framework": "Faraday's law states magnitude of induced EMF equals rate of change of magnetic flux. Motional EMF \u03b5 = BLv arises from Lorentz force on free electrons in a moving conductor. Energy stored in an inductor's magnetic field is U = 0.5 L I^2.",
          "strategy": "When a metal rod of length L rotates with angular frequency \u03c9 about one end in a perpendicular magnetic field B, induced EMF is \u03b5 = 0.5 B L^2 \u03c9. Eddy currents generated in solid metal blocks cause energy loss as heat (mitigated by laminated iron cores)."
        },
        "formulas": [
          "Magnetic Flux: \u03a6_B = B . A = B A cos \u03b8",
          "Faraday's Law of Induction: \u03b5 = - N (d\u03a6_B / dt)",
          "Lenz's Law: Induced current direction opposes the change in magnetic flux causing it",
          "Motional EMF (straight rod in uniform B): \u03b5 = B L v",
          "Self-Inductance EMF: \u03b5 = - L (dI / dt)",
          "Self-Inductance of Solenoid: L = \u03bc_0 N^2 A / l",
          "Energy Stored in Inductor: U = 0.5 L I^2",
          "Mutual Inductance EMF: \u03b5_2 = - M (dI_1 / dt)"
        ],
        "quiz": []
      },
      "ac": {
        "name": "Alternating Current (AC)",
        "notes": {
          "theoretical": "Alternating current varies sinusoidally with time. RMS (root-mean-square) value represents the equivalent DC current that produces identical Joule heating in a resistor.",
          "framework": "In pure resistor, V and I are in phase. In pure inductor, V leads I by 90\u00b0 (\u03c0/2). In pure capacitor, I leads V by 90\u00b0 (\u03c0/2). At resonance (X_L = X_C), impedance Z = R (minimum), current is maximum, and power factor cos \u03c6 = 1.",
          "strategy": "Pure inductors and capacitors consume ZERO average power in AC circuits over a complete cycle because cos(90\u00b0) = 0 (Wattless current). Standard household mains supply (e.g. 220V AC) refers to RMS voltage; peak voltage V_0 = 220 * sqrt(2) \u2248 311V."
        },
        "formulas": [
          "RMS Voltage: V_rms = V_0 / sqrt(2) \u2248 0.707 V_0",
          "RMS Current: I_rms = I_0 / sqrt(2) \u2248 0.707 I_0",
          "Inductive Reactance: X_L = \u03c9 L = 2 \u03c0 f L",
          "Capacitive Reactance: X_C = 1 / (\u03c9 C) = 1 / (2 \u03c0 f C)",
          "Series LCR Impedance: Z = sqrt(R^2 + (X_L - X_C)^2)",
          "Resonance Frequency: f_0 = 1 / (2 \u03c0 sqrt(L C))",
          "Power Factor: cos \u03c6 = R / Z",
          "Average AC Power: P_avg = V_rms I_rms cos \u03c6",
          "Transformer Ratio: V_s / V_p = N_s / N_p = I_p / I_s"
        ],
        "quiz": []
      },
      "em_waves": {
        "name": "EM Waves",
        "notes": {
          "theoretical": "Electromagnetic waves are non-mechanical transverse waves consisting of mutually perpendicular sinusoidally oscillating Electric (E) and Magnetic (B) fields, propagating perpendicular to both in direction E x B.",
          "framework": "Maxwell modified Ampere's law by adding displacement current I_d = \u03b5_0 d\u03a6_E/dt to account for changing electric fields (e.g. between charging capacitor plates). EM wave spectrum (in order of increasing frequency / decreasing wavelength): Radio, Microwave, Infrared, Visible, Ultraviolet, X-rays, Gamma rays.",
          "strategy": "Electric vector E is primarily responsible for optical effects of EM waves (referred to as light vector). EM waves carry both energy and momentum (p = U/c for complete absorption; p = 2U/c for complete reflection)."
        },
        "formulas": [
          "Speed of EM wave in vacuum: c = 1 / sqrt(\u03bc_0 \u03b5_0) \u2248 3 x 10^8 m/s",
          "Speed of EM wave in medium: v = 1 / sqrt(\u03bc \u03b5) = c / n",
          "Ratio of E and B amplitudes: E_0 / B_0 = c",
          "Poynting Vector (energy flux): S = (1 / \u03bc_0) (E x B)",
          "Average Energy Density: u_avg = 0.5 \u03b5_0 E_0^2 = 0.5 B_0^2 / \u03bc_0",
          "Displacement Current: I_d = \u03b5_0 (d\u03a6_E / dt)"
        ],
        "quiz": []
      }
    },
    "optics": {
      "ray": {
        "name": "Ray Optics & Optical Instruments",
        "notes": {
          "theoretical": "Ray optics models light propagation as straight rays undergoing reflection, refraction, and dispersion. Total Internal Reflection occurs when light travels from denser to rarer medium at angle of incidence i > C.",
          "framework": "Lens Maker's formula relates focal length to refractive index and surface radii. Prisms disperse polychromatic light because refractive index varies inversely with wavelength (Cauchy's relation n = A + B/\u03bb^2; violet deviates most, red least).",
          "strategy": "Use Cartesian sign convention consistently: distances measured in direction of incident ray are positive, opposite negative. Focal length of convex lens/mirror is POSITIVE; concave lens/mirror is NEGATIVE. Power of combination of contact lenses P = P1 + P2."
        },
        "formulas": [
          "Mirror Formula: 1/f = 1/v + 1/u",
          "Snell's Law of Refraction: n_1 sin i = n_2 sin r",
          "Critical Angle for Total Internal Reflection: sin C = 1 / n = n_2 / n_1",
          "Apparent Depth: d' = d / n",
          "Lens Maker's Formula: 1/f = (n - 1) (1/R_1 - 1/R_2)",
          "Thin Lens Formula: 1/f = 1/v - 1/u",
          "Power of Lens: P = 1 / f(in meters) [in Diopters D]",
          "Prism Deviation: \u03b4 = i + e - A, at minimum deviation: n = sin((A + \u03b4_m)/2) / sin(A/2)",
          "Astronomical Telescope Magnification (Normal adjustment): M = - f_o / f_e, Length L = f_o + f_e",
          "Compound Microscope Magnification: M = - (v_o / u_o) * (D / f_e)"
        ],
        "quiz": []
      },
      "wave": {
        "name": "Wave Optics",
        "notes": {
          "theoretical": "Wave optics treats light as an electromagnetic wave displaying interference, diffraction, and polarization. Huygens' principle states every point on a wavefront acts as a secondary source of spherical wavelets.",
          "framework": "Interference requires two coherent sources (constant phase difference). Young's double-slit experiment yields equal-width bright and dark fringes \u03b2 = \u03bbD/d. Single-slit diffraction produces a central maximum of double width (2\u03bbD/a).",
          "strategy": "Polarization uniquely proves the TRANSVERSE nature of light waves (longitudinal sound waves CANNOT be polarized). According to Malus' law, passing unpolarized light through a polarizer reduces intensity by half (I_0/2), and subsequent analyzer reduces it to (I_0/2) cos^2 \u03b8."
        },
        "formulas": [
          "Young's Double Slit Fringe Width: \u03b2 = \u03bb D / d",
          "Constructive Interference condition: Path difference \u0394 = n \u03bb (n = 0, 1, 2...)",
          "Destructive Interference condition: Path difference \u0394 = (2n - 1) \u03bb / 2",
          "Resultant Intensity in Interference: I = I_1 + I_2 + 2 sqrt(I_1 I_2) cos \u03c6",
          "Max and Min Intensity ratio: I_max / I_min = (sqrt(I_1) + sqrt(I_2))^2 / (sqrt(I_1) - sqrt(I_2))^2",
          "Single Slit Diffraction Minima: a sin \u03b8 = n \u03bb",
          "Brewster's Law of Polarization: tan i_p = n",
          "Malus's Law: I = I_0 cos^2 \u03b8"
        ],
        "quiz": []
      }
    },
    "modern_physics": {
      "dual_nature": {
        "name": "Dual Nature of Matter",
        "notes": {
          "theoretical": "Radiation displays dual particle-wave nature. Light behaves as photons (quanta of energy E = hf) during emission and absorption (Photoelectric effect, Compton scattering), and as waves during propagation (Interference, Diffraction).",
          "framework": "Einstein's photoelectric equation hf = W0 + eV0 demonstrates that kinetic energy of emitted photoelectrons depends linearly on light FREQUENCY, while photoelectric current depends directly on light INTENSITY.",
          "strategy": "Photoelectric emission occurs instantly (< 10^-9 s) ONLY IF light frequency f \u2265 threshold frequency f_0 (or wavelength \u03bb \u2264 threshold wavelength \u03bb_0). Stopping potential V_0 is completely independent of light intensity."
        },
        "formulas": [
          "Photon Energy: E = h f = h c / \u03bb",
          "Photon Momentum: p = E / c = h / \u03bb",
          "Einstein's Photoelectric Equation: E = h f = W_0 + KE_max = h f_0 + e V_0",
          "Stopping Potential relation: e V_0 = KE_max = 0.5 m v_max^2",
          "de Broglie Wavelength: \u03bb = h / p = h / (m v) = h / sqrt(2 m KE)",
          "de Broglie Wavelength of accelerated electron: \u03bb = 12.27 / sqrt(V) \u00c5 = 1.227 / sqrt(V) nm"
        ],
        "quiz": []
      },
      "atoms": {
        "name": "Atoms and Nuclei",
        "notes": {
          "theoretical": "Bohr model postulates quantized stationary orbits for atomic electrons. Nuclear physics explores binding energy \u0394E = \u0394m c^2 holding nucleons (protons and neutrons) together under the short-range strong nuclear force.",
          "framework": "Hydrogen spectral series: Lyman (n1=1, UV region), Balmer (n1=2, Visible region), Paschen (n1=3, IR region), Brackett (n1=4, IR), Pfund (n1=5, Far IR). Radioactive decay follows first-order exponential kinetics N(t) = N_0 e^(-\u03bbt).",
          "strategy": "Binding Energy per Nucleon (BE/A) peaks around Iron-56 (~8.8 MeV/nucleon), making Fe-56 the most stable nucleus. Nuclear fission splits heavy nuclei (e.g. U-235) and nuclear fusion combines light nuclei (e.g. H to He in stars); both release energy by increasing BE/A."
        },
        "formulas": [
          "Bohr Angular Momentum Quantization: L = m v r = n h / (2 \u03c0)",
          "Radius of nth Bohr Orbit: r_n = r_1 n^2 / Z = 0.529 \u00c5 * (n^2 / Z)",
          "Velocity in nth Bohr Orbit: v_n = v_1 * (Z / n) \u2248 (2.18 x 10^6 m/s) * (Z / n)",
          "Energy of Hydrogen Atom in nth state: E_n = - 13.6 eV * (Z^2 / n^2)",
          "Rydberg Wave Number formula: 1 / \u03bb = R Z^2 (1/n_1^2 - 1/n_2^2)",
          "Nuclear Radius: R = R_0 A^(1/3) [R_0 \u2248 1.2 fm]",
          "Mass-Energy Equivalence: E = \u0394m c^2, 1 amu = 931.5 MeV",
          "Radioactive Decay Law: N(t) = N_0 e^(-\u03bb t)",
          "Half-Life: T_1/2 = ln(2) / \u03bb \u2248 0.693 / \u03bb, Mean Life: \u03c4 = 1 / \u03bb = 1.44 T_1/2"
        ],
        "quiz": []
      },
      "semiconductors": {
        "name": "Semiconductor Electronics",
        "notes": {
          "theoretical": "Semiconductors have energy band gap E_g between valence and conduction bands (E_g \u2248 1.1 eV for Si, 0.7 eV for Ge, insulators > 3 eV). Doping creates n-type (pentavalent donor e.g. P, As) or p-type (trivalent acceptor e.g. B, Al) extrinsic semiconductors.",
          "framework": "p-n junction under Forward Bias narrows depletion layer and lowers barrier potential, allowing easy current conduction. Reverse Bias widens depletion layer and blocks current except for tiny microampere leakage current.",
          "strategy": "Zener diode operates strictly in REVERSE BREAKDOWN region as a constant voltage regulator. LED operates under FORWARD BIAS to emit light photons. Solar cell and Photodiode operate under REVERSE BIAS. NAND and NOR are Universal Logic Gates."
        },
        "formulas": [
          "Intrinsic Charge Carrier Density: n_i^2 = n_e * n_h",
          "Total Electrical Conductivity: \u03c3 = e (n_e \u03bc_e + n_h \u03bc_h)",
          "PN Junction Barrier Potential: V_b \u2248 0.7V (Silicon), V_b \u2248 0.3V (Germanium)",
          "Transistor Current Relation: I_E = I_B + I_C",
          "Common Emitter Current Gain: \u03b2 = \u0394I_C / \u0394I_B, Common Base Gain: \u03b1 = \u0394I_C / \u0394I_E",
          "Relation between \u03b1 and \u03b2: \u03b2 = \u03b1 / (1 - \u03b1), \u03b1 = \u03b2 / (1 + \u03b2)",
          "Logic Gates: AND (Y=A.B), OR (Y=A+B), NOT (Y=A'), NAND (Y=(A.B)'), NOR (Y=(A+B)')"
        ],
        "quiz": []
      }
    }
  },
  "chemistry": {
    "physical": {
      "mole": {
        "name": "Mole Concept",
        "notes": {
          "theoretical": "The mole is the SI unit for amount of substance containing Avogadro's number (N_A = 6.022 x 10^23) of elementary entities. Stoichiometry relates relative quantities of reactants and products in chemical reactions based on law of conservation of mass.",
          "framework": "Concentration terms: Molarity (M) depends on temperature due to volume expansion; Molality (m) and Mole Fraction (\u03c7) are temperature-independent mass-based measures. Equivalent mass = Molar Mass / n-factor (acidity, basicity, or valence change).",
          "strategy": "Identify the Limiting Reagent first in multi-reactant stoichiometric problems by calculating moles of each reactant divided by its stoichiometric coefficient; the smallest ratio determines theoretical product yield."
        },
        "formulas": [
          "Moles (n) = Mass (g) / Molar Mass (g/mol) = N / N_A = V_STP (L) / 22.4",
          "Molarity (M) = Moles of solute / Volume of solution (L)",
          "Molality (m) = Moles of solute / Mass of solvent (kg)",
          "Normality (N) = Equivalent moles / Volume of solution (L) = Molarity * n-factor",
          "Mole Fraction (\u03c7_A) = n_A / (n_A + n_B)",
          "Dilution Formula: M_1 V_1 = M_2 V_2, N_1 V_1 = N_2 V_2",
          "Percentage Yield = (Actual Yield / Theoretical Yield) * 100%"
        ],
        "quiz": []
      },
      "atom": {
        "name": "Structure of Atom",
        "notes": {
          "theoretical": "Atom consists of a dense positively charged nucleus surrounded by electrons. Quantum mechanics describes electron positions probabilistically via atomic orbitals identified by four quantum numbers (n, l, m_l, m_s).",
          "framework": "Aufbau Principle dictates orbital filling in order of increasing (n + l) energy. Pauli Exclusion Principle limits each orbital to 2 electrons with opposite spins. Hund's Rule maximizes spin multiplicity in degenerate orbitals.",
          "strategy": "Chromium (Z=24: [Ar] 4s^1 3d^5) and Copper (Z=29: [Ar] 4s^1 3d^10) exhibit anomalous electronic configurations due to extra stability of half-filled and fully-filled d-subshells."
        },
        "formulas": [
          "Bohr Radius: r_n = 0.529 * (n^2 / Z) \u00c5",
          "Bohr Velocity: v_n = 2.18 x 10^6 * (Z / n) m/s",
          "Bohr Energy: E_n = - 13.6 * (Z^2 / n^2) eV/atom",
          "Rydberg Equation: 1 / \u03bb = R Z^2 (1/n_1^2 - 1/n_2^2) [R = 1.097 x 10^7 m^-1]",
          "de Broglie Wavelength: \u03bb = h / (m v) = h / sqrt(2 m KE)",
          "Heisenberg Uncertainty Principle: \u0394x * \u0394p \u2265 h / (4 \u03c0)",
          "Quantum Numbers: n (1,2..), l (0 to n-1), m_l (-l to +l), m_s (\u00b11/2)"
        ],
        "quiz": []
      },
      "states": {
        "name": "States of Matter",
        "notes": {
          "theoretical": "States of matter (gas, liquid, solid) are determined by balance between thermal energy and intermolecular forces. Ideal gases follow kinetic molecular theory without intermolecular forces or particle volume.",
          "framework": "Real gases deviate from ideal behavior at high pressures and low temperatures. van der Waals parameter 'a' measures intermolecular attraction strength (higher 'a' = easier liquefaction), while 'b' accounts for effective molecular volume.",
          "strategy": "Gases liquefy most easily when temperature is below Critical Temperature T_c. Gases show ideal behavior (Z \u2248 1) at high temperature and low pressure (Boyle Temperature T_b = a / (Rb))."
        },
        "formulas": [
          "Ideal Gas Law: P V = n R T = (w / M) R T",
          "Dalton's Law of Partial Pressures: P_total = P_A + P_B = \u2211 (\u03c7_i P_total)",
          "Graham's Law of Diffusion: r_1 / r_2 = sqrt(M_2 / M_1) = sqrt(d_2 / d_1)",
          "van der Waals Real Gas Equation: (P + a n^2 / V^2) (V - n b) = n R T",
          "Critical Temperature: T_c = 8a / (27 R b), Critical Pressure: P_c = a / (27 b^2)",
          "Compressibility Factor: Z = P V / (n R T) [Z=1 ideal, Z<1 attractive, Z>1 repulsive]"
        ],
        "quiz": []
      },
      "thermodynamics": {
        "name": "Chemical Thermodynamics",
        "formulas": [
          "First Law of Thermodynamics: \u0394U = q + w",
          "Enthalpy Relation: H = U + P V, \u0394H = \u0394U + \u0394n_g R T",
          "Work done in Reversible Isothermal Expansion: w = - 2.303 n R T log(V_2 / V_1)",
          "Gibbs Free Energy: G = H - T S, \u0394G = \u0394H - T \u0394S",
          "Standard Free Energy and Equilibrium Constant: \u0394G\u00b0 = - 2.303 R T log(K_eq)",
          "Hess's Law: \u0394H_reaction = \u2211 \u0394H_f\u00b0(products) - \u2211 \u0394H_f\u00b0(reactants)"
        ],
        "quiz": [],
        "notes": {
          "theoretical": "Chemical thermodynamics evaluates energy transformations and spontaneity. State functions (U, H, S, G) depend only on system state, whereas path functions (q, w) depend on process mechanism.",
          "framework": "Second Law establishes that spontaneous processes increase total entropy of universe (\u0394S_total > 0). Gibbs Free Energy change \u0394G determines spontaneity at constant T and P: \u0394G < 0 (spontaneous), \u0394G = 0 (equilibrium), \u0394G > 0 (non-spontaneous).",
          "strategy": "An exothermic reaction (\u0394H < 0) with positive entropy change (\u0394S > 0) is spontaneous at ALL temperatures (\u0394G < 0 always). Endothermic reactions with positive \u0394S become spontaneous only at high temperatures (T > \u0394H / \u0394S)."
        }
      },
      "equilibrium": {
        "name": "Chemical & Ionic Equilibrium",
        "notes": {
          "theoretical": "Equilibrium represents dynamic state where forward and reverse reaction rates are equal. Le Chatelier's principle states that if a system at equilibrium is disturbed, it adjusts to counteract the disturbance.",
          "framework": "Ionic equilibrium involves weak electrolytes, water auto-ionization (K_w = [H+][OH-] = 10^-14 at 25\u00b0C), and buffer solutions resisting pH change. Salt hydrolysis determines acidic, basic, or neutral nature of aqueous salts.",
          "strategy": "Common Ion Effect decreases ionization of weak electrolytes and reduces solubility of sparingly soluble salts. Precipitation occurs ONLY when Ionic Product Q_sp EXCEEDS Solubility Product K_sp."
        },
        "formulas": [
          "Equilibrium Constant relation: K_p = K_c (R T)^(\u0394n_g)",
          "pH and pOH definitions: pH = - log[H+], pOH = - log[OH-], pH + pOH = 14 (at 25\u00b0C)",
          "Ostwald Dilution Law for weak acid: \u03b1 = sqrt(K_a / c), [H+] = sqrt(K_a c)",
          "Henderson-Hasselbalch (Acidic Buffer): pH = pK_a + log([Salt] / [Acid])",
          "Henderson-Hasselbalch (Basic Buffer): pOH = pK_b + log([Salt] / [Base])",
          "Solubility Product for A_x B_y: K_sp = x^x y^y S^(x+y)"
        ],
        "quiz": []
      },
      "redox": {
        "name": "Redox Reactions",
        "notes": {
          "theoretical": "Redox (Reduction-Oxidation) reactions involve electron transfer. Oxidation is loss of electrons (increase in oxidation number); Reduction is gain of electrons (decrease in oxidation number).",
          "framework": "Oxidizing agents (e.g. KMnO4, K2Cr2O7) undergo reduction and gain electrons. Reducing agents (e.g. H2S, Zn, Na) undergo oxidation. n-factor in redox equals total change in oxidation state per formula unit.",
          "strategy": "KMnO4 acts as self-indicator in acid medium (purple to colorless) with n-factor = 5 (Mn+7 \u2192 Mn+2). In neutral/faintly alkaline medium, n-factor = 3 (Mn+7 \u2192 Mn+4 in MnO2); in strongly alkaline medium n-factor = 1 (Mn+7 \u2192 Mn+6)."
        },
        "formulas": [
          "Oxidation State Rules: Group 1 (+1), Group 2 (+2), F (-1), O (-2 except peroxides -1, OF2 +2)",
          "Equivalent Weight in Redox = Molar Mass / Change in Oxidation Number per mole",
          "Nernst Half-Cell Potential: E = E\u00b0 - (0.0591 / n) log([Reduced] / [Oxidized])"
        ],
        "quiz": []
      },
      "electrochemistry": {
        "name": "Electrochemistry",
        "notes": {
          "theoretical": "Electrochemistry links chemical reactions and electricity. Galvanic/Voltaic cells convert spontaneous chemical energy into electrical work; Electrolytic cells use external electricity to drive non-spontaneous reactions.",
          "framework": "Anode is always the site of OXIDATION (negative electrode in galvanic, positive in electrolytic). Cathode is site of REDUCTION. Standard Hydrogen Electrode (SHE) serves as reference with assigned potential E\u00b0 = 0.00 V.",
          "strategy": "Higher standard reduction potential E\u00b0 indicates stronger oxidizing power (greater tendency to accept electrons). A galvanic cell is spontaneous when E\u00b0_cell > 0 and \u0394G\u00b0 < 0."
        },
        "formulas": [
          "Cell EMF: E\u00b0_cell = E\u00b0_cathode - E\u00b0_anode = E\u00b0_right - E\u00b0_left",
          "Nernst Cell Equation: E_cell = E\u00b0_cell - (0.0591 / n) log(Q)",
          "Gibbs Free Energy and Cell EMF: \u0394G\u00b0 = - n F E\u00b0_cell",
          "Faraday's 1st Law of Electrolysis: m = Z I t = (M / (n F)) I t",
          "Faraday's 2nd Law: m_1 / m_2 = E_1 / E_2",
          "Molar Conductivity: \u039b_m = (\u03ba * 1000) / M",
          "Kohlrausch Law: \u039b\u00b0_m = \u03bd_+ \u03bb\u00b0_+ + \u03bd_- \u03bb\u00b0_-"
        ],
        "quiz": []
      },
      "kinetics": {
        "name": "Chemical Kinetics",
        "notes": {
          "theoretical": "Chemical kinetics studies reaction rates, factors influencing speed, and multi-step reaction mechanisms. Order of reaction is experimentally determined, while molecularity is theoretical count of colliding species in an elementary step.",
          "framework": "First-order kinetics half-life t_1/2 = 0.693 / k is completely independent of initial reactant concentration. Arrhenius equation links rate constant k to activation energy E_a and absolute temperature T.",
          "strategy": "A catalyst increases reaction rate by offering an alternative pathway with lower activation energy E_a; it does NOT alter \u0394H, \u0394G, or equilibrium constant K_eq."
        },
        "formulas": [
          "Rate Law: Rate = k [A]^m [B]^n (Overall order = m + n)",
          "Zero-Order Rate Equation: k = (A_0 - A_t) / t, Half-Life t_1/2 = A_0 / (2 k)",
          "First-Order Rate Equation: k = (2.303 / t) log(A_0 / A_t), Half-Life t_1/2 = 0.693 / k",
          "Second-Order Rate Equation: 1 / A_t - 1 / A_0 = k t",
          "Arrhenius Equation: k = A e^(-E_a / R T), log(k_2 / k_1) = (E_a / 2.303 R) (1/T_1 - 1/T_2)"
        ],
        "quiz": []
      },
      "surface": {
        "name": "Surface Chemistry",
        "notes": {
          "theoretical": "Surface chemistry deals with phenomena at interfaces. Adsorption is accumulation of molecular species at surface rather than bulk. Physisorption involves weak van der Waals forces (reversible, non-specific); Chemisorption involves chemical bonds (irreversible, highly specific).",
          "framework": "Colloids are heterogeneous systems with dispersed particle sizes between 1 nm and 1000 nm. Tyndall effect (scattering of light) and Brownian motion (zig-zag movement) stabilize colloidal suspensions.",
          "strategy": "Hardy-Schulze rule: Higher valence of oppositely charged ion gives greater coagulating power (e.g. for negatively charged As2S3 sol, coagulating power is Al3+ > Ba2+ > Na+). Gold Number measures protective power of lyophilic colloids."
        },
        "formulas": [
          "Freundlich Adsorption Isotherm: x/m = k P^(1/n) (n > 1)",
          "Logarithmic Freundlich Equation: log(x/m) = log k + (1/n) log P",
          "Hardy-Schulze Rule: Flocculating power \u221d (Valence of coagulating ion)^4"
        ],
        "quiz": []
      }
    },
    "inorganic": {
      "periodicity": {
        "name": "Periodicity",
        "notes": {
          "theoretical": "Periodic law organizes elements by increasing atomic number Z. Periodic trends (atomic radius, ionization energy, electron affinity, electronegativity) reflect effective nuclear charge Z* and electron shielding.",
          "framework": "Across a period (left to right): Atomic radius decreases, IE and electronegativity generally increase. Down a group: Atomic radius increases, IE decreases. Isoelectronic species radii decrease with increasing nuclear charge Z.",
          "strategy": "First Ionization Energy anomalies: IE(Be) > IE(B) due to stable 2s\u00b2 full subshell; IE(N) > IE(O) due to stable 2p\u00b3 half-filled subshell. Chlorine has higher Electron Affinity than Fluorine due to smaller inter-electronic repulsion in 3p subshell."
        },
        "formulas": [
          "Effective Nuclear Charge: Z* = Z - S (Slater's Rules)",
          "Electronegativity (Pauling): |\u03c7_A - \u03c7_B| = 0.208 sqrt(\u0394 [kcal/mol])",
          "Mulliken Electronegativity: \u03c7_M = (IE + EA) / 2 (in eV)"
        ],
        "quiz": []
      },
      "bonding": {
        "name": "Chemical Bonding & Molecular Structure",
        "notes": {
          "theoretical": "Chemical bonding holds atoms together via ionic, covalent, or metallic forces. VSEPR theory predicts 3D molecular geometries based on electron pair repulsion around central atoms.",
          "framework": "Valence Bond Theory utilizes orbital hybridization (sp, sp2, sp3, sp3d, sp3d2). Molecular Orbital Theory (MOT) describes delocalized MOs; paramagnetic behavior indicates presence of unpaired electrons.",
          "strategy": "Bond Order \u221d Bond Strength \u221d 1 / Bond Length. If Bond Order = 0, molecule cannot exist (e.g. He2). O2 is paramagnetic with 2 unpaired electrons in anti-bonding \u03c0*2p orbitals."
        },
        "formulas": [
          "Formal Charge = Valence e- - Non-bonding e- - 0.5 (Bonding e-)",
          "Bond Order = 0.5 (N_b - N_a)",
          "Dipole Moment: \u03bc = q * d (1 Debye = 3.336 x 10^-30 C\u00b7m)",
          "Hybridization Steric Number = 0.5 (Valence e- of central atom + Monovalent atoms - Charge)"
        ],
        "quiz": []
      },
      "s_block": {
        "name": "s-Block Elements",
        "notes": {
          "theoretical": "s-Block comprises Group 1 (Alkali metals, ns1) and Group 2 (Alkaline earth metals, ns2). Highly reactive, low ionization energy, strong reducing agents forming predominantly ionic +1 and +2 compounds.",
          "framework": "Solubility of sulfates: Group 2 sulfates become LESS soluble down group (BaSO4 insoluble). Solubility of hydroxides: Group 2 hydroxides become MORE soluble down group. Lithium and Beryllium show diagonal relationships with Mg and Al.",
          "strategy": "Plaster of Paris is CaSO4 \u00b7 0.5 H2O; Gypsum is CaSO4 \u00b7 2 H2O. When POP is mixed with water, it sets into a hard mass of Gypsum. Sodium hydrogen carbonate NaHCO3 is baking soda; Na2CO3 \u00b7 10 H2O is washing soda."
        },
        "formulas": [
          "Alkali Metal Hydrides: 2 M + H2 \u2192 2 MH",
          "Flame Colors: Li (Crimson), Na (Yellow), K (Violet), Rb (Red-violet), Cs (Blue), Ca (Brick red), Sr (Crimson), Ba (Apple green)"
        ],
        "quiz": []
      },
      "p_block": {
        "name": "p-Block Elements",
        "notes": {
          "theoretical": "p-Block elements (Groups 13 to 18) exhibit electronic configuration ns2 np1-6, encompassing metals, metalloids, and non-metals with variable oxidation states.",
          "framework": "Inert pair effect: Reluctance of s-electrons to participate in bonding in heavier p-block elements leads to stability of lower oxidation states (e.g. Pb+2 > Pb+4, Tl+1 > Tl+3, Bi+3 > Bi+5).",
          "strategy": "Structure of Diborane B2H6 features 2 3-center-2-electron (3c-2e) 3D banana bonds and 4 terminal 2c-2e C-H bonds. XeF2 is linear (sp3d), XeF4 is square planar (sp3d2), XeF6 is distorted octahedral (sp3d3)."
        },
        "formulas": [
          "Boric Acid: H3BO3 + H2O \u21cc [B(OH)4]- + H+",
          "Inert Pair Effect: Heavy elements (Tl, Pb, Bi) prefer oxidation state (Group N - 2)"
        ],
        "quiz": []
      },
      "d_f_block": {
        "name": "d- and f-Block Elements",
        "notes": {
          "theoretical": "d-Block (Transition metals) have incomplete d-subshells, exhibiting variable oxidation states, catalytic activity, colored ion formation, and paramagnetic complexes.",
          "framework": "Lanthanoid Contraction occurs due to poor shielding of nuclear charge by 4f electrons, causing 4d and 5d transition elements in same group (e.g. Zr and Hf, Nb and Ta) to have nearly identical atomic radii.",
          "strategy": "KMnO4 (Permanganate) is intense purple due to Charge Transfer (L \u2192 M), not d-d transition (Mn+7 has d0). K2Cr2O7 (Dichromate) is orange. In acidic medium, Cr2O7^2- converts to Cr3+ (green)."
        },
        "formulas": [
          "Spin-Only Magnetic Moment: \u03bc_s = sqrt(n (n + 2)) BM [n = unpaired electrons]",
          "Lanthanoid Contraction: Steady decrease in ionic radii from La3+ to Lu3+"
        ],
        "quiz": []
      },
      "coordination": {
        "name": "Coordination Compounds",
        "notes": {
          "theoretical": "Coordination compounds consist of central metal ion bound to surrounding ligands via coordinate covalent bonds. Werner's theory distinguishes primary (valence/charge) and secondary (coordination number) valencies.",
          "framework": "Crystal Field Theory (CFT) explains d-orbital splitting under octahedral (t2g lower, eg higher) and tetrahedral fields. Strong field ligands (e.g. CN-, CO, en) cause low-spin pairing; weak field ligands (e.g. F-, Cl-, H2O) form high-spin complexes.",
          "strategy": "Spectrochemical Series order: I- < Br- < Cl- < F- < OH- < H2O < NH3 < en < CN- < CO. Linkage isomerism occurs with ambidentate ligands like NO2- (nitro vs nitrito) and SCN- (thiocyanato vs isothiocyanato)."
        },
        "formulas": [
          "Crystal Field Stabilization Energy (Octahedral): CFSE = (- 0.4 t_2g + 0.6 e_g) \u0394_o",
          "Effective Atomic Number (EAN): EAN = Z - Oxidation State + 2 * (Coordination Number)"
        ],
        "quiz": []
      }
    },
    "organic": {
      "principles": {
        "name": "Basic Principles & Techniques",
        "notes": {
          "theoretical": "Organic chemistry focuses on carbon compounds. IUPAC nomenclature systematically names molecules based on principal functional group, longest chain, and substituent locants.",
          "framework": "Electronic effects: Inductive (I), Resonance/Mesomeric (M), Hyperconjugation (no-bond resonance), and Electromeric (E). Carbocation stability order: 3\u00b0 > 2\u00b0 > 1\u00b0 > CH3+ (stabilized by hyperconjugation and +I effect).",
          "strategy": "Carbanion stability order is opposite to carbocations: CH3- > 1\u00b0 > 2\u00b0 > 3\u00b0 (due to destabilizing +I alkyl groups). Free radical stability follows carbocation order: 3\u00b0 > 2\u00b0 > 1\u00b0."
        },
        "formulas": [
          "Homolytic Cleavage \u2192 Free Radicals; Heterolytic Cleavage \u2192 Carbocation + Carbanion",
          "Dumas Nitrogen Estimation: % N = (28 / 22400) * (V_N2 at STP / W_sample) * 100",
          "Kjeldahl Nitrogen Estimation: % N = (1.4 * N * V) / W_sample"
        ],
        "quiz": []
      },
      "hydrocarbons": {
        "name": "Hydrocarbons",
        "notes": {
          "theoretical": "Hydrocarbons are organic compounds containing only C and H, categorized as Alkanes (saturated), Alkenes/Alkynes (unsaturated), and Aromatics (e.g. Benzene).",
          "framework": "Alkenes undergo Electrophilic Addition. Addition of HBr follows Markownikoff's rule via carbocation intermediate; in presence of peroxides (Kharasch effect), HBr adds via free radical mechanism following Anti-Markownikoff rule.",
          "strategy": "Ozonolysis (O3 followed by Zn/H2O) cleaves C=C double bonds to form carbonyl compounds (aldehydes/ketones), serving as key structural determination tool for unsaturated alkenes."
        },
        "formulas": [
          "Wurtz Reaction: 2 R-X + 2 Na (ether) \u2192 R-R + 2 NaX",
          "Markownikoff's Rule: H+ adds to double-bond carbon with MORE hydrogens",
          "Anti-Markownikoff (Peroxide effect): HBr + Peroxide adds Br to LESS substituted carbon",
          "Huckel's Rule of Aromaticity: (4n + 2) \u03c0 electrons in planar conjugated ring"
        ],
        "quiz": []
      },
      "haloalkanes": {
        "name": "Haloalkanes & Haloarenes",
        "notes": {
          "theoretical": "Haloalkanes contain halogen bonded to sp3 carbon; Haloarenes contain halogen bonded to aromatic sp2 carbon. Haloalkanes undergo nucleophilic substitution (SN1, SN2) and elimination (E1, E2).",
          "framework": "SN2 mechanism: Bimolecular, single concerted step, back-side attack causing 100% inversion of configuration. Reactivity order: Methyl > 1\u00b0 > 2\u00b0 > 3\u00b0. SN1 mechanism: Unimolecular, 2-step via carbocation intermediate, leading to racemization. Reactivity order: 3\u00b0 > 2\u00b0 > 1\u00b0.",
          "strategy": "Haloarenes (e.g. Chlorobenzene) are extremely UNREACTIVITY towards nucleophilic substitution due to resonance stabilization of C-Cl bond (partial double bond character) and sp2 hybridization of aromatic carbon."
        },
        "formulas": [
          "SN2 Rate = k [R-X] [Nucleophile] (Inversion of Configuration - Walden Inversion)",
          "SN1 Rate = k [R-X] (Racemization via Carbocation Intermediate)",
          "Finkelstein Reaction: R-Cl/R-Br + NaI (acetone) \u2192 R-I + NaCl/NaBr",
          "Swarts Reaction: R-Cl + AgF \u2192 R-F + AgCl"
        ],
        "quiz": []
      },
      "alcohols": {
        "name": "Alcohols, Phenols, & Ethers",
        "notes": {
          "theoretical": "Alcohols (R-OH) and Phenols (Ar-OH) contain hydroxyl groups. Phenols are significantly MORE acidic than alcohols due to resonance stabilization of phenoxide anion over multiple aromatic ring structures.",
          "framework": "Dehydration of alcohols with conc. H2SO4 at 170\u00b0C yields alkenes following Saytzeff rule (more substituted alkene is major product). Lucas reagent distinguishes 1\u00b0, 2\u00b0, and 3\u00b0 alcohols based on turbidity formation speed.",
          "strategy": "Williamson synthesis of unsymmetrical ethers requires primary alkyl halide (R'-X) and alkoxide (R-ONa); using 3\u00b0 alkyl halide yields ALKENE as major product via E2 elimination instead of ether."
        },
        "formulas": [
          "Lucas Test: R-OH + conc. HCl + ZnCl2 \u2192 R-Cl (Turbidity order: 3\u00b0 immediate, 2\u00b0 5 min, 1\u00b0 hot)",
          "Williamson Ether Synthesis: R-ONa + R'-X \u2192 R-O-R' + NaX",
          "Reimer-Tiemann Reaction: Phenol + CHCl3 + KOH \u2192 Salicylaldehyde"
        ],
        "quiz": []
      },
      "carbonyls": {
        "name": "Aldehydes, Ketones, & Carboxylic Acids",
        "notes": {
          "theoretical": "Carbonyl compounds contain C=O group. Aldehydes are highly reactive towards Nucleophilic Addition. Carboxylic acids (R-COOH) are acidic due to resonance stabilization of carboxylate anion.",
          "framework": "Tollen's (silver mirror) and Fehling's (red Cu2O ppt) tests distinguish aldehydes from ketones (ketones do NOT reduce Tollen's or Fehling's reagents). Aldol condensation requires \u03b1-hydrogens; Cannizzaro reaction occurs ONLY in aldehydes lacking \u03b1-hydrogens (e.g. HCHO, C6H5CHO).",
          "strategy": "Haloform reaction: Carbonyls containing CH3-C=O methyl ketone group (or CH3-CH(OH)-) react with I2/NaOH to yield yellow precipitate of Iodoform (CHI3)."
        },
        "formulas": [
          "Tollen's Test (Silver Mirror): R-CHO + 2 [Ag(NH3)2]+ + 3 OH- \u2192 R-COO- + 2 Ag(s) + 4 NH3 + 2 H2O",
          "Fehling's Test: R-CHO + 2 Cu2+ + 5 OH- \u2192 R-COO- + Cu2O(red ppt) + 3 H2O",
          "Aldol Condensation: \u03b1-H containing carbonyls + dil. NaOH \u2192 \u03b2-hydroxy aldehyde/ketone",
          "Cannizzaro Reaction: Non-\u03b1-H aldehydes + conc. NaOH \u2192 Alcohol + Carboxylate salt"
        ],
        "quiz": []
      },
      "amines": {
        "name": "Amines",
        "notes": {
          "theoretical": "Amines are nitrogenous organic bases derived from ammonia (NH3). Basic strength depends on lone pair availability on nitrogen.",
          "framework": "Basic strength of aliphatic amines in aqueous solution: 2\u00b0 > 1\u00b0 > 3\u00b0 > NH3 (for methyl amines: (CH3)2NH > CH3NH2 > (CH3)3N > NH3). Aromatic amines (Aniline) are LESS basic than ammonia because lone pair delocalizes into aromatic ring.",
          "strategy": "Hoffmann Bromamide reaction degrades primary acid amides to primary amines containing ONE LESS CARBON atom than starting amide. Carbylamine test uniquely detects primary (1\u00b0) aliphatic or aromatic amines."
        },
        "formulas": [
          "Carbylamine Reaction: R-NH2 + CHCl3 + 3 KOH (alc) \u2192 R-NC (foul smell) + 3 KCl + 3 H2O",
          "Hinsberg Test: Benzenesulfonyl chloride + 1\u00b0 amine \u2192 Soluble in KOH; 2\u00b0 amine \u2192 Insoluble in KOH; 3\u00b0 \u2192 No reaction",
          "Hoffmann Bromamide Degradation: R-CONH2 + Br2 + 4 NaOH \u2192 R-NH2 + Na2CO3 + 2 NaBr + 2 H2O"
        ],
        "quiz": []
      },
      "biomolecules": {
        "name": "Biomolecules",
        "notes": {
          "theoretical": "Biomolecules are complex organic molecules sustaining living organisms, including carbohydrates, proteins, nucleic acids (DNA/RNA), lipids, and enzymes.",
          "framework": "Carbohydrates: Monosaccharides (Glucose, Fructose), Disaccharides (Sucrose = Glucose + Fructose, Maltose = Glucose + Glucose, Lactose = Glucose + Galactose). Sucrose is a NON-REDUCING sugar because anomeric carbons are linked.",
          "strategy": "Proteins are polymers of \u03b1-amino acids linked by peptide bonds (-CO-NH-). Denaturation destroys secondary and tertiary protein structures without breaking primary peptide bonds. RNA contains Uracil (U); DNA contains Thymine (T)."
        },
        "formulas": [
          "Glucose (Aldohexose): C6H12O6, Fructose (Ketohexose): C6H12O6",
          "Peptide Linkage: -CO-NH- formed between amino acid -COOH and -NH2",
          "Isoelectric Point (pI): pH at which amino acid exists predominantly as neutral Zwitterion"
        ],
        "quiz": []
      },
      "polymers": {
        "name": "Polymers & Everyday Chemistry",
        "notes": {
          "theoretical": "Polymers are high-molecular-mass macromolecules formed by repeating monomer units. Addition polymers form without byproduct loss; Condensation polymers form with elimination of small molecules (H2O, HCl, alcohol).",
          "framework": "Vulcanization of natural rubber by heating with sulfur forms disulfide cross-links, dramatically improving elasticity, tensile strength, and thermal stability.",
          "strategy": "Analgesics: Narcotics (Morphine, Codeine) vs Non-narcotics (Aspirin, Paracetamol). Antiseptics (applied to living tissue e.g. Dettol = Chloroxylenol + Terpineol) vs Disinfectants (applied to inanimate objects e.g. 1% Phenol)."
        },
        "formulas": [
          "Addition Polymers: Polyethene, PTFE (Teflon), PVC, Polystyrene",
          "Condensation Polymers: Nylon-6,6 (Adipic acid + Hexamethylenediamine), Terylene/Dacron (Terephthalic acid + Ethylene glycol)",
          "Natural Rubber Monomer: Isoprene (2-methyl-1,3-butadiene)"
        ],
        "quiz": []
      }
    }
  },
  "biology": {
    "diversity_structure": {
      "classification": {
        "name": "Biological Classification",
        "notes": {
          "theoretical": "Biological Classification analyzes Whittaker's Five Kingdom System (Monera, Protista, Fungi, Plantae, Animalia), viral structure, viroids, prions, and taxonomic hierarchy.",
          "framework": "Kingdom Monera includes prokaryotes (eubacteria, archaebacteria). Protista encompasses unicellular eukaryotes (amoeba, paramecium). Fungi feature chitinous cell walls and heterotrophic nutrition.",
          "strategy": "Archaebacteria survive in extreme environments (halophiles, thermoacidophiles, methanogens) due to unique branched-chain lipid cell membrane structures."
        },
        "formulas": [
          "Five Kingdom Classification (Monera, Protista, Fungi, Plantae, Animalia)"
        ],
        "quiz": []
      },
      "plant_kingdom": {
        "name": "Plant Kingdom",
        "notes": {
          "theoretical": "Plant Kingdom surveys Algae, Bryophytes, Pteridophytes, Gymnosperms, and Angiosperms based on vascular organization, seed formation, and alternation of generations.",
          "framework": "Bryophytes (amphibians of plant kingdom) have gametophyte (n) dominant phase. Pteridophytes introduced vascular tissue (xylem/phloem). Gymnosperms produce naked seeds.",
          "strategy": "Double fertilization (syngamy yielding 2n zygote + triple fusion yielding 3n endosperm) is unique exclusively to Angiosperms."
        },
        "formulas": [
          "Alternation of Generations: Gametophyte (n) to Sporophyte (2n)"
        ],
        "quiz": []
      },
      "animal_kingdom": {
        "name": "Animal Kingdom",
        "notes": {
          "theoretical": "Animal Kingdom classifies non-chordates and chordates across phyla (Porifera to Mammalia) using body symmetry, germ layers, coelom type, segmentation, and notochord.",
          "framework": "Pseudocoelom is found exclusively in Phylum Aschelminthes (roundworms). Arthropoda is the largest phylum featuring chitinous exoskeleton and jointed appendages.",
          "strategy": "Chordate diagnostic triad: Notochord, dorsal hollow nerve cord, and paired pharyngeal gill slits present at some developmental stage."
        },
        "formulas": [
          "Symmetry: Bilateral vs Radial",
          "Coelom: Acoelomate, Pseudocoelomate, Coelomate"
        ],
        "quiz": []
      },
      "morphology": {
        "name": "Morphology & Anatomy of Flowering Plants",
        "notes": {
          "theoretical": "Morphology & Anatomy of Flowering Plants covers root, stem, leaf modifications, inflorescence types (racemose vs cymose), floral symmetry, placentation, and internal tissue organization.",
          "framework": "Placentation types: Marginal (Pea), Axile (Tomato), Parietal (Mustard), Free Central (Dianthus), Basal (Sunflower). Monocot roots have polyarch xylem bundles.",
          "strategy": "Monocot stems possess scattered vascular bundles without cambium (closed bundles, no secondary growth), whereas dicot stems feature ringed open bundles."
        },
        "formulas": [
          "Root, Stem, Leaf modifications",
          "Xylem vs Phloem cell structure"
        ],
        "quiz": []
      },
      "organization": {
        "name": "Structural Organisation in Animals",
        "notes": {
          "theoretical": "Structural Organisation in Animals examines animal tissues (Epithelial, Connective, Muscular, Neural) and organ systems in model organisms like cockroach and frog.",
          "framework": "Epithelial tissue types (squamous, cuboidal, columnar, ciliated). Connective tissues comprise bone, cartilage, adipose, and blood containing collagenous matrix.",
          "strategy": "Tight junctions prevent substance leakage across tissues; Adhering junctions cement neighboring cells; Gap junctions facilitate rapid ion communication."
        },
        "formulas": [
          "Epithelial, Connective, Muscular, and Nervous tissues"
        ],
        "quiz": []
      }
    },
    "cell_biology": {
      "cell_life": {
        "name": "Cell: The Unit of Life",
        "notes": {
          "theoretical": "Cell: The Unit of Life covers Cell Theory, prokaryotic vs eukaryotic cell architecture, plasma membrane fluid mosaic model, endomembrane system, and organelle structures.",
          "framework": "Fluid Mosaic Model (Singer & Nicolson): phospholipid bilayer with integral/peripheral proteins. Mitochondria and Chloroplasts contain 70S ribosomes and circular DNA.",
          "strategy": "Mitochondria and Chloroplasts are semi-autonomous organelles originating via endosymbiosis. Lysosomes are rich in hydrolytic enzymes active at acidic pH (~5)."
        },
        "formulas": [
          "Cell Theory: Schleiden, Schwann, and Virchow",
          "Prokaryotic vs Eukaryotic organelles"
        ],
        "quiz": []
      },
      "biomolecules": {
        "name": "Biomolecules (Enzymes, Lipids, Proteins)",
        "formulas": [
          "Michaelis constant K_m",
          "Enzyme inhibition: Competitive vs Non-competitive"
        ],
        "quiz": [],
        "notes": {
          "theoretical": "Biomolecules are organic molecules fundamental to life including carbohydrates, proteins, lipids, and nucleic acids. Enzymes function as biological catalysts lowering activation energy without altering the overall free energy change (\u0394G) or equilibrium constant (K_eq) of reactions. Enzyme kinetics follow Michaelis-Menten principles, where K_m represents substrate concentration at half-maximum velocity (V_max / 2).",
          "framework": "Carbohydrates are classified into monosaccharides, oligosaccharides, and polysaccharides linked by glycosidic bonds. Proteins consist of L-amino acids joined by peptide bonds, exhibiting primary, secondary, tertiary, and quaternary structures. Lipids encompass simple fats, compound phospholipids, and derived steroids. Enzyme activity is regulated by pH, temperature, and specific inhibitors: competitive inhibitors increase K_m without altering V_max, whereas non-competitive inhibitors decrease V_max while keeping K_m constant.",
          "strategy": "High-yield CEE/NEET targets: enzyme inhibition curves (K_m and V_max shifts), peptide bond formation via condensation, zwitterion behavior of amino acids at their isoelectric point (pI), and structural differences between nucleic acids (DNA vs RNA nitrogenous bases and pentose sugars)."
        }
      },
      "cell_cycle": {
        "name": "Cell Cycle & Division",
        "notes": {
          "theoretical": "Cell Cycle & Division investigates interphase (G1, S, G2 phase DNA synthesis), Mitotic chromosome segregation, and Meiotic reduction division leading to genetic variation.",
          "framework": "S-phase doubles DNA content (2C to 4C) while chromosome number stays 2n. Meiosis I Prophase I stages: Leptotene, Zygotene (synapsis), Pachytene (crossing over), Diplotene (chiasmata), Diakinesis.",
          "strategy": "Recombination and crossing over occur specifically during the Pachytene stage of Prophase I, mediated by the enzyme recombinase."
        },
        "formulas": [
          "Mitosis: Prophase, Metaphase, Anaphase, Telophase",
          "Meiosis: Crossing over at Pachytene of Prophase I"
        ],
        "quiz": []
      }
    },
    "plant_physiology": {
      "transport": {
        "name": "Transport & Mineral Nutrition",
        "notes": {
          "theoretical": "Transport in Plants and Mineral Nutrition explores water potential components, apoplast/symplast pathways, transpiration pull theory, phloem translocation, and essential elements.",
          "framework": "Water potential \u03a8_w = \u03a8_s + \u03a8_p. Transpiration pull theory (Cohesion-Tension model). Nitrogen cycle and biological nitrogen fixation by Rhizobium nitrogenase complex.",
          "strategy": "Water always moves from higher water potential (less negative) to lower water potential (more negative). Pure water at standard pressure has \u03a8_w = 0."
        },
        "formulas": [
          "Water Potential \u03a8_w = \u03a8_s + \u03a8_p",
          "Essential macronutrients and micronutrients"
        ],
        "quiz": []
      },
      "photosynthesis": {
        "name": "Photosynthesis",
        "notes": {
          "theoretical": "Photosynthesis explores light reaction Z-scheme (ATP & NADPH synthesis in thylakoids) and dark reaction carbon fixation pathways (C3 Calvin Cycle vs C4 Hatch-Slack pathway).",
          "framework": "C4 plants avoid photorespiration via Kranz anatomy isolating RuBisCO in bundle sheath cells. Primary CO2 acceptor in C4 is PEP (phosphoenolpyruvate), producing oxaloacetate.",
          "strategy": "Photorespiration (C2 cycle) occurs in C3 plants when RuBisCO binds O2 instead of CO2 under high temp and O2 levels, consuming ATP without producing sugar."
        },
        "formulas": [
          "6CO2 + 6H2O -> C6H12O6 + 6O2",
          "Z-scheme of light reaction",
          "Calvin Cycle phases"
        ],
        "quiz": []
      },
      "respiration": {
        "name": "Respiration",
        "notes": {
          "theoretical": "Cellular Respiration covers anaerobic glycolysis, pyruvate decarboxylation, Krebs TCA cycle in mitochondrial matrix, electron transport chain (ETC), and oxidative phosphorylation.",
          "framework": "Glycolysis (EMBP pathway) converts 1 glucose into 2 pyruvate, yielding net 2 ATP and 2 NADH. Total theoretical yield from aerobic respiration is 36-38 ATP per glucose.",
          "strategy": "Respiratory Quotient (RQ) = Vol of CO2 evolved / Vol of O2 consumed. RQ for carbohydrates = 1.0, fats \u2248 0.7, proteins \u2248 0.9, organic acids > 1.0."
        },
        "formulas": [
          "Glycolysis yields 2 Pyruvate + 2 ATP + 2 NADH",
          "Krebs Cycle ATP yield per glucose = 36-38 ATP"
        ],
        "quiz": []
      },
      "growth": {
        "name": "Plant Growth & Development",
        "notes": {
          "theoretical": "Plant Growth & Development investigates plant hormones (Auxins, Gibberellins, Cytokinins, Abscisic Acid, Ethylene), photoperiodism, phytochrome signaling, and vernalization.",
          "framework": "Auxin promotes apical dominance and rooting. Gibberellin causes internodal elongation (bolting). Cytokinin promotes cell division. ABA acts as stress hormone inducing stomatal closure.",
          "strategy": "Ethylene is the sole gaseous plant hormone responsible for fruit ripening. ABA acts antagonistically to Gibberellins in seed dormancy."
        },
        "formulas": [
          "Phytohormones: Auxin, Gibberellin, Cytokinin, ABA, Ethylene"
        ],
        "quiz": []
      }
    },
    "human_physiology": {
      "digestion": {
        "name": "Digestion & Breathing",
        "notes": {
          "theoretical": "Digestion and Breathing covers human alimentary canal digestive enzymes (pepsin, trypsin, lipase), nutrient absorption, respiratory structures, pulmonary capacities, and gas exchange.",
          "framework": "Human dental formula: 2123 / 2123. Vital Capacity VC = TV + IRV + ERV. Oxygen dissociation curve shifts right (Bohr effect) under high pCO2, high H+, and high temp.",
          "strategy": "Carbon monoxide has ~200 times higher affinity for hemoglobin than oxygen, forming stable carboxyhemoglobin and preventing O2 transport."
        },
        "formulas": [
          "Dental Formula: 2123/2123",
          "Bohr Effect: Hemoglobin oxygen dissociation"
        ],
        "quiz": []
      },
      "circulation": {
        "name": "Body Fluids & Circulation",
        "notes": {
          "theoretical": "Body Fluids & Circulation explores blood plasma components, formed elements, ABO/Rh blood grouping, double circulation, cardiac cycle phases, ECG waves, and blood pressure regulation.",
          "framework": "Cardiac Output = Stroke Volume (~70 mL) \u00d7 Heart Rate (~72 bpm) \u2248 5 L/min. ECG waves: P-wave (atrial depolarization), QRS complex (ventricular depolarization), T-wave (ventricular repolarization).",
          "strategy": "Erythroblastosis fetalis occurs when an Rh-negative mother carries an Rh-positive fetus during second pregnancy due to maternal anti-Rh IgG antibodies."
        },
        "formulas": [
          "Cardiac Output = Stroke Volume * Heart Rate",
          "ECG: P-wave, QRS complex, T-wave"
        ],
        "quiz": []
      },
      "excretion": {
        "name": "Excretory Products",
        "notes": {
          "theoretical": "Excretory Products & Elimination details nephron anatomy, ultrafiltration at glomerulus, selective tubular reabsorption, countercurrent mechanism, and hormonal regulation (ADH, RAAS).",
          "framework": "Glomerular Filtration Rate GFR \u2248 125 mL/min (180 L/day). Loop of Henle countercurrent multiplier maintains medullary osmotic gradient (300 to 1200 mOsmol/L).",
          "strategy": "ADH (Vasopressin) increases water reabsorption in distal convoluted tubule and collecting duct, producing concentrated urine. ANF opposes RAAS by inducing vasodilation."
        },
        "formulas": [
          "Glomerular Filtration Rate GFR = 125 mL/min",
          "Countercurrent multiplier mechanism in Loop of Henle"
        ],
        "quiz": []
      },
      "locomotion": {
        "name": "Locomotion",
        "notes": {
          "theoretical": "Locomotion and Movement explores skeletal muscle ultrastructure, sliding filament theory of muscle contraction (actin, myosin, troponin, tropomyosin), axial/appendicular skeleton, and joint types.",
          "framework": "Sarcomere is the functional unit between two Z-lines. During contraction, H-zone and I-band shorten while A-band length remains constant.",
          "strategy": "Troponin-C binds Ca\u00b2\u207a ions released from sarcoplasmic reticulum, causing tropomyosin to shift and expose myosin-binding sites on actin filaments."
        },
        "formulas": [
          "Sarcomere structure: Actin and Myosin filaments",
          "Types of joints: Synovial, Cartilaginous, Fibrous"
        ],
        "quiz": []
      },
      "neural": {
        "name": "Neural Control",
        "notes": {
          "theoretical": "Neural Control & Coordination details neuron structure, nerve impulse conduction across myelinated axons (resting potential, action potential depolarization), synapses, and brain central processing.",
          "framework": "Resting membrane potential (-70 mV) maintained by Na+/K+ ATPase pump (3 Na+ out / 2 K+ in). Action potential depolarization caused by rapid influx of Na+ through voltage-gated channels.",
          "strategy": "Transmission across chemical synapses involves neurotransmitter release (e.g. Acetylcholine) triggered by Ca\u00b2\u207a influx into presynaptic axon terminals."
        },
        "formulas": [
          "Resting membrane potential = -70 mV",
          "Reflex arc components"
        ],
        "quiz": []
      },
      "coordination": {
        "name": "Chemical Coordination (Hormones)",
        "formulas": [
          "Hypothalamus-Pituitary axis",
          "Mechanism of peptide vs steroid hormones"
        ],
        "quiz": [],
        "notes": {
          "theoretical": "Chemical coordination is mediated by endocrine glands secreting hormones directly into the circulation to act on specific target cells. Hormones bind to specific membrane-bound receptors (peptide and protein hormones utilizing second messengers such as cAMP, IP3, and Ca2+) or intracellular/nuclear receptors (steroid and thyroid hormones directly altering gene transcription).",
          "framework": "The hypothalamus-pituitary axis integrates nervous and endocrine control. The anterior pituitary secretes GH, TSH, ACTH, LH, FSH, and PRL under hypothalamic release control. The posterior pituitary stores and releases neurohormones oxytocin and vasopressin (ADH). Key endocrine organs include Thyroid (T3, T4, Calcitonin), Parathyroids (PTH), Adrenal Glands (cortex: Aldosterone, Cortisol; medulla: Epinephrine, Norepinephrine), Pancreas (Insulin, Glucagon), and Pineal Gland (Melatonin).",
          "strategy": "Focus heavily on endocrine disorders: Acromegaly, Diabetes Insipidus (lack of ADH) vs Diabetes Mellitus (insulin defect), Addison's disease, Cushing's syndrome, Grave's disease, and Cretinism. Memorize antagonistic hormone pairs: Calcitonin (lowers blood Ca2+) vs PTH (raises blood Ca2+), and Insulin (hypoglycemic) vs Glucagon (hyperglycemic)."
        }
      }
    },
    "reproduction_genetics": {
      "reproduction": {
        "name": "Plant & Human Reproduction",
        "notes": {
          "theoretical": "Reproduction in Plants & Humans covers microsporogenesis/megasporogenesis in flower ovules, male/female human reproductive organs, gametogenesis, menstrual cycle phases, and fertilization.",
          "framework": "Menstrual cycle: LH surge triggers ovulation on ~14th day. Human blastocyst implants into endometrial lining. Embryonic chorionic gonadotropin (hCG) maintains corpus luteum.",
          "strategy": "Double fertilization in angiosperms produces diploid zygote (2n) and triploid primary endosperm nucleus (3n)."
        },
        "formulas": [
          "Double Fertilization: Zygote (2n) + Endosperm (3n)",
          "Spermatogenesis and Oogenesis stages"
        ],
        "quiz": []
      },
      "mendelian": {
        "name": "Mendelian Genetics",
        "notes": {
          "theoretical": "Mendelian Genetics explores inheritance principles (Dominance, Segregation, Independent Assortment), monohybrid/dihybrid crosses, incomplete dominance, codominance, and sex-linked traits.",
          "framework": "Monohybrid ratio: 3:1 phenotypic, 1:2:1 genotypic. Dihybrid phenotypic ratio: 9:3:3:1. ABO blood groups exhibit codominance (I^A and I^B) and multiple alleles.",
          "strategy": "Test cross involves crossing an individual displaying dominant phenotype with a homozygous recessive parent to reveal the unknown genotype."
        },
        "formulas": [
          "Monohybrid Ratio = 3:1 (Phenotypic) / 1:2:1 (Genotypic)",
          "Dihybrid Phenotypic Ratio = 9:3:3:1"
        ],
        "quiz": []
      },
      "molecular": {
        "name": "Molecular Basis of Inheritance (DNA/RNA)",
        "notes": {
          "theoretical": "Molecular Basis of Inheritance details DNA double helix structure, Hershey-Chase experiment, Meselson-Stahl semi-conservative replication, Transcription, Genetic Code, Translation, and Lac Operon.",
          "framework": "Chargaff's Rule: A = T, G = C; (A+G)/(T+C) = 1. Central Dogma: DNA -> RNA -> Protein. Lac Operon repressor protein binds operator in absence of lactose (inducer).",
          "strategy": "Genetic code is universal, degenerate (multiple codons per amino acid), non-overlapping, and unambiguous. AUG functions as start codon coding for Methionine."
        },
        "formulas": [
          "Chargaff's Rule: A + G = T + C",
          "Transcription and Translation direction: 5' to 3'"
        ],
        "quiz": []
      },
      "evolution": {
        "name": "Evolution",
        "notes": {
          "theoretical": "Evolution explores theories of origin of life (Oparin-Haldane, Miller-Urey), Darwinian natural selection, homologous vs analogous structures, adaptive radiation, and Hardy-Weinberg equilibrium.",
          "framework": "Hardy-Weinberg Equation: p\u00b2 + 2pq + q\u00b2 = 1. Homologous organs (same origin, different function e.g. human arm & bat wing) show divergent evolution.",
          "strategy": "Analogous organs (different origin, same function e.g. insect wing & bird wing) demonstrate convergent evolution driven by similar ecological pressures."
        },
        "formulas": [
          "Hardy-Weinberg equilibrium: p^2 + 2pq + q^2 = 1",
          "Homologous vs Analogous organs"
        ],
        "quiz": []
      }
    },
    "biotechnology_ecology": {
      "biotech": {
        "name": "Principles & Applications",
        "notes": {
          "theoretical": "Biotechnology Principles & Applications details recombinant DNA technology, restriction endonucleases, plasmid vectors, PCR amplification, Bt cotton, gene therapy, and RNA interference.",
          "framework": "Restriction enzymes cut at specific palindromic DNA sequences. Polymerase Chain Reaction (PCR) stages: Denaturation (94\u00b0C), Annealing (55\u00b0C), Extension (72\u00b0C using Taq polymerase).",
          "strategy": "Taq DNA polymerase isolated from Thermus aquaticus is thermostable and remains active during high-temperature PCR denaturation steps."
        },
        "formulas": [
          "Recombinant DNA: Restriction enzymes and Ligases",
          "PCR steps: Denaturation, Annealing, Extension"
        ],
        "quiz": []
      },
      "health": {
        "name": "Human Health and Disease",
        "notes": {
          "theoretical": "Human Health and Disease investigates infectious pathogens (Malaria, Typhoid, Pneumonia, AIDS), immunity (Innate, Acquired, Active, Passive), vaccines, allergies, and cancer biology.",
          "framework": "Plasmodium life cycle: sexual cycle in female Anopheles mosquito, asexual schizogony in human liver/RBCs. Antibodies (IgG, IgA, IgM, IgE, IgD) possess 2 heavy and 2 light chains.",
          "strategy": "IgA is present in colostrum providing passive immunity to newborns. IgE mediates allergic hypersensitivity reactions by releasing histamine from mast cells."
        },
        "formulas": [
          "Active vs Passive Immunity",
          "Pathogens: Malaria life cycle, Typhoid, AIDS"
        ],
        "quiz": []
      },
      "populations": {
        "name": "Populations",
        "notes": {
          "theoretical": "Organisms and Populations explores ecological adaptations, biotic interactions (mutualism, competition, predation, parasitism, commensalism), population growth models, and age pyramids.",
          "framework": "Exponential growth dN/dt = rN. Logistic growth dN/dt = rN (1 - N/K) where K is carrying capacity and r is intrinsic rate of natural increase.",
          "strategy": "Gause's Competitive Exclusion Principle states two closely related species competing for identical limited resources cannot coexist indefinitely."
        },
        "formulas": [
          "Population growth equation: dN/dt = rN(1 - N/K)"
        ],
        "quiz": []
      },
      "ecology": {
        "name": "Ecosystems & Biodiversity",
        "notes": {
          "theoretical": "Ecosystems & Biodiversity details ecological pyramids of energy/biomass, energy flow (Lindeman's 10% law), biogeochemical cycles, biodiversity hot spots, and conservation strategies.",
          "framework": "Lindeman's 10% Law: only ~10% of energy is transferred to next trophic level. Pyramids of energy are ALWAYS upright in all ecosystems.",
          "strategy": "In situ conservation protects species in natural habitats (National Parks, Biosphere Reserves), whereas Ex situ conservation involves Seed Banks and Zoos."
        },
        "formulas": [
          "Lindeman's 10% Energy Law",
          "Species-Area relationship: log S = log C + Z log A"
        ],
        "quiz": []
      }
    }
  },
  "mathematics": {
    "algebra": {
      "sets": {
        "name": "Sets, Relations, & Functions",
        "notes": {
          "theoretical": "Sets, Relations, and Functions explores set operations (union, intersection, Cartesian product), relation properties (reflexive, symmetric, transitive, equivalence), and function mappings.",
          "framework": "n(A \u222a B) = n(A) + n(B) - n(A \u2229 B). Bijective function is both injective (one-to-one) and surjective (onto), allowing an invertible inverse function f\u207b\u00b9.",
          "strategy": "To verify an equivalence relation, systematically check all three requirements: reflexivity (aRa), symmetry (aRb \u21d2 bRa), and transitivity (aRb & bRc \u21d2 aRc)."
        },
        "formulas": [
          "n(A U B) = n(A) + n(B) - n(A \u2229 B)",
          "Domain and Range calculation"
        ],
        "quiz": []
      },
      "complex": {
        "name": "Complex Numbers & Quadratics",
        "notes": {
          "theoretical": "Complex Numbers and Quadratic Equations covers complex algebra, Euler's formula e^(i\u03b8) = cos \u03b8 + i sin \u03b8, De Moivre's theorem, cube roots of unity, and quadratic roots/discriminant.",
          "framework": "Cube roots of unity: 1 + \u03c9 + \u03c9\u00b2 = 0 and \u03c9\u00b3 = 1. Quadratic ax\u00b2 + bx + c = 0 has roots \u03b1, \u03b2 with \u03b1+\u03b2 = -b/a, \u03b1\u03b2 = c/a. Discriminant D = b\u00b2 - 4ac.",
          "strategy": "Modulus |z1 + z2| \u2264 |z1| + |z2| (Triangle Inequality). Conjugate of complex number z = x + iy is z\u0304 = x - iy, with z z\u0304 = |z|\u00b2."
        },
        "formulas": [
          "1 + \u03c9 + \u03c9^2 = 0",
          "z = x + iy = r * e^(i\u03b8)",
          "Roots of quadratic ax^2 + bx + c = 0"
        ],
        "quiz": []
      },
      "inequalities": {
        "name": "Linear Inequalities",
        "notes": {
          "theoretical": "Linear Inequalities and Absolute Value equations study domain intervals, sign-scheme (wavy curve) methods, arithmetic-geometric mean inequalities (AM \u2265 GM \u2265 HM).",
          "framework": "For positive real numbers: AM = (a+b)/2 \u2265 GM = \u221a(ab) \u2265 HM = 2ab/(a+b). Absolute value inequality |x| < a \u21d4 -a < x < a.",
          "strategy": "When multiplying or dividing both sides of an inequality by a negative number, always reverse the inequality sign."
        },
        "formulas": [
          "Interval notation, sign scheme method"
        ],
        "quiz": []
      },
      "permutations": {
        "name": "Permutations & Combinations",
        "notes": {
          "theoretical": "Permutations and Combinations deals with fundamental counting principles, factorial notation, arrangements of distinct and duplicate items, combinations, and circular permutations.",
          "framework": "Permutations nPr = n! / (n-r)!. Combinations nCr = n! / [r! (n-r)!]. Circular permutations of n distinct objects = (n-1)!.",
          "strategy": "Remember identity nCr = nC(n-r) and Pascal's identity nCr + nC(r-1) = (n+1)Cr."
        },
        "formulas": [
          "nPr = n! / (n - r)!",
          "nCr = n! / (r! * (n - r)!)"
        ],
        "quiz": []
      },
      "binomial": {
        "name": "Binomial Theorem",
        "notes": {
          "theoretical": "Binomial Theorem expands (a + b)^n for positive integer and rational indices, determining general terms, middle terms, greatest terms, and binomial coefficients properties.",
          "framework": "General term T_(r+1) = nCr a^(n-r) b^r. Sum of binomial coefficients C0 + C1 + ... + Cn = 2^n. Sum of even/odd coefficients = 2^(n-1).",
          "strategy": "If n is even, there is 1 middle term at r = n/2. If n is odd, there are 2 middle terms at r = (n-1)/2 and r = (n+1)/2."
        },
        "formulas": [
          "General term T_(r+1) = nCr * a^(n-r) * b^r"
        ],
        "quiz": []
      },
      "sequences": {
        "name": "Sequences & Series (AP, GP, HP)",
        "notes": {
          "theoretical": "Sequences and Series analyzes Arithmetic Progressions (AP), Geometric Progressions (GP), Harmonic Progressions (HP), arithmetico-geometric series, and special sum of series.",
          "framework": "AP sum S_n = n/2 [2a + (n-1)d]. GP sum S_n = a(r^n - 1)/(r-1); infinite GP sum S_\u221e = a / (1 - r) for |r| < 1.",
          "strategy": "Sum of first n natural numbers \u03a3n = n(n+1)/2. Sum of squares \u03a3n\u00b2 = n(n+1)(2n+1)/6. Sum of cubes \u03a3n\u00b3 = [n(n+1)/2]\u00b2."
        },
        "formulas": [
          "AP Sum S_n = n/2 * (2a + (n-1)d)",
          "GP Sum S_n = a(r^n - 1) / (r - 1)"
        ],
        "quiz": []
      },
      "matrices": {
        "name": "Matrices & Determinants",
        "notes": {
          "theoretical": "Matrices and Determinants explores matrix operations, transpose, symmetric/skew-symmetric matrices, determinant properties, matrix inversion, and Cramer's rule for linear systems.",
          "framework": "Inverse Matrix A\u207b\u00b9 = (1 / |A|) adj(A). System AX = B has unique solution X = A\u207b\u00b9 B if |A| \u2260 0. Cramer's Rule x = D1/D, y = D2/D, z = D3/D.",
          "strategy": "If |A| = 0 and (adj A)B \u2260 0, the system of equations has NO solution (inconsistent). If |A| = 0 and (adj A)B = 0, infinitely many solutions exist."
        },
        "formulas": [
          "A * A^-1 = I",
          "Cramer's Rule for system of linear equations"
        ],
        "quiz": []
      }
    },
    "trigonometry": {
      "identities": {
        "name": "Functions & Identities",
        "notes": {
          "theoretical": "Trigonometric Functions & Identities covers compound angle formulas, multiple/submultiple angles, sum-to-product transformations, trigonometric equations, and general solutions.",
          "framework": "sin\u00b2A + cos\u00b2A = 1. sin(A\u00b1B) = sinA cosB \u00b1 cosA sinB. cos 2A = cos\u00b2A - sin\u00b2A = 2cos\u00b2A - 1 = 1 - 2sin\u00b2A. tan 2A = 2tanA / (1 - tan\u00b2A).",
          "strategy": "General solution for sin \u03b8 = sin \u03b1 is \u03b8 = n\u03c0 + (-1)\u207f \u03b1. General solution for cos \u03b8 = cos \u03b1 is \u03b8 = 2n\u03c0 \u00b1 \u03b1."
        },
        "formulas": [
          "sin^2(A) + cos^2(A) = 1",
          "sin(2A) = 2sin(A)cos(A)",
          "cos(2A) = cos^2(A) - sin^2(A)"
        ],
        "quiz": []
      },
      "inverse": {
        "name": "Inverse Trigonometric Functions",
        "notes": {
          "theoretical": "Inverse Trigonometric Functions explores principal domain and range bounds for sin\u207b\u00b9x, cos\u207b\u00b9x, tan\u207b\u00b9x, and key transformation properties and identities.",
          "framework": "sin\u207b\u00b9(x) + cos\u207b\u00b9(x) = \u03c0/2 for x \u2208 [-1, 1]. tan\u207b\u00b9(x) + tan\u207b\u00b9(y) = tan\u207b\u00b9[(x+y)/(1-xy)] for xy < 1.",
          "strategy": "Always restrict inverse trigonometric expressions to their principal value branches: sin\u207b\u00b9x \u2208 [-\u03c0/2, \u03c0/2], cos\u207b\u00b9x \u2208 [0, \u03c0]."
        },
        "formulas": [
          "sin^-1(x) + cos^-1(x) = \u03c0/2",
          "tan^-1(x) + tan^-1(y) = tan^-1((x+y)/(1-xy))"
        ],
        "quiz": []
      }
    },
    "geometry": {
      "lines": {
        "name": "Straight Lines",
        "notes": {
          "theoretical": "Straight Lines in 2D coordinate geometry studies slope, line forms (slope-intercept, point-slope, two-point, intercept, normal), distance formulas, and concurrency.",
          "framework": "Distance d = \u221a[(x2-x1)\u00b2 + (y2-y1)\u00b2]. Perpendicular distance from point (x1, y1) to ax + by + c = 0 is |ax1 + by1 + c| / \u221a(a\u00b2 + b\u00b2). Angle between lines tan \u03b8 = |(m2 - m1) / (1 + m1 m2)|.",
          "strategy": "Two lines are parallel if m1 = m2. They are perpendicular if m1 \u00d7 m2 = -1."
        },
        "formulas": [
          "Slope m = (y2 - y1) / (x2 - x1)",
          "Equation y - y1 = m(x - x1)",
          "Distance d = |ax1 + by1 + c| / sqrt(a^2 + b^2)"
        ],
        "quiz": []
      },
      "conics": {
        "name": "Conic Sections (Circles, Parabola, Ellipse, Hyperbola)",
        "notes": {
          "theoretical": "Conic Sections explores standard equations, eccentricity, focal properties, tangents, and normal equations for Circles, Parabolas, Ellipses, and Hyperbolas.",
          "framework": "Circle (x-h)\u00b2 + (y-k)\u00b2 = r\u00b2. Parabola y\u00b2 = 4ax (e = 1). Ellipse x\u00b2/a\u00b2 + y\u00b2/b\u00b2 = 1 (e = \u221a(1 - b\u00b2/a\u00b2) < 1). Hyperbola x\u00b2/a\u00b2 - y\u00b2/b\u00b2 = 1 (e = \u221a(1 + b\u00b2/a\u00b2) > 1).",
          "strategy": "Eccentricity e = 0 for circle, e = 1 for parabola, 0 < e < 1 for ellipse, e > 1 for hyperbola, e = \u221a2 for rectangular hyperbola."
        },
        "formulas": [
          "Circle x^2 + y^2 = r^2",
          "Parabola y^2 = 4ax",
          "Ellipse x^2/a^2 + y^2/b^2 = 1"
        ],
        "quiz": []
      }
    }
  },
  "mentalAgility": [
    {
      "id": 1,
      "type": "MAT",
      "question": "Which number should come next in the sequence: 2, 6, 12, 20, 30, ...?",
      "options": [
        "38",
        "40",
        "42",
        "46"
      ],
      "correct": 2,
      "explanation": "The differences between consecutive terms are +4, +6, +8, +10. Following this pattern, the next difference must be +12. 30 + 12 = 42."
    },
    {
      "id": 2,
      "type": "MAT",
      "question": "If 'DOCTOR' is coded as 'FQAQRT', how would 'PATIENT' be coded under the same logic?",
      "options": [
        "RCVKGPV",
        "RCVKGRV",
        "RDVJGNT",
        "RCVJGOT"
      ],
      "correct": 0,
      "explanation": "The coding shifts letters forward in the alphabet by +2: P(+2)->R, A(+2)->C, T(+2)->V, I(+2)->K, E(+2)->G, N(+2)->P, T(+2)->V. This matches RCVKGPV."
    },
    {
      "id": 3,
      "type": "MAT",
      "question": "Identify the odd one out from the following options:",
      "options": [
        "Lungs",
        "Heart",
        "Kidneys",
        "Liver"
      ],
      "correct": 1,
      "explanation": "Lungs, kidneys, and liver are primary excretory/metabolic organs. The heart is purely circulatory and hollow."
    },
    {
      "id": 4,
      "type": "MAT",
      "question": "If 5 workers can build a wall in 12 days, how many days would it take 6 workers to build the same wall?",
      "options": [
        "8 days",
        "10 days",
        "14 days",
        "15 days"
      ],
      "correct": 1,
      "explanation": "Man-days remain constant: 5 * 12 = 60 man-days. Days required for 6 workers = 60 / 6 = 10 days."
    },
    {
      "id": 5,
      "type": "MAT",
      "question": "Choose the word that is most opposite in meaning to 'OBSTINATE':",
      "options": [
        "Stubborn",
        "Flexible",
        "Rigid",
        "Dogmatic"
      ],
      "correct": 1,
      "explanation": "Obstinate means stubborn. The opposite is flexible."
    },
    {
      "id": 6,
      "type": "MAT",
      "question": "Which letter replaces the question mark in the sequence: A, D, I, P, ...?",
      "options": [
        "V",
        "W",
        "Y",
        "Z"
      ],
      "correct": 2,
      "explanation": "The letters correspond to square numbers: A = 1st letter (1\u00b2), D = 4th letter (2\u00b2), I = 9th letter (3\u00b2), P = 16th (4\u00b2). The next is 25th (5\u00b2), which is Y."
    },
    {
      "id": 7,
      "type": "MAT",
      "question": "A clock shows 3:15. What is the angle between the hour and minute hands?",
      "options": [
        "0 degrees",
        "7.5 degrees",
        "15 degrees",
        "30 degrees"
      ],
      "correct": 1,
      "explanation": "At 3:15, the hour hand has moved forward by 15 minutes. Speed of hour hand = 0.5 degrees/minute. Angle = 15 * 0.5 = 7.5 degrees."
    },
    {
      "id": 8,
      "type": "MAT",
      "question": "Pointing to a photograph, Rohan said, 'Her brother's father is the only son of my grandfather.' How is the lady in the photograph related to Rohan?",
      "options": [
        "Mother",
        "Aunt",
        "Sister",
        "Cousin"
      ],
      "correct": 2,
      "explanation": "'Only son of Rohan's grandfather' is Rohan's father. 'Her brother's father' is that lady's father. Thus, they are siblings."
    },
    {
      "id": 9,
      "type": "MAT",
      "question": "If '+' means '\u00d7', '\u00d7' means '\u00f7', '\u00f7' means '-', and '-' means '+', evaluate: 12 + 3 \u00d7 2 - 8 \u00f7 4",
      "options": [
        "18",
        "20",
        "22",
        "24"
      ],
      "correct": 2,
      "explanation": "Substitute symbols: 12 \u00d7 3 \u00f7 2 + 8 - 4 = 18 + 8 - 4 = 22."
    },
    {
      "id": 10,
      "type": "MAT",
      "question": "A man walks 6 km North, then turns East and walks 8 km. How far is he from his starting point?",
      "options": [
        "10 km",
        "12 km",
        "14 km",
        "16 km"
      ],
      "correct": 0,
      "explanation": "Using Pythagoras theorem: d = sqrt(6^2 + 8^2) = 10 km."
    }
  ]
};
