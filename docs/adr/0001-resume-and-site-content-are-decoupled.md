# The Resume PDF and the site's content are maintained separately

The site renders from a hand-authored, typed content model in `src/content/`; `public/resume.pdf` is authored independently (in a word processor) and committed as a finished artifact. Neither is generated from the other.

We considered generating the one-page PDF from the content model, and we considered parsing the PDF to produce the content model. Generation was rejected because it would couple the resume's layout to the site's build for a document that is edited in a word processor and needs free-form control. Parsing was rejected because the PDF is a layout export with no semantic structure — bullet-to-employer association is inferred from vertical position, so reformatting the resume would silently mis-associate content rather than fail loudly, and because the site is deliberately a superset of the resume, which cannot be derived from a subset.

## Consequences

The two artifacts can drift, and they have: before this decision the site and the resume disagreed on team size, job title, the employer's name, and the technologies list. There is no automated check — a CI check would have to parse the PDF, reintroducing exactly the brittleness we rejected. Drift is instead managed by a manual checklist in `CLAUDE.md`, which is load-bearing rather than advisory. A known instance: the committed PDF links `hawaiizoningatlas.com`, a domain that has since been typosquatted and is no longer linked from the site's HTML.
