addLesson({
  "chapter": 1,
  "id": "01",
  "title": "Electric charge: signs, neutrality and quantisation",
  "section": "1.2–1.4",
  "objective": "Explain what a charge sign means, distinguish neutral from uncharged constituents, and count excess or missing electrons.",
  "bridge": [
    "units"
  ],
  "lead": "A body can push or pull another body without touching it. Electric charge is the property involved in this electric interaction. Begin with the signs before trying to calculate a force.",
  "explain": [
    [
      "What is inside an ordinary body?",
      "An atom contains positively charged protons and negatively charged electrons. Their charge magnitudes are equal. A body is electrically neutral when its total positive charge equals the magnitude of its total negative charge. Neutral does not mean that the body contains no charged particles."
    ],
    [
      "What changes when a body becomes charged?",
      "In ordinary charging of solids, electrons are transferred; protons remain bound in nuclei. Extra electrons give a negative net charge. A shortage of electrons gives a positive net charge. Like charge signs repel and unlike signs attract. Charge is a scalar: the signs + and − are algebraic signs, not directions in space."
    ],
    [
      "Charge comes in elementary units",
      "For an ordinary isolated body, the net charge is an integral multiple of the elementary charge e. The SI unit is the coulomb, C. Because e is extremely small, everyday charge measurements look continuous even though charge is quantised. Add the charges algebraically to find the net charge."
    ]
  ],
  "formula": [
    [
      "q = ne",
      "e = 1.6 × 10⁻¹⁹ C; n is a signed integer.",
      "For the net charge on an ordinary body."
    ],
    [
      "Number of transferred electrons = |q|/e",
      "Use the magnitude to count particles; use the sign to identify gain or loss.",
      "An electron itself has charge −e."
    ]
  ],
  "visual": "charge",
  "reasoning": [
    "Equal positive and negative totals cancel in the algebraic sum.",
    "An extra electron adds −e; removing an electron changes the body’s charge by +e.",
    "A proposed ordinary-body charge must give an integer for q/e."
  ],
  "worked": {
    "q": "A body has charge −4.8 × 10⁻¹⁹ C. How many excess electrons does it have?",
    "steps": [
      "The minus sign means excess electrons.",
      "N = |q|/e = (4.8 × 10⁻¹⁹)/(1.6 × 10⁻¹⁹).",
      "N = 3 excess electrons. The count has no unit."
    ]
  },
  "guided": {
    "q": "A body loses 5 electrons. What is its charge if it was initially neutral?",
    "options": [
      "−8.0 × 10⁻¹⁹ C",
      "+8.0 × 10⁻¹⁹ C",
      "+5 C"
    ],
    "correct": 1,
    "hint": "Removing negative charge leaves positive charge.",
    "why": "q = +5e = +8.0 × 10⁻¹⁹ C."
  },
  "independent": {
    "q": "Could an ordinary isolated body have net charge 2.4 × 10⁻¹⁹ C? Explain using e = 1.6 × 10⁻¹⁹ C.",
    "solution": [
      "q/e = 1.5, which is not an integer.",
      "Such a net charge is not permitted for the ordinary isolated bodies considered here."
    ]
  },
  "boardTask": {
    "marks": 2,
    "q": "Explain electrical neutrality and quantisation of charge.",
    "points": [
      "A neutral body has equal positive and negative charge totals, so its net charge is zero.",
      "Charge is quantised: q = ne, with n an integer and e = 1.6 × 10⁻¹⁹ C."
    ]
  },
  "trap": [
    "A positive body must have received protons.",
    "Ordinary charging of a solid usually transfers electrons; loss of electrons leaves positive net charge."
  ],
  "recall": [
    "What do a negative sign and the word neutral each tell you?",
    "Negative means an excess of electrons in ordinary charging. Neutral means zero net charge, with positive and negative charge totals balancing."
  ],
  "check": {
    "q": "A body becomes negatively charged when it ordinarily:",
    "options": [
      "gains electrons",
      "loses electrons",
      "loses all protons",
      "loses equal positive and negative charge"
    ],
    "correct": 0,
    "why": "Gaining electrons adds negative charge."
  }
});

addLesson({
  "chapter": 1,
  "id": "02",
  "title": "Conservation and addition of charge",
  "section": "1.4",
  "objective": "Use total charge before and after an interaction and explain why charging does not create net charge.",
  "bridge": [
    "units"
  ],
  "lead": "If one object becomes positive and another negative, where did those charges come from? Keep an account of the whole isolated system, not only one object.",
  "explain": [
    [
      "Choose the system",
      "A system is the collection of bodies you include in your accounting. It is electrically isolated when no net charge crosses its boundary. Individual objects may gain or lose charge while the total for the isolated system stays fixed."
    ],
    [
      "Add with signs",
      "Charge is additive. For charges q₁, q₂ and q₃, the total is q₁ + q₂ + q₃. A negative value reduces a positive total. This is scalar algebra; you do not draw vector triangles to add charge."
    ],
    [
      "Transfer is consistent with conservation",
      "When electrons move from A to B, A loses exactly the negative charge that B gains. Their charge changes are equal and opposite. Even in processes creating charged particle pairs, the algebraic net charge is conserved. The law concerns total charge, not the number of charged objects."
    ]
  ],
  "formula": [
    [
      "Σq_before = Σq_after",
      "Σ means the algebraic sum over the chosen system. Unit: C.",
      "The system must exchange no net charge with its surroundings."
    ]
  ],
  "visual": "conservation",
  "reasoning": [
    "Write the initial charge of every object with its sign.",
    "Add them before the interaction.",
    "Set the final algebraic sum equal to that value, then solve for the unknown."
  ],
  "worked": {
    "q": "Two isolated bodies initially have +7 μC and −3 μC. Afterwards one has +1 μC. Find the charge on the other.",
    "steps": [
      "Initial total = +7 − 3 = +4 μC.",
      "Let the other final charge be q. Then +1 + q = +4 μC.",
      "q = +3 μC. The charge of each body changed, but the total did not."
    ]
  },
  "guided": {
    "q": "Initially neutral objects exchange 4 μC of negative charge from A to B. What are their final charges?",
    "options": [
      "A = −4 μC; B = +4 μC",
      "A = +4 μC; B = −4 μC",
      "A = +4 μC; B = +4 μC"
    ],
    "correct": 1,
    "hint": "A loses electrons; B receives them.",
    "why": "The final sum is zero, and A has lost negative charge."
  },
  "independent": {
    "q": "An isolated system starts with +12 nC. Two final parts carry −5 nC and +9 nC. What charge does the third carry?",
    "solution": [
      "−5 + 9 + q = 12 nC.",
      "q = +8 nC."
    ]
  },
  "boardTask": {
    "marks": 2,
    "q": "An isolated pair of neutral objects acquires equal and opposite charges after interaction. Explain why this does not violate conservation of charge.",
    "points": [
      "The initial net charge of the pair is zero.",
      "Electron transfer gives equal and opposite charge changes; the final algebraic total is still zero."
    ]
  },
  "trap": [
    "The charge on each body in an isolated system must remain unchanged.",
    "Only the algebraic total is fixed; charge may be exchanged between bodies."
  ],
  "recall": [
    "What must you state before applying charge conservation?",
    "Identify the whole system and establish that no net charge crosses its boundary."
  ],
  "check": {
    "q": "Charges +2 μC, −6 μC and +1 μC have total charge:",
    "options": [
      "+9 μC",
      "−3 μC",
      "+3 μC",
      "−9 μC"
    ],
    "correct": 1,
    "why": "2 − 6 + 1 = −3 μC."
  }
});

