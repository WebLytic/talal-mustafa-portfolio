import { useCallback, useState } from 'react'

type Project = {
  name: string
  domain: string
  industry: string
  summary: string
  stack: string[]
  role: string[]
  imageName?: string
}

const projects: Project[] = [
  {
    name: 'Ascent Creative',
    domain: 'ascenttt.com',
    imageName: 'ascent',
    industry: 'Digital Marketing',
    summary: 'Agency platform focused on branding, campaigns, and high-conversion service pages.',
    stack: ['WordPress', 'Custom Theme', 'Elementor', 'SEO'],
    role: ['Design Direction', 'WordPress Development', 'Performance'],
  },
  {
    name: 'Parrucche Online',
    domain: 'parruccheonline.com',
    industry: 'E-commerce',
    summary:
      'Italian WooCommerce store for wigs and accessories with installments and consultation flows.',
    stack: ['WordPress', 'WooCommerce', 'PayPal', 'Klarna'],
    role: ['E-commerce Build', 'Checkout UX', 'Plugin Integration'],
  },
  {
    name: 'Repar2Guard',
    domain: 'repar2guard.com',
    imageName: 'Repar2Guard',
    industry: 'Industrial Safety',
    summary:
      'Industrial safety website with product documentation and inquiry-focused conversion paths.',
    stack: ['WordPress', 'Elementor', 'Technical Content', 'Contact Forms'],
    role: ['Information Architecture', 'WordPress Build'],
  },
  {
    name: 'Olio Pomes',
    domain: 'oliopomes.it',
    imageName: 'oliopomes',
    industry: 'Food & Beverage',
    summary: 'Story-driven brand site presenting olive oil heritage, process, and product lines.',
    stack: ['WordPress', 'Brand Storytelling', 'Responsive UI'],
    role: ['Brand Experience', 'Frontend Development'],
  },
  {
    name: 'Danieli Autoservizi',
    domain: 'danieliautoservizi.it',
    imageName: 'danieliautoservizi',
    industry: 'Travel & Transport',
    summary: 'Travel and bus services platform with structured tours, booking requests, and lead capture.',
    stack: ['WordPress', 'Custom Post Types', 'Form Automation'],
    role: ['CMS Architecture', 'Lead Generation'],
  },
  {
    name: 'NCC Pas Travel',
    domain: 'ncc-pastravel.com',
    industry: 'Private Transport',
    summary: 'Premium chauffeur service site with fleet presentation and high-intent booking requests.',
    stack: ['WordPress', 'Booking Forms', 'Responsive UI'],
    role: ['Service UX', 'WordPress Development'],
  },
  {
    name: 'Antonietta Tessuti',
    domain: 'antoniettatessuti.com',
    imageName: 'antoniettatessuti',
    industry: 'Textile Retail',
    summary: 'Catalog-driven website presenting fabric collections for fashion and interior projects.',
    stack: ['WordPress', 'WooCommerce Ready', 'Product Galleries'],
    role: ['Catalog Experience', 'CMS Setup'],
  },
  {
    name: 'DIGAS',
    domain: 'digas.org',
    imageName: 'digas',
    industry: 'Industrial Gas Systems',
    summary: 'Corporate site communicating industrial gas services and sector-specific applications.',
    stack: ['WordPress', 'Multi-page Corporate UI', 'Forms'],
    role: ['Content Structure', 'Frontend Build'],
  },
  {
    name: 'RG Gloves',
    domain: 'rggloves.gr',
    industry: 'PPE Manufacturing',
    summary: 'Product-led web presence for safety gloves with industry segmentation and distributor focus.',
    stack: ['WordPress', 'WooCommerce', 'Product Taxonomies'],
    role: ['Product Architecture', 'B2B UX'],
  },
  {
    name: 'GLP SRL',
    domain: 'glpsrl.it',
    industry: 'Industrial Manufacturing',
    summary: 'Manufacturing website showcasing capabilities and technical service categories.',
    stack: ['WordPress', 'Responsive Components', 'SEO'],
    role: ['Technical Presentation', 'WordPress Build'],
  },
  {
    name: 'Valvole Industriali AMIS',
    domain: 'valvoleindustrialiamis.com',
    industry: 'Industrial Valves',
    summary: 'Technical catalog experience for valve specifications and industrial applications.',
    stack: ['WordPress', 'Product Specs', 'Inquiry Forms'],
    role: ['Content UX', 'Performance Tuning'],
  },
  {
    name: 'Fracchia Porte Shop',
    domain: 'shopfracchiaporte.com',
    industry: 'Construction E-commerce',
    summary: 'Online doors marketplace with model browsing and product detail optimization.',
    stack: ['WordPress', 'WooCommerce', 'Payment Flow'],
    role: ['E-commerce Development', 'Conversion UX'],
  },
  {
    name: 'Turbo Group',
    domain: 'turbogroup.it',
    imageName: 'TurboGroup',
    industry: 'Industrial Services',
    summary: 'Engineering services website highlighting projects, expertise, and contact pathways.',
    stack: ['WordPress', 'Corporate UI', 'Lead Forms'],
    role: ['WordPress Development', 'UI Delivery'],
  },
  {
    name: 'Ecologica Piemontese',
    domain: 'ecologicapiemontese.com',
    industry: 'Environmental Services',
    summary: 'Service-oriented platform for ecological maintenance and waste management requests.',
    stack: ['WordPress', 'Service Landing Pages', 'Forms'],
    role: ['Local SEO', 'Lead-Focused UX'],
  },
  {
    name: "Onoranze Funebri Dell'Orto",
    domain: 'onoranzefunebridellorto.it',
    industry: 'Funeral Services',
    summary: 'Trust-centric website providing clear service details and immediate contact channels.',
    stack: ['WordPress', 'Accessible UI', 'Contact Flows'],
    role: ['Empathy-Driven UX', 'Web Development'],
  },
  {
    name: 'Tecnorulli',
    domain: 'tecnorulli.com',
    industry: 'Industrial Components',
    summary: 'Manufacturer website presenting roller systems and related machinery components.',
    stack: ['WordPress', 'Technical Catalog', 'SEO'],
    role: ['Product Positioning', 'CMS Build'],
  },
  {
    name: 'CTS Torino',
    domain: 'ctstorino.com',
    imageName: 'ctstorino',
    industry: 'Mechanical Services',
    summary: 'Technical service platform for industrial support and mechanical solutions.',
    stack: ['WordPress', 'Corporate Content', 'Responsive UI'],
    role: ['Front-end Delivery', 'Structure & Navigation'],
  },
  {
    name: 'Bilance Online',
    domain: 'bilanceonline.com',
    imageName: 'bilanceonline',
    industry: 'B2B E-commerce',
    summary: 'Commerce platform for weighing equipment and professional measuring systems.',
    stack: ['WordPress', 'WooCommerce', 'Product Filtering'],
    role: ['E-commerce Architecture', 'Checkout Experience'],
  },
  {
    name: 'NMG Italia',
    domain: 'nmgitalia.com',
    industry: 'Industrial Manufacturing',
    summary: 'Corporate industrial website centered on products, capabilities, and technical trust.',
    stack: ['WordPress', 'Responsive Design', 'Technical Content'],
    role: ['Site Build', 'Content Scalability'],
  },
  {
    name: 'Tecnol SRL',
    domain: 'tecnolsrl.it',
    industry: 'Industrial Engineering',
    summary: 'Engineering-focused website for mechanical components and production solutions.',
    stack: ['WordPress', 'Custom Sections', 'Lead Forms'],
    role: ['WordPress Engineering', 'UI Optimization'],
  },
  {
    name: 'Studio Oculistico Di Meglio',
    domain: 'studiooculisticodimeglio.com',
    industry: 'Healthcare',
    summary: 'Medical services website balancing patient clarity, trust, and treatment information.',
    stack: ['WordPress', 'Service Pages', 'Local SEO'],
    role: ['Healthcare UX', 'Performance & Accessibility'],
  },
  {
    name: 'Autolavaggio Luisa',
    domain: 'autolavaggioluisa.com',
    imageName: 'AutolavaggioLuisa',
    industry: 'Automotive Services',
    summary: 'Local business website designed around visibility, service clarity, and direct contact.',
    stack: ['WordPress', 'Local SEO', 'Mobile-first UI'],
    role: ['Local Conversion UX', 'Development'],
  },
  {
    name: 'Studio Elle Textile',
    domain: 'studioelletextile.com',
    industry: 'Textile Design',
    summary: 'Design-led textile studio website featuring visual collections and brand identity.',
    stack: ['WordPress', 'Gallery Experience', 'Brand UI'],
    role: ['Design Implementation', 'Frontend Polish'],
  },
  {
    name: 'SALF SPA',
    domain: 'salfspa.it',
    industry: 'Industrial Manufacturing',
    summary: 'Enterprise industrial web presence with service positioning and technical credibility.',
    stack: ['WordPress', 'Corporate Website', 'SEO Foundation'],
    role: ['Enterprise Content Structure', 'Web Delivery'],
  },
  {
    name: 'Gradim Giochi',
    domain: 'gradimgiochi.com',
    industry: 'Entertainment',
    summary: 'Entertainment brand website with product/service communication and visual appeal.',
    stack: ['WordPress', 'Visual UI', 'Responsive Components'],
    role: ['Creative Build', 'Performance Basics'],
  },
  {
    name: 'Eco Spurghi Emilia',
    domain: 'ecospurghiemilia.com',
    imageName: 'ecospurghiemilia',
    industry: 'Environmental Services',
    summary: 'Drainage and sanitation service platform with conversion-ready service pages.',
    stack: ['WordPress', 'Service-focused Layout', 'Lead Forms'],
    role: ['Service Marketing UX', 'Development'],
  },
  {
    name: 'MagValves',
    domain: 'magvalves.com',
    imageName: 'magvalves',
    industry: 'Industrial Valves',
    summary: 'International valve solutions website emphasizing products, specifications, and contacts.',
    stack: ['WordPress', 'Technical Content', 'International-ready'],
    role: ['B2B Presentation', 'CMS Implementation'],
  },
]

