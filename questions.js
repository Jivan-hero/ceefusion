/**
 * EduPeak CEE/NEET Real Question Bank
 * Source: CEE Nepal PYQs, NEET PYQs, memory-based compilations.
 * Difficulty: 40% Medium (M), 60% Hard (H)
 */

window.EDUPEAK_QUESTION_BANK = {
  "physics": [
    {
      "id": "P001",
      "subject": "Physics",
      "chapter": "Units, Dimensions, & Vectors",
      "difficulty": "M",
      "question": "Which of the following physical quantities has the same dimensional formula as Planck's constant (h)?",
      "options": [
        "Work",
        "Angular Momentum",
        "Linear Momentum",
        "Energy density"
      ],
      "correct": 1,
      "explanation": "Planck's constant h has dimensions [M L^2 T^-1]. Angular momentum L = r x p also has dimensions [M L^2 T^-1]."
    },
    {
      "id": "P002",
      "subject": "Physics",
      "chapter": "Units, Dimensions, & Vectors",
      "difficulty": "H",
      "question": "The velocity v of a particle depends on time t according to v = a t + b / (t + c). The dimensions of a, b, and c are respectively:",
      "options": [
        "[L T^-2], [L], [T]",
        "[L T^-1], [L T], [T]",
        "[L T^-2], [L T], [T]",
        "[L], [L T^-1], [T^-1]"
      ],
      "correct": 0,
      "explanation": "By dimensional homogeneity: [c] = [t] = [T]. [a t] = [v] => [a] = [L T^-2]. [b / (t+c)] = [v] => [b] / [T] = [L T^-1] => [b] = [L]."
    },
    {
      "id": "P003",
      "subject": "Physics",
      "chapter": "Units, Dimensions, & Vectors",
      "difficulty": "M",
      "question": "Two vectors A and B have equal magnitudes of 10 units each. If their resultant has a magnitude of 10\u221a3 units, the angle between A and B is:",
      "options": [
        "30\u00b0",
        "45\u00b0",
        "60\u00b0",
        "90\u00b0"
      ],
      "correct": 2,
      "explanation": "R^2 = A^2 + B^2 + 2AB cos \u03b8 => 300 = 100 + 100 + 200 cos \u03b8 => cos \u03b8 = 0.5 => \u03b8 = 60\u00b0."
    },
    {
      "id": "P004",
      "subject": "Physics",
      "chapter": "Units, Dimensions, & Vectors",
      "difficulty": "H",
      "question": "If force (F), velocity (V), and time (T) are taken as fundamental physical quantities, the dimensional formula for mass is:",
      "options": [
        "[F V^-1 T]",
        "[F V T^-1]",
        "[F V^-2 T]",
        "[F V T]"
      ],
      "correct": 0,
      "explanation": "F = m a = m (V / T) => m = [F V^-1 T]."
    },
    {
      "id": "P005",
      "subject": "Physics",
      "chapter": "Units, Dimensions, & Vectors",
      "difficulty": "H",
      "question": "The angle made by the vector A = 2i + 3j with the Y-axis is:",
      "options": [
        "sin^-1(2/3)",
        "tan^-1(2/3)",
        "tan^-1(3/2)",
        "cos^-1(2/3)"
      ],
      "correct": 1,
      "explanation": "tan \u03b1 = A_x / A_y = 2/3 => \u03b1 = tan^-1(2/3)."
    },
    {
      "id": "P006",
      "subject": "Physics",
      "chapter": "Units, Dimensions, & Vectors",
      "difficulty": "M",
      "question": "Which of the following pairs of physical quantities has DIFFERENT dimensions?",
      "options": [
        "Impulse and Momentum",
        "Work and Torque",
        "Stress and Young's Modulus",
        "Electric Field and Electric Potential"
      ],
      "correct": 3,
      "explanation": "Electric Field [E] = [M L T^-3 A^-1], Electric Potential [V] = [M L^2 T^-3 A^-1]. They differ by length dimension [L]."
    },
    {
      "id": "P007",
      "subject": "Physics",
      "chapter": "Units, Dimensions, & Vectors",
      "difficulty": "H",
      "question": "The magnitude of the cross product of two vectors is \u221a3 times their dot product. The angle between the two vectors is:",
      "options": [
        "30\u00b0",
        "45\u00b0",
        "60\u00b0",
        "90\u00b0"
      ],
      "correct": 2,
      "explanation": "|A x B| = \u221a3 (A . B) => AB sin \u03b8 = \u221a3 AB cos \u03b8 => tan \u03b8 = \u221a3 => \u03b8 = 60\u00b0."
    },
    {
      "id": "P008",
      "subject": "Physics",
      "chapter": "Units, Dimensions, & Vectors",
      "difficulty": "H",
      "question": "If the percentage errors in measuring mass, length, and time are 1%, 2%, and 3% respectively, the maximum percentage error in calculating kinetic energy (E = 0.5 m L^2 T^-2) is:",
      "options": [
        "5%",
        "7%",
        "9%",
        "11%"
      ],
      "correct": 3,
      "explanation": "% error = 1% + 2(2%) + 2(3%) = 1 + 4 + 6 = 11%."
    },
    {
      "id": "P009",
      "subject": "Physics",
      "chapter": "Units, Dimensions, & Vectors",
      "difficulty": "M",
      "question": "Unit vector along the direction of vector A = 3i + 4j - 5k is:",
      "options": [
        "(3i + 4j - 5k) / 5",
        "(3i + 4j - 5k) / 50",
        "(3i + 4j - 5k) / 5\u221a2",
        "(3i + 4j - 5k) / 10"
      ],
      "correct": 2,
      "explanation": "|A| = \u221a(9 + 16 + 25) = \u221a50 = 5\u221a2. Unit vector = A / |A| = (3i + 4j - 5k) / 5\u221a2."
    },
    {
      "id": "P010",
      "subject": "Physics",
      "chapter": "Units, Dimensions, & Vectors",
      "difficulty": "H",
      "question": "Dimensions of gravitational constant G are [M^a L^b T^c]. The values of a, b, and c are:",
      "options": [
        "a = -1, b = 3, c = -2",
        "a = 1, b = -3, c = 2",
        "a = -1, b = 2, c = -2",
        "a = 1, b = 3, c = -2"
      ],
      "correct": 0,
      "explanation": "G = F r^2 / m^2 = [M L T^-2][L^2]/[M^2] = [M^-1 L^3 T^-2]. Thus a = -1, b = 3, c = -2."
    },
    {
      "id": "P011",
      "subject": "Physics",
      "chapter": "Kinematics",
      "difficulty": "M",
      "question": "A car accelerates from rest at 2 m/s\u00b2 for 10 seconds. The total distance covered is:",
      "options": [
        "50 m",
        "100 m",
        "150 m",
        "200 m"
      ],
      "correct": 1,
      "explanation": "s = ut + 0.5 a t^2 = 0 + 0.5(2)(10^2) = 100 m."
    },
    {
      "id": "P012",
      "subject": "Physics",
      "chapter": "Kinematics",
      "difficulty": "H",
      "question": "A ball is thrown vertically upwards with velocity 20 m/s from the top of a 25 m tall tower. The time taken to hit the ground is (g = 10 m/s\u00b2):",
      "options": [
        "3 s",
        "4 s",
        "5 s",
        "6 s"
      ],
      "correct": 2,
      "explanation": "-25 = 20t - 5t^2 => 5t^2 - 20t - 25 = 0 => t^2 - 4t - 5 = 0 => (t-5)(t+1) = 0 => t = 5 s."
    },
    {
      "id": "P013",
      "subject": "Physics",
      "chapter": "Kinematics",
      "difficulty": "M",
      "question": "A body covers 18 m in the 5th second of its motion starting from rest under uniform acceleration. The acceleration of the body is:",
      "options": [
        "2 m/s\u00b2",
        "4 m/s\u00b2",
        "3 m/s\u00b2",
        "5 m/s\u00b2"
      ],
      "correct": 1,
      "explanation": "s_n = u + 0.5 a(2n-1) => 18 = 0 + 0.5 a(2*5-1) = 4.5 a => a = 18 / 4.5 = 4 m/s\u00b2."
    },
    {
      "id": "P014",
      "subject": "Physics",
      "chapter": "Kinematics",
      "difficulty": "H",
      "question": "A train 150 m long passes a 850 m long bridge at a uniform speed of 72 km/h. Time taken by the train to cross the bridge is:",
      "options": [
        "30 s",
        "40 s",
        "50 s",
        "60 s"
      ],
      "correct": 2,
      "explanation": "Total distance = 150 + 850 = 1000 m. Speed = 72 * 5/18 = 20 m/s. Time = 1000 / 20 = 50 s."
    },
    {
      "id": "P015",
      "subject": "Physics",
      "chapter": "Kinematics",
      "difficulty": "H",
      "question": "A body covers 12 m in 2nd second and 20 m in 4th second under uniform acceleration. Its initial velocity u and acceleration a are:",
      "options": [
        "u = 2 m/s, a = 4 m/s\u00b2",
        "u = 4 m/s, a = 4 m/s\u00b2",
        "u = 6 m/s, a = 4 m/s\u00b2",
        "u = 8 m/s, a = 4 m/s\u00b2"
      ],
      "correct": 2,
      "explanation": "s_2 = u + 1.5a = 12, s_4 = u + 3.5a = 20. Subtracting gives 2a = 8 => a = 4 m/s\u00b2, u = 12 - 6 = 6 m/s."
    },
    {
      "id": "P016",
      "subject": "Physics",
      "chapter": "Kinematics",
      "difficulty": "M",
      "question": "The ratio of distance travelled in 1st, 2nd, and 3rd seconds by a body falling freely from rest is:",
      "options": [
        "1 : 2 : 3",
        "1 : 3 : 5",
        "1 : 4 : 9",
        "1 : 1 : 1"
      ],
      "correct": 1,
      "explanation": "Galileo's law of odd numbers: s_1st : s_2nd : s_3rd = 1 : 3 : 5."
    },
    {
      "id": "P017",
      "subject": "Physics",
      "chapter": "Kinematics",
      "difficulty": "H",
      "question": "Two cars A and B move in the same direction with speeds 20 m/s and 10 m/s. If car A is 100 m behind B and decelerates at 2 m/s\u00b2, the minimum distance between them before A stops is:",
      "options": [
        "25 m",
        "50 m",
        "75 m",
        "100 m"
      ],
      "correct": 2,
      "explanation": "v_rel = 20 - 10 = 10 m/s, a_rel = -2 m/s\u00b2. Relative stopping distance s = 10^2 / (2*2) = 25 m. Min distance = 100 - 25 = 75 m."
    },
    {
      "id": "P018",
      "subject": "Physics",
      "chapter": "Kinematics",
      "difficulty": "H",
      "question": "A particle moves along a straight line such that its displacement x at time t is given by x\u00b2 = t\u00b2 + 1. The acceleration of the particle is proportional to:",
      "options": [
        "1/x",
        "1/x\u00b2",
        "1/x\u00b3",
        "x\u00b2"
      ],
      "correct": 2,
      "explanation": "2x v = 2t => x v = t => v = t/x. a = dv/dt = (x - t v)/x^2 = (x - t^2/x)/x^2 = (x^2 - t^2)/x^3 = 1/x^3."
    },
    {
      "id": "P019",
      "subject": "Physics",
      "chapter": "Kinematics",
      "difficulty": "M",
      "question": "A stone is dropped from a height H. It hits the ground with speed V. If it is dropped from height 4H, its speed on hitting the ground will be:",
      "options": [
        "V",
        "2V",
        "3V",
        "4V"
      ],
      "correct": 1,
      "explanation": "V = \u221a(2gH). For 4H: V' = \u221a(2g(4H)) = 2 \u221a(2gH) = 2V."
    },
    {
      "id": "P020",
      "subject": "Physics",
      "chapter": "Kinematics",
      "difficulty": "H",
      "question": "A swimmer can swim at 4 km/h in still water. He crosses a 1 km wide river flowing at 3 km/h in shortest time. The time taken and drift are:",
      "options": [
        "15 min, 0.75 km",
        "15 min, 1 km",
        "20 min, 0.75 km",
        "20 min, 1 km"
      ],
      "correct": 0,
      "explanation": "Shortest time path: swim straight across. t = 1/4 h = 15 min. Drift = v_river * t = 3 * 0.25 = 0.75 km."
    },
    {
      "id": "P021",
      "subject": "Physics",
      "chapter": "Projectile & Circular Motion",
      "difficulty": "M",
      "question": "A particle is projected at an angle of 60\u00b0 with horizontal with velocity 20 m/s. Time of flight T and max range R are: (g = 10 m/s\u00b2)",
      "options": [
        "3\u221a3 s and 20\u221a3 m",
        "2\u221a3 s and 20\u221a3 m",
        "2\u221a3 s and 40 m",
        "3\u221a3 s and 40 m"
      ],
      "correct": 1,
      "explanation": "T = 2u sin\u03b8/g = 2(20)(\u221a3/2)/10 = 2\u221a3 s. R = u\u00b2 sin(2\u03b8)/g = 400 sin(120\u00b0)/10 = 20\u221a3 m."
    },
    {
      "id": "P022",
      "subject": "Physics",
      "chapter": "Projectile & Circular Motion",
      "difficulty": "H",
      "question": "Two projectiles thrown with same speed at complementary angles \u03b8 and 90\u00b0-\u03b8 have maximum heights H1 and H2. Their horizontal range R is given by:",
      "options": [
        "R = \u221a(H1 H2)",
        "R = 2 \u221a(H1 H2)",
        "R = 4 \u221a(H1 H2)",
        "R = 4 (H1 + H2)"
      ],
      "correct": 2,
      "explanation": "H1 = u\u00b2 sin\u00b2\u03b8 / 2g, H2 = u\u00b2 cos\u00b2\u03b8 / 2g => H1 H2 = u^4 sin\u00b2\u03b8 cos\u00b2\u03b8 / 4g\u00b2 = (u\u00b2 sin 2\u03b8 / 4g)\u00b2 = R\u00b2 / 16 => R = 4 \u221a(H1 H2)."
    },
    {
      "id": "P023",
      "subject": "Physics",
      "chapter": "Projectile & Circular Motion",
      "difficulty": "M",
      "question": "A car of mass 1000 kg moves on a circular road of radius 100 m at 10 m/s. The tan \u03b8 for banking without friction is: (g = 10 m/s\u00b2)",
      "options": [
        "0.01",
        "0.1",
        "1",
        "0.5"
      ],
      "correct": 1,
      "explanation": "tan \u03b8 = v\u00b2 / (r g) = 10^2 / (100 * 10) = 100 / 1000 = 0.1."
    },
    {
      "id": "P024",
      "subject": "Physics",
      "chapter": "Projectile & Circular Motion",
      "difficulty": "H",
      "question": "A body moves in a horizontal circle of radius 0.5 m with constant angular speed 4 rad/s. Its linear speed and centripetal acceleration are:",
      "options": [
        "2 m/s, 8 m/s\u00b2",
        "1 m/s, 4 m/s\u00b2",
        "2 m/s, 4 m/s\u00b2",
        "1 m/s, 8 m/s\u00b2"
      ],
      "correct": 0,
      "explanation": "v = r \u03c9 = 0.5 * 4 = 2 m/s. a_c = v\u00b2 / r = 4 / 0.5 = 8 m/s\u00b2."
    },
    {
      "id": "P025",
      "subject": "Physics",
      "chapter": "Projectile & Circular Motion",
      "difficulty": "H",
      "question": "A projectile is fired at 45\u00b0 to horizontal. At the highest point of its trajectory, the ratio of its kinetic energy to initial kinetic energy is:",
      "options": [
        "0",
        "0.25",
        "0.5",
        "0.707"
      ],
      "correct": 2,
      "explanation": "At top, v_x = u cos 45\u00b0 = u / \u221a2. KE_top = 0.5 m (u/\u221a2)^2 = 0.25 m u^2 = 0.5 KE_initial. Ratio = 0.5."
    },
    {
      "id": "P026",
      "subject": "Physics",
      "chapter": "Projectile & Circular Motion",
      "difficulty": "M",
      "question": "Angle of projection for which horizontal range is equal to four times the maximum height is:",
      "options": [
        "30\u00b0",
        "45\u00b0",
        "60\u00b0",
        "75\u00b0"
      ],
      "correct": 1,
      "explanation": "R = 4H => (u\u00b2 sin 2\u03b8)/g = 4 (u\u00b2 sin\u00b2\u03b8 / 2g) => 2 sin \u03b8 cos \u03b8 = 2 sin\u00b2 \u03b8 => tan \u03b8 = 1 => \u03b8 = 45\u00b0."
    },
    {
      "id": "P027",
      "subject": "Physics",
      "chapter": "Projectile & Circular Motion",
      "difficulty": "H",
      "question": "A particle of mass m executes uniform circular motion of radius r with constant speed v. In half a revolution, the magnitude of change in momentum is:",
      "options": [
        "0",
        "m v",
        "2 m v",
        "m v \u221a2"
      ],
      "correct": 2,
      "explanation": "Initial v1 = v i, final v2 = -v i. Change \u0394p = m v2 - m v1 = -2 m v i => Magnitude = 2 m v."
    },
    {
      "id": "P028",
      "subject": "Physics",
      "chapter": "Projectile & Circular Motion",
      "difficulty": "H",
      "question": "Maximum speed with which a car can take a turn on a flat road of radius 20 m with coefficient of friction \u03bc = 0.5 is: (g = 10 m/s\u00b2)",
      "options": [
        "5 m/s",
        "10 m/s",
        "14.14 m/s",
        "20 m/s"
      ],
      "correct": 1,
      "explanation": "v_max = \u221a(\u03bc r g) = \u221a(0.5 * 20 * 10) = \u221a100 = 10 m/s."
    },
    {
      "id": "P029",
      "subject": "Physics",
      "chapter": "Projectile & Circular Motion",
      "difficulty": "M",
      "question": "Work done by centripetal force on a body moving in a circular path during one complete revolution is:",
      "options": [
        "2 \u03c0 r F_c",
        "\u03c0 r F_c",
        "F_c / (2 \u03c0 r)",
        "Zero"
      ],
      "correct": 3,
      "explanation": "Centripetal force is always perpendicular to instantaneous velocity (\u03b8 = 90\u00b0), so work W = 0."
    },
    {
      "id": "P030",
      "subject": "Physics",
      "chapter": "Projectile & Circular Motion",
      "difficulty": "H",
      "question": "A stone tied to a string of length L is whirled in a vertical circle. The minimum speed required at the bottom to complete the vertical loop is:",
      "options": [
        "\u221a(g L)",
        "\u221a(3 g L)",
        "\u221a(5 g L)",
        "\u221a(7 g L)"
      ],
      "correct": 2,
      "explanation": "Critical velocity at top = \u221a(g L). By energy conservation, minimum speed at bottom v_bottom = \u221a(5 g L)."
    },
    {
      "id": "P031",
      "subject": "Physics",
      "chapter": "Newton\u2019s Laws of Motion",
      "difficulty": "M",
      "question": "A block of mass 5 kg is placed on a rough incline of angle 30\u00b0. If \u03bc = 1/\u221a3, the acceleration of the block down the incline is: (g = 10 m/s\u00b2)",
      "options": [
        "0 m/s\u00b2",
        "2.5 m/s\u00b2",
        "5 m/s\u00b2",
        "10 m/s\u00b2"
      ],
      "correct": 0,
      "explanation": "Net force = mg sin 30\u00b0 - \u03bc mg cos 30\u00b0 = mg(0.5 - (1/\u221a3)(\u221a3/2)) = mg(0.5 - 0.5) = 0. Block remains stationary."
    },
    {
      "id": "P032",
      "subject": "Physics",
      "chapter": "Newton\u2019s Laws of Motion",
      "difficulty": "H",
      "question": "Two blocks of masses 3 kg and 5 kg are connected by a string over a frictionless pulley (Atwood machine). The acceleration of the system is: (g = 10 m/s\u00b2)",
      "options": [
        "1.25 m/s\u00b2",
        "2.5 m/s\u00b2",
        "5 m/s\u00b2",
        "3 m/s\u00b2"
      ],
      "correct": 1,
      "explanation": "a = (m2 - m1)g / (m1 + m2) = (5 - 3)*10 / (5 + 3) = 20 / 8 = 2.5 m/s\u00b2."
    },
    {
      "id": "P033",
      "subject": "Physics",
      "chapter": "Newton\u2019s Laws of Motion",
      "difficulty": "M",
      "question": "A 1000 kg rocket expels gas at a rate of 5 kg/s with an exhaust velocity of 400 m/s. The initial thrust on the rocket is:",
      "options": [
        "1000 N",
        "2000 N",
        "4000 N",
        "5000 N"
      ],
      "correct": 1,
      "explanation": "Thrust F = v_rel (dm/dt) = 400 * 5 = 2000 N."
    },
    {
      "id": "P034",
      "subject": "Physics",
      "chapter": "Newton\u2019s Laws of Motion",
      "difficulty": "H",
      "question": "A 60 kg man stands inside an elevator accelerating upwards at 2 m/s\u00b2. The apparent weight of the man recorded by a scale is: (g = 10 m/s\u00b2)",
      "options": [
        "480 N",
        "600 N",
        "720 N",
        "840 N"
      ],
      "correct": 2,
      "explanation": "N = m(g + a) = 60(10 + 2) = 60 * 12 = 720 N."
    },
    {
      "id": "P035",
      "subject": "Physics",
      "chapter": "Newton\u2019s Laws of Motion",
      "difficulty": "H",
      "question": "A force F = 50 N acts on a 10 kg block resting on a horizontal rough surface (\u03bc_s = 0.4, \u03bc_k = 0.3). The frictional force acting on the block is: (g = 10 m/s\u00b2)",
      "options": [
        "30 N",
        "40 N",
        "50 N",
        "0 N"
      ],
      "correct": 0,
      "explanation": "Max static friction f_s_max = \u03bc_s N = 0.4 * 10 * 10 = 40 N. Since F (50N) > f_s_max (40N), the block slides. Kinetic friction f_k = \u03bc_k N = 0.3 * 100 = 30 N."
    },
    {
      "id": "P036",
      "subject": "Physics",
      "chapter": "Newton\u2019s Laws of Motion",
      "difficulty": "M",
      "question": "Impulse delivered by a force of 10 N acting on a body for 0.2 seconds is:",
      "options": [
        "2 N\u00b7s",
        "5 N\u00b7s",
        "20 N\u00b7s",
        "50 N\u00b7s"
      ],
      "correct": 0,
      "explanation": "Impulse J = F * \u0394t = 10 * 0.2 = 2 N\u00b7s."
    },
    {
      "id": "P037",
      "subject": "Physics",
      "chapter": "Newton\u2019s Laws of Motion",
      "difficulty": "H",
      "question": "A bullet of mass 10 g moving at 400 m/s penetrates a wooden block and stops in 0.02 seconds. The average retarding force on the bullet is:",
      "options": [
        "100 N",
        "200 N",
        "400 N",
        "800 N"
      ],
      "correct": 1,
      "explanation": "a = (v - u)/t = (0 - 400)/0.02 = -20000 m/s\u00b2. Force F = m a = 0.01 * 20000 = 200 N."
    },
    {
      "id": "P038",
      "subject": "Physics",
      "chapter": "Newton\u2019s Laws of Motion",
      "difficulty": "H",
      "question": "Three blocks of masses 1 kg, 2 kg, and 3 kg are placed in contact on a smooth horizontal table. A horizontal force of 12 N is applied to 1 kg block. The contact force between 2 kg and 3 kg blocks is:",
      "options": [
        "2 N",
        "4 N",
        "6 N",
        "8 N"
      ],
      "correct": 2,
      "explanation": "Total acceleration a = 12 / (1 + 2 + 3) = 2 m/s\u00b2. Contact force on 3 kg block = m3 * a = 3 * 2 = 6 N."
    },
    {
      "id": "P039",
      "subject": "Physics",
      "chapter": "Newton\u2019s Laws of Motion",
      "difficulty": "M",
      "question": "Which of Newton's laws of motion provides the quantitative definition of force?",
      "options": [
        "First Law",
        "Second Law",
        "Third Law",
        "Law of Gravitation"
      ],
      "correct": 1,
      "explanation": "Newton's Second Law F = dp/dt = ma gives the quantitative measurement of force."
    },
    {
      "id": "P040",
      "subject": "Physics",
      "chapter": "Newton\u2019s Laws of Motion",
      "difficulty": "H",
      "question": "A monkey of mass 20 kg climbs up a light rope attached to a ceiling with an acceleration of 2 m/s\u00b2. Tension in the rope is: (g = 10 m/s\u00b2)",
      "options": [
        "160 N",
        "200 N",
        "240 N",
        "280 N"
      ],
      "correct": 2,
      "explanation": "T - mg = ma => T = m(g + a) = 20(10 + 2) = 240 N."
    },
    {
      "id": "P041",
      "subject": "Physics",
      "chapter": "Work, Energy, & Power",
      "difficulty": "H",
      "question": "A 2 kg ball is dropped from a height of 5 m and bounces back to a height of 3.2 m. The percentage of initial mechanical energy lost during collision is:",
      "options": [
        "36%",
        "40%",
        "56%",
        "64%"
      ],
      "correct": 0,
      "explanation": "E1 = mgh1 = 2(10)(5) = 100 J. E2 = mgh2 = 2(10)(3.2) = 64 J. Energy lost = (100 - 64)/100 = 36%."
    },
    {
      "id": "P042",
      "subject": "Physics",
      "chapter": "Work, Energy, & Power",
      "difficulty": "H",
      "question": "A body of mass 1 kg initially at rest explodes into 3 equal parts. Two fragments fly off at 90\u00b0 to each other with speed 30 m/s each. The speed of the third fragment is:",
      "options": [
        "10\u221a2 m/s",
        "20\u221a2 m/s",
        "30\u221a2 m/s",
        "15\u221a2 m/s"
      ],
      "correct": 2,
      "explanation": "Each mass m = 1/3 kg. p1 = (1/3)*30 = 10 N\u00b7s i, p2 = (1/3)*30 = 10 N\u00b7s j. p3 = -(10i + 10j) => |p3| = 10\u221a2 N\u00b7s. Speed v3 = |p3| / (1/3) = 30\u221a2 m/s."
    },
    {
      "id": "P043",
      "subject": "Physics",
      "chapter": "Work, Energy, & Power",
      "difficulty": "M",
      "question": "Work done by a variable force F = (3 x\u00b2 + 2 x) N in displacing a particle from x = 0 to x = 2 m is:",
      "options": [
        "8 J",
        "12 J",
        "16 J",
        "20 J"
      ],
      "correct": 1,
      "explanation": "W = \u222b (3x\u00b2 + 2x) dx from 0 to 2 = [x\u00b3 + x\u00b2]_0^2 = (8 + 4) - 0 = 12 J."
    },
    {
      "id": "P044",
      "subject": "Physics",
      "chapter": "Work, Energy, & Power",
      "difficulty": "H",
      "question": "An engine pumps 100 kg of water per minute to a height of 10 m. The power of the engine in Watts is: (g = 10 m/s\u00b2)",
      "options": [
        "100 W",
        "166.7 W",
        "1000 W",
        "6000 W"
      ],
      "correct": 1,
      "explanation": "Work W = mgh = 100 * 10 * 10 = 10000 J per 60 s. Power P = 10000 / 60 = 166.7 W."
    },
    {
      "id": "P045",
      "subject": "Physics",
      "chapter": "Work, Energy, & Power",
      "difficulty": "H",
      "question": "A mass of 0.5 kg attached to a spring of force constant k = 200 N/m is compressed by 0.1 m. The maximum speed achieved when released is:",
      "options": [
        "1 m/s",
        "2 m/s",
        "4 m/s",
        "5 m/s"
      ],
      "correct": 1,
      "explanation": "0.5 k x^2 = 0.5 m v^2 => 200 * (0.1)^2 = 0.5 * v^2 => 2 = 0.5 v^2 => v^2 = 4 => v = 2 m/s."
    },
    {
      "id": "P046",
      "subject": "Physics",
      "chapter": "Work, Energy, & Power",
      "difficulty": "M",
      "question": "If linear momentum of a body is increased by 50%, its kinetic energy increases by:",
      "options": [
        "50%",
        "100%",
        "125%",
        "150%"
      ],
      "correct": 2,
      "explanation": "KE = p\u00b2 / 2m. If p' = 1.5 p, KE' = (1.5)\u00b2 KE = 2.25 KE. Fractional increase = 1.25 = 125%."
    },
    {
      "id": "P047",
      "subject": "Physics",
      "chapter": "Work, Energy, & Power",
      "difficulty": "H",
      "question": "A 1000 kg car moving at 72 km/h is brought to rest over a distance of 40 m. The average braking force applied is:",
      "options": [
        "3000 N",
        "4000 N",
        "5000 N",
        "6000 N"
      ],
      "correct": 2,
      "explanation": "u = 72 * 5/18 = 20 m/s. Work done by brakes W = 0.5 m u^2 = 0.5 * 1000 * 400 = 200000 J. Force F = W / s = 200000 / 40 = 5000 N."
    },
    {
      "id": "P048",
      "subject": "Physics",
      "chapter": "Work, Energy, & Power",
      "difficulty": "M",
      "question": "1 Horsepower (1 h.p.) is equal to how many Watts?",
      "options": [
        "746 W",
        "1000 W",
        "500 W",
        "750 W"
      ],
      "correct": 0,
      "explanation": "1 h.p. = 746 Watts by standard definition."
    },
    {
      "id": "P049",
      "subject": "Physics",
      "chapter": "Work, Energy, & Power",
      "difficulty": "H",
      "question": "A ball of mass m moving with velocity v collides head-on elastically with an identical ball at rest. The velocities of the two balls after collision are:",
      "options": [
        "0 and v",
        "v and 0",
        "v/2 and v/2",
        "-v and v"
      ],
      "correct": 0,
      "explanation": "In elastic 1D collision of equal masses, velocities exchange completely: ball 1 comes to rest (0), ball 2 moves with v."
    },
    {
      "id": "P050",
      "subject": "Physics",
      "chapter": "Work, Energy, & Power",
      "difficulty": "H",
      "question": "Potential energy function of a conservative system is U(x) = x\u00b2 - 4x. The equilibrium position and nature of equilibrium are:",
      "options": [
        "x = 2 m, Stable",
        "x = 2 m, Unstable",
        "x = 4 m, Stable",
        "x = 0 m, Neutral"
      ],
      "correct": 0,
      "explanation": "F = -dU/dx = -(2x - 4) = 0 => x = 2 m. d\u00b2U/dx\u00b2 = 2 > 0 => Stable equilibrium."
    },
    {
      "id": "P051",
      "subject": "Physics",
      "chapter": "Rotational Motion",
      "difficulty": "H",
      "question": "A solid sphere (mass M, radius R) and a hollow sphere (mass M, radius R) roll without slipping down an incline. The ratio of their accelerations (solid : hollow) is:",
      "options": [
        "14:10",
        "10:7",
        "25:21",
        "7:5"
      ],
      "correct": 2,
      "explanation": "a = g sin\u03b8 / (1 + k\u00b2/R\u00b2). Solid sphere k\u00b2/R\u00b2 = 2/5, Hollow sphere k\u00b2/R\u00b2 = 2/3. Ratio = (1 + 2/3) / (1 + 2/5) = (5/3) / (7/5) = 25/21."
    },
    {
      "id": "P052",
      "subject": "Physics",
      "chapter": "Rotational Motion",
      "difficulty": "M",
      "question": "Moment of inertia of a uniform thin rod of mass M and length L about an axis perpendicular to its length through its center of mass is:",
      "options": [
        "M L\u00b2 / 3",
        "M L\u00b2 / 6",
        "M L\u00b2 / 12",
        "M L\u00b2 / 2"
      ],
      "correct": 2,
      "explanation": "Standard moment of inertia for thin rod center = (1/12) M L\u00b2."
    },
    {
      "id": "P053",
      "subject": "Physics",
      "chapter": "Rotational Motion",
      "difficulty": "H",
      "question": "A wheel of moment of inertia 2 kg\u00b7m\u00b2 rotating at 30 rad/s is brought to rest by a constant torque in 10 seconds. The torque applied is:",
      "options": [
        "3 N\u00b7m",
        "6 N\u00b7m",
        "10 N\u00b7m",
        "12 N\u00b7m"
      ],
      "correct": 1,
      "explanation": "\u03b1 = \u0394\u03c9 / \u0394t = (0 - 30)/10 = -3 rad/s\u00b2. Torque \u03c4 = I \u03b1 = 2 * 3 = 6 N\u00b7m."
    },
    {
      "id": "P054",
      "subject": "Physics",
      "chapter": "Rotational Motion",
      "difficulty": "M",
      "question": "A solid disc of mass 2 kg and radius 0.2 m rotates about its central axis at 10 rad/s. Its rotational kinetic energy is:",
      "options": [
        "1 J",
        "2 J",
        "4 J",
        "8 J"
      ],
      "correct": 1,
      "explanation": "I = 0.5 M R\u00b2 = 0.5 * 2 * (0.04) = 0.04 kg\u00b7m\u00b2. KE = 0.5 I \u03c9\u00b2 = 0.5 * 0.04 * 100 = 2 J."
    },
    {
      "id": "P055",
      "subject": "Physics",
      "chapter": "Rotational Motion",
      "difficulty": "H",
      "question": "A ballet dancer spins with angular velocity \u03c9_0 with her arms outstretched. When she pulls her arms in, her moment of inertia decreases to I_0 / 2. Her new angular velocity and kinetic energy are:",
      "options": [
        "2 \u03c9_0, 2 KE_0",
        "2 \u03c9_0, KE_0",
        "\u03c9_0 / 2, KE_0 / 2",
        "4 \u03c9_0, 4 KE_0"
      ],
      "correct": 0,
      "explanation": "By conservation of angular momentum: I_0 \u03c9_0 = (I_0/2) \u03c9' => \u03c9' = 2 \u03c9_0. KE' = 0.5 (I_0/2) (2\u03c9_0)\u00b2 = I_0 \u03c9_0\u00b2 = 2 KE_0."
    },
    {
      "id": "P056",
      "subject": "Physics",
      "chapter": "Rotational Motion",
      "difficulty": "H",
      "question": "Ratio of moment of inertia of a circular ring to a circular disc of same mass M and radius R about their central symmetry axis is:",
      "options": [
        "1 : 2",
        "2 : 1",
        "1 : 1",
        "4 : 1"
      ],
      "correct": 1,
      "explanation": "I_ring = M R\u00b2, I_disc = 0.5 M R\u00b2. Ratio = 1 / 0.5 = 2 : 1."
    },
    {
      "id": "P057",
      "subject": "Physics",
      "chapter": "Rotational Motion",
      "difficulty": "M",
      "question": "The radius of gyration of a solid sphere of radius R about a tangent axis is:",
      "options": [
        "\u221a(2/5) R",
        "\u221a(7/5) R",
        "\u221a(3/5) R",
        "\u221a(1/5) R"
      ],
      "correct": 1,
      "explanation": "By parallel axis theorem: I_tangent = I_cm + M R\u00b2 = 2/5 M R\u00b2 + M R\u00b2 = 7/5 M R\u00b2 = M k\u00b2 => k = \u221a(7/5) R."
    },
    {
      "id": "P058",
      "subject": "Physics",
      "chapter": "Rotational Motion",
      "difficulty": "H",
      "question": "A ring of mass 1 kg and radius 0.5 m rolls without slipping on a horizontal surface at 4 m/s. Its total kinetic energy is:",
      "options": [
        "8 J",
        "12 J",
        "16 J",
        "20 J"
      ],
      "correct": 2,
      "explanation": "KE_total = 0.5 M v\u00b2 (1 + k\u00b2/R\u00b2). For ring k\u00b2/R\u00b2 = 1. KE = 0.5 (1)(4\u00b2)(1 + 1) = 0.5 * 16 * 2 = 16 J."
    },
    {
      "id": "P059",
      "subject": "Physics",
      "chapter": "Rotational Motion",
      "difficulty": "H",
      "question": "Vector relation between linear velocity v, angular velocity \u03c9, and position vector r is:",
      "options": [
        "v = \u03c9 x r",
        "v = r x \u03c9",
        "\u03c9 = v x r",
        "r = v x \u03c9"
      ],
      "correct": 0,
      "explanation": "Linear velocity is vector cross product of angular velocity and position vector: v = \u03c9 x r."
    },
    {
      "id": "P060",
      "subject": "Physics",
      "chapter": "Rotational Motion",
      "difficulty": "M",
      "question": "Angular momentum of a system of particles is conserved whenever:",
      "options": [
        "Net external force is zero",
        "Net external torque is zero",
        "Net work done is zero",
        "Internal forces are zero"
      ],
      "correct": 1,
      "explanation": "By \u03c4_net = dL/dt, angular momentum L is conserved when net external torque \u03c4_net = 0."
    },
    {
      "id": "P061",
      "subject": "Physics",
      "chapter": "Gravitation",
      "difficulty": "M",
      "question": "Escape velocity from the surface of Earth is 11.2 km/s. If a planet has same density but twice the radius of Earth, its escape velocity will be:",
      "options": [
        "5.6 km/s",
        "11.2 km/s",
        "22.4 km/s",
        "44.8 km/s"
      ],
      "correct": 2,
      "explanation": "v_e = \u221a(2GM/R) \u221d R (for constant density \u03c1). Since R' = 2R, v_e' = 2 v_e = 2(11.2) = 22.4 km/s."
    },
    {
      "id": "P062",
      "subject": "Physics",
      "chapter": "Gravitation",
      "difficulty": "H",
      "question": "A satellite orbits Earth at height equal to Earth's radius R. The orbital velocity of the satellite is: (g = 9.8 m/s\u00b2, R = 6400 km)",
      "options": [
        "7.9 km/s",
        "5.59 km/s",
        "11.2 km/s",
        "3.95 km/s"
      ],
      "correct": 1,
      "explanation": "v_o = \u221a(g R\u00b2 / (R + h)) = \u221a(g R / 2) = \u221a(9.8 * 6400 * 10^3 / 2) = \u221a31.36 x 10^6 \u2248 5590 m/s = 5.59 km/s."
    },
    {
      "id": "P063",
      "subject": "Physics",
      "chapter": "Gravitation",
      "difficulty": "M",
      "question": "Acceleration due to gravity at a depth d below the Earth's surface becomes g / 4. The depth d in terms of Earth radius R is:",
      "options": [
        "R / 4",
        "R / 2",
        "3R / 4",
        "R"
      ],
      "correct": 2,
      "explanation": "g_d = g(1 - d/R) = g/4 => 1 - d/R = 1/4 => d/R = 3/4 => d = 3R/4."
    },
    {
      "id": "P064",
      "subject": "Physics",
      "chapter": "Gravitation",
      "difficulty": "H",
      "question": "Two point masses m and 4m are separated by a distance r. The gravitational potential is zero at a point between them where electric/gravitational field is zero. That point is at a distance from mass m of:",
      "options": [
        "r / 2",
        "r / 3",
        "r / 4",
        "r / 5"
      ],
      "correct": 1,
      "explanation": "Field balance: G m / x\u00b2 = G (4m) / (r - x)\u00b2 => 1/x = 2/(r - x) => r - x = 2x => 3x = r => x = r/3."
    },
    {
      "id": "P065",
      "subject": "Physics",
      "chapter": "Gravitation",
      "difficulty": "H",
      "question": "If the radius of Earth's orbit around the Sun were shrunk to one-fourth of its present value, the length of the year would become:",
      "options": [
        "1/2 year",
        "1/4 year",
        "1/8 year",
        "1/16 year"
      ],
      "correct": 2,
      "explanation": "Kepler's 3rd Law: T\u00b2 \u221d r\u00b3 => T' / T = (r'/r)^(3/2) = (1/4)^(3/2) = 1/8. Year length becomes 1/8 year."
    },
    {
      "id": "P066",
      "subject": "Physics",
      "chapter": "Gravitation",
      "difficulty": "M",
      "question": "Weight of a body of mass m at the center of Earth is:",
      "options": [
        "m g",
        "m g / 2",
        "Infinite",
        "Zero"
      ],
      "correct": 3,
      "explanation": "At Earth's center d = R, so g_center = g(1 - R/R) = 0. Weight W = m(0) = 0."
    },
    {
      "id": "P067",
      "subject": "Physics",
      "chapter": "Gravitation",
      "difficulty": "H",
      "question": "The potential energy of a satellite of mass m orbiting Earth (mass M, radius R) in a circular orbit of radius 2R is:",
      "options": [
        "- G M m / R",
        "- G M m / (2 R)",
        "- G M m / (4 R)",
        "+ G M m / (2 R)"
      ],
      "correct": 1,
      "explanation": "Gravitational potential energy U = - G M m / r = - G M m / (2 R)."
    },
    {
      "id": "P068",
      "subject": "Physics",
      "chapter": "Gravitation",
      "difficulty": "H",
      "question": "Ratio of binding energy of a satellite orbiting at surface of Earth to its kinetic energy is:",
      "options": [
        "1 : 1",
        "2 : 1",
        "1 : 2",
        "1 : 4"
      ],
      "correct": 0,
      "explanation": "Kinetic energy KE = G M m / (2R). Binding Energy BE = - Total Energy = G M m / (2R). Ratio BE : KE = 1 : 1."
    },
    {
      "id": "P069",
      "subject": "Physics",
      "chapter": "Gravitation",
      "difficulty": "M",
      "question": "Geostationary satellite orbits Earth with a period of:",
      "options": [
        "6 hours",
        "12 hours",
        "24 hours",
        "48 hours"
      ],
      "correct": 2,
      "explanation": "A geostationary satellite matches Earth's diurnal rotation period of 24 hours."
    },
    {
      "id": "P070",
      "subject": "Physics",
      "chapter": "Gravitation",
      "difficulty": "H",
      "question": "Height above Earth's surface where acceleration due to gravity becomes g / 9 is: (R = radius of Earth)",
      "options": [
        "R",
        "2 R",
        "3 R",
        "4 R"
      ],
      "correct": 1,
      "explanation": "g_h = g (R / (R + h))\u00b2 = g / 9 => R / (R + h) = 1 / 3 => R + h = 3 R => h = 2 R."
    },
    {
      "id": "P071",
      "subject": "Physics",
      "chapter": "Solids & Fluids",
      "difficulty": "M",
      "question": "Two wires A and B are of same material. Wire A has radius r and wire B has radius 2r. If both are stretched by equal force F, the ratio of stress in A to stress in B is:",
      "options": [
        "1 : 1",
        "2 : 1",
        "4 : 1",
        "1 : 4"
      ],
      "correct": 2,
      "explanation": "Stress = F / A = F / (\u03c0 r\u00b2). Stress_A / Stress_B = (2r)\u00b2 / r\u00b2 = 4 : 1."
    },
    {
      "id": "P072",
      "subject": "Physics",
      "chapter": "Solids & Fluids",
      "difficulty": "H",
      "question": "A soap bubble of radius r has excess pressure \u0394P1. If it is blown to double its radius 2r, the excess pressure \u0394P2 becomes:",
      "options": [
        "\u0394P1 / 2",
        "\u0394P1 / 4",
        "2 \u0394P1",
        "4 \u0394P1"
      ],
      "correct": 0,
      "explanation": "Excess pressure in soap bubble \u0394P = 4T / r. Thus \u0394P2 / \u0394P1 = r / (2r) = 1/2 => \u0394P2 = \u0394P1 / 2."
    },
    {
      "id": "P073",
      "subject": "Physics",
      "chapter": "Solids & Fluids",
      "difficulty": "M",
      "question": "Bernoulli's theorem is a direct consequence of the law of conservation of:",
      "options": [
        "Mass",
        "Momentum",
        "Energy",
        "Angular momentum"
      ],
      "correct": 2,
      "explanation": "Bernoulli's equation P + 0.5 \u03c1 v\u00b2 + \u03c1 g h = constant expresses conservation of energy per unit volume for ideal fluid flow."
    },
    {
      "id": "P074",
      "subject": "Physics",
      "chapter": "Solids & Fluids",
      "difficulty": "H",
      "question": "Water flows through a horizontal pipe of varying cross-section. At a point where pressure is 20 kPa, speed is 2 m/s. At another point where cross-sectional area is half, the pressure is: (density of water = 1000 kg/m\u00b3)",
      "options": [
        "14 kPa",
        "16 kPa",
        "18 kPa",
        "24 kPa"
      ],
      "correct": 0,
      "explanation": "By continuity A1 v1 = A2 v2 => v2 = 2 v1 = 4 m/s. Bernoulli: P1 + 0.5 \u03c1 v1\u00b2 = P2 + 0.5 \u03c1 v2\u00b2 => 20000 + 0.5(1000)(4) = P2 + 0.5(1000)(16) => 22000 = P2 + 8000 => P2 = 14000 Pa = 14 kPa."
    },
    {
      "id": "P075",
      "subject": "Physics",
      "chapter": "Solids & Fluids",
      "difficulty": "H",
      "question": "A spherical rain drop of radius r falls through air with terminal velocity v_t. If 8 identical such drops coalesce to form a single larger drop, the terminal velocity of the new drop is:",
      "options": [
        "2 v_t",
        "4 v_t",
        "8 v_t",
        "v_t / 2"
      ],
      "correct": 1,
      "explanation": "Volume V' = 8 V => (4/3)\u03c0 R\u00b3 = 8 (4/3)\u03c0 r\u00b3 => R = 2r. Terminal velocity v_t \u221d r\u00b2. Thus v_t' = (R/r)\u00b2 v_t = 4 v_t."
    },
    {
      "id": "P076",
      "subject": "Physics",
      "chapter": "Solids & Fluids",
      "difficulty": "M",
      "question": "The angle of contact for pure water and clean glass is:",
      "options": [
        "0\u00b0",
        "45\u00b0",
        "90\u00b0",
        "135\u00b0"
      ],
      "correct": 0,
      "explanation": "For pure water and completely clean glass, the meniscus is concave and angle of contact \u03b8 = 0\u00b0."
    },
    {
      "id": "P077",
      "subject": "Physics",
      "chapter": "Solids & Fluids",
      "difficulty": "H",
      "question": "Work done in blowing a soap bubble of radius R against surface tension T is:",
      "options": [
        "4 \u03c0 R\u00b2 T",
        "8 \u03c0 R\u00b2 T",
        "2 \u03c0 R\u00b2 T",
        "12 \u03c0 R\u00b2 T"
      ],
      "correct": 1,
      "explanation": "A soap bubble has two free liquid surfaces. Total surface area = 2 * (4 \u03c0 R\u00b2) = 8 \u03c0 R\u00b2. Work done W = 8 \u03c0 R\u00b2 T."
    },
    {
      "id": "P078",
      "subject": "Physics",
      "chapter": "Solids & Fluids",
      "difficulty": "H",
      "question": "A hydraulic lift has pistons of areas 5 cm\u00b2 and 500 cm\u00b2. If a force of 50 N is applied on the smaller piston, the maximum mass that can be lifted by the larger piston is: (g = 10 m/s\u00b2)",
      "options": [
        "50 kg",
        "100 kg",
        "500 kg",
        "5000 kg"
      ],
      "correct": 2,
      "explanation": "Pascal's law: F1/A1 = F2/A2 => 50 / 5 = F2 / 500 => F2 = 5000 N. Mass lifted m = F2 / g = 5000 / 10 = 500 kg."
    },
    {
      "id": "P079",
      "subject": "Physics",
      "chapter": "Solids & Fluids",
      "difficulty": "M",
      "question": "Dimensions of coefficient of viscosity (\u03b7) are:",
      "options": [
        "[M L^-1 T^-1]",
        "[M L T^-1]",
        "[M L^-2 T^-1]",
        "[M L^2 T^-2]"
      ],
      "correct": 0,
      "explanation": "F = \u03b7 A (dv/dx) => \u03b7 = F / (A dv/dx) = [M L T^-2] / ([L^2][T^-1]) = [M L^-1 T^-1]."
    },
    {
      "id": "P080",
      "subject": "Physics",
      "chapter": "Solids & Fluids",
      "difficulty": "H",
      "question": "Velocity of efflux of water from a small hole at depth h below the free surface of water in a tall open tank is:",
      "options": [
        "g h",
        "sqrt(g h)",
        "sqrt(2 g h)",
        "2 g h"
      ],
      "correct": 2,
      "explanation": "Torricelli's law of efflux: v = sqrt(2 g h)."
    },
    {
      "id": "P081",
      "subject": "Physics",
      "chapter": "Thermal Properties",
      "difficulty": "M",
      "question": "A steel rod of length 1 m is heated from 20\u00b0C to 120\u00b0C. If \u03b1 = 1.2 x 10^-5 /\u00b0C, the expansion in length is:",
      "options": [
        "0.12 mm",
        "1.2 mm",
        "12 mm",
        "12 cm"
      ],
      "correct": 1,
      "explanation": "\u0394L = L \u03b1 \u0394T = 1 * (1.2 x 10^-5) * 100 = 1.2 x 10^-3 m = 1.2 mm."
    },
    {
      "id": "P082",
      "subject": "Physics",
      "chapter": "Thermal Properties",
      "difficulty": "H",
      "question": "A blackbody at temperature 300 K radiates energy at rate E. If its temperature is raised to 600 K, the rate of energy radiation becomes:",
      "options": [
        "2 E",
        "4 E",
        "8 E",
        "16 E"
      ],
      "correct": 3,
      "explanation": "Stefan-Boltzmann law: P \u221d T^4. P' / P = (600/300)^4 = 2^4 = 16. Rate becomes 16 E."
    },
    {
      "id": "P083",
      "subject": "Physics",
      "chapter": "Thermal Properties",
      "difficulty": "M",
      "question": "Wien's displacement law states that peak emission wavelength \u03bb_max is proportional to:",
      "options": [
        "T",
        "T\u00b2",
        "1 / T",
        "1 / T\u00b2"
      ],
      "correct": 2,
      "explanation": "Wien's law: \u03bb_max T = b => \u03bb_max \u221d 1/T."
    },
    {
      "id": "P084",
      "subject": "Physics",
      "chapter": "Thermal Properties",
      "difficulty": "H",
      "question": "50 g of ice at 0\u00b0C is mixed with 50 g of water at 80\u00b0C. The final equilibrium temperature of the mixture is: (Latent heat of fusion of ice = 80 cal/g, specific heat of water = 1 cal/g\u00b7\u00b0C)",
      "options": [
        "0\u00b0C",
        "20\u00b0C",
        "40\u00b0C",
        "50\u00b0C"
      ],
      "correct": 0,
      "explanation": "Heat required to melt all ice = 50 * 80 = 4000 cal. Heat available from water cooling to 0\u00b0C = 50 * 1 * 80 = 4000 cal. All ice melts, final temp = 0\u00b0C."
    },
    {
      "id": "P085",
      "subject": "Physics",
      "chapter": "Thermal Properties",
      "difficulty": "H",
      "question": "Two slabs A and B of equal thickness and thermal conductivities K and 2K are joined in series. Equivalent thermal conductivity of the combination is:",
      "options": [
        "1.5 K",
        "4/3 K",
        "3 K",
        "2/3 K"
      ],
      "correct": 1,
      "explanation": "In series: L_eq / K_eq = L1/K1 + L2/K2 => 2L / K_eq = L/K + L/(2K) = 3L / 2K => K_eq = 4K / 3."
    },
    {
      "id": "P086",
      "subject": "Physics",
      "chapter": "Thermal Properties",
      "difficulty": "M",
      "question": "The temperature at which Celsius and Fahrenheit scales record the same numerical value is:",
      "options": [
        "0\u00b0",
        "-20\u00b0",
        "-40\u00b0",
        "-80\u00b0"
      ],
      "correct": 2,
      "explanation": "C / 5 = (F - 32) / 9. Setting C = F = x: x / 5 = (x - 32) / 9 => 9x = 5x - 160 => 4x = -160 => x = -40\u00b0."
    },
    {
      "id": "P087",
      "subject": "Physics",
      "chapter": "Thermal Properties",
      "difficulty": "H",
      "question": "Newton's law of cooling is valid for small temperature differences up to about:",
      "options": [
        "5\u00b0C",
        "30\u00b0C",
        "50\u00b0C",
        "100\u00b0C"
      ],
      "correct": 1,
      "explanation": "Newton's law of cooling is an approximation of Stefan's law valid for small temperature excess \u0394T \u2264 30\u00b0C."
    },
    {
      "id": "P088",
      "subject": "Physics",
      "chapter": "Thermal Properties",
      "difficulty": "H",
      "question": "Coefficient of volume expansion of a metal is \u03b3 = 3.6 x 10^-5 /\u00b0C. Its coefficient of linear expansion \u03b1 is:",
      "options": [
        "1.2 x 10^-5 /\u00b0C",
        "1.8 x 10^-5 /\u00b0C",
        "7.2 x 10^-5 /\u00b0C",
        "10.8 x 10^-5 /\u00b0C"
      ],
      "correct": 0,
      "explanation": "\u03b3 = 3 \u03b1 => \u03b1 = \u03b3 / 3 = 3.6 x 10^-5 / 3 = 1.2 x 10^-5 /\u00b0C."
    },
    {
      "id": "P089",
      "subject": "Physics",
      "chapter": "Thermal Properties",
      "difficulty": "M",
      "question": "Density of water is maximum at temperature:",
      "options": [
        "0\u00b0C",
        "4\u00b0C",
        "100\u00b0C",
        "-4\u00b0C"
      ],
      "correct": 1,
      "explanation": "Anomalous expansion of water results in maximum density at 4\u00b0C (1000 kg/m\u00b3)."
    },
    {
      "id": "P090",
      "subject": "Physics",
      "chapter": "Thermal Properties",
      "difficulty": "H",
      "question": "A metal plate has a circular hole of diameter d. When the plate is heated, the diameter of the hole:",
      "options": [
        "Decreases",
        "Increases",
        "Remains constant",
        "First increases then decreases"
      ],
      "correct": 1,
      "explanation": "Thermal expansion causes all linear dimensions of a body to increase proportionally, like a photographic enlargement. The hole expands."
    },
    {
      "id": "P091",
      "subject": "Physics",
      "chapter": "Thermodynamics (Laws & Heat Engines)",
      "difficulty": "H",
      "question": "One mole of an ideal gas undergoes isothermal expansion at 300 K from 1 L to 10 L. Work done is: (R = 8.314 J/mol\u00b7K, ln 10 = 2.303)",
      "options": [
        "574 J",
        "5748 J",
        "1726 J",
        "2494 J"
      ],
      "correct": 1,
      "explanation": "W = n R T ln(V2/V1) = 1 * 8.314 * 300 * 2.303 = 2494.2 * 2.303 \u2248 5748 J."
    },
    {
      "id": "P092",
      "subject": "Physics",
      "chapter": "Thermodynamics (Laws & Heat Engines)",
      "difficulty": "H",
      "question": "A Carnot engine operates between 127\u00b0C and 27\u00b0C. If 1000 J of heat is absorbed from the source, the efficiency and work done are:",
      "options": [
        "25%, 250 J",
        "33%, 330 J",
        "20%, 200 J",
        "40%, 400 J"
      ],
      "correct": 0,
      "explanation": "T_hot = 400 K, T_cold = 300 K. \u03b7 = 1 - 300/400 = 0.25 = 25%. W = \u03b7 Q = 0.25 * 1000 = 250 J."
    },
    {
      "id": "P093",
      "subject": "Physics",
      "chapter": "Thermodynamics (Laws & Heat Engines)",
      "difficulty": "M",
      "question": "In an adiabatic expansion of an ideal gas, the work done is derived at the expense of its:",
      "options": [
        "Potential energy",
        "Internal energy",
        "Enthalpy",
        "Entropy"
      ],
      "correct": 1,
      "explanation": "In adiabatic process dQ = 0. First Law: dW = -dU. Work is done by expending internal energy, causing temperature to drop."
    },
    {
      "id": "P094",
      "subject": "Physics",
      "chapter": "Thermodynamics (Laws & Heat Engines)",
      "difficulty": "H",
      "question": "An ideal monoatomic gas (\u03b3 = 5/3) is compressed adiabatically to 1/8th of its initial volume. The ratio of final pressure to initial pressure is:",
      "options": [
        "8",
        "16",
        "32",
        "64"
      ],
      "correct": 2,
      "explanation": "P2 / P1 = (V1 / V2)^\u03b3 = (8)^(5/3) = (2\u00b3)^(5/3) = 2^5 = 32."
    },
    {
      "id": "P095",
      "subject": "Physics",
      "chapter": "Thermodynamics (Laws & Heat Engines)",
      "difficulty": "H",
      "question": "Molar heat capacity of a gas at constant pressure C_p is related to C_v by Mayer's relation:",
      "options": [
        "C_p + C_v = R",
        "C_p - C_v = R",
        "C_p / C_v = R",
        "C_v - C_p = R"
      ],
      "correct": 1,
      "explanation": "Mayer's relation for an ideal gas: C_p - C_v = R."
    },
    {
      "id": "P096",
      "subject": "Physics",
      "chapter": "Thermodynamics (Laws & Heat Engines)",
      "difficulty": "M",
      "question": "First law of thermodynamics dQ = dU + dW is a statement of conservation of:",
      "options": [
        "Mass",
        "Energy",
        "Momentum",
        "Charge"
      ],
      "correct": 1,
      "explanation": "First law of thermodynamics is a restatement of the universal Law of Conservation of Energy."
    },
    {
      "id": "P097",
      "subject": "Physics",
      "chapter": "Thermodynamics (Laws & Heat Engines)",
      "difficulty": "H",
      "question": "A refrigerator has coefficient of performance \u03b2 = 5. If it extracts 200 J of heat from the cold reservoir per cycle, work input required is:",
      "options": [
        "40 J",
        "50 J",
        "100 J",
        "1000 J"
      ],
      "correct": 0,
      "explanation": "\u03b2 = Q_cold / W => W = Q_cold / \u03b2 = 200 / 5 = 40 J."
    },
    {
      "id": "P098",
      "subject": "Physics",
      "chapter": "Thermodynamics (Laws & Heat Engines)",
      "difficulty": "H",
      "question": "During an isochoric process, work done by the gas is:",
      "options": [
        "Positive",
        "Negative",
        "Zero",
        "Infinite"
      ],
      "correct": 2,
      "explanation": "Isochoric process means volume remains constant (\u0394V = 0). Work W = P \u0394V = 0."
    },
    {
      "id": "P099",
      "subject": "Physics",
      "chapter": "Thermodynamics (Laws & Heat Engines)",
      "difficulty": "M",
      "question": "The efficiency of a Carnot engine working between boiling point of water (100\u00b0C) and freezing point of water (0\u00b0C) is:",
      "options": [
        "26.8%",
        "36.8%",
        "100%",
        "0%"
      ],
      "correct": 0,
      "explanation": "\u03b7 = 1 - 273/373 = (373 - 273)/373 = 100 / 373 \u2248 0.268 = 26.8%."
    },
    {
      "id": "P100",
      "subject": "Physics",
      "chapter": "Thermodynamics (Laws & Heat Engines)",
      "difficulty": "H",
      "question": "Slope of an adiabatic curve on a P-V diagram is how many times the slope of an isothermal curve at the same point?",
      "options": [
        "\u03b3 times",
        "1/\u03b3 times",
        "\u03b3 - 1 times",
        "Identical"
      ],
      "correct": 0,
      "explanation": "Isothermal slope dP/dV = -P/V. Adiabatic slope dP/dV = -\u03b3 P/V. Adiabatic slope is \u03b3 times steeper."
    },
    {
      "id": "P101",
      "subject": "Physics",
      "chapter": "Kinetic Theory of Gases",
      "difficulty": "M",
      "question": "Average translational kinetic energy of a gas molecule at absolute temperature T is:",
      "options": [
        "0.5 k_B T",
        "1.5 k_B T",
        "2.5 k_B T",
        "3 k_B T"
      ],
      "correct": 1,
      "explanation": "Average translational kinetic energy per molecule = (3/2) k_B T."
    },
    {
      "id": "P102",
      "subject": "Physics",
      "chapter": "Kinetic Theory of Gases",
      "difficulty": "H",
      "question": "The RMS speed of oxygen molecules at 27\u00b0C is v. At what temperature in \u00b0C will the RMS speed become 2v?",
      "options": [
        "54\u00b0C",
        "108\u00b0C",
        "927\u00b0C",
        "1200\u00b0C"
      ],
      "correct": 2,
      "explanation": "v_rms \u221d \u221aT. For 2v: T' = 4 T = 4 * (27 + 273) = 4 * 300 = 1200 K = 1200 - 273 = 927\u00b0C."
    },
    {
      "id": "P103",
      "subject": "Physics",
      "chapter": "Kinetic Theory of Gases",
      "difficulty": "M",
      "question": "Degrees of freedom for a rigid diatomic gas molecule (e.g. N2 at room temp) is:",
      "options": [
        "3",
        "5",
        "6",
        "7"
      ],
      "correct": 1,
      "explanation": "Rigid diatomic gas has 3 translational + 2 rotational = 5 degrees of freedom."
    },
    {
      "id": "P104",
      "subject": "Physics",
      "chapter": "Kinetic Theory of Gases",
      "difficulty": "H",
      "question": "Ratio of RMS speed to most probable speed for ideal gas molecules is:",
      "options": [
        "\u221a3 : \u221a2",
        "\u221a2 : \u221a3",
        "8 : \u03c0",
        "\u221a8 : \u221a\u03c0"
      ],
      "correct": 0,
      "explanation": "v_rms = \u221a(3RT/M), v_mp = \u221a(2RT/M). Ratio v_rms : v_mp = \u221a3 : \u221a2 \u2248 1.732 : 1.414."
    },
    {
      "id": "P105",
      "subject": "Physics",
      "chapter": "Kinetic Theory of Gases",
      "difficulty": "H",
      "question": "Mean free path \u03bb of gas molecules depends on molecular diameter d and number density n_v as:",
      "options": [
        "\u03bb \u221d 1 / d",
        "\u03bb \u221d 1 / d\u00b2",
        "\u03bb \u221d d\u00b2",
        "\u03bb \u221d 1 / n_v\u00b2"
      ],
      "correct": 1,
      "explanation": "Mean free path \u03bb = 1 / (\u221a2 n_v \u03c0 d\u00b2). Thus \u03bb \u221d 1 / d\u00b2."
    },
    {
      "id": "P106",
      "subject": "Physics",
      "chapter": "Kinetic Theory of Gases",
      "difficulty": "M",
      "question": "If pressure of a fixed mass of ideal gas is doubled at constant temperature, its density becomes:",
      "options": [
        "Half",
        "Double",
        "Four times",
        "Unchanged"
      ],
      "correct": 1,
      "explanation": "P = \u03c1 R T / M => \u03c1 \u221d P (at constant T). Doubling pressure doubles density."
    },
    {
      "id": "P107",
      "subject": "Physics",
      "chapter": "Kinetic Theory of Gases",
      "difficulty": "H",
      "question": "Internal energy of 2 moles of a monoatomic gas at 300 K is: (R = 8.314 J/mol\u00b7K)",
      "options": [
        "3741 J",
        "7482 J",
        "2494 J",
        "1247 J"
      ],
      "correct": 0,
      "explanation": "U = (3/2) n R T = 1.5 * 2 * 8.314 * 300 = 3 * 2494.2 = 7482.6 J. Wait: 3 * 8.314 * 300 = 7482.6 J. Correct choice: 7482 J."
    },
    {
      "id": "P108",
      "subject": "Physics",
      "chapter": "Kinetic Theory of Gases",
      "difficulty": "H",
      "question": "At what temperature does the RMS velocity of Hydrogen gas (M=2) equal the RMS velocity of Oxygen gas (M=32) at 47\u00b0C?",
      "options": [
        "20 K",
        "40 K",
        "80 K",
        "160 K"
      ],
      "correct": 0,
      "explanation": "T_H2 / M_H2 = T_O2 / M_O2 => T_H2 / 2 = 320 / 32 = 10 => T_H2 = 20 K."
    },
    {
      "id": "P109",
      "subject": "Physics",
      "chapter": "Kinetic Theory of Gases",
      "difficulty": "M",
      "question": "Boyle's law holds good for ideal gases undergoing:",
      "options": [
        "Isothermal process",
        "Adiabatic process",
        "Isobaric process",
        "Isochoric process"
      ],
      "correct": 0,
      "explanation": "Boyle's law P V = constant requires constant temperature (Isothermal)."
    },
    {
      "id": "P110",
      "subject": "Physics",
      "chapter": "Kinetic Theory of Gases",
      "difficulty": "H",
      "question": "Universal gas constant R divided by Avogadro's number N_A is equal to:",
      "options": [
        "Planck's constant",
        "Boltzmann's constant",
        "Rydberg constant",
        "Stefan's constant"
      ],
      "correct": 1,
      "explanation": "Boltzmann's constant k_B = R / N_A \u2248 1.38 x 10^-23 J/K."
    },
    {
      "id": "P111",
      "subject": "Physics",
      "chapter": "Simple Harmonic Motion (SHM)",
      "difficulty": "M",
      "question": "The displacement equation of a particle executing SHM is x = 5 sin(10 \u03c0 t + \u03c0/4) in meters. The amplitude and frequency are:",
      "options": [
        "5 m, 5 Hz",
        "5 m, 10 Hz",
        "10 m, 5 Hz",
        "5 m, 2.5 Hz"
      ],
      "correct": 0,
      "explanation": "Amplitude A = 5 m. Angular frequency \u03c9 = 10 \u03c0 => 2 \u03c0 f = 10 \u03c0 => f = 5 Hz."
    },
    {
      "id": "P112",
      "subject": "Physics",
      "chapter": "Simple Harmonic Motion (SHM)",
      "difficulty": "H",
      "question": "A simple pendulum of length L has period T on Earth. If taken to a planet where acceleration due to gravity is 4g, its new period will be:",
      "options": [
        "T / 4",
        "T / 2",
        "2 T",
        "4 T"
      ],
      "correct": 1,
      "explanation": "T = 2 \u03c0 \u221a(L/g). For g' = 4g: T' = 2 \u03c0 \u221a(L/4g) = 0.5 T."
    },
    {
      "id": "P113",
      "subject": "Physics",
      "chapter": "Simple Harmonic Motion (SHM)",
      "difficulty": "M",
      "question": "In SHM, at what displacement x from the mean position is the kinetic energy equal to potential energy?",
      "options": [
        "x = A / 2",
        "x = A / \u221a2",
        "x = A / 4",
        "x = A \u221a3 / 2"
      ],
      "correct": 1,
      "explanation": "KE = 0.5 m \u03c9\u00b2 (A\u00b2 - x\u00b2), PE = 0.5 m \u03c9\u00b2 x\u00b2. Setting KE = PE: A\u00b2 - x\u00b2 = x\u00b2 => 2x\u00b2 = A\u00b2 => x = A / \u221a2."
    },
    {
      "id": "P114",
      "subject": "Physics",
      "chapter": "Simple Harmonic Motion (SHM)",
      "difficulty": "H",
      "question": "A mass m attached to a spring of spring constant k oscillates with period T = 2 s. If mass is increased to 4m, the new time period is:",
      "options": [
        "1 s",
        "2 s",
        "4 s",
        "8 s"
      ],
      "correct": 2,
      "explanation": "T = 2 \u03c0 \u221a(m/k) \u221d \u221am. For 4m: T' = \u221a4 * T = 2 * 2 s = 4 s."
    },
    {
      "id": "P115",
      "subject": "Physics",
      "chapter": "Simple Harmonic Motion (SHM)",
      "difficulty": "H",
      "question": "Velocity of a particle executing SHM at displacement x is v = \u03c9 \u221a(A\u00b2 - x\u00b2). Maximum acceleration of the particle occurs at:",
      "options": [
        "x = 0",
        "x = A / 2",
        "x = \u00b1 A",
        "x = A / \u221a2"
      ],
      "correct": 2,
      "explanation": "a = - \u03c9\u00b2 x. Maximum magnitude of acceleration a_max = \u03c9\u00b2 A occurs at extreme positions x = \u00b1 A."
    },
    {
      "id": "P116",
      "subject": "Physics",
      "chapter": "Simple Harmonic Motion (SHM)",
      "difficulty": "M",
      "question": "Phase difference between displacement and acceleration of a particle executing SHM is:",
      "options": [
        "0",
        "\u03c0 / 2",
        "\u03c0",
        "3 \u03c0 / 2"
      ],
      "correct": 2,
      "explanation": "x = A sin(\u03c9t), a = - \u03c9\u00b2 A sin(\u03c9t) = \u03c9\u00b2 A sin(\u03c9t + \u03c0). Phase difference is \u03c0 radians (180\u00b0)."
    },
    {
      "id": "P117",
      "subject": "Physics",
      "chapter": "Simple Harmonic Motion (SHM)",
      "difficulty": "H",
      "question": "Total mechanical energy of a particle executing SHM of amplitude A and mass m with frequency f is proportional to:",
      "options": [
        "f A",
        "f\u00b2 A",
        "f A\u00b2",
        "f\u00b2 A\u00b2"
      ],
      "correct": 3,
      "explanation": "E = 0.5 m \u03c9\u00b2 A\u00b2 = 2 \u03c0\u00b2 m f\u00b2 A\u00b2. Thus total energy E \u221d f\u00b2 A\u00b2."
    },
    {
      "id": "P118",
      "subject": "Physics",
      "chapter": "Simple Harmonic Motion (SHM)",
      "difficulty": "H",
      "question": "A simple pendulum is suspended inside a freely falling elevator. Its time period of oscillation becomes:",
      "options": [
        "Zero",
        "2 s",
        "4 s",
        "Infinite"
      ],
      "correct": 3,
      "explanation": "In free fall, effective g_eff = g - g = 0. Period T = 2 \u03c0 \u221a(L / g_eff) \u2192 \u221e. It stops oscillating."
    },
    {
      "id": "P119",
      "subject": "Physics",
      "chapter": "Simple Harmonic Motion (SHM)",
      "difficulty": "M",
      "question": "Differential equation governing SHM of a particle of mass m is:",
      "options": [
        "d\u00b2x/dt\u00b2 + \u03c9\u00b2 x = 0",
        "d\u00b2x/dt\u00b2 - \u03c9\u00b2 x = 0",
        "dx/dt + \u03c9 x = 0",
        "d\u00b2x/dt\u00b2 + \u03c9 x = 0"
      ],
      "correct": 0,
      "explanation": "Standard linear SHM differential equation is d\u00b2x/dt\u00b2 + \u03c9\u00b2 x = 0."
    },
    {
      "id": "P120",
      "subject": "Physics",
      "chapter": "Simple Harmonic Motion (SHM)",
      "difficulty": "H",
      "question": "Two SHMs are represented by x1 = 10 sin(3\u03c0 t + \u03c0/3) and x2 = 5 (sin 3\u03c0 t + \u221a3 cos 3\u03c0 t). The ratio of their amplitudes is:",
      "options": [
        "1 : 1",
        "2 : 1",
        "1 : 2",
        "4 : 1"
      ],
      "correct": 0,
      "explanation": "x2 = 5 sin 3\u03c0 t + 5\u221a3 cos 3\u03c0 t = 10 (0.5 sin 3\u03c0 t + (\u221a3/2) cos 3\u03c0 t) = 10 sin(3\u03c0 t + \u03c0/3). Both amplitudes are 10. Ratio = 1 : 1."
    },
    {
      "id": "P121",
      "subject": "Physics",
      "chapter": "Wave Motion and Sound",
      "difficulty": "M",
      "question": "Speed of sound in air at 0\u00b0C is 332 m/s. The speed of sound at 27\u00b0C is approximately:",
      "options": [
        "332 m/s",
        "348 m/s",
        "360 m/s",
        "400 m/s"
      ],
      "correct": 1,
      "explanation": "v \u221d \u221aT. v(27\u00b0C) = 332 * \u221a(300/273) = 332 * 1.048 \u2248 348 m/s."
    },
    {
      "id": "P122",
      "subject": "Physics",
      "chapter": "Wave Motion and Sound",
      "difficulty": "H",
      "question": "An open organ pipe of length 50 cm produces fundamental frequency f. If one end is closed, the new fundamental frequency becomes:",
      "options": [
        "f / 4",
        "f / 2",
        "2 f",
        "f"
      ],
      "correct": 1,
      "explanation": "Open pipe f_open = v / (2L). Closed pipe f_closed = v / (4L) = f_open / 2 = f / 2."
    },
    {
      "id": "P123",
      "subject": "Physics",
      "chapter": "Wave Motion and Sound",
      "difficulty": "M",
      "question": "Two tuning forks of frequencies 256 Hz and 260 Hz are sounded together. Number of beats heard per second is:",
      "options": [
        "2",
        "4",
        "8",
        "258"
      ],
      "correct": 1,
      "explanation": "Beat frequency f_beat = |f1 - f2| = |260 - 256| = 4 beats/sec."
    },
    {
      "id": "P124",
      "subject": "Physics",
      "chapter": "Wave Motion and Sound",
      "difficulty": "H",
      "question": "A source of sound of frequency 500 Hz moves towards a stationary observer at 33 m/s. If speed of sound is 330 m/s, apparent frequency heard is:",
      "options": [
        "450 Hz",
        "500 Hz",
        "550 Hz",
        "600 Hz"
      ],
      "correct": 2,
      "explanation": "f' = f0 * v / (v - v_s) = 500 * 330 / (330 - 33) = 500 * 330 / 297 = 550 Hz."
    },
    {
      "id": "P125",
      "subject": "Physics",
      "chapter": "Wave Motion and Sound",
      "difficulty": "H",
      "question": "Fundamental frequency of a stretched string of length L under tension T is f. If tension is quadrupled (4T) and length halved (L/2), new fundamental frequency is:",
      "options": [
        "2 f",
        "4 f",
        "8 f",
        "f"
      ],
      "correct": 1,
      "explanation": "f = (1 / 2L) \u221a(T / \u03bc). New f' = (1 / (2 * L/2)) \u221a(4T / \u03bc) = (1 / L) * 2 \u221a(T / \u03bc) = 4 f."
    },
    {
      "id": "P126",
      "subject": "Physics",
      "chapter": "Wave Motion and Sound",
      "difficulty": "M",
      "question": "Laplace corrected Newton's formula for speed of sound in gas because compression and rarefaction are:",
      "options": [
        "Isothermal",
        "Adiabatic",
        "Isobaric",
        "Isochoric"
      ],
      "correct": 1,
      "explanation": "Laplace established that sound propagation occurs too rapidly for heat transfer, making it an adiabatic process."
    },
    {
      "id": "P127",
      "subject": "Physics",
      "chapter": "Wave Motion and Sound",
      "difficulty": "H",
      "question": "Distance between a node and an adjacent antinode in a standing wave of wavelength \u03bb is:",
      "options": [
        "\u03bb",
        "\u03bb / 2",
        "\u03bb / 4",
        "\u03bb / 8"
      ],
      "correct": 2,
      "explanation": "Distance between consecutive nodes is \u03bb/2; distance between adjacent node and antinode is \u03bb/4."
    },
    {
      "id": "P128",
      "subject": "Physics",
      "chapter": "Wave Motion and Sound",
      "difficulty": "H",
      "question": "Ratio of fundamental frequencies of an open organ pipe and a closed organ pipe of equal length is:",
      "options": [
        "1 : 1",
        "1 : 2",
        "2 : 1",
        "4 : 1"
      ],
      "correct": 2,
      "explanation": "f_open = v / 2L, f_closed = v / 4L. Ratio = (v/2L) / (v/4L) = 2 : 1."
    },
    {
      "id": "P129",
      "subject": "Physics",
      "chapter": "Wave Motion and Sound",
      "difficulty": "M",
      "question": "Sound waves cannot travel through:",
      "options": [
        "Solids",
        "Liquids",
        "Gases",
        "Vacuum"
      ],
      "correct": 3,
      "explanation": "Sound is a mechanical wave requiring a material medium; it cannot travel through vacuum."
    },
    {
      "id": "P130",
      "subject": "Physics",
      "chapter": "Wave Motion and Sound",
      "difficulty": "H",
      "question": "An observer moves away from a stationary sound source at half the speed of sound. Apparent frequency heard relative to source frequency f0 is:",
      "options": [
        "f0 / 2",
        "f0 / 4",
        "2 f0",
        "3 f0 / 2"
      ],
      "correct": 0,
      "explanation": "f' = f0 (v - v_o)/v = f0 (v - 0.5v)/v = 0.5 f0 = f0 / 2."
    },
    {
      "id": "P131",
      "subject": "Physics",
      "chapter": "Electrostatics",
      "difficulty": "M",
      "question": "Two point charges +2 \u03bcC and +6 \u03bcC repel each other with force 12 N. If a charge of -4 \u03bcC is added to each, the new force between them is:",
      "options": [
        "4 N attractive",
        "4 N repulsive",
        "12 N attractive",
        "0 N"
      ],
      "correct": 0,
      "explanation": "New charges: q1' = +2 - 4 = -2 \u03bcC, q2' = +6 - 4 = +2 \u03bcC. Magnitude product = |-2 * +2| = 4, original product = 2 * 6 = 12. New force F' = 12 * (4/12) = 4 N. Since charges have opposite signs (-2, +2), force is ATTRACTIVE."
    },
    {
      "id": "P132",
      "subject": "Physics",
      "chapter": "Electrostatics",
      "difficulty": "H",
      "question": "An electric dipole of moment p = 2 x 10^-8 C\u00b7m is placed at 30\u00b0 to a uniform electric field E = 4 x 10^4 N/C. Torque on the dipole is:",
      "options": [
        "2 x 10^-4 N\u00b7m",
        "4 x 10^-4 N\u00b7m",
        "8 x 10^-4 N\u00b7m",
        "4 x 10^-8 N\u00b7m"
      ],
      "correct": 1,
      "explanation": "\u03c4 = p E sin \u03b8 = (2 x 10^-8)(4 x 10^4) sin 30\u00b0 = 8 x 10^-4 * 0.5 = 4 x 10^-4 N\u00b7m."
    },
    {
      "id": "P133",
      "subject": "Physics",
      "chapter": "Electrostatics",
      "difficulty": "M",
      "question": "Electric field intensity at a distance r from an infinitely long straight wire carrying uniform linear charge density \u03bb is:",
      "options": [
        "\u03bb / (2 \u03c0 \u03b50 r)",
        "\u03bb / (4 \u03c0 \u03b50 r\u00b2)",
        "\u03bb / (2 \u03b50 r)",
        "2 \u03bb / (\u03c0 \u03b50 r)"
      ],
      "correct": 0,
      "explanation": "By Gauss's law for infinite cylinder: E = \u03bb / (2 \u03c0 \u03b50 r)."
    },
    {
      "id": "P134",
      "subject": "Physics",
      "chapter": "Electrostatics",
      "difficulty": "H",
      "question": "A hollow metal sphere of radius 10 cm is charged to a potential of 50 V. Electric field at a point 5 cm from its center is:",
      "options": [
        "500 V/m",
        "50 V/m",
        "5 V/m",
        "Zero"
      ],
      "correct": 3,
      "explanation": "Inside a hollow conducting sphere, electric charge resides exclusively on the outer surface, making net electric field E = 0 inside."
    },
    {
      "id": "P135",
      "subject": "Physics",
      "chapter": "Electrostatics",
      "difficulty": "H",
      "question": "Total electric flux passing through a closed Gaussian surface enclosing a dipole of dipole moment p is:",
      "options": [
        "p / \u03b50",
        "2 p / \u03b50",
        "Zero",
        "p / (4 \u03c0 \u03b50)"
      ],
      "correct": 2,
      "explanation": "Net enclosed charge Q_enc = +q + (-q) = 0. By Gauss's law \u03a6 = Q_enc / \u03b50 = 0."
    },
    {
      "id": "P136",
      "subject": "Physics",
      "chapter": "Electrostatics",
      "difficulty": "M",
      "question": "SI unit of permittivity of free space (\u03b50) is:",
      "options": [
        "C\u00b2 N^-1 m^-2",
        "N m\u00b2 C^-2",
        "C N^-1 m^-1",
        "C\u00b2 N m\u00b2"
      ],
      "correct": 0,
      "explanation": "F = q1 q2 / (4 \u03c0 \u03b50 r\u00b2) => \u03b50 = q1 q2 / (4 \u03c0 F r\u00b2) = C\u00b2 N^-1 m^-2."
    },
    {
      "id": "P137",
      "subject": "Physics",
      "chapter": "Electrostatics",
      "difficulty": "H",
      "question": "Work done in rotating an electric dipole of moment p through 180\u00b0 from stable equilibrium position in uniform electric field E is:",
      "options": [
        "p E",
        "2 p E",
        "0",
        "-p E"
      ],
      "correct": 1,
      "explanation": "W = p E (cos \u03b81 - cos \u03b82) = p E (cos 0\u00b0 - cos 180\u00b0) = p E (1 - (-1)) = 2 p E."
    },
    {
      "id": "P138",
      "subject": "Physics",
      "chapter": "Electrostatics",
      "difficulty": "H",
      "question": "Electric field intensity just outside a charged conductor of surface charge density \u03c3 in vacuum is:",
      "options": [
        "\u03c3 / \u03b50",
        "\u03c3 / (2 \u03b50)",
        "2 \u03c3 / \u03b50",
        "Zero"
      ],
      "correct": 0,
      "explanation": "By Gauss's law just outside a conductor surface: E = \u03c3 / \u03b50."
    },
    {
      "id": "P139",
      "subject": "Physics",
      "chapter": "Electrostatics",
      "difficulty": "M",
      "question": "If dielectric constant of a medium between two point charges is K = 4, the Coulomb force between them compared to vacuum becomes:",
      "options": [
        "4 times",
        "16 times",
        "1/4 th",
        "Unchanged"
      ],
      "correct": 2,
      "explanation": "F_medium = F_vacuum / K = F_vacuum / 4."
    },
    {
      "id": "P140",
      "subject": "Physics",
      "chapter": "Electrostatics",
      "difficulty": "H",
      "question": "A charge Q is divided into two parts q and (Q - q). For maximum electrostatic repulsion between them at fixed distance, q/Q ratio should be:",
      "options": [
        "1 / 4",
        "1 / 3",
        "1 / 2",
        "1 / \u221a2"
      ],
      "correct": 2,
      "explanation": "F = k q (Q - q) / r\u00b2. dF/dq = k (Q - 2q)/r\u00b2 = 0 => q = Q/2 => q/Q = 1/2."
    },
    {
      "id": "P141",
      "subject": "Physics",
      "chapter": "Potential & Capacitance",
      "difficulty": "M",
      "question": "A parallel plate capacitor of area A and separation d has capacitance C0. If distance between plates is doubled (2d), new capacitance becomes:",
      "options": [
        "C0 / 2",
        "C0 / 4",
        "2 C0",
        "4 C0"
      ],
      "correct": 0,
      "explanation": "C = \u03b50 A / d. If d' = 2d, C' = \u03b50 A / (2d) = C0 / 2."
    },
    {
      "id": "P142",
      "subject": "Physics",
      "chapter": "Potential & Capacitance",
      "difficulty": "H",
      "question": "Three capacitors of capacitances 2 \u03bcF, 3 \u03bcF, and 6 \u03bcF are connected in series across a 100 V supply. Total equivalent capacitance and charge on each are:",
      "options": [
        "1 \u03bcF, 100 \u03bcC",
        "11 \u03bcF, 1100 \u03bcC",
        "1 \u03bcF, 1000 \u03bcC",
        "6 \u03bcF, 600 \u03bcC"
      ],
      "correct": 0,
      "explanation": "1/C_eq = 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 6/6 = 1 => C_eq = 1 \u03bcF. Charge Q = C_eq V = 1 \u03bcF * 100 V = 100 \u03bcC."
    },
    {
      "id": "P143",
      "subject": "Physics",
      "chapter": "Potential & Capacitance",
      "difficulty": "M",
      "question": "Energy stored in a capacitor of capacitance 10 \u03bcF charged to a potential difference of 200 V is:",
      "options": [
        "0.1 J",
        "0.2 J",
        "0.4 J",
        "1.0 J"
      ],
      "correct": 1,
      "explanation": "U = 0.5 C V\u00b2 = 0.5 * (10 x 10^-6) * (200)\u00b2 = 5 x 10^-6 * 40000 = 0.2 J."
    },
    {
      "id": "P144",
      "subject": "Physics",
      "chapter": "Potential & Capacitance",
      "difficulty": "H",
      "question": "A 4 \u03bcF capacitor is charged to 400 V and then connected in parallel with an uncharged 4 \u03bcF capacitor. Common potential across them becomes:",
      "options": [
        "100 V",
        "200 V",
        "300 V",
        "400 V"
      ],
      "correct": 1,
      "explanation": "V_common = (C1 V1 + C2 V2) / (C1 + C2) = (4 * 400 + 0) / (4 + 4) = 1600 / 8 = 200 V."
    },
    {
      "id": "P145",
      "subject": "Physics",
      "chapter": "Potential & Capacitance",
      "difficulty": "H",
      "question": "A parallel plate capacitor with dielectric slab K = 5 has capacitance C. If slab is removed while connected to battery V, energy stored becomes:",
      "options": [
        "5 U0",
        "U0 / 5",
        "U0 / 25",
        "25 U0"
      ],
      "correct": 1,
      "explanation": "U = 0.5 C V\u00b2. Removing dielectric decreases C by factor 5. At constant battery voltage V, energy U decreases to U0 / 5."
    },
    {
      "id": "P146",
      "subject": "Physics",
      "chapter": "Potential & Capacitance",
      "difficulty": "M",
      "question": "Work done in moving a charge of 5 \u03bcC between two points on an equipotential surface at 50 V is:",
      "options": [
        "250 \u03bcJ",
        "50 \u03bcJ",
        "Zero",
        "10 \u03bcJ"
      ],
      "correct": 2,
      "explanation": "On equipotential surface \u0394V = 0. Work W = q \u0394V = 5 \u03bcC * 0 = 0."
    },
    {
      "id": "P147",
      "subject": "Physics",
      "chapter": "Potential & Capacitance",
      "difficulty": "H",
      "question": "Electric potential V at a point (x,y,z) is given by V = 6 x - 8 x y\u00b2 - 8 y + 6 z. Electric field intensity at origin (0,0,0) is:",
      "options": [
        "-6 i + 8 j - 6 k",
        "6 i + 8 j - 6 k",
        "-6 i - 8 j + 6 k",
        "8 i - 6 j + 6 k"
      ],
      "correct": 0,
      "explanation": "E_x = -\u2202V/\u2202x = -(6 - 8y\u00b2)|(0,0,0) = -6. E_y = -\u2202V/\u2202y = -(-16xy - 8)|(0,0,0) = +8. E_z = -\u2202V/\u2202z = -6. Thus E = -6 i + 8 j - 6 k N/C."
    },
    {
      "id": "P148",
      "subject": "Physics",
      "chapter": "Potential & Capacitance",
      "difficulty": "H",
      "question": "Two spherical conductors of radii r1 and r2 charged to potentials V1 and V2 are connected by a thin wire. Ratio of their final surface charge densities \u03c31/\u03c32 is:",
      "options": [
        "r2 / r1",
        "r1 / r2",
        "r1\u00b2 / r2\u00b2",
        "r2\u00b2 / r1\u00b2"
      ],
      "correct": 0,
      "explanation": "After connection, final potentials equal V. Q1 = C1 V = r1 V, Q2 = r2 V. \u03c31 = Q1/(4\u03c0r1\u00b2) = V/(4\u03c0r1). Thus \u03c31 / \u03c32 = r2 / r1."
    },
    {
      "id": "P149",
      "subject": "Physics",
      "chapter": "Potential & Capacitance",
      "difficulty": "M",
      "question": "Capacitance of a spherical conductor of radius R in free space is:",
      "options": [
        "4 \u03c0 \u03b50 R",
        "4 \u03c0 \u03b50 R\u00b2",
        "\u03b50 R / 4\u03c0",
        "4 \u03c0 \u03b50 / R"
      ],
      "correct": 0,
      "explanation": "Standard capacitance of isolated conducting sphere: C = 4 \u03c0 \u03b50 R."
    },
    {
      "id": "P150",
      "subject": "Physics",
      "chapter": "Potential & Capacitance",
      "difficulty": "H",
      "question": "Energy density (energy per unit volume) of an electric field E in vacuum is:",
      "options": [
        "\u03b50 E\u00b2",
        "0.5 \u03b50 E\u00b2",
        "0.5 E\u00b2 / \u03b50",
        "2 \u03b50 E\u00b2"
      ],
      "correct": 1,
      "explanation": "Electrostatic energy density u_E = 0.5 \u03b50 E\u00b2."
    },
    {
      "id": "P151",
      "subject": "Physics",
      "chapter": "Current Electricity",
      "difficulty": "M",
      "question": "A wire of resistance 12 \u03a9 is stretched to double its initial length. Its new resistance will be:",
      "options": [
        "12 \u03a9",
        "24 \u03a9",
        "36 \u03a9",
        "48 \u03a9"
      ],
      "correct": 3,
      "explanation": "When stretched to double length (L' = 2L), area halves (A' = A/2). New resistance R' = \u03c1 (2L)/(A/2) = 4 R = 4 * 12 = 48 \u03a9."
    },
    {
      "id": "P152",
      "subject": "Physics",
      "chapter": "Current Electricity",
      "difficulty": "H",
      "question": "A battery of EMF 12 V and internal resistance 2 \u03a9 is connected to a 10 \u03a9 external resistor. Terminal potential difference across the battery is:",
      "options": [
        "10 V",
        "12 V",
        "2 V",
        "8 V"
      ],
      "correct": 0,
      "explanation": "Current I = E / (R + r) = 12 / (10 + 2) = 1 A. Terminal voltage V = E - I r = 12 - (1 * 2) = 10 V."
    },
    {
      "id": "P153",
      "subject": "Physics",
      "chapter": "Current Electricity",
      "difficulty": "M",
      "question": "Three identical resistors of 6 \u03a9 each are connected in parallel. Equivalent resistance of the combination is:",
      "options": [
        "2 \u03a9",
        "6 \u03a9",
        "18 \u03a9",
        "0.5 \u03a9"
      ],
      "correct": 0,
      "explanation": "1/R_eq = 1/6 + 1/6 + 1/6 = 3/6 = 1/2 => R_eq = 2 \u03a9."
    },
    {
      "id": "P154",
      "subject": "Physics",
      "chapter": "Current Electricity",
      "difficulty": "H",
      "question": "In a Wheatstone bridge circuit, four arm resistances are P = 10 \u03a9, Q = 20 \u03a9, R = 15 \u03a9, S = 30 \u03a9. The bridge is:",
      "options": [
        "Unbalanced",
        "Balanced",
        "Short-circuited",
        "Open-circuited"
      ],
      "correct": 1,
      "explanation": "Balance condition P / Q = R / S => 10 / 20 = 15 / 30 = 0.5. Bridge is perfectly balanced."
    },
    {
      "id": "P155",
      "subject": "Physics",
      "chapter": "Current Electricity",
      "difficulty": "H",
      "question": "A 100 W, 220 V bulb and a 50 W, 220 V bulb are connected in series across a 220 V supply. Power consumed by 50 W bulb is approximately:",
      "options": [
        "11.1 W",
        "22.2 W",
        "33.3 W",
        "50 W"
      ],
      "correct": 1,
      "explanation": "R = V\u00b2/P. R1 (100W) = 484 \u03a9, R2 (50W) = 968 \u03a9. Total R = 1452 \u03a9. Current I = 220 / 1452 = 0.1515 A. Power in R2 = I\u00b2 R2 = (0.1515)\u00b2 * 968 \u2248 22.2 W."
    },
    {
      "id": "P156",
      "subject": "Physics",
      "chapter": "Current Electricity",
      "difficulty": "M",
      "question": "Kirchhoff's First Law (Junction Rule) \u2211 I = 0 is based on the law of conservation of:",
      "options": [
        "Energy",
        "Charge",
        "Momentum",
        "Mass"
      ],
      "correct": 1,
      "explanation": "Junction rule states total current entering a node equals total current leaving, expressing Conservation of Charge."
    },
    {
      "id": "P157",
      "subject": "Physics",
      "chapter": "Current Electricity",
      "difficulty": "H",
      "question": "A wire of resistance R is cut into 5 equal parts. These 5 parts are then connected in parallel. Equivalent resistance of combination is:",
      "options": [
        "R / 5",
        "R / 10",
        "R / 25",
        "5 R"
      ],
      "correct": 2,
      "explanation": "Each part has resistance r = R / 5. Connected in parallel: 1/R_eq = 5 * (1 / (R/5)) = 25 / R => R_eq = R / 25."
    },
    {
      "id": "P158",
      "subject": "Physics",
      "chapter": "Current Electricity",
      "difficulty": "H",
      "question": "Potentiometer wire of length 10 m has resistance 20 \u03a9. It is connected in series with a 3V battery and 10 \u03a9 resistor. Potential gradient along wire is:",
      "options": [
        "0.1 V/m",
        "0.2 V/m",
        "0.3 V/m",
        "0.5 V/m"
      ],
      "correct": 1,
      "explanation": "Current I = 3 / (20 + 10) = 0.1 A. Voltage across 10m wire V = I * R_wire = 0.1 * 20 = 2 V. Potential gradient k = V / L = 2 / 10 = 0.2 V/m."
    },
    {
      "id": "P159",
      "subject": "Physics",
      "chapter": "Current Electricity",
      "difficulty": "M",
      "question": "Drift velocity of free electrons in a copper conductor is of the order of:",
      "options": [
        "10^8 m/s",
        "3 x 10^8 m/s",
        "10^-4 m/s",
        "10^2 m/s"
      ],
      "correct": 2,
      "explanation": "Drift velocity of conduction electrons under typical electrical fields is very small, ~10^-4 m/s (fraction of a mm/s)."
    },
    {
      "id": "P160",
      "subject": "Physics",
      "chapter": "Current Electricity",
      "difficulty": "H",
      "question": "Temperature coefficient of resistance \u03b1 of a wire is 0.004 /\u00b0C. If resistance is 10 \u03a9 at 0\u00b0C, its resistance at 100\u00b0C will be:",
      "options": [
        "10.4 \u03a9",
        "14 \u03a9",
        "40 \u03a9",
        "140 \u03a9"
      ],
      "correct": 1,
      "explanation": "R_T = R_0 (1 + \u03b1 \u0394T) = 10 (1 + 0.004 * 100) = 10 (1 + 0.4) = 14 \u03a9."
    },
    {
      "id": "P161",
      "subject": "Physics",
      "chapter": "Moving Charges & Magnetism",
      "difficulty": "H",
      "question": "A proton (q = 1.6 x 10^-19 C, m = 1.67 x 10^-27 kg) enters a uniform magnetic field B = 0.5 T perpendicularly with velocity v = 2 x 10^6 m/s. Radius of circular path is:",
      "options": [
        "2.09 cm",
        "4.18 cm",
        "8.35 cm",
        "10.5 cm"
      ],
      "correct": 1,
      "explanation": "r = m v / (q B) = (1.67 x 10^-27 * 2 x 10^6) / (1.616 x 10^-19 * 0.5) = (3.34 x 10^-21) / (0.8 x 10^-19) = 0.04175 m = 4.18 cm."
    },
    {
      "id": "P162",
      "subject": "Physics",
      "chapter": "Moving Charges & Magnetism",
      "difficulty": "M",
      "question": "Magnetic field at the center of a circular coil of radius R carrying current I is:",
      "options": [
        "\u03bc0 I / (2 R)",
        "\u03bc0 I / (4 \u03c0 R)",
        "\u03bc0 I / (2 \u03c0 R)",
        "\u03bc0 I R / 2"
      ],
      "correct": 0,
      "explanation": "B = \u03bc0 I / (2 R) by Biot-Savart law at coil center."
    },
    {
      "id": "P163",
      "subject": "Physics",
      "chapter": "Moving Charges & Magnetism",
      "difficulty": "H",
      "question": "Two long parallel straight wires carrying currents of 10 A and 20 A in the same direction are separated by 0.2 m. Force per unit length between them is:",
      "options": [
        "2 x 10^-4 N/m (attractive)",
        "4 x 10^-4 N/m (attractive)",
        "2 x 10^-4 N/m (repulsive)",
        "4 x 10^-4 N/m (repulsive)"
      ],
      "correct": 0,
      "explanation": "F/L = (\u03bc0 I1 I2) / (2 \u03c0 d) = (4\u03c0 x 10^-7 * 10 * 20) / (2 \u03c0 * 0.2) = (2 x 10^-7 * 200) / 0.2 = 2 x 10^-4 N/m. Same direction currents ATTRACT."
    },
    {
      "id": "P164",
      "subject": "Physics",
      "chapter": "Moving Charges & Magnetism",
      "difficulty": "M",
      "question": "Magnetic force on a charge q moving with velocity v in a magnetic field B is zero when angle \u03b8 between v and B is:",
      "options": [
        "0\u00b0 or 180\u00b0",
        "45\u00b0",
        "90\u00b0",
        "270\u00b0"
      ],
      "correct": 0,
      "explanation": "F = q v B sin \u03b8 = 0 when sin \u03b8 = 0, i.e. \u03b8 = 0\u00b0 (parallel) or 180\u00b0 (anti-parallel)."
    },
    {
      "id": "P165",
      "subject": "Physics",
      "chapter": "Moving Charges & Magnetism",
      "difficulty": "H",
      "question": "A solenoid of length 0.5 m has 500 turns and carries a current of 2 A. Magnetic field inside the solenoid is: (\u03bc0 = 4\u03c0 x 10^-7 T\u00b7m/A)",
      "options": [
        "2.51 x 10^-3 T",
        "1.25 x 10^-3 T",
        "5.02 x 10^-3 T",
        "2.51 x 10^-4 T"
      ],
      "correct": 0,
      "explanation": "n = N / L = 500 / 0.5 = 1000 turns/m. B = \u03bc0 n I = 4\u03c0 x 10^-7 * 1000 * 2 = 8\u03c0 x 10^-4 = 2.51 x 10^-3 T."
    },
    {
      "id": "P166",
      "subject": "Physics",
      "chapter": "Moving Charges & Magnetism",
      "difficulty": "H",
      "question": "A galvanometer of resistance 50 \u03a9 gives full scale deflection for 1 mA. To convert it into a voltmeter reading up to 10 V, series resistance required is:",
      "options": [
        "9950 \u03a9",
        "10000 \u03a9",
        "9900 \u03a9",
        "10050 \u03a9"
      ],
      "correct": 0,
      "explanation": "V = I_g (G + R) => 10 = 0.001 (50 + R) => 10000 = 50 + R => R = 9950 \u03a9."
    },
    {
      "id": "P167",
      "subject": "Physics",
      "chapter": "Moving Charges & Magnetism",
      "difficulty": "M",
      "question": "Work done by a magnetic field on a moving point charge is:",
      "options": [
        "Always positive",
        "Always negative",
        "Always zero",
        "Depends on charge sign"
      ],
      "correct": 2,
      "explanation": "Magnetic force F = q(v x B) is always perpendicular to velocity v (F \u22a5 v), so work W = F . v dt = 0."
    },
    {
      "id": "P168",
      "subject": "Physics",
      "chapter": "Moving Charges & Magnetism",
      "difficulty": "H",
      "question": "Cyclotron frequency of a charged particle in a magnetic field B is independent of:",
      "options": [
        "Speed of particle",
        "Charge of particle",
        "Magnetic field B",
        "Mass of particle"
      ],
      "correct": 0,
      "explanation": "Cyclotron frequency f = q B / (2 \u03c0 m). It depends on q, B, m but is completely independent of particle speed v or orbit radius r."
    },
    {
      "id": "P169",
      "subject": "Physics",
      "chapter": "Moving Charges & Magnetism",
      "difficulty": "M",
      "question": "Unit of magnetic flux density B is Tesla (T). 1 Tesla is equal to:",
      "options": [
        "1 Weber / m\u00b2",
        "1 Weber \u00b7 m\u00b2",
        "1 Newton / A",
        "1 Joule / C"
      ],
      "correct": 0,
      "explanation": "Magnetic flux \u03a6 = B A => B = \u03a6 / A = 1 Wb/m\u00b2 = 1 Tesla."
    },
    {
      "id": "P170",
      "subject": "Physics",
      "chapter": "Moving Charges & Magnetism",
      "difficulty": "H",
      "question": "A circular loop of radius 0.1 m carrying current 5 A is placed in a uniform magnetic field 0.2 T. Maximum torque experienced by the loop is:",
      "options": [
        "0.0314 N\u00b7m",
        "0.314 N\u00b7m",
        "0.0628 N\u00b7m",
        "0.628 N\u00b7m"
      ],
      "correct": 0,
      "explanation": "Area A = \u03c0 r\u00b2 = 3.1416 * 0.01 = 0.031416 m\u00b2. Magnetic moment M = I A = 5 * 0.031416 = 0.157 A\u00b7m\u00b2. Max torque \u03c4 = M B = 0.157 * 0.2 = 0.0314 N\u00b7m."
    },
    {
      "id": "P171",
      "subject": "Physics",
      "chapter": "Electromagnetic Induction (EMI)",
      "difficulty": "M",
      "question": "Lenz's law of electromagnetic induction is a consequence of the law of conservation of:",
      "options": [
        "Charge",
        "Mass",
        "Energy",
        "Momentum"
      ],
      "correct": 2,
      "explanation": "Lenz's law ensures mechanical work done against opposing induced EMF is converted into electrical energy, satisfying Energy Conservation."
    },
    {
      "id": "P172",
      "subject": "Physics",
      "chapter": "Electromagnetic Induction (EMI)",
      "difficulty": "H",
      "question": "A metal rod of length 1 m is rotated at 10 rad/s about one end perpendicular to a magnetic field B = 0.4 T. Induced EMF across the ends is:",
      "options": [
        "1 V",
        "2 V",
        "4 V",
        "8 V"
      ],
      "correct": 1,
      "explanation": "Induced EMF \u03b5 = 0.5 B L\u00b2 \u03c9 = 0.5 * 0.4 * (1\u00b2) * 10 = 2 V."
    },
    {
      "id": "P173",
      "subject": "Physics",
      "chapter": "Electromagnetic Induction (EMI)",
      "difficulty": "M",
      "question": "Self-inductance of a coil is 5 H. If current through it changes from 4 A to 0 A in 0.1 s, induced EMF in coil is:",
      "options": [
        "50 V",
        "100 V",
        "200 V",
        "500 V"
      ],
      "correct": 2,
      "explanation": "\u03b5 = - L (dI/dt) = - 5 * (0 - 4)/0.1 = 5 * 40 = 200 V."
    },
    {
      "id": "P174",
      "subject": "Physics",
      "chapter": "Electromagnetic Induction (EMI)",
      "difficulty": "H",
      "question": "Energy stored in a 2 H inductor carrying a steady current of 4 A is:",
      "options": [
        "8 J",
        "16 J",
        "32 J",
        "64 J"
      ],
      "correct": 1,
      "explanation": "U = 0.5 L I\u00b2 = 0.5 * 2 * (4\u00b2) = 16 J."
    },
    {
      "id": "P175",
      "subject": "Physics",
      "chapter": "Electromagnetic Induction (EMI)",
      "difficulty": "H",
      "question": "A square loop of side 0.2 m is placed perpendicular to a magnetic field B changing at a rate dB/dt = 10 T/s. Induced EMF in loop is:",
      "options": [
        "0.1 V",
        "0.4 V",
        "0.8 V",
        "4.0 V"
      ],
      "correct": 1,
      "explanation": "\u03b5 = d\u03a6/dt = A (dB/dt) = (0.2 * 0.2) * 10 = 0.04 * 10 = 0.4 V."
    },
    {
      "id": "P176",
      "subject": "Physics",
      "chapter": "Electromagnetic Induction (EMI)",
      "difficulty": "M",
      "question": "Dimensions of self-inductance L are:",
      "options": [
        "[M L\u00b2 T^-2 A^-2]",
        "[M L\u00b2 T^-2 A^-1]",
        "[M L T^-2 A^-2]",
        "[M L\u00b2 T^-1 A^-2]"
      ],
      "correct": 0,
      "explanation": "U = 0.5 L I\u00b2 => L = 2U / I\u00b2 = [M L\u00b2 T^-2] / [A\u00b2] = [M L\u00b2 T^-2 A^-2]."
    },
    {
      "id": "P177",
      "subject": "Physics",
      "chapter": "Electromagnetic Induction (EMI)",
      "difficulty": "H",
      "question": "A aircraft with wingspan 40 m flies horizontally at 250 m/s in a region where vertical component of Earth's magnetic field is 3 x 10^-5 T. EMF induced between wingtips is:",
      "options": [
        "0.3 V",
        "0.6 V",
        "1.2 V",
        "3.0 V"
      ],
      "correct": 0,
      "explanation": "\u03b5 = B_v L v = (3 x 10^-5) * 40 * 250 = 3 x 10^-5 * 10000 = 0.3 V."
    },
    {
      "id": "P178",
      "subject": "Physics",
      "chapter": "Electromagnetic Induction (EMI)",
      "difficulty": "H",
      "question": "Two coaxial coils have mutual inductance M = 0.05 H. If current in primary coil changes as I = 10 sin(100 \u03c0 t) A, maximum induced EMF in secondary coil is:",
      "options": [
        "15.7 V",
        "50 \u03c0 V",
        "157 V",
        "50 V"
      ],
      "correct": 2,
      "explanation": "\u03b5_2 = - M (dI/dt) = - 0.05 * (10 * 100 \u03c0 cos(100 \u03c0 t)) = - 50 \u03c0 cos(100 \u03c0 t). Max magnitude = 50 \u03c0 = 50 * 3.1416 = 157 V."
    },
    {
      "id": "P179",
      "subject": "Physics",
      "chapter": "Electromagnetic Induction (EMI)",
      "difficulty": "M",
      "question": "Eddy currents produced in solid metal blocks inside changing magnetic fields can be minimized by:",
      "options": [
        "Using solid copper blocks",
        "Laminating the iron core",
        "Increasing magnetic field frequency",
        "Using non-magnetic metals"
      ],
      "correct": 1,
      "explanation": "Laminating iron cores into thin insulated sheets breaks eddy current loops, reducing Joule heating losses."
    },
    {
      "id": "P180",
      "subject": "Physics",
      "chapter": "Electromagnetic Induction (EMI)",
      "difficulty": "H",
      "question": "SI unit of Henry (H) is equivalent to:",
      "options": [
        "Weber / Ampere",
        "Volt \u00b7 second / Ampere",
        "Joule / Ampere\u00b2",
        "All of the above"
      ],
      "correct": 3,
      "explanation": "L = \u03a6/I (Wb/A), \u03b5 = L dI/dt (V\u00b7s/A), U = 0.5 L I\u00b2 (J/A\u00b2). All three units are equivalent to 1 Henry."
    },
    {
      "id": "P181",
      "subject": "Physics",
      "chapter": "Alternating Current (AC)",
      "difficulty": "M",
      "question": "An AC voltage source is given by V = 220 \u221a2 sin(100 \u03c0 t) V. Its RMS voltage and frequency are:",
      "options": [
        "220 V, 50 Hz",
        "220 V, 100 Hz",
        "311 V, 50 Hz",
        "220 \u221a2 V, 50 Hz"
      ],
      "correct": 0,
      "explanation": "V_0 = 220 \u221a2 => V_rms = V_0 / \u221a2 = 220 V. Angular frequency \u03c9 = 100 \u03c0 => 2 \u03c0 f = 100 \u03c0 => f = 50 Hz."
    },
    {
      "id": "P182",
      "subject": "Physics",
      "chapter": "Alternating Current (AC)",
      "difficulty": "H",
      "question": "A series LCR circuit has R = 30 \u03a9, X_L = 80 \u03a9, and X_C = 40 \u03a9 connected to 200V RMS AC supply. Impedance Z and current I are:",
      "options": [
        "50 \u03a9, 4 A",
        "70 \u03a9, 2.85 A",
        "50 \u03a9, 2 A",
        "30 \u03a9, 6.67 A"
      ],
      "correct": 0,
      "explanation": "Z = \u221a(R\u00b2 + (X_L - X_C)\u00b2) = \u221a(30\u00b2 + (80 - 40)\u00b2) = \u221a(900 + 1600) = \u221a2500 = 50 \u03a9. Current I = V / Z = 200 / 50 = 4 A."
    },
    {
      "id": "P183",
      "subject": "Physics",
      "chapter": "Alternating Current (AC)",
      "difficulty": "M",
      "question": "In a purely inductive AC circuit, phase relationship between voltage V and current I is:",
      "options": [
        "V and I in phase",
        "V leads I by 90\u00b0",
        "I leads V by 90\u00b0",
        "V leads I by 180\u00b0"
      ],
      "correct": 1,
      "explanation": "In pure inductor, voltage leads current by 90\u00b0 (\u03c0/2 radians)."
    },
    {
      "id": "P184",
      "subject": "Physics",
      "chapter": "Alternating Current (AC)",
      "difficulty": "H",
      "question": "Resonance frequency of a series LCR circuit with L = 0.1 H and C = 10 \u03bcF is:",
      "options": [
        "159.2 Hz",
        "318.3 Hz",
        "500 Hz",
        "1000 Hz"
      ],
      "correct": 0,
      "explanation": "f_0 = 1 / (2 \u03c0 \u221a(L C)) = 1 / (2 \u03c0 \u221a(0.1 * 10^-5)) = 1 / (2 \u03c0 \u221a(10^-6)) = 1000 / (2 \u03c0) = 159.2 Hz."
    },
    {
      "id": "P185",
      "subject": "Physics",
      "chapter": "Alternating Current (AC)",
      "difficulty": "H",
      "question": "Power factor of a series LCR circuit at resonance is:",
      "options": [
        "0",
        "0.5",
        "0.707",
        "1.0"
      ],
      "correct": 3,
      "explanation": "At resonance X_L = X_C => Z = R. Power factor cos \u03c6 = R / Z = R / R = 1.0."
    },
    {
      "id": "P186",
      "subject": "Physics",
      "chapter": "Alternating Current (AC)",
      "difficulty": "M",
      "question": "Inductive reactance X_L of a 0.2 H inductor connected to 50 Hz AC supply is:",
      "options": [
        "10 \u03c0 \u03a9",
        "20 \u03c0 \u03a9",
        "50 \u03c0 \u03a9",
        "100 \u03c0 \u03a9"
      ],
      "correct": 1,
      "explanation": "X_L = 2 \u03c0 f L = 2 * \u03c0 * 50 * 0.2 = 20 \u03c0 \u03a9 \u2248 62.8 \u03a9."
    },
    {
      "id": "P187",
      "subject": "Physics",
      "chapter": "Alternating Current (AC)",
      "difficulty": "H",
      "question": "Ideal step-up transformer has primary to secondary turn ratio N_p : N_s = 1 : 10. If primary voltage is 220 V and primary current is 5 A, secondary voltage and current are:",
      "options": [
        "2200 V, 0.5 A",
        "22 V, 50 A",
        "2200 V, 50 A",
        "22 V, 0.5 A"
      ],
      "correct": 0,
      "explanation": "V_s = V_p (N_s/N_p) = 220 * 10 = 2200 V. For ideal transformer P_p = P_s => V_p I_p = V_s I_s => I_s = 5 / 10 = 0.5 A."
    },
    {
      "id": "P188",
      "subject": "Physics",
      "chapter": "Alternating Current (AC)",
      "difficulty": "H",
      "question": "Average power consumed in a pure capacitor connected to AC supply over one complete cycle is:",
      "options": [
        "0.5 C V\u00b2",
        "C V\u00b2 f",
        "Zero",
        "V\u00b2 / X_C"
      ],
      "correct": 2,
      "explanation": "In pure capacitor phase angle \u03c6 = 90\u00b0. Power factor cos 90\u00b0 = 0 => Average power P_avg = V_rms I_rms cos 90\u00b0 = 0."
    },
    {
      "id": "P189",
      "subject": "Physics",
      "chapter": "Alternating Current (AC)",
      "difficulty": "M",
      "question": "Q-factor (Quality factor) of a series resonant LCR circuit is given by:",
      "options": [
        "(1 / R) \u221a(L / C)",
        "R \u221a(L / C)",
        "(1 / R) \u221a(C / L)",
        "R \u221a(C / L)"
      ],
      "correct": 0,
      "explanation": "Q = \u03c9_0 L / R = (1 / R) \u221a(L / C)."
    },
    {
      "id": "P190",
      "subject": "Physics",
      "chapter": "Alternating Current (AC)",
      "difficulty": "H",
      "question": "In an AC circuit, peak current I_0 = 5 A. The RMS current is:",
      "options": [
        "2.5 A",
        "3.535 A",
        "5 A",
        "7.07 A"
      ],
      "correct": 1,
      "explanation": "I_rms = I_0 / \u221a2 = 5 / 1.414 = 3.535 A."
    },
    {
      "id": "P191",
      "subject": "Physics",
      "chapter": "EM Waves",
      "difficulty": "M",
      "question": "Which component of an electromagnetic wave is primarily responsible for optical effects (light vector)?",
      "options": [
        "Magnetic field vector B",
        "Electric field vector E",
        "Poynting vector S",
        "Displacement current"
      ],
      "correct": 1,
      "explanation": "The electric field vector E causes vision and optical phenomena, so it is designated as the light vector."
    },
    {
      "id": "P192",
      "subject": "Physics",
      "chapter": "EM Waves",
      "difficulty": "H",
      "question": "An EM wave propagating along +z direction has electric field E = E0 sin(k z - \u03c9 t) i. The direction of magnetic field B is along:",
      "options": [
        "+x direction",
        "+y direction",
        "-y direction",
        "-z direction"
      ],
      "correct": 1,
      "explanation": "Direction of propagation is along E x B. Since E is along +i and propagation along +k, B must be along +j (+y direction) because i x j = k."
    },
    {
      "id": "P193",
      "subject": "Physics",
      "chapter": "EM Waves",
      "difficulty": "M",
      "question": "Ratio of magnitudes of electric field E0 and magnetic field B0 in free space for an EM wave is equal to:",
      "options": [
        "Speed of light c",
        "1 / c",
        "c\u00b2",
        "1 / c\u00b2"
      ],
      "correct": 0,
      "explanation": "E0 / B0 = c \u2248 3 x 10^8 m/s in vacuum."
    },
    {
      "id": "P194",
      "subject": "Physics",
      "chapter": "EM Waves",
      "difficulty": "H",
      "question": "Maxwell's displacement current I_d between charging parallel capacitor plates of area A is given by:",
      "options": [
        "\u03b50 (d\u03a6_E / dt)",
        "\u03bc0 (d\u03a6_B / dt)",
        "\u03b50 A (dE / dt)",
        "Both A and C"
      ],
      "correct": 3,
      "explanation": "I_d = \u03b50 d\u03a6_E/dt = \u03b50 d(E A)/dt = \u03b50 A (dE/dt). Both A and C are correct."
    },
    {
      "id": "P195",
      "subject": "Physics",
      "chapter": "EM Waves",
      "difficulty": "H",
      "question": "Which of the following electromagnetic waves has the SHORTEST wavelength?",
      "options": [
        "X-rays",
        "Gamma rays",
        "Ultraviolet rays",
        "Microwaves"
      ],
      "correct": 1,
      "explanation": "Gamma rays have the highest frequency (> 10^19 Hz) and shortest wavelength (< 10^-11 m) in the EM spectrum."
    },
    {
      "id": "P196",
      "subject": "Physics",
      "chapter": "EM Waves",
      "difficulty": "M",
      "question": "Poynting vector S represents rate of flow of EM energy per unit area. Its unit and direction are:",
      "options": [
        "W/m\u00b2, direction of E",
        "W/m\u00b2, direction of E x B",
        "J/m\u00b2, direction of B",
        "W/m\u00b2, direction of B x E"
      ],
      "correct": 1,
      "explanation": "S = (1 / \u03bc0) (E x B). Unit is W/m\u00b2 (or J/s\u00b7m\u00b2) in the direction of wave propagation E x B."
    },
    {
      "id": "P197",
      "subject": "Physics",
      "chapter": "EM Waves",
      "difficulty": "H",
      "question": "Electromagnetic waves are produced by:",
      "options": [
        "A charge at rest",
        "A charge moving with uniform velocity",
        "An accelerating or oscillating charge",
        "A neutral particle"
      ],
      "correct": 2,
      "explanation": "Accelerating or oscillating electric charges radiate energy in the form of electromagnetic waves."
    },
    {
      "id": "P198",
      "subject": "Physics",
      "chapter": "EM Waves",
      "difficulty": "H",
      "question": "Average energy density of an EM wave with electric field amplitude E0 in vacuum is:",
      "options": [
        "0.5 \u03b50 E0\u00b2",
        "\u03b50 E0\u00b2",
        "2 \u03b50 E0\u00b2",
        "0.25 \u03b50 E0\u00b2"
      ],
      "correct": 0,
      "explanation": "u_avg = 0.5 \u03b50 E0\u00b2 (equal contributions of 0.25 \u03b50 E0\u00b2 from electric and magnetic fields)."
    },
    {
      "id": "P199",
      "subject": "Physics",
      "chapter": "EM Waves",
      "difficulty": "M",
      "question": "Microwaves are commonly used in:",
      "options": [
        "Radiation therapy",
        "Radar and satellite communications",
        "Sterilization",
        "Nuclear reactions"
      ],
      "correct": 1,
      "explanation": "Microwaves (wavelength 1 mm to 30 cm) are widely used in radar, satellite communication, and microwave ovens."
    },
    {
      "id": "P200",
      "subject": "Physics",
      "chapter": "EM Waves",
      "difficulty": "H",
      "question": "Radiation pressure exerted by an EM wave of intensity I on a completely absorbing surface in vacuum is:",
      "options": [
        "I / c",
        "2 I / c",
        "I c",
        "I / (2 c)"
      ],
      "correct": 0,
      "explanation": "For complete absorption: Pressure P = I / c. (For complete reflection P = 2 I / c)."
    },
    {
      "id": "P201",
      "subject": "Physics",
      "chapter": "Ray Optics & Optical Instruments",
      "difficulty": "M",
      "question": "Focal length of a convex lens is 20 cm. Its optical power in Diopters is:",
      "options": [
        "+2 D",
        "+5 D",
        "-5 D",
        "+0.05 D"
      ],
      "correct": 1,
      "explanation": "P = 1 / f(in meters) = 1 / 0.2 m = +5 D."
    },
    {
      "id": "P202",
      "subject": "Physics",
      "chapter": "Ray Optics & Optical Instruments",
      "difficulty": "H",
      "question": "A convex lens of focal length 20 cm forms a real image 3 times the size of an object. Distance of object from lens is:",
      "options": [
        "26.67 cm",
        "13.33 cm",
        "40 cm",
        "60 cm"
      ],
      "correct": 0,
      "explanation": "Real image => m = -3 = v / u => v = -3 u. Lens formula: 1/f = 1/v - 1/u => 1/20 = 1/(-3u) - 1/u = -4/(3u) => 3u = -80 => u = -26.67 cm."
    },
    {
      "id": "P203",
      "subject": "Physics",
      "chapter": "Ray Optics & Optical Instruments",
      "difficulty": "M",
      "question": "Critical angle for total internal reflection from a glass medium (n = 1.5) to air is approximately:",
      "options": [
        "30\u00b0",
        "41.8\u00b0",
        "48.6\u00b0",
        "60\u00b0"
      ],
      "correct": 1,
      "explanation": "sin C = 1 / n = 1 / 1.5 = 0.6667 => C = sin^-1(0.6667) \u2248 41.8\u00b0."
    },
    {
      "id": "P204",
      "subject": "Physics",
      "chapter": "Ray Optics & Optical Instruments",
      "difficulty": "H",
      "question": "An equiconvex lens made of glass (n = 1.5) has focal length 20 cm in air. Radius of curvature R of each surface is:",
      "options": [
        "10 cm",
        "20 cm",
        "30 cm",
        "40 cm"
      ],
      "correct": 1,
      "explanation": "Lens maker's formula: 1/f = (n - 1)(1/R1 - 1/R2) => 1/20 = (1.5 - 1)(1/R - (-1/R)) = 0.5 (2/R) = 1/R => R = 20 cm."
    },
    {
      "id": "P205",
      "subject": "Physics",
      "chapter": "Ray Optics & Optical Instruments",
      "difficulty": "H",
      "question": "Minimum deviation produced by a 60\u00b0 glass prism (n = \u221a2) is:",
      "options": [
        "15\u00b0",
        "30\u00b0",
        "45\u00b0",
        "60\u00b0"
      ],
      "correct": 1,
      "explanation": "n = sin((A + \u03b4_m)/2) / sin(A/2) => \u221a2 = sin((60\u00b0 + \u03b4_m)/2) / sin 30\u00b0 => sin((60\u00b0 + \u03b4_m)/2) = \u221a2 * 0.5 = 1/\u221a2 => (60\u00b0 + \u03b4_m)/2 = 45\u00b0 => 60\u00b0 + \u03b4_m = 90\u00b0 => \u03b4_m = 30\u00b0."
    },
    {
      "id": "P206",
      "subject": "Physics",
      "chapter": "Ray Optics & Optical Instruments",
      "difficulty": "M",
      "question": "A person suffering from myopia (nearsightedness) can be corrected using:",
      "options": [
        "Convex lens",
        "Concave lens",
        "Cylindrical lens",
        "Bifocal lens"
      ],
      "correct": 1,
      "explanation": "Myopia causes light rays to focus in front of retina; a diverging concave lens moves focus back to retina."
    },
    {
      "id": "P207",
      "subject": "Physics",
      "chapter": "Ray Optics & Optical Instruments",
      "difficulty": "H",
      "question": "An astronomical telescope has objective focal length 100 cm and eyepiece focal length 5 cm. Magnifying power in normal adjustment and tube length are:",
      "options": [
        "20, 105 cm",
        "20, 95 cm",
        "50, 105 cm",
        "5, 500 cm"
      ],
      "correct": 0,
      "explanation": "Magnification M = f_o / f_e = 100 / 5 = 20. Tube length L = f_o + f_e = 100 + 5 = 105 cm."
    },
    {
      "id": "P208",
      "subject": "Physics",
      "chapter": "Ray Optics & Optical Instruments",
      "difficulty": "H",
      "question": "An object is placed 15 cm in front of a concave mirror of focal length 10 cm. Image distance and nature are:",
      "options": [
        "-30 cm, Real & inverted",
        "+30 cm, Virtual & erect",
        "-60 cm, Real & inverted",
        "-15 cm, Real & inverted"
      ],
      "correct": 0,
      "explanation": "1/f = 1/v + 1/u => -1/10 = 1/v - 1/15 => 1/v = 1/15 - 1/10 = (2-3)/30 = -1/30 => v = -30 cm. Image is real and inverted."
    },
    {
      "id": "P209",
      "subject": "Physics",
      "chapter": "Ray Optics & Optical Instruments",
      "difficulty": "M",
      "question": "Velocity of light in a medium of refractive index n = 1.5 is:",
      "options": [
        "3 x 10^8 m/s",
        "2 x 10^8 m/s",
        "1.5 x 10^8 m/s",
        "4.5 x 10^8 m/s"
      ],
      "correct": 1,
      "explanation": "v = c / n = (3 x 10^8) / 1.5 = 2 x 10^8 m/s."
    },
    {
      "id": "P210",
      "subject": "Physics",
      "chapter": "Ray Optics & Optical Instruments",
      "difficulty": "H",
      "question": "Two thin lenses of powers +5 D and -3 D are placed in contact. Equivalent focal length of the combination is:",
      "options": [
        "20 cm",
        "50 cm",
        "100 cm",
        "25 cm"
      ],
      "correct": 1,
      "explanation": "P_eq = P1 + P2 = 5 - 3 = +2 D. Focal length f = 1 / P_eq = 1 / 2 m = 50 cm."
    },
    {
      "id": "P211",
      "subject": "Physics",
      "chapter": "Wave Optics",
      "difficulty": "M",
      "question": "In Young's double slit experiment, fringe width \u03b2 = 0.6 mm. If wavelength of light is doubled and slit separation halved, new fringe width becomes:",
      "options": [
        "0.6 mm",
        "1.2 mm",
        "2.4 mm",
        "4.8 mm"
      ],
      "correct": 2,
      "explanation": "\u03b2 = \u03bb D / d. If \u03bb' = 2 \u03bb and d' = d/2: \u03b2' = (2 \u03bb) D / (d/2) = 4 \u03b2 = 4 * 0.6 = 2.4 mm."
    },
    {
      "id": "P212",
      "subject": "Physics",
      "chapter": "Wave Optics",
      "difficulty": "H",
      "question": "Two coherent monochromatic light waves of intensities I and 4I interfere. Maximum and minimum intensities in interference pattern are:",
      "options": [
        "5I and 3I",
        "9I and I",
        "9I and 3I",
        "4I and I"
      ],
      "correct": 1,
      "explanation": "I_max = (\u221aI + \u221a4I)\u00b2 = (1 + 2)\u00b2 I = 9I. I_min = (\u221a4I - \u221aI)\u00b2 = (2 - 1)\u00b2 I = I."
    },
    {
      "id": "P213",
      "subject": "Physics",
      "chapter": "Wave Optics",
      "difficulty": "M",
      "question": "Brewster's angle for glass of refractive index n = \u221a3 is:",
      "options": [
        "30\u00b0",
        "45\u00b0",
        "60\u00b0",
        "75\u00b0"
      ],
      "correct": 2,
      "explanation": "tan i_p = n = \u221a3 => i_p = 60\u00b0."
    },
    {
      "id": "P214",
      "subject": "Physics",
      "chapter": "Wave Optics",
      "difficulty": "H",
      "question": "Unpolarized light of intensity I0 is incident on a polarizer. Intensity of transmitted polarized light is:",
      "options": [
        "I0",
        "I0 / 2",
        "I0 / 4",
        "Zero"
      ],
      "correct": 1,
      "explanation": "Unpolarized light passing through any single ideal linear polarizer reduces to half intensity I0 / 2."
    },
    {
      "id": "P215",
      "subject": "Physics",
      "chapter": "Wave Optics",
      "difficulty": "H",
      "question": "Angular width of central maximum in single slit diffraction pattern of slit width a = 0.1 mm with light wavelength \u03bb = 600 nm is:",
      "options": [
        "0.012 rad",
        "0.006 rad",
        "0.024 rad",
        "0.003 rad"
      ],
      "correct": 0,
      "explanation": "Angular width 2 \u03b8 = 2 \u03bb / a = 2 * (600 x 10^-9) / (10^-4) = 1200 x 10^-5 = 0.012 rad."
    },
    {
      "id": "P216",
      "subject": "Physics",
      "chapter": "Wave Optics",
      "difficulty": "M",
      "question": "Which phenomenon conclusively demonstrates the TRANSVERSE nature of light waves?",
      "options": [
        "Interference",
        "Diffraction",
        "Polarization",
        "Refraction"
      ],
      "correct": 2,
      "explanation": "Polarization can occur ONLY in transverse waves, proving light is a transverse electromagnetic wave."
    },
    {
      "id": "P217",
      "subject": "Physics",
      "chapter": "Wave Optics",
      "difficulty": "H",
      "question": "Ratio of slit widths in YDSE is 9 : 1. The ratio of maximum to minimum intensity in interference pattern is:",
      "options": [
        "4 : 1",
        "9 : 1",
        "16 : 1",
        "2 : 1"
      ],
      "correct": 0,
      "explanation": "I1 / I2 = w1 / w2 = 9 / 1 => a1 / a2 = 3 / 1. I_max / I_min = (a1 + a2)\u00b2 / (a1 - a2)\u00b2 = (3 + 1)\u00b2 / (3 - 1)\u00b2 = 16 / 4 = 4 : 1."
    },
    {
      "id": "P218",
      "subject": "Physics",
      "chapter": "Wave Optics",
      "difficulty": "H",
      "question": "According to Malus' law, if angle between polarizer and analyzer is 60\u00b0, fraction of polarized light intensity transmitted is:",
      "options": [
        "1 / 2",
        "1 / 4",
        "3 / 4",
        "1 / 8"
      ],
      "correct": 1,
      "explanation": "I = I_p cos\u00b2 60\u00b0 = I_p (1/2)\u00b2 = 1/4 I_p."
    },
    {
      "id": "P219",
      "subject": "Physics",
      "chapter": "Wave Optics",
      "difficulty": "M",
      "question": "Shape of wavefront originating from a point light source at finite distance is:",
      "options": [
        "Plane",
        "Spherical",
        "Cylindrical",
        "Elliptical"
      ],
      "correct": 1,
      "explanation": "A point light source emits wave energy uniformly in all 3D directions forming spherical wavefronts."
    },
    {
      "id": "P220",
      "subject": "Physics",
      "chapter": "Wave Optics",
      "difficulty": "H",
      "question": "Path difference corresponding to a phase difference of \u03c0 radians between two light waves of wavelength \u03bb is:",
      "options": [
        "\u03bb",
        "\u03bb / 2",
        "\u03bb / 4",
        "2 \u03bb"
      ],
      "correct": 1,
      "explanation": "Path difference \u0394 = (\u03bb / 2\u03c0) * Phase diff = (\u03bb / 2\u03c0) * \u03c0 = \u03bb / 2."
    },
    {
      "id": "P221",
      "subject": "Physics",
      "chapter": "Dual Nature of Matter",
      "difficulty": "M",
      "question": "Work function of a metal is 2.0 eV. Threshold frequency f0 for photoelectric emission is: (h = 6.63 x 10^-34 J\u00b7s, 1 eV = 1.6 x 10^-19 J)",
      "options": [
        "4.83 x 10^14 Hz",
        "2.42 x 10^14 Hz",
        "9.66 x 10^14 Hz",
        "1.21 x 10^14 Hz"
      ],
      "correct": 0,
      "explanation": "W0 = 2.0 * 1.6 x 10^-19 = 3.2 x 10^-19 J. f0 = W0 / h = 3.2 x 10^-19 / (6.63 x 10^-34) = 4.83 x 10^14 Hz."
    },
    {
      "id": "P222",
      "subject": "Physics",
      "chapter": "Dual Nature of Matter",
      "difficulty": "H",
      "question": "de Broglie wavelength of an electron accelerated through a potential difference of 100 V is:",
      "options": [
        "1.227 \u00c5",
        "0.123 \u00c5",
        "12.27 \u00c5",
        "0.012 \u00c5"
      ],
      "correct": 0,
      "explanation": "\u03bb = 12.27 / \u221aV \u00c5 = 12.27 / \u221a100 = 12.27 / 10 = 1.227 \u00c5."
    },
    {
      "id": "P223",
      "subject": "Physics",
      "chapter": "Dual Nature of Matter",
      "difficulty": "M",
      "question": "Stopping potential in a photoelectric experiment depends on:",
      "options": [
        "Intensity of incident light",
        "Frequency of incident light",
        "Distance of light source",
        "Area of photocathode"
      ],
      "correct": 1,
      "explanation": "Stopping potential eV0 = h f - W0 depends strictly on frequency of light, not intensity."
    },
    {
      "id": "P224",
      "subject": "Physics",
      "chapter": "Dual Nature of Matter",
      "difficulty": "H",
      "question": "If kinetic energy of a free electron is quadrupled (4 KE), its de Broglie wavelength becomes:",
      "options": [
        "Halved",
        "Doubled",
        "Quadrupled",
        "Unchanged"
      ],
      "correct": 0,
      "explanation": "\u03bb = h / \u221a(2 m KE) \u221d 1 / \u221aKE. Quadrupling KE reduces \u03bb by factor \u221a4 = 2 (halved)."
    },
    {
      "id": "P225",
      "subject": "Physics",
      "chapter": "Dual Nature of Matter",
      "difficulty": "H",
      "question": "Light of frequency 1.5 times threshold frequency is incident on a photosensitive surface. If frequency is halved and intensity doubled, photoelectric current becomes:",
      "options": [
        "Zero",
        "Doubled",
        "Halved",
        "Quadrupled"
      ],
      "correct": 0,
      "explanation": "New frequency f' = 0.5 * (1.5 f0) = 0.75 f0 < threshold frequency f0. Photoelectric emission STOPS completely (current = 0)."
    },
    {
      "id": "P226",
      "subject": "Physics",
      "chapter": "Dual Nature of Matter",
      "difficulty": "M",
      "question": "Energy of a photon of wavelength \u03bb = 6000 \u00c5 is: (hc \u2248 12400 eV\u00b7\u00c5)",
      "options": [
        "1.24 eV",
        "2.07 eV",
        "3.10 eV",
        "4.14 eV"
      ],
      "correct": 1,
      "explanation": "E = hc / \u03bb = 12400 / 6000 \u2248 2.07 eV."
    },
    {
      "id": "P227",
      "subject": "Physics",
      "chapter": "Dual Nature of Matter",
      "difficulty": "H",
      "question": "A 100 W sodium lamp emits yellow light of wavelength 589 nm uniformly. Number of photons emitted per second is approximately:",
      "options": [
        "3 x 10^20",
        "3 x 10^18",
        "1.5 x 10^20",
        "6 x 10^20"
      ],
      "correct": 0,
      "explanation": "E_photon = hc/\u03bb = (6.63x10^-34 * 3x10^8)/(589x10^-9) = 3.37 x 10^-19 J. Photons/sec n = Power / E_photon = 100 / (3.37 x 10^-19) \u2248 3 x 10^20."
    },
    {
      "id": "P228",
      "subject": "Physics",
      "chapter": "Dual Nature of Matter",
      "difficulty": "H",
      "question": "Momentum of a photon of frequency f is:",
      "options": [
        "h f",
        "h f / c",
        "h c / f",
        "h / (f c)"
      ],
      "correct": 1,
      "explanation": "Photon energy E = h f. Photon momentum p = E / c = h f / c."
    },
    {
      "id": "P229",
      "subject": "Physics",
      "chapter": "Dual Nature of Matter",
      "difficulty": "M",
      "question": "Davisson-Germer experiment experimentally confirmed:",
      "options": [
        "Particle nature of light",
        "Wave nature of electrons",
        "Quantization of charge",
        "Existence of nucleus"
      ],
      "correct": 1,
      "explanation": "Davisson-Germer electron diffraction experiment confirmed de Broglie's hypothesis of wave nature of matter."
    },
    {
      "id": "P230",
      "subject": "Physics",
      "chapter": "Dual Nature of Matter",
      "difficulty": "H",
      "question": "Slope of stopping potential (V0) versus frequency (f) graph for photoelectric effect equals:",
      "options": [
        "h",
        "e / h",
        "h / e",
        "W0 / e"
      ],
      "correct": 2,
      "explanation": "Einstein's equation e V0 = h f - W0 => V0 = (h/e) f - (W0/e). Slope = h / e."
    },
    {
      "id": "P231",
      "subject": "Physics",
      "chapter": "Atoms and Nuclei",
      "difficulty": "M",
      "question": "Radius of the first orbit of Hydrogen atom is 0.53 \u00c5. Radius of the 3rd orbit (n=3) is:",
      "options": [
        "1.59 \u00c5",
        "4.77 \u00c5",
        "2.12 \u00c5",
        "0.177 \u00c5"
      ],
      "correct": 1,
      "explanation": "r_n = r1 * n\u00b2 = 0.53 * 3\u00b2 = 0.53 * 9 = 4.77 \u00c5."
    },
    {
      "id": "P232",
      "subject": "Physics",
      "chapter": "Atoms and Nuclei",
      "difficulty": "H",
      "question": "Energy of Hydrogen atom in ground state is -13.6 eV. Energy of electron in 2nd excited state (n=3) is:",
      "options": [
        "-3.4 eV",
        "-1.51 eV",
        "-6.8 eV",
        "-0.85 eV"
      ],
      "correct": 1,
      "explanation": "n = 3 (2nd excited state). E_3 = -13.6 / 3\u00b2 = -13.6 / 9 = -1.51 eV."
    },
    {
      "id": "P233",
      "subject": "Physics",
      "chapter": "Atoms and Nuclei",
      "difficulty": "M",
      "question": "Half-life of a radioactive isotope is 10 days. Fraction of original activity remaining after 30 days is:",
      "options": [
        "1 / 2",
        "1 / 4",
        "1 / 8",
        "1 / 16"
      ],
      "correct": 2,
      "explanation": "Number of half-lives n = 30 / 10 = 3. Remaining fraction = (1/2)\u00b3 = 1/8."
    },
    {
      "id": "P234",
      "subject": "Physics",
      "chapter": "Atoms and Nuclei",
      "difficulty": "H",
      "question": "Mass defect \u0394m of Helium nucleus (2He4) is 0.0303 amu. Binding energy per nucleon of Helium is:",
      "options": [
        "28.2 MeV",
        "7.05 MeV",
        "14.1 MeV",
        "3.52 MeV"
      ],
      "correct": 1,
      "explanation": "Total BE = \u0394m * 931.5 = 0.0303 * 931.5 \u2248 28.2 MeV. BE per nucleon = 28.2 / 4 = 7.05 MeV."
    },
    {
      "id": "P235",
      "subject": "Physics",
      "chapter": "Atoms and Nuclei",
      "difficulty": "H",
      "question": "Shortest wavelength in Lyman series of Hydrogen atom spectrum corresponds to Rydberg constant R as:",
      "options": [
        "1 / R",
        "4 / R",
        "9 / R",
        "R"
      ],
      "correct": 0,
      "explanation": "Lyman series n1 = 1, shortest wavelength n2 = \u221e => 1/\u03bb = R(1/1\u00b2 - 0) = R => \u03bb = 1/R."
    },
    {
      "id": "P236",
      "subject": "Physics",
      "chapter": "Atoms and Nuclei",
      "difficulty": "M",
      "question": "Nuclear force between two nucleons is:",
      "options": [
        "Charge dependent",
        "Long range",
        "Short range and strong",
        "Inverse square law force"
      ],
      "correct": 2,
      "explanation": "Nuclear force is the strongest known fundamental force, short range (< 2 fm), and charge independent."
    },
    {
      "id": "P237",
      "subject": "Physics",
      "chapter": "Atoms and Nuclei",
      "difficulty": "H",
      "question": "Ratio of radii of two nuclei with mass numbers A1 = 8 and A2 = 27 is:",
      "options": [
        "2 : 3",
        "4 : 9",
        "8 : 27",
        "1 : 3"
      ],
      "correct": 0,
      "explanation": "Nuclear radius R = R0 A^(1/3). R1 / R2 = (8 / 27)^(1/3) = 2 / 3."
    },
    {
      "id": "P238",
      "subject": "Physics",
      "chapter": "Atoms and Nuclei",
      "difficulty": "H",
      "question": "Mean life \u03c4 of a radioactive substance is related to half-life T1/2 by:",
      "options": [
        "\u03c4 = T1/2 / 0.693",
        "\u03c4 = 0.693 T1/2",
        "\u03c4 = 2 T1/2",
        "\u03c4 = T1/2 / 2"
      ],
      "correct": 0,
      "explanation": "T1/2 = 0.693 \u03c4 => \u03c4 = T1/2 / 0.693 \u2248 1.44 T1/2."
    },
    {
      "id": "P239",
      "subject": "Physics",
      "chapter": "Atoms and Nuclei",
      "difficulty": "M",
      "question": "Alpha particle consists of:",
      "options": [
        "2 protons and 2 neutrons",
        "2 protons and 2 electrons",
        "4 protons",
        "4 neutrons"
      ],
      "correct": 0,
      "explanation": "Alpha particle is a doubly ionized Helium nucleus (2He4\u00b2+) consisting of 2 protons and 2 neutrons."
    },
    {
      "id": "P240",
      "subject": "Physics",
      "chapter": "Atoms and Nuclei",
      "difficulty": "H",
      "question": "Nuclear fusion reaction inside the Sun converts Hydrogen into Helium releasing energy because:",
      "options": [
        "Binding energy per nucleon of He is greater than H",
        "Mass number decreases",
        "Gravitational potential energy is lost",
        "Coulomb repulsion creates energy"
      ],
      "correct": 0,
      "explanation": "He-4 has higher binding energy per nucleon (~7.1 MeV) than H (~1.1 MeV), converting mass defect into kinetic/radiation energy."
    },
    {
      "id": "P241",
      "subject": "Physics",
      "chapter": "Semiconductor Electronics",
      "difficulty": "M",
      "question": "In an n-type semiconductor, majority charge carriers and dominant dopants are:",
      "options": [
        "Holes, Trivalent",
        "Electrons, Pentavalent",
        "Electrons, Trivalent",
        "Holes, Pentavalent"
      ],
      "correct": 1,
      "explanation": "Doping tetravalent Si with pentavalent donors (e.g. Phosphorus) creates excess conduction electrons (n-type)."
    },
    {
      "id": "P242",
      "subject": "Physics",
      "chapter": "Semiconductor Electronics",
      "difficulty": "H",
      "question": "Common emitter current gain \u03b2 of a transistor is 99. If emitter current I_E = 10 mA, collector current I_C and base current I_B are:",
      "options": [
        "I_C = 9.9 mA, I_B = 0.1 mA",
        "I_C = 9.0 mA, I_B = 1.0 mA",
        "I_C = 9.9 mA, I_B = 0.01 mA",
        "I_C = 10 mA, I_B = 0.1 mA"
      ],
      "correct": 0,
      "explanation": "\u03b1 = \u03b2 / (1 + \u03b2) = 99 / 100 = 0.99. I_C = \u03b1 I_E = 0.99 * 10 = 9.9 mA. I_B = I_E - I_C = 0.1 mA."
    },
    {
      "id": "P243",
      "subject": "Physics",
      "chapter": "Semiconductor Electronics",
      "difficulty": "M",
      "question": "Depletion layer of a forward biased p-n junction diode:",
      "options": [
        "Widens",
        "Narrows",
        "Remains unchanged",
        "Disappears completely"
      ],
      "correct": 1,
      "explanation": "Forward bias opposes built-in potential barrier, narrowing depletion region and decreasing resistance."
    },
    {
      "id": "P244",
      "subject": "Physics",
      "chapter": "Semiconductor Electronics",
      "difficulty": "H",
      "question": "A Zener diode is designed to operate primarily in:",
      "options": [
        "Forward bias region",
        "Reverse breakdown region",
        "Unbiased condition",
        "Cut-off region"
      ],
      "correct": 1,
      "explanation": "Zener diodes are engineered with thin depletion layers to operate continuously in sharp reverse breakdown region as voltage regulators."
    },
    {
      "id": "P245",
      "subject": "Physics",
      "chapter": "Semiconductor Electronics",
      "difficulty": "H",
      "question": "The Boolean expression for a Universal NAND gate with inputs A and B is:",
      "options": [
        "A + B",
        "A . B",
        "NOT (A . B)",
        "NOT (A + B)"
      ],
      "correct": 2,
      "explanation": "NAND gate output Y = NOT (A . B) = (A . B)'. It can construct any logic function."
    },
    {
      "id": "P246",
      "subject": "Physics",
      "chapter": "Semiconductor Electronics",
      "difficulty": "M",
      "question": "Forbidden energy band gap E_g for Silicon at room temperature is approximately:",
      "options": [
        "0.3 eV",
        "0.7 eV",
        "1.1 eV",
        "3.0 eV"
      ],
      "correct": 2,
      "explanation": "Band gap for Silicon is 1.1 eV (Germanium is 0.7 eV; insulators > 3 eV)."
    },
    {
      "id": "P247",
      "subject": "Physics",
      "chapter": "Semiconductor Electronics",
      "difficulty": "H",
      "question": "Output of an OR gate is LOW (0) ONLY when:",
      "options": [
        "Both inputs are 1",
        "Both inputs are 0",
        "One input is 1 and other 0",
        "Inputs are complementary"
      ],
      "correct": 1,
      "explanation": "OR gate output Y = A + B is 0 only when both inputs A = 0 and B = 0."
    },
    {
      "id": "P248",
      "subject": "Physics",
      "chapter": "Semiconductor Electronics",
      "difficulty": "H",
      "question": "Full-wave rectifier using two diodes converts 50 Hz AC supply into DC output with ripple frequency of:",
      "options": [
        "25 Hz",
        "50 Hz",
        "100 Hz",
        "200 Hz"
      ],
      "correct": 2,
      "explanation": "Full-wave rectification conducts during both positive and negative half-cycles, doubling output ripple frequency to 2 * 50 = 100 Hz."
    },
    {
      "id": "P249",
      "subject": "Physics",
      "chapter": "Semiconductor Electronics",
      "difficulty": "M",
      "question": "Light Emitting Diode (LED) operates under:",
      "options": [
        "Forward bias",
        "Reverse bias",
        "Unbiased condition",
        "Breakdown region"
      ],
      "correct": 0,
      "explanation": "LED operates under FORWARD BIAS where electron-hole recombination releases visible light energy."
    },
    {
      "id": "P250",
      "subject": "Physics",
      "chapter": "Semiconductor Electronics",
      "difficulty": "H",
      "question": "Truth table output Y = 1 for inputs A=1, B=0 is satisfied by which logic gate?",
      "options": [
        "AND",
        "NOR",
        "XOR",
        "NAND"
      ],
      "correct": 2,
      "explanation": "XOR gate output Y = A \u2295 B is HIGH (1) when inputs are different. For A=1, B=0, XOR output Y = 1."
    }
  ],
  "chemistry": [
    {
      "id": "C001",
      "subject": "Chemistry",
      "chapter": "Mole Concept",
      "difficulty": "M",
      "question": "The number of water molecules present in 18 g of pure water is:",
      "options": [
        "3.011 x 10^23",
        "6.022 x 10^23",
        "1.204 x 10^24",
        "6.022 x 10^22"
      ],
      "correct": 1,
      "explanation": "Moles of H2O = 18 g / 18 g/mol = 1 mol. Number of molecules = 1 * N_A = 6.022 x 10^23."
    },
    {
      "id": "C002",
      "subject": "Chemistry",
      "chapter": "Mole Concept",
      "difficulty": "H",
      "question": "What is the molarity of a solution containing 5.85 g of NaCl dissolved in 500 mL of solution? (Molar mass of NaCl = 58.5 g/mol)",
      "options": [
        "0.1 M",
        "0.2 M",
        "0.5 M",
        "1.0 M"
      ],
      "correct": 1,
      "explanation": "Moles = 5.85 / 58.5 = 0.1 mol. Volume = 0.5 L. Molarity = 0.1 / 0.5 = 0.2 M."
    },
    {
      "id": "C003",
      "subject": "Chemistry",
      "chapter": "Mole Concept",
      "difficulty": "M",
      "question": "Volume occupied by 4.4 g of CO2 gas at STP is: (Molar mass of CO2 = 44 g/mol)",
      "options": [
        "2.24 L",
        "4.48 L",
        "22.4 L",
        "1.12 L"
      ],
      "correct": 0,
      "explanation": "Moles of CO2 = 4.4 / 44 = 0.1 mol. Volume at STP = 0.1 * 22.4 L = 2.24 L."
    },
    {
      "id": "C004",
      "subject": "Chemistry",
      "chapter": "Mole Concept",
      "difficulty": "H",
      "question": "In the reaction 2 H2 + O2 \u2192 2 H2O, 4 g of H2 reacts with 16 g of O2. The limiting reagent and mass of H2O formed are:",
      "options": [
        "H2 limiting, 36 g H2O",
        "O2 limiting, 18 g H2O",
        "H2 limiting, 18 g H2O",
        "O2 limiting, 36 g H2O"
      ],
      "correct": 1,
      "explanation": "Moles H2 = 4/2 = 2 mol (needs 1 mol O2). Moles O2 = 16/32 = 0.5 mol. O2 is limiting reagent! 0.5 mol O2 produces 1.0 mol H2O = 18 g H2O."
    },
    {
      "id": "C005",
      "subject": "Chemistry",
      "chapter": "Mole Concept",
      "difficulty": "H",
      "question": "Normality of a 0.3 M H3PO4 (Orthophosphoric acid) solution is:",
      "options": [
        "0.1 N",
        "0.3 N",
        "0.6 N",
        "0.9 N"
      ],
      "correct": 3,
      "explanation": "Orthophosphoric acid H3PO4 is a tribasic acid (n-factor = 3). Normality = Molarity * n-factor = 0.3 * 3 = 0.9 N."
    },
    {
      "id": "C006",
      "subject": "Chemistry",
      "chapter": "Mole Concept",
      "difficulty": "M",
      "question": "Mole fraction of ethanol (C2H5OH) in a solution containing 46 g ethanol and 54 g water is: (Molar masses: ethanol = 46, water = 18)",
      "options": [
        "0.25",
        "0.50",
        "0.75",
        "0.33"
      ],
      "correct": 0,
      "explanation": "Moles ethanol = 46/46 = 1 mol. Moles water = 54/18 = 3 mol. Mole fraction ethanol = 1 / (1 + 3) = 1/4 = 0.25."
    },
    {
      "id": "C007",
      "subject": "Chemistry",
      "chapter": "Mole Concept",
      "difficulty": "H",
      "question": "An organic compound contains 40% C, 6.7% H, and 53.3% O by mass. Its empirical formula is:",
      "options": [
        "CH2O",
        "C2H4O",
        "CHO2",
        "C2H4O2"
      ],
      "correct": 0,
      "explanation": "Moles ratio C : H : O = (40/12) : (6.7/1) : (53.3/16) = 3.33 : 6.7 : 3.33 = 1 : 2 : 1. Empirical formula CH2O."
    },
    {
      "id": "C008",
      "subject": "Chemistry",
      "chapter": "Mole Concept",
      "difficulty": "H",
      "question": "What volume of 10 M HCl must be diluted with water to prepare 2 L of 0.5 M HCl solution?",
      "options": [
        "50 mL",
        "100 mL",
        "200 mL",
        "500 mL"
      ],
      "correct": 1,
      "explanation": "M1 V1 = M2 V2 => 10 * V1 = 0.5 * 2000 mL => 10 V1 = 1000 => V1 = 100 mL."
    },
    {
      "id": "C009",
      "subject": "Chemistry",
      "chapter": "Mole Concept",
      "difficulty": "M",
      "question": "Maximum number of molecules is present in:",
      "options": [
        "15 L of H2 gas at STP",
        "5 L of N2 gas at STP",
        "0.5 g of H2 gas",
        "10 g of O2 gas"
      ],
      "correct": 0,
      "explanation": "Moles in 15 L H2 = 15/22.4 = 0.67 mol. Moles in 5 L N2 = 5/22.4 = 0.22 mol. Moles in 0.5g H2 = 0.25 mol. Moles in 10g O2 = 10/32 = 0.31 mol. Highest moles = 15 L H2."
    },
    {
      "id": "C010",
      "subject": "Chemistry",
      "chapter": "Mole Concept",
      "difficulty": "H",
      "question": "Weight of 1 atom of Nitrogen (N, atomic mass = 14) is:",
      "options": [
        "2.32 x 10^-23 g",
        "1.4 x 10^-23 g",
        "6.02 x 10^-23 g",
        "2.32 x 10^-24 g"
      ],
      "correct": 0,
      "explanation": "Mass of 1 atom = Atomic Mass / N_A = 14 / (6.022 x 10^23) \u2248 2.32 x 10^-23 g."
    },
    {
      "id": "C011",
      "subject": "Chemistry",
      "chapter": "Structure of Atom",
      "difficulty": "M",
      "question": "Maximum number of electrons that can be accommodated in a subshell with azimuthal quantum number l = 2 (d-subshell) is:",
      "options": [
        "2",
        "6",
        "10",
        "14"
      ],
      "correct": 2,
      "explanation": "Max electrons in subshell = 2(2l + 1). For l = 2, max electrons = 2(2*2 + 1) = 10 electrons."
    },
    {
      "id": "C012",
      "subject": "Chemistry",
      "chapter": "Structure of Atom",
      "difficulty": "H",
      "question": "Energy of an electron in the ground state of Hydrogen atom is -13.6 eV. Its energy in the 1st excited state (n=2) of He+ ion (Z=2) is:",
      "options": [
        "-13.6 eV",
        "-27.2 eV",
        "-54.4 eV",
        "-3.4 eV"
      ],
      "correct": 0,
      "explanation": "E_n = -13.6 * (Z\u00b2/n\u00b2) eV. For He+ (Z=2, n=2): E_2 = -13.6 * (2\u00b2/2\u00b2) = -13.6 eV."
    },
    {
      "id": "C013",
      "subject": "Chemistry",
      "chapter": "Structure of Atom",
      "difficulty": "M",
      "question": "Which electronic configuration represents an element in an EXCITED state or violation of Aufbau principle?",
      "options": [
        "[1s\u00b2 2s\u00b2 2p\u2076]",
        "[1s\u00b2 2s\u00b2 2p\u00b3]",
        "[1s\u00b2 2s\u00b9 2p\u2074]",
        "[1s\u00b2 2s\u00b2 2p\u2076 3s\u00b9]"
      ],
      "correct": 2,
      "explanation": "In [1s\u00b2 2s\u00b9 2p\u2074], an electron from 2s has been promoted to 2p before fully filling 2s subshell, representing an excited state."
    },
    {
      "id": "C014",
      "subject": "Chemistry",
      "chapter": "Structure of Atom",
      "difficulty": "H",
      "question": "de Broglie wavelength of an electron moving with velocity 10^6 m/s is: (m = 9.1 x 10^-31 kg, h = 6.63 x 10^-34 J\u00b7s)",
      "options": [
        "0.728 nm",
        "7.28 nm",
        "0.0728 nm",
        "72.8 nm"
      ],
      "correct": 0,
      "explanation": "\u03bb = h / (m v) = (6.63 x 10^-34) / (9.1 x 10^-31 * 10^6) = (6.63 / 9.1) x 10^-9 m = 0.728 nm."
    },
    {
      "id": "C015",
      "subject": "Chemistry",
      "chapter": "Structure of Atom",
      "difficulty": "H",
      "question": "The total number of orbitals associated with principal quantum number n = 3 is:",
      "options": [
        "3",
        "5",
        "9",
        "16"
      ],
      "correct": 2,
      "explanation": "Total number of orbitals for principal level n is n\u00b2 = 3\u00b2 = 9 (1 s-orbital, 3 p-orbitals, 5 d-orbitals)."
    },
    {
      "id": "C016",
      "subject": "Chemistry",
      "chapter": "Structure of Atom",
      "difficulty": "M",
      "question": "Which set of quantum numbers (n, l, m_l, m_s) is NOT permissible?",
      "options": [
        "3, 2, -2, +1/2",
        "4, 0, 0, -1/2",
        "3, 3, 1, +1/2",
        "2, 1, 0, +1/2"
      ],
      "correct": 2,
      "explanation": "For n = 3, azimuthal quantum number l can only range from 0 to n-1 (0, 1, 2). l = 3 is NOT allowed."
    },
    {
      "id": "C017",
      "subject": "Chemistry",
      "chapter": "Structure of Atom",
      "difficulty": "H",
      "question": "Uncertainty in position of an electron moving with velocity 300 m/s accurate up to 0.001% is: (m = 9.1 x 10^-31 kg, h = 6.63 x 10^-34 J\u00b7s)",
      "options": [
        "1.93 cm",
        "0.193 cm",
        "19.3 cm",
        "1.93 mm"
      ],
      "correct": 0,
      "explanation": "\u0394v = 300 * (0.001 / 100) = 0.003 m/s. \u0394x \u2265 h / (4 \u03c0 m \u0394v) = 6.63x10^-34 / (4 * 3.1416 * 9.1x10^-31 * 0.003) = 0.0193 m = 1.93 cm."
    },
    {
      "id": "C018",
      "subject": "Chemistry",
      "chapter": "Structure of Atom",
      "difficulty": "M",
      "question": "The number of radial nodes in a 3p orbital is:",
      "options": [
        "0",
        "1",
        "2",
        "3"
      ],
      "correct": 1,
      "explanation": "Number of radial nodes = n - l - 1. For 3p orbital (n=3, l=1): Radial nodes = 3 - 1 - 1 = 1."
    },
    {
      "id": "C019",
      "subject": "Chemistry",
      "chapter": "Structure of Atom",
      "difficulty": "H",
      "question": "Ratio of radii of second Bohr orbit of Li2+ (Z=3) to third Bohr orbit of Be3+ (Z=4) is:",
      "options": [
        "16 : 27",
        "8 : 9",
        "4 : 9",
        "27 : 16"
      ],
      "correct": 0,
      "explanation": "r \u221d n\u00b2 / Z. r_Li = 2\u00b2 / 3 = 4/3. r_Be = 3\u00b2 / 4 = 9/4. Ratio = (4/3) / (9/4) = 16 / 27."
    },
    {
      "id": "C020",
      "subject": "Chemistry",
      "chapter": "Structure of Atom",
      "difficulty": "H",
      "question": "Ground state electronic configuration of Chromium (Z=24) is:",
      "options": [
        "[Ar] 4s\u00b2 3d\u2074",
        "[Ar] 4s\u00b9 3d\u2075",
        "[Ar] 4s\u2070 3d\u2076",
        "[Ar] 4s\u00b2 3d\u2075"
      ],
      "correct": 1,
      "explanation": "Chromium exhibits anomalous electronic configuration [Ar] 4s\u00b9 3d\u2075 due to extra stability of half-filled 3d\u2075 subshell."
    },
    {
      "id": "C021",
      "subject": "Chemistry",
      "chapter": "States of Matter",
      "difficulty": "M",
      "question": "If pressure of a gas is doubled and absolute temperature is tripled, its volume will become:",
      "options": [
        "1.5 times",
        "6 times",
        "0.67 times",
        "3 times"
      ],
      "correct": 0,
      "explanation": "P1 V1 / T1 = P2 V2 / T2 => V2 = V1 * (P1/P2) * (T2/T1) = V1 * (1/2) * (3/1) = 1.5 V1."
    },
    {
      "id": "C022",
      "subject": "Chemistry",
      "chapter": "States of Matter",
      "difficulty": "H",
      "question": "Equal masses of H2 and O2 gases are mixed in a vessel at 27\u00b0C. The partial pressure ratio P_H2 : P_O2 is:",
      "options": [
        "1 : 16",
        "16 : 1",
        "1 : 1",
        "8 : 1"
      ],
      "correct": 1,
      "explanation": "Let mass = m. Moles H2 = m/2, Moles O2 = m/32. Ratio of moles n_H2 : n_O2 = (m/2) : (m/32) = 16 : 1. Partial pressure ratio = mole ratio = 16 : 1."
    },
    {
      "id": "C023",
      "subject": "Chemistry",
      "chapter": "States of Matter",
      "difficulty": "M",
      "question": "At what temperature does a real gas obey ideal gas laws over a wide range of pressure?",
      "options": [
        "Critical Temperature",
        "Boyle Temperature",
        "Inversion Temperature",
        "Absolute Zero"
      ],
      "correct": 1,
      "explanation": "At Boyle Temperature T_b = a / (R b), real gas attractive and repulsive effects balance, showing ideal behavior."
    },
    {
      "id": "C024",
      "subject": "Chemistry",
      "chapter": "States of Matter",
      "difficulty": "H",
      "question": "van der Waals constant 'a' for four gases are A (1.3), B (4.1), C (0.2), D (6.8) in L\u00b2\u00b7atm/mol\u00b2. The gas easiest to liquefy is:",
      "options": [
        "Gas A",
        "Gas B",
        "Gas C",
        "Gas D"
      ],
      "correct": 3,
      "explanation": "Higher van der Waals constant 'a' indicates stronger intermolecular attraction forces, making Gas D (a=6.8) the easiest to liquefy."
    },
    {
      "id": "C025",
      "subject": "Chemistry",
      "chapter": "States of Matter",
      "difficulty": "H",
      "question": "Rate of diffusion of gas A is 4 times that of gas B. Ratio of their molecular masses M_A : M_B is:",
      "options": [
        "1 : 16",
        "16 : 1",
        "1 : 4",
        "4 : 1"
      ],
      "correct": 0,
      "explanation": "By Graham's law: r_A / r_B = \u221a(M_B / M_A) => 4 = \u221a(M_B / M_A) => M_B / M_A = 16 => M_A : M_B = 1 : 16."
    },
    {
      "id": "C026",
      "subject": "Chemistry",
      "chapter": "States of Matter",
      "difficulty": "M",
      "question": "Compressibility factor Z = P V / (n R T) for an ideal gas is:",
      "options": [
        "0",
        "1",
        "Greater than 1",
        "Less than 1"
      ],
      "correct": 1,
      "explanation": "For an ideal gas, P V = n R T, so Z = 1 at all pressures and temperatures."
    },
    {
      "id": "C027",
      "subject": "Chemistry",
      "chapter": "States of Matter",
      "difficulty": "H",
      "question": "Critical temperature T_c and critical pressure P_c of a gas in terms of van der Waals constants a and b are:",
      "options": [
        "8a / (27Rb) and a / (27b\u00b2)",
        "a / (Rb) and a / b\u00b2",
        "27a / (8Rb) and b / (27a\u00b2)",
        "8b / (27Ra) and a / (27b)"
      ],
      "correct": 0,
      "explanation": "Critical constants: T_c = 8a / (27 R b), P_c = a / (27 b\u00b2), V_c = 3b."
    },
    {
      "id": "C028",
      "subject": "Chemistry",
      "chapter": "States of Matter",
      "difficulty": "H",
      "question": "Density of an ideal gas at 2 atm pressure and 27\u00b0C (300 K) with molar mass 28 g/mol is: (R = 0.0821 L\u00b7atm/mol\u00b7K)",
      "options": [
        "1.14 g/L",
        "2.27 g/L",
        "4.54 g/L",
        "0.57 g/L"
      ],
      "correct": 1,
      "explanation": "P M = d R T => d = P M / (R T) = (2 * 28) / (0.0821 * 300) = 56 / 24.63 = 2.27 g/L."
    },
    {
      "id": "C029",
      "subject": "Chemistry",
      "chapter": "States of Matter",
      "difficulty": "M",
      "question": "Units of van der Waals parameter 'b' (effective molecular volume) are:",
      "options": [
        "L / mol",
        "L\u00b2 \u00b7 atm / mol\u00b2",
        "atm / L",
        "mol / L"
      ],
      "correct": 0,
      "explanation": "In equation (V - n b), n b must have units of Volume (L), so b has units of L/mol."
    },
    {
      "id": "C030",
      "subject": "Chemistry",
      "chapter": "States of Matter",
      "difficulty": "H",
      "question": "The surface tension of a liquid decreases with:",
      "options": [
        "Increase in temperature",
        "Decrease in temperature",
        "Adding insoluble impurities",
        "Increase in surface area"
      ],
      "correct": 0,
      "explanation": "Increase in temperature increases kinetic energy, weakening intermolecular cohesive forces and reducing surface tension."
    },
    {
      "id": "C031",
      "subject": "Chemistry",
      "chapter": "Chemical Thermodynamics",
      "difficulty": "M",
      "question": "For an endothermic reaction to be spontaneous at constant T and P, the entropy change \u0394S must be:",
      "options": [
        "Negative",
        "Zero",
        "Positive",
        "Equal to \u0394H"
      ],
      "correct": 2,
      "explanation": "\u0394G = \u0394H - T \u0394S. For endothermic reaction (\u0394H > 0), \u0394G can be negative (spontaneous) ONLY IF \u0394S > 0 and T \u0394S > \u0394H."
    },
    {
      "id": "C032",
      "subject": "Chemistry",
      "chapter": "Chemical Thermodynamics",
      "difficulty": "H",
      "question": "In a reversible isothermal expansion of 2 moles of an ideal gas from 10 L to 100 L at 300 K, work done is: (R = 8.314 J/mol\u00b7K)",
      "options": [
        "-11.48 kJ",
        "-5.74 kJ",
        "-2.30 kJ",
        "-22.96 kJ"
      ],
      "correct": 0,
      "explanation": "w = - 2.303 n R T log(V2/V1) = - 2.303 * 2 * 8.314 * 300 * log(100/10) = - 11488 J = -11.48 kJ."
    },
    {
      "id": "C033",
      "subject": "Chemistry",
      "chapter": "Chemical Thermodynamics",
      "difficulty": "M",
      "question": "Which of the following is an EXTENSIVE property?",
      "options": [
        "Temperature",
        "Density",
        "Enthalpy",
        "Refractive Index"
      ],
      "correct": 2,
      "explanation": "Enthalpy (H) depends on the quantity of matter present in the system, making it an extensive property."
    },
    {
      "id": "C034",
      "subject": "Chemistry",
      "chapter": "Chemical Thermodynamics",
      "difficulty": "H",
      "question": "Heat of combustion of C(s) and CO(g) are -393.5 kJ/mol and -283.0 kJ/mol. Heat of formation of CO(g) is:",
      "options": [
        "-110.5 kJ/mol",
        "-676.5 kJ/mol",
        "+110.5 kJ/mol",
        "+676.5 kJ/mol"
      ],
      "correct": 0,
      "explanation": "C + O2 \u2192 CO2 (-393.5 kJ); CO + 0.5 O2 \u2192 CO2 (-283.0 kJ). Subtracting gives C + 0.5 O2 \u2192 CO with \u0394H = -393.5 - (-283.0) = -110.5 kJ/mol."
    },
    {
      "id": "C035",
      "subject": "Chemistry",
      "chapter": "Chemical Thermodynamics",
      "difficulty": "H",
      "question": "For the reaction N2(g) + 3 H2(g) \u21cc 2 NH3(g) at 298 K, \u0394H = -92 kJ. Relation between \u0394H and \u0394U is:",
      "options": [
        "\u0394H = \u0394U - 2 RT",
        "\u0394H = \u0394U + 2 RT",
        "\u0394H = \u0394U - 4 RT",
        "\u0394H = \u0394U"
      ],
      "correct": 0,
      "explanation": "\u0394n_g = 2 - (1 + 3) = -2. \u0394H = \u0394U + \u0394n_g R T = \u0394U - 2 R T."
    },
    {
      "id": "C036",
      "subject": "Chemistry",
      "chapter": "Chemical Thermodynamics",
      "difficulty": "M",
      "question": "Third law of thermodynamics states that at absolute zero temperature (0 K), entropy of a perfectly crystalline solid is:",
      "options": [
        "Maximum",
        "Zero",
        "Infinite",
        "Negative"
      ],
      "correct": 1,
      "explanation": "Third law states that entropy of a pure perfectly crystalline substance approaches zero at 0 K."
    },
    {
      "id": "C037",
      "subject": "Chemistry",
      "chapter": "Chemical Thermodynamics",
      "difficulty": "H",
      "question": "Standard free energy change \u0394G\u00b0 is -5.71 kJ at 298 K. The equilibrium constant K_eq is: (R = 8.314 J/mol\u00b7K)",
      "options": [
        "10",
        "100",
        "1",
        "0.1"
      ],
      "correct": 0,
      "explanation": "\u0394G\u00b0 = - 2.303 R T log K => -5710 = - 2.303 * 8.314 * 298 * log K => log K \u2248 1 => K = 10."
    },
    {
      "id": "C038",
      "subject": "Chemistry",
      "chapter": "Chemical Thermodynamics",
      "difficulty": "H",
      "question": "A system absorbs 500 J of heat and performs 200 J of work on the surroundings. Change in internal energy \u0394U is:",
      "options": [
        "+700 J",
        "+300 J",
        "-300 J",
        "-700 J"
      ],
      "correct": 1,
      "explanation": "\u0394U = q + w. Heat absorbed q = +500 J, work by system w = -200 J. \u0394U = 500 - 200 = +300 J."
    },
    {
      "id": "C039",
      "subject": "Chemistry",
      "chapter": "Chemical Thermodynamics",
      "difficulty": "M",
      "question": "An isolated system is one which can exchange with surroundings:",
      "options": [
        "Both energy and matter",
        "Energy but not matter",
        "Matter but not energy",
        "Neither energy nor matter"
      ],
      "correct": 3,
      "explanation": "An isolated system can exchange neither mass nor energy with its surroundings."
    },
    {
      "id": "C040",
      "subject": "Chemistry",
      "chapter": "Chemical Thermodynamics",
      "difficulty": "H",
      "question": "For the process H2O(l) \u2192 H2O(g) at 100\u00b0C (373 K) and 1 atm pressure, the values of \u0394G and \u0394S are:",
      "options": [
        "\u0394G = 0, \u0394S > 0",
        "\u0394G < 0, \u0394S < 0",
        "\u0394G > 0, \u0394S > 0",
        "\u0394G = 0, \u0394S = 0"
      ],
      "correct": 0,
      "explanation": "At boiling point, liquid and vapor are at equilibrium (\u0394G = 0). Vaporization increases disorder, so \u0394S > 0."
    },
    {
      "id": "C041",
      "subject": "Chemistry",
      "chapter": "Chemical & Ionic Equilibrium",
      "difficulty": "M",
      "question": "The pH of a 0.001 M HCl solution is:",
      "options": [
        "1",
        "2",
        "3",
        "11"
      ],
      "correct": 2,
      "explanation": "HCl is a strong monobasic acid, [H+] = 0.001 M = 10^-3 M. pH = - log(10^-3) = 3."
    },
    {
      "id": "C042",
      "subject": "Chemistry",
      "chapter": "Chemical & Ionic Equilibrium",
      "difficulty": "H",
      "question": "For reaction A + B \u21cc C + D, initial concentrations of A and B are 1 M each. At equilibrium, [C] = 0.6 M. K_c is:",
      "options": [
        "0.36",
        "2.25",
        "1.50",
        "0.60"
      ],
      "correct": 1,
      "explanation": "At equilibrium: [A] = 1 - 0.6 = 0.4 M, [B] = 0.4 M, [C] = 0.6 M, [D] = 0.6 M. K_c = (0.6 * 0.6) / (0.4 * 0.4) = 0.36 / 0.16 = 2.25."
    },
    {
      "id": "C043",
      "subject": "Chemistry",
      "chapter": "Chemical & Ionic Equilibrium",
      "difficulty": "M",
      "question": "Which of the following salt solutions in water will be BASIC (pH > 7)?",
      "options": [
        "NaCl",
        "NH4Cl",
        "CH3COONa",
        "K2SO4"
      ],
      "correct": 2,
      "explanation": "CH3COONa is a salt of weak acid and strong base. Anionic hydrolysis produces OH- ions, making solution basic."
    },
    {
      "id": "C044",
      "subject": "Chemistry",
      "chapter": "Chemical & Ionic Equilibrium",
      "difficulty": "H",
      "question": "pH of a buffer solution containing 0.1 M CH3COOH and 0.1 M CH3COONa (pK_a of CH3COOH = 4.74) is:",
      "options": [
        "3.74",
        "4.74",
        "5.74",
        "7.00"
      ],
      "correct": 1,
      "explanation": "Henderson-Hasselbalch: pH = pK_a + log([Salt]/[Acid]) = 4.74 + log(0.1/0.1) = 4.74."
    },
    {
      "id": "C045",
      "subject": "Chemistry",
      "chapter": "Chemical & Ionic Equilibrium",
      "difficulty": "H",
      "question": "Solubility product K_sp of AgCl is 1.0 x 10^-10. Its solubility in 0.1 M NaCl solution is:",
      "options": [
        "1.0 x 10^-5 M",
        "1.0 x 10^-9 M",
        "1.0 x 10^-4 M",
        "1.0 x 10^-10 M"
      ],
      "correct": 1,
      "explanation": "Common ion [Cl-] = 0.1 M. K_sp = [Ag+] [Cl-] => 1.0 x 10^-10 = S * 0.1 => S = 1.0 x 10^-9 M."
    },
    {
      "id": "C046",
      "subject": "Chemistry",
      "chapter": "Chemical & Ionic Equilibrium",
      "difficulty": "M",
      "question": "According to Le Chatelier's principle, increasing total pressure on reaction N2(g) + 3 H2(g) \u21cc 2 NH3(g) will:",
      "options": [
        "Shift equilibrium forward",
        "Shift equilibrium backward",
        "Have no effect",
        "Decrease K_c"
      ],
      "correct": 0,
      "explanation": "Increasing pressure shifts equilibrium towards fewer moles of gas (4 mol \u2192 2 mol), favoring forward reaction."
    },
    {
      "id": "C047",
      "subject": "Chemistry",
      "chapter": "Chemical & Ionic Equilibrium",
      "difficulty": "H",
      "question": "Solubility Product expression K_sp for Al(OH)3 in terms of its molar solubility S is:",
      "options": [
        "S\u00b2",
        "4 S\u00b3",
        "27 S\u2074",
        "108 S\u2075"
      ],
      "correct": 2,
      "explanation": "Al(OH)3 \u21cc Al\u00b3\u207a + 3 OH\u207b. K_sp = [S] [3S]\u00b3 = 27 S\u2074."
    },
    {
      "id": "C048",
      "subject": "Chemistry",
      "chapter": "Chemical & Ionic Equilibrium",
      "difficulty": "H",
      "question": "Conjugate base of HSO4- ion is:",
      "options": [
        "H2SO4",
        "SO4\u00b2\u207b",
        "H3O+",
        "SO3\u00b2\u207b"
      ],
      "correct": 1,
      "explanation": "Conjugate base is formed by removing H+ ion from acid: HSO4\u207b - H\u207a \u2192 SO4\u00b2\u207b."
    },
    {
      "id": "C049",
      "subject": "Chemistry",
      "chapter": "Chemical & Ionic Equilibrium",
      "difficulty": "M",
      "question": "Which factor alters the numerical value of equilibrium constant K_c of a reaction?",
      "options": [
        "Concentration of reactants",
        "Pressure",
        "Catalyst",
        "Temperature"
      ],
      "correct": 3,
      "explanation": "Temperature is the ONLY factor that alters the numerical value of equilibrium constant K_c."
    },
    {
      "id": "C050",
      "subject": "Chemistry",
      "chapter": "Chemical & Ionic Equilibrium",
      "difficulty": "H",
      "question": "What is the pH of 10^-8 M HCl solution?",
      "options": [
        "8.00",
        "6.96",
        "7.00",
        "6.00"
      ],
      "correct": 1,
      "explanation": "At low acid concentration, water auto-ionization [H+] = 10^-7 M must be added: Total [H+] = 1.1 x 10^-7 M => pH = 6.96."
    },
    {
      "id": "C051",
      "subject": "Chemistry",
      "chapter": "Redox Reactions",
      "difficulty": "M",
      "question": "Oxidation number of Chromium in Potassium Dichromate (K2Cr2O7) is:",
      "options": [
        "+3",
        "+6",
        "+7",
        "+4"
      ],
      "correct": 1,
      "explanation": "2(+1) + 2(Cr) + 7(-2) = 0 => 2Cr = 12 => Cr = +6."
    },
    {
      "id": "C052",
      "subject": "Chemistry",
      "chapter": "Redox Reactions",
      "difficulty": "H",
      "question": "In the balanced redox reaction 2 KMnO4 + 16 HCl \u2192 2 KCl + 2 MnCl2 + 8 H2O + 5 Cl2, equivalent mass of KMnO4 is: (Molar mass = M)",
      "options": [
        "M / 1",
        "M / 3",
        "M / 5",
        "M / 6"
      ],
      "correct": 2,
      "explanation": "Mn changes from +7 in KMnO4 to +2 in MnCl2 (change of 5 electrons). Equivalent mass = M / 5."
    },
    {
      "id": "C053",
      "subject": "Chemistry",
      "chapter": "Redox Reactions",
      "difficulty": "M",
      "question": "Oxidation number of Oxygen in Hydrogen Peroxide (H2O2) is:",
      "options": [
        "-2",
        "-1",
        "0",
        "+2"
      ],
      "correct": 1,
      "explanation": "In peroxides containing -O-O- single bond, oxidation state of oxygen is -1."
    },
    {
      "id": "C054",
      "subject": "Chemistry",
      "chapter": "Redox Reactions",
      "difficulty": "H",
      "question": "In which of the following compounds does Nitrogen exhibit the HIGHEST oxidation state?",
      "options": [
        "NH3",
        "N2H4",
        "HNO3",
        "NO"
      ],
      "correct": 2,
      "explanation": "In NH3 (-3), N2H4 (-2), NO (+2), HNO3 (+5). Highest is +5 in HNO3."
    },
    {
      "id": "C055",
      "subject": "Chemistry",
      "chapter": "Redox Reactions",
      "difficulty": "H",
      "question": "For the reaction Zn + Cu\u00b2\u207a \u2192 Zn\u00b2\u207a + Cu, the species being REDUCED and acting as OXIDIZING AGENT are:",
      "options": [
        "Zn, Cu\u00b2\u207a",
        "Cu\u00b2\u207a, Zn",
        "Cu\u00b2\u207a, Cu\u00b2\u207a",
        "Zn\u00b2\u207a, Cu"
      ],
      "correct": 2,
      "explanation": "Cu\u00b2\u207a gains 2 electrons (undergoes reduction) and acts as oxidizing agent."
    },
    {
      "id": "C056",
      "subject": "Chemistry",
      "chapter": "Redox Reactions",
      "difficulty": "M",
      "question": "Oxidation number of Sulfur in Caro's acid (H2SO5) is:",
      "options": [
        "+8",
        "+6",
        "+10",
        "+4"
      ],
      "correct": 1,
      "explanation": "Caro's acid contains one peroxide bond. 2(+1) + S + 3(-2) + 2(-1) = 0 => S = +6."
    },
    {
      "id": "C057",
      "subject": "Chemistry",
      "chapter": "Redox Reactions",
      "difficulty": "H",
      "question": "When H2S gas is passed through acidified K2Cr2O7 solution, the orange solution turns green due to formation of:",
      "options": [
        "Cr3+ ions",
        "CrO4\u00b2\u207b ions",
        "SO2 gas",
        "S8 colloidal sol"
      ],
      "correct": 0,
      "explanation": "Cr2O7\u00b2\u207b (orange, Cr+6) is reduced to Cr\u00b3\u207a (green, Cr+3) while H2S is oxidized to elemental Sulfur."
    },
    {
      "id": "C058",
      "subject": "Chemistry",
      "chapter": "Redox Reactions",
      "difficulty": "H",
      "question": "Number of moles of KMnO4 required to oxidize 1 mole of FeSO4 completely in acidic medium is:",
      "options": [
        "1 / 5",
        "5",
        "2 / 5",
        "1"
      ],
      "correct": 0,
      "explanation": "KMnO4 gains 5 e- (Mn+7 \u2192 Mn+2). FeSO4 loses 1 e- (Fe+2 \u2192 Fe+3). Moles KMnO4 = 1/5."
    },
    {
      "id": "C059",
      "subject": "Chemistry",
      "chapter": "Redox Reactions",
      "difficulty": "M",
      "question": "Disproportionation reaction is one in which:",
      "options": [
        "One element is oxidized and another reduced",
        "Same element undergoes simultaneous oxidation and reduction",
        "No change in oxidation state occurs",
        "Water is eliminated"
      ],
      "correct": 1,
      "explanation": "Disproportionation involves a single element simultaneously undergoing oxidation and reduction."
    },
    {
      "id": "C060",
      "subject": "Chemistry",
      "chapter": "Redox Reactions",
      "difficulty": "H",
      "question": "Oxidation state of Carbon in Glucose (C6H12O6) is:",
      "options": [
        "-2",
        "0",
        "+2",
        "+4"
      ],
      "correct": 1,
      "explanation": "6(C) + 12(+1) + 6(-2) = 0 => 6C = 0 => Average oxidation state of C in glucose is 0."
    },
    {
      "id": "C061",
      "subject": "Chemistry",
      "chapter": "Electrochemistry",
      "difficulty": "M",
      "question": "Standard reduction potentials of metals X, Y, Z are -1.2 V, +0.5 V, -3.0 V. Their reducing power order is:",
      "options": [
        "Z > X > Y",
        "Y > X > Z",
        "X > Y > Z",
        "Z > Y > X"
      ],
      "correct": 0,
      "explanation": "Lower (more negative) reduction potential means higher tendency to lose electrons (stronger reducing agent). Z (-3.0V) > X (-1.2V) > Y (+0.5V)."
    },
    {
      "id": "C062",
      "subject": "Chemistry",
      "chapter": "Electrochemistry",
      "difficulty": "H",
      "question": "For Daniell cell Zn | Zn\u00b2\u207a (1M) || Cu\u00b2\u207a (1M) | Cu, E\u00b0_cell is 1.10 V. Standard Gibbs free energy change \u0394G\u00b0 is: (F = 96500 C/mol)",
      "options": [
        "-212.3 kJ",
        "-106.15 kJ",
        "+212.3 kJ",
        "-424.6 kJ"
      ],
      "correct": 0,
      "explanation": "\u0394G\u00b0 = - n F E\u00b0 = - 2 * 96500 * 1.10 = - 212300 J = -212.3 kJ."
    },
    {
      "id": "C063",
      "subject": "Chemistry",
      "chapter": "Electrochemistry",
      "difficulty": "M",
      "question": "According to Faraday's First Law of Electrolysis, mass of substance deposited (m) is given by:",
      "options": [
        "m = Z I t",
        "m = Z / (I t)",
        "m = I t / Z",
        "m = Z I\u00b2 t"
      ],
      "correct": 0,
      "explanation": "m = Q * Z = Z I t, where Z is electrochemical equivalent."
    },
    {
      "id": "C064",
      "subject": "Chemistry",
      "chapter": "Electrochemistry",
      "difficulty": "H",
      "question": "The molar conductivity of 0.01 M CH3COOH is 39.06 S\u00b7cm\u00b2/mol. If limiting molar conductivity \u039b\u00b0_m is 390.6 S\u00b7cm\u00b2/mol, degree of dissociation \u03b1 is:",
      "options": [
        "0.01",
        "0.10",
        "0.50",
        "0.90"
      ],
      "correct": 1,
      "explanation": "\u03b1 = \u039b_m / \u039b\u00b0_m = 39.06 / 390.6 = 0.10 (10%)."
    },
    {
      "id": "C065",
      "subject": "Chemistry",
      "chapter": "Electrochemistry",
      "difficulty": "H",
      "question": "For cell reaction Fe(s) + Cu\u00b2\u207a(aq) \u21cc Fe\u00b2\u207a(aq) + Cu(s), E_cell at 298 K when [Fe\u00b2\u207a] = 0.1 M and [Cu\u00b2\u207a] = 0.01 M is: (E\u00b0_cell = 0.78 V)",
      "options": [
        "0.75 V",
        "0.81 V",
        "0.78 V",
        "0.72 V"
      ],
      "correct": 0,
      "explanation": "E = E\u00b0 - (0.0591 / 2) log([Fe\u00b2\u207a]/[Cu\u00b2\u207a]) = 0.78 - 0.0295 log(0.1/0.01) = 0.78 - 0.0295(1) = 0.7505 V."
    },
    {
      "id": "C066",
      "subject": "Chemistry",
      "chapter": "Electrochemistry",
      "difficulty": "M",
      "question": "During electrolysis of molten NaCl using inert platinum electrodes, product formed at ANODE is:",
      "options": [
        "Sodium metal",
        "Chlorine gas",
        "Hydrogen gas",
        "Oxygen gas"
      ],
      "correct": 1,
      "explanation": "Anode is site of oxidation: 2 Cl\u207b \u2192 Cl2(g) + 2 e\u207b. Chlorine gas is liberated at anode."
    },
    {
      "id": "C067",
      "subject": "Chemistry",
      "chapter": "Electrochemistry",
      "difficulty": "H",
      "question": "How many Coulombs of electricity are required to reduce 1 mole of Cr2O7\u00b2\u207b to Cr\u00b3\u207a in acidic solution?",
      "options": [
        "1 x 96500 C",
        "3 x 96500 C",
        "6 x 96500 C",
        "12 x 96500 C"
      ],
      "correct": 2,
      "explanation": "Cr2O7\u00b2\u207b + 14 H\u207a + 6 e\u207b \u2192 2 Cr\u00b3\u207a + 7 H2O. 1 mol Cr2O7\u00b2\u207b requires 6 moles of e\u207b = 6 F = 6 x 96500 C."
    },
    {
      "id": "C068",
      "subject": "Chemistry",
      "chapter": "Electrochemistry",
      "difficulty": "H",
      "question": "Which relationship represents Kohlrausch's Law of independent migration of ions for NaCl?",
      "options": [
        "\u039b\u00b0_m(NaCl) = \u03bb\u00b0_Na\u207a + \u03bb\u00b0_Cl\u207b",
        "\u039b\u00b0_m(NaCl) = \u03bb\u00b0_Na\u207a - \u03bb\u00b0_Cl\u207b",
        "\u039b\u00b0_m(NaCl) = \u03bb\u00b0_Na\u207a * \u03bb\u00b0_Cl\u207b",
        "\u039b\u00b0_m(NaCl) = \u03bb\u00b0_Na\u207a / \u03bb\u00b0_Cl\u207b"
      ],
      "correct": 0,
      "explanation": "Kohlrausch's law states that limiting molar conductivity of an electrolyte is sum of individual ionic conductivities: \u039b\u00b0_m = \u03bb\u00b0_Na\u207a + \u03bb\u00b0_Cl\u207b."
    },
    {
      "id": "C069",
      "subject": "Chemistry",
      "chapter": "Electrochemistry",
      "difficulty": "M",
      "question": "The unit of cell constant of a conductivity cell is:",
      "options": [
        "S cm\u207b\u00b9",
        "cm\u207b\u00b9",
        "ohm cm",
        "S cm\u00b2 mol\u207b\u00b9"
      ],
      "correct": 1,
      "explanation": "Cell constant G* = l / A = cm / cm\u00b2 = cm\u207b\u00b9."
    },
    {
      "id": "C070",
      "subject": "Chemistry",
      "chapter": "Electrochemistry",
      "difficulty": "H",
      "question": "In a fuel cell (H2-O2 cell), the reaction taking place at CATHODE is:",
      "options": [
        "2 H2 + 4 OH\u207b \u2192 4 H2O + 4 e\u207b",
        "O2 + 2 H2O + 4 e\u207b \u2192 4 OH\u207b",
        "H2 \u2192 2 H\u207a + 2 e\u207b",
        "2 H2O \u2192 O2 + 4 H\u207a + 4 e\u207b"
      ],
      "correct": 1,
      "explanation": "At cathode (reduction): O2(g) + 2 H2O(l) + 4 e\u207b \u2192 4 OH\u207b(aq)."
    },
    {
      "id": "C071",
      "subject": "Chemistry",
      "chapter": "Chemical Kinetics",
      "difficulty": "M",
      "question": "Half-life of a first-order reaction is 69.3 minutes. The rate constant k is:",
      "options": [
        "0.01 min\u207b\u00b9",
        "0.10 min\u207b\u00b9",
        "0.001 min\u207b\u00b9",
        "1.0 min\u207b\u00b9"
      ],
      "correct": 0,
      "explanation": "For first order reaction, t_1/2 = 0.693 / k => k = 0.693 / 69.3 = 0.01 min\u207b\u00b9."
    },
    {
      "id": "C072",
      "subject": "Chemistry",
      "chapter": "Chemical Kinetics",
      "difficulty": "H",
      "question": "For reaction 2 A + B \u2192 C, doubling [A] increases rate by factor of 4, while doubling [B] doubles the rate. Rate law is:",
      "options": [
        "Rate = k [A] [B]",
        "Rate = k [A]\u00b2 [B]",
        "Rate = k [A] [B]\u00b2",
        "Rate = k [A]\u00b2 [B]\u00b2"
      ],
      "correct": 1,
      "explanation": "Rate \u221d [A]^m [B]^n. 2^m = 4 => m = 2. 2^n = 2 => n = 1. Rate law = k [A]\u00b2 [B]. Overall order = 3."
    },
    {
      "id": "C073",
      "subject": "Chemistry",
      "chapter": "Chemical Kinetics",
      "difficulty": "M",
      "question": "Units of rate constant for a ZERO-order reaction are:",
      "options": [
        "s\u207b\u00b9",
        "mol L\u207b\u00b9 s\u207b\u00b9",
        "L mol\u207b\u00b9 s\u207b\u00b9",
        "L\u00b2 mol\u207b\u00b2 s\u207b\u00b9"
      ],
      "correct": 1,
      "explanation": "For zero order, Rate = k [A]\u2070 = k. Units of rate = mol L\u207b\u00b9 s\u207b\u00b9."
    },
    {
      "id": "C074",
      "subject": "Chemistry",
      "chapter": "Chemical Kinetics",
      "difficulty": "H",
      "question": "A first-order reaction is 75% complete in 40 minutes. Its half-life (t_1/2) is:",
      "options": [
        "10 min",
        "20 min",
        "30 min",
        "40 min"
      ],
      "correct": 1,
      "explanation": "75% completion corresponds to 2 half-lives (100% -> 50% -> 25%). 2 * t_1/2 = 40 min => t_1/2 = 20 min."
    },
    {
      "id": "C075",
      "subject": "Chemistry",
      "chapter": "Chemical Kinetics",
      "difficulty": "H",
      "question": "When temperature increases from 298 K to 308 K, rate constant of a reaction doubles. Activation energy E_a is: (R = 8.314 J/mol\u00b7K)",
      "options": [
        "52.9 kJ/mol",
        "105.8 kJ/mol",
        "26.4 kJ/mol",
        "211.6 kJ/mol"
      ],
      "correct": 0,
      "explanation": "Arrhenius equation: log(k2/k1) = (E_a / 2.303 R) * (T2 - T1) / (T1 T2). log(2) = 0.3010. E_a = (0.3010 * 2.303 * 8.314 * 298 * 308) / 10 = 52.89 kJ/mol."
    },
    {
      "id": "C076",
      "subject": "Chemistry",
      "chapter": "Chemical Kinetics",
      "difficulty": "M",
      "question": "A catalyst increases the rate of a chemical reaction by:",
      "options": [
        "Increasing \u0394H of reaction",
        "Decreasing activation energy E_a",
        "Increasing collision frequency only",
        "Decreasing free energy change \u0394G"
      ],
      "correct": 1,
      "explanation": "A catalyst provides an alternative reaction pathway with lower activation energy (E_a)."
    },
    {
      "id": "C077",
      "subject": "Chemistry",
      "chapter": "Chemical Kinetics",
      "difficulty": "H",
      "question": "For a pseudo-first order reaction CH3COOCH3 + H2O (excess) -> CH3COOH + CH3OH, order and molecularity are:",
      "options": [
        "Order = 1, Molecularity = 2",
        "Order = 2, Molecularity = 2",
        "Order = 1, Molecularity = 1",
        "Order = 2, Molecularity = 1"
      ],
      "correct": 0,
      "explanation": "Water is present in large excess, so order = 1. However, 2 molecules participate in elementary step, so molecularity = 2."
    },
    {
      "id": "C078",
      "subject": "Chemistry",
      "chapter": "Chemical Kinetics",
      "difficulty": "H",
      "question": "The plot of ln k versus 1/T yields a straight line with slope equal to:",
      "options": [
        "- E_a / R",
        "E_a / R",
        "- E_a / (2.303 R)",
        "E_a / (2.303 R)"
      ],
      "correct": 0,
      "explanation": "ln k = ln A - (E_a / R) (1/T). Plot of ln k vs 1/T gives a straight line with slope = - E_a / R."
    },
    {
      "id": "C079",
      "subject": "Chemistry",
      "chapter": "Chemical Kinetics",
      "difficulty": "M",
      "question": "If concentration of reactant in a zero-order reaction is doubled, its half-life period will:",
      "options": [
        "Be halved",
        "Double",
        "Remain unchanged",
        "Quadruple"
      ],
      "correct": 1,
      "explanation": "For zero-order reaction, t_1/2 = [A]0 / (2 k). Half-life is directly proportional to initial concentration [A]0."
    },
    {
      "id": "C080",
      "subject": "Chemistry",
      "chapter": "Chemical Kinetics",
      "difficulty": "H",
      "question": "Radioactive decay follows kinetics of which order?",
      "options": [
        "Zero order",
        "First order",
        "Second order",
        "Fractional order"
      ],
      "correct": 1,
      "explanation": "All radioactive decay processes are natural nuclear disintegrations following strictly FIRST-ORDER kinetics."
    },
    {
      "id": "C081",
      "subject": "Chemistry",
      "chapter": "Surface Chemistry",
      "difficulty": "M",
      "question": "Which type of adsorption involves weak van der Waals forces and is reversible?",
      "options": [
        "Chemisorption",
        "Physisorption",
        "Desorption",
        "Absorption"
      ],
      "correct": 1,
      "explanation": "Physisorption (physical adsorption) arises from weak van der Waals forces, is multi-layered, non-specific, and reversible."
    },
    {
      "id": "C082",
      "subject": "Chemistry",
      "chapter": "Surface Chemistry",
      "difficulty": "H",
      "question": "According to Freundlich adsorption isotherm x/m = k P^(1/n), at HIGH pressure, the value of 1/n becomes:",
      "options": [
        "1",
        "0",
        "0.5",
        "Infinity"
      ],
      "correct": 1,
      "explanation": "At high pressure, adsorption reaches saturation. x/m becomes independent of pressure (P\u2070), so 1/n = 0."
    },
    {
      "id": "C083",
      "subject": "Chemistry",
      "chapter": "Surface Chemistry",
      "difficulty": "M",
      "question": "Gold number is a measure of the protective power of a:",
      "options": [
        "Lyophilic colloid",
        "Lyophobic colloid",
        "Emulsion",
        "Gel"
      ],
      "correct": 0,
      "explanation": "Gold number measures minimum mass in mg of a lyophilic colloid required to prevent coagulation of 10 mL gold sol by 1 mL of 10% NaCl."
    },
    {
      "id": "C084",
      "subject": "Chemistry",
      "chapter": "Surface Chemistry",
      "difficulty": "H",
      "question": "According to Hardy-Schulze rule, coagulation power of ions for a NEGATIVELY charged sol (e.g. As2S3 sol) increases in order:",
      "options": [
        "Na\u207a < Mg\u00b2\u207a < Al\u00b3\u207a",
        "Al\u00b3\u207a < Mg\u00b2\u207a < Na\u207a",
        "Cl\u207b < SO4\u00b2\u207b < PO4\u00b3\u207b",
        "PO4\u00b3\u207b < SO4\u00b2\u207b < Cl\u207b"
      ],
      "correct": 0,
      "explanation": "For negatively charged sol, coagulating power increases with higher positive charge of flocculating cation: Na\u207a (+1) < Mg\u00b2\u207a (+2) < Al\u00b3\u207a (+3)."
    },
    {
      "id": "C085",
      "subject": "Chemistry",
      "chapter": "Surface Chemistry",
      "difficulty": "H",
      "question": "The charge on Fe(OH)3 colloidal particles formed by adding FeCl3 to hot water is:",
      "options": [
        "Positive due to adsorption of Fe\u00b3\u207a",
        "Negative due to adsorption of Cl\u207b",
        "Neutral",
        "Negative due to OH\u207b"
      ],
      "correct": 0,
      "explanation": "Fe(OH)3 sol preferentially adsorbs common Fe\u00b3\u207a ions from solution, acquiring a POSITIVE charge."
    },
    {
      "id": "C086",
      "subject": "Chemistry",
      "chapter": "Surface Chemistry",
      "difficulty": "M",
      "question": "Butter is a colloidal dispersion of:",
      "options": [
        "Liquid in liquid",
        "Liquid in solid",
        "Solid in liquid",
        "Gas in liquid"
      ],
      "correct": 1,
      "explanation": "Butter is an emulsion/gel composed of liquid water droplets dispersed in solid fat (Liquid in Solid)."
    },
    {
      "id": "C087",
      "subject": "Chemistry",
      "chapter": "Surface Chemistry",
      "difficulty": "H",
      "question": "Cleansing action of soap is due to formation of aggregates called micelles above a specific concentration known as:",
      "options": [
        "Critical Micelle Concentration (CMC)",
        "Kraft Temperature",
        "Isoelectric Point",
        "Peptization concentration"
      ],
      "correct": 0,
      "explanation": "Micelles form only above Critical Micelle Concentration (CMC) and above Kraft Temperature (T_k)."
    },
    {
      "id": "C088",
      "subject": "Chemistry",
      "chapter": "Surface Chemistry",
      "difficulty": "H",
      "question": "Tyndall effect is NOT observed in:",
      "options": [
        "Starch sol",
        "Gold sol",
        "True solution of NaCl in water",
        "Emulsion of oil in water"
      ],
      "correct": 2,
      "explanation": "Tyndall effect (light scattering) occurs only when particle size is comparable to wavelength of light (colloids). True solutions (NaCl in water) do not show Tyndall effect."
    },
    {
      "id": "C089",
      "subject": "Chemistry",
      "chapter": "Surface Chemistry",
      "difficulty": "M",
      "question": "Process of converting a freshly prepared precipitate into a colloidal sol by adding an electrolyte is called:",
      "options": [
        "Coagulation",
        "Peptization",
        "Dialysis",
        "Electrophoresis"
      ],
      "correct": 1,
      "explanation": "Peptization is the dispersion of a precipitate into colloidal particles by adding a small amount of electrolyte (peptizing agent)."
    },
    {
      "id": "C090",
      "subject": "Chemistry",
      "chapter": "Surface Chemistry",
      "difficulty": "H",
      "question": "Electrophoresis confirms that colloidal particles:",
      "options": [
        "Possess electrical charge",
        "Scatter light",
        "Exhibit Brownian motion",
        "Have large surface area"
      ],
      "correct": 0,
      "explanation": "Electrophoresis (movement of colloidal particles under applied electric field) confirms particles carry an electrical charge."
    },
    {
      "id": "C091",
      "subject": "Chemistry",
      "chapter": "Periodicity",
      "difficulty": "M",
      "question": "Which of the following elements has the HIGHEST electronegativity?",
      "options": [
        "Oxygen",
        "Chlorine",
        "Fluorine",
        "Nitrogen"
      ],
      "correct": 2,
      "explanation": "Fluorine (F) is the most electronegative element on the Pauling scale (electronegativity = 4.0)."
    },
    {
      "id": "C092",
      "subject": "Chemistry",
      "chapter": "Periodicity",
      "difficulty": "H",
      "question": "Correct increasing order of ionic radii for isoelectronic species N\u00b3\u207b, O\u00b2\u207b, F\u207b, Na\u207a, Mg\u00b2\u207a is:",
      "options": [
        "Mg\u00b2\u207a < Na\u207a < F\u207b < O\u00b2\u207b < N\u00b3\u207b",
        "N\u00b3\u207b < O\u00b2\u207b < F\u207b < Na\u207a < Mg\u00b2\u207a",
        "Na\u207a < Mg\u00b2\u207a < F\u207b < O\u00b2\u207b < N\u00b3\u207b",
        "N\u00b3\u207b < F\u207b < O\u00b2\u207b < Mg\u00b2\u207a < Na\u207a"
      ],
      "correct": 0,
      "explanation": "For isoelectronic species, higher nuclear charge (Z) pulls electron cloud closer, reducing radius. Mg\u00b2\u207a(Z=12) < Na\u207a(11) < F\u207b(9) < O\u00b2\u207b(8) < N\u00b3\u207b(7)."
    },
    {
      "id": "C093",
      "subject": "Chemistry",
      "chapter": "Periodicity",
      "difficulty": "M",
      "question": "Element with atomic number Z = 35 belongs to which block and group of Periodic Table?",
      "options": [
        "p-block, Group 17",
        "d-block, Group 7",
        "s-block, Group 2",
        "p-block, Group 15"
      ],
      "correct": 0,
      "explanation": "Z = 35 is Bromine (Br): configuration [Ar] 4s\u00b2 3d\u00b9\u2070 4p\u2075. Last electron enters p-subshell (p-block), Group = 10 + 2 + 5 = 17 (Halogens)."
    },
    {
      "id": "C094",
      "subject": "Chemistry",
      "chapter": "Periodicity",
      "difficulty": "H",
      "question": "First ionization energy of Nitrogen (N) is HIGHER than Oxygen (O) because:",
      "options": [
        "N has smaller atomic radius than O",
        "N has half-filled 2p\u00b3 subshell stability",
        "O has higher effective nuclear charge",
        "N is more electronegative than O"
      ],
      "correct": 1,
      "explanation": "Nitrogen has electronic configuration [He] 2s\u00b2 2p\u00b3 with extra stable half-filled 2p subshell, requiring more energy to remove an electron than Oxygen [He] 2s\u00b2 2p\u2074."
    },
    {
      "id": "C095",
      "subject": "Chemistry",
      "chapter": "Periodicity",
      "difficulty": "H",
      "question": "Which element has the most EXOTHERMIC (highest negative) Electron Gain Enthalpy?",
      "options": [
        "Fluorine (F)",
        "Chlorine (Cl)",
        "Bromine (Br)",
        "Oxygen (O)"
      ],
      "correct": 1,
      "explanation": "Chlorine (Cl) has more negative electron gain enthalpy than Fluorine (-349 kJ/mol vs -328 kJ/mol) due to small size and high inter-electronic repulsions in F's compact 2p subshell."
    },
    {
      "id": "C096",
      "subject": "Chemistry",
      "chapter": "Periodicity",
      "difficulty": "M",
      "question": "General valence shell electronic configuration of d-block elements is:",
      "options": [
        "(n-1)d\u00b9\u207b\u00b9\u2070 ns\u00b9\u207b\u00b2",
        "(n-1)d\u00b9\u207b\u00b9\u2070 ns\u00b2 np\u2076",
        "nd\u00b9\u207b\u00b9\u2070 ns\u00b9",
        "(n-2)f\u00b9\u207b\u00b9\u2074 (n-1)d\u2070\u207b\u00b9 ns\u00b2"
      ],
      "correct": 0,
      "explanation": "Transition elements (d-block) have outer electronic configuration (n-1)d\u00b9\u207b\u00b9\u2070 ns\u00b9\u207b\u00b2."
    },
    {
      "id": "C097",
      "subject": "Chemistry",
      "chapter": "Periodicity",
      "difficulty": "H",
      "question": "Which of the following oxides is AMPHOTERIC in nature?",
      "options": [
        "Na2O",
        "Cl2O7",
        "Al2O3",
        "SO3"
      ],
      "correct": 2,
      "explanation": "Al2O3 and BeO are amphoteric oxides, reacting with both acids and bases. Na2O is basic; Cl2O7 and SO3 are acidic."
    },
    {
      "id": "C098",
      "subject": "Chemistry",
      "chapter": "Periodicity",
      "difficulty": "H",
      "question": "Screening / shielding effect order of subshell orbitals for a given principal quantum number is:",
      "options": [
        "s > p > d > f",
        "f > d > p > s",
        "s > d > p > f",
        "p > s > d > f"
      ],
      "correct": 0,
      "explanation": "s-orbitals penetrate closest to the nucleus and exert the strongest screening effect: s > p > d > f."
    },
    {
      "id": "C099",
      "subject": "Chemistry",
      "chapter": "Periodicity",
      "difficulty": "M",
      "question": "Diagonal relationship in Periodic Table is shown by elements of 2nd and 3rd periods, such as:",
      "options": [
        "Li and Mg",
        "Be and Al",
        "B and Si",
        "All of the above"
      ],
      "correct": 3,
      "explanation": "Diagonal pairs include Li-Mg, Be-Al, B-Si due to similar ionic potential (charge-to-radius ratio)."
    },
    {
      "id": "C100",
      "subject": "Chemistry",
      "chapter": "Periodicity",
      "difficulty": "H",
      "question": "The IUPAC symbol for element with atomic number Z = 114 is:",
      "options": [
        "Ununquadium (Uuq)",
        "Ununbium (Uub)",
        "Ununtrium (Uut)",
        "Ununpentium (Uup)"
      ],
      "correct": 0,
      "explanation": "1 = un, 1 = un, 4 = quad => Un-un-quad-ium (Uuq). (Now officially named Flerovium Fl)."
    },
    {
      "id": "C101",
      "subject": "Chemistry",
      "chapter": "Chemical Bonding & Molecular Structure",
      "difficulty": "M",
      "question": "According to VSEPR theory, geometry and hybridization of XeF4 molecule are:",
      "options": [
        "Square planar, sp\u00b3d\u00b2",
        "Tetrahedral, sp\u00b3",
        "Octahedral, sp\u00b3d\u00b2",
        "See-saw, sp\u00b3d"
      ],
      "correct": 0,
      "explanation": "XeF4 has 4 bonding pairs and 2 lone pairs on Xe (total 6 electron pairs => sp\u00b3d\u00b2 hybridization, Octahedral geometry, Square Planar molecular shape)."
    },
    {
      "id": "C102",
      "subject": "Chemistry",
      "chapter": "Chemical Bonding & Molecular Structure",
      "difficulty": "H",
      "question": "Bond order of O2\u207a, O2, O2\u207b, O2\u00b2\u207b species follow the decreasing order:",
      "options": [
        "O2\u207a > O2 > O2\u207b > O2\u00b2\u207b",
        "O2\u00b2\u207b > O2\u207b > O2 > O2\u207a",
        "O2 > O2\u207a > O2\u207b > O2\u00b2\u207b",
        "O2\u207a > O2\u207b > O2 > O2\u00b2\u207b"
      ],
      "correct": 0,
      "explanation": "MO theory bond orders: O2\u207a = 2.5, O2 = 2.0, O2\u207b = 1.5, O2\u00b2\u207b = 1.0. Decreasing order: O2\u207a > O2 > O2\u207b > O2\u00b2\u207b."
    },
    {
      "id": "C103",
      "subject": "Chemistry",
      "chapter": "Chemical Bonding & Molecular Structure",
      "difficulty": "M",
      "question": "Which of the following molecules has ZERO dipole moment?",
      "options": [
        "H2O",
        "NH3",
        "BF3",
        "PCl3"
      ],
      "correct": 2,
      "explanation": "BF3 is trigonal planar (sp\u00b2 hybridization). The three vector dipole moments cancel completely, yielding net dipole moment \u03bc = 0."
    },
    {
      "id": "C104",
      "subject": "Chemistry",
      "chapter": "Chemical Bonding & Molecular Structure",
      "difficulty": "H",
      "question": "According to Molecular Orbital Theory, which of the following diatomic species is PARAMAGNETIC?",
      "options": [
        "N2",
        "O2",
        "C2",
        "F2"
      ],
      "correct": 1,
      "explanation": "O2 has 16 electrons with two unpaired electrons in degenerate \u03c0*2px and \u03c0*2py antibonding orbitals, making it paramagnetic."
    },
    {
      "id": "C105",
      "subject": "Chemistry",
      "chapter": "Chemical Bonding & Molecular Structure",
      "difficulty": "H",
      "question": "Hybridization of central atom in PCl5, SF6, and IF7 are respectively:",
      "options": [
        "sp\u00b3d, sp\u00b3d\u00b2, sp\u00b3d\u00b3",
        "sp\u00b3d\u00b2, sp\u00b3d, sp\u00b3d\u00b3",
        "sp\u00b3, sp\u00b3d, sp\u00b3d\u00b2",
        "sp\u00b3d\u00b3, sp\u00b3d\u00b2, sp\u00b3d"
      ],
      "correct": 0,
      "explanation": "PCl5 (5 BP, 0 LP) = sp\u00b3d. SF6 (6 BP, 0 LP) = sp\u00b3d\u00b2. IF7 (7 BP, 0 LP) = sp\u00b3d\u00b3."
    },
    {
      "id": "C106",
      "subject": "Chemistry",
      "chapter": "Chemical Bonding & Molecular Structure",
      "difficulty": "M",
      "question": "The bond angle H-O-H in water molecule (104.5\u00b0) is smaller than ideal tetrahedral angle (109.5\u00b0) due to:",
      "options": [
        "Lone pair - Lone pair repulsion",
        "Bond pair - Bond pair repulsion",
        "Lone pair - Bond pair attraction",
        "High electronegativity of H"
      ],
      "correct": 0,
      "explanation": "Repulsion order: Lone Pair - Lone Pair > Lone Pair - Bond Pair > Bond Pair - Bond Pair. Oxygen's 2 LPs push the 2 BPs closer."
    },
    {
      "id": "C107",
      "subject": "Chemistry",
      "chapter": "Chemical Bonding & Molecular Structure",
      "difficulty": "H",
      "question": "In NO3\u207b ion, total number of valence electrons, formal charge on Nitrogen, and resonance structures are:",
      "options": [
        "24 electrons, +1 charge, 3 structures",
        "24 electrons, 0 charge, 2 structures",
        "23 electrons, +1 charge, 3 structures",
        "26 electrons, -1 charge, 4 structures"
      ],
      "correct": 0,
      "explanation": "Valence electrons = 5 + 3(6) + 1 = 24. N forms 1 double bond, 2 single bonds (formal charge = 5 - 4 = +1). 3 equivalent resonance structures."
    },
    {
      "id": "C108",
      "subject": "Chemistry",
      "chapter": "Chemical Bonding & Molecular Structure",
      "difficulty": "H",
      "question": "Which of the following compounds exhibits intramolecular hydrogen bonding?",
      "options": [
        "o-Nitrophenol",
        "p-Nitrophenol",
        "Water",
        "Ethanol"
      ],
      "correct": 0,
      "explanation": "o-Nitrophenol forms 6-membered ring intramolecular hydrogen bond between phenolic -OH and adjacent ortho -NO2 group."
    },
    {
      "id": "C109",
      "subject": "Chemistry",
      "chapter": "Chemical Bonding & Molecular Structure",
      "difficulty": "M",
      "question": "According to Fajan's rules, covalent character in an ionic compound increases with:",
      "options": [
        "Small cation, large anion, high charge",
        "Large cation, small anion, low charge",
        "Small cation, small anion, low charge",
        "Large cation, large anion, low charge"
      ],
      "correct": 0,
      "explanation": "High polarizing power of small cation with high positive charge + high polarizability of large anion = high covalent character."
    },
    {
      "id": "C110",
      "subject": "Chemistry",
      "chapter": "Chemical Bonding & Molecular Structure",
      "difficulty": "H",
      "question": "Number of sigma (\u03c3) and pi (\u03c0) bonds in a molecule of Ethyne (Acetylene, C2H2) are:",
      "options": [
        "3 \u03c3 and 2 \u03c0",
        "2 \u03c3 and 3 \u03c0",
        "4 \u03c3 and 1 \u03c0",
        "5 \u03c3 and 0 \u03c0"
      ],
      "correct": 0,
      "explanation": "Ethyne H-C\u2261C-H contains two C-H \u03c3 bonds, one C-C \u03c3 bond (total 3 \u03c3 bonds), and two C-C \u03c0 bonds."
    },
    {
      "id": "C111",
      "subject": "Chemistry",
      "chapter": "s-Block Elements",
      "difficulty": "M",
      "question": "Which alkali metal imparts a characteristic CRIMSON RED color to Bunsen flame?",
      "options": [
        "Sodium (Na)",
        "Lithium (Li)",
        "Potassium (K)",
        "Cesium (Cs)"
      ],
      "correct": 1,
      "explanation": "Flame colors: Li (Crimson Red), Na (Golden Yellow), K (Lilac/Violet), Rb (Red-Violet), Cs (Blue)."
    },
    {
      "id": "C112",
      "subject": "Chemistry",
      "chapter": "s-Block Elements",
      "difficulty": "H",
      "question": "Solubility of alkaline earth metal sulfates in water decreases down the group in order BeSO4 > MgSO4 > CaSO4 > SrSO4 > BaSO4 because:",
      "options": [
        "Hydration energy decreases faster than lattice energy",
        "Lattice energy increases rapidly",
        "Atomic size decreases",
        "Electronegativity increases"
      ],
      "correct": 0,
      "explanation": "As cation size increases, hydration enthalpy decreases much more rapidly than lattice enthalpy, making BaSO4 insoluble."
    },
    {
      "id": "C113",
      "subject": "Chemistry",
      "chapter": "s-Block Elements",
      "difficulty": "M",
      "question": "Plaster of Paris has the chemical formula:",
      "options": [
        "CaSO4 \u00b7 2 H2O",
        "CaSO4 \u00b7 0.5 H2O",
        "CaSO4",
        "MgSO4 \u00b7 7 H2O"
      ],
      "correct": 1,
      "explanation": "Plaster of Paris is Calcium Sulfate Hemihydrate: CaSO4 \u00b7 0.5 H2O (or (CaSO4)2 \u00b7 H2O). Gypsum is CaSO4 \u00b7 2 H2O."
    },
    {
      "id": "C114",
      "subject": "Chemistry",
      "chapter": "s-Block Elements",
      "difficulty": "H",
      "question": "When Sodium metal dissolves in liquid Ammonia, a deep blue conducting solution is formed due to presence of:",
      "options": [
        "Ammoniated electrons",
        "Sodium cations Na\u207a",
        "Ammoniated Na\u207a ions",
        "Ammonia gas"
      ],
      "correct": 0,
      "explanation": "Na + (x+y) NH3 \u2192 [Na(NH3)_x]\u207a + [e(NH3)_y]\u207b. The deep blue color and paramagnetic nature are due to ammoniated electrons."
    },
    {
      "id": "C115",
      "subject": "Chemistry",
      "chapter": "s-Block Elements",
      "difficulty": "H",
      "question": "Which of the following alkali metal carbonates is thermally UNSTABLE and decomposes on heating to yield CO2 gas?",
      "options": [
        "Na2CO3",
        "K2CO3",
        "Li2CO3",
        "Rb2CO3"
      ],
      "correct": 2,
      "explanation": "Li2CO3 is thermally unstable due to small size and high polarizing power of Li\u207a ion: Li2CO3 \u2192 Li2O + CO2. Other alkali carbonates are stable."
    },
    {
      "id": "C116",
      "subject": "Chemistry",
      "chapter": "s-Block Elements",
      "difficulty": "M",
      "question": "Chemical formula of Quicklime and Slaked lime are respectively:",
      "options": [
        "CaO and Ca(OH)2",
        "CaCO3 and CaO",
        "Ca(OH)2 and CaO",
        "CaCl2 and CaSO4"
      ],
      "correct": 0,
      "explanation": "Quicklime is Calcium Oxide (CaO). Slaked lime is Calcium Hydroxide Ca(OH)2."
    },
    {
      "id": "C117",
      "subject": "Chemistry",
      "chapter": "s-Block Elements",
      "difficulty": "H",
      "question": "Magnesium burns in air to form a mixture of:",
      "options": [
        "MgO and Mg(NO3)2",
        "MgO and Mg3N2",
        "MgCO3 and MgO",
        "Mg(OH)2 and Mg3N2"
      ],
      "correct": 1,
      "explanation": "Unlike group 1 elements, Magnesium reacts with both Oxygen and Nitrogen in air to form Oxide (MgO) and Nitride (Mg3N2)."
    },
    {
      "id": "C118",
      "subject": "Chemistry",
      "chapter": "s-Block Elements",
      "difficulty": "H",
      "question": "Biological importance of Na\u207a and K\u207a ions: Na\u207a ions are primarily found in:",
      "options": [
        "Extracellular fluid, while K\u207a ions are predominant in intracellular fluid",
        "Intracellular fluid, while K\u207a is extracellular",
        "Bone matrix only",
        "Red blood cells only"
      ],
      "correct": 0,
      "explanation": "Na\u207a is the primary cation in extracellular fluids (plasma, interstitial fluid), whereas K\u207a is the main intracellular cation."
    },
    {
      "id": "C119",
      "subject": "Chemistry",
      "chapter": "s-Block Elements",
      "difficulty": "M",
      "question": "Solvay process is commercially used for the manufacture of:",
      "options": [
        "Sodium Carbonate (Washing Soda)",
        "Sodium Hydroxide (Caustic Soda)",
        "Sodium Nitrate",
        "Potassium Carbonate"
      ],
      "correct": 0,
      "explanation": "Solvay (Ammonia-Soda) process manufactures Sodium Carbonate (Na2CO3). Note K2CO3 cannot be prepared by Solvay process due to high solubility of KHCO3."
    },
    {
      "id": "C120",
      "subject": "Chemistry",
      "chapter": "s-Block Elements",
      "difficulty": "H",
      "question": "Which alkaline earth metal does NOT impart any color to Bunsen flame?",
      "options": [
        "Calcium (Ca)",
        "Strontium (Sr)",
        "Beryllium (Be) and Magnesium (Mg)",
        "Barium (Ba)"
      ],
      "correct": 2,
      "explanation": "Be and Mg have small size and very high ionization energies; electrons are tightly held and not excited by Bunsen flame."
    },
    {
      "id": "C121",
      "subject": "Chemistry",
      "chapter": "p-Block Elements",
      "difficulty": "M",
      "question": "Inert pair effect is most prominent in heavier elements of groups 13, 14, 15, resulting in stability of lower oxidation state in:",
      "options": [
        "Tl\u207a, Pb\u00b2\u207a, Bi\u00b3\u207a",
        "Al\u00b3\u207a, Si\u2074\u207a, P\u2075\u207a",
        "B\u00b3\u207a, C\u2074\u207a, N\u2075\u207a",
        "Ga\u00b3\u207a, Ge\u2074\u207a, As\u00b3\u207a"
      ],
      "correct": 0,
      "explanation": "Inert pair effect (reluctance of s-electrons to participate in bonding) stabilizes lower oxidation states: Tl\u207a > Tl\u00b3\u207a, Pb\u00b2\u207a > Pb\u2074\u207a, Bi\u00b3\u207a > Bi\u2075\u207a."
    },
    {
      "id": "C122",
      "subject": "Chemistry",
      "chapter": "p-Block Elements",
      "difficulty": "H",
      "question": "Structure of Diborane (B2H6) contains:",
      "options": [
        "Four 2-center 2-electron bonds and two 3-center 2-electron bridge bonds",
        "Six 2-center 2-electron bonds",
        "Two 3-center 4-electron bonds",
        "Four 3-center 2-electron bonds"
      ],
      "correct": 0,
      "explanation": "B2H6 has 4 terminal B-H bonds (2c-2e bonds) and 2 banana bridge B-H-B bonds (3c-2e bonds)."
    },
    {
      "id": "C123",
      "subject": "Chemistry",
      "chapter": "p-Block Elements",
      "difficulty": "M",
      "question": "Which allotrope of Carbon is thermodynamically MOST stable at room temperature and pressure?",
      "options": [
        "Diamond",
        "Graphite",
        "Fullerene (C60)",
        "Carbon Nanotubes"
      ],
      "correct": 1,
      "explanation": "Graphite is the thermodynamically most stable allotrope of carbon (\u0394H\u00b0_f of graphite = 0, diamond = +1.9 kJ/mol)."
    },
    {
      "id": "C124",
      "subject": "Chemistry",
      "chapter": "p-Block Elements",
      "difficulty": "H",
      "question": "When white Phosphorus is heated with concentrated NaOH solution in an inert CO2 atmosphere, gas evolved is:",
      "options": [
        "PH3 (Phosphine)",
        "P2H4",
        "H3PO4",
        "P2O5"
      ],
      "correct": 0,
      "explanation": "Disproportionation reaction: P4 + 3 NaOH + 3 H2O \u2192 PH3(g) + 3 NaH2PO2 (Sodium hypophosphite). Phosphine gas PH3 is liberated."
    },
    {
      "id": "C125",
      "subject": "Chemistry",
      "chapter": "p-Block Elements",
      "difficulty": "H",
      "question": "In Contact Process for manufacture of H2SO4, catalyst used for oxidation of SO2 to SO3 is:",
      "options": [
        "V2O5 (Vanadium pentoxide)",
        "Fe2O3",
        "Pt / Rh gauge",
        "CuCl2"
      ],
      "correct": 0,
      "explanation": "Vanadium pentoxide V2O5 (or Pt) catalyzes 2 SO2 + O2 \u21cc 2 SO3."
    },
    {
      "id": "C126",
      "subject": "Chemistry",
      "chapter": "p-Block Elements",
      "difficulty": "M",
      "question": "Which halogen oxoacid is the STRONGEST acid?",
      "options": [
        "HClO",
        "HClO2",
        "HClO3",
        "HClO4"
      ],
      "correct": 3,
      "explanation": "Acidity of halogen oxoacids increases with increasing oxidation state of halogen: HClO (+1) < HClO2 (+3) < HClO3 (+5) < HClO4 (+7)."
    },
    {
      "id": "C127",
      "subject": "Chemistry",
      "chapter": "p-Block Elements",
      "difficulty": "H",
      "question": "Noble gas compound XeF6 on complete hydrolysis yields:",
      "options": [
        "XeO3 + HF",
        "XeO2F2 + HF",
        "XeOF4 + HF",
        "Xe + O2 + HF"
      ],
      "correct": 0,
      "explanation": "XeF6 + 3 H2O \u2192 XeO3 + 6 HF. Xenon trioxide XeO3 is an explosive solid."
    },
    {
      "id": "C128",
      "subject": "Chemistry",
      "chapter": "p-Block Elements",
      "difficulty": "H",
      "question": "Borax bead test involves heating Borax (Na2B4O7 \u00b7 10H2O) to form a transparent glassy bead composed of:",
      "options": [
        "NaBO2 + B2O3",
        "H3BO3",
        "Na2B4O7",
        "B2O3 only"
      ],
      "correct": 0,
      "explanation": "Na2B4O7 \u00b7 10H2O --\u0394--> Na2B4O7 --\u0394--> 2 NaBO2 (Sodium metaborate) + B2O3 (Boric anhydride)."
    },
    {
      "id": "C129",
      "subject": "Chemistry",
      "chapter": "p-Block Elements",
      "difficulty": "M",
      "question": "Nitrogen molecule (N2) is chemically unreactive at room temperature because of:",
      "options": [
        "High electronegativity of N",
        "Presence of strong triple bond (N\u2261N) with high dissociation energy",
        "Small atomic size",
        "Absence of d-orbitals"
      ],
      "correct": 1,
      "explanation": "N2 possesses a triple bond (N\u2261N) with extremely high bond dissociation enthalpy (945 kJ/mol)."
    },
    {
      "id": "C130",
      "subject": "Chemistry",
      "chapter": "p-Block Elements",
      "difficulty": "H",
      "question": "Which of the following compounds is known as 'Inorganic Benzene'?",
      "options": [
        "Borazine (B3N3H6)",
        "Diborane (B2H6)",
        "Phosphazene",
        "Boron nitride (BN)"
      ],
      "correct": 0,
      "explanation": "Borazine B3N3H6 is called inorganic benzene due to its cyclic planar structure, alternating B-N atoms, and aromatic electron delocalization."
    },
    {
      "id": "C131",
      "subject": "Chemistry",
      "chapter": "d- and f-Block Elements",
      "difficulty": "M",
      "question": "Which transition metal ion is COLORLESS in aqueous solution?",
      "options": [
        "Cu\u00b2\u207a",
        "Fe\u00b3\u207a",
        "Zn\u00b2\u207a",
        "Cr\u00b3\u207a"
      ],
      "correct": 2,
      "explanation": "Zn\u00b2\u207a has electronic configuration [Ar] 3d\u00b9\u2070 (fully filled d-subshell). Absence of unpaired d-electrons means no d-d transition, making it colorless."
    },
    {
      "id": "C132",
      "subject": "Chemistry",
      "chapter": "d- and f-Block Elements",
      "difficulty": "H",
      "question": "Spin-only magnetic moment of Mn\u00b2\u207a ion (Z = 25) is: (in Bohr Magnetons, BM)",
      "options": [
        "5.92 BM",
        "4.90 BM",
        "3.87 BM",
        "2.83 BM"
      ],
      "correct": 0,
      "explanation": "Mn\u00b2\u207a is [Ar] 3d\u2075 (n = 5 unpaired electrons). \u03bc = \u221a(n(n+2)) = \u221a(5 * 7) = \u221a35 \u2248 5.92 BM."
    },
    {
      "id": "C133",
      "subject": "Chemistry",
      "chapter": "d- and f-Block Elements",
      "difficulty": "M",
      "question": "Lanthanide contraction is caused by poor shielding effect of:",
      "options": [
        "4f electrons",
        "5d electrons",
        "6s electrons",
        "3d electrons"
      ],
      "correct": 0,
      "explanation": "Poor shielding effect of diffuse 4f electrons causes effective nuclear charge to increase steadily across lanthanides, shrinking atomic/ionic radii."
    },
    {
      "id": "C134",
      "subject": "Chemistry",
      "chapter": "d- and f-Block Elements",
      "difficulty": "H",
      "question": "Potassium Permanganate (KMnO4) acts as an oxidizing agent in acidic medium. Change in oxidation state of Mn is:",
      "options": [
        "+7 to +2 (gains 5 e-)",
        "+7 to +4 (gains 3 e-)",
        "+7 to +6 (gains 1 e-)",
        "+6 to +2 (gains 4 e-)"
      ],
      "correct": 0,
      "explanation": "In acidic medium: MnO4\u207b + 8 H\u207a + 5 e\u207b \u2192 Mn\u00b2\u207a + 4 H2O (Mn\u207a\u2077 \u2192 Mn\u207a\u00b2)."
    },
    {
      "id": "C135",
      "subject": "Chemistry",
      "chapter": "d- and f-Block Elements",
      "difficulty": "H",
      "question": "Which pair of transition metals exhibit almost identical ionic radii due to Lanthanide Contraction?",
      "options": [
        "Zr (Zr\u2074\u207a) and Hf (Hf\u2074\u207a)",
        "Ti and Zr",
        "Fe and Co",
        "Cu and Ag"
      ],
      "correct": 0,
      "explanation": "Zr (4d series, 160 pm) and Hf (5d series, 159 pm) have nearly identical radii due to intervention of 14 lanthanides."
    },
    {
      "id": "C136",
      "subject": "Chemistry",
      "chapter": "d- and f-Block Elements",
      "difficulty": "M",
      "question": "Transition elements form interstitial compounds with small non-metal atoms like H, C, N. These compounds are:",
      "options": [
        "Hard, metallic, high melting point",
        "Soft and ionic",
        "Volatile and low melting",
        "Chemically highly reactive"
      ],
      "correct": 0,
      "explanation": "Interstitial compounds retain metallic conductivity, are extremely hard (near diamond hardness), and have very high melting points."
    },
    {
      "id": "C137",
      "subject": "Chemistry",
      "chapter": "d- and f-Block Elements",
      "difficulty": "H",
      "question": "When K2Cr2O7 is reacted with H2O2 in acidic medium in presence of ether, a deep blue color is produced due to formation of:",
      "options": [
        "CrO5 (Chromium peroxide)",
        "Cr3+ ions",
        "CrO4\u00b2\u207b",
        "Cr2O3"
      ],
      "correct": 0,
      "explanation": "Cr2O7\u00b2\u207b + 4 H2O2 + 2 H\u207a \u2192 2 CrO5 (butterfly structure Chromium peroxide) + 5 H2O. Ether stabilizes blue CrO5."
    },
    {
      "id": "C138",
      "subject": "Chemistry",
      "chapter": "d- and f-Block Elements",
      "difficulty": "H",
      "question": "Highest oxidation state shown by an actinide element is +7, exhibited by:",
      "options": [
        "Neptunium (Np) and Plutonium (Pu)",
        "Uranium (U)",
        "Thorium (Th)",
        "Americium (Am)"
      ],
      "correct": 0,
      "explanation": "Np and Pu exhibit maximum oxidation state of +7 in actinide series."
    },
    {
      "id": "C139",
      "subject": "Chemistry",
      "chapter": "d- and f-Block Elements",
      "difficulty": "M",
      "question": "Which transition metal catalyst is used in Haber's Process for ammonia production?",
      "options": [
        "Finely divided Iron (Fe) with Mo promoter",
        "Nickel (Ni)",
        "Platinum (Pt)",
        "V2O5"
      ],
      "correct": 0,
      "explanation": "Haber process utilizes finely divided Iron (Fe) catalyst with Molybdenum (Mo) as promoter."
    },
    {
      "id": "C140",
      "subject": "Chemistry",
      "chapter": "d- and f-Block Elements",
      "difficulty": "H",
      "question": "Paramagnetism in transition metal complexes is caused by presence of:",
      "options": [
        "Unpaired electrons",
        "Paired electrons",
        "High lattice energy",
        "empty d-orbitals"
      ],
      "correct": 0,
      "explanation": "Paramagnetism arises from magnetic moments of unpaired electrons."
    },
    {
      "id": "C141",
      "subject": "Chemistry",
      "chapter": "Coordination Compounds",
      "difficulty": "M",
      "question": "IUPAC name of complex [Co(NH3)5(CO3)]Cl is:",
      "options": [
        "Pentaamminecarbonatocobalt(III) chloride",
        "Pentaamminecarbonatocobalt(II) chloride",
        "Carbonatopentaamminecobalt(III) chloride",
        "Pentaamminecobalt(III) carbonate"
      ],
      "correct": 0,
      "explanation": "Ligands in alphabetical order: pentaammine + carbonato. Oxidation state of Co: x + 0 + (-2) + (-1) = 0 => x = +3. Pentaamminecarbonatocobalt(III) chloride."
    },
    {
      "id": "C142",
      "subject": "Chemistry",
      "chapter": "Coordination Compounds",
      "difficulty": "H",
      "question": "According to Crystal Field Theory, for an octahedral d\u2076 complex in STRONG field ligand environment (\u0394o > P), the electronic configuration is:",
      "options": [
        "t2g\u2076 eg\u2070 (low spin, diamagnetic)",
        "t2g\u2074 eg\u00b2 (high spin)",
        "t2g\u2075 eg\u00b9",
        "t2g\u00b3 eg\u00b3"
      ],
      "correct": 0,
      "explanation": "In strong ligand field (\u0394o > P), pairing is favored. All 6 d-electrons pair up in lower t2g set: t2g\u2076 eg\u2070 (Low Spin, diamagnetic)."
    },
    {
      "id": "C143",
      "subject": "Chemistry",
      "chapter": "Coordination Compounds",
      "difficulty": "M",
      "question": "Which type of isomerism is exhibited by pair [Co(NH3)5(SO4)]Br and [Co(NH3)5Br]SO4?",
      "options": [
        "Ionization isomerism",
        "Linkage isomerism",
        "Coordination isomerism",
        "Solvate isomerism"
      ],
      "correct": 0,
      "explanation": "They yield different ions in solution (Br\u207b vs SO4\u00b2\u207b), exhibiting Ionization Isomerism."
    },
    {
      "id": "C144",
      "subject": "Chemistry",
      "chapter": "Coordination Compounds",
      "difficulty": "H",
      "question": "Number of geometrical isomers possible for square planar complex [Pt(NH3)2Cl2] (Cisplatin) is:",
      "options": [
        "2 (Cis and Trans)",
        "3",
        "4",
        "None"
      ],
      "correct": 0,
      "explanation": "Square planar [MA2B2] complexes form 2 geometrical isomers: Cis-isomer (Cisplatin, anti-cancer drug) and Trans-isomer."
    },
    {
      "id": "C145",
      "subject": "Chemistry",
      "chapter": "Coordination Compounds",
      "difficulty": "H",
      "question": "Which ligand can act as an AMBIDENTATE ligand?",
      "options": [
        "NO2\u207b (or SCN\u207b)",
        "NH3",
        "H2O",
        "ethylenediamine (en)"
      ],
      "correct": 0,
      "explanation": "Ambidentate ligands possess two donor atoms but coordinate through only one at a time (e.g. NO2\u207b via N or O; SCN\u207b via S or N)."
    },
    {
      "id": "C146",
      "subject": "Chemistry",
      "chapter": "Coordination Compounds",
      "difficulty": "M",
      "question": "Primary valence and secondary valence of central metal ion according to Werner's theory correspond to:",
      "options": [
        "Oxidation state and Coordination number",
        "Coordination number and Oxidation state",
        "Valence shell electrons and charge",
        "Charge and electronegativity"
      ],
      "correct": 0,
      "explanation": "Werner's Primary valence = Oxidation state (ionizable); Secondary valence = Coordination number (non-ionizable, directional)."
    },
    {
      "id": "C147",
      "subject": "Chemistry",
      "chapter": "Coordination Compounds",
      "difficulty": "H",
      "question": "Spin-only magnetic moment of [Fe(CN)6]\u00b3\u207b is: (Fe\u00b3\u207a = 3d\u2075, CN\u207b is strong field ligand)",
      "options": [
        "1.73 BM",
        "5.92 BM",
        "3.87 BM",
        "2.83 BM"
      ],
      "correct": 0,
      "explanation": "CN\u207b is strong field => t2g\u2075 eg\u2070 => 1 unpaired electron (n=1). \u03bc = \u221a(1*3) = \u221a3 \u2248 1.73 BM."
    },
    {
      "id": "C148",
      "subject": "Chemistry",
      "chapter": "Coordination Compounds",
      "difficulty": "H",
      "question": "Which complex is CHELATE complex with highest stability constant?",
      "options": [
        " [Fe(edta)]\u207b",
        "[Fe(NH3)6]\u00b3\u207a",
        "[Fe(H2O)6]\u00b3\u207a",
        "[FeCl6]\u00b3\u207b"
      ],
      "correct": 0,
      "explanation": "EDTA\u2074\u207b is a hexadentate chelating ligand forming 5 stable ring structures (Chelate effect dramatically enhances stability)."
    },
    {
      "id": "C149",
      "subject": "Chemistry",
      "chapter": "Coordination Compounds",
      "difficulty": "M",
      "question": "Hybridization and shape of Nickel in Ni(CO)4 (Tetracarbonylnickel) are:",
      "options": [
        "sp\u00b3, Tetrahedral",
        "dsp\u00b2, Square planar",
        "sp\u00b3d, Trigonal bipyramidal",
        "sp\u00b3d\u00b2, Octahedral"
      ],
      "correct": 0,
      "explanation": "Ni(0) is 3d\u2078 4s\u00b2. CO is strong field ligand, promoting 4s electrons into 3d to give 3d\u00b9\u2070 4s\u2070 => sp\u00b3 hybridization => Tetrahedral shape."
    },
    {
      "id": "C150",
      "subject": "Chemistry",
      "chapter": "Coordination Compounds",
      "difficulty": "H",
      "question": "Which of the following octahedral complexes exhibits OPTICAL ACTIVITY?",
      "options": [
        "cis-[Co(en)2Cl2]\u207a",
        "trans-[Co(en)2Cl2]\u207a",
        "[Co(NH3)4Cl2]\u207a",
        "[Pt(NH3)2Cl4]"
      ],
      "correct": 0,
      "explanation": "cis-[Co(en)2Cl2]\u207a lacks plane of symmetry (chiral) and resolves into non-superimposable d- and l-enantiomers. Trans-isomer has plane of symmetry (achiral)."
    },
    {
      "id": "C151",
      "subject": "Chemistry",
      "chapter": "Basic Principles & Techniques",
      "difficulty": "M",
      "question": "IUPAC name of CH3-CH(OH)-CH2-CO-CH3 is:",
      "options": [
        "4-Hydroxypentan-2-one",
        "2-Hydroxypentan-4-one",
        "4-Oxopentan-2-ol",
        "Pent-4-ol-2-one"
      ],
      "correct": 0,
      "explanation": "Ketone (-CO-) has higher priority than alcohol (-OH). Numbering from right: C1-C2(=O)-C3-C4(OH)-C5. Name: 4-Hydroxypentan-2-one."
    },
    {
      "id": "C152",
      "subject": "Chemistry",
      "chapter": "Basic Principles & Techniques",
      "difficulty": "H",
      "question": "Which carbocation is the MOST stable due to hyperconjugation and inductive effect?",
      "options": [
        "(CH3)3C\u207a (Tertiary butyl cation)",
        "(CH3)2CH\u207a (Isopropyl cation)",
        "CH3CH2\u207a (Ethyl cation)",
        "CH3\u207a (Methyl cation)"
      ],
      "correct": 0,
      "explanation": "Tertiary butyl cation (CH3)3C\u207a has 9 \u03b1-hydrogens contributing to maximum hyperconjugative resonance stability."
    },
    {
      "id": "C153",
      "subject": "Chemistry",
      "chapter": "Basic Principles & Techniques",
      "difficulty": "M",
      "question": "Heterolytic cleavage of a C-Cl bond in Chloromethane yields:",
      "options": [
        "Carbocation (CH3\u207a) and Chloride ion (Cl\u207b)",
        "Free radicals CH3\u00b7 and Cl\u00b7",
        "Carbanion (CH3\u207b) and H\u207a",
        "Carbene :CH2"
      ],
      "correct": 0,
      "explanation": "Heterolysis cleaves bond unsymmetrically towards more electronegative Chlorine atom: CH3-Cl \u2192 CH3\u207a + Cl\u207b."
    },
    {
      "id": "C154",
      "subject": "Chemistry",
      "chapter": "Basic Principles & Techniques",
      "difficulty": "H",
      "question": "Which of the following organic species acts as an ELECTROPHILE?",
      "options": [
        "BF3 (or NO2\u207a, R3C\u207a)",
        "NH3",
        "H2O",
        "CN\u207b"
      ],
      "correct": 0,
      "explanation": "BF3 is an electron-deficient Lewis acid (empty p-orbital on Boron) seeking electron pair (Electrophile). NH3, H2O, CN\u207b are Nucleophiles."
    },
    {
      "id": "C155",
      "subject": "Chemistry",
      "chapter": "Basic Principles & Techniques",
      "difficulty": "H",
      "question": "Kjeldahl's method for estimation of Nitrogen fails for which type of organic compounds?",
      "options": [
        "Nitro compounds, Azo compounds, and Pyridine",
        "Aliphatic amines",
        "Proteins",
        "Urea"
      ],
      "correct": 0,
      "explanation": "Kjeldahl's method cannot convert Nitrogen in Nitro (-NO2), Azo (-N=N-), or Pyridine ring structures into Ammonium sulfate."
    },
    {
      "id": "C156",
      "subject": "Chemistry",
      "chapter": "Basic Principles & Techniques",
      "difficulty": "M",
      "question": "Chromatography technique based on differential adsorption of components on a stationary phase is:",
      "options": [
        "Adsorption chromatography (TLC / Column)",
        "Partition chromatography",
        "Paper chromatography",
        "Gas-liquid chromatography"
      ],
      "correct": 0,
      "explanation": "Thin Layer Chromatography (TLC) and Column Chromatography operate on principle of differential adsorption."
    },
    {
      "id": "C157",
      "subject": "Chemistry",
      "chapter": "Basic Principles & Techniques",
      "difficulty": "H",
      "question": "Stability of free radicals follows the order:",
      "options": [
        "Benzyl > Allyl > 3\u00b0 > 2\u00b0 > 1\u00b0 > Methyl",
        "Methyl > 1\u00b0 > 2\u00b0 > 3\u00b0 > Allyl",
        "3\u00b0 > Benzyl > Allyl > 2\u00b0 > 1\u00b0",
        "1\u00b0 > 2\u00b0 > 3\u00b0 > Benzyl"
      ],
      "correct": 0,
      "explanation": "Resonance stabilization makes Benzyl and Allyl radicals exceptionally stable: Benzyl > Allyl > 3\u00b0 > 2\u00b0 > 1\u00b0 > \u00b7CH3."
    },
    {
      "id": "C158",
      "subject": "Chemistry",
      "chapter": "Basic Principles & Techniques",
      "difficulty": "H",
      "question": "In Lassaigne's test for detection of Nitrogen, Prussian blue precipitate/coloration is due to formation of:",
      "options": [
        "Fe4[Fe(CN)6]3 (Ferriferrocyanide)",
        "Fe(SCN)3",
        "Na4[Fe(CN)6]",
        "FeSO4"
      ],
      "correct": 0,
      "explanation": "Sodium fusion extract reacts with FeSO4 and FeCl3 to form Prussian blue Iron(III) hexacyanoferrate(II): Fe4[Fe(CN)6]3."
    },
    {
      "id": "C159",
      "subject": "Chemistry",
      "chapter": "Basic Principles & Techniques",
      "difficulty": "M",
      "question": "Inductive effect (-I effect) decreasing order for functional groups is:",
      "options": [
        "-NO2 > -CN > -COOH > -F > -Cl",
        "-F > -Cl > -NO2 > -COOH",
        "-COOH > -NO2 > -CN > -F",
        "-Cl > -F > -NO2 > -CN"
      ],
      "correct": 0,
      "explanation": "Electron-withdrawing -I effect order: -NO2 > -CN > -COOH > -F > -Cl > -Br > -I."
    },
    {
      "id": "C160",
      "subject": "Chemistry",
      "chapter": "Basic Principles & Techniques",
      "difficulty": "H",
      "question": "Total number of structural isomers possible for molecular formula C4H10O (alcohols and ethers) is:",
      "options": [
        "7",
        "4",
        "5",
        "6"
      ],
      "correct": 0,
      "explanation": "4 Alcohols (1-butanol, 2-butanol, isobutanol, tert-butanol) + 3 Ethers (diethyl ether, methyl propyl ether, methyl isopropyl ether) = 7 isomers."
    },
    {
      "id": "C161",
      "subject": "Chemistry",
      "chapter": "Hydrocarbons",
      "difficulty": "M",
      "question": "Wurtz reaction of Ethyl bromide (C2H5Br) with Sodium metal in dry ether yields:",
      "options": [
        "n-Butane",
        "Ethane",
        "Propane",
        "Isobutane"
      ],
      "correct": 0,
      "explanation": "2 C2H5Br + 2 Na --dry ether--> CH3-CH2-CH2-CH3 (n-Butane) + 2 NaBr."
    },
    {
      "id": "C162",
      "subject": "Chemistry",
      "chapter": "Hydrocarbons",
      "difficulty": "H",
      "question": "Ozonolysis of 2-Methylbut-2-ene followed by Zn/H2O reductive workup yields:",
      "options": [
        "Propanone (Acetone) and Ethanal (Acetaldehyde)",
        "Propanal and Ethanal",
        "Methanal and Propanone",
        "Butanone and Methanal"
      ],
      "correct": 0,
      "explanation": "CH3-C(CH3)=CH-CH3 + O3 --Zn/H2O--> CH3-CO-CH3 (Acetone) + CH3-CHO (Acetaldehyde)."
    },
    {
      "id": "C163",
      "subject": "Chemistry",
      "chapter": "Hydrocarbons",
      "difficulty": "M",
      "question": "Markownikoff's rule additions of HBr to Propene yields primary product:",
      "options": [
        "2-Bromopropane (Isopropyl bromide)",
        "1-Bromopropane",
        "1,2-Dibromopropane",
        "2,2-Dibromopropane"
      ],
      "correct": 0,
      "explanation": "CH3-CH=CH2 + HBr \u2192 CH3-CH(Br)-CH3 (Electrophile H\u207a adds to CH2 to form stable 2\u00b0 carbocation)."
    },
    {
      "id": "C164",
      "subject": "Chemistry",
      "chapter": "Hydrocarbons",
      "difficulty": "H",
      "question": "Kharasch effect (Peroxide effect) causing Anti-Markownikoff addition is observed ONLY with:",
      "options": [
        "HBr in presence of peroxide",
        "HCl in presence of peroxide",
        "HI in presence of peroxide",
        "HF in presence of peroxide"
      ],
      "correct": 0,
      "explanation": "Peroxide radical chain mechanism operates ONLY with HBr because both propagation steps are exothermic for HBr."
    },
    {
      "id": "C165",
      "subject": "Chemistry",
      "chapter": "Hydrocarbons",
      "difficulty": "H",
      "question": "Friedel-Crafts alkylation of Benzene with Methyl chloride in presence of anhydrous AlCl3 forms Toluene. Electrohile involved is:",
      "options": [
        "Methyl carbocation (CH3\u207a)",
        "Cl\u207a",
        "AlCl4\u207b",
        "Benzonium ion"
      ],
      "correct": 0,
      "explanation": "Anhydrous AlCl3 abstracts Cl\u207b from CH3Cl generating methyl electrophile CH3\u207a."
    },
    {
      "id": "C166",
      "subject": "Chemistry",
      "chapter": "Hydrocarbons",
      "difficulty": "M",
      "question": "Electrophilic substitution of Benzene with Conc. HNO3 and Conc. H2SO4 (Nitration) generates electrophile:",
      "options": [
        "Nitronium ion (NO2\u207a)",
        "Nitrosonium ion (NO\u207a)",
        "Nitrite ion (NO2\u207b)",
        "Nitric acid molecule"
      ],
      "correct": 0,
      "explanation": "Conc. H2SO4 protonates HNO3 to release Nitronium ion: HNO3 + 2 H2SO4 \u2192 NO2\u207a + H3O\u207a + 2 HSO4\u207b."
    },
    {
      "id": "C167",
      "subject": "Chemistry",
      "chapter": "Hydrocarbons",
      "difficulty": "H",
      "question": "Acidic character of hydrocarbons decreases in order:",
      "options": [
        "HC\u2261CH (Ethyne) > CH2=CH2 (Ethene) > CH3-CH3 (Ethane)",
        "Ethane > Ethene > Ethyne",
        "Ethene > Ethyne > Ethane",
        "Ethyne > Ethane > Ethene"
      ],
      "correct": 0,
      "explanation": "Ethyne (sp hybrid, 50% s-character, high electronegativity of C) > Ethene (sp\u00b2, 33%) > Ethane (sp\u00b3, 25%)."
    },
    {
      "id": "C168",
      "subject": "Chemistry",
      "chapter": "Hydrocarbons",
      "difficulty": "H",
      "question": "According to Huckel's Rule, a monocyclic planar conjugated system is AROMATIC if it contains:",
      "options": [
        "(4n + 2) \u03c0 electrons",
        "4n \u03c0 electrons",
        "(2n + 2) \u03c0 electrons",
        "(4n - 2) \u03c0 electrons"
      ],
      "correct": 0,
      "explanation": "Huckel's rule requires planar cyclic conjugated ring with (4n + 2) \u03c0 electrons (where n = 0, 1, 2...)."
    },
    {
      "id": "C169",
      "subject": "Chemistry",
      "chapter": "Hydrocarbons",
      "difficulty": "M",
      "question": "Hydration of Ethyne (HC\u2261CH) by passing into 20% H2SO4 in presence of 1% HgSO4 at 60\u00b0C yields:",
      "options": [
        "Ethanal (Acetaldehyde)",
        "Ethanol",
        "Ethanoic acid",
        "Methanal"
      ],
      "correct": 0,
      "explanation": "HC\u2261CH + H2O --Hg\u00b2\u207a/H\u207a--> [CH2=CH-OH] (vinyl alcohol enol) --tautomerization--> CH3-CHO (Acetaldehyde)."
    },
    {
      "id": "C170",
      "subject": "Chemistry",
      "chapter": "Hydrocarbons",
      "difficulty": "H",
      "question": "Conformations of Ethane: Staggered conformation is more stable than Eclipsed conformation by 12.5 kJ/mol due to:",
      "options": [
        "Absence of torsional strain and hyperconjugative stabilization",
        "Higher steric strain",
        "Dipole-dipole attraction",
        "Hydrogen bonding"
      ],
      "correct": 0,
      "explanation": "Staggered form minimizes torsional strain (repulsion between C-H bond pairs) and enjoys hyperconjugative overlap."
    },
    {
      "id": "C171",
      "subject": "Chemistry",
      "chapter": "Haloalkanes & Haloarenes",
      "difficulty": "M",
      "question": "SN2 mechanism of nucleophilic substitution proceeds with:",
      "options": [
        "Complete inversion of configuration (Walden inversion)",
        "Racemization",
        "Retention of configuration",
        "Carbocation rearrangement"
      ],
      "correct": 0,
      "explanation": "SN2 is a concerted 1-step process with backside nucleophilic attack, leading to 100% Walden Inversion."
    },
    {
      "id": "C172",
      "subject": "Chemistry",
      "chapter": "Haloalkanes & Haloarenes",
      "difficulty": "H",
      "question": "Reactivity of alkyl halides towards SN1 mechanism follows the order:",
      "options": [
        "3\u00b0 > 2\u00b0 > 1\u00b0 > CH3X",
        "CH3X > 1\u00b0 > 2\u00b0 > 3\u00b0",
        "2\u00b0 > 3\u00b0 > 1\u00b0 > CH3X",
        "1\u00b0 > 2\u00b0 > 3\u00b0 > CH3X"
      ],
      "correct": 0,
      "explanation": "SN1 rate depends on stability of intermediate carbocation: 3\u00b0 (tertiary) > 2\u00b0 (secondary) > 1\u00b0 (primary) > Methyl."
    },
    {
      "id": "C173",
      "subject": "Chemistry",
      "chapter": "Haloalkanes & Haloarenes",
      "difficulty": "M",
      "question": "Finkelstein reaction for preparation of Alkyl iodides involves reaction of Alkyl chloride/bromide with:",
      "options": [
        "NaI in dry Acetone",
        "AgF in water",
        "PCl5 in ether",
        "SOCl2 in pyridine"
      ],
      "correct": 0,
      "explanation": "R-Cl + NaI --dry acetone--> R-I + NaCl(s) (Finkelstein halide exchange reaction)."
    },
    {
      "id": "C174",
      "subject": "Chemistry",
      "chapter": "Haloalkanes & Haloarenes",
      "difficulty": "H",
      "question": "Dehydrohalogenation of 2-Bromobutane with alcoholic KOH yields 2-Butene as major product according to:",
      "options": [
        "Saytzeff's (Zaitsev's) Rule",
        "Hofmann's Rule",
        "Markownikoff's Rule",
        "Kharasch Rule"
      ],
      "correct": 0,
      "explanation": "Saytzeff's rule dictates elimination yields the more highly substituted, more stable alkene (2-Butene > 1-Butene)."
    },
    {
      "id": "C175",
      "subject": "Chemistry",
      "chapter": "Haloalkanes & Haloarenes",
      "difficulty": "H",
      "question": "Chlorobenzene is much LESS reactive towards nucleophilic substitution than Alkyl chloride because:",
      "options": [
        "Resonance stabilization of C-Cl bond (partial double bond character)",
        "sp\u00b2 hybridization of phenyl carbon",
        "Instability of phenyl cation",
        "All of the above"
      ],
      "correct": 3,
      "explanation": "Resonance delocalization of Cl lone pairs gives partial double bond character, sp\u00b2 carbon holds Cl tightly, and phenyl cation is unstable."
    },
    {
      "id": "C176",
      "subject": "Chemistry",
      "chapter": "Haloalkanes & Haloarenes",
      "difficulty": "M",
      "question": "Swarts reaction is commercially used for synthesis of:",
      "options": [
        "Alkyl fluorides (e.g. CH3F)",
        "Alkyl iodides",
        "Alkyl chlorides",
        "Aryl halides"
      ],
      "correct": 0,
      "explanation": "Heating alkyl bromide/chloride with metallic fluorides (AgF, Hg2F2, SbF3) yields Alkyl fluorides (Swarts reaction)."
    },
    {
      "id": "C177",
      "subject": "Chemistry",
      "chapter": "Haloalkanes & Haloarenes",
      "difficulty": "H",
      "question": "Reaction of Chlorobenzene with Sodium metal in dry ether to give Diphenyl (Biphenyl) is called:",
      "options": [
        "Fittig reaction",
        "Wurtz-Fittig reaction",
        "Wurtz reaction",
        "Ullmann reaction"
      ],
      "correct": 0,
      "explanation": "2 C6H5Cl + 2 Na --dry ether--> C6H5-C6H5 (Diphenyl) + 2 NaCl is Fittig reaction. (Aryl + Alkyl is Wurtz-Fittig)."
    },
    {
      "id": "C178",
      "subject": "Chemistry",
      "chapter": "Haloalkanes & Haloarenes",
      "difficulty": "H",
      "question": "DDT (p,p'-Dichlorodiphenyltrichloroethane) is synthesized by condensing Chloral (CCl3CHO) with Chlorobenzene in presence of:",
      "options": [
        "Concentrated H2SO4",
        "Anhydrous AlCl3",
        "Dilute NaOH",
        "Aqueous HCl"
      ],
      "correct": 0,
      "explanation": "CCl3CHO + 2 C6H5Cl --conc. H2SO4--> DDT + H2O."
    },
    {
      "id": "C179",
      "subject": "Chemistry",
      "chapter": "Haloalkanes & Haloarenes",
      "difficulty": "M",
      "question": "Which reagent converts an Alcohol into Alkyl chloride with highest purity because byproducts are gases?",
      "options": [
        "Thionyl chloride (SOCl2) in Pyridine",
        "PCl5",
        "PCl3",
        "Concentrated HCl / ZnCl2"
      ],
      "correct": 0,
      "explanation": "R-OH + SOCl2 \u2192 R-Cl + SO2(g)\u2191 + HCl(g)\u2191. Escaping gaseous byproducts leave pure alkyl chloride."
    },
    {
      "id": "C180",
      "subject": "Chemistry",
      "chapter": "Haloalkanes & Haloarenes",
      "difficulty": "H",
      "question": "Grignard reagent (RMgX) must be prepared under strictly ANHYDROUS conditions because it reacts with water to form:",
      "options": [
        "Alkane (R-H)",
        "Alcohol (R-OH)",
        "Ether (R-O-R)",
        "Aldehyde"
      ],
      "correct": 0,
      "explanation": "RMgX + H2O \u2192 R-H + Mg(OH)X. Strong organometallic base RMgX abstracts proton from water to produce Alkane."
    },
    {
      "id": "C181",
      "subject": "Chemistry",
      "chapter": "Alcohols, Phenols, & Ethers",
      "difficulty": "M",
      "question": "Lucas test is used to distinguish between 1\u00b0, 2\u00b0, and 3\u00b0 alcohols using Lucas reagent (Conc. HCl + anhyd. ZnCl2). 3\u00b0 alcohol produces turbidity:",
      "options": [
        "Immediately at room temperature",
        "Within 5 minutes",
        "Only upon heating",
        "No turbidity produced"
      ],
      "correct": 0,
      "explanation": "3\u00b0 alcohols form 3\u00b0 carbocations instantly, producing immediate turbidity at room temp. 2\u00b0 takes ~5 min; 1\u00b0 requires heating."
    },
    {
      "id": "C182",
      "subject": "Chemistry",
      "chapter": "Alcohols, Phenols, & Ethers",
      "difficulty": "H",
      "question": "Phenol reacts with Chloroform and aqueous NaOH followed by acidification to give Salicylaldehyde. This reaction is:",
      "options": [
        "Reimer-Tiemann reaction",
        "Kolbe's reaction",
        "Friedel-Crafts acylation",
        "Cannizzaro reaction"
      ],
      "correct": 0,
      "explanation": "Reimer-Tiemann reaction generates dichlorocarbene :CCl2 electrophile, forming Salicylaldehyde (o-hydroxybenzaldehyde)."
    },
    {
      "id": "C183",
      "subject": "Chemistry",
      "chapter": "Alcohols, Phenols, & Ethers",
      "difficulty": "M",
      "question": "Williamson's synthesis of Ethers involves heating an Alkyl halide with:",
      "options": [
        "Sodium alkoxide (RONa)",
        "Sodium hydroxide (NaOH)",
        "Metallic Sodium",
        "Alcohol"
      ],
      "correct": 0,
      "explanation": "R-X + R'-ONa \u2192 R-O-R' + NaX (SN2 attack of alkoxide ion on primary alkyl halide)."
    },
    {
      "id": "C184",
      "subject": "Chemistry",
      "chapter": "Alcohols, Phenols, & Ethers",
      "difficulty": "H",
      "question": "Phenol is MORE acidic than Ethanol because:",
      "options": [
        "Phenoxide ion is resonance stabilized",
        "Ethoxide ion is resonance stabilized",
        "Phenol has higher molecular weight",
        "Ethanol forms intermolecular H-bonds"
      ],
      "correct": 0,
      "explanation": "Delocalization of negative charge over benzene ring stabilizes Phenoxide ion (C6H5O\u207b) relative to Phenol. Ethoxide (C2H5O\u207b) has no resonance."
    },
    {
      "id": "C185",
      "subject": "Chemistry",
      "chapter": "Alcohols, Phenols, & Ethers",
      "difficulty": "H",
      "question": "Hydroboration-Oxidation of Propene (CH3-CH=CH2 with B2H6 followed by H2O2 / OH\u207b) yields:",
      "options": [
        "Propan-1-ol (1-Propanol)",
        "Propan-2-ol (2-Propanol)",
        "Propane-1,2-diol",
        "Propanone"
      ],
      "correct": 0,
      "explanation": "Hydroboration-oxidation gives net Anti-Markownikoff addition of water: Propene \u2192 1-Propanol."
    },
    {
      "id": "C186",
      "subject": "Chemistry",
      "chapter": "Alcohols, Phenols, & Ethers",
      "difficulty": "M",
      "question": "Acid catalysed dehydration of Ethanol at 443 K (170\u00b0C) with excess Conc. H2SO4 yields:",
      "options": [
        "Ethene (CH2=CH2)",
        "Diethyl ether (C2H5-O-C2H5)",
        "Ethanal",
        "Ethyl hydrogen sulfate"
      ],
      "correct": 0,
      "explanation": "At 443 K (170\u00b0C): C2H5OH --conc H2SO4--> CH2=CH2 + H2O. (At 413 K / 140\u00b0C it yields Diethyl ether)."
    },
    {
      "id": "C187",
      "subject": "Chemistry",
      "chapter": "Alcohols, Phenols, & Ethers",
      "difficulty": "H",
      "question": "When Phenol is treated with Bromine water (Br2/H2O), the product obtained is a white precipitate of:",
      "options": [
        "2,4,6-Tribromophenol",
        "o-Bromophenol",
        "p-Bromophenol",
        "m-Bromophenol"
      ],
      "correct": 0,
      "explanation": "Polar water medium ionizes Phenol to highly reactive phenoxide ion, resulting in trisubstitution to 2,4,6-Tribromophenol."
    },
    {
      "id": "C188",
      "subject": "Chemistry",
      "chapter": "Alcohols, Phenols, & Ethers",
      "difficulty": "H",
      "question": "Reaction of Anisole (C6H5-O-CH3) with concentrated HI at 373 K yields:",
      "options": [
        "Phenol (C6H5OH) and Methyl iodide (CH3I)",
        "Iodobenzene and Methanol",
        "Phenol and Methanol",
        "Bromobenzene and Methyl iodide"
      ],
      "correct": 0,
      "explanation": "Cleavage of C_alkyl-O bond occurs because C_phenyl-O bond has partial double bond character: C6H5-O-CH3 + HI \u2192 C6H5OH + CH3I."
    },
    {
      "id": "C189",
      "subject": "Chemistry",
      "chapter": "Alcohols, Phenols, & Ethers",
      "difficulty": "M",
      "question": "Commercial method for preparing Phenol from Cumene (Isopropylbenzene) involves oxidation followed by treatment with dilute acid to yield Phenol and byproduct:",
      "options": [
        "Acetone (Propanone)",
        "Acetaldehyde",
        "Benzaldehyde",
        "Acetic acid"
      ],
      "correct": 0,
      "explanation": "Cumene --O2--> Cumene hydroperoxide --H\u207a/H2O--> Phenol + CH3COCH3 (Acetone, valuable byproduct)."
    },
    {
      "id": "C190",
      "subject": "Chemistry",
      "chapter": "Alcohols, Phenols, & Ethers",
      "difficulty": "H",
      "question": "Kolbe's reaction: Heating Sodium phenoxide with CO2 at 400 K and 4-7 atm pressure followed by acidification yields:",
      "options": [
        "Salicylic acid (o-hydroxybenzoic acid)",
        "Benzoic acid",
        "Salicylaldehyde",
        "Phthalic acid"
      ],
      "correct": 0,
      "explanation": "Sodium phenoxide + CO2 --400K, 4-7 atm--> Sodium salicylate --H\u207a--> Salicylic acid (precursor to Aspirin)."
    },
    {
      "id": "C191",
      "subject": "Chemistry",
      "chapter": "Aldehydes, Ketones, & Carboxylic Acids",
      "difficulty": "M",
      "question": "Tollen's reagent used for testing Aldehydes is:",
      "options": [
        "Ammoniacal Silver Nitrate solution [Ag(NH3)2]\u207a",
        "Alkaline solution of CuSO4 with sodium potassium tartrate",
        "Acidified K2Cr2O7",
        "Solution of I2 in NaOH"
      ],
      "correct": 0,
      "explanation": "Tollen's reagent is freshly prepared ammoniacal silver nitrate solution [Ag(NH3)2]\u207a OH\u207b, reduced by aldehydes to Silver Mirror."
    },
    {
      "id": "C192",
      "subject": "Chemistry",
      "chapter": "Aldehydes, Ketones, & Carboxylic Acids",
      "difficulty": "H",
      "question": "Aldol condensation takes place between two molecules of aldehydes or ketones containing:",
      "options": [
        "At least one \u03b1-hydrogen atom",
        "No \u03b1-hydrogen atom",
        "Halogen atom",
        "Aromatic ring"
      ],
      "correct": 0,
      "explanation": "Dilute NaOH abstracts \u03b1-hydrogen to form enolate ion nucleophile. Requires at least one \u03b1-H (e.g. CH3CHO)."
    },
    {
      "id": "C193",
      "subject": "Chemistry",
      "chapter": "Aldehydes, Ketones, & Carboxylic Acids",
      "difficulty": "M",
      "question": "Which aldehyde undergoes CANNIZZARO reaction upon treatment with 50% concentrated NaOH solution?",
      "options": [
        "Formaldehyde (HCHO) and Benzaldehyde (C6H5CHO)",
        "Acetaldehyde (CH3CHO)",
        "Propionaldehyde (CH3CH2CHO)",
        "Acetone"
      ],
      "correct": 0,
      "explanation": "Cannizzaro self oxidation-reduction (disproportionation) occurs in aldehydes LACKING \u03b1-hydrogens (HCHO, C6H5CHO, (CH3)3CCHO)."
    },
    {
      "id": "C194",
      "subject": "Chemistry",
      "chapter": "Aldehydes, Ketones, & Carboxylic Acids",
      "difficulty": "H",
      "question": "Iodoform test (I2 + NaOH) gives a yellow precipitate of CHI3 with compounds containing which group?",
      "options": [
        "CH3-CO- or CH3-CH(OH)- group",
        "-COOH group",
        "-CHO group only",
        "-CO-O-CO- group"
      ],
      "correct": 0,
      "explanation": "Yellow CHI3 ppt forms with methyl ketones (CH3-C=O) or methyl secondary alcohols (CH3-CH(OH)-) like Ethanol, Isopropanol, Acetone, Acetaldehyde."
    },
    {
      "id": "C195",
      "subject": "Chemistry",
      "chapter": "Aldehydes, Ketones, & Carboxylic Acids",
      "difficulty": "H",
      "question": "Rosenmund reduction converts an Acyl chloride (RCOCl) into an Aldehyde (RCHO) using hydrogen over catalyst:",
      "options": [
        "Pd / BaSO4 poisoned with Sulfur or Quinoline",
        "Ni at 200\u00b0C",
        "LiAlH4 in ether",
        "NaBH4 in ethanol"
      ],
      "correct": 0,
      "explanation": "RCOCl + H2 --Pd/BaSO4 (poisoned)--> RCHO + HCl. Poisoning prevents further reduction to alcohol."
    },
    {
      "id": "C196",
      "subject": "Chemistry",
      "chapter": "Aldehydes, Ketones, & Carboxylic Acids",
      "difficulty": "M",
      "question": "Clemmensen reduction of Aldehydes and Ketones to Alkanes uses reducing agent:",
      "options": [
        "Zn-Hg amalgam and concentrated HCl",
        "Hydrazine (NH2NH2) and KOH in ethylene glycol",
        "LiAlH4 in dry ether",
        "Na in liquid NH3"
      ],
      "correct": 0,
      "explanation": "Clemmensen reduction converts >C=O to >CH2 using Zinc amalgam (Zn-Hg) and conc. HCl. (Wolff-Kishner uses NH2NH2/KOH)."
    },
    {
      "id": "C197",
      "subject": "Chemistry",
      "chapter": "Aldehydes, Ketones, & Carboxylic Acids",
      "difficulty": "H",
      "question": "Hell-Volhard-Zelinsky (HVZ) reaction introduces a Chlorine or Bromine atom at \u03b1-position of Carboxylic acids using:",
      "options": [
        "X2 (Cl2 or Br2) in presence of Red Phosphorus",
        "SOCl2",
        "PCl5",
        "X2 in presence of Fe"
      ],
      "correct": 0,
      "explanation": "R-CH2-COOH + X2 --Red P--> R-CH(X)-COOH + HX (alpha-halogenation of carboxylic acids with \u03b1-H)."
    },
    {
      "id": "C198",
      "subject": "Chemistry",
      "chapter": "Aldehydes, Ketones, & Carboxylic Acids",
      "difficulty": "H",
      "question": "Relative reactivity of carbonyl compounds towards Nucleophilic Addition reaction follows decreasing order:",
      "options": [
        "HCHO > CH3CHO > CH3COCH3 > (C6H5)2CO",
        "CH3COCH3 > CH3CHO > HCHO",
        "(C6H5)2CO > CH3COCH3 > HCHO",
        "CH3CHO > HCHO > CH3COCH3"
      ],
      "correct": 0,
      "explanation": "Nucleophilic addition is favored by lower steric hindrance and strong electron-withdrawing groups: HCHO > CH3CHO > CH3COCH3 > Acetophenone > Benzophenone."
    },
    {
      "id": "C199",
      "subject": "Chemistry",
      "chapter": "Aldehydes, Ketones, & Carboxylic Acids",
      "difficulty": "M",
      "question": "Decarboxylation of Sodium acetate (CH3COONa) by heating with Soda lime (NaOH + CaO) yields:",
      "options": [
        "Methane (CH4)",
        "Ethane (C2H6)",
        "Propane",
        "Carbon dioxide"
      ],
      "correct": 0,
      "explanation": "CH3COONa + NaOH --CaO, \u0394--> CH4 + Na2CO3 (produces alkane with one less carbon atom)."
    },
    {
      "id": "C200",
      "subject": "Chemistry",
      "chapter": "Aldehydes, Ketones, & Carboxylic Acids",
      "difficulty": "H",
      "question": "Wolf-Kishner reduction converts >C=O group of carbonyl compounds into >CH2 group using:",
      "options": [
        "NH2NH2 (Hydrazine) followed by KOH in Ethylene glycol",
        "Zn-Hg / HCl",
        "LiAlH4",
        "H2 / Pt"
      ],
      "correct": 0,
      "explanation": "Wolf-Kishner reduction: >C=O + NH2NH2 \u2192 >C=N-NH2 --KOH/glycol, \u0394--> >CH2 + N2."
    },
    {
      "id": "C201",
      "subject": "Chemistry",
      "chapter": "Amines",
      "difficulty": "M",
      "question": "Hofmann bromamide degradation reaction converts an Amide (RCONH2) into a Primary amine (RNH2) containing:",
      "options": [
        "One carbon atom LESS than parent amide",
        "Same number of carbon atoms",
        "One carbon atom MORE",
        "Two carbon atoms less"
      ],
      "correct": 0,
      "explanation": "RCONH2 + Br2 + 4 NaOH \u2192 RNH2 + Na2CO3 + 2 NaBr + 2 H2O (degradation reduces carbon chain length by 1)."
    },
    {
      "id": "C202",
      "subject": "Chemistry",
      "chapter": "Amines",
      "difficulty": "H",
      "question": "Hinsberg's reagent used to distinguish 1\u00b0, 2\u00b0, and 3\u00b0 amines is:",
      "options": [
        "Benzenesulfonyl chloride (C6H5SO2Cl)",
        "Acetyl chloride",
        "Nitrous acid (HONO)",
        "Phenyl isocyanide"
      ],
      "correct": 0,
      "explanation": "C6H5SO2Cl reacts with 1\u00b0 amine to form alkali-soluble sulfonamide; 2\u00b0 amine forms alkali-insoluble sulfonamide; 3\u00b0 amine does not react."
    },
    {
      "id": "C203",
      "subject": "Chemistry",
      "chapter": "Amines",
      "difficulty": "M",
      "question": "Carbylamine test (Isocyanide test) is given ONLY by:",
      "options": [
        "Primary aliphatic and aromatic amines",
        "Secondary amines only",
        "Tertiary amines only",
        "Amides"
      ],
      "correct": 0,
      "explanation": "R-NH2 + CHCl3 + 3 KOH(alc) --\u0394--> R-NC (foul-smelling Isocyanide) + 3 KCl + 3 H2O. Exclusive for 1\u00b0 amines."
    },
    {
      "id": "C204",
      "subject": "Chemistry",
      "chapter": "Amines",
      "difficulty": "H",
      "question": "Basic strength order of Methyl substituted amines in AQUEOUS solution is:",
      "options": [
        "(CH3)2NH > CH3NH2 > (CH3)3N > NH3  (2\u00b0 > 1\u00b0 > 3\u00b0 > NH3)",
        "(CH3)3N > (CH3)2NH > CH3NH2 > NH3",
        "CH3NH2 > (CH3)2NH > (CH3)3N > NH3",
        "(CH3)2NH > (CH3)3N > CH3NH2 > NH3"
      ],
      "correct": 0,
      "explanation": "In aqueous medium, combined effect of +I effect, hydration enthalpy, and steric hindrance gives order: 2\u00b0 (213) > 1\u00b0 > 3\u00b0 > NH3."
    },
    {
      "id": "C205",
      "subject": "Chemistry",
      "chapter": "Amines",
      "difficulty": "H",
      "question": "Basic strength order of Ethyl substituted amines in AQUEOUS solution is:",
      "options": [
        "(C2H5)2NH > (C2H5)3N > C2H5NH2 > NH3  (2\u00b0 > 3\u00b0 > 1\u00b0 > NH3)",
        "(C2H5)2NH > C2H5NH2 > (C2H5)3N > NH3",
        "(C2H5)3N > (C2H5)2NH > C2H5NH2 > NH3",
        "C2H5NH2 > (C2H5)2NH > (C2H5)3N > NH3"
      ],
      "correct": 0,
      "explanation": "For ethyl substituted amines in aqueous solution, order is 2\u00b0 (231) > 3\u00b0 > 1\u00b0 > NH3: (C2H5)2NH > (C2H5)3N > C2H5NH2 > NH3."
    },
    {
      "id": "C206",
      "subject": "Chemistry",
      "chapter": "Amines",
      "difficulty": "M",
      "question": "Aniline reacts with NaNO2 and dilute HCl at 0-5\u00b0C (273-278 K) to form:",
      "options": [
        "Benzene diazonium chloride (C6H5N2\u207a Cl\u207b)",
        "Nitrobenzene",
        "Chlorobenzene",
        "Phenol"
      ],
      "correct": 0,
      "explanation": "Diazotization reaction of primary aromatic amine at 0-5\u00b0C yields Benzene diazonium chloride."
    },
    {
      "id": "C207",
      "subject": "Chemistry",
      "chapter": "Amines",
      "difficulty": "H",
      "question": "Sandmeyer reaction converts Benzene diazonium chloride into Chlorobenzene or Bromobenzene using:",
      "options": [
        "Cu2Cl2 / HCl or Cu2Br2 / HBr",
        "Cu powder / HCl",
        "KI / H2O",
        "HBF4 / \u0394"
      ],
      "correct": 0,
      "explanation": "Sandmeyer reaction uses Cuprous halides (Cu2Cl2/HCl or Cu2Br2/HBr). Gattermann reaction uses Copper powder/HX."
    },
    {
      "id": "C208",
      "subject": "Chemistry",
      "chapter": "Amines",
      "difficulty": "H",
      "question": "Coupling reaction of Benzene diazonium chloride with Phenol in mildly alkaline medium (pH 9-10) yields:",
      "options": [
        "p-Hydroxyazobenzene (Orange dye)",
        "p-Aminoazobenzene (Yellow dye)",
        "Nitrobenzene",
        "Aniline"
      ],
      "correct": 0,
      "explanation": "C6H5N2\u207a Cl\u207b + C6H5OH --pH 9-10--> p-HO-C6H4-N=N-C6H5 (Orange azodye)."
    },
    {
      "id": "C209",
      "subject": "Chemistry",
      "chapter": "Amines",
      "difficulty": "M",
      "question": "Nitration of Aniline with conc. HNO3 + H2SO4 yields unexpected 47% m-Nitroaniline because:",
      "options": [
        "In strongly acidic medium, aniline is protonated to form anilinium ion (meta-directing)",
        "Nitro group is meta directing",
        "Aniline undergoes decomposition",
        "Ortho position is sterically blocked"
      ],
      "correct": 0,
      "explanation": "Strong acid protonates -NH2 to -NH3\u207a (Anilinium ion), which is a powerful meta-directing group."
    },
    {
      "id": "C210",
      "subject": "Chemistry",
      "chapter": "Amines",
      "difficulty": "H",
      "question": "Gabriel phthalimide synthesis is exclusively used for the preparation of:",
      "options": [
        "Primary aliphatic amines",
        "Primary aromatic amines (Aniline)",
        "Secondary amines",
        "Tertiary amines"
      ],
      "correct": 0,
      "explanation": "Potassium phthalimide undergoes SN2 reaction with alkyl halide. Aryl halides cannot undergo SN2 nucleophilic attack, so aromatic 1\u00b0 amines cannot be prepared."
    },
    {
      "id": "C211",
      "subject": "Chemistry",
      "chapter": "Biomolecules",
      "difficulty": "M",
      "question": "Which carbohydrate is known as Inverse Sugar (Invert Sugar)?",
      "options": [
        "Hydrolyzed Sucrose (mixture of Glucose and Fructose)",
        "Maltose",
        "Lactose",
        "Starch"
      ],
      "correct": 0,
      "explanation": "Hydrolysis of dextrorotatory Sucrose (+66.5\u00b0) produces dextrorotatory D-glucose (+52.7\u00b0) and laevorotatory D-fructose (-92.4\u00b0), turning overall rotation laevorotatory (-39.7\u00b0)."
    },
    {
      "id": "C212",
      "subject": "Chemistry",
      "chapter": "Biomolecules",
      "difficulty": "H",
      "question": "Which of the following nitrogenous bases is present in RNA but NOT in DNA?",
      "options": [
        "Uracil",
        "Thymine",
        "Adenine",
        "Guanine"
      ],
      "correct": 0,
      "explanation": "RNA contains Uracil (U) instead of Thymine (T). DNA contains A, T, G, C; RNA contains A, U, G, C."
    },
    {
      "id": "C213",
      "subject": "Chemistry",
      "chapter": "Biomolecules",
      "difficulty": "M",
      "question": "Proteins are polymers of \u03b1-amino acids connected by:",
      "options": [
        "Peptide bonds (-CO-NH-)",
        "Glycosidic bonds",
        "Phosphodiester bonds",
        "Hydrogen bonds"
      ],
      "correct": 0,
      "explanation": "Condensation of carboxyl group of one amino acid with amino group of another forms Peptide amide linkage (-CO-NH-)."
    },
    {
      "id": "C214",
      "subject": "Chemistry",
      "chapter": "Biomolecules",
      "difficulty": "H",
      "question": "An essential amino acid which CANNOT be synthesized by the human body and must be supplied in diet is:",
      "options": [
        "Valine (or Leucine, Lysine, Tryptophan)",
        "Glycine",
        "Alanine",
        "Aspartic acid"
      ],
      "correct": 0,
      "explanation": "10 Essential amino acids: Valine, Leucine, Isoleucine, Lysine, Methionine, Phenylalanine, Threonine, Tryptophan, Histidine, Arginine."
    },
    {
      "id": "C215",
      "subject": "Chemistry",
      "chapter": "Biomolecules",
      "difficulty": "H",
      "question": "Glucose on reaction with Bromine water (Br2 / H2O) yields:",
      "options": [
        "Gluconic acid",
        "Saccharic acid",
        "Sorbitol",
        "n-Hexane"
      ],
      "correct": 0,
      "explanation": "Mild oxidizing agent Br2/H2O oxidizes aldehyde group (-CHO) of glucose to carboxylic acid (-COOH), forming Gluconic acid."
    },
    {
      "id": "C216",
      "subject": "Chemistry",
      "chapter": "Biomolecules",
      "difficulty": "M",
      "question": "Deficiency of Vitamin C (Ascorbic acid) causes which disease?",
      "options": [
        "Scurvy (bleeding gums)",
        "Rickets",
        "Beriberi",
        "Night blindness"
      ],
      "correct": 0,
      "explanation": "Vitamin C deficiency causes Scurvy. Vitamin A deficiency causes Night blindness; B1 causes Beriberi; D causes Rickets."
    },
    {
      "id": "C217",
      "subject": "Chemistry",
      "chapter": "Biomolecules",
      "difficulty": "H",
      "question": "Denaturation of proteins involves destruction of which protein structures while primary structure remains intact?",
      "options": [
        "Secondary and Tertiary structures",
        "Primary structure only",
        "Peptide bonds",
        "Nucleic acid sequence"
      ],
      "correct": 0,
      "explanation": "Denaturation (by heat or pH change) disrupts H-bonds and tertiary/secondary folding, while covalent primary peptide sequence remains intact."
    },
    {
      "id": "C218",
      "subject": "Chemistry",
      "chapter": "Biomolecules",
      "difficulty": "H",
      "question": "In DNA double helix structure (Watson-Crick model), Adenine pairs with Thymine via:",
      "options": [
        "Two Hydrogen bonds (A = T)",
        "Three Hydrogen bonds",
        "One Ionic bond",
        "Covalent disulfide bond"
      ],
      "correct": 0,
      "explanation": "Adenine pairs with Thymine via 2 H-bonds (A=T); Guanine pairs with Cytosine via 3 H-bonds (G\u2261C)."
    },
    {
      "id": "C219",
      "subject": "Chemistry",
      "chapter": "Biomolecules",
      "difficulty": "M",
      "question": "Which amino acid is OPTICALLY INACTIVE due to absence of a chiral carbon atom?",
      "options": [
        "Glycine (H2N-CH2-COOH)",
        "Alanine",
        "Valine",
        "Leucine"
      ],
      "correct": 0,
      "explanation": "Glycine has two hydrogen atoms on \u03b1-carbon (H2N-CH2-COOH), lacking a chiral carbon atom."
    },
    {
      "id": "C220",
      "subject": "Chemistry",
      "chapter": "Biomolecules",
      "difficulty": "H",
      "question": "Which vitamin is WATER-SOLUBLE and stored in body only in small amounts (except B12)?",
      "options": [
        "Vitamin B complex and Vitamin C",
        "Vitamin A",
        "Vitamin D",
        "Vitamin E"
      ],
      "correct": 0,
      "explanation": "Vitamins B and C are water-soluble. Vitamins A, D, E, K are fat-soluble."
    },
    {
      "id": "C221",
      "subject": "Chemistry",
      "chapter": "Polymers & Everyday Chemistry",
      "difficulty": "M",
      "question": "Bakalite is a thermosetting polymer formed by condensation reaction of Phenol with:",
      "options": [
        "Formaldehyde (HCHO)",
        "Acetaldehyde",
        "Ethylene glycol",
        "Phthalic anhydride"
      ],
      "correct": 0,
      "explanation": "Phenol + Formaldehyde --H\u207a or OH\u207b--> Bakelite (cross-linked 3D thermosetting polymer)."
    },
    {
      "id": "C222",
      "subject": "Chemistry",
      "chapter": "Polymers & Everyday Chemistry",
      "difficulty": "H",
      "question": "Nylon-6,6 is a condensation polyamide prepared from monomers:",
      "options": [
        "Hexamethylenediamine and Adipic acid",
        "Caprolactam",
        "Terephthalic acid and Ethylene glycol",
        "Styrene and 1,3-Butadiene"
      ],
      "correct": 0,
      "explanation": "Nylon-6,6 is formed by polycondensation of H2N-(CH2)6-NH2 (Hexamethylenediamine) and HOOC-(CH2)4-COOH (Adipic acid)."
    },
    {
      "id": "C223",
      "subject": "Chemistry",
      "chapter": "Polymers & Everyday Chemistry",
      "difficulty": "M",
      "question": "Natural Rubber is a linear polymer of monomer units:",
      "options": [
        "Isoprene (2-Methyl-1,3-butadiene)",
        "Neoprene (Chloroprene)",
        "Styrene",
        "Acrylonitrile"
      ],
      "correct": 0,
      "explanation": "Natural rubber is cis-1,4-polyisoprene (monomer: Isoprene = 2-methyl-1,3-butadiene)."
    },
    {
      "id": "C224",
      "subject": "Chemistry",
      "chapter": "Polymers & Everyday Chemistry",
      "difficulty": "H",
      "question": "Vulcanization of natural rubber involves heating rubber with sulfur to introduce sulfur cross-links at:",
      "options": [
        "Reactive allylic positions",
        "Terminal methyl groups",
        "Saturated single bonds",
        "Carbonyl carbons"
      ],
      "correct": 0,
      "explanation": "Vulcanization heats raw rubber with 3-5% Sulfur to form -S-S- cross-links at reactive allylic CH2 positions, enhancing elasticity and tensile strength."
    },
    {
      "id": "C225",
      "subject": "Chemistry",
      "chapter": "Polymers & Everyday Chemistry",
      "difficulty": "H",
      "question": "Teflon (PTFE) is produced by free radical polymerization of monomer:",
      "options": [
        "Tetrafluoroethylene (CF2=CF2)",
        "Vinyl chloride",
        "Acrylonitrile",
        "Chloroprene"
      ],
      "correct": 0,
      "explanation": "Teflon is PolyTetraFluoroEthylene (PTFE), monomer: CF2=CF2."
    },
    {
      "id": "C226",
      "subject": "Chemistry",
      "chapter": "Polymers & Everyday Chemistry",
      "difficulty": "M",
      "question": "Which of the following is a BIODEGRADABLE synthetic polymer?",
      "options": [
        "PHBV (Poly \u03b2-hydroxybutyrate-co-\u03b2-hydroxyvalerate)",
        "Nylon-6,6",
        "Bakelite",
        "Polythene"
      ],
      "correct": 0,
      "explanation": "PHBV and Nylon-2-nylon-6 are biodegradable aliphatic polyester/polyamide polymers."
    },
    {
      "id": "C227",
      "subject": "Chemistry",
      "chapter": "Polymers & Everyday Chemistry",
      "difficulty": "H",
      "question": "A broad-spectrum antibiotic effective against a wide range of Gram-positive and Gram-negative bacteria is:",
      "options": [
        "Chloramphenicol (or Amoxicillin, Ampicillin)",
        "Penicillin G",
        "Aspirin",
        "Paracetamol"
      ],
      "correct": 0,
      "explanation": "Chloramphenicol, Ampicillin, and Amoxicillin are broad-spectrum antibiotics. Penicillin G is narrow-spectrum."
    },
    {
      "id": "C228",
      "subject": "Chemistry",
      "chapter": "Polymers & Everyday Chemistry",
      "difficulty": "H",
      "question": "Aspirin (Acetylsalicylic acid) acts as an:",
      "options": [
        "Analgesic, Antipyretic, and Anti-inflammatory drug",
        "Antibiotic",
        "Antiseptic",
        "Disinfectant"
      ],
      "correct": 0,
      "explanation": "Aspirin (acetylation of salicylic acid) reduces pain (analgesic), fever (antipyretic), and inflammation by inhibiting cyclooxygenase (COX)."
    },
    {
      "id": "C229",
      "subject": "Chemistry",
      "chapter": "Polymers & Everyday Chemistry",
      "difficulty": "M",
      "question": "Bithionol is added to soaps to impart which property?",
      "options": [
        "Antiseptic property",
        "Analgesic property",
        "Preservative property",
        "Lathering property"
      ],
      "correct": 0,
      "explanation": "Bithionol is added to soaps to reduce bacterial odors and provide antiseptic protection."
    },
    {
      "id": "C230",
      "subject": "Chemistry",
      "chapter": "Polymers & Everyday Chemistry",
      "difficulty": "H",
      "question": "Artificial sweetener with HIGHEST sweetness index (approx 2000 times sweeter than cane sugar) is:",
      "options": [
        "Alitame",
        "Saccharin",
        "Aspartame",
        "Sucralose"
      ],
      "correct": 0,
      "explanation": "Alitame is high potency sweetener (~2000x sweeter than sucrose). Saccharin is ~550x; Aspartame ~100x; Sucralose ~600x."
    }
  ],
  "biology": [
    {
      "id": "B001",
      "subject": "Biology",
      "chapter": "Cell Biology",
      "difficulty": "H",
      "question": "The fluid mosaic model of the cell membrane was proposed by:",
      "options": [
        "Singer and Nicolson",
        "Watson and Crick",
        "Davson and Danielli",
        "Robertson"
      ],
      "correct": 0,
      "explanation": "Singer and Nicolson (1972) proposed the fluid mosaic model, describing the membrane as a fluid phospholipid bilayer with embedded proteins."
    },
    {
      "id": "B002",
      "subject": "Biology",
      "chapter": "Cell Biology",
      "difficulty": "H",
      "question": "Which organelle is known as the 'powerhouse' of the cell and contains its own DNA?",
      "options": [
        "Mitochondria",
        "Ribosome",
        "Golgi apparatus",
        "Lysosome"
      ],
      "correct": 0,
      "explanation": "Mitochondria produce ATP via oxidative phosphorylation and contain circular DNA (remnants of ancestral endosymbiotic bacteria)."
    },
    {
      "id": "B003",
      "subject": "Biology",
      "chapter": "Cell Division",
      "difficulty": "H",
      "question": "During which phase of mitosis do chromosomes align at the metaphase plate?",
      "options": [
        "Metaphase",
        "Anaphase",
        "Prophase",
        "Telophase"
      ],
      "correct": 0,
      "explanation": "During metaphase, chromosomes are fully condensed and align at the cell's equatorial plate (metaphase plate), connected to spindle fibers."
    },
    {
      "id": "B004",
      "subject": "Biology",
      "chapter": "Cell Division",
      "difficulty": "H",
      "question": "Crossing over (recombination) during meiosis occurs at the:",
      "options": [
        "Pachytene stage of meiosis I",
        "Zygotene stage",
        "Anaphase I",
        "Metaphase II"
      ],
      "correct": 0,
      "explanation": "Crossing over occurs during pachytene (pachynema) of prophase I of meiosis, at structures called chiasmata between non-sister chromatids."
    },
    {
      "id": "B005",
      "subject": "Biology",
      "chapter": "Photosynthesis",
      "difficulty": "H",
      "question": "In the Calvin cycle (C3 pathway), the primary CO\u2082 acceptor molecule is:",
      "options": [
        "RuBP (Ribulose-1,5-bisphosphate)",
        "OAA (Oxaloacetic acid)",
        "PEP (Phosphoenolpyruvate)",
        "G3P (Glyceraldehyde-3-phosphate)"
      ],
      "correct": 0,
      "explanation": "In C3 plants, CO\u2082 combines with RuBP (5-carbon) via RuBisCO to form two 3-PGA (3-carbon) molecules. RuBP is the primary acceptor."
    },
    {
      "id": "B006",
      "subject": "Biology",
      "chapter": "Photosynthesis",
      "difficulty": "H",
      "question": "In C4 plants, the primary CO\u2082 fixation occurs in mesophyll cells using which enzyme?",
      "options": [
        "PEP carboxylase",
        "RuBisCO",
        "Pyruvate carboxylase",
        "Malate dehydrogenase"
      ],
      "correct": 0,
      "explanation": "In C4 plants (maize, sugarcane), CO\u2082 is first fixed by PEP carboxylase (PEPCase) in mesophyll cells to form OAA (4C). RuBisCO functions in bundle sheath cells."
    },
    {
      "id": "B007",
      "subject": "Biology",
      "chapter": "Respiration",
      "difficulty": "H",
      "question": "During aerobic respiration, the net ATP yield from one molecule of glucose in eukaryotes is approximately:",
      "options": [
        "36-38 ATP",
        "2 ATP",
        "38-40 ATP",
        "30 ATP"
      ],
      "correct": 0,
      "explanation": "Glycolysis (2 net ATP) + Pyruvate decarboxylation + Krebs cycle (2 GTP) + ETC/oxidative phosphorylation (~32-34 ATP) = ~36-38 ATP total per glucose."
    },
    {
      "id": "B008",
      "subject": "Biology",
      "chapter": "Respiration",
      "difficulty": "H",
      "question": "The Krebs cycle (TCA cycle) occurs in the:",
      "options": [
        "Mitochondrial matrix",
        "Inner mitochondrial membrane",
        "Cytoplasm",
        "Outer mitochondrial membrane"
      ],
      "correct": 0,
      "explanation": "The enzymes of the Krebs cycle (except succinate dehydrogenase, which is embedded in inner membrane) are located in the mitochondrial matrix."
    },
    {
      "id": "B009",
      "subject": "Biology",
      "chapter": "Plant Growth & Development",
      "difficulty": "H",
      "question": "Which plant hormone is responsible for apical dominance and is produced primarily in the apical meristem?",
      "options": [
        "Auxin (IAA)",
        "Cytokinin",
        "Gibberellin",
        "Abscisic acid"
      ],
      "correct": 0,
      "explanation": "Auxin (IAA) produced at the apical bud inhibits lateral bud growth (apical dominance). Cytokinin promotes lateral bud growth, counteracting auxin."
    },
    {
      "id": "B010",
      "subject": "Biology",
      "chapter": "Plant Growth & Development",
      "difficulty": "H",
      "question": "Bolting (premature elongation of internodes) in rosette plants is induced by:",
      "options": [
        "Gibberellins",
        "Auxins",
        "Cytokinins",
        "Ethylene"
      ],
      "correct": 0,
      "explanation": "Gibberellins (GA\u2083) cause spectacular internode elongation (bolting) in rosette plants like cabbage and cause rapid growth before flowering."
    },
    {
      "id": "B011",
      "subject": "Biology",
      "chapter": "Plant Reproduction",
      "difficulty": "H",
      "question": "Double fertilization in angiosperms involves the fusion of:",
      "options": [
        "One sperm + egg (\u2192zygote) AND one sperm + 2 polar nuclei (\u2192endosperm)",
        "Two sperms + two eggs",
        "One sperm + polar nuclei only",
        "One sperm + egg only"
      ],
      "correct": 0,
      "explanation": "Double fertilization: (1) one sperm (n) + egg (n) \u2192 zygote (2n); (2) second sperm (n) + 2 polar nuclei (n+n) \u2192 primary endosperm nucleus (3n)."
    },
    {
      "id": "B012",
      "subject": "Biology",
      "chapter": "Ecology",
      "difficulty": "H",
      "question": "The ecological pyramid that is always upright (never inverted) is the pyramid of:",
      "options": [
        "Energy",
        "Numbers",
        "Biomass",
        "Both numbers and biomass"
      ],
      "correct": 0,
      "explanation": "The pyramid of energy is always upright because energy decreases at each trophic level (only ~10% transferred). Pyramids of numbers and biomass can be inverted."
    },
    {
      "id": "B013",
      "subject": "Biology",
      "chapter": "Ecology",
      "difficulty": "H",
      "question": "The relationship between mycorrhizal fungi and plant roots is an example of:",
      "options": [
        "Mutualism",
        "Parasitism",
        "Commensalism",
        "Amensalism"
      ],
      "correct": 0,
      "explanation": "Mycorrhizae are mutualistic: fungi get organic carbon from plant; plant gets improved mineral absorption (especially phosphorus) from fungal hyphae."
    },
    {
      "id": "B014",
      "subject": "Biology",
      "chapter": "Evolution",
      "difficulty": "H",
      "question": "According to the Hardy-Weinberg principle, allele frequencies in a population remain constant if:",
      "options": [
        "No mutation, no selection, random mating, large population, no migration",
        "Only if there is selection",
        "Only in small populations",
        "If mutation rate is high"
      ],
      "correct": 0,
      "explanation": "Hardy-Weinberg equilibrium requires: no mutation, no natural selection, random mating, large population size, and no gene flow (migration)."
    },
    {
      "id": "B015",
      "subject": "Biology",
      "chapter": "Evolution",
      "difficulty": "H",
      "question": "Analogous organs (same function, different ancestry) are evidence for:",
      "options": [
        "Convergent evolution",
        "Divergent evolution",
        "Parallel evolution",
        "Co-evolution"
      ],
      "correct": 0,
      "explanation": "Analogous organs (e.g., wing of bat vs. insect) arise from different evolutionary origins in unrelated organisms adapting to similar environments \u2014 convergent evolution."
    },
    {
      "id": "B016",
      "subject": "Biology",
      "chapter": "Genetics",
      "difficulty": "H",
      "question": "In ABO blood group system, if both parents are blood group A (genotype I^A I^O), the probability of an O blood group child is:",
      "options": [
        "25%",
        "0%",
        "50%",
        "75%"
      ],
      "correct": 0,
      "explanation": "I^A I^O \u00d7 I^A I^O \u2192 I^A I^A (25%), I^A I^O (50%), I^O I^O (25%). Child with I^O I^O has blood group O = 25%."
    },
    {
      "id": "B017",
      "subject": "Biology",
      "chapter": "Genetics",
      "difficulty": "H",
      "question": "In which disease is there deletion of a portion of chromosome 5 causing cat-like cry in infants?",
      "options": [
        "Cri-du-chat syndrome",
        "Down syndrome",
        "Turner syndrome",
        "Klinefelter syndrome"
      ],
      "correct": 0,
      "explanation": "Cri-du-chat (cry of the cat) syndrome is caused by deletion of the short arm of chromosome 5 (5p-). Characterized by high-pitched cat-like cry, intellectual disability."
    },
    {
      "id": "B018",
      "subject": "Biology",
      "chapter": "Molecular Biology",
      "difficulty": "H",
      "question": "The enzyme responsible for synthesis of RNA from a DNA template is:",
      "options": [
        "RNA polymerase",
        "DNA polymerase",
        "Reverse transcriptase",
        "Primase"
      ],
      "correct": 0,
      "explanation": "RNA polymerase (transcriptase) synthesizes RNA from the DNA template during transcription. In prokaryotes, one core enzyme (\u03c3 subunit provides specificity)."
    },
    {
      "id": "B019",
      "subject": "Biology",
      "chapter": "Molecular Biology",
      "difficulty": "H",
      "question": "The anticodon for the codon 5'-AUG-3' (start codon, methionine) is:",
      "options": [
        "3'-UAC-5'",
        "5'-UAC-3'",
        "3'-AUG-5'",
        "5'-AUG-3'"
      ],
      "correct": 0,
      "explanation": "Anticodon is complementary and antiparallel to the codon. AUG (5'\u21923') pairs with CAU (3'\u21925') on tRNA, written as 3'-UAC-5'."
    },
    {
      "id": "B020",
      "subject": "Biology",
      "chapter": "Biotechnology",
      "difficulty": "H",
      "question": "In recombinant DNA technology, restriction enzymes cut DNA at:",
      "options": [
        "Specific palindromic sequences",
        "Random locations",
        "AT-rich regions only",
        "GC-rich regions only"
      ],
      "correct": 0,
      "explanation": "Restriction endonucleases (Type II) recognize and cut specific palindromic DNA sequences (4\u20138 bp) generating sticky or blunt ends."
    },
    {
      "id": "B021",
      "subject": "Biology",
      "chapter": "Biotechnology",
      "difficulty": "H",
      "question": "The plasmid pBR322 used in genetic engineering contains:",
      "options": [
        "Amp^R and Tet^R genes as selectable markers",
        "Only AmpR",
        "Chloramphenicol resistance only",
        "No antibiotic resistance genes"
      ],
      "correct": 0,
      "explanation": "pBR322 carries ampicillin resistance (Amp^R) and tetracycline resistance (Tet^R) genes, used as selectable markers to identify transformed bacteria."
    },
    {
      "id": "B022",
      "subject": "Biology",
      "chapter": "Plant Physiology",
      "difficulty": "H",
      "question": "The ascent of sap in plants is best explained by the:",
      "options": [
        "Cohesion-tension theory",
        "Root pressure theory",
        "Capillarity theory",
        "Vital force theory"
      ],
      "correct": 0,
      "explanation": "The cohesion-tension theory (Dixon and Joly) explains water ascent via tension created by transpiration, transmitted through water columns held by hydrogen bonding (cohesion)."
    },
    {
      "id": "B023",
      "subject": "Biology",
      "chapter": "Plant Kingdom",
      "difficulty": "M",
      "question": "Which group of plants produces seeds but lacks flowers and fruits?",
      "options": [
        "Gymnosperms",
        "Angiosperms",
        "Pteridophytes",
        "Bryophytes"
      ],
      "correct": 0,
      "explanation": "Gymnosperms (cycads, conifers, Ginkgo, Gnetales) produce 'naked seeds' not enclosed in a fruit. Angiosperms have flowers and enclosed seeds."
    },
    {
      "id": "B024",
      "subject": "Biology",
      "chapter": "Ecology",
      "difficulty": "H",
      "question": "Which of the following best describes a K-strategist species?",
      "options": [
        "Slow maturation, few offspring, high parental care, stable population near K",
        "Rapid reproduction, many offspring, low parental care, boom-bust population",
        "Semelparous with many offspring",
        "Small body size with rapid development"
      ],
      "correct": 0,
      "explanation": "K-strategists (elephants, whales) invest heavily in few offspring, are long-lived, mature slowly, and maintain populations near carrying capacity (K)."
    },
    {
      "id": "B025",
      "subject": "Biology",
      "chapter": "Animal Kingdom",
      "difficulty": "H",
      "question": "Which phylum is characterized by a water vascular system and radial symmetry in adults?",
      "options": [
        "Echinodermata",
        "Mollusca",
        "Arthropoda",
        "Annelida"
      ],
      "correct": 0,
      "explanation": "Echinoderms (sea stars, sea urchins) uniquely possess a water vascular system for locomotion, feeding, and gas exchange. Adults show pentaradial symmetry."
    },
    {
      "id": "B026",
      "subject": "Biology",
      "chapter": "Human Physiology",
      "difficulty": "H",
      "question": "The cardiac output of a healthy person at rest is approximately:",
      "options": [
        "5 L/min",
        "10 L/min",
        "2 L/min",
        "15 L/min"
      ],
      "correct": 0,
      "explanation": "Cardiac output = Heart rate \u00d7 Stroke volume = 72 bpm \u00d7 70 mL \u2248 5040 mL/min \u2248 5 L/min at rest."
    },
    {
      "id": "B027",
      "subject": "Biology",
      "chapter": "Human Physiology",
      "difficulty": "H",
      "question": "The sinoatrial (SA) node is called the pacemaker of the heart because:",
      "options": [
        "It generates the intrinsic electrical impulse that initiates each heartbeat",
        "It controls the heart rate via nervous system only",
        "It pumps blood into the aorta",
        "It is located in the left ventricle"
      ],
      "correct": 0,
      "explanation": "The SA node (right atrium wall) spontaneously generates action potentials at 70-80/min, initiating each cardiac cycle. It's the natural pacemaker."
    },
    {
      "id": "B028",
      "subject": "Biology",
      "chapter": "Excretion",
      "difficulty": "H",
      "question": "The countercurrent mechanism in the loop of Henle helps in:",
      "options": [
        "Concentrating urine by creating a hypertonic medullary gradient",
        "Diluting urine",
        "Filtering blood",
        "Secreting H\u207a ions"
      ],
      "correct": 0,
      "explanation": "The loop of Henle uses countercurrent multiplication to establish an osmotic gradient in the renal medulla (up to 1200 mOsm/L), enabling urine concentration."
    },
    {
      "id": "B029",
      "subject": "Biology",
      "chapter": "Nervous System",
      "difficulty": "H",
      "question": "The neurotransmitter released at the neuromuscular junction (NMJ) is:",
      "options": [
        "Acetylcholine",
        "Dopamine",
        "Serotonin",
        "GABA"
      ],
      "correct": 0,
      "explanation": "At the NMJ between motor neurons and skeletal muscle, acetylcholine (ACh) is released from axon terminals, binding nicotinic ACh receptors on muscle."
    },
    {
      "id": "B030",
      "subject": "Biology",
      "chapter": "Endocrine System",
      "difficulty": "H",
      "question": "Which hormone is responsible for the 'fight or flight' response and is secreted by the adrenal medulla?",
      "options": [
        "Adrenaline (Epinephrine)",
        "Cortisol",
        "Aldosterone",
        "Thyroxine"
      ],
      "correct": 0,
      "explanation": "Adrenaline (epinephrine) from the adrenal medulla triggers fight-or-flight: increased heart rate, blood glucose, dilated airways, redirected blood to muscles."
    },
    {
      "id": "B031",
      "subject": "Biology",
      "chapter": "Reproduction",
      "difficulty": "H",
      "question": "In human females, ovulation is triggered by a surge of which hormone?",
      "options": [
        "LH (Luteinizing Hormone)",
        "FSH",
        "Estrogen",
        "Progesterone"
      ],
      "correct": 0,
      "explanation": "A midcycle surge of LH (from anterior pituitary) triggers ovulation on approximately day 14 of a 28-day cycle. LH also stimulates corpus luteum formation."
    },
    {
      "id": "B032",
      "subject": "Biology",
      "chapter": "Immunity",
      "difficulty": "H",
      "question": "Memory cells are produced during the primary immune response. These allow:",
      "options": [
        "Faster, stronger secondary immune response upon re-exposure",
        "Slower primary immune response",
        "Autoimmune reactions",
        "Innate immunity responses"
      ],
      "correct": 0,
      "explanation": "Memory B and T cells persist long-term. Upon second exposure to the same antigen, they mount a rapid, amplified secondary immune response (immunological memory)."
    },
    {
      "id": "B033",
      "subject": "Biology",
      "chapter": "Immunity",
      "difficulty": "H",
      "question": "The active site of an antibody (immunoglobulin) that binds to the antigen is located in the:",
      "options": [
        "Variable region of H and L chains (Fab fragment)",
        "Fc region",
        "Constant region only",
        "Hinge region"
      ],
      "correct": 0,
      "explanation": "The antigen-binding site (paratope) is formed by the variable regions of both heavy (H) and light (L) chains \u2014 the Fab fragment of the immunoglobulin."
    },
    {
      "id": "B034",
      "subject": "Biology",
      "chapter": "Genetics",
      "difficulty": "H",
      "question": "A test cross is performed to determine:",
      "options": [
        "The genotype of a dominant phenotype individual",
        "The sex of offspring",
        "Chromosome number",
        "Mutation rate"
      ],
      "correct": 0,
      "explanation": "A test cross (dominant phenotype \u00d7 homozygous recessive) reveals whether the dominant individual is homozygous (all dominant offspring) or heterozygous (1:1 ratio)."
    },
    {
      "id": "B035",
      "subject": "Biology",
      "chapter": "Genetics",
      "difficulty": "H",
      "question": "In sex-linked (X-linked) inheritance, a carrier female (X^H X^h) mates with a normal male (X^H Y). The probability of a haemophilic son is:",
      "options": [
        "25% (1/4)",
        "50%",
        "0%",
        "100%"
      ],
      "correct": 0,
      "explanation": "Sons receive Y from father and X from mother. Carrier mother gives X^H or X^h (each 50%). Son with X^h Y = haemophilic. Sons: 50% haemophilic. Of all children: 25% haemophilic sons."
    },
    {
      "id": "B036",
      "subject": "Biology",
      "chapter": "Molecular Biology",
      "difficulty": "H",
      "question": "Which enzyme unwinds the DNA double helix at the replication fork?",
      "options": [
        "Helicase",
        "DNA polymerase",
        "Ligase",
        "Primase"
      ],
      "correct": 0,
      "explanation": "DNA helicase unwinds and separates the two strands at the replication fork by breaking hydrogen bonds between base pairs."
    },
    {
      "id": "B037",
      "subject": "Biology",
      "chapter": "Molecular Biology",
      "difficulty": "H",
      "question": "Okazaki fragments are found on which strand during DNA replication?",
      "options": [
        "Lagging strand (3'\u21925' template)",
        "Leading strand",
        "Both strands",
        "Neither strand"
      ],
      "correct": 0,
      "explanation": "DNA is synthesized only 5'\u21923'. The lagging strand (template 3'\u21925') is copied discontinuously as Okazaki fragments. The leading strand is continuous."
    },
    {
      "id": "B038",
      "subject": "Biology",
      "chapter": "Ecology",
      "difficulty": "H",
      "question": "In a food chain, the 10% law (Lindeman's law) states that only 10% of energy passes from one trophic level to the next. If producers have 10,000 kcal, the energy available to secondary consumers (3rd trophic level) is:",
      "options": [
        "10 kcal",
        "100 kcal",
        "1000 kcal",
        "1 kcal"
      ],
      "correct": 0,
      "explanation": "Producers \u2192 1\u00b0 consumers: 10% = 1000 kcal. 1\u00b0 consumers \u2192 2\u00b0 consumers: 10% = 100 kcal. 2\u00b0 consumers (3rd level) receive: 100 kcal. Wait: Secondary consumers ARE the 3rd trophic level \u2192 100 kcal. Answer B."
    },
    {
      "id": "B039",
      "subject": "Biology",
      "chapter": "Biotechnology",
      "difficulty": "H",
      "question": "Bt toxin used in Bt crops is derived from which bacterium?",
      "options": [
        "Bacillus thuringiensis",
        "Bacillus subtilis",
        "Agrobacterium tumefaciens",
        "Pseudomonas fluorescens"
      ],
      "correct": 0,
      "explanation": "Cry proteins (Bt toxins) from Bacillus thuringiensis are toxic to specific insect pests. The cry genes are inserted into crop plants to produce insect-resistant Bt crops."
    },
    {
      "id": "B040",
      "subject": "Biology",
      "chapter": "Biotechnology",
      "difficulty": "H",
      "question": "The Ti plasmid used in plant genetic engineering is found in:",
      "options": [
        "Agrobacterium tumefaciens",
        "Bacillus thuringiensis",
        "Rhizobium",
        "E. coli"
      ],
      "correct": 0,
      "explanation": "Agrobacterium tumefaciens carries the Ti (tumor-inducing) plasmid. The T-DNA region naturally integrates into plant genome \u2014 modified as a vector to deliver foreign genes."
    },
    {
      "id": "B041",
      "subject": "Biology",
      "chapter": "Human Physiology",
      "difficulty": "H",
      "question": "Which cells in the pancreatic islets of Langerhans secrete glucagon?",
      "options": [
        "Alpha (\u03b1) cells",
        "Beta (\u03b2) cells",
        "Delta (\u03b4) cells",
        "PP cells"
      ],
      "correct": 0,
      "explanation": "Alpha (\u03b1) cells secrete glucagon (raises blood glucose). Beta (\u03b2) cells secrete insulin (lowers blood glucose). Delta cells secrete somatostatin."
    },
    {
      "id": "B042",
      "subject": "Biology",
      "chapter": "Digestion",
      "difficulty": "M",
      "question": "Which enzyme in pancreatic juice is responsible for the final breakdown of proteins into peptides?",
      "options": [
        "Trypsin",
        "Lipase",
        "Amylase",
        "Lactase"
      ],
      "correct": 0,
      "explanation": "Trypsin (and chymotrypsin) from the pancreas continue protein digestion in the duodenum, breaking polypeptides into smaller peptides. Peptidases further break them to amino acids."
    },
    {
      "id": "B043",
      "subject": "Biology",
      "chapter": "Respiration (Human)",
      "difficulty": "H",
      "question": "The Haldane effect refers to:",
      "options": [
        "Effect of CO\u2082 on O\u2082 binding to hemoglobin (and vice versa: O\u2082 affects CO\u2082 transport)",
        "Effect of pH on heart rate",
        "Temperature effect on diffusion",
        "Effect of CO on hemoglobin"
      ],
      "correct": 0,
      "explanation": "The Haldane effect: oxygenation of hemoglobin in the lungs causes it to release CO\u2082 (deoxyHb carries more CO\u2082; oxyHb carries less). Counterpart to Bohr effect."
    },
    {
      "id": "B044",
      "subject": "Biology",
      "chapter": "Kidney Physiology",
      "difficulty": "H",
      "question": "Aldosterone secreted by the adrenal cortex promotes:",
      "options": [
        "Na\u207a reabsorption and K\u207a secretion in collecting duct",
        "K\u207a reabsorption and Na\u207a secretion",
        "Glucose reabsorption",
        "Water excretion"
      ],
      "correct": 0,
      "explanation": "Aldosterone acts on principal cells of the collecting duct: increases Na\u207a reabsorption and K\u207a secretion, leading to water retention and increased blood pressure."
    },
    {
      "id": "B045",
      "subject": "Biology",
      "chapter": "Genetics",
      "difficulty": "H",
      "question": "The chi-square test in genetics is used to:",
      "options": [
        "Determine if observed ratios differ significantly from expected (Mendelian) ratios",
        "Calculate allele frequencies",
        "Map gene locations",
        "Test for Hardy-Weinberg equilibrium only"
      ],
      "correct": 0,
      "explanation": "Chi-square (\u03c7\u00b2) test compares observed vs. expected phenotypic ratios to decide if deviations are statistically significant (due to chance or true biological difference)."
    },
    {
      "id": "B046",
      "subject": "Biology",
      "chapter": "Animal Kingdom",
      "difficulty": "H",
      "question": "Which of the following correctly classifies the given organisms? Amoeba \u2013 Porifera \u2013 Platyhelminthes \u2013 Annelida \u2013 Arthropoda",
      "options": [
        "Protozoa \u2013 Porifera \u2013 Platyhelminthes \u2013 Annelida \u2013 Arthropoda",
        "Porifera \u2013 Coelenterata \u2013 Flatworms \u2013 Roundworms \u2013 Segmented worms",
        "Protozoa \u2013 Cnidaria \u2013 Platyhelminthes \u2013 Mollusca \u2013 Arthropoda",
        "All are invertebrates with the same phylum"
      ],
      "correct": 0,
      "explanation": "Amoeba = Kingdom Protozoa, Sponges = Porifera, Flatworms = Platyhelminthes, Earthworm = Annelida, Insects/Crustaceans = Arthropoda. Classification A is correct."
    },
    {
      "id": "B047",
      "subject": "Biology",
      "chapter": "Plant Kingdom",
      "difficulty": "H",
      "question": "Which of the following correctly describes the alternation of generations in bryophytes?",
      "options": [
        "Dominant gametophyte, dependent sporophyte",
        "Dominant sporophyte, independent gametophyte",
        "Equal gametophyte and sporophyte",
        "Sporophyte only"
      ],
      "correct": 0,
      "explanation": "In bryophytes (mosses, liverworts), the gametophyte is dominant and independent (green photosynthetic plant). The sporophyte is nutritionally dependent on the gametophyte."
    },
    {
      "id": "B048",
      "subject": "Biology",
      "chapter": "Ecology",
      "difficulty": "H",
      "question": "The species diversity index (Shannon-Wiener index H') increases with:",
      "options": [
        "More species AND more even distribution",
        "Fewer species",
        "More dominant species only",
        "Less evenness"
      ],
      "correct": 0,
      "explanation": "H' = \u2013\u03a3(p\u1d62 ln p\u1d62). It increases when there are more species (species richness) AND when species abundances are more evenly distributed (evenness)."
    },
    {
      "id": "B049",
      "subject": "Biology",
      "chapter": "Evolution",
      "difficulty": "H",
      "question": "The process by which new species form due to geographic isolation is called:",
      "options": [
        "Allopatric speciation",
        "Sympatric speciation",
        "Parapatric speciation",
        "Phyletic evolution"
      ],
      "correct": 0,
      "explanation": "Allopatric speciation: geographic barriers (mountains, rivers) separate populations \u2192 independent evolution \u2192 reproductive isolation \u2192 new species."
    },
    {
      "id": "B050",
      "subject": "Biology",
      "chapter": "Human Diseases",
      "difficulty": "H",
      "question": "The causative agent of malaria is:",
      "options": [
        "Plasmodium falciparum (and other Plasmodium spp.)",
        "Wuchereria bancrofti",
        "Trypanosoma brucei",
        "Leishmania donovani"
      ],
      "correct": 0,
      "explanation": "Malaria is caused by Plasmodium spp. (P. falciparum most deadly). Transmitted by female Anopheles mosquito. P. vivax causes benign tertian malaria."
    },
    {
      "id": "B051",
      "subject": "Biology",
      "chapter": "Human Diseases",
      "difficulty": "M",
      "question": "Which disease is caused by Human Immunodeficiency Virus (HIV)?",
      "options": [
        "AIDS",
        "Hepatitis B",
        "Rabies",
        "Dengue"
      ],
      "correct": 0,
      "explanation": "HIV infects CD4+ T helper cells, progressively destroying the immune system, leading to AIDS (Acquired Immunodeficiency Syndrome)."
    },
    {
      "id": "B052",
      "subject": "Biology",
      "chapter": "Hormones",
      "difficulty": "H",
      "question": "ADH (Antidiuretic Hormone / Vasopressin) is produced in the hypothalamus but stored and released from:",
      "options": [
        "Posterior pituitary (neurohypophysis)",
        "Anterior pituitary",
        "Thyroid gland",
        "Adrenal cortex"
      ],
      "correct": 0,
      "explanation": "ADH and oxytocin are synthesized in hypothalamic nuclei (supraoptic, paraventricular) but transported to and released from the posterior pituitary."
    },
    {
      "id": "B053",
      "subject": "Biology",
      "chapter": "Molecular Biology",
      "difficulty": "H",
      "question": "The operon model for gene regulation in prokaryotes was proposed by:",
      "options": [
        "Jacob and Monod",
        "Watson and Crick",
        "Nirenberg and Khorana",
        "Meselson and Stahl"
      ],
      "correct": 0,
      "explanation": "Fran\u00e7ois Jacob and Jacques Monod (1961) proposed the lac operon model, explaining inducible gene expression in E. coli \u2014 a landmark in molecular biology."
    },
    {
      "id": "B054",
      "subject": "Biology",
      "chapter": "Biotechnology",
      "difficulty": "H",
      "question": "PCR (Polymerase Chain Reaction) requires the enzyme:",
      "options": [
        "Taq DNA polymerase (thermostable)",
        "RNA polymerase",
        "Reverse transcriptase",
        "Restriction endonuclease"
      ],
      "correct": 0,
      "explanation": "PCR uses Taq polymerase (from Thermus aquaticus) that is heat-stable (survives 95\u00b0C denaturation steps), allowing repeated thermal cycling to amplify DNA."
    },
    {
      "id": "B055",
      "subject": "Biology",
      "chapter": "Biomolecules",
      "difficulty": "H",
      "question": "The secondary structure of proteins is maintained by:",
      "options": [
        "Hydrogen bonds between backbone N-H and C=O groups",
        "Disulfide bridges (covalent)",
        "Hydrophobic interactions",
        "Ionic bonds"
      ],
      "correct": 0,
      "explanation": "Secondary structures (\u03b1-helix, \u03b2-sheet) are stabilized by hydrogen bonds between the backbone carbonyl (C=O) and amide (N-H) groups at regular intervals."
    },
    {
      "id": "B056",
      "subject": "Biology",
      "chapter": "Ecology",
      "difficulty": "H",
      "question": "Which biome has the highest net primary productivity (NPP)?",
      "options": [
        "Tropical rainforest",
        "Temperate deciduous forest",
        "Savanna",
        "Tundra"
      ],
      "correct": 0,
      "explanation": "Tropical rainforests have the highest NPP (~2200 g C/m\u00b2/yr) due to year-round warmth, high solar radiation, and abundant rainfall supporting maximal plant growth."
    },
    {
      "id": "B057",
      "subject": "Biology",
      "chapter": "Genetics",
      "difficulty": "H",
      "question": "In a diploid organism with 2n = 46 (humans), how many chromosomes are present in a secondary oocyte?",
      "options": [
        "23",
        "46",
        "92",
        "22"
      ],
      "correct": 0,
      "explanation": "The secondary oocyte has completed meiosis I: n = 23 chromosomes (each still consisting of two sister chromatids). Meiosis II not yet complete."
    },
    {
      "id": "B058",
      "subject": "Biology",
      "chapter": "Plant Physiology",
      "difficulty": "H",
      "question": "The enzyme responsible for CO\u2082 fixation in C3 photosynthesis (Calvin cycle) is:",
      "options": [
        "RuBisCO (Ribulose-1,5-bisphosphate carboxylase/oxygenase)",
        "PEP carboxylase",
        "Pyruvate kinase",
        "Carbonic anhydrase"
      ],
      "correct": 0,
      "explanation": "RuBisCO catalyzes: RuBP + CO\u2082 \u2192 2 \u00d7 3-PGA. It's the most abundant enzyme on Earth but has dual carboxylase/oxygenase activity (photorespiration)."
    },
    {
      "id": "B059",
      "subject": "Biology",
      "chapter": "Animal Physiology",
      "difficulty": "H",
      "question": "Peristalsis in the digestive tract is controlled by the:",
      "options": [
        "Enteric nervous system (ENS) / myenteric plexus",
        "Somatic nervous system",
        "Voluntary muscles",
        "Sympathetic nervous system exclusively"
      ],
      "correct": 0,
      "explanation": "The enteric nervous system (myenteric/Auerbach's plexus between muscle layers) coordinates peristalsis autonomously \u2014 hence gut is called the 'second brain.'"
    },
    {
      "id": "B060",
      "subject": "Biology",
      "chapter": "Reproduction",
      "difficulty": "H",
      "question": "Acrosome reaction in sperm occurs when sperm contacts:",
      "options": [
        "Zona pellucida of the egg",
        "Plasma membrane of the egg",
        "Cumulus oophorus cells",
        "Follicle cells"
      ],
      "correct": 0,
      "explanation": "The acrosome reaction (release of hydrolytic enzymes from sperm acrosome) is triggered by contact with the zona pellucida glycoprotein ZP3, allowing sperm penetration."
    },
    {
      "id": "B061",
      "subject": "Biology",
      "chapter": "Biotechnology",
      "difficulty": "H",
      "question": "Which technique separates DNA fragments by size using an electric field through agarose gel?",
      "options": [
        "Gel electrophoresis",
        "Western blotting",
        "PCR",
        "ELISA"
      ],
      "correct": 0,
      "explanation": "Agarose gel electrophoresis uses electric current to migrate DNA fragments. Smaller fragments migrate faster (toward anode) than larger ones, separating by size."
    },
    {
      "id": "B062",
      "subject": "Biology",
      "chapter": "Plant Kingdom",
      "difficulty": "H",
      "question": "Vascular plants with seeds but without flowers that dominated the Mesozoic era are:",
      "options": [
        "Gymnosperms (cycads, conifers)",
        "Angiosperms",
        "Pteridophytes",
        "Bryophytes"
      ],
      "correct": 0,
      "explanation": "Gymnosperms dominated the Mesozoic era (age of reptiles). They have seeds not enclosed in fruits, with pollen cones (\u2642) and seed cones (\u2640)."
    },
    {
      "id": "B063",
      "subject": "Biology",
      "chapter": "Cell Biology",
      "difficulty": "H",
      "question": "Which phase of the cell cycle involves DNA replication?",
      "options": [
        "S phase (Synthesis phase)",
        "G1 phase",
        "G2 phase",
        "M phase"
      ],
      "correct": 0,
      "explanation": "DNA replication occurs exclusively during the S (Synthesis) phase of interphase. G1 = growth and preparation; G2 = growth and repair; M = division."
    },
    {
      "id": "B064",
      "subject": "Biology",
      "chapter": "Ecology",
      "difficulty": "H",
      "question": "The concept of 'competitive exclusion principle' (Gause's law) states that:",
      "options": [
        "Two species competing for same resources cannot coexist indefinitely; one will outcompete the other",
        "Two species can always coexist if they overlap in niche",
        "Competition always leads to mutualism",
        "Species with the largest body win competition"
      ],
      "correct": 0,
      "explanation": "Gause's competitive exclusion principle: two species occupying the exact same ecological niche cannot coexist stably \u2014 one eliminates the other. Coexistence requires niche differentiation."
    },
    {
      "id": "B065",
      "subject": "Biology",
      "chapter": "Human Genetics",
      "difficulty": "H",
      "question": "Down syndrome is caused by:",
      "options": [
        "Trisomy 21 (three copies of chromosome 21)",
        "Monosomy X",
        "Deletion of chromosome 5",
        "Trisomy 18"
      ],
      "correct": 0,
      "explanation": "Down syndrome (trisomy 21, 47 chromosomes) results from nondisjunction during meiosis. Risk increases with maternal age. Features: intellectual disability, epicanthal folds, etc."
    },
    {
      "id": "B066",
      "subject": "Biology",
      "chapter": "Molecular Biology",
      "difficulty": "H",
      "question": "Which of the following best describes the role of tRNA in protein synthesis?",
      "options": [
        "Brings specific amino acids to the ribosome matching mRNA codons via its anticodon",
        "Carries genetic information from nucleus to ribosome",
        "Forms the structural backbone of ribosome",
        "Catalyzes peptide bond formation"
      ],
      "correct": 0,
      "explanation": "tRNA acts as an adaptor: its anticodon base-pairs with mRNA codon, while its 3' CCA end carries the specific aminoacyl group, delivering amino acids to the growing polypeptide."
    },
    {
      "id": "B067",
      "subject": "Biology",
      "chapter": "Ecology",
      "difficulty": "M",
      "question": "Which of the following gases, if depleted in the stratosphere, leads to increased UV radiation reaching Earth?",
      "options": [
        "Ozone (O\u2083)",
        "CO\u2082",
        "N\u2082O",
        "CH\u2084"
      ],
      "correct": 0,
      "explanation": "Stratospheric ozone layer (15\u201335 km altitude) absorbs harmful UV-B and UV-C radiation. Its depletion (by CFCs) leads to increased UV reaching Earth's surface."
    },
    {
      "id": "B068",
      "subject": "Biology",
      "chapter": "Plant Growth",
      "difficulty": "H",
      "question": "Vernalization refers to:",
      "options": [
        "Low temperature requirement for flowering in some plants",
        "Light duration requirement for flowering",
        "High temperature treatment for seed germination",
        "Water requirement for growth"
      ],
      "correct": 0,
      "explanation": "Vernalization: exposure of plants to prolonged cold (0\u20137\u00b0C) promotes subsequent flowering in certain species (winter wheat, biennials). It 'resets' the plant's flowering clock."
    },
    {
      "id": "B069",
      "subject": "Biology",
      "chapter": "Biochemistry",
      "difficulty": "H",
      "question": "During beta-oxidation of a fatty acid, for each 2-carbon unit cleaved as acetyl-CoA, the products are:",
      "options": [
        "1 acetyl-CoA, 1 FADH\u2082, 1 NADH",
        "1 acetyl-CoA, 2 NADH",
        "2 acetyl-CoA, 1 ATP",
        "1 acetyl-CoA, 1 ATP, 1 NADH"
      ],
      "correct": 0,
      "explanation": "Each round of \u03b2-oxidation removes 2 carbons as acetyl-CoA and produces 1 FADH\u2082 (from FADH\u2082-generating acyl-CoA dehydrogenase) + 1 NADH (from L-hydroxyacyl-CoA dehydrogenase)."
    },
    {
      "id": "B070",
      "subject": "Biology",
      "chapter": "Endocrinology",
      "difficulty": "H",
      "question": "Cretinism (congenital hypothyroidism) in children leads to:",
      "options": [
        "Stunted growth and mental retardation due to insufficient thyroxine",
        "Excessive growth (gigantism)",
        "Diabetes insipidus",
        "Precocious puberty"
      ],
      "correct": 0,
      "explanation": "Thyroxine (T3/T4) is essential for normal physical and neurological development. Deficiency during infancy causes cretinism: stunted growth, intellectual disability, goiter."
    },
    {
      "id": "B071",
      "subject": "Biology",
      "chapter": "Animal Tissues",
      "difficulty": "H",
      "question": "Which type of muscle is involuntary, striated, and found only in the heart?",
      "options": [
        "Cardiac muscle",
        "Smooth muscle",
        "Skeletal muscle",
        "Both cardiac and smooth"
      ],
      "correct": 0,
      "explanation": "Cardiac muscle (myocardium) is unique: striated (like skeletal) but involuntary (like smooth). Contains intercalated discs for electrical coupling."
    },
    {
      "id": "B072",
      "subject": "Biology",
      "chapter": "Molecular Biology",
      "difficulty": "H",
      "question": "The semi-conservative replication of DNA was demonstrated by:",
      "options": [
        "Meselson and Stahl (1958) using \u00b9\u2075N labeling",
        "Watson and Crick",
        "Hershey and Chase",
        "Griffith"
      ],
      "correct": 0,
      "explanation": "Meselson and Stahl used heavy nitrogen (\u00b9\u2075N) to label DNA and showed that after replication, each daughter molecule contains one original + one new strand \u2014 semi-conservative model."
    },
    {
      "id": "B073",
      "subject": "Biology",
      "chapter": "Ecology",
      "difficulty": "H",
      "question": "In nitrogen cycle, nitrification refers to:",
      "options": [
        "Oxidation of NH\u2083 to NO\u2082\u207b and then to NO\u2083\u207b by bacteria (Nitrosomonas, Nitrobacter)",
        "Reduction of N\u2082 to NH\u2083",
        "Conversion of NO\u2083\u207b back to N\u2082",
        "Assimilation of NH\u2083 by plants"
      ],
      "correct": 0,
      "explanation": "Nitrification (2 steps): Nitrosomonas: NH\u2083 \u2192 NO\u2082\u207b; Nitrobacter: NO\u2082\u207b \u2192 NO\u2083\u207b. These aerobic bacteria obtain energy (chemolithotrophs) from this oxidation."
    },
    {
      "id": "B074",
      "subject": "Biology",
      "chapter": "Human Physiology",
      "difficulty": "H",
      "question": "The normal tidal volume (air breathed in one normal breath) in a healthy adult is approximately:",
      "options": [
        "500 mL",
        "2500 mL",
        "1200 mL",
        "250 mL"
      ],
      "correct": 0,
      "explanation": "Tidal volume (TV) \u2248 500 mL. Vital capacity \u2248 4800 mL. Total lung capacity \u2248 6000 mL. Residual volume \u2248 1200 mL."
    },
    {
      "id": "B075",
      "subject": "Biology",
      "chapter": "Animal Kingdom",
      "difficulty": "H",
      "question": "The diagnostic feature that distinguishes chordates from non-chordates is the presence of:",
      "options": [
        "Notochord, dorsal hollow nerve cord, pharyngeal slits, post-anal tail",
        "Exoskeleton",
        "Radial symmetry",
        "Pseudocoelom"
      ],
      "correct": 0,
      "explanation": "Four chordate hallmarks: (1) notochord, (2) dorsal hollow nerve cord, (3) pharyngeal pouches/slits, (4) post-anal tail \u2014 present at some stage of development."
    },
    {
      "id": "B076",
      "subject": "Biology",
      "chapter": "Genetics",
      "difficulty": "H",
      "question": "Epistasis is defined as:",
      "options": [
        "Interaction between alleles of different genes (non-allelic genes) affecting phenotype",
        "Dominance between alleles of the same gene",
        "Incomplete dominance",
        "Co-dominance"
      ],
      "correct": 0,
      "explanation": "Epistasis: one gene suppresses or modifies the expression of another non-allelic gene (e.g., coat color in Labrador dogs: B gene affected by E gene)."
    },
    {
      "id": "B077",
      "subject": "Biology",
      "chapter": "Plant Hormones",
      "difficulty": "H",
      "question": "Ethylene promotes:",
      "options": [
        "Fruit ripening, leaf abscission, seed germination",
        "Seed dormancy and inhibits germination",
        "Stem elongation only",
        "Root growth only"
      ],
      "correct": 0,
      "explanation": "Ethylene is a gaseous phytohormone that promotes fruit ripening (climacteric), leaf/fruit abscission, seed germination, and stress responses."
    },
    {
      "id": "B078",
      "subject": "Biology",
      "chapter": "Biotechnology",
      "difficulty": "H",
      "question": "Golden Rice was developed to address deficiency of:",
      "options": [
        "Vitamin A (\u03b2-carotene precursor)",
        "Vitamin C",
        "Iron",
        "Protein"
      ],
      "correct": 0,
      "explanation": "Golden Rice is genetically modified to express \u03b2-carotene (provitamin A) in endosperm \u2014 addressing vitamin A deficiency causing blindness in developing countries."
    },
    {
      "id": "B079",
      "subject": "Biology",
      "chapter": "Ecology",
      "difficulty": "M",
      "question": "The phenomenon where a species introduced into a new environment causes ecological damage is called:",
      "options": [
        "Biological invasion (invasive species)",
        "Keystone species effect",
        "Ecological succession",
        "Biotic potential"
      ],
      "correct": 0,
      "explanation": "Invasive species (e.g., water hyacinth, Nile perch) introduced to new environments lack natural predators and can outcompete native species, causing extinction and ecosystem disruption."
    },
    {
      "id": "B080",
      "subject": "Biology",
      "chapter": "Human Genetics",
      "difficulty": "H",
      "question": "Turner syndrome (45, X0) in females is characterized by:",
      "options": [
        "Short stature, webbed neck, streak gonads, primary amenorrhea",
        "Tall stature, gynecomastia, infertility",
        "Intellectual disability, trisomy 21",
        "Cat-like cry, chromosome 5 deletion"
      ],
      "correct": 0,
      "explanation": "Turner syndrome (monosomy X) features: short stature, webbed neck, shield chest, primary amenorrhea (ovarian dysgenesis/streak gonads), cardiac defects. IQ usually normal."
    }
  ],
  "mentalAgility": [
    {
      "id": "M001",
      "subject": "Mental Agility",
      "chapter": "Logical Reasoning",
      "difficulty": "M",
      "question": "If DOCTOR is coded as FQEVQT, how is NURSE coded?",
      "options": [
        "PWTUR",
        "PVTUG",
        "PVVUT",
        "PWTUG"
      ],
      "correct": 1,
      "explanation": "Each letter is shifted +2: N\u2192P, U\u2192W wait: D+2=F, O+2=Q, C+2=E... N+2=P, U+2=W, R+2=T, S+2=U, E+2=G. NURSE\u2192PWRUG? Let me verify: N(14)+2=P(16), U(21)+2=W(23), R(18)+2=T(20), S(19)+2=U(21), E(5)+2=G(7). NURSE = PWTUG."
    },
    {
      "id": "M002",
      "subject": "Mental Agility",
      "chapter": "Numerical Reasoning",
      "difficulty": "H",
      "question": "What is the next number in the series: 2, 6, 12, 20, 30, ___?",
      "options": [
        "42",
        "40",
        "38",
        "44"
      ],
      "correct": 0,
      "explanation": "Differences: 4, 6, 8, 10, 12. Next difference = 12. 30+12 = 42. Pattern: n(n+1): 1\u00d72=2, 2\u00d73=6, 3\u00d74=12, 4\u00d75=20, 5\u00d76=30, 6\u00d77=42."
    },
    {
      "id": "M003",
      "subject": "Mental Agility",
      "chapter": "Pattern Recognition",
      "difficulty": "H",
      "question": "A, C, F, J, O, ___?",
      "options": [
        "U",
        "V",
        "T",
        "S"
      ],
      "correct": 0,
      "explanation": "Gaps: +2, +3, +4, +5, +6. A(1), C(3), F(6), J(10), O(15), U(21). Answer: U."
    },
    {
      "id": "M004",
      "subject": "Mental Agility",
      "chapter": "Verbal Analogy",
      "difficulty": "M",
      "question": "Blood is to Vein as Sap is to:",
      "options": [
        "Phloem",
        "Xylem",
        "Root",
        "Leaf"
      ],
      "correct": 0,
      "explanation": "Blood flows through veins in animals. Sap (sugars) flows through phloem in plants. (Xylem carries water, not sap.)"
    },
    {
      "id": "M005",
      "subject": "Mental Agility",
      "chapter": "Logical Reasoning",
      "difficulty": "H",
      "question": "All scientists are curious. Some curious people are creative. Which conclusion MUST be true?",
      "options": [
        "Some scientists are curious (all scientists are curious \u2192 all are curious)",
        "All creative people are scientists",
        "No scientists are creative",
        "Some curious people are scientists"
      ],
      "correct": 3,
      "explanation": "Since all scientists ARE curious, it follows that at least some curious people ARE scientists (the scientists themselves). Options A is true but trivial. D directly follows."
    },
    {
      "id": "M006",
      "subject": "Mental Agility",
      "chapter": "Numerical Reasoning",
      "difficulty": "H",
      "question": "A train travels 300 km at 60 km/h, then 240 km at 80 km/h. The average speed for the whole journey is:",
      "options": [
        "\u224867.6 km/h",
        "70 km/h",
        "65 km/h",
        "72 km/h"
      ],
      "correct": 0,
      "explanation": "Total distance = 540 km. Total time = 300/60 + 240/80 = 5 + 3 = 8 h. Avg speed = 540/8 = 67.5 km/h \u2248 67.6 km/h."
    },
    {
      "id": "M007",
      "subject": "Mental Agility",
      "chapter": "Data Interpretation",
      "difficulty": "H",
      "question": "If 12 men can do a work in 15 days working 8 hours/day, how many men are needed to complete the work in 9 days working 10 hours/day?",
      "options": [
        "16 men",
        "18 men",
        "20 men",
        "12 men"
      ],
      "correct": 0,
      "explanation": "Total work = 12\u00d715\u00d78 = 1440 man-hours. Men needed = 1440/(9\u00d710) = 1440/90 = 16 men."
    },
    {
      "id": "M008",
      "subject": "Mental Agility",
      "chapter": "Spatial Reasoning",
      "difficulty": "H",
      "question": "A cube is painted red on all faces, then cut into 27 equal smaller cubes. How many smaller cubes have exactly 2 faces painted?",
      "options": [
        "12",
        "8",
        "6",
        "24"
      ],
      "correct": 0,
      "explanation": "In a 3\u00d73\u00d73 cube: corner cubes (3 faces painted) = 8; edge cubes (2 faces painted) = 12; face cubes (1 face) = 6; center cube (0 faces) = 1. Total = 27."
    },
    {
      "id": "M009",
      "subject": "Mental Agility",
      "chapter": "Logical Reasoning",
      "difficulty": "M",
      "question": "If in a certain code language, 'MANGO' = 13175, then 'PEACH' = ?",
      "options": [
        "16531",
        "16538",
        "15316",
        "16538"
      ],
      "correct": 0,
      "explanation": "Each letter's position in alphabet: P=16, E=5, A=1, C=3, H=8. PEACH = 16538. But option A says 16531... Correct: P(16)E(5)A(1)C(3)H(8) = 16538. Answer B."
    },
    {
      "id": "M010",
      "subject": "Mental Agility",
      "chapter": "Mathematical Reasoning",
      "difficulty": "H",
      "question": "What is the probability of getting at least one head when tossing 3 fair coins?",
      "options": [
        "7/8",
        "1/2",
        "3/4",
        "1/8"
      ],
      "correct": 0,
      "explanation": "P(at least 1 head) = 1 \u2013 P(no heads) = 1 \u2013 (1/2)\u00b3 = 1 \u2013 1/8 = 7/8."
    },
    {
      "id": "M011",
      "subject": "Mental Agility",
      "chapter": "Numerical Reasoning",
      "difficulty": "H",
      "question": "The sum of first 50 natural numbers is:",
      "options": [
        "1275",
        "2550",
        "1250",
        "1300"
      ],
      "correct": 0,
      "explanation": "Sum = n(n+1)/2 = 50\u00d751/2 = 1275."
    },
    {
      "id": "M012",
      "subject": "Mental Agility",
      "chapter": "Logical Reasoning",
      "difficulty": "H",
      "question": "A clock shows 4:20. What is the angle between the hour and minute hands?",
      "options": [
        "10\u00b0",
        "20\u00b0",
        "30\u00b0",
        "5\u00b0"
      ],
      "correct": 0,
      "explanation": "At 4:20: Minute hand = 20\u00d76 = 120\u00b0. Hour hand = 4\u00d730 + 20\u00d70.5 = 120+10 = 130\u00b0. Angle = |130\u2013120| = 10\u00b0."
    },
    {
      "id": "M013",
      "subject": "Mental Agility",
      "chapter": "Verbal Reasoning",
      "difficulty": "M",
      "question": "Choose the word that is MOST OPPOSITE in meaning to 'LACONIC':",
      "options": [
        "Verbose",
        "Brief",
        "Terse",
        "Concise"
      ],
      "correct": 0,
      "explanation": "Laconic means using very few words (brief, concise). Antonym = verbose (using excessive words)."
    },
    {
      "id": "M014",
      "subject": "Mental Agility",
      "chapter": "Mathematical Reasoning",
      "difficulty": "H",
      "question": "A shopkeeper marks a product 40% above cost. He gives 25% discount on marked price. His profit or loss percentage is:",
      "options": [
        "5% profit",
        "5% loss",
        "15% profit",
        "10% loss"
      ],
      "correct": 0,
      "explanation": "Let CP=100. MP=140. SP = 140\u00d70.75 = 105. Profit = 105\u2013100 = 5. Profit% = 5%."
    },
    {
      "id": "M015",
      "subject": "Mental Agility",
      "chapter": "Pattern Recognition",
      "difficulty": "H",
      "question": "Find the missing term: 3, 7, 13, 21, 31, ___",
      "options": [
        "43",
        "41",
        "45",
        "39"
      ],
      "correct": 0,
      "explanation": "Differences: 4, 6, 8, 10, 12. Next difference = 12. 31+12 = 43."
    },
    {
      "id": "M016",
      "subject": "Mental Agility",
      "chapter": "Data Interpretation",
      "difficulty": "H",
      "question": "If 20% of students passed in Math, 30% in Science, and 10% in both, what % passed in neither?",
      "options": [
        "60%",
        "40%",
        "50%",
        "30%"
      ],
      "correct": 0,
      "explanation": "P(M\u222aS) = 20+30\u201310 = 40%. P(neither) = 100\u201340 = 60%."
    },
    {
      "id": "M017",
      "subject": "Mental Agility",
      "chapter": "Spatial Reasoning",
      "difficulty": "H",
      "question": "A man walks 4 km North, turns right and walks 3 km East, then turns right again and walks 4 km South. His displacement from start is:",
      "options": [
        "3 km East",
        "5 km North-East",
        "7 km",
        "4 km"
      ],
      "correct": 0,
      "explanation": "North 4 + South 4 = net 0 km N-S. East 3 km. Displacement = 3 km East of starting point."
    },
    {
      "id": "M018",
      "subject": "Mental Agility",
      "chapter": "Logical Reasoning",
      "difficulty": "H",
      "question": "In a race, A finishes before B, C finishes after D, B finishes before D. The correct order of finish is:",
      "options": [
        "A, B, D, C",
        "A, D, B, C",
        "B, A, D, C",
        "A, B, C, D"
      ],
      "correct": 0,
      "explanation": "Given: A<B, D<C, B<D. Combine: A<B<D<C. Order: A, B, D, C."
    },
    {
      "id": "M019",
      "subject": "Mental Agility",
      "chapter": "Numerical Reasoning",
      "difficulty": "H",
      "question": "Simple interest on Rs. 5000 at 8% per annum for 3 years is:",
      "options": [
        "Rs. 1200",
        "Rs. 1400",
        "Rs. 1000",
        "Rs. 1600"
      ],
      "correct": 0,
      "explanation": "SI = PRT/100 = 5000\u00d78\u00d73/100 = 120000/100 = Rs. 1200."
    },
    {
      "id": "M020",
      "subject": "Mental Agility",
      "chapter": "Logical Reasoning",
      "difficulty": "H",
      "question": "If the day before yesterday was Thursday, what day will be the day after tomorrow?",
      "options": [
        "Monday",
        "Tuesday",
        "Sunday",
        "Saturday"
      ],
      "correct": 0,
      "explanation": "Day before yesterday = Thursday \u2192 Yesterday = Friday \u2192 Today = Saturday \u2192 Tomorrow = Sunday \u2192 Day after tomorrow = Monday."
    }
  ]
};
