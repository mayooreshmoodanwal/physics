addLesson({
  "chapter": 2,
  "id": "18",
  "title": "Electric potential: energy per unit charge",
  "section": "2.1–2.2",
  "objective": "Explain potential without confusing it with field or potential energy, and state its reference and SI unit.",
  "bridge": [
    "work",
    "units"
  ],
  "lead": "The field describes force. Another useful description asks how much potential energy a charge has at a location. Dividing that energy by the charge gives electric potential.",
  "explain": [
    [
      "Separate position from the probe",
      "For a small charge q placed in a given external electrostatic potential V, its potential energy is U = qV relative to the chosen reference. The potential describes the location in the source field; potential energy describes the charge–source system. A larger positive probe has proportionally larger U at the same V."
    ],
    [
      "Choose the zero",
      "Only differences in potential affect electrostatic work. We often choose V = 0 at infinity for localised source charges. This convention is not suitable for every ideal infinite distribution. Always state or use the reference specified by the problem."
    ],
    [
      "Potential is a signed scalar",
      "Potential has no spatial direction. It may be positive, negative or zero relative to the reference. A negative charge at positive potential has negative U because q is negative. Do not decide force direction from the sign of V alone; the way V changes with position matters."
    ]
  ],
  "formula": [
    [
      "V = U/q; U = qV",
      "V is in volts, where 1 V = 1 J/C. U in J, q in C.",
      "U is the interaction energy with a prescribed external field and the same reference."
    ]
  ],
  "visual": "potential",
  "reasoning": [
    "Choose the potential-energy reference.",
    "Compare the energy of a test charge with that reference.",
    "Divide by its signed charge to obtain potential."
  ],
  "worked": {
    "q": "A +2 μC test charge has interaction potential energy +6 × 10⁻⁴ J at P. Find V(P) for the same reference.",
    "steps": [
      "V = U/q.",
      "V = (6 × 10⁻⁴)/(2 × 10⁻⁶).",
      "V = +300 V. Doubling the probe charge would double U but leave V unchanged."
    ]
  },
  "guided": {
    "q": "At V = +300 V, a −1 μC charge has potential energy:",
    "options": [
      "+3 × 10⁻⁴ J",
      "−3 × 10⁻⁴ J",
      "zero"
    ],
    "correct": 1,
    "hint": "Use the signed charge in U = qV.",
    "why": "U = (−10⁻⁶)(300) = −3 × 10⁻⁴ J."
  },
  "independent": {
    "q": "Explain why potential and potential energy are different quantities even though U = qV.",
    "solution": [
      "Potential V describes energy per unit charge at a position relative to a reference.",
      "Potential energy U depends on the placed charge as well as that potential.",
      "Their SI units are V (J/C) and J respectively."
    ]
  },
  "boardTask": {
    "marks": 2,
    "q": "Define electrostatic potential at a point and state its SI unit.",
    "points": [
      "It is the external work per unit positive test charge in bringing that charge slowly from a chosen zero-potential reference to the point.",
      "Its unit is volt, equal to J/C; the reference is commonly infinity for localised charges."
    ]
  },
  "trap": [
    "A point at positive potential must exert force to the right.",
    "Potential is scalar. Force direction follows the field or the spatial change of potential."
  ],
  "recall": [
    "What does one volt mean?",
    "One joule of potential-energy change per coulomb for a one-volt potential difference."
  ],
  "check": {
    "q": "When a test charge at a fixed point is doubled, the source potential at that point:",
    "options": [
      "doubles",
      "halves",
      "remains unchanged",
      "becomes negative"
    ],
    "correct": 2,
    "why": "The potential is determined by the fixed sources and the reference, not the test-charge magnitude."
  }
});

addLesson({
  "chapter": 2,
  "id": "19",
  "title": "Potential difference and work",
  "section": "2.2",
  "objective": "Calculate work done by the field and by an external agent, with correct signs.",
  "bridge": [
    "work"
  ],
  "lead": "“Moving a charge needs work” is incomplete until you say who does the work and which way the charge moves. A potential difference makes that accounting precise.",
  "explain": [
    [
      "Compare two points",
      "Let ΔV = V_B − V_A. For a charge q moved from A to B, its potential-energy change is ΔU = qΔV. For slow movement with negligible change in kinetic energy, the external agent supplies W_ext = ΔU."
    ],
    [
      "The field’s work has the opposite sign",
      "The work done by the electrostatic field is W_field = −ΔU = q(V_A − V_B). Positive charge moving to lower potential loses potential energy; the field does positive work. Negative charges require extra care because q reverses the sign."
    ],
    [
      "Work depends on endpoints",
      "An electrostatic field is conservative. Its work between two given points is independent of the path; work around a closed path is zero. Along an equipotential surface ΔV = 0, so electric-field work is zero. That does not require the electric field itself to vanish."
    ]
  ],
  "formula": [
    [
      "ΔU = q(V_B−V_A)",
      "q in C; potential difference in V; energy and work in J.",
      "For the same charge and external electrostatic potential."
    ],
    [
      "W_field = −qΔV; W_ext,slow = qΔV",
      "The external-work relation assumes negligible change in kinetic energy.",
      "In general W_ext + W_field = ΔK if these are the only forces doing work."
    ]
  ],
  "visual": "work",
  "reasoning": [
    "State the initial and final potentials.",
    "Form final minus initial: ΔV.",
    "Multiply by signed q for ΔU; reverse sign for work by the field."
  ],
  "worked": {
    "q": "Move +2 μC slowly from 100 V to 250 V. Find external work and field work.",
    "steps": [
      "ΔV = 250 − 100 = +150 V.",
      "W_ext = qΔV = (2 × 10⁻⁶)(150) = +3 × 10⁻⁴ J.",
      "W_field = −3 × 10⁻⁴ J. The system gains potential energy."
    ]
  },
  "guided": {
    "q": "Move −2 μC through the same potential change. Enter external work in μJ.",
    "answer": -300,
    "tolerance": 0.1,
    "hint": "Keep the negative sign of q.",
    "why": "W_ext = (−2 μC)(150 V) = −300 μJ."
  },
  "independent": {
    "q": "An electric field does +12 μJ when moving +3 μC from A to B. Find V_B − V_A.",
    "solution": [
      "W_field = −qΔV.",
      "ΔV = −12 μJ/(3 μC) = −4 V.",
      "B is 4 V lower in potential than A."
    ]
  },
  "boardTask": {
    "marks": 3,
    "q": "Relate potential difference to work and explain path independence in an electrostatic field.",
    "points": [
      "V_B − V_A = −W_field/q for moving a test charge q from A to B.",
      "For slow external transport, W_ext = q(V_B − V_A).",
      "Because the electrostatic field is conservative, work depends only on endpoints and is zero around a closed path."
    ]
  },
  "trap": [
    "Work done by the field and external work always have the same sign.",
    "For slow transport with no change in kinetic energy, they are equal in magnitude and opposite in sign."
  ],
  "recall": [
    "Which subtraction gives ΔV?",
    "Final potential minus initial potential."
  ],
  "check": {
    "q": "A positive charge moves from a higher to a lower potential under electric force. The field’s work is:",
    "options": [
      "positive",
      "negative",
      "always zero",
      "undefined"
    ],
    "correct": 0,
    "why": "W_field = q(V_initial − V_final) > 0 for positive q."
  }
});