addLesson({
  "chapter": 1,
  "id": "03",
  "title": "Coulomb’s law: magnitude and direction",
  "section": "1.5",
  "objective": "Calculate the force between two point charges, choose its direction, and reason about changes of charge and distance.",
  "bridge": [
    "units",
    "inverse",
    "vectors"
  ],
  "lead": "Two charges can be separated by empty space and still exert forces. The next question is quantitative: how large is the force, and what changes it?",
  "explain": [
    [
      "Build the relation",
      "With separation fixed, doubling either charge magnitude doubles the force magnitude. With both charges fixed, increasing their separation weakens the force by an inverse-square rule. Doubling distance gives one quarter the force, not one half."
    ],
    [
      "Attach a direction after finding magnitude",
      "The force acts along the line joining the two point charges. Each charge experiences an equal-magnitude force in the opposite direction to the other. Like signs give repulsion; unlike signs give attraction. The larger charge does not exert a larger force on the smaller one than it receives."
    ],
    [
      "Use the model within its conditions",
      "The simple relation is for stationary point charges. An extended charged object may be treated as a point only when its size is negligible compared with relevant separations, or when symmetry justifies it. The vacuum constant k is about 9 × 10⁹ N m² C⁻². For a homogeneous dielectric medium use its permittivity in place of ε₀."
    ]
  ],
  "formula": [
    [
      "F = k|q₁q₂|/r²",
      "q₁,q₂ in C; r in m; F in N. k = 1/(4πε₀).",
      "Magnitude in vacuum; signs determine attraction or repulsion."
    ],
    [
      "F_on 2 = k q₁q₂ r̂₁₂/r²",
      "r̂₁₂ points from charge 1 to charge 2.",
      "Signed vector form; do not also take an absolute value."
    ]
  ],
  "visual": "coulomb",
  "graph": "inverse-square",
  "reasoning": [
    "Convert every charge and distance to SI units.",
    "Substitute magnitudes into Coulomb’s law.",
    "Use the charge signs to place the force arrow on the charge asked about."
  ],
  "worked": {
    "q": "Charges +2 μC and −3 μC are 0.30 m apart in vacuum. Find the force magnitude and nature.",
    "steps": [
      "q₁ = 2 × 10⁻⁶ C, |q₂| = 3 × 10⁻⁶ C, r² = 0.09 m².",
      "F = (9 × 10⁹)(2 × 10⁻⁶)(3 × 10⁻⁶)/0.09.",
      "F = 0.60 N. The charges attract; each force points towards the other charge."
    ]
  },
  "guided": {
    "q": "For the same charges, increase separation from 0.30 m to 0.60 m. Enter the new force magnitude in N.",
    "answer": 0.15,
    "tolerance": 0.001,
    "hint": "Use the ratio F_new/F_old = (r_old/r_new)².",
    "why": "0.60/4 = 0.15 N."
  },
  "independent": {
    "q": "Both charge magnitudes are doubled and the separation is tripled. Express the new force in terms of the original F.",
    "solution": [
      "The numerator is multiplied by 2 × 2 = 4.",
      "The denominator is multiplied by 3² = 9.",
      "F_new = 4F/9; charge signs have not changed the nature of the force."
    ]
  },
  "boardTask": {
    "marks": 3,
    "q": "State Coulomb’s law for point charges in vacuum, define its symbols and specify the direction of force.",
    "points": [
      "F = (1/4πε₀)|q₁q₂|/r², proportional to the product of magnitudes and inversely proportional to r².",
      "q₁ and q₂ are charges; r is their separation; ε₀ is vacuum permittivity.",
      "Forces act along the joining line: repulsive for like charges and attractive for unlike charges."
    ]
  },
  "trap": [
    "A negative product means a negative force magnitude.",
    "Magnitude is nonnegative. A signed vector expression encodes direction separately."
  ],
  "recall": [
    "What changes by a factor of four when distance doubles?",
    "The denominator r²; therefore the force becomes one quarter."
  ],
  "check": {
    "q": "Charges +q and +4q exert forces of magnitudes F₁ and F₂ on one another. Then:",
    "options": [
      "F₂ = 4F₁",
      "F₁ = 4F₂",
      "F₁ = F₂",
      "F₁ = 16F₂"
    ],
    "correct": 2,
    "why": "Both mutual forces have magnitude k|q(4q)|/r² and opposite directions."
  }
});

addLesson({
  "chapter": 1,
  "id": "04",
  "title": "Forces in a system of charges",
  "section": "1.6",
  "objective": "Find the net force on one chosen charge without confusing source charges, distances or directions.",
  "bridge": [
    "vectors",
    "units"
  ],
  "lead": "A charge may be pulled one way by one neighbour and pushed another way by a second. Solve each interaction first, then combine the forces on the chosen target.",
  "explain": [
    [
      "Circle the target",
      "In a many-charge problem, write “force on A” before calculating. Only arrows acting on A belong in that vector sum. The force exerted by A on B acts on B and must not be added to forces on A."
    ],
    [
      "Find each pair interaction",
      "For each source, use the source–target distance and their two charge signs. A diagram with positions prevents the common error of using the distance between two source charges."
    ],
    [
      "Choose an axis",
      "For collinear charges, choose right as positive. Rightward force terms are positive; leftward terms negative. Add those signed force components, then report the magnitude and direction of the resultant. For a plane arrangement, use x and y components separately."
    ]
  ],
  "formula": [
    [
      "F⃗_A = F⃗_AB + F⃗_AC + …",
      "F⃗_AB here means force on A due to B; state the convention.",
      "Every term must act on the same target charge."
    ]
  ],
  "visual": "three-charges",
  "reasoning": [
    "Select the target and list each source.",
    "Compute every pair-force magnitude.",
    "Draw directions before assigning algebraic signs.",
    "Add components and state resultant direction."
  ],
  "worked": {
    "q": "A +1 μC target is at x = 0. A +1 μC source is at x = −1 m and a +4 μC source at x = +2 m. Find the net force on the target.",
    "steps": [
      "The left positive source repels the target rightward: F_left = 9 × 10⁹ × 10⁻¹²/1² = 0.009 N.",
      "The right positive source repels the target leftward: F_right = 9 × 10⁹ × 4 × 10⁻¹²/2² = 0.009 N.",
      "Signed sum = +0.009 − 0.009 = 0 N. The target is in force balance."
    ]
  },
  "guided": {
    "q": "If the right-hand source in that example is −4 μC instead, the target’s net force is:",
    "options": [
      "0 N",
      "0.018 N to the right",
      "0.018 N to the left"
    ],
    "correct": 1,
    "hint": "The negative source attracts the positive target towards the right.",
    "why": "Both force contributions are now rightward, so they add."
  },
  "independent": {
    "q": "A +1 μC target is at x = 0, +1 μC at x = −1 m, and +1 μC at x = +2 m. Find the resultant force on the target.",
    "solution": [
      "Left source gives +0.009 N.",
      "Right source gives −0.00225 N.",
      "Result = +0.00675 N, i.e. 6.75 × 10⁻³ N to the right."
    ]
  },
  "boardTask": {
    "marks": 3,
    "q": "Describe and apply a systematic method for finding the force on a charge in a collinear three-charge system.",
    "points": [
      "Identify the target charge and use the source–target distance for each Coulomb force.",
      "Determine attraction or repulsion for each pair and assign signed components on one axis.",
      "Add signed forces; state the resultant with magnitude, direction and SI unit."
    ]
  },
  "trap": [
    "Equal distances always mean equal forces.",
    "Charge products matter too. Compare k|q_target q_source|/r² for every pair."
  ],
  "recall": [
    "Which force arrows can enter one resultant?",
    "Only the forces acting on the same chosen target."
  ],
  "check": {
    "q": "A positive target is between two equal positive sources at equal distances. The net force on it is:",
    "options": [
      "rightward",
      "leftward",
      "zero",
      "nonzero but perpendicular to the line"
    ],
    "correct": 2,
    "why": "Equal-magnitude forces act in opposite directions and cancel."
  }
});