function getImageCandidates(project: Project): string[] {
  const baseDomain = project.domain.replace(/^www\./, '').replace(/\.[^.]+$/, '')

  const names = [project.imageName, baseDomain, project.domain].filter(
    (value): value is string => Boolean(value),
  )

  const uniqueNames = Array.from(new Set(names))

  return uniqueNames.flatMap((name) => [`/${name}.png`, `/projects/${name}.png`])
}

function getPrimaryPreviewPath(project: Project): string {
  return getImageCandidates(project)[0]
}

export function App() {
  const [previewFailed, setPreviewFailed] = useState<Record<string, boolean>>({})

  const markPreviewFailed = useCallback((domain: string) => {
    setPreviewFailed((prev) => (prev[domain] ? prev : { ...prev, [domain]: true }))
  }, [])

  const featuredProject = projects[0]
  const remainingProjects = projects.slice(1)

  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-slate-100 to-slate-50 text-slate-900">
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-14 pt-5 sm:px-6 md:gap-14 md:px-10 md:pt-8">
        <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.35)] sm:p-8 md:p-12">
          <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-95" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/82 to-white/65"
            aria-hidden="true"
          />
          <div className="relative z-10 grid gap-6 md:grid-cols-[1.4fr_0.8fr] md:items-end md:gap-8">
            <div className="space-y-6">
              <p className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700">
                Senior WordPress Developer
              </p>
              <h1 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-tight text-black sm:text-5xl md:text-7xl">
                Talal Mustafa
              </h1>
              <p className="max-w-4xl text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-5xl">
                Scalable WordPress solutions for high-performance websites.
              </p>
              <p className="max-w-3xl text-sm text-slate-700 sm:text-base md:text-lg">
                Delivering enterprise-grade WordPress builds with custom plugin architecture,
                maintainable themes, technical SEO, and performance-focused development.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex justify-center rounded-lg bg-black px-5 py-2.5 text-sm font-semibold text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  View Projects
                </a>
              </div>
            </div>

            <div className="hidden rounded-2xl border border-slate-200 bg-white/80 p-5 backdrop-blur md:block">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Core Strengths
              </p>
              <ul className="mt-3 space-y-2 text-sm font-medium text-slate-800">
                <li>Custom WordPress Plugin Architecture</li>
                <li>Advanced Technical SEO Implementation</li>
                <li>Core Web Vitals Optimization</li>
                <li>REST API Integrations & Migrations</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="space-y-5">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold md:text-3xl">Project Portfolio</h2>
            <p className="text-slate-600">Showcasing live websites with visual previews.</p>
          </div>

          {featuredProject ? (
            <a
              href={`https://${featuredProject.domain}`}
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-md transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 md:p-6"
            >
              <div className="grid gap-5 md:grid-cols-[1.15fr_1fr] md:gap-6">
                <div className="relative overflow-hidden rounded-2xl border border-slate-200">
                  {previewFailed[featuredProject.domain] ? (
                    <div
                      className="flex h-56 w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-sm font-medium text-slate-500 sm:h-64 md:h-full md:min-h-[280px]"
                      aria-hidden="true"
                    >
                      Preview unavailable
                    </div>
                  ) : (
                    <img
                      src={getPrimaryPreviewPath(featuredProject)}
                      alt={`${featuredProject.name} website preview`}
                      className="h-56 w-full object-cover transition duration-300 ease-out group-hover:scale-[1.02] sm:h-64 md:h-full"
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      onError={() => markPreviewFailed(featuredProject.domain)}
                    />
                  )}
                  <span className="absolute right-3 top-3 rounded-full bg-black/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                    Featured
                  </span>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
                      {featuredProject.industry}
                    </p>
                    <h3 className="mt-1 text-2xl font-bold text-slate-900">{featuredProject.name}</h3>
                    <p className="mt-1 inline-block text-sm text-blue-700 underline-offset-4 group-hover:underline">
                      {featuredProject.domain}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                      {featuredProject.summary}
                    </p>
                  </div>
                  <div className="mt-5 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
                      Role: {featuredProject.role.join(' / ')}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ) : null}

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {remainingProjects.map((project) => (
              <a
                key={project.domain}
                href={`https://${project.domain}`}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30"
              >
                <div className="relative mb-4 overflow-hidden rounded-xl border border-slate-200">
                  {previewFailed[project.domain] ? (
                    <div
                      className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-xs font-medium text-slate-500 sm:h-52"
                      aria-hidden="true"
                    >
                      Preview unavailable
                    </div>
                  ) : (
                    <img
                      src={getPrimaryPreviewPath(project)}
                      alt={`${project.name} website preview`}
                      className="h-48 w-full object-cover transition duration-300 ease-out group-hover:scale-[1.03] sm:h-52"
                      loading="lazy"
                      decoding="async"
                      onError={() => markPreviewFailed(project.domain)}
                    />
                  )}
                  <span className="absolute right-3 top-3 rounded-full bg-black/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                    Live
                  </span>
                </div>
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500">{project.industry}</p>
                <h3 className="mt-1 text-lg font-semibold text-slate-900">{project.name}</h3>
                <p className="mt-1 inline-block text-sm text-blue-700 underline-offset-4 group-hover:underline">
                  {project.domain}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-slate-700">{project.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-4 text-xs uppercase tracking-[0.14em] text-slate-500">
                  Role: {project.role.join(' / ')}
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-6 bg-black px-4 py-8 text-white sm:px-6 md:px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-semibold text-white">Talal Mustafa</p>
          <p>Senior WordPress Developer</p>
        </div>
      </footer>
    </div>
  )
}
