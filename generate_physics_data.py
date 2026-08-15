import json, re, sys

physics_data = {
  "units": {
    "name": "Units, Dimensions, & Vectors",
    "formulas": [
      "Dimension of G: [M^-1 L^3 T^-2]",
      "Dimension of Planck's Constant (h): [M L^2 T^-1]",
      "Dimension of Permeability (μ_0): [M L T^-2 A^-2]",
      "Dot Product: A . B = AB cos(θ)",
      "Cross Product Magnitude: |A x B| = AB sin(θ)",
      "Vector Resultant: R = sqrt(A^2 + B^2 + 2AB cos θ)",
      "Direction of Resultant: tan(α) = (B sin θ) / (A + B cos θ)",
      "Unit Vector: a_hat = A / |A|"
    ],
    "notes": {
      "theoretical": "Units and dimensions form the analytical foundation of physical quantities. Base SI units (m, kg, s, A, K, mol, cd) define fundamental dimensions. Vector algebra handles physical quantities possessing both magnitude and direction that satisfy the law of vector addition.",
      "framework": "Principle of Dimensional Homogeneity mandates equal dimensions across added or equated terms in any valid physical law. Dot product evaluates scalar projection (Work W = F.s, Flux Φ = B.A), while cross product produces a perpendicular vector (Torque τ = r x F, Angular Momentum L = r x p).",
      "strategy": "Rapidly eliminate incorrect choices in CEE MCQs using dimensional analysis. Remember that trigonometric, exponential, and logarithmic functions must take dimensionless arguments. Resultant vector magnitude ranges strictly between |A-B| and (A+B)."
    }
  },
  "kinematics": {
    "name": "Kinematics",
    "formulas": [
      "v = u + at",
      "s = ut + 0.5 a t^2",
      "v^2 = u^2 + 2 a s",
      "Distance in nth second: s_nth = u + 0.5 a (2n - 1)",
      "Average velocity (constant a): v_avg = (u + v) / 2",
      "Acceleration: a = dv/dt = v (dv/ds)",
      "Relative velocity (A w.r.t B): v_AB = v_A - v_B"
    ],
    "notes": {
      "theoretical": "Kinematics describes motion in terms of position, displacement, velocity, and acceleration without reference to the underlying forces. Differentiation converts position to velocity and velocity to acceleration; integration reverses this path.",
      "framework": "For uniform acceleration, standard equations (v = u + at, s = ut + 0.5at^2, v^2 = u^2 + 2as) govern motion. The slope of a displacement-time graph equals instantaneous velocity, while the area under a velocity-time graph equals displacement.",
      "strategy": "Pay strict attention to sign conventions in vertical motion under gravity. At the maximum height of a vertical throw, velocity becomes zero while acceleration remains constant at -g (-9.8 m/s^2 or -10 m/s^2)."
    }
  },
  "projectile": {
    "name": "Projectile & Circular Motion",
    "formulas": [
      "Time of Flight: T = (2 u sin θ) / g",
      "Maximum Height: H = (u^2 sin^2 θ) / (2 g)",
      "Horizontal Range: R = (u^2 sin 2θ) / g",
      "Equation of Trajectory: y = x tan θ - (g x^2) / (2 u^2 cos^2 θ)",
      "Centripetal Acceleration: a_c = v^2 / r = ω^2 r",
      "Centripetal Force: F_c = m v^2 / r",
      "Optimum speed on banked road (no friction): v = sqrt(r g tan θ)",
      "Maximum safe speed on flat rough road: v_max = sqrt(μ r g)"
    ],
    "notes": {
      "theoretical": "Projectile motion is two-dimensional motion under constant downward gravitational acceleration with zero horizontal acceleration. Circular motion involves continuous velocity vector rotation governed by a radial centripetal acceleration towards the center.",
      "framework": "Horizontal component u_x = u cos θ remains constant throughout projectile flight, while vertical component u_y = u sin θ undergoes uniform gravitational retardation. In uniform circular motion (UCM), speed is constant but acceleration a_c = v^2/r is non-zero due to direction change.",
      "strategy": "Maximum projectile range occurs at θ = 45°. Complementary angles of projection (θ and 90°-θ) yield identical horizontal ranges for the same initial velocity. In circular motion, work done by centripetal force is always ZERO because force is perpendicular to velocity."
    }
  },
  "newton": {
    "name": "Newton’s Laws of Motion",
    "formulas": [
      "Net Force: F_net = dp/dt = m a",
      "Impulse: J = ∫ F dt = Δp = m(v - u)",
      "Limiting Static Friction: f_s_max = μ_s N",
      "Kinetic Friction: f_k = μ_k N",
      "Apparent weight in accelerating elevator (upwards): N = m(g + a)",
      "Apparent weight in accelerating elevator (downwards): N = m(g - a)",
      "Atwood Machine Acceleration: a = (m_2 - m_1) g / (m_1 + m_2)",
      "Atwood Machine Tension: T = (2 m_1 m_2 g) / (m_1 + m_2)"
    ],
    "notes": {
      "theoretical": "Newton's laws form the dynamic foundation of classical mechanics. First law defines inertia and inertial frames; Second law defines force as rate of momentum change; Third law states equal and opposite reaction forces act on distinct bodies.",
      "framework": "Force F = ma applies when mass is constant. Friction is a contact force opposing relative surface movement. Static friction is self-adjusting up to f_s_max = μ_s N, after which sliding kinetic friction f_k = μ_k N (with μ_k < μ_s) governs.",
      "strategy": "Always construct Free Body Diagrams (FBD) isolating individual system masses. Choose a coordinate system aligned with the direction of acceleration. Remember that contact normal force N is perpendicular to the contact surface, not necessarily equal to mg."
    }
  },
  "work": {
    "name": "Work, Energy, & Power",
    "formulas": [
      "W = F . s = Fs cos(θ)",
      "KE = 0.5 m v^2",
      "PE = mgh",
      "Work-Energy Theorem: W_net = ΔKE = 0.5 m (v^2 - u^2)",
      "Power: P = dW/dt = F . v = Fv cos(θ)",
      "Spring Potential Energy: U = 0.5 k x^2",
      "Coefficient of Restitution: e = (v_2 - v_1) / (u_1 - u_2)",
      "1 h.p. = 746 W, 1 kWh = 3.6 x 10^6 J"
    ],
    "notes": {
      "theoretical": "Work is done when a force produces displacement along its line of action. Energy is the capacity to perform work, existing as kinetic energy of motion and potential energy of system configuration under conservative forces.",
      "framework": "Work-Energy theorem dictates W_net = ΔKE. Conservative forces (gravity, electrostatic, spring) allow defining scalar potential energy U such that F = -dU/dx, and total mechanical energy E = KE + PE is conserved in closed systems.",
      "strategy": "Work done by centripetal force, normal reaction (on fixed surfaces), and static friction (without sliding) is ZERO. In elastic 1D collisions, e = 1 and both momentum and KE are conserved; in perfectly inelastic collisions, e = 0 and bodies stick together."
    }
  },
  "rotational": {
    "name": "Rotational Motion",
    "formulas": [
      "Torque: τ = r x F = I α",
      "Angular Momentum: L = r x p = I ω",
      "Rotational Kinetic Energy: KE_rot = 0.5 I ω^2",
      "Moment of Inertia: I = ∑ m_i r_i^2 = M k^2",
      "Parallel Axis Theorem: I = I_cm + M d^2",
      "Perpendicular Axis Theorem (2D disc/plate): I_z = I_x + I_y",
      "Total Rolling Kinetic Energy: KE_total = 0.5 M v^2 (1 + k^2 / R^2)",
      "Acceleration down incline (rolling): a = (g sin θ) / (1 + k^2 / R^2)"
    ],
    "notes": {
      "theoretical": "Rotational dynamics parallels linear dynamics with Moment of Inertia (I) playing the role of rotational mass, Torque (τ) replacing Force, and Angular Velocity (ω) replacing linear velocity.",
      "framework": "Moment of inertia depends on mass distribution relative to rotation axis. Torque τ = dL/dt = Iα. When net external torque τ_ext = 0, total angular momentum L = Iω is strictly conserved (e.g. spinning figure skater pulling in arms reduces I and increases ω).",
      "strategy": "Memorize standard Moment of Inertia values: Ring/Hoop (MR^2), Disc (0.5 MR^2), Solid Sphere (2/5 MR^2), Hollow Sphere (2/3 MR^2), Solid Cylinder (0.5 MR^2), Thin Rod center (1/12 ML^2). In pure rolling down an incline, the body with smaller k^2/R^2 reaches the bottom first (Solid Sphere > Disc > Ring)."
    }
  },
  "gravitation": {
    "name": "Gravitation",
    "formulas": [
      "Newton's Law of Gravitation: F = G m_1 m_2 / r^2",
      "Acceleration due to gravity at surface: g = G M / R^2",
      "Variation of g with height h: g_h = g (1 - 2h/R) [for h << R]",
      "Variation of g with depth d: g_d = g (1 - d/R)",
      "Variation of g with latitude φ: g_φ = g - ω^2 R cos^2(φ)",
      "Gravitational Potential Energy: U = - G M m / r",
      "Escape Velocity: v_e = sqrt(2 G M / R) = sqrt(2 g R) ≈ 11.2 km/s (Earth)",
      "Orbital Velocity: v_o = sqrt(G M / r) = sqrt(g R) ≈ 7.9 km/s (near Earth surface)",
      "Kepler's 3rd Law: T^2 ∝ r^3"
    ],
    "notes": {
      "theoretical": "Gravitation is a universal attractive inverse-square force between masses. Gravity g decreases with altitude, depth, and earth's rotational spin (maximum at poles, minimum at equator).",
      "framework": "Escape velocity v_e = sqrt(2GM/R) is independent of projection angle or mass of the projectile. Satellite orbital velocity v_o = sqrt(GM/r). Total energy of a bound circular satellite orbit is E = -GMm/(2r) = -KE = 0.5 PE.",
      "strategy": "Note that acceleration due to gravity at Earth's center (d = R) is ZERO. Geostationary satellites orbit above the equator in the direction of Earth's rotation with a period of 24 hours at an altitude of approximately 36,000 km."
    }
  },
  "solids": {
    "name": "Solids & Fluids",
    "formulas": [
      "Young's Modulus: Y = (F / A) / (ΔL / L)",
      "Bulk Modulus: B = - ΔP / (ΔV / V)",
      "Shear Modulus: η = (F / A) / θ",
      "Hydrostatic Pressure: P = P_0 + ρ g h",
      "Pascal's Law (Hydraulic Lift): F_1 / A_1 = F_2 / A_2",
      "Equation of Continuity: A_1 v_1 = A_2 v_2",
      "Bernoulli's Principle: P + 0.5 ρ v^2 + ρ g h = constant",
      "Torricelli's Law (Efflux velocity): v = sqrt(2 g h)",
      "Stokes' Law (Viscous force): F_v = 6 π η r v",
      "Terminal Velocity: v_t = 2 r^2 (ρ - σ) g / (9 η)",
      "Surface Tension Energy: W = T ΔA, Excess Pressure in sphere drop: ΔP = 2T/r, bubble: ΔP = 4T/r"
    ],
    "notes": {
      "theoretical": "Solids exhibit elastic deformation governed by Hooke's Law (Stress ∝ Strain). Fluids (liquids and gases) transmit pressure equally in all directions (Pascal's Law) and exhibit viscosity (internal fluid friction) and surface tension (surface energy per unit area).",
      "framework": "Continuity equation A1 v1 = A2 v2 expresses conservation of mass for incompressible fluid flow. Bernoulli's equation P + 0.5ρv^2 + ρgh = constant expresses energy conservation along a streamline. Viscous drag balance leads to constant terminal velocity v_t ∝ r^2.",
      "strategy": "Soap bubbles have TWO free surfaces, so excess pressure ΔP = 4T/r and work done to form bubble W = 8πr^2 T. Liquid drops have ONE free surface, so ΔP = 2T/r and W = 4πr^2 T. Angle of contact for pure water and clean glass is 0°."
    }
  },
  "thermal": {
    "name": "Thermal Properties",
    "formulas": [
      "Linear Expansion: ΔL = L_0 α ΔT",
      "Areal Expansion: ΔA = A_0 β ΔT (β = 2α)",
      "Volume Expansion: ΔV = V_0 γ ΔT (γ = 3α)",
      "Heat Capacity: Q = m c ΔT = n C ΔT",
      "Latent Heat (Phase change): Q = m L",
      "Thermal Conduction (Fourier's Law): H = dQ/dt = K A (T_1 - T_2) / L",
      "Stefan-Boltzmann Law: P = e σ A T^4",
      "Wien's Displacement Law: λ_max T = b ≈ 2.898 x 10^-3 m·K",
      "Newton's Law of Cooling: dT/dt = - k (T - T_environment)"
    ],
    "notes": {
      "theoretical": "Thermal properties govern how matter absorbs heat, expands, changes phases, and transfers energy via conduction, convection, and radiation. Thermal expansion isotropic coefficients satisfy α : β : γ = 1 : 2 : 3.",
      "framework": "Heat transfer rate H = KA(T1-T2)/L parallels electrical current I = V/R where thermal resistance R_th = L/(KA). Blackbody thermal radiation power follows Stefan-Boltzmann law P = σ A T^4; peak emission wavelength obeys Wien's law λ_max ∝ 1/T.",
      "strategy": "Anomalous expansion of water occurs between 0°C and 4°C (density is maximum at 4°C). When calculating mixture equilibrium temperatures, heat lost by hotter bodies = heat gained by colder bodies. Convert temperatures to Kelvin (T_K = T_C + 273.15) for radiation laws."
    }
  },
  "thermodynamics": {
    "name": "Thermodynamics (Laws & Heat Engines)",
    "formulas": [
      "First Law of Thermodynamics: dQ = dU + dW",
      "Work done in Isobaric process: W = P ΔV",
      "Work done in Isothermal process: W = n R T ln(V_2 / V_1)",
      "Work done in Adiabatic process: W = (P_1 V_1 - P_2 V_2) / (γ - 1) = n R (T_1 - T_2) / (γ - 1)",
      "Adiabatic Process Relation: P V^γ = constant, T V^(γ-1) = constant",
      "Carnot Engine Efficiency: η = 1 - T_cold / T_hot = W / Q_in",
      "Refrigerator Coefficient of Performance (COP): β = Q_cold / W = T_cold / (T_hot - T_cold)",
      "Molar Heat Capacities: C_p - C_v = R, Adiabatic index γ = C_p / C_v"
    ],
    "notes": {
      "theoretical": "Thermodynamics governs heat-work conversion. First Law (energy conservation): dQ = dU + dW. Internal energy U is a state function depending solely on temperature T (dU = n C_v dT). Second Law dictates heat cannot flow spontaneously from cold to hot body without external work.",
      "framework": "In Isothermal processes (ΔT=0), dU=0 so dQ=dW. In Adiabatic processes (dQ=0), dW = -dU. Carnot engine represents the theoretical maximum reversible heat engine efficiency η = 1 - T_c/T_h.",
      "strategy": "For monoatomic gas (He, Ar): C_v = 1.5R, C_p = 2.5R, γ = 5/3 ≈ 1.67. For diatomic gas (N2, O2): C_v = 2.5R, C_p = 3.5R, γ = 7/5 = 1.40. Efficiency η is always less than 1 (100%) and temperatures MUST be in Kelvin."
    }
  },
  "kinetic": {
    "name": "Kinetic Theory of Gases",
    "formulas": [
      "Ideal Gas Equation: P V = n R T = N k_B T",
      "Gas Pressure equation: P = (1/3) ρ v_rms^2",
      "RMS Speed: v_rms = sqrt(3 R T / M) = sqrt(3 k_B T / m)",
      "Average Speed: v_avg = sqrt(8 R T / (π M))",
      "Most Probable Speed: v_mp = sqrt(2 R T / M)",
      "Translational Kinetic Energy per molecule: E_k = (3/2) k_B T",
      "Total internal energy of N molecules: U = (f/2) N k_B T = (f/2) n R T",
      "Mean Free Path: λ = 1 / (sqrt(2) n_v π d^2)"
    ],
    "notes": {
      "theoretical": "Kinetic Theory models gases as large numbers of sub-microscopic particles in random elastic collision. Temperature is a direct macroscopic measure of average molecular translational kinetic energy.",
      "framework": "Equipartition theorem assigns 0.5 k_B T energy to each active degree of freedom per molecule. Degrees of freedom f: Monoatomic = 3 (translational), Diatomic room temp = 5 (3 trans + 2 rot), Polyatomic non-linear = 6.",
      "strategy": "Speed ordering: v_rms > v_avg > v_mp with ratio sqrt(3) : sqrt(8/π) : sqrt(2) ≈ 1.732 : 1.596 : 1.414. Note that gas molecular kinetic energy depends strictly on Absolute Temperature T in Kelvin, independent of molar mass or pressure."
    }
  },
  "shm": {
    "name": "Simple Harmonic Motion (SHM)",
    "formulas": [
      "Differential Equation of SHM: d^2x/dt^2 + ω^2 x = 0",
      "Displacement: x(t) = A sin(ω t + φ)",
      "Velocity: v(t) = dx/dt = ω sqrt(A^2 - x^2)",
      "Acceleration: a(t) = - ω^2 x",
      "Time Period of Simple Pendulum: T = 2 π sqrt(L / g)",
      "Time Period of Loaded Spring: T = 2 π sqrt(m / k)",
      "Total Energy in SHM: E = 0.5 m ω^2 A^2",
      "Kinetic Energy: KE = 0.5 m ω^2 (A^2 - x^2), Potential Energy: PE = 0.5 m ω^2 x^2"
    ],
    "notes": {
      "theoretical": "SHM is periodic oscillatory motion where restoring force is directly proportional to displacement from equilibrium position and directed towards equilibrium: F = -k x.",
      "framework": "Max velocity v_max = ω A occurs at mean position (x=0) where PE=0 and KE=E. Max acceleration a_max = ω^2 A occurs at extreme positions (x = ±A) where KE=0 and PE=E. At x = A/sqrt(2), KE = PE = E/2.",
      "strategy": "If a simple pendulum is taken to a high altitude or into a mine, g decreases so period T increases (clock runs slow). In a freely falling elevator, effective g = 0 so T → ∞ (pendulum does not oscillate)."
    }
  },
  "sound": {
    "name": "Wave Motion and Sound",
    "formulas": [
      "Wave Velocity: v = f λ = ω / k",
      "Wave Equation: y(x,t) = A sin(k x - ω t + φ), k = 2π / λ",
      "Speed of sound in solid rod: v = sqrt(Y / ρ)",
      "Speed of sound in gas (Laplace formula): v = sqrt(γ P / ρ) = sqrt(γ R T / M)",
      "Organ Pipe (Open at both ends): f_n = n v / (2 L), n = 1, 2, 3...",
      "Organ Pipe (Closed at one end): f_n = (2n - 1) v / (4 L), n = 1, 2, 3...",
      "Beat Frequency: f_beat = |f_1 - f_2|",
      "Doppler Effect observed frequency: f' = f_0 (v ± v_observer) / (v ∓ v_source)"
    ],
    "notes": {
      "theoretical": "Sound is a mechanical longitudinal compression wave requiring a material medium for propagation. Newton's isothermal velocity was corrected by Laplace as an adiabatic compression process v = sqrt(γ P/ρ).",
      "framework": "Open organ pipes produce ALL harmonics (fundamental f_1, 2f_1, 3f_1...), whereas closed organ pipes produce ONLY ODD harmonics (f_1, 3f_1, 5f_1...). Beats arise from superposition of two waves of slightly different frequencies.",
      "strategy": "Speed of sound in gas increases with temperature: v ∝ sqrt(T). Speed of sound is INDEPENDENT of gas pressure changes at constant temperature (since P/ρ remains constant). Speed increases with humidity (moist air is less dense than dry air)."
    }
  },
  "electrostatics": {
    "name": "Electrostatics",
    "formulas": [
      "Coulomb's Law: F = (1 / (4 π ε_0)) * (q_1 q_2 / r^2)",
      "Electric Field of Point Charge: E = (1 / (4 π ε_0)) * (q / r^2)",
      "Electric Field due to infinite linear charge: E = λ / (2 π ε_0 r)",
      "Electric Field due to infinite plane sheet: E = σ / (2 ε_0)",
      "Electric Dipole Moment: p = q * 2a",
      "Torque on Dipole in Uniform E-field: τ = p x E = p E sin θ",
      "Potential Energy of Dipole in E-field: U = - p . E = - p E cos θ",
      "Gauss's Law: Φ_E = ∮ E . dA = Q_enclosed / ε_0"
    ],
    "notes": {
      "theoretical": "Electrostatics deals with forces, fields, and potentials of static electric charges. Quantization of charge Q = ne; electric charge is strictly conserved and independent of reference frame velocity.",
      "framework": "Coulomb force is an inverse-square central force. Gauss's Law ∮ E.dA = Q_enc/ε_0 simplifies field calculations for symmetric charge distributions (spheres, cylinders, planes). Inside a hollow conducting sphere, electric field E = 0.",
      "strategy": "Electric field lines point away from positive charges and towards negative charges; they NEVER intersect. Electric dipole in uniform field experiences net force ZERO but non-zero torque τ = p E sin θ (stable equilibrium at θ=0°, unstable at θ=180°)."
    }
  },
  "potential": {
    "name": "Potential & Capacitance",
    "formulas": [
      "Electric Potential of Point Charge: V = q / (4 π ε_0 r)",
      "Relation between E and V: E = - dV/dr",
      "Capacitance of Parallel Plate Capacitor: C = ε_0 A / d",
      "Capacitance with Dielectric K: C' = K C_0 = K ε_0 A / d",
      "Capacitors in Series: 1/C_eq = 1/C_1 + 1/C_2 + ...",
      "Capacitors in Parallel: C_eq = C_1 + C_2 + ...",
      "Energy Stored in Capacitor: U = 0.5 C V^2 = 0.5 Q V = Q^2 / (2 C)",
      "Energy Density of Electric Field: u_E = 0.5 ε_0 E^2"
    ],
    "notes": {
      "theoretical": "Electric potential V is scalar work done per unit positive test charge in bringing it from infinity to a point. Capacitance C = Q/V measures charge storage capacity per unit potential difference.",
      "framework": "Equipotential surfaces are everywhere perpendicular to electric field lines; no work is done moving a charge along an equipotential surface (W = q ΔV = 0). Inserting a dielectric slab of constant K multiplies capacitance by K.",
      "strategy": "When a capacitor is disconnected from battery before dielectric insertion: Charge Q remains CONSTANT, C increases K-fold, Voltage V decreases (V0/K), Energy U decreases (U0/K). If battery remains CONNECTED: Voltage V remains CONSTANT, Q increases K-fold, C increases K-fold, U increases K-fold."
    }
  },
  "current": {
    "name": "Current Electricity",
    "formulas": [
      "Electric Current: I = dQ/dt = n A e v_d",
      "Ohm's Law: V = I R, J = σ E",
      "Resistance: R = ρ L / A, Conductance: G = 1/R",
      "Temperature dependence of R: R_T = R_0 (1 + α ΔT)",
      "Resistors in Series: R_eq = R_1 + R_2 + ...",
      "Resistors in Parallel: 1/R_eq = 1/R_1 + 1/R_2 + ...",
      "Kirchhoff's Current Law (KCL / Junction): ∑ I = 0 (Conservation of Charge)",
      "Kirchhoff's Voltage Law (KVL / Loop): ∑ V = 0 (Conservation of Energy)",
      "Wheatstone Bridge Balance Condition: P / Q = R / S",
      "Joule Heating Power: P = V I = I^2 R = V^2 / R"
    ],
    "notes": {
      "theoretical": "Electric current is rate of charge flow. Drift velocity v_d = e E τ / m is the small average velocity acquired by free electrons under an applied electric field (typically ~10^-4 m/s).",
      "framework": "Kirchhoff's Junction Rule expresses conservation of electric charge. Kirchhoff's Loop Rule expresses conservation of energy in closed electrical circuits. Meter Bridge and Potentiometer operate on balanced Wheatstone principle.",
      "strategy": "A potentiometer is an IDEAL voltmeter because it draws zero current from the source at null point. Terminal voltage V of a battery during discharge is V = E - I r; during charging V = E + I r; on open circuit V = E."
    }
  },
  "magnetism": {
    "name": "Moving Charges & Magnetism",
    "formulas": [
      "Biot-Savart Law: dB = (μ_0 / 4π) * (I dl x r_hat) / r^2",
      "Magnetic Field of straight current wire: B = μ_0 I / (2 π r)",
      "Magnetic Field at center of circular coil: B = μ_0 N I / (2 R)",
      "Ampere's Circuital Law: ∮ B . dl = μ_0 I_enclosed",
      "Magnetic Field inside Solenoid: B = μ_0 n I",
      "Lorentz Force: F = q(E + v x B)",
      "Magnetic Force on current wire: F = I (L x B) = I L B sin θ",
      "Cyclotron Radius: r = m v / (q B), Cyclotron Frequency: f = q B / (2 π m)",
      "Magnetic Dipole Moment: M = N I A"
    ],
    "notes": {
      "theoretical": "Moving charges and electric currents produce magnetic fields. Magnetic forces act strictly perpendicular to both velocity and magnetic field vectors, performing ZERO work on moving charges.",
      "framework": "A charged particle injected perpendicular to uniform magnetic field undergoes uniform circular motion with radius r = mv/(qB) and period T = 2πm/(qB) (independent of velocity/radius). Biot-Savart and Ampere laws calculate magnetic field vectors.",
      "strategy": "Work done by magnetic force on a moving point charge is ALWAYS ZERO because F ⊥ v, meaning kinetic energy and speed remain constant (only velocity direction changes). Two parallel wires carrying current in SAME direction ATTRACT; OPPOSITE directions REPEL."
    }
  },
  "emi": {
    "name": "Electromagnetic Induction (EMI)",
    "formulas": [
      "Magnetic Flux: Φ_B = B . A = B A cos θ",
      "Faraday's Law of Induction: ε = - N (dΦ_B / dt)",
      "Lenz's Law: Induced current direction opposes the change in magnetic flux causing it",
      "Motional EMF (straight rod in uniform B): ε = B L v",
      "Self-Inductance EMF: ε = - L (dI / dt)",
      "Self-Inductance of Solenoid: L = μ_0 N^2 A / l",
      "Energy Stored in Inductor: U = 0.5 L I^2",
      "Mutual Inductance EMF: ε_2 = - M (dI_1 / dt)"
    ],
    "notes": {
      "theoretical": "Electromagnetic induction is the production of electromotive force (EMF) across an electrical conductor in a changing magnetic field. Lenz's law is a direct consequence of the Law of Conservation of Energy.",
      "framework": "Faraday's law states magnitude of induced EMF equals rate of change of magnetic flux. Motional EMF ε = BLv arises from Lorentz force on free electrons in a moving conductor. Energy stored in an inductor's magnetic field is U = 0.5 L I^2.",
      "strategy": "When a metal rod of length L rotates with angular frequency ω about one end in a perpendicular magnetic field B, induced EMF is ε = 0.5 B L^2 ω. Eddy currents generated in solid metal blocks cause energy loss as heat (mitigated by laminated iron cores)."
    }
  },
  "ac": {
    "name": "Alternating Current (AC)",
    "formulas": [
      "RMS Voltage: V_rms = V_0 / sqrt(2) ≈ 0.707 V_0",
      "RMS Current: I_rms = I_0 / sqrt(2) ≈ 0.707 I_0",
      "Inductive Reactance: X_L = ω L = 2 π f L",
      "Capacitive Reactance: X_C = 1 / (ω C) = 1 / (2 π f C)",
      "Series LCR Impedance: Z = sqrt(R^2 + (X_L - X_C)^2)",
      "Resonance Frequency: f_0 = 1 / (2 π sqrt(L C))",
      "Power Factor: cos φ = R / Z",
      "Average AC Power: P_avg = V_rms I_rms cos φ",
      "Transformer Ratio: V_s / V_p = N_s / N_p = I_p / I_s"
    ],
    "notes": {
      "theoretical": "Alternating current varies sinusoidally with time. RMS (root-mean-square) value represents the equivalent DC current that produces identical Joule heating in a resistor.",
      "framework": "In pure resistor, V and I are in phase. In pure inductor, V leads I by 90° (π/2). In pure capacitor, I leads V by 90° (π/2). At resonance (X_L = X_C), impedance Z = R (minimum), current is maximum, and power factor cos φ = 1.",
      "strategy": "Pure inductors and capacitors consume ZERO average power in AC circuits over a complete cycle because cos(90°) = 0 (Wattless current). Standard household mains supply (e.g. 220V AC) refers to RMS voltage; peak voltage V_0 = 220 * sqrt(2) ≈ 311V."
    }
  },
  "em_waves": {
    "name": "EM Waves",
    "formulas": [
      "Speed of EM wave in vacuum: c = 1 / sqrt(μ_0 ε_0) ≈ 3 x 10^8 m/s",
      "Speed of EM wave in medium: v = 1 / sqrt(μ ε) = c / n",
      "Ratio of E and B amplitudes: E_0 / B_0 = c",
      "Poynting Vector (energy flux): S = (1 / μ_0) (E x B)",
      "Average Energy Density: u_avg = 0.5 ε_0 E_0^2 = 0.5 B_0^2 / μ_0",
      "Displacement Current: I_d = ε_0 (dΦ_E / dt)"
    ],
    "notes": {
      "theoretical": "Electromagnetic waves are non-mechanical transverse waves consisting of mutually perpendicular sinusoidally oscillating Electric (E) and Magnetic (B) fields, propagating perpendicular to both in direction E x B.",
      "framework": "Maxwell modified Ampere's law by adding displacement current I_d = ε_0 dΦ_E/dt to account for changing electric fields (e.g. between charging capacitor plates). EM wave spectrum (in order of increasing frequency / decreasing wavelength): Radio, Microwave, Infrared, Visible, Ultraviolet, X-rays, Gamma rays.",
      "strategy": "Electric vector E is primarily responsible for optical effects of EM waves (referred to as light vector). EM waves carry both energy and momentum (p = U/c for complete absorption; p = 2U/c for complete reflection)."
    }
  },
  "ray": {
    "name": "Ray Optics & Optical Instruments",
    "formulas": [
      "Mirror Formula: 1/f = 1/v + 1/u",
      "Snell's Law of Refraction: n_1 sin i = n_2 sin r",
      "Critical Angle for Total Internal Reflection: sin C = 1 / n = n_2 / n_1",
      "Apparent Depth: d' = d / n",
      "Lens Maker's Formula: 1/f = (n - 1) (1/R_1 - 1/R_2)",
      "Thin Lens Formula: 1/f = 1/v - 1/u",
      "Power of Lens: P = 1 / f(in meters) [in Diopters D]",
      "Prism Deviation: δ = i + e - A, at minimum deviation: n = sin((A + δ_m)/2) / sin(A/2)",
      "Astronomical Telescope Magnification (Normal adjustment): M = - f_o / f_e, Length L = f_o + f_e",
      "Compound Microscope Magnification: M = - (v_o / u_o) * (D / f_e)"
    ],
    "notes": {
      "theoretical": "Ray optics models light propagation as straight rays undergoing reflection, refraction, and dispersion. Total Internal Reflection occurs when light travels from denser to rarer medium at angle of incidence i > C.",
      "framework": "Lens Maker's formula relates focal length to refractive index and surface radii. Prisms disperse polychromatic light because refractive index varies inversely with wavelength (Cauchy's relation n = A + B/λ^2; violet deviates most, red least).",
      "strategy": "Use Cartesian sign convention consistently: distances measured in direction of incident ray are positive, opposite negative. Focal length of convex lens/mirror is POSITIVE; concave lens/mirror is NEGATIVE. Power of combination of contact lenses P = P1 + P2."
    }
  },
  "wave": {
    "name": "Wave Optics",
    "formulas": [
      "Young's Double Slit Fringe Width: β = λ D / d",
      "Constructive Interference condition: Path difference Δ = n λ (n = 0, 1, 2...)",
      "Destructive Interference condition: Path difference Δ = (2n - 1) λ / 2",
      "Resultant Intensity in Interference: I = I_1 + I_2 + 2 sqrt(I_1 I_2) cos φ",
      "Max and Min Intensity ratio: I_max / I_min = (sqrt(I_1) + sqrt(I_2))^2 / (sqrt(I_1) - sqrt(I_2))^2",
      "Single Slit Diffraction Minima: a sin θ = n λ",
      "Brewster's Law of Polarization: tan i_p = n",
      "Malus's Law: I = I_0 cos^2 θ"
    ],
    "notes": {
      "theoretical": "Wave optics treats light as an electromagnetic wave displaying interference, diffraction, and polarization. Huygens' principle states every point on a wavefront acts as a secondary source of spherical wavelets.",
      "framework": "Interference requires two coherent sources (constant phase difference). Young's double-slit experiment yields equal-width bright and dark fringes β = λD/d. Single-slit diffraction produces a central maximum of double width (2λD/a).",
      "strategy": "Polarization uniquely proves the TRANSVERSE nature of light waves (longitudinal sound waves CANNOT be polarized). According to Malus' law, passing unpolarized light through a polarizer reduces intensity by half (I_0/2), and subsequent analyzer reduces it to (I_0/2) cos^2 θ."
    }
  },
  "dual_nature": {
    "name": "Dual Nature of Matter",
    "formulas": [
      "Photon Energy: E = h f = h c / λ",
      "Photon Momentum: p = E / c = h / λ",
      "Einstein's Photoelectric Equation: E = h f = W_0 + KE_max = h f_0 + e V_0",
      "Stopping Potential relation: e V_0 = KE_max = 0.5 m v_max^2",
      "de Broglie Wavelength: λ = h / p = h / (m v) = h / sqrt(2 m KE)",
      "de Broglie Wavelength of accelerated electron: λ = 12.27 / sqrt(V) Å = 1.227 / sqrt(V) nm"
    ],
    "notes": {
      "theoretical": "Radiation displays dual particle-wave nature. Light behaves as photons (quanta of energy E = hf) during emission and absorption (Photoelectric effect, Compton scattering), and as waves during propagation (Interference, Diffraction).",
      "framework": "Einstein's photoelectric equation hf = W0 + eV0 demonstrates that kinetic energy of emitted photoelectrons depends linearly on light FREQUENCY, while photoelectric current depends directly on light INTENSITY.",
      "strategy": "Photoelectric emission occurs instantly (< 10^-9 s) ONLY IF light frequency f ≥ threshold frequency f_0 (or wavelength λ ≤ threshold wavelength λ_0). Stopping potential V_0 is completely independent of light intensity."
    }
  },
  "atoms": {
    "name": "Atoms and Nuclei",
    "formulas": [
      "Bohr Angular Momentum Quantization: L = m v r = n h / (2 π)",
      "Radius of nth Bohr Orbit: r_n = r_1 n^2 / Z = 0.529 Å * (n^2 / Z)",
      "Velocity in nth Bohr Orbit: v_n = v_1 * (Z / n) ≈ (2.18 x 10^6 m/s) * (Z / n)",
      "Energy of Hydrogen Atom in nth state: E_n = - 13.6 eV * (Z^2 / n^2)",
      "Rydberg Wave Number formula: 1 / λ = R Z^2 (1/n_1^2 - 1/n_2^2)",
      "Nuclear Radius: R = R_0 A^(1/3) [R_0 ≈ 1.2 fm]",
      "Mass-Energy Equivalence: E = Δm c^2, 1 amu = 931.5 MeV",
      "Radioactive Decay Law: N(t) = N_0 e^(-λ t)",
      "Half-Life: T_1/2 = ln(2) / λ ≈ 0.693 / λ, Mean Life: τ = 1 / λ = 1.44 T_1/2"
    ],
    "notes": {
      "theoretical": "Bohr model postulates quantized stationary orbits for atomic electrons. Nuclear physics explores binding energy ΔE = Δm c^2 holding nucleons (protons and neutrons) together under the short-range strong nuclear force.",
      "framework": "Hydrogen spectral series: Lyman (n1=1, UV region), Balmer (n1=2, Visible region), Paschen (n1=3, IR region), Brackett (n1=4, IR), Pfund (n1=5, Far IR). Radioactive decay follows first-order exponential kinetics N(t) = N_0 e^(-λt).",
      "strategy": "Binding Energy per Nucleon (BE/A) peaks around Iron-56 (~8.8 MeV/nucleon), making Fe-56 the most stable nucleus. Nuclear fission splits heavy nuclei (e.g. U-235) and nuclear fusion combines light nuclei (e.g. H to He in stars); both release energy by increasing BE/A."
    }
  },
  "semiconductors": {
    "name": "Semiconductor Electronics",
    "formulas": [
      "Intrinsic Charge Carrier Density: n_i^2 = n_e * n_h",
      "Total Electrical Conductivity: σ = e (n_e μ_e + n_h μ_h)",
      "PN Junction Barrier Potential: V_b ≈ 0.7V (Silicon), V_b ≈ 0.3V (Germanium)",
      "Transistor Current Relation: I_E = I_B + I_C",
      "Common Emitter Current Gain: β = ΔI_C / ΔI_B, Common Base Gain: α = ΔI_C / ΔI_E",
      "Relation between α and β: β = α / (1 - α), α = β / (1 + β)",
      "Logic Gates: AND (Y=A.B), OR (Y=A+B), NOT (Y=A'), NAND (Y=(A.B)'), NOR (Y=(A+B)')"
    ],
    "notes": {
      "theoretical": "Semiconductors have energy band gap E_g between valence and conduction bands (E_g ≈ 1.1 eV for Si, 0.7 eV for Ge, insulators > 3 eV). Doping creates n-type (pentavalent donor e.g. P, As) or p-type (trivalent acceptor e.g. B, Al) extrinsic semiconductors.",
      "framework": "p-n junction under Forward Bias narrows depletion layer and lowers barrier potential, allowing easy current conduction. Reverse Bias widens depletion layer and blocks current except for tiny microampere leakage current.",
      "strategy": "Zener diode operates strictly in REVERSE BREAKDOWN region as a constant voltage regulator. LED operates under FORWARD BIAS to emit light photons. Solar cell and Photodiode operate under REVERSE BIAS. NAND and NOR are Universal Logic Gates."
    }
  }
}

print("Loaded python data for all 25 physics chapters.")
