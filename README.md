# Fieldwork · Unit I — Electrostatics

A functional, local learning course for **CBSE Class XII Physics 042, session 2026–27**, covering both Unit I chapters through **33 sequential topic lessons**.

Open [the course](design/unit-1-preview.html), or refresh that file if it is already open. No install, account, network connection or development server is needed for the lessons. Official source PDFs open online.

## What is implemented

Each topic includes foundation links, a plain-language explanation, an annotated diagram, formulas with conditions where relevant, reasoning, a worked example, guided practice, an independent problem, board-answer writing, a misconception, recall and a concept check.

- **Chapter 1:** 17 topics, from charge to the spherical-shell application of Gauss’s law.
- **Chapter 2:** 16 topics, from potential to stored capacitor energy.
- **Practice:** 33 guided questions, 33 independent problems, 33 written board tasks, 33 concept MCQs, 8 integrated cases, 4 additional long questions and 3 assertion–reason questions.
- **Board practice bank:** 81 questions across MCQ, assertion–reason, 2-mark, 3-mark, 4-mark case and 5-mark formats. The 33 lesson board tasks and 33 MCQs are reused here; the bank count is not an additional 81 questions.
- **Two 20-mark chapter tests**, with automatic MCQ checks and explicit learner assessment of written answers.
- **Notebook:** memory maps, formulas, reasoning, foundations, written drafts and recorded mistakes.
- **Progress:** saved in browser local storage. Visiting a page does not pass its checkpoint. Checked questions and reviewed written work are both required.
- **Three supporting controls:** Coulomb distance, flux orientation and dielectric connection constraints.

## Sources and scope

Only official CBSE and NCERT documents support the physics content. Lesson wording and practice are original; they are not CBSE-issued lessons or official marking schemes. Official sample-paper questions link to their original PDF pages and are never labelled as PYQs.

Capacitor energy is taught through formulae and applications, without a required derivation. Unit I has no independently guaranteed mark allocation; the current syllabus groups Units I and II together.

See the [source audit](research/source-audit.md), [curriculum manifest](curriculum/unit-1-manifest.json), [current design specification](design/unit-1-spec.md) and [validation report](research/validation-report.json).

## Structure

- `content/course.js`: session metadata and eight foundation bridges.
- `content/chapter-1.js`, `content/chapter-2.js`: all lesson content.
- `content/assessments.js`: integrated practice and official sample-paper references.
- `app/course.js`: routes, practice, tests, drafts and progress.
- `app/diagrams.js`: scientific diagrams and graphs.
- `app/course.css`: lavender/cyan responsive reading layout.
- `design/unit-1-preview.html`: entry point, retained at the original preview path.

## Validation

Run:

```sh
node scripts/sync-manifest.cjs
node scripts/validate.cjs
python3 scripts/check-markup.py
```

Checks cover curriculum references, source metadata, numeric answers, answer-key structure, controller flows, completion rules, chapter scoring, generated HTML, source hosts and local asset links. These are offline checks; they do not run a browser layout engine.

**Review status:** all 33 topics are authored. Human physics-editor review and learner testing remain pending. Browser visual review was not performed because local-file browser automation was restricted. This is a working course build for review, not a claim of production certification or guaranteed board performance.
# physics