addLesson({
  "chapter": 1,
  "id": "05",
  "title": "Superposition and vector addition",
  "section": "1.6",
  "objective": "Combine non-collinear forces, use symmetry and locate a cancellation point.",
  "bridge": [
    "vectors",
    "algebra"
  ],
  "lead": "“Add the contributions” is easy to say. The essential skill is deciding what kind of addition is appropriate. Force is a vector, so direction is part of every contribution.",
  "explain": [
    [
      "State the principle precisely",
      "Each source contributes the Coulomb force it would produce on the target on its own. The net force is the vector sum of those contributions. The presence of another fixed charge does not change the pair contribution from a source at a fixed position. We will use this same principle for electric fields after defining them in topic 07."
    ],
    [
      "Resolve a plane problem",
      "Draw perpendicular axes. If a vector of magnitude F makes angle θ with +x, its components are F cos θ and F sin θ, with signs chosen from the drawing. Add all x components to obtain Fₓ and all y components to obtain Fᵧ. The resultant magnitude is √(Fₓ² + Fᵧ²)."
    ],
    [
      "Use symmetry carefully",
      "For a positive target between two positive sources, one source pushes it right and the other pushes it left. Their forces can cancel. The balance point lies closer to the smaller source because its force must be strengthened by a shorter distance. Between unlike sources, a positive target is repelled by the positive one and attracted by the negative one: both forces point towards the negative source."
    ]
  ],
  "formula": [
    [
      "F⃗_net = ΣF⃗ᵢ",
      "Add force components in a common coordinate system. Unit: N.",
      "The sources and observation position are specified."
    ],
    [
      "|F⃗_net| = √(Fₓ² + Fᵧ²)",
      "Use the signs of components to select the angle’s quadrant.",
      "For perpendicular x and y axes."
    ]
  ],
  "visual": "vectors",
  "reasoning": [
    "Draw the vectors before calculation.",
    "Use symmetry to remove cancelling components.",
    "Add the surviving components and recover magnitude and direction."
  ],
  "worked": {
    "q": "A target experiences 3 N along +x and 4 N along +y. Find the resultant.",
    "steps": [
      "Fₓ = 3 N and Fᵧ = 4 N.",
      "F = √(9 + 16) = 5 N.",
      "tan θ = 4/3; θ ≈ 53° above +x. A scalar sum of 7 N would be incorrect."
    ]
  },
  "guided": {
    "q": "Two perpendicular force contributions are 6 N and 8 N. Enter the resultant magnitude in N.",
    "answer": 10,
    "tolerance": 0.01,
    "hint": "Use the Pythagorean relation for perpendicular vectors.",
    "why": "√(6² + 8²) = 10 N."
  },
  "independent": {
    "q": "Charges +q and +4q are 3 m apart. Where between them could a positive target charge +q₀ have zero net force?",
    "solution": [
      "Let x be the distance from +q; the other distance is 3 − x. The two repulsive forces on the target oppose.",
      "kqq₀/x² = k(4q)q₀/(3 − x)². Cancelling kqq₀ gives 3 − x = 2x.",
      "x = 1 m from +q and 2 m from +4q. A nonzero test-charge magnitude cancels out of the result."
    ]
  },
  "boardTask": {
    "marks": 3,
    "q": "State the superposition principle and explain how it is used when two electrostatic force contributions are perpendicular.",
    "points": [
      "The resultant force is the vector sum of the independent forces due to individual source charges.",
      "Choose perpendicular axes along the two contributions and add components.",
      "For perpendicular magnitudes F₁ and F₂, F = √(F₁² + F₂²), with direction obtained from the component ratio and quadrant."
    ]
  },
  "trap": [
    "Opposing forces cancel regardless of their magnitudes.",
    "Cancellation needs equal magnitudes as well as opposite directions. Use Coulomb’s law for both contributions."
  ],
  "recall": [
    "Why can you not add 3 N and 4 N to obtain 7 N here?",
    "They are perpendicular vectors. Their components give a resultant of 5 N."
  ],
  "check": {
    "q": "A positive target charge is placed between a positive source and a negative source. Its two force contributions point:",
    "options": [
      "in opposite directions",
      "both towards the negative source",
      "both towards the positive source",
      "perpendicular to each other"
    ],
    "correct": 1,
    "why": "The positive source repels the target and the negative source attracts it. Between the sources, both point towards the negative source."
  }
});

addLesson({
  "chapter": 1,
  "id": "06",
  "title": "Continuous charge distributions",
  "section": "1.12",
  "objective": "Choose linear, surface or volume charge density and express a total as a sum of small contributions.",
  "bridge": [
    "units",
    "integral"
  ],
  "lead": "A long wire contains far too many charged particles to label one by one. At ordinary length scales, we describe how much charge occupies a small length, area or volume.",
  "explain": [
    [
      "Choose the geometry first",
      "A thin wire is represented by a line distribution, a thin sheet by a surface distribution and a bulk object by a volume distribution. These are mathematical approximations at scales much larger than atomic spacing. Quantisation of charge still holds microscopically."
    ],
    [
      "Density says charge per size",
      "Uniform linear density λ = Q/L means every equal length contains equal charge. Uniform surface density σ = Q/A means equal areas contain equal charge. Uniform volume density ρ = Q/volume means equal volumes contain equal charge. Their units differ."
    ],
    [
      "Build an interaction from small pieces",
      "Choose a tiny source element with charge dq. Coulomb’s law gives its contribution to the force on a specified target charge q₀. Add the contributions as vectors, keeping each element’s own distance and direction. An integral is the limit of this sum. After we define electric field, dividing this force by q₀ will give the continuous-distribution field formula in topic 08."
    ]
  ],
  "formula": [
    [
      "dq = λ dl; dq = σ dA; dq = ρ d𝒱",
      "λ: C/m; σ: C/m²; ρ: C/m³. d𝒱 denotes a volume element, not potential.",
      "For nonuniform density, use the local value at each element."
    ],
    [
      "F⃗ = kq₀∫(dq/r²) r̂",
      "q₀ is the target charge; r̂ points from each source element to it.",
      "Source and target must not coincide; add vector contributions."
    ]
  ],
  "visual": "density",
  "reasoning": [
    "Identify line, surface or volume geometry.",
    "Select the corresponding density and element.",
    "Integrate dq for total charge, or add the Coulomb force contributions of the pieces for total force."
  ],
  "worked": {
    "q": "A uniformly charged 0.50 m wire carries +3.0 μC. Find λ and the charge on a 0.10 m part.",
    "steps": [
      "λ = Q/L = (3.0 × 10⁻⁶)/0.50 = 6.0 × 10⁻⁶ C/m.",
      "q_part = λl = (6.0 × 10⁻⁶)(0.10).",
      "q_part = 0.60 μC."
    ]
  },
  "guided": {
    "q": "A sheet with σ = 2 μC/m² has area 0.30 m². Enter its charge in μC.",
    "answer": 0.6,
    "tolerance": 0.001,
    "hint": "For uniform density, Q = σA.",
    "why": "Q = 2 × 0.30 = 0.60 μC."
  },
  "independent": {
    "q": "A uniform volume density is 4 nC/m³ in a cube of side 0.50 m. Find the total charge.",
    "solution": [
      "Volume = (0.50)³ = 0.125 m³.",
      "Q = ρ𝒱 = 4 × 0.125 = 0.50 nC."
    ]
  },
  "boardTask": {
    "marks": 2,
    "q": "Define linear and surface charge densities and state their SI units.",
    "points": [
      "Linear density is charge per unit length, λ = dq/dl, with SI unit C m⁻¹.",
      "Surface density is charge per unit area, σ = dq/dA, with SI unit C m⁻²."
    ]
  },
  "trap": [
    "A continuous charge model means charge is not quantised.",
    "It is a large-scale approximation for many elementary charges."
  ],
  "recall": [
    "Which density would you choose for a thin sheet?",
    "Surface charge density σ, measured in C/m²."
  ],
  "check": {
    "q": "The SI unit of volume charge density is:",
    "options": [
      "C/m",
      "C/m²",
      "C/m³",
      "N/C"
    ],
    "correct": 2,
    "why": "Volume density is charge divided by volume."
  }
});

addLesson({
  "chapter": 1,
  "id": "07",
  "title": "Electric field and the test-charge idea",
  "section": "1.7",
  "objective": "Define electric field, infer its direction and use it to calculate forces on either sign of charge.",
  "bridge": [
    "vectors",
    "units"
  ],
  "lead": "Instead of recalculating a source’s effect for every possible target, describe the space around the source. The electric field tells you what force a positive charge would experience at each point.",
  "explain": [
    [
      "Use a small positive probe",
      "Imagine placing a small positive test charge q₀ at a point. Measure its electric force and divide by q₀. The test charge must be small enough not to appreciably rearrange the source charges. Formally the definition uses the limit as q₀ tends to zero."
    ],
    [
      "Field belongs to the sources",
      "Changing the test charge changes its force, but not the field of a fixed source arrangement. For example, doubling q₀ doubles F, leaving F/q₀ unchanged. The field exists whether or not you actually place a probe there."
    ],
    [
      "Distinguish field direction and force direction",
      "The field direction is the force direction for a positive test charge. A negative charge experiences force opposite to E⃗. Force is F⃗ = qE⃗, including the algebraic sign of q. “The electron moves left” requires additional motion information; the field tells you its force, not its instantaneous velocity."
    ]
  ],
  "formula": [
    [
      "E⃗ = lim(q₀→0) F⃗/q₀",
      "Positive q₀ is a test charge. E is measured in N/C.",
      "The source arrangement should remain unperturbed."
    ],
    [
      "F⃗ = qE⃗",
      "F in N; q in C; E in N/C.",
      "For negative q, force opposes the field."
    ]
  ],
  "visual": "field",
  "reasoning": [
    "First determine E⃗ from the sources.",
    "Multiply its magnitude by |q| for force magnitude.",
    "Keep direction for q > 0 and reverse it for q < 0."
  ],
  "worked": {
    "q": "A −2 μC charge is in a field of 300 N/C towards the right. Find its force.",
    "steps": [
      "Magnitude = |q|E = 2 × 10⁻⁶ × 300 = 6 × 10⁻⁴ N.",
      "The charge is negative, so its force is opposite to the field.",
      "Force = 6 × 10⁻⁴ N towards the left."
    ]
  },
  "guided": {
    "q": "A +3 μC test charge feels 0.006 N rightward. Enter the field magnitude in N/C.",
    "answer": 2000,
    "tolerance": 0.1,
    "hint": "Divide force by the test charge in coulombs.",
    "why": "E = 0.006/(3 × 10⁻⁶) = 2000 N/C, rightward."
  },
  "independent": {
    "q": "In a fixed field, the positive test charge is reduced to one third. How do force and measured field change?",
    "solution": [
      "F = qE, so the force becomes one third.",
      "F/q remains unchanged, so the measured field is unchanged."
    ]
  },
  "boardTask": {
    "marks": 2,
    "q": "Define electric field intensity at a point and state how the direction of force on an electron relates to it.",
    "points": [
      "Electric field intensity is the force per unit infinitesimal positive test charge at the point, with sources undisturbed.",
      "Its SI unit is N/C; an electron experiences force opposite to the electric-field direction."
    ]
  },
  "trap": [
    "A negative test charge changes the field direction.",
    "It reverses the force direction on that test charge; the source field is unchanged."
  ],
  "recall": [
    "Why is the test charge taken small?",
    "To avoid appreciably disturbing the charge distribution that produces the field."
  ],
  "check": {
    "q": "In a uniform rightward electric field, a proton and an electron experience forces that are:",
    "options": [
      "both rightward",
      "both leftward",
      "equal in magnitude and opposite in direction",
      "unequal because their masses differ"
    ],
    "correct": 2,
    "why": "Their charge magnitudes are equal. Mass affects acceleration, not the electric-force magnitude |q|E."
  }
});