addLesson({
  "chapter": 2,
  "id": "20",
  "title": "Potential of a point charge",
  "section": "2.3",
  "objective": "Calculate signed potential, derive its inverse-distance relation and distinguish its graph from the field graph.",
  "bridge": [
    "work",
    "integral"
  ],
  "lead": "Moving towards a positive source raises the potential. Moving towards a negative source lowers it. The sign survives because potential is an algebraic quantity.",
  "explain": [
    [
      "Set the reference at infinity",
      "For a point source Q, choose V(∞) = 0. The radial field component is E_r = kQ/r². Integrating the negative field from infinity to r gives V(r) = kQ/r."
    ],
    [
      "Read sign and distance separately",
      "Q > 0 gives positive V; Q < 0 gives negative V. The magnitude falls as 1/r. The electric-field magnitude falls as 1/r², so doubling distance halves |V| but quarters |E|."
    ],
    [
      "Connect the graph to the force description",
      "For positive Q, V decreases as r increases, and its radial slope is negative. E_r = −dV/dr is therefore positive, meaning outward. For negative Q the potential curve lies below zero and rises towards zero as r increases. The ideal point model is singular at r = 0."
    ]
  ],
  "formula": [
    [
      "V(r) = kQ/r",
      "Q in C; r in m; V in volts; Q is signed.",
      "Vacuum point charge, r > 0, with V(∞) = 0."
    ]
  ],
  "visual": "potential",
  "graph": "potential",
  "reasoning": [
    "E_r = kQ/r².",
    "V(r) − V(∞) = −∫ from ∞ to r of (kQ/s²) ds.",
    "An antiderivative of s⁻² is −1/s, giving V(r) = kQ/r.",
    "For a positive source, E_r = −dV/dr = kQ/r²; this checks the sign."
  ],
  "worked": {
    "q": "Find potential 0.30 m from a −2 nC charge, with zero at infinity.",
    "steps": [
      "V = kQ/r = (9 × 10⁹)(−2 × 10⁻⁹)/0.30.",
      "V = −60 V.",
      "The minus sign is meaningful; do not replace Q by its magnitude in this formula."
    ]
  },
  "guided": {
    "q": "For the same source, enter potential at 0.60 m in V.",
    "answer": -30,
    "tolerance": 0.01,
    "hint": "Potential varies as 1/r, with the source sign retained.",
    "why": "Doubling distance halves the magnitude, giving −30 V."
  },
  "independent": {
    "q": "At distance r from a positive point charge, V = 90 V and E = 300 N/C. Find r.",
    "solution": [
      "For a point source, E/V = 1/r.",
      "r = V/E = 90/300 = 0.30 m.",
      "Units V/(V/m) give metres."
    ]
  },
  "boardTask": {
    "marks": 3,
    "q": "Obtain the potential of a point charge with zero at infinity and compare its distance dependence with that of the field.",
    "points": [
      "Use V(r)−V(∞) = −∫∞ʳ E_r ds and E_r = kQ/s².",
      "Integration gives V = kQ/r, with the sign of Q retained.",
      "Potential magnitude varies as 1/r, whereas electric-field magnitude varies as 1/r²."
    ]
  },
  "trap": [
    "Use |Q| because potential must be positive.",
    "Potential is signed; only the magnitude |V| uses |Q|."
  ],
  "recall": [
    "What reference is built into V = kQ/r?",
    "V = 0 at infinity."
  ],
  "check": {
    "q": "For a point charge, when r doubles:",
    "options": [
      "|V| and |E| both halve",
      "|V| halves and |E| becomes one quarter",
      "|V| becomes one quarter and |E| halves",
      "both become one quarter"
    ],
    "correct": 1,
    "why": "Their distance dependences are 1/r and 1/r² respectively."
  }
});

addLesson({
  "chapter": 2,
  "id": "21",
  "title": "Potential of an electric dipole",
  "section": "2.4",
  "objective": "Use scalar superposition to find dipole potential and state the far-field angular dependence.",
  "bridge": [
    "algebra",
    "trig"
  ],
  "lead": "A dipole’s potential is easier to combine than its field because there are no vector components to add. Keep the charge signs and the two distances.",
  "explain": [
    [
      "Add the two scalar potentials",
      "Let r₊ be the distance from +q to the observation point and r₋ its distance from −q. Their potentials are kq/r₊ and −kq/r₋. Thus V = kq(1/r₊ − 1/r₋), with zero at infinity. This relation is exact outside the charge positions."
    ],
    [
      "Special positions",
      "On the perpendicular bisector r₊ = r₋, so V = 0. Yet the dipole field there is generally nonzero. On the axial side beyond +q, V is positive; beyond −q, it is negative. Zero potential and zero field are different statements."
    ],
    [
      "Far from a short dipole",
      "Let r be the distance from the centre and θ the angle between p⃗ and the centre-to-point direction. For r ≫ a, r₊ ≈ r−a cos θ and r₋ ≈ r+a cos θ. The leading result is V ≈ kp cos θ/r². Potential now falls as 1/r²; the dipole field falls as 1/r³."
    ]
  ],
  "formula": [
    [
      "V = kq(1/r₊ − 1/r₋)",
      "r₊ and r₋ are distances from positive and negative sources.",
      "Exact finite-dipole potential, excluding source positions."
    ],
    [
      "V ≈ kp cos θ/r²",
      "p: C m; r: m; V: V. θ is measured from p⃗.",
      "Far-field approximation r ≫ a, with V(∞) = 0."
    ]
  ],
  "visual": "dipole-potential",
  "reasoning": [
    "Write the potential due to each signed charge separately.",
    "Add algebraically to get kq(1/r₊ − 1/r₋).",
    "For r ≫ a, approximate the distances as r ∓ a cos θ.",
    "The difference of reciprocals is approximately 2a cos θ/r². With p = 2aq, obtain kp cos θ/r²."
  ],
  "worked": {
    "q": "A short dipole has p = 4 × 10⁻⁹ C m. At r = 0.20 m and θ = 60°, find its approximate potential.",
    "steps": [
      "V ≈ kp cos θ/r².",
      "V ≈ (9 × 10⁹)(4 × 10⁻⁹)(1/2)/0.04.",
      "V ≈ +450 V, assuming r is much larger than the dipole size."
    ]
  },
  "guided": {
    "q": "At the same r with θ = 90°, enter the dipole potential in V.",
    "answer": 0,
    "tolerance": 0.0001,
    "hint": "The point is on the perpendicular bisector.",
    "why": "Equal distances give exact cancellation of the two potentials."
  },
  "independent": {
    "q": "Can a dipole have zero potential but nonzero field at the same point? Give the location and reason.",
    "solution": [
      "Yes: on its perpendicular bisector away from the centre.",
      "The scalar potentials cancel because the distances are equal.",
      "Field components along −p⃗ add, so the field is nonzero."
    ]
  },
  "boardTask": {
    "marks": 3,
    "q": "Obtain the potential due to an electric dipole at a distant point and explain its value on the equatorial plane.",
    "points": [
      "Use scalar superposition: V = kq(1/r₊ − 1/r₋).",
      "For r ≫ a, r₊ ≈ r−a cos θ and r₋ ≈ r+a cos θ, giving V ≈ kp cos θ/r².",
      "On the equatorial plane θ = 90° and the two distances are equal, so V = 0; E need not be zero."
    ]
  },
  "trap": [
    "Zero V on the equatorial plane means the field vanishes there.",
    "V is a scalar cancellation; field is a different vector sum."
  ],
  "recall": [
    "What sets the sign of the far-field dipole potential?",
    "cos θ relative to p⃗, for p taken as a positive magnitude."
  ],
  "check": {
    "q": "At equal large distances, dipole potential is positive along +p⃗, zero on the equatorial plane and:",
    "options": [
      "positive along −p⃗",
      "negative along −p⃗",
      "zero everywhere",
      "independent of angle"
    ],
    "correct": 1,
    "why": "At θ = 180°, cos θ = −1."
  }
});

