import Link from 'next/link'
import Image from 'next/image'
import { Playfair_Display } from 'next/font/google'
import { ArrowRight, ArrowUpRight, Factory, Beaker, Leaf, Droplets, FlaskConical, Palette, Heart, Ship, Phone, Mail } from 'lucide-react'
import HomeEffects from '@/components/home/HomeEffects'
import s from '@/components/home/home.module.css'

// Italic cut of the brand display face, loaded for the home page only.
const playfairItalic = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--home-italic',
})

const trustItems = ['Gujarat, India', 'ISO Process Controls', 'Export Ready', 'Est. 2020']

const products = [
  {
    num: '01',
    image: '/home/castor-oil.jpg',
    alt: 'Castor Oil sample in a glass jar (representational image)',
    badge: 'Manufactured',
    tone: s.badgeGreen,
    title: 'Castor Oil',
    points: ['Manufactured product', 'Industrial and commercial applications', 'Detailed specifications available'],
    href: '/products/castor-oil',
  },
  {
    num: '02',
    image: '/home/castor-seed.jpg',
    alt: 'Castor Seed on jute (representational image)',
    badge: 'Traded / Sourced',
    tone: s.badgeGold,
    title: 'Castor Seed',
    points: ['Traded and sourced product', 'Agricultural commodity', 'Quality and grading details available'],
    href: '/products/castor-seed',
  },
]

const proofPoints = ['Process-Controlled Manufacturing', 'Documentation on Request', 'Export-Oriented Supply']

const industries = [
  { icon: Factory, label: 'Industrial Manufacturing' },
  { icon: Beaker, label: 'Pharmaceuticals' },
  { icon: Heart, label: 'Cosmetics & Personal Care' },
  { icon: Droplets, label: 'Lubricants' },
  { icon: Palette, label: 'Paints & Coatings' },
  { icon: FlaskConical, label: 'Chemicals' },
  { icon: Leaf, label: 'Agricultural Processing' },
  { icon: Ship, label: 'Export Markets' },
]

const marqueeItems = [
  ['Castor Oil', 'Manufactured'],
  ['Castor Seed', 'Sourced & Traded'],
]

function SectionTag({ num, label }: { num: string; label: string }) {
  return (
    <p className={s.tag} data-reveal="up">
      <span className={s.tagNum}>{num}</span>
      <span className={s.tagRule} aria-hidden="true" />
      <span>{label}</span>
    </p>
  )
}