addLesson({
  "chapter": 1,
  "id": "08",
  "title": "Field of a point charge",
  "section": "1.7; 1.12",
  "objective": "Find the magnitude and radial direction of a point-charge field and interpret its graph.",
  "bridge": [
    "inverse",
    "vectors"
  ],
  "lead": "A positive source repels a positive probe whichever side the probe is on. Therefore its field points away from it. A negative source gives the opposite radial pattern.",
  "explain": [
    [
      "Obtain E from Coulomb force",
      "For source Q and positive test charge q₀ a distance r away, the force magnitude is k|Q|q₀/r². Dividing by q₀ leaves k|Q|/r². The probe disappears from the final expression: the field is determined by the source and position."
    ],
    [
      "Read the direction from the source sign",
      "Define r̂ from the source towards the observation point. Then E⃗ = kQ r̂/r². Positive Q makes E⃗ outward; negative Q makes it inward. The expression is undefined at r = 0 for the ideal point model."
    ],
    [
      "Read the inverse-square graph",
      "For positive Q, the magnitude decreases towards zero as r increases, but does not become exactly zero at a finite r. The graph is curved, not a straight line. Plotting E against 1/r² instead gives a straight line through the origin of slope k|Q|."
    ],
    [
      "Extend to several sources or a distribution",
      "Superposition still applies: E⃗_net = ΣE⃗ᵢ. For a continuous distribution, a small element dq contributes dE⃗ = k dq r̂/r². Sum all elements with E⃗ = k∫(dq/r²)r̂, using λ dl, σ dA or ρ d𝒱 for dq. Each element has its own source-to-point distance and direction; the whole charge cannot generally be concentrated at an arbitrary shape’s centre."
    ]
  ],
  "formula": [
    [
      "E = k|Q|/r²; E⃗ = kQ r̂/r²",
      "Q in C; r in m; E in N/C.",
      "Vacuum point-charge model, r > 0."
    ],
    [
      "E⃗_net = ΣE⃗ᵢ; E⃗ = k∫(dq/r²) r̂",
      "Use the charge densities introduced in topic 06. E has unit N/C.",
      "Sum signed vector contributions at one observation point."
    ]
  ],
  "visual": "radial",
  "graph": "inverse-square",
  "reasoning": [
    "Write Coulomb’s force on a positive test charge.",
    "Divide the force vector by that charge.",
    "Assign outward or inward direction according to the source sign."
  ],
  "worked": {
    "q": "Find the field 0.20 m from a −4 nC source in vacuum.",
    "steps": [
      "E = (9 × 10⁹)(4 × 10⁻⁹)/(0.20)².",
      "E = 36/0.04 = 900 N/C.",
      "The field points towards the negative source."
    ]
  },
  "guided": {
    "q": "What is the field magnitude at 0.40 m from that same source? Enter N/C.",
    "answer": 225,
    "tolerance": 0.01,
    "hint": "The distance doubled.",
    "why": "E becomes 900/4 = 225 N/C."
  },
  "independent": {
    "q": "At a point, a +2 nC source creates 180 N/C. Find the source–point separation.",
    "solution": [
      "r² = kQ/E = (9 × 10⁹)(2 × 10⁻⁹)/180 = 0.10 m².",
      "r = √0.10 m ≈ 0.316 m."
    ]
  },
  "boardTask": {
    "marks": 3,
    "q": "Obtain the expression for the electric field of a point charge in vacuum and describe its direction.",
    "points": [
      "Place a small positive test charge q₀ a distance r from source Q. Coulomb’s force is F⃗ = kQq₀r̂/r².",
      "Using E⃗ = F⃗/q₀ gives E⃗ = Qr̂/(4πε₀r²).",
      "The field points radially outward for Q > 0 and inward for Q < 0; the magnitude varies as 1/r²."
    ]
  },
  "trap": [
    "The field magnitude is negative around a negative charge.",
    "Its magnitude is positive; its radial component can be negative when outward is defined as positive."
  ],
  "recall": [
    "Which quantities remain in E after dividing force by test charge?",
    "Source charge Q, source–point separation r and the medium’s permittivity."
  ],
  "check": {
    "q": "A point-charge field magnitude is graphed against 1/r². The graph is:",
    "options": [
      "a straight line through the origin",
      "a horizontal line",
      "a parabola",
      "a line with nonzero intercept"
    ],
    "correct": 0,
    "why": "E = k|Q|(1/r²), so the slope is k|Q|."
  }
});

addLesson({
  "chapter": 1,
  "id": "09",
  "title": "Read electric field lines",
  "section": "1.8",
  "objective": "Infer local field direction and relative strength from a diagram and explain the restrictions on electrostatic field lines.",
  "bridge": [
    "vectors"
  ],
  "lead": "A page cannot display a vector at every point. Field lines offer a compact map: their tangents give directions and their relative spacing helps show strength.",
  "explain": [
    [
      "How to read a line",
      "At a point, imagine a tiny tangent to the line. Its arrow gives the direction of E⃗. In comparable regions of a consistent drawing, closer-spaced lines indicate stronger field. Field lines are a representation; no physical thread or stream of material is flowing along them."
    ],
    [
      "Where lines begin and end",
      "Lines emerge from positive charges and enter negative charges. They may also extend to or from infinity. A single positive source has outward radial lines; a single negative source has inward radial lines. A uniform field is represented by parallel, equally spaced lines with a common arrow direction."
    ],
    [
      "Why diagrams obey rules",
      "Two lines cannot cross: a crossing would assign two field directions to one point. In charge-free regions lines are continuous. Electrostatic field lines do not form closed loops because the electrostatic field is conservative. A charge’s actual trajectory need not follow a field line: its initial velocity and inertia also affect its motion."
    ]
  ],
  "formula": [],
  "visual": "field-lines",
  "reasoning": [
    "Locate the point of interest.",
    "Use the tangent and arrow for direction.",
    "Compare spacing for relative magnitude.",
    "Check that lines do not cross and electrostatic lines do not form loops."
  ],
  "worked": {
    "q": "Two labelled regions of one field-line diagram show the same number of lines crossing 1 cm² and 2 cm², both normal to the field. Where is the field stronger?",
    "steps": [
      "Compare the line density, not the bare count.",
      "The same count through half the area means twice the drawn line density.",
      "The 1 cm² region represents the stronger field. The number of drawn lines itself is a diagram convention."
    ]
  },
  "guided": {
    "q": "Which drawing represents a uniform electric field?",
    "options": [
      "radial lines getting farther apart",
      "parallel lines equally spaced with the same arrow direction",
      "crossing curved lines"
    ],
    "correct": 1,
    "hint": "Uniform means the same vector at every point in the region.",
    "why": "Equal spacing represents constant magnitude; parallel arrows represent constant direction."
  },
  "independent": {
    "q": "A student draws two electrostatic field lines crossing and says an electron must move along either line. Identify both errors.",
    "solution": [
      "Crossing would give two directions of E at the crossing point, which is impossible for a definite field.",
      "An electron’s force is opposite E, and its trajectory also depends on its initial velocity. A field line is not a compulsory path."
    ]
  },
  "boardTask": {
    "marks": 3,
    "q": "State three properties of electrostatic field lines, giving a reason why two cannot intersect.",
    "points": [
      "Their tangent gives field direction; they originate on positive charges and terminate on negative charges or at infinity.",
      "They cannot intersect because the field at a point cannot have two directions.",
      "They do not form closed loops in an electrostatic field."
    ]
  },
  "trap": [
    "More drawn lines means a numerically known charge or flux without a scale.",
    "A drawing needs a stated convention to relate line count to a numerical quantity."
  ],
  "recall": [
    "What does the tangent to a field line show?",
    "The direction of the net electric field at that point."
  ],
  "check": {
    "q": "Two electrostatic field lines cannot cross because:",
    "options": [
      "charges cannot move",
      "the field at the crossing would have two directions",
      "electric field is a scalar",
      "lines have physical thickness"
    ],
    "correct": 1,
    "why": "A nonzero electric-field vector at a point has one definite direction."
  }
});