addLesson({
  "chapter": 2,
  "id": "22",
  "title": "Potential due to a system of charges",
  "section": "2.5",
  "objective": "Add potentials algebraically and avoid confusing potential cancellation with field cancellation.",
  "bridge": [
    "units",
    "algebra"
  ],
  "lead": "At one observation point, every source contributes a number to potential. Add those numbers with their signs. This calculation uses distances but does not require vector directions.",
  "explain": [
    [
      "Fix one observation point",
      "For each charge qᵢ, find its distance rᵢ to the same point P. Then form kqᵢ/rᵢ. Sum over sources. Keep the sign of every charge; do not use the distance between two sources unless it is also the required source–point distance."
    ],
    [
      "Compare with electric field",
      "Potential uses scalar addition, whereas field uses vector addition. At the midpoint of two equal positive charges, E = 0 but V is positive. At the midpoint of an equal opposite pair, V = 0 but E is nonzero. These are useful checks on claims involving zero."
    ],
    [
      "Bring in a new test charge",
      "Once the potential due to the existing fixed sources is known, the slow external work to bring a new charge q from infinity is qV(P). Use the potential of the existing sources only; do not include the new charge’s self-potential. A continuous distribution can similarly be treated using V = k∫dq/r."
    ]
  ],
  "formula": [
    [
      "V(P) = Σ kqᵢ/rᵢ",
      "All rᵢ are measured from their respective source charges to P.",
      "Reference zero at infinity for localised sources."
    ],
    [
      "W_ext,slow = qV(P)",
      "q is the newly introduced charge; V excludes its own contribution.",
      "Existing source charges remain fixed; start at infinity."
    ]
  ],
  "visual": "potential-system",
  "reasoning": [
    "Mark P and source-to-P distances.",
    "Calculate signed scalar contributions.",
    "Add them; only afterwards multiply by a probe charge if work or energy is asked."
  ],
  "worked": {
    "q": "P is 0.20 m from +2 nC and 0.40 m from −4 nC. Find its potential.",
    "steps": [
      "V₁ = (9 × 10⁹)(2 × 10⁻⁹)/0.20 = +90 V.",
      "V₂ = (9 × 10⁹)(−4 × 10⁻⁹)/0.40 = −90 V.",
      "V(P) = 0 V. No conclusion about E(P) follows without directions."
    ]
  },
  "guided": {
    "q": "Two +1 nC charges are each 0.30 m from P. Enter V(P) in V.",
    "answer": 60,
    "tolerance": 0.01,
    "hint": "Each source contributes kq/r; add them.",
    "why": "30 V + 30 V = 60 V."
  },
  "independent": {
    "q": "Two fixed charges +q are separated by d. Find the work to bring a third +q slowly from infinity to their midpoint.",
    "solution": [
      "Each source is d/2 from the midpoint.",
      "V_mid = kq/(d/2) + kq/(d/2) = 4kq/d.",
      "W_ext = qV_mid = 4kq²/d. The work is positive."
    ]
  },
  "official": [
    "Q19"
  ],
  "boardTask": {
    "marks": 3,
    "q": "At the midpoint of two equal positive charges, compare electric field and potential and explain the difference.",
    "points": [
      "The fields are equal and opposite at the midpoint, so the net electric field is zero.",
      "The scalar potentials have the same positive sign and add: for separation d, V = 4kq/d.",
      "Thus zero field at a point does not require zero potential there."
    ]
  },
  "trap": [
    "Use vector addition to combine kq/r terms.",
    "Potential is scalar; add signed numbers."
  ],
  "recall": [
    "Which potential is used to find work of bringing in a new charge?",
    "The potential produced by the sources already present, excluding the new charge itself."
  ],
  "check": {
    "q": "At the midpoint of two equal positive point charges:",
    "options": [
      "both E and V are zero",
      "E is zero but V is positive",
      "V is zero but E is nonzero",
      "both necessarily point right"
    ],
    "correct": 1,
    "why": "Field vectors cancel; positive scalar potentials add."
  }
});

addLesson({
  "chapter": 2,
  "id": "23",
  "title": "Equipotential surfaces and potential gradient",
  "section": "2.6",
  "objective": "Connect equipotential geometry to field direction, work and the slope of a potential graph.",
  "bridge": [
    "work",
    "slope"
  ],
  "lead": "A contour map joins places with the same height. An equipotential surface joins positions with the same electric potential. Its relation to the field helps turn a picture into an answer.",
  "explain": [
    [
      "What stays constant",
      "Every point on an equipotential surface has the same V. Moving a charge along that surface gives ΔV = 0 and therefore zero electric-field work. Point-charge equipotentials are concentric spheres; in a uniform field they are parallel planes normal to the field."
    ],
    [
      "Why the field is normal",
      "If E⃗ had a component along the surface, a small displacement along that component would involve electric work and a potential change. That contradicts equal potential. Therefore the field is perpendicular wherever it is nonzero. Distinct equipotential surfaces cannot intersect because that would assign two potential values to one point."
    ],
    [
      "From a small displacement to a derivative",
      "For displacement dℓ⃗, the field does work qE⃗·dℓ⃗. Using dV = −dW_field/q gives dV = −E⃗·dℓ⃗. Along x, Eₓ = −dV/dx. The field points towards the steepest decrease of potential. Closely spaced contours indicate a larger field only when neighbouring contours represent equal potential increments."
    ]
  ],
  "formula": [
    [
      "dV = −E⃗·dℓ⃗; Eₓ = −dV/dx",
      "E may be expressed in V/m, equivalent to N/C.",
      "Eₓ is the component along x; the full vector is E⃗ = −∇V."
    ],
    [
      "W_field = −qΔV = 0 along an equipotential",
      "Potential need not be zero, only equal at the endpoints.",
      "An equipotential surface can lie in a nonzero field."
    ]
  ],
  "visual": "equipotential",
  "graph": "potential-slope",
  "reasoning": [
    "Electric force on q is qE⃗, so dW_field = qE⃗·dℓ⃗.",
    "Potential difference per charge gives dV = −dW_field/q.",
    "Hence dV = −E⃗·dℓ⃗, and for a displacement along x, Eₓ = −dV/dx.",
    "On an equipotential dV = 0, so E⃗ has no tangential component."
  ],
  "worked": {
    "q": "V falls uniformly from 12 V at x = 0 to 4 V at x = 2 m. Find Eₓ.",
    "steps": [
      "dV/dx = (4−12)/(2−0) = −4 V/m.",
      "Eₓ = −dV/dx = +4 V/m.",
      "The field is 4 N/C towards +x, the direction of decreasing potential."
    ]
  },
  "guided": {
    "q": "A charge moves between two points at 30 V on the same equipotential. Enter the electric-field work in J.",
    "answer": 0,
    "tolerance": 0.0001,
    "hint": "The potential difference is zero.",
    "why": "W_field = −qΔV = 0 for any finite charge q."
  },
  "independent": {
    "q": "A potential graph is V(x) = 10 − 3x², with V in volts and x in metres. Find Eₓ at x = 2 m.",
    "solution": [
      "dV/dx = −6x V/m.",
      "Eₓ = −dV/dx = 6x.",
      "At x = 2 m, Eₓ = +12 V/m."
    ]
  },
  "official": [
    "Q31(B)"
  ],
  "boardTask": {
    "marks": 3,
    "q": "Show that the electric-field component along a coordinate is the negative potential gradient along that coordinate.",
    "points": [
      "For a small displacement dx, electric-field work is dW = qEₓdx.",
      "dV = −dW/q, hence dV = −Eₓdx.",
      "Therefore Eₓ = −dV/dx; the minus sign means the field points towards decreasing potential along that coordinate."
    ]
  },
  "trap": [
    "Closer equipotential surfaces always imply stronger E, even when labelled voltage intervals differ.",
    "Compare potential change per distance; equal contour spacing alone is insufficient if voltage intervals are unequal."
  ],
  "recall": [
    "Why does the field cross an equipotential at right angles?",
    "Any tangential component would do work along it and change V, contradicting its definition."
  ],
  "check": {
    "q": "Along +x, potential increases uniformly. The x component of electric field is:",
    "options": [
      "positive",
      "negative",
      "zero",
      "undefined"
    ],
    "correct": 1,
    "why": "dV/dx > 0, so Eₓ = −dV/dx < 0."
  }
});

