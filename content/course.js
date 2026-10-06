window.PHYSICS = {
  session: '2026–27', version: '2.0', lessons: [], assessments: [],
  sources: {
    syllabus: {title:'CBSE Physics 042 · 2026–27 syllabus', url:'https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart2/Physics_SecP2_2026-27.pdf'},
    ch1: {title:'NCERT Physics I · Chapter 1', url:'https://ncert.nic.in/textbook/pdf/leph101.pdf'},
    ch2: {title:'NCERT Physics I · Chapter 2', url:'https://ncert.nic.in/textbook/pdf/leph102.pdf'},
    sqp: {title:'CBSE Physics · 2026–27 sample paper', url:'https://cbseacademic.nic.in/web_material/SQP/ClassXII_2026_27/Physics-SQP.pdf'},
    ms: {title:'CBSE Physics · 2026–27 sample marking scheme', url:'https://cbseacademic.nic.in/web_material/SQP/ClassXII_2026_27/Physics-MS.pdf'},
    exclusions: {title:'NCERT · Class XII rationalised content',url:'https://ncert.nic.in/pdf/BookletClass12.pdf'}
  },
  bridges: {
    units:{title:'Powers of ten and SI units',text:'A prefix is a multiplier: μ = 10⁻⁶, n = 10⁻⁹, p = 10⁻¹², cm = 10⁻² m, mm = 10⁻³ m. Convert before substituting. Squaring a length squares its conversion factor too: 100 cm² = 100 × 10⁻⁴ m² = 0.01 m².',example:'2 μC × 3 μC = 6 × 10⁻¹² C². Also, (0.30 m)² = 0.09 m².',q:'Convert 5 nC to coulombs.',answer:'5 × 10⁻⁹ C.'},
    vectors:{title:'An arrow is a quantity with direction',text:'A scalar needs a number and unit. A vector also needs direction. Choose +x to the right and +y upward. Rightward components are positive; leftward components negative. Add x components separately from y components.',example:'3 N right and 4 N up give magnitude √(3² + 4²) = 5 N; tan θ = 4/3, measured above +x.',q:'What is 7 N right plus 2 N left?',answer:'5 N right. Subtract because the directions oppose.'},
    inverse:{title:'What “inverse square” means',text:'If F = constant/r², keep the numerator unchanged and square the distance multiplier. Doubling r makes the denominator four times larger, so F becomes one quarter. Halving r makes F four times larger.',example:'r → 3r gives F → F/9. If q₁ also doubles, the combined change is F → 2F/9.',q:'How does F change if distance becomes r/2?',answer:'F becomes 4F.'},
    work:{title:'Work, potential energy and signs',text:'Work by a constant force is W = F·s = Fs cos θ. A force in the direction of displacement does positive work. For a conservative electric force, W_field = −ΔU. In slow motion with no change in kinetic energy, W_external = ΔU.',example:'If an external agent supplies 6 J while moving a charge slowly, ΔU = +6 J and W_field = −6 J.',q:'The electric field does +4 J of work. What is ΔU?',answer:'−4 J. Potential energy decreases.'},
    trig:{title:'Angles, components and a surface normal',text:'cos 0° = 1, cos 60° = 1/2, cos 90° = 0. sin 0° = 0, sin 30° = 1/2, sin 90° = 1. A component parallel to a chosen direction is the magnitude times the cosine of the angle to that direction. A surface normal is perpendicular to the surface.',example:'A field E making 60° with a normal has normal component E/2. An angle given to the plane must first be converted to its angle to the normal.',q:'A field makes 30° with a plane. What angle does it make with the normal?',answer:'60°.'},
    integral:{title:'A sum of many tiny contributions',text:'The symbol ∫ means add contributions from many tiny pieces. dq is a small charge, dA a small area and dl a small length. If the integrand is constant, the integral is just that constant times the total length or area.',example:'For uniform E normal to every point of a spherical surface, ∮ E dA = E(4πr²). You may take E outside only when it is constant on that surface.',q:'For uniform linear density λ, what is ∫λ dl over length L?',answer:'λL.'},
    slope:{title:'Read the slope, not just the height',text:'Graph height gives the value on the vertical axis. Slope gives its rate of change with the horizontal variable: Δy/Δx. A downward-sloping V versus x graph has dV/dx < 0; therefore Eₓ = −dV/dx > 0.',example:'V falls from 12 V to 4 V as x goes from 0 to 2 m. Slope = (4−12)/2 = −4 V/m, so Eₓ = +4 V/m.',q:'A V–x graph is horizontal. What is Eₓ?',answer:'Zero in that region.'},
    algebra:{title:'Rearrange before substituting',text:'Keep the relation symbolic until the unknown is isolated. In C = Q/V, multiply by V to obtain Q = CV; divide by C to get V = Q/C. For reciprocals, use a common denominator.',example:'1/C = 1/3 + 1/6 = 1/2, so C = 2 in the same capacitance unit, not 1/2.',q:'If 1/C = 1/4 + 1/4 with values in μF, what is C?',answer:'2 μF.'}
  }
};
window.addLesson = function(l) {
  const metadata={academic_session:'2026-27',board:'CBSE',class:'XII',subject_code:'042',unit:'I',chapter:l.chapter,concept:l.title,syllabus_status:'current',source:PHYSICS.sources['ch'+l.chapter].url,source_version:'2026-27',last_verified_at:'2026-10-04',review_status:'authored; human review pending',source_type:'original teaching and practice based on cited official curriculum'};
  const entry={...metadata,...l};
  for(const key of ['worked','guided','independent','boardTask','check'])entry[key]={...metadata,...l[key],item_id:'U1-'+l.id+'-'+key};
  PHYSICS.lessons.push(entry);
};