export default function HomePage() {
  return (
    <div className={`${s.home} ${playfairItalic.variable}`} data-home>
      <HomeEffects />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className={`${s.hero} ${s.grain}`} data-hero>
        <div className={s.heroMedia}>
          <div className={s.heroMediaInner} data-parallax="0.12">
            <Image
              src="/home/hero.jpg"
              alt="Illustrative view of castor seed and castor oil in storage"
              fill
              priority
              quality={70}
              sizes="(min-width: 1024px) 64vw, 100vw"
              className={s.heroImg}
            />
          </div>
        </div>

        <div className={`${s.wrap} ${s.heroBody}`}>
          <div className={s.heroMain}>
            <p className={s.eyebrow}>
              <span className={s.eyebrowRule} aria-hidden="true" />
              India-Based Manufacturer &amp; Exporter
            </p>
            <h1 className={s.heroTitle}>
              <span className={s.line}><span style={{ '--i': 0 } as React.CSSProperties}>Castor Oil </span></span>
              <span className={s.line}><span style={{ '--i': 1 } as React.CSSProperties}>Manufacturing </span></span>
              <span className={s.line}><span style={{ '--i': 2 } as React.CSSProperties}><em>&amp; Trade</em></span></span>
            </h1>
            <p className={s.heroLead}>
              Castor Oil, manufactured. Castor Seed, sourced and traded. Supplied to domestic and international
              buyers with process discipline and supply reliability.
            </p>
            <div className={s.heroActions}>
              <Link href="/contact" className={`${s.btn} ${s.btnGold}`}>
                Request a Quote <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link href="/products" className={`${s.btn} ${s.btnGhost}`}>
                View Products
              </Link>
            </div>
          </div>

          <nav className={s.heroIndex} aria-label="Products">
            {products.map(p => (
              <Link key={p.num} href={p.href} className={s.heroIndexItem}>
                <span className={s.heroIndexNum}>{p.num}</span>
                <span>
                  <span className={s.heroIndexName}>{p.title}</span>
                  <span className={s.heroIndexMeta}>{p.badge}</span>
                </span>
                <ArrowUpRight size={18} aria-hidden="true" className={s.heroIndexArrow} />
              </Link>
            ))}
          </nav>
        </div>

        <ul className={s.trust} aria-label="Company highlights">
          {trustItems.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      {/* ── 01 ABOUT ─────────────────────────────────────── */}
      <section className={`${s.section} ${s.light}`}>
        <div className={`${s.wrap} ${s.aboutGrid}`}>
          <div className={s.aboutText}>
            <SectionTag num="01" label="Who We Are" />
            <h2 className={s.h2} data-reveal="up">About Parinay Oils</h2>
            <p className={s.lead} data-reveal="up">
              Parinay Oils is an India-based manufacturing and trading company engaged in the supply of Castor Oil and
              Castor Seed. The company operates with a focus on process discipline, supply reliability, and alignment
              with buyer-specific requirements.
            </p>
            <p className={s.ledger} data-reveal="up">
              Manufacturing activities are limited to Castor Oil. Castor Seed is supplied through external sourcing and
              trading arrangements.
            </p>
            <div data-reveal="up">
              <Link href="/about" className={s.textLink}>
                Learn More About Us <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className={s.aboutMedia}>
            <div className={s.frameWrap}>
              <div className={`${s.frame} ${s.frameTall}`} data-reveal="clip">
                <Image
                  src="/home/about.jpg"
                  alt="Illustrative agro-industrial facility interior"
                  fill
                  sizes="(min-width: 1024px) 40vw, 92vw"
                  className={s.cover}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 PRODUCTS ──────────────────────────────────── */}
      <section className={`${s.section} ${s.sand}`}>
        <div className={s.wrap}>
          <div className={s.splitHead}>
            <div>
              <SectionTag num="02" label="What We Supply" />
              <h2 className={s.h2} data-reveal="up">Our Products</h2>
            </div>
            <p className={s.headNote} data-reveal="up">
              Two products, one clear distinction: we manufacture Castor Oil, and source and trade Castor Seed.
            </p>
          </div>

          <div className={s.productGrid}>
            {products.map(p => (
              <article key={p.num} className={s.product} data-reveal="up">
                <Link href={p.href} className={s.productMedia} tabIndex={-1} aria-hidden="true">
                  <Image src={p.image} alt="" fill sizes="(min-width: 768px) 45vw, 92vw" className={s.cover} />
                  <span className={s.productNum}>{p.num}</span>
                </Link>
                <span className={`${s.badge} ${p.tone}`}>{p.badge}</span>
                <div className={s.productBody}>
                  <h3 className={s.h3}>{p.title}</h3>
                  <ul className={s.points}>
                    {p.points.map(pt => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <Link href={p.href} className={s.textLink}>
                    View Details<span className={s.srOnly}> for {p.title}</span> <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 03 MANUFACTURING (dark) ──────────────────────── */}
      <section className={`${s.dark} ${s.grain} ${s.mfg}`}>
        <div className={s.marquee} aria-hidden="true">
          <div className={s.marqueeTrack}>
            {[0, 1].map(copy => (
              <div key={copy} className={s.marqueeGroup}>
                {marqueeItems.concat(marqueeItems).map(([a, b], i) => (
                  <span key={i} className={s.marqueeItem}>
                    {a} <em>{b}</em> <span className={s.marqueeStar}>✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={`${s.wrap} ${s.mfgInner}`}>
          <div className={`${s.band} ${s.frame}`} data-reveal="clip">
            <div className={s.bandInner} data-parallax="0.08">
              <Image
                src="/home/warehouse.jpg"
                alt="Illustrative view of a warehousing and dispatch hall"
                fill
                sizes="(min-width: 1200px) 1152px, 94vw"
                className={s.cover}
              />
            </div>
          </div>

          <div className={s.mfgGrid}>
            <div>
              <SectionTag num="03" label="Process & Quality" />
              <h2 className={s.h2} data-reveal="up">
                Manufacturing <em>&amp; Quality</em>
              </h2>
            </div>
            <div className={s.mfgCopy} data-reveal="up">
              <p>
                Parinay Oils manufactures Castor Oil through controlled processes designed to support consistent quality
                and supply reliability. Manufacturing and quality controls are applied in alignment with defined internal
                procedures and applicable regulatory expectations.
              </p>
              <Link href="/manufacturing-quality" className={`${s.btn} ${s.btnGold}`}>
                View Manufacturing Process <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <ol className={s.proofs}>
            {proofPoints.map((label, i) => (
              <li key={label} data-reveal="up" style={{ '--d': `${i * 90}ms` } as React.CSSProperties}>
                <span className={s.proofNum} aria-hidden="true">0{i + 1}</span>
                <span className={s.proofLabel}>{label}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 04 LEADERSHIP ────────────────────────────────── */}
      <section className={`${s.section} ${s.light}`}>
        <div className={s.wrap}>
          <SectionTag num="04" label="Leadership" />
          <h2 className={s.h2} data-reveal="up">
            Leadership <em>&amp; Vision</em>
          </h2>

          <div className={s.leaderGrid}>
            <div className={s.frameWrap}>
              <div className={`${s.frame} ${s.portrait}`} data-reveal="clip">
                <Image
                  src="/home/paridhi-portrait.jpg"
                  alt="Paridhi Singh Solanki, Founder and Managing Director of Parinay Oils"
                  fill
                  sizes="(min-width: 1024px) 520px, 92vw"
                  className={s.cover}
                  style={{ objectPosition: '50% 20%' }}
                />
              </div>
            </div>

            <div className={s.leaderText}>
              <div data-reveal="up">
                <p className={s.role}>Founder &amp; Managing Director</p>
                <h3 className={s.leaderName}>Paridhi Singh Solanki</h3>
              </div>

              <div className={s.colleague} data-reveal="up">
                <div className={s.colleaguePhoto}>
                  <Image
                    src="/raw_assets/company/vinay.jpg.jpeg"
                    alt="Vinay Dubey, Director of Parinay Oils"
                    fill
                    sizes="128px"
                    className={s.cover}
                    style={{ objectPosition: '45% 30%' }}
                  />
                </div>
                <div>
                  <p className={s.role}>Director</p>
                  <h3 className={s.colleagueName}>Vinay Dubey</h3>
                </div>
              </div>

              <div data-reveal="up">
                <Link href="/about" className={`${s.btn} ${s.btnDark}`}>
                  Learn About Our Company <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05 INDUSTRIES ────────────────────────────────── */}
      <section className={`${s.section} ${s.sand}`}>
        <div className={s.wrap}>
          <div className={s.splitHead}>
            <div>
              <SectionTag num="05" label="Applications" />
              <h2 className={s.h2} data-reveal="up">Industries We Serve</h2>
            </div>
            <p className={s.headNote} data-reveal="up">
              Products supplied by Parinay Oils are used across multiple industry segments.
            </p>
          </div>

          <ol className={s.industries}>
            {industries.map((item, i) => (
              <li key={item.label} className={s.industry} data-reveal="up" style={{ '--d': `${(i % 4) * 60}ms` } as React.CSSProperties}>
                <span className={s.industryNum} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <span className={s.industryName}>{item.label}</span>
                <item.icon size={22} strokeWidth={1.5} aria-hidden="true" className={s.industryIcon} />
              </li>
            ))}
          </ol>

          <div className={s.centerAction} data-reveal="up">
            <Link href="/applications" className={`${s.btn} ${s.btnDark}`}>
              View Applications <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ──────────────────────────────────── */}
      <section className={`${s.closing} ${s.grain}`} data-cta-end>
        <div className={`${s.wrap} ${s.closingGrid}`}>
          <div>
            <p className={`${s.tag} ${s.tagOnDark}`} data-reveal="up">
              <span className={s.tagRule} aria-hidden="true" />
              <span>Get In Touch</span>
            </p>
            <h2 className={s.closingTitle} data-reveal="up">
              Ready to Discuss Your <em>Requirements?</em>
            </h2>
            <p className={s.closingText} data-reveal="up">
              For product information, sourcing details, or business enquiries, contact Parinay Oils through our official
              inquiry channel.
            </p>
            <p className={s.closingNote} data-reveal="up">Quality and compliance details can be shared upon inquiry.</p>
            <div data-reveal="up">
              <Link href="/contact" className={`${s.btn} ${s.btnGold} ${s.btnLarge}`}>
                Contact Us <ArrowRight size={20} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className={s.direct} data-reveal="up">
            <a href="tel:+918866099050" className={s.directItem}>
              <Phone size={18} aria-hidden="true" />
              <span>
                <span className={s.directLabel}>Phone</span>
                <span className={s.directValue}>+91 88660 99050</span>
              </span>
            </a>
            <a href="mailto:parinaytrade@gmail.com" className={s.directItem}>
              <Mail size={18} aria-hidden="true" />
              <span>
                <span className={s.directLabel}>Email</span>
                <span className={s.directValue}>parinaytrade@gmail.com</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <Link href="/contact" className={s.stickyCta} data-sticky-cta data-visible="false">
        Request a Quote <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </div>
  )
}