addLesson({
  "chapter": 2,
  "id": "24",
  "title": "Potential energy of point-charge systems",
  "section": "2.7–2.8.1",
  "objective": "Calculate energy of assembly, interpret its sign and avoid counting a charge pair twice.",
  "bridge": [
    "work",
    "units"
  ],
  "lead": "The potential energy of two charges describes their arrangement together. It is the work needed to assemble them slowly from a reference configuration, with the charges initially far apart.",
  "explain": [
    [
      "Build a pair",
      "Bring q₁ from infinity into otherwise empty space; there is no other electric source to work against. Then bring q₂ to separation r from q₁. The potential there due to q₁ is kq₁/r, so the external assembly work is q₂ times that potential."
    ],
    [
      "Read the energy sign",
      "With U = 0 at infinite separation, like charges have U > 0: external work is needed to bring them together against repulsion. Unlike charges have U < 0: they attract, and a slow external agent removes energy while bringing them closer. Negative potential energy is relative to the chosen zero, not a negative amount of “stored substance”."
    ],
    [
      "Several charges and external fields",
      "For several fixed charges, add kqᵢqⱼ/rᵢⱼ once for each distinct pair. Do not count pair 1–2 again as 2–1. If charges are also in a prescribed external potential, add their qᵢV_external(rᵢ) terms. A charge’s self-energy is not included in these pair formulas."
    ]
  ],
  "formula": [
    [
      "U_pair = kq₁q₂/r",
      "U: J; signed q values in C; separation in m.",
      "Zero at infinite separation, with fixed point charges."
    ],
    [
      "U_system = Σ over i<j of kqᵢqⱼ/rᵢⱼ",
      "Each distinct pair appears once.",
      "If an external field is specified, add its interaction-energy terms separately."
    ]
  ],
  "visual": "pair-energy",
  "graph": "energy",
  "reasoning": [
    "Choose zero energy with charges infinitely separated.",
    "Find potential due to charges already in place.",
    "Multiply by the charge being brought in.",
    "Repeat if necessary, counting each pair only once."
  ],
  "worked": {
    "q": "Find the potential energy of +2 μC and −3 μC separated by 0.30 m.",
    "steps": [
      "U = (9 × 10⁹)(2 × 10⁻⁶)(−3 × 10⁻⁶)/0.30.",
      "U = −0.18 J.",
      "Bringing them slowly from infinity gives W_ext = −0.18 J; the electric field does +0.18 J."
    ]
  },
  "guided": {
    "q": "For the same charges at 0.60 m, enter U in J.",
    "answer": -0.09,
    "tolerance": 0.0001,
    "hint": "U is proportional to 1/r and retains the charge-product sign.",
    "why": "Doubling r halves U in magnitude: −0.09 J."
  },
  "independent": {
    "q": "Three equal charges +q occupy the vertices of an equilateral triangle of side a. Find total potential energy.",
    "solution": [
      "There are three distinct charge pairs.",
      "Each contributes kq²/a.",
      "U = 3kq²/a. Counting six ordered pairs would double-count the energy."
    ]
  },
  "boardTask": {
    "marks": 3,
    "q": "Obtain the electrostatic potential energy of a two-point-charge system and explain its sign for unlike charges.",
    "points": [
      "Bring q₁ first, then bring q₂ from infinity to a point distance r from q₁.",
      "The potential due to q₁ is kq₁/r, so W_ext = q₂V = kq₁q₂/r = U.",
      "For unlike charges U < 0 with zero at infinity; attraction lowers the energy as they are brought together."
    ]
  },
  "trap": [
    "U = qV includes the particle’s own infinite point-charge potential.",
    "Use the potential due to other source charges or an explicitly prescribed external field."
  ],
  "recall": [
    "How many distinct pairs are there among three charges?",
    "Three: 1–2, 1–3 and 2–3."
  ],
  "check": {
    "q": "For unlike charges with U = 0 at infinity, reducing their separation makes U:",
    "options": [
      "more negative",
      "less negative",
      "positive",
      "unchanged"
    ],
    "correct": 0,
    "why": "The negative numerator is divided by a smaller positive r."
  }
});

addLesson({
  "chapter": 2,
  "id": "25",
  "title": "Potential energy of a dipole in a field",
  "section": "2.8.2",
  "objective": "Relate orientation to energy, calculate rotation work and distinguish stable and unstable equilibrium.",
  "bridge": [
    "work",
    "trig"
  ],
  "lead": "A dipole naturally turns towards alignment with a uniform field. The energy view explains that tendency: alignment is its lowest-energy orientation.",
  "explain": [
    [
      "Set the angular reference",
      "For a permanent dipole in a uniform external field, choose U = 0 when p⃗ is perpendicular to E⃗. Then U = −pE cos θ. At 0° the energy is −pE, at 90° it is zero, and at 180° it is +pE."
    ],
    [
      "Find work from endpoints",
      "The external work in rotating the dipole slowly from θ₁ to θ₂ is ΔU = pE(cos θ₁ − cos θ₂). The field’s work is the negative of this change. It is possible to have zero torque at both endpoints yet require nonzero work between them."
    ],
    [
      "Connect energy and stability",
      "Alignment is a minimum of U, so small rotations increase energy and the field tends to restore it. Anti-alignment is a maximum: a small displacement lowers energy and moves the dipole away. The two zero-torque orientations therefore have different stability."
    ]
  ],
  "formula": [
    [
      "U = −p⃗·E⃗ = −pE cos θ",
      "p: C m; E: N/C; U: J.",
      "Uniform external field; U = 0 at θ = 90°."
    ],
    [
      "W_ext,slow = pE(cos θ₁ − cos θ₂)",
      "θ₁ initial, θ₂ final.",
      "No change in rotational kinetic energy during slow rotation."
    ]
  ],
  "visual": "torque",
  "graph": "dipole-energy",
  "reasoning": [
    "The field’s torque tends to reduce θ; to increase θ slowly, an external agent supplies torque pE sin θ.",
    "The work from θ₁ to θ₂ is ∫pE sin θ dθ = pE(cos θ₁ − cos θ₂).",
    "Choosing zero energy at 90° gives U = −pE cos θ."
  ],
  "worked": {
    "q": "For p = 2 × 10⁻⁸ C m and E = 1 × 10⁵ N/C, find U at 60°.",
    "steps": [
      "pE = 2 × 10⁻³ J.",
      "U = −pE cos 60° = −(2 × 10⁻³)(1/2).",
      "U = −1 × 10⁻³ J."
    ]
  },
  "guided": {
    "q": "For that dipole, enter slow external work from 0° to 180° in J.",
    "answer": 0.004,
    "tolerance": 0.000001,
    "hint": "Use U_final − U_initial = +pE − (−pE).",
    "why": "W_ext = 2pE = 4 × 10⁻³ J."
  },
  "independent": {
    "q": "At θ = 90°, a dipole has zero potential energy under this reference. Is its torque zero? Explain.",
    "solution": [
      "No. U = −pE cos 90° = 0 reflects the energy reference.",
      "Torque magnitude is pE sin 90° = pE, its maximum value."
    ]
  },
  "boardTask": {
    "marks": 3,
    "q": "State the potential energy of a dipole in a uniform field and use it to identify stable and unstable equilibrium.",
    "points": [
      "U = −pE cos θ, with zero chosen at θ = 90°.",
      "At θ = 0°, U = −pE is minimum and the equilibrium is stable.",
      "At θ = 180°, U = +pE is maximum and the equilibrium is unstable; torque vanishes at both orientations."
    ]
  },
  "trap": [
    "Zero energy means zero torque.",
    "Energy value depends on the reference; torque relates to how energy changes with angle."
  ],
  "recall": [
    "How much work rotates a dipole slowly from aligned to anti-aligned?",
    "2pE, positive external work."
  ],
  "check": {
    "q": "The minimum dipole energy in a uniform field occurs when:",
    "options": [
      "p⃗ is perpendicular to E⃗",
      "p⃗ is parallel to E⃗",
      "p⃗ is anti-parallel to E⃗",
      "the angle is 45°"
    ],
    "correct": 1,
    "why": "cos θ is greatest at 0°, making −pE cos θ smallest."
  }
});