addLesson({
  "chapter": 1,
  "id": "10",
  "title": "The electric dipole and its moment",
  "section": "1.10",
  "objective": "Define a dipole, calculate its moment and distinguish zero net charge from zero field.",
  "bridge": [
    "vectors",
    "units"
  ],
  "lead": "Place equal positive and negative charges a small distance apart. Their net charge is zero, but a nearby probe is not generally equally far from both. Their effects need not cancel.",
  "explain": [
    [
      "The pair and its geometry",
      "An electric dipole consists of equal and opposite point charges separated by a distance. Use −q and +q, with q positive, and call the separation 2a. The centre is the midpoint. The dipole axis is the line through the charges."
    ],
    [
      "A vector describing strength and orientation",
      "The electric dipole moment p⃗ has magnitude q(2a), and points from the negative charge to the positive charge. Larger separation or larger charge magnitude gives a larger dipole moment. Its SI unit is C m."
    ],
    [
      "Net charge and spatial arrangement are different information",
      "The total charge is zero, but the source locations differ. At most points their fields do not cancel. Far from the dipole the two fields nearly cancel, so its field decreases more rapidly with distance than the field of a single charge. Some molecules possess permanent dipole moments; others can acquire one in an applied field."
    ]
  ],
  "formula": [
    [
      "p⃗ = q(2a)p̂",
      "q is one charge magnitude; 2a is the full separation. Unit: C m.",
      "p̂ points from −q to +q. Do not use half-separation as the full separation."
    ]
  ],
  "visual": "dipole",
  "reasoning": [
    "Mark −q, +q and their midpoint.",
    "Label full separation 2a.",
    "Draw p⃗ from −q towards +q and multiply q by 2a."
  ],
  "worked": {
    "q": "Charges ±3 nC are 4 mm apart. Find their dipole moment magnitude.",
    "steps": [
      "q = 3 × 10⁻⁹ C; 2a = 4 × 10⁻³ m.",
      "p = q(2a) = 12 × 10⁻¹² C m.",
      "p = 1.2 × 10⁻¹¹ C m, directed from −q to +q."
    ]
  },
  "guided": {
    "q": "If the same charges are separated by twice the distance, the dipole moment:",
    "options": [
      "halves",
      "doubles",
      "stays zero"
    ],
    "correct": 1,
    "hint": "p is directly proportional to the full separation.",
    "why": "p = q × separation; doubling separation doubles p."
  },
  "independent": {
    "q": "A dipole moment has magnitude 8 × 10⁻¹⁰ C m and charge magnitude 2 × 10⁻⁸ C. Find the separation.",
    "solution": [
      "2a = p/q = (8 × 10⁻¹⁰)/(2 × 10⁻⁸).",
      "Full separation = 0.04 m = 4 cm."
    ]
  },
  "boardTask": {
    "marks": 2,
    "q": "Define an electric dipole and its dipole moment, including direction and SI unit.",
    "points": [
      "A dipole is a pair of equal and opposite point charges separated by a distance.",
      "p⃗ has magnitude q times the separation, points from negative to positive charge, and has SI unit C m."
    ]
  },
  "trap": [
    "p⃗ points in the same direction as field lines between the charges.",
    "p⃗ points from − to +. The electric field between the charges points from + to −."
  ],
  "recall": [
    "What two pieces of information does dipole moment combine?",
    "Charge magnitude and separation, together with the orientation from − to +."
  ],
  "check": {
    "q": "A dipole has zero total charge. Its electric field:",
    "options": [
      "must vanish everywhere",
      "can be nonzero because the charges occupy different positions",
      "has no direction",
      "is uniform everywhere"
    ],
    "correct": 1,
    "why": "Fields are vector contributions evaluated with the separate source positions."
  }
});

addLesson({
  "chapter": 1,
  "id": "11",
  "title": "Dipole field: axial and equatorial positions",
  "section": "1.10.1",
  "objective": "Derive axial and equatorial field expressions, state their directions and recognise the far-field approximation.",
  "bridge": [
    "vectors",
    "algebra"
  ],
  "lead": "The same dipole looks different from its end and from its side. Draw the two individual fields first; the direction of the resultant should be clear before the algebra.",
  "explain": [
    [
      "Point on the axis, outside the pair",
      "Let the charges −q and +q be at x = −a and +a. At an axial point x = r > a, the field of +q points right and is stronger because its distance is r−a. The field of −q points left and has distance r+a. The resultant is along p⃗. The same direction along p⃗ applies outside the pair on the other end of the axis."
    ],
    [
      "Point on the perpendicular bisector",
      "At a point distance r from the centre on the equatorial plane, both charges are √(r²+a²) away. Components perpendicular to the dipole axis cancel; components along the axis add in the direction from +q towards −q. The field is opposite p⃗."
    ],
    [
      "Know when a simple formula is approximate",
      "If r is much larger than a, terms involving a² are negligible compared with r². Then the axial magnitude is 2kp/r³ and the equatorial magnitude is kp/r³. The factor two comparison applies at equal r in this far-field limit. Do not silently use these approximations close to a finite dipole."
    ]
  ],
  "formula": [
    [
      "E_axial = 2kpr/(r²−a²)²",
      "Magnitude at an external axial point r > a; direction along p⃗.",
      "p = 2aq, r measured from the centre."
    ],
    [
      "E_equatorial = kp/(r²+a²)³ᐟ²",
      "Magnitude on the equatorial plane; direction opposite p⃗.",
      "r measured from the centre."
    ],
    [
      "For r ≫ a: E_axial ≈ 2kp/r³; E_equatorial ≈ kp/r³",
      "E in N/C, p in C m, r and a in m.",
      "These are far-field expressions for a finite dipole."
    ]
  ],
  "visual": "dipole-field",
  "graph": "dipole",
  "reasoning": [
    "Axial: E = kq[(r−a)⁻² − (r+a)⁻²].",
    "Combine fractions: numerator (r+a)² − (r−a)² = 4ra. With p = 2aq, E = 2kpr/(r²−a²)².",
    "Equatorial: the distance to each charge is s = √(r²+a²), so each field magnitude is kq/s².",
    "The component along the dipole axis is (kq/s²)(a/s). Add two components: E = 2kqa/s³ = kp/(r²+a²)³ᐟ², opposite p⃗.",
    "For r ≫ a, replace r²±a² by r² to obtain the 1/r³ expressions."
  ],
  "worked": {
    "q": "A short dipole has p = 2 × 10⁻⁸ C m. At r = 0.20 m, much larger than its size, find axial and equatorial field magnitudes.",
    "steps": [
      "r³ = 0.008 m³ and kp = 180 N m³/C.",
      "E_axial ≈ 2(180)/0.008 = 4.5 × 10⁴ N/C along p⃗.",
      "E_equatorial ≈ 180/0.008 = 2.25 × 10⁴ N/C opposite p⃗."
    ]
  },
  "guided": {
    "q": "In the far field, tripling distance changes dipole-field magnitude by a factor:",
    "options": [
      "1/3",
      "1/9",
      "1/27"
    ],
    "correct": 2,
    "hint": "The dipole far field varies as 1/r³.",
    "why": "(3r)³ = 27r³."
  },
  "independent": {
    "q": "At equal large distances from a dipole’s centre, compare its axial and equatorial fields as vectors and as magnitudes.",
    "solution": [
      "Magnitude ratio E_axial/E_equatorial ≈ 2.",
      "Axial field is along p⃗, whereas equatorial field is opposite p⃗.",
      "The equal-r comparison uses the far-field condition r ≫ a."
    ]
  },
  "boardTask": {
    "marks": 5,
    "q": "Derive the field on the equatorial line of a finite electric dipole. Give the short-dipole limit and direction.",
    "points": [
      "Draw −q and +q separated by 2a, centre O, and P on the perpendicular bisector with OP = r.",
      "Each source is s = √(r²+a²) from P and contributes field magnitude kq/s².",
      "Perpendicular components cancel; axial components add, each with factor a/s.",
      "E = 2kqa/(r²+a²)³ᐟ² = kp/(r²+a²)³ᐟ² opposite p⃗.",
      "For r ≫ a, E ≈ kp/r³ opposite p⃗; state the approximation."
    ]
  },
  "trap": [
    "The axial/equatorial magnitude ratio is always exactly two for a finite dipole.",
    "It approaches two at equal distances much larger than the dipole size."
  ],
  "recall": [
    "Which components cancel on the equatorial plane?",
    "Components perpendicular to the dipole axis cancel; components opposite p⃗ add."
  ],
  "check": {
    "q": "At a far equatorial point, the electric field of a dipole is:",
    "options": [
      "parallel to p⃗ and proportional to 1/r²",
      "opposite to p⃗ and proportional to 1/r³",
      "zero because total charge is zero",
      "perpendicular to p⃗"
    ],
    "correct": 1,
    "why": "The symmetry calculation gives E⃗ ≈ −kp⃗/r³."
  }
});