addLesson({
  "chapter": 2,
  "id": "26",
  "title": "Conductors, insulators and electrostatic equilibrium",
  "section": "2.9",
  "objective": "Explain what free and bound charges do, and use the equilibrium properties of a conductor.",
  "bridge": [
    "vectors",
    "slope"
  ],
  "lead": "Some electrons in a metal can move through the material. In an insulator, charges remain attached to atoms or molecules. This difference decides what happens when an electric field is applied.",
  "explain": [
    [
      "Free does not mean unopposed",
      "A conductor has mobile charge carriers. An applied field initially moves them. They redistribute until their induced field cancels the external field inside the conducting material. In electrostatic equilibrium, the total E there is zero; otherwise charges would still move."
    ],
    [
      "One conductor, one potential",
      "Because E = 0 inside, there is no potential change between interior points. The entire conductor, including its surface, is at one potential. This potential may be nonzero. Excess charge resides on its surface. Just outside a smooth surface, the field is normal; a tangential component would move charges along it."
    ],
    [
      "Insulators and cavities",
      "Bound charges cannot travel freely through an insulator, though small shifts or molecular rotations can occur. A closed conductor shields an empty cavity from external electrostatic fields when no charge is inside the cavity. A charge placed in a cavity changes the inner surface charges; do not apply the empty-cavity statement to that situation."
    ]
  ],
  "formula": [
    [
      "E_inside conductor = 0; V_conductor = constant",
      "These describe the total field and potential.",
      "Electrostatic equilibrium. Constant V need not be zero."
    ],
    [
      "E_just outside = σ/ε₀, along the outward normal for σ > 0",
      "σ is local surface charge density in C/m².",
      "Conductor in vacuum; field just outside a smooth surface."
    ]
  ],
  "visual": "conductor",
  "reasoning": [
    "If a tangential field existed at the surface, mobile charges would move.",
    "In equilibrium it must vanish, so the external field is normal.",
    "Use a very thin Gaussian pillbox straddling the surface: the inside face has E = 0, and side flux vanishes in the thin limit.",
    "EΔA = σΔA/ε₀ gives the normal field just outside."
  ],
  "worked": {
    "q": "A conducting sphere of radius 0.20 m carries +4 nC. Find E and V at its centre, using V = 0 at infinity.",
    "steps": [
      "Inside the metal at equilibrium, E = 0.",
      "The potential throughout equals the surface value kQ/R.",
      "V = (9 × 10⁹)(4 × 10⁻⁹)/0.20 = 180 V. Zero field does not require zero potential."
    ]
  },
  "guided": {
    "q": "The equilibrium potential at one point of a connected conductor is 80 V. What is it at another point?",
    "options": [
      "0 V",
      "80 V",
      "It must depend on depth"
    ],
    "correct": 1,
    "hint": "Use E = 0 inside and the relation between E and potential change.",
    "why": "The entire connected conductor is equipotential: 80 V."
  },
  "independent": {
    "q": "A student says the induced field inside a metal has the same direction as the applied external field at equilibrium. Correct the statement.",
    "solution": [
      "The induced field inside the conducting material is equal in magnitude and opposite in direction to the external field.",
      "Their vector sum is zero in electrostatic equilibrium."
    ]
  },
  "official": [
    "Q16"
  ],
  "boardTask": {
    "marks": 3,
    "q": "State and explain three properties of a charged conductor in electrostatic equilibrium.",
    "points": [
      "The electric field inside the conducting material is zero; otherwise mobile charges would move.",
      "The conductor is equipotential because no work per unit charge is required for an internal displacement.",
      "The field just outside is normal to the surface; any tangential field would cause surface charge motion."
    ]
  },
  "trap": [
    "E = 0 inside a conductor, so V = 0 there.",
    "E = 0 implies constant V. Its value depends on the charge and the chosen reference."
  ],
  "recall": [
    "How does the conductor surface result differ from an infinite nonconducting sheet?",
    "Conductor: E just outside = σ/ε₀ with E inside zero. A single infinite nonconducting sheet in vacuum has E = σ/(2ε₀) on each side."
  ],
  "check": {
    "q": "Inside the material of a conductor in electrostatic equilibrium:",
    "options": [
      "the total electric field is zero",
      "the external field alone is necessarily zero",
      "potential is necessarily zero",
      "free charges move steadily"
    ],
    "correct": 0,
    "why": "Redistribution cancels the total interior field."
  }
});

addLesson({
  "chapter": 2,
  "id": "27",
  "title": "Dielectrics and polarisation",
  "section": "2.10",
  "objective": "Explain polarisation using bound charges and predict how a dielectric affects the field.",
  "bridge": [
    "vectors"
  ],
  "lead": "An insulating material can respond to a field even though its charges cannot flow freely from one end to the other. Small shifts of bound charges turn atoms or molecules into electric dipoles.",
  "explain": [
    [
      "Two ways to form a response",
      "Nonpolar molecules have no permanent dipole moment; a field slightly separates the centres of positive and negative charge, inducing a dipole. Polar molecules already have permanent dipoles. Without an applied field their directions are largely random; a field favours partial alignment against thermal disorder."
    ],
    [
      "From molecules to material",
      "Polarisation is the net electric dipole moment per unit volume. Opposite bound charges appear on opposing faces of the dielectric. Their field opposes the applied field within a simple dielectric slab between charged plates. These bound charges are displaced or oriented, rather than freely conducting through the slab."
    ],
    [
      "Be precise about what is fixed",
      "For a homogeneous linear dielectric fully filling a parallel-plate gap at fixed free plate charge, E becomes E₀/K, where K is relative permittivity. If a battery keeps V and d fixed, E = V/d stays fixed instead and additional free charge is supplied. The constraint matters."
    ]
  ],
  "formula": [
    [
      "K = ε/ε₀; E = E₀/K at fixed free charge",
      "K is dimensionless; ε is permittivity of the dielectric.",
      "Homogeneous linear dielectric completely fills the ideal plate gap."
    ],
    [
      "P = dipole moment / volume",
      "Polarisation P has unit C/m².",
      "Macroscopic description of aligned or induced molecular dipoles."
    ]
  ],
  "visual": "dielectric",
  "reasoning": [
    "Apply a field across an insulator.",
    "Bound charges shift or permanent molecular dipoles partly align.",
    "The resulting bound surface charges produce an opposing field.",
    "At fixed free plate charge this reduces the total field; a connected battery changes the free charge to maintain its voltage."
  ],
  "worked": {
    "q": "An isolated ideal capacitor has E₀ = 800 N/C. A dielectric with K = 4 completely fills its gap. Find the new field.",
    "steps": [
      "Isolation means the free charge on its plates remains fixed.",
      "E = E₀/K = 800/4.",
      "E = 200 N/C. The opposing polarisation field has magnitude 600 N/C."
    ]
  },
  "guided": {
    "q": "The same gap is filled while a battery keeps V and d constant. How does the total E change?",
    "options": [
      "E becomes E₀/4",
      "E stays E₀",
      "E becomes zero"
    ],
    "correct": 1,
    "hint": "Use the relation E = V/d for ideal parallel plates.",
    "why": "V and d are fixed, so E remains E₀; the battery supplies extra free charge."
  },
  "independent": {
    "q": "Explain why polarisation does not mean that an ordinary dielectric has become a conductor.",
    "solution": [
      "Polarisation shifts bound charges locally or rotates molecular dipoles.",
      "It does not provide the long-range free charge transport characteristic of a conductor."
    ]
  },
  "boardTask": {
    "marks": 3,
    "q": "Distinguish polar and nonpolar dielectrics and explain their response to an applied electric field.",
    "points": [
      "Polar molecules have permanent electric dipole moments; nonpolar molecules have coincident positive and negative charge centres without an external field.",
      "An applied field partly aligns permanent dipoles and induces dipoles in nonpolar molecules.",
      "The material becomes polarised; bound surface charges produce an opposing field in the plate geometry at fixed free charge."
    ]
  },
  "trap": [
    "Inserting a dielectric always reduces E by K.",
    "That conclusion assumes fixed free charge in the fully filled plate geometry. At fixed V and d, E remains V/d."
  ],
  "recall": [
    "What is displaced during dielectric polarisation?",
    "Bound charges shift locally, or permanent dipoles reorient."
  ],
  "check": {
    "q": "For a fully filled isolated parallel-plate capacitor, increasing K from 1 to 3 makes E:",
    "options": [
      "three times larger",
      "one third as large",
      "unchanged",
      "exactly zero"
    ],
    "correct": 1,
    "why": "The free plate charge stays fixed and E = E₀/K."
  }
});