addLesson({
  "chapter": 1,
  "id": "12",
  "title": "Torque on a dipole in a uniform field",
  "section": "1.11",
  "objective": "Derive dipole torque, distinguish torque from net force and identify equilibrium orientations.",
  "bridge": [
    "trig",
    "vectors"
  ],
  "lead": "A dipole in a uniform field can rotate even when its net force is zero. The two forces cancel as translations but act on different points.",
  "explain": [
    [
      "Draw one force on each charge",
      "The positive charge feels qE⃗; the negative charge feels −qE⃗. In a uniform field those forces are equal, opposite and parallel, so their vector sum is zero. Because they act at separated positions, they form a couple when the dipole is not aligned with the field."
    ],
    [
      "Find the turning effect",
      "Let θ be the angle between p⃗ and E⃗. The perpendicular separation of the force lines is 2a sin θ. Multiply one force magnitude qE by this perpendicular distance to obtain torque magnitude. The torque tends to align p⃗ with E⃗."
    ],
    [
      "Zero torque is not always stable",
      "At θ = 0° the dipole is aligned; a small displacement produces a restoring torque, so equilibrium is stable. At 180° it is anti-aligned; a small displacement drives it farther away, so equilibrium is unstable. At 90° torque magnitude is maximum. In a nonuniform field the two force magnitudes can differ, so a net force may also occur."
    ]
  ],
  "formula": [
    [
      "τ⃗ = p⃗ × E⃗; |τ| = pE sin θ",
      "p: C m; E: N/C; τ: N m. θ is between p⃗ and E⃗.",
      "Uniform external field for the simple force-couple derivation."
    ]
  ],
  "visual": "torque",
  "graph": "torque",
  "reasoning": [
    "Forces on ±q have magnitudes qE and opposite directions.",
    "Their perpendicular separation is 2a sin θ.",
    "τ = qE(2a sin θ) = pE sin θ.",
    "The right-hand rule gives τ⃗ = p⃗ × E⃗; rotation reduces θ towards stable alignment."
  ],
  "worked": {
    "q": "A dipole of moment 4 × 10⁻⁸ C m makes 30° with a uniform field of 5 × 10⁴ N/C. Find torque magnitude.",
    "steps": [
      "τ = pE sin 30°.",
      "τ = (4 × 10⁻⁸)(5 × 10⁴)(1/2).",
      "τ = 1 × 10⁻³ N m. Net force is zero in this uniform field."
    ]
  },
  "guided": {
    "q": "At θ = 90°, what is the torque magnitude for that dipole and field? Enter N m.",
    "answer": 0.002,
    "tolerance": 0.000001,
    "hint": "sin 90° = 1.",
    "why": "τ_max = pE = 2 × 10⁻³ N m."
  },
  "independent": {
    "q": "A dipole is exactly anti-parallel to a uniform field. State net force, torque and type of equilibrium.",
    "solution": [
      "Net force = 0 because forces on the two charges cancel.",
      "Torque = pE sin 180° = 0.",
      "Equilibrium is unstable; a small rotation makes it turn away from the anti-parallel orientation."
    ]
  },
  "boardTask": {
    "marks": 3,
    "q": "Derive the torque on an electric dipole in a uniform electric field.",
    "points": [
      "Show forces +qE⃗ and −qE⃗ on charges separated by 2a, with angle θ between p⃗ and E⃗.",
      "The couple arm is 2a sin θ; therefore τ = qE(2a sin θ).",
      "Using p = 2aq gives τ = pE sin θ, or τ⃗ = p⃗ × E⃗. Net force is zero."
    ]
  },
  "trap": [
    "Zero net force means the dipole cannot rotate.",
    "Torque depends on the points of application and can be nonzero even when the forces sum to zero."
  ],
  "recall": [
    "Which zero-torque orientation is stable?",
    "p⃗ parallel to E⃗, θ = 0°."
  ],
  "check": {
    "q": "A dipole in a uniform electric field at 90° has:",
    "options": [
      "maximum torque and zero net force",
      "zero torque and maximum force",
      "zero torque and zero force",
      "maximum torque and nonzero net force"
    ],
    "correct": 0,
    "why": "sin 90° = 1 gives maximum torque; the equal opposite forces still cancel."
  }
});

addLesson({
  "chapter": 1,
  "id": "13",
  "title": "Electric flux and the area vector",
  "section": "1.9",
  "objective": "Calculate flux with the correct angle, assign its sign and distinguish open and closed surfaces.",
  "bridge": [
    "trig",
    "integral"
  ],
  "lead": "A flat sheet facing the field and the same sheet turned edge-on should not contribute the same amount to a measure of field through the sheet. Flux accounts for both field and orientation.",
  "explain": [
    [
      "Give area an orientation",
      "For a flat surface, define A⃗ perpendicular to the surface with magnitude equal to its area. This perpendicular direction is its normal. For an open surface choose one normal consistently. On a closed surface, use the outward normal on each small patch."
    ],
    [
      "Use the normal, not the plane",
      "In a uniform field through a flat area, flux is Φ = EA cos θ, where θ is the angle between E⃗ and A⃗. It is largest positive at 0°, zero at 90°, and negative when the field enters against the chosen normal. If the given angle is to the plane, take the complementary angle before using cosine."
    ],
    [
      "Add small patches for a curved surface",
      "The field or normal may vary over a surface. Divide it into small patches and add E⃗·dA⃗. Use ∫ for an open surface and ∮ to emphasise a closed surface. Electric flux is a scalar with a sign. It is not a physical flow of material, and it is not literally a count of drawn field lines."
    ]
  ],
  "formula": [
    [
      "Φ = E⃗·A⃗ = EA cos θ",
      "E: N/C; A: m²; Φ: N m²/C (also V m).",
      "Uniform field over a plane surface."
    ],
    [
      "Φ = ∫ E⃗·dA⃗",
      "The closed-surface form is ∮E⃗·dA⃗ with outward normals.",
      "Use the local field and local normal on every patch."
    ]
  ],
  "visual": "flux",
  "graph": "flux",
  "reasoning": [
    "Draw E⃗ and the area normal.",
    "Identify their angle and convert area to m².",
    "Use EA cos θ and preserve the resulting sign."
  ],
  "worked": {
    "q": "A uniform 200 N/C field makes 60° with the normal to a 0.030 m² surface. Find flux.",
    "steps": [
      "The angle to use is already measured from the normal.",
      "Φ = EA cos θ = 200 × 0.030 × 1/2.",
      "Φ = +3.0 N m²/C."
    ]
  },
  "guided": {
    "q": "For the same field and area, the field is parallel to the plane. Enter flux in N m²/C.",
    "answer": 0,
    "tolerance": 0.0001,
    "hint": "Parallel to the plane means 90° to the normal.",
    "why": "cos 90° = 0, so Φ = 0."
  },
  "independent": {
    "q": "A field of 100 N/C makes 30° with a 0.020 m² plane. Find the magnitude of flux through it.",
    "solution": [
      "The angle to the normal is 60°.",
      "|Φ| = 100 × 0.020 × cos 60° = 1.0 N m²/C.",
      "The sign depends on which normal is chosen."
    ]
  },
  "boardTask": {
    "marks": 2,
    "q": "Define electric flux through a plane surface in a uniform electric field and state when it is zero.",
    "points": [
      "Φ = E⃗·A⃗ = EA cos θ, where A⃗ is normal to the surface; the SI unit is N m²/C.",
      "It is zero when E⃗ is parallel to the plane, i.e. perpendicular to A⃗."
    ]
  },
  "trap": [
    "The angle in EA cos θ is measured from the surface.",
    "It is measured from the surface normal."
  ],
  "recall": [
    "Which normal is used on a closed surface?",
    "The outward normal on every area element."
  ],
  "check": {
    "q": "For a surface with a chosen outward normal, a field pointing directly inward gives:",
    "options": [
      "positive flux",
      "negative flux",
      "always zero flux",
      "a vector flux"
    ],
    "correct": 1,
    "why": "The angle is 180°, and cos 180° = −1."
  }
});