addLesson({
  "chapter": 2,
  "id": "28",
  "title": "Capacitors and the meaning of capacitance",
  "section": "2.11; 2.3",
  "objective": "Distinguish charge, voltage and capacitance and explain what determines capacitance.",
  "bridge": [
    "units",
    "algebra"
  ],
  "lead": "A capacitor separates equal and opposite charges on two conductors. A larger capacitance means more charge can be separated for the same potential difference.",
  "explain": [
    [
      "Which charge is Q?",
      "For the usual two-conductor capacitor, the plates carry +Q and −Q. The capacitor’s net charge is zero, but its charge rating Q means the magnitude on either plate. V means the magnitude of the potential difference between the plates."
    ],
    [
      "A property of the arrangement",
      "C = Q/V. For ideal conductors in a fixed linear dielectric, changing Q changes V in the same ratio, so C remains unchanged. Capacitance is set by conductor geometry, separation and the surrounding dielectric, rather than by the particular Q stored. One farad is one coulomb per volt."
    ],
    [
      "An isolated sphere",
      "An isolated conducting sphere can be regarded as a capacitor with the second conductor at infinity. Its surface potential is kQ/R, so C = Q/V = R/k = 4πε₀R in vacuum. A larger radius gives a larger capacitance. This sphere result is different from a two-plate capacitor formula."
    ]
  ],
  "formula": [
    [
      "C = Q/V; Q = CV",
      "C in F; Q in C; V in V. 1 μF = 10⁻⁶ F.",
      "Q is the magnitude on one plate, not the algebraic sum of plate charges."
    ],
    [
      "C_sphere = 4πε₀R = R/k",
      "R is sphere radius in m.",
      "Isolated conducting sphere in vacuum, with potential zero at infinity."
    ]
  ],
  "visual": "capacitor",
  "graph": "capacitance",
  "reasoning": [
    "More charge on a fixed arrangement creates a proportionately larger potential difference.",
    "The ratio Q/V is constant for a linear system; call it capacitance.",
    "For a sphere substitute V = kQ/R, then cancel Q to obtain C = R/k."
  ],
  "worked": {
    "q": "A 3 μF capacitor is connected across 12 V. Find the charge on each plate.",
    "steps": [
      "Q = CV = (3 × 10⁻⁶)(12) = 36 × 10⁻⁶ C.",
      "The plates carry +36 μC and −36 μC.",
      "The net charge of this ideal capacitor is zero; the magnitude Q is 36 μC."
    ]
  },
  "guided": {
    "q": "That capacitor is instead connected across 6 V. Enter its capacitance in μF.",
    "answer": 3,
    "tolerance": 0.001,
    "hint": "The geometry and dielectric did not change.",
    "why": "C stays 3 μF. Q becomes 18 μC."
  },
  "independent": {
    "q": "Find the capacitance of an isolated conducting sphere of radius 0.09 m in vacuum, using k = 9 × 10⁹ SI.",
    "solution": [
      "C = R/k = 0.09/(9 × 10⁹) = 1 × 10⁻¹¹ F.",
      "C = 10 pF."
    ]
  },
  "official": [
    "Q31(A)"
  ],
  "boardTask": {
    "marks": 2,
    "q": "Define capacitance and state two factors that determine its value for a two-conductor arrangement.",
    "points": [
      "Capacitance is the ratio of the magnitude of charge on either conductor to their potential difference: C = Q/V; SI unit farad.",
      "It depends on the conductor geometry/separation and the permittivity of the medium between them."
    ]
  },
  "trap": [
    "Doubling Q necessarily doubles C.",
    "For unchanged geometry and a linear dielectric, doubling Q also doubles V; C is unchanged."
  ],
  "recall": [
    "Why can a net-neutral capacitor store electrical energy?",
    "Its opposite charges are separated, giving a potential difference and an electric field."
  ],
  "check": {
    "q": "A graph of Q on the vertical axis against V on the horizontal axis has slope:",
    "options": [
      "1/C",
      "C",
      "Q²",
      "energy"
    ],
    "correct": 1,
    "why": "Q = CV is a straight line with slope C."
  }
});

addLesson({
  "chapter": 2,
  "id": "29",
  "title": "Capacitors in series",
  "section": "2.14.1",
  "objective": "Recognise a series connection, derive its equivalent capacitance and find voltage sharing.",
  "bridge": [
    "algebra"
  ],
  "lead": "In a series chain there is one path through the capacitors, with isolated connecting conductors between them. The charge magnitude is the same on each initially uncharged capacitor, but their voltages can differ.",
  "explain": [
    [
      "Why the charges match",
      "Each isolated intermediate conductor starts neutral. Charge separation on it creates equal and opposite charges on its two ends. This makes the magnitude Q common to the capacitors in an ordinary series chain. This argument assumes no pre-existing net charge on those intermediate conductors."
    ],
    [
      "Voltages add",
      "Traversing the chain, the total potential difference is V = V₁ + V₂ + … . Since Vᵢ = Q/Cᵢ, we obtain V = Q(1/C₁ + 1/C₂ + …). The equivalent capacitor stores the same terminal Q at total V."
    ],
    [
      "Predict before calculating",
      "The equivalent capacitance is less than the smallest component capacitance. Since each has the same Q, the smaller capacitance has the larger voltage. Never assume equal voltages unless the capacitors have equal C."
    ]
  ],
  "formula": [
    [
      "1/C_eq = 1/C₁ + 1/C₂ + …",
      "Use the same capacitance unit in every term.",
      "Ordinary series connection with initially neutral intermediate nodes."
    ],
    [
      "For two: C_eq = C₁C₂/(C₁ + C₂); V₁/V₂ = C₂/C₁",
      "Q = C_eq V is common in magnitude.",
      "Voltage division is inverse to capacitance."
    ]
  ],
  "visual": "series",
  "reasoning": [
    "Write V = V₁ + V₂ for the total voltage.",
    "Use common charge Q and V₁ = Q/C₁, V₂ = Q/C₂.",
    "By definition V = Q/C_eq.",
    "Divide by Q to get 1/C_eq = 1/C₁ + 1/C₂."
  ],
  "worked": {
    "q": "Connect 3 μF and 6 μF in series across 12 V. Find C_eq, Q and each voltage.",
    "steps": [
      "C_eq = (3 × 6)/(3 + 6) = 2 μF.",
      "Q = C_eq V = 24 μC on each capacitor.",
      "V₁ = 24/3 = 8 V; V₂ = 24/6 = 4 V. Their sum is 12 V."
    ]
  },
  "guided": {
    "q": "For the same pair across 18 V, enter the voltage across the 3 μF capacitor in V.",
    "answer": 12,
    "tolerance": 0.01,
    "hint": "C_eq remains 2 μF. Find the common Q first.",
    "why": "Q = 36 μC, so V across 3 μF is 36/3 = 12 V."
  },
  "independent": {
    "q": "Find the minimum capacitance obtainable by using all three capacitors 6 μF, 9 μF and 18 μF once.",
    "solution": [
      "The minimum is obtained with all in series.",
      "1/C = 1/6 + 1/9 + 1/18 = 3/18 + 2/18 + 1/18 = 1/3.",
      "C = 3 μF."
    ]
  },
  "official": [
    "Q31(A)"
  ],
  "boardTask": {
    "marks": 3,
    "q": "Derive the equivalent capacitance of two initially uncharged capacitors in series.",
    "points": [
      "Draw a labelled series connection and state equal charge magnitude Q on each capacitor, from neutrality of the isolated intermediate conductor.",
      "The total voltage is V = V₁ + V₂ = Q/C₁ + Q/C₂.",
      "Using V = Q/C_eq gives 1/C_eq = 1/C₁ + 1/C₂, hence C_eq = C₁C₂/(C₁ + C₂)."
    ]
  },
  "trap": [
    "Series capacitors have equal voltages.",
    "Their charge magnitudes are equal under the stated conditions. Their voltages are Q/C and generally differ."
  ],
  "recall": [
    "Which series capacitor gets the larger potential difference?",
    "The one with smaller capacitance."
  ],
  "check": {
    "q": "For two positive capacitances in series, C_eq is:",
    "options": [
      "larger than both",
      "between the two values",
      "smaller than either",
      "their arithmetic sum"
    ],
    "correct": 2,
    "why": "Adding positive reciprocals gives a reciprocal larger than either individual reciprocal."
  }
});