addLesson({
  "chapter": 1,
  "id": "14",
  "title": "Gauss’s theorem and Gaussian surfaces",
  "section": "1.13",
  "objective": "Relate net closed-surface flux to enclosed charge and decide when symmetry allows calculation of a field.",
  "bridge": [
    "integral"
  ],
  "lead": "Imagine an invisible closed boundary around some charges. Gauss’s theorem relates the net electric flux through that boundary to the charge inside it.",
  "explain": [
    [
      "The theorem concerns a closed surface",
      "The algebraic net flux through any closed surface is q_enclosed/ε₀. Enclosed charges enter with their signs. A Gaussian surface is a chosen mathematical boundary, not a physical shell that changes the field. Avoid placing a point charge exactly on the boundary in these elementary applications."
    ],
    [
      "External charges still affect the field",
      "The E⃗ in the surface integral is the total field due to all sources, inside and outside. However, an outside charge contributes zero net flux through the closed surface: its inward and outward contributions cancel. Zero enclosed charge implies zero net flux, not necessarily zero field at each surface point."
    ],
    [
      "Symmetry makes the theorem useful for finding E",
      "Gauss’s law always holds in electrostatics, but you can only replace the integral by a simple E times area when symmetry and geometry justify it. Seek a surface where E is constant over relevant parts and parallel or perpendicular to their normals. Wire, plane sheet and spherical shell are the next three applications."
    ]
  ],
  "formula": [
    [
      "∮ E⃗·dA⃗ = q_enclosed/ε₀",
      "Outward area normals; q is the net enclosed charge in C.",
      "Any closed surface; E⃗ includes all charges."
    ]
  ],
  "visual": "gauss",
  "reasoning": [
    "For a point charge at the centre of a sphere, E is radial and has constant magnitude on the sphere.",
    "Flux = E4πr² = [q/(4πε₀r²)]4πr² = q/ε₀.",
    "Gauss’s theorem extends this net-flux relation to arbitrary closed surfaces and charge arrangements.",
    "For field calculation, separately justify symmetry; do not assume E is uniform merely because the surface is closed."
  ],
  "worked": {
    "q": "A closed surface encloses +5 nC and −2 nC. Find its net flux using ε₀ = 8.85 × 10⁻¹² C²/(N m²).",
    "steps": [
      "q_enclosed = +3 × 10⁻⁹ C.",
      "Φ = q_enclosed/ε₀ = (3 × 10⁻⁹)/(8.85 × 10⁻¹²).",
      "Φ ≈ +339 N m²/C. An external charge would not change this net flux."
    ]
  },
  "guided": {
    "q": "The radius of a Gaussian sphere enclosing the same charge doubles. Its net flux:",
    "options": [
      "doubles",
      "becomes one quarter",
      "is unchanged"
    ],
    "correct": 2,
    "hint": "Check what appears on the right side of Gauss’s law.",
    "why": "Enclosed charge is unchanged, so flux is unchanged. This is also the idea tested in the official 2026–27 SQP Q1."
  },
  "independent": {
    "q": "A closed surface has zero net flux. Must the field be zero everywhere on it? Give a counterexample.",
    "solution": [
      "No. Zero net flux establishes q_enclosed = 0.",
      "A closed empty surface in a nonzero uniform field has inward and outward flux cancelling. The field itself is nonzero."
    ]
  },
  "boardTask": {
    "marks": 3,
    "q": "State Gauss’s theorem. Explain the role of external charges and why zero net flux does not imply zero field.",
    "points": [
      "∮E⃗·dA⃗ = q_enclosed/ε₀ for a closed surface with outward normals.",
      "External charges contribute to E⃗ on the surface but give zero net closed-surface flux.",
      "Inward and outward contributions can cancel despite a nonzero field, as for an empty closed surface in a uniform field."
    ]
  },
  "official": [
    "Q1"
  ],
  "trap": [
    "q_enclosed = 0 means E = 0 at every point.",
    "It means only that the signed surface integral is zero."
  ],
  "recall": [
    "Does deforming a surface change net flux if it encloses the same charges?",
    "No; Gauss’s law fixes net flux by enclosed charge."
  ],
  "check": {
    "q": "A closed surface encloses +q and −q, with another +Q outside. Its net flux is:",
    "options": [
      "Q/ε₀",
      "2q/ε₀",
      "zero",
      "(Q+q)/ε₀"
    ],
    "correct": 2,
    "why": "The enclosed algebraic charge is zero; the external charge adds no net flux."
  }
});

addLesson({
  "chapter": 1,
  "id": "15",
  "title": "Gauss’s law for a long charged wire",
  "section": "1.14.1",
  "objective": "Choose a cylindrical Gaussian surface and derive the field of an infinite uniformly charged straight wire.",
  "bridge": [
    "integral",
    "vectors"
  ],
  "lead": "An infinite uniform wire has no special position along its length and no special direction around its axis. Its field pattern must respect that symmetry.",
  "explain": [
    [
      "Use the symmetry before the law",
      "For a uniformly charged infinitely long straight wire, the field is radial and perpendicular to the wire. At a fixed perpendicular distance r, its magnitude is the same everywhere around the axis and along the wire. It points outward for positive λ and inward for negative λ."
    ],
    [
      "Choose a coaxial cylinder",
      "Take a cylindrical Gaussian surface of radius r and length L, with its axis on the wire. E⃗ is parallel to outward normals on the curved wall for positive λ. E⃗ is tangent to the two flat end faces, so their flux is zero."
    ],
    [
      "Cancel the arbitrary length",
      "The curved-wall area is 2πrL and enclosed charge is λL. Apply Gauss’s law and cancel L. The result varies as 1/r, not 1/r². For a finite wire it is a useful approximation only sufficiently far from its ends, with appropriate relative dimensions."
    ]
  ],
  "formula": [
    [
      "E = |λ|/(2πε₀r)",
      "λ: C/m; r: perpendicular distance in m; E: N/C.",
      "Infinite uniformly charged wire in vacuum, outside the ideal line."
    ],
    [
      "E⃗ = [λ/(2πε₀r)] r̂",
      "r̂ points radially away from the wire.",
      "The sign of λ determines direction."
    ]
  ],
  "visual": "wire",
  "graph": "wire",
  "reasoning": [
    "Draw the charged wire and a coaxial Gaussian cylinder of radius r and length L.",
    "By symmetry, E is radial and constant on the curved surface. End-face flux is zero.",
    "∮E⃗·dA⃗ = E(2πrL). Enclosed charge = λL for positive λ.",
    "E2πrL = λL/ε₀, so E = λ/(2πε₀r); include direction according to sign."
  ],
  "worked": {
    "q": "A long wire has λ = +2.0 nC/m. Estimate E at r = 0.10 m using k = 9 × 10⁹.",
    "steps": [
      "1/(2πε₀) = 2k, so E = 2kλ/r.",
      "E = 2(9 × 10⁹)(2 × 10⁻⁹)/0.10.",
      "E = 360 N/C, radially outward."
    ]
  },
  "guided": {
    "q": "At r = 0.20 m, enter the field magnitude for the same wire in N/C.",
    "answer": 180,
    "tolerance": 0.01,
    "hint": "The wire field is inversely proportional to r.",
    "why": "Doubling r halves E: 360/2 = 180 N/C."
  },
  "independent": {
    "q": "Why would using a spherical Gaussian surface make this derivation less convenient?",
    "solution": [
      "On a sphere around a point of the wire, points have different perpendicular distances from the wire.",
      "E is not constant over that sphere and is not everywhere parallel to its normal.",
      "The integral cannot simply be written as E4πr²."
    ]
  },
  "boardTask": {
    "marks": 5,
    "q": "Using Gauss’s law, derive the electric field due to an infinitely long uniformly charged straight wire.",
    "points": [
      "State cylindrical symmetry and radial field direction.",
      "Choose and label a coaxial Gaussian cylinder, radius r and length L.",
      "Explain that flux through end faces is zero and curved-wall flux is E2πrL.",
      "Use q_enclosed = λL and E2πrL = λL/ε₀.",
      "Obtain E = |λ|/(2πε₀r), with outward direction for λ > 0 and inward direction for λ < 0."
    ]
  },
  "trap": [
    "The area to use is πr² because the Gaussian surface is a cylinder.",
    "Flux passes through its curved wall, of area 2πrL. End-face flux is zero."
  ],
  "recall": [
    "Why is flux through a cylinder’s end faces zero?",
    "The radial electric field is perpendicular to their normals, so E⃗·dA⃗ = 0."
  ],
  "check": {
    "q": "At twice the perpendicular distance from an ideal infinite line charge, E is:",
    "options": [
      "E/2",
      "E/4",
      "2E",
      "unchanged"
    ],
    "correct": 0,
    "why": "The cylindrical-symmetry result varies as 1/r."
  }
});