addLesson({
  "chapter": 2,
  "id": "30",
  "title": "Capacitors in parallel",
  "section": "2.14.2",
  "objective": "Recognise common nodes, derive the parallel rule and find the charge on each capacitor.",
  "bridge": [
    "algebra"
  ],
  "lead": "Two capacitors are in parallel when both connect across the same two nodes. The drawing may look complicated, but each capacitor experiences the same potential difference.",
  "explain": [
    [
      "Identify the nodes",
      "An ideal connecting wire in this electrostatic circuit model is at one potential. Trace which conductors connect directly together. If both ends of every capacitor connect to the same two nodes, the capacitors are parallel, regardless of the way the wires are drawn."
    ],
    [
      "Same voltage, different charge",
      "Each capacitor has V across it, so Qᵢ = CᵢV. A larger capacitance stores more charge at the same voltage. The source supplies the sum Q = Q₁ + Q₂ + … to one set of plates."
    ],
    [
      "One equivalent capacitor",
      "Substitute Qᵢ = CᵢV into the charge sum and divide by the common voltage. This gives C_eq = C₁ + C₂ + … . The result exceeds every individual capacitance. For mixed networks, combine clear parallel groups or series chains step by step and redraw."
    ]
  ],
  "formula": [
    [
      "C_eq = C₁ + C₂ + …",
      "Capacitances must use a common unit.",
      "All capacitors connected across the same pair of nodes."
    ],
    [
      "Qᵢ = CᵢV; Q₁/Q₂ = C₁/C₂",
      "The total source charge is ΣQᵢ.",
      "Common V across parallel branches."
    ]
  ],
  "visual": "parallel",
  "reasoning": [
    "Mark the common terminal potentials A and B.",
    "Each capacitor has V = V_A − V_B in magnitude.",
    "Total Q = Q₁ + Q₂ = C₁V + C₂V.",
    "Divide by V: C_eq = C₁ + C₂."
  ],
  "worked": {
    "q": "Connect 3 μF and 6 μF in parallel across 12 V. Find C_eq and their charges.",
    "steps": [
      "C_eq = 3 + 6 = 9 μF.",
      "Q₁ = 3 × 12 = 36 μC; Q₂ = 6 × 12 = 72 μC.",
      "Total charge supplied to the positive plates = 108 μC = C_eq V."
    ]
  },
  "guided": {
    "q": "Enter the equivalent capacitance of 6 μF, 9 μF and 18 μF in parallel, in μF.",
    "answer": 33,
    "tolerance": 0.01,
    "hint": "These capacitors share the same two terminals.",
    "why": "C_eq = 6 + 9 + 18 = 33 μF."
  },
  "independent": {
    "q": "Two 6 μF capacitors in parallel form a group. Connect that group in series with a 4 μF capacitor. Find total capacitance.",
    "solution": [
      "The parallel group has C_p = 6 + 6 = 12 μF.",
      "The series combination is C_eq = (12 × 4)/(12 + 4) = 3 μF.",
      "Redraw the network after reducing the parallel pair."
    ]
  },
  "official": [
    "Q31(A)"
  ],
  "boardTask": {
    "marks": 3,
    "q": "Derive the equivalent capacitance of two parallel capacitors and compare their charge magnitudes.",
    "points": [
      "Draw both capacitors connected across common nodes A and B; each has the same potential difference V.",
      "Total Q = Q₁ + Q₂ = C₁V + C₂V, giving C_eq = Q/V = C₁ + C₂.",
      "Q₁/Q₂ = C₁/C₂: the larger capacitance carries the larger charge magnitude."
    ]
  },
  "trap": [
    "The symbol position on the page determines whether capacitors are in parallel.",
    "The connections between nodes determine the arrangement. Trace both terminals."
  ],
  "recall": [
    "Which quantity is common in parallel, and which quantities add?",
    "Voltage is common. Plate-charge magnitudes supplied to corresponding terminals add, giving C_eq = ΣC."
  ],
  "check": {
    "q": "Two unequal capacitors connected in parallel to a battery have:",
    "options": [
      "equal charges and unequal voltages",
      "equal voltages and generally unequal charges",
      "equal capacitances",
      "no charge"
    ],
    "correct": 1,
    "why": "Both connect to the same two terminal potentials; Q = CV depends on C."
  }
});

addLesson({
  "chapter": 2,
  "id": "31",
  "title": "The parallel-plate capacitor",
  "section": "2.12",
  "objective": "Obtain C = ε₀A/d from the field between plates and use it with correct geometry and units.",
  "bridge": [
    "units",
    "algebra"
  ],
  "lead": "Two broad conducting plates face each other across a small gap. Increasing their facing area gives more room to separate charge. Increasing the gap raises the voltage needed for the same charge.",
  "explain": [
    [
      "First find the field",
      "The facing plates carry surface densities +σ and −σ. In the large-plate approximation, each sheet contributes σ/(2ε₀). Between the plates these fields add to E = σ/ε₀; outside, the ideal sheet contributions cancel. This approximation neglects edge fringing."
    ],
    [
      "Connect field to voltage",
      "The nearly uniform interior field gives V = Ed in magnitude, where d is perpendicular plate separation. With σ = Q/A, V = Qd/(ε₀A). Dividing Q by this V gives C = ε₀A/d. Charge cancels, as it should for unchanged geometry."
    ],
    [
      "Know when the model applies",
      "A is the overlapping area of one plate, not the sum of both plate areas. The gap must be much smaller than the plate dimensions. Real finite plates have fringing fields, especially near the edges; do not claim the exterior field is exactly zero for finite plates."
    ]
  ],
  "formula": [
    [
      "E = Q/(ε₀A); V = Ed; C = ε₀A/d",
      "ε₀ ≈ 8.85 × 10⁻¹² F/m; A in m²; d in m.",
      "Vacuum or approximately air; broad parallel plates; edge effects neglected."
    ]
  ],
  "visual": "capacitor",
  "graph": "plate-gap",
  "reasoning": [
    "Let the opposing plate charge densities be +σ and −σ, with σ = Q/A.",
    "Between the plates the two sheet fields add: E = σ/ε₀ = Q/(ε₀A).",
    "For a uniform field, V = Ed = Qd/(ε₀A).",
    "Hence C = Q/V = ε₀A/d."
  ],
  "worked": {
    "q": "Find C for air-filled plates with area 200 cm² and gap 1.0 mm. Neglect fringing.",
    "steps": [
      "A = 200 × 10⁻⁴ = 0.020 m²; d = 1.0 × 10⁻³ m.",
      "C = (8.85 × 10⁻¹²)(0.020)/(0.001).",
      "C = 1.77 × 10⁻¹⁰ F = 177 pF."
    ]
  },
  "guided": {
    "q": "If only the gap doubles, enter the new capacitance in pF.",
    "answer": 88.5,
    "tolerance": 0.01,
    "hint": "Keep A fixed; C is inversely proportional to d.",
    "why": "C becomes half of 177 pF, or 88.5 pF."
  },
  "independent": {
    "q": "Both plate area and separation are doubled. Find the ratios C_new/C_old and E_new/E_old if the battery remains connected.",
    "solution": [
      "C_new/C_old = (2A/2d)/(A/d) = 1.",
      "Battery connection keeps V fixed. E = V/d, so E_new/E_old = 1/2.",
      "Because C and V are unchanged, Q = CV is unchanged too."
    ]
  },
  "boardTask": {
    "marks": 5,
    "q": "With a labelled diagram, derive the capacitance of a parallel-plate capacitor in vacuum. State the approximation and the effect of doubling separation.",
    "points": [
      "Draw two facing plates with area A, charges +Q and −Q, separation d, and an interior field arrow from + to −.",
      "For plates broad compared with the gap, neglect fringing and take E = σ/ε₀ = Q/(ε₀A).",
      "The magnitude of potential difference is V = Ed = Qd/(ε₀A).",
      "Therefore C = Q/V = ε₀A/d.",
      "At fixed area and medium, doubling d halves C."
    ]
  },
  "trap": [
    "200 cm² equals 2 m².",
    "A squared length unit carries a squared factor: 1 cm² = 10⁻⁴ m², so 200 cm² = 0.020 m²."
  ],
  "recall": [
    "Which area appears in the plate formula?",
    "The overlapping area of one plate."
  ],
  "check": {
    "q": "With A and medium fixed, a plot of C against 1/d is:",
    "options": [
      "a straight line through the origin",
      "a downward parabola",
      "a horizontal line",
      "a circle"
    ],
    "correct": 0,
    "why": "C = (ε₀A)(1/d); slope is ε₀A."
  }
});