addLesson({
  "chapter": 1,
  "id": "16",
  "title": "Gauss’s law for an infinite plane sheet",
  "section": "1.14.2",
  "objective": "Use a pillbox to derive the sheet field and distinguish it from the field just outside a conductor.",
  "bridge": [
    "integral"
  ],
  "lead": "An infinite uniform plane has no preferred direction along its surface. Its field can point only perpendicular to the plane, with equal magnitudes on the two sides.",
  "explain": [
    [
      "Identify the ideal source",
      "Consider an infinite, uniformly charged thin nonconducting plane sheet with surface charge density σ. Reflection symmetry makes the field equally strong on either side and normal to the sheet. Positive σ gives field pointing away on both sides."
    ],
    [
      "The pillbox has two contributing faces",
      "Choose a short cylinder crossing the sheet, with each flat face parallel to the sheet and of area A. For positive σ, outward flux is EA through each face. The curved side has zero flux because E⃗ is parallel to it. Enclosed charge is σA."
    ],
    [
      "Why no distance remains",
      "The total flux is 2EA, so E = σ/(2ε₀) for positive σ. There is no distance variable in this ideal infinite-sheet result. A finite sheet has edge effects. Also distinguish a nonconducting isolated sheet from a conductor surface: inside a conductor E = 0, which changes the Gaussian pillbox result just outside to |σ_surface|/ε₀."
    ]
  ],
  "formula": [
    [
      "E = |σ|/(2ε₀)",
      "σ: C/m²; E: N/C.",
      "Uniform infinite nonconducting plane sheet in vacuum."
    ]
  ],
  "visual": "sheet",
  "graph": "sheet",
  "reasoning": [
    "Draw a pillbox with its axis normal to the infinite sheet.",
    "The two flat faces contribute EA each; the curved surface contributes zero.",
    "Enclosed charge = σA, hence 2EA = σA/ε₀.",
    "For positive σ, E = σ/(2ε₀), pointing away from the sheet on each side."
  ],
  "worked": {
    "q": "A plane sheet has σ = +8.85 × 10⁻⁹ C/m². Find E using ε₀ = 8.85 × 10⁻¹².",
    "steps": [
      "E = σ/(2ε₀).",
      "E = (8.85 × 10⁻⁹)/(2 × 8.85 × 10⁻¹²).",
      "E = 500 N/C, away from the sheet."
    ]
  },
  "guided": {
    "q": "For the ideal infinite sheet, increase the observation distance from 2 cm to 6 cm. E becomes:",
    "options": [
      "E/3",
      "E/9",
      "unchanged"
    ],
    "correct": 2,
    "hint": "Look for distance in the final formula.",
    "why": "The ideal sheet field does not depend on distance."
  },
  "independent": {
    "q": "Two infinite sheets carry +σ and −σ. Use superposition to find field magnitudes between them and outside them.",
    "solution": [
      "Each sheet contributes |σ|/(2ε₀).",
      "Between the sheets, both fields point from + to − and add: E = |σ|/ε₀.",
      "Outside, the equal fields oppose and cancel: E = 0."
    ]
  },
  "boardTask": {
    "marks": 3,
    "q": "Derive the field of a uniformly charged infinite plane sheet using Gauss’s law.",
    "points": [
      "Choose a pillbox crossing the sheet, with equal face areas A parallel to it. Symmetry gives a normal field of equal magnitude on either side.",
      "Total flux = EA + EA = 2EA; side-wall flux is zero and q_enclosed = σA.",
      "Gauss’s law gives E = |σ|/(2ε₀), normal to the sheet and away for positive charge."
    ]
  },
  "trap": [
    "Only one pillbox face contributes flux.",
    "Both faces contribute for the isolated nonconducting sheet; omitting one causes a factor-of-two error."
  ],
  "recall": [
    "What cancels to make the sheet result independent of distance?",
    "The Gaussian face area A cancels between total flux 2EA and enclosed charge σA; no distance enters the result."
  ],
  "check": {
    "q": "For a positive infinite nonconducting sheet, the field is:",
    "options": [
      "parallel to the sheet",
      "normal and outward on each side",
      "towards the sheet on each side",
      "zero on one side"
    ],
    "correct": 1,
    "why": "Symmetry requires a normal field; a positive sheet repels positive probes."
  }
});

addLesson({
  "chapter": 1,
  "id": "17",
  "title": "Field of a uniformly charged thin spherical shell",
  "section": "1.14.3",
  "objective": "Derive the field inside and outside a shell and draw its radial variation correctly.",
  "bridge": [
    "integral"
  ],
  "lead": "A charge spread uniformly over a thin spherical shell produces a very different inside and outside result. The distinction follows from enclosed charge and spherical symmetry together.",
  "explain": [
    [
      "Outside the shell",
      "Take a concentric Gaussian sphere of radius r greater than shell radius R. Spherical symmetry makes E radial and constant over it. All shell charge Q is enclosed. The outside field is therefore the same as that of a point charge Q at the centre."
    ],
    [
      "Inside the shell",
      "For a concentric Gaussian sphere with r < R, no charge is enclosed. Symmetry again permits flux = E4πr², so E = 0. The centre also has zero field by symmetry. This conclusion depends on the uniformly charged spherical-shell geometry; zero enclosed charge alone is not generally sufficient."
    ],
    [
      "Read the boundary and graph",
      "Inside, the E-versus-r graph lies on zero. Immediately outside a positively charged ideal thin shell, E approaches kQ/R²; farther out it decreases as 1/r². There is a jump at an ideal charged surface. Give inside and outside limits rather than assigning an ambiguous single field value on the infinitely thin surface."
    ]
  ],
  "formula": [
    [
      "For r < R: E = 0",
      "R is shell radius; r is distance from its centre.",
      "Uniformly charged thin spherical shell."
    ],
    [
      "For r > R: E⃗ = (kQ/r²) r̂",
      "E magnitude is k|Q|/r²; unit N/C.",
      "Radially outward for Q > 0, inward for Q < 0."
    ]
  ],
  "visual": "shell",
  "graph": "shell",
  "reasoning": [
    "Choose a concentric Gaussian sphere of radius r; use spherical symmetry.",
    "For r > R, E4πr² = Q/ε₀, so E = Q/(4πε₀r²) for positive Q.",
    "For 0 < r < R, enclosed charge is zero, so E4πr² = 0 and E = 0.",
    "At r = 0 use symmetry; distinguish the two limits at r = R in the graph."
  ],
  "worked": {
    "q": "A shell of radius 0.20 m carries +4 nC uniformly. Find E at r = 0.10 m and r = 0.40 m.",
    "steps": [
      "0.10 m is inside the shell, so E = 0.",
      "At 0.40 m, E = (9 × 10⁹)(4 × 10⁻⁹)/(0.40)².",
      "E = 225 N/C, radially outward."
    ]
  },
  "guided": {
    "q": "For that shell, enter E just outside r = 0.20 m in N/C.",
    "answer": 900,
    "tolerance": 0.01,
    "hint": "Use the outside limit kQ/R².",
    "why": "36/0.04 = 900 N/C."
  },
  "independent": {
    "q": "A shell’s charge doubles while its radius is unchanged. How do fields at its centre and at a fixed external point change?",
    "solution": [
      "At the centre, E remains zero.",
      "At the external point, E is proportional to Q and doubles."
    ]
  },
  "boardTask": {
    "marks": 5,
    "q": "Derive the field inside and outside a uniformly charged thin spherical shell and describe its E–r graph.",
    "points": [
      "Draw shell radius R and concentric Gaussian sphere radius r; state spherical symmetry.",
      "For r > R, enclosed charge is Q and E4πr² = Q/ε₀.",
      "Obtain E = kQ/r² outward for positive Q.",
      "For r < R, enclosed charge is zero and symmetry gives E = 0.",
      "Graph: zero inside, jump to the outside limit kQ/R² at R, then inverse-square decay; label axes and regions."
    ]
  },
  "trap": [
    "The field is zero anywhere with no enclosed charge, regardless of geometry.",
    "Gauss’s law alone gives zero net flux; the spherical symmetry lets you infer E = 0 here."
  ],
  "recall": [
    "Why is the outside field equivalent to a central point charge?",
    "Spherical symmetry gives constant radial E on a concentric sphere and that sphere encloses the full charge Q."
  ],
  "check": {
    "q": "A point at r = R/2 inside a uniformly charged thin spherical shell has field magnitude:",
    "options": [
      "4kQ/R²",
      "2kQ/R²",
      "kQ/R²",
      "zero"
    ],
    "correct": 3,
    "why": "The field is zero everywhere inside the uniform thin spherical shell."
  }
});