addLesson({
  "chapter": 2,
  "id": "32",
  "title": "A dielectric between capacitor plates",
  "section": "2.13",
  "objective": "Find capacitance with a dielectric and distinguish battery-connected from isolated changes.",
  "bridge": [
    "algebra",
    "work"
  ],
  "lead": "A dielectric increases a capacitor’s capacitance. What happens to charge, voltage, field and energy then depends on whether a battery is still connected.",
  "explain": [
    [
      "Fill the gap completely",
      "For a homogeneous linear dielectric of relative permittivity K fully filling the gap, C = Kε₀A/d = KC₀. At a given free charge, polarisation reduces the field and voltage by K. This makes Q/V larger."
    ],
    [
      "Choose the constraint first",
      "Battery connected: V stays fixed, C becomes KC₀, Q becomes KQ₀, and E = V/d is unchanged. Battery disconnected with no leakage: Q stays fixed, V becomes V₀/K, and E becomes E₀/K. Use the appropriate stored-energy formula from lesson 33: energy increases by K at fixed V and decreases by K at fixed Q."
    ],
    [
      "A slab thinner than the gap",
      "For a slab of thickness t covering the full plate area, there is an air region d−t and a dielectric region t. Their fields are Q/(ε₀A) and Q/(Kε₀A). Add their voltage drops to get V = Q[d−t+t/K]/(ε₀A). Thus C = ε₀A/(d−t+t/K). This assumes planar layers, no free charge at the internal interface, and negligible fringing."
    ]
  ],
  "formula": [
    [
      "C_full = KC₀ = Kε₀A/d",
      "K is dimensionless.",
      "Dielectric fully fills the gap; geometry unchanged."
    ],
    [
      "C_slab = ε₀A/(d − t + t/K)",
      "0 ≤ t ≤ d; slab covers the whole plate area.",
      "Remaining gap is vacuum/air; planar ideal geometry."
    ]
  ],
  "visual": "dielectric",
  "reasoning": [
    "For the full gap, use E = Q/(Kε₀A).",
    "Multiply by d to get V = Qd/(Kε₀A).",
    "Divide Q by V to get C = Kε₀A/d.",
    "For a partial-thickness slab, add E_air(d−t) and E_dielectric t before taking Q/V."
  ],
  "worked": {
    "q": "A 2 μF air capacitor is charged to 12 V and disconnected. A K = 3 dielectric fills the gap. Find new C, Q and V.",
    "steps": [
      "Initially Q₀ = C₀V₀ = 24 μC. Disconnection preserves this charge.",
      "C = KC₀ = 6 μF; Q = 24 μC.",
      "V = Q/C = 4 V. If the battery had stayed connected, V would be 12 V and Q would be 72 μC."
    ]
  },
  "guided": {
    "q": "For the same capacitor with its 12 V battery still connected, enter the final charge in μC.",
    "answer": 72,
    "tolerance": 0.01,
    "hint": "Now V is fixed, not Q. The final capacitance is 6 μF.",
    "why": "Q = CV = 6 × 12 = 72 μC."
  },
  "independent": {
    "q": "A K = 2 slab fills half the thickness of an otherwise air-filled capacitor and the entire plate area. Find C/C₀.",
    "solution": [
      "t = d/2. The effective denominator is d−d/2+(d/2)/2 = 3d/4.",
      "C = ε₀A/(3d/4) = 4C₀/3.",
      "This lies between C₀ and the fully filled value 2C₀."
    ]
  },
  "boardTask": {
    "marks": 3,
    "q": "A dielectric completely fills an isolated charged capacitor. State the changes in capacitance, charge and potential difference and explain the constraint.",
    "points": [
      "The new capacitance is KC₀, since the dielectric increases permittivity.",
      "Charge remains Q₀ because the capacitor is isolated and no charge leaks.",
      "V = Q/C therefore decreases to V₀/K. The battery-connected case would instead keep V fixed."
    ]
  },
  "trap": [
    "Q and V both remain fixed when capacitance changes.",
    "Since Q = CV, they cannot both stay fixed for a nonzero capacitor voltage when C changes. Identify the constraint."
  ],
  "recall": [
    "Before solving a dielectric insertion question, what must you ask?",
    "Is the battery connected (fixed V) or is the capacitor isolated with no leakage (fixed Q)?"
  ],
  "check": {
    "q": "A dielectric of K = 4 fully fills an isolated charged capacitor. The voltage becomes:",
    "options": [
      "4V₀",
      "V₀",
      "V₀/4",
      "zero"
    ],
    "correct": 2,
    "why": "Q is constant while C increases fourfold, so V = Q/C falls fourfold."
  }
});

addLesson({
  "chapter": 2,
  "id": "33",
  "title": "Energy stored in a capacitor",
  "section": "2.15 · formulae and applications only",
  "objective": "Choose the right energy formula, reason about constraints and solve charge-sharing problems.",
  "bridge": [
    "units",
    "work",
    "algebra"
  ],
  "lead": "Separating opposite charges takes work. A charged capacitor stores energy in its electric field and can release that energy when connected to another circuit.",
  "explain": [
    [
      "Use one of three equivalent forms",
      "The stored energy is U = ½CV² = ½QV = Q²/(2C). The factor ½ matters. These are equivalent because Q = CV. Choose the form that uses known quantities or the quantity held constant. The current CBSE syllabus requires the formulae and applications, without deriving the stored-energy formula."
    ],
    [
      "What happens when C changes?",
      "At fixed V, U = ½CV² increases with C. At fixed Q, U = Q²/(2C) decreases as C increases. A connected battery can transfer energy as well as charge. The capacitor alone is not an isolated energy system in that case."
    ],
    [
      "Charge sharing",
      "Connect an initially charged capacitor in parallel with an uncharged one, with no external source. Total charge is conserved and the final voltage is common. Calculate that voltage first, then initial and final stored energies. In a real connecting circuit, the decrease is dissipated through resistance and electromagnetic radiation; energy is not destroyed."
    ]
  ],
  "formula": [
    [
      "U = ½CV² = ½QV = Q²/(2C)",
      "U in J; C in F; Q in C; V in V.",
      "Ideal capacitor. Formula application only; no stored-energy derivation required."
    ],
    [
      "V_f = (C₁V₁ + C₂V₂)/(C₁ + C₂)",
      "Take signed initial voltages relative to the same connected terminals.",
      "Capacitors connected in parallel without an external source; charge conserved."
    ]
  ],
  "visual": "capacitor-energy",
  "graph": "capacitor-energy",
  "reasoning": [
    "Identify what is connected and which quantity is conserved or fixed.",
    "Find the final charge and voltage using Q = CV and any charge conservation.",
    "Choose an energy formula using the known quantities.",
    "Compare energy values and account for exchange with the battery, external agent or connecting circuit."
  ],
  "worked": {
    "q": "Find the energy in a 4 μF capacitor charged to 10 V.",
    "steps": [
      "Use U = ½CV². Convert C to 4 × 10⁻⁶ F.",
      "U = ½ × 4 × 10⁻⁶ × 10² = 2 × 10⁻⁴ J.",
      "U = 200 μJ. Its charge is 40 μC, and ½QV gives the same result."
    ]
  },
  "guided": {
    "q": "With the same capacitor, the voltage is doubled to 20 V. Enter the stored energy in μJ.",
    "answer": 800,
    "tolerance": 0.01,
    "hint": "Energy is proportional to V² at fixed C.",
    "why": "Doubling V multiplies U by four: 800 μJ."
  },
  "independent": {
    "q": "A 4 μF capacitor charged to 10 V is disconnected and connected in parallel to an identical uncharged capacitor. Find final voltage and the decrease in stored energy.",
    "solution": [
      "Total charge is 40 μC. Total capacitance is 8 μF, so V_f = 40/8 = 5 V.",
      "U_initial = 200 μJ. U_final = ½(8 μF)(5 V)² = 100 μJ.",
      "The decrease is 100 μJ, transferred to the connecting circuit and surroundings."
    ]
  },
  "boardTask": {
    "marks": 3,
    "q": "A dielectric of K = 3 fills a charged capacitor. Compare its new stored energy for (i) battery connected and (ii) battery disconnected before insertion.",
    "points": [
      "In both cases capacitance becomes 3C₀.",
      "With the battery connected, V stays fixed, so U = ½CV² becomes 3U₀.",
      "With the battery disconnected and no leakage, Q stays fixed, so U = Q²/(2C) becomes U₀/3."
    ]
  },
  "trap": [
    "Energy conservation requires the final energy in the capacitors alone to equal their initial energy.",
    "Charge-sharing currents can transfer energy to resistance and radiation. Account for the whole system."
  ],
  "recall": [
    "Which energy formula is most useful at fixed charge?",
    "U = Q²/(2C). Increasing C then decreases U."
  ],
  "check": {
    "q": "An isolated charged capacitor doubles its capacitance. With no leakage, its stored energy becomes:",
    "options": [
      "2U₀",
      "4U₀",
      "U₀/2",
      "U₀"
    ],
    "correct": 2,
    "why": "Q remains fixed, so U = Q²/(2C) is halved."
  }
});
