'use client';

import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function LoweSpeech() {
  return (
    <section className="py-20 md:py-32 manuscript-bg relative">
      {/* Decorative left border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold/20 to-transparent hidden lg:block" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Rupert's photo */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden mx-auto mb-6 border-2 border-gold/30 shadow-lg shadow-oak/20">
              <Image
                src="/images/hero-2.png"
                alt="Rupert Lowe"
                width={300}
                height={300}
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>
            <p className="section-label mb-4">Launch Address</p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-charcoal mb-3">
              An Important Announcement
            </h2>
            <p className="font-accent text-lg text-oak-light tracking-[0.03em]">from Rupert Lowe, MP for Great Yarmouth</p>
            <div className="heritage-line w-24 mx-auto mt-6" />
          </div>
        </ScrollReveal>

        {/* ─── PART 1: The Decision ─── */}
        <ScrollReveal delay={0.1}>
          <div className="prose-speech font-body text-charcoal/90 text-base md:text-lg">
            <p className="drop-cap">I have thought long and hard on what I am about to say to you.</p>

            <p>And I have come to a stark conclusion. There is simply no other way. This is the only choice.</p>

            <p>I was elected to Parliament in 2024. The good people of Great Yarmouth elected me. Not for one second in Westminster have I forgotten that.</p>

            <p>I was sent there to fight for change. Not to do things how they&rsquo;ve always been done. Not to accept more and more relentless decline.</p>

            <p>I was sent there to try to fix it.</p>

            <p>And I have tried. I have honestly tried. And it almost got me sent to prison.</p>

            <p>I have used every tool available to a backbench Member of Parliament, and more.</p>

            <p>Parliamentary questions. Committees. Motions. Speeches. Petitions. Everything and anything.</p>

            <p>Sometimes we have succeeded. More often, we have not. The system simply will not shift.</p>
          </div>
        </ScrollReveal>

        <hr className="gold-rule" />

        {/* ─── PART 2: The Rape Gangs Inquiry ─── */}
        <ScrollReveal delay={0.05}>
          <div className="prose-speech font-body text-charcoal/90 text-base md:text-lg">
            <p>And nothing &mdash; nothing &mdash; has shaped my thinking more than our crowdfunded, independent inquiry into the Pakistani Muslim rape gangs.</p>

            <p>An inquiry that should never have had to exist. An inquiry that I created only because the political system itself would not act. That inquiry has been the most sobering experience of my public life.</p>

            <p>Not just because of the awful crimes. Not just because of the horrific suffering.</p>

            <p className="speech-emphasis">But because of what it exposed about the way this country is governed.</p>

            <p>Again and again, we heard the same story at our hearings. Warnings raised. Concerns logged. Evidence submitted.</p>

            <p>And then nothing. Nothing happened.</p>

            <p>Not because people did not know. But because acting would have been difficult. Because acting would have caused controversy. It would have inflamed racial tensions, it came with personal risk, professional risk. It would have meant being labelled an Islamophobe or a racist. So people did nothing. They let the abuse continue, all over the country.</p>

            <p>We must call it what it is.</p>
          </div>
        </ScrollReveal>

        {/* Pull quote */}
        <ScrollReveal delay={0.05}>
          <p className="pull-quote">
            It was, and still is to this day, the rape of Britain.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="prose-speech font-body text-charcoal/90 text-base md:text-lg">
            <p>They can call me islamophobic, racist or whatever else.</p>

            <p>Let me be abundantly clear with you all tonight.</p>

            <p className="pull-quote !text-[1.8em] !border-0 !py-4 !my-6">I. DO. NOT. CARE.</p>

            <p>I would rather be labelled a racist than enable rape.</p>
          </div>
        </ScrollReveal>

        <hr className="gold-rule" />

        {/* ─── PART 3: The System Is Broken ─── */}
        <ScrollReveal delay={0.05}>
          <div className="prose-speech font-body text-charcoal/90 text-base md:text-lg">
            <p>I reached a point &mdash; sitting through evidence, listening to survivors, reading documents that should make every public servant hang their head in shame &mdash; and it became impossible to ignore the bigger truth.</p>

            <p>The problem is not confined to one department. It is not confined to one policy area. It is not confined to one political party.</p>

            <p className="speech-emphasis">It seeps through the entire governing culture of this country.</p>

            <p>A culture of risk avoidance. A culture of reputational management. A culture of endless consultation and permanent deferral.</p>

            <p>A culture where process matters more than outcome.</p>

            <p>Where responsibility is spread so thin that nobody is ever held accountable.</p>

            <p>That is why I have come to this conclusion.</p>

            <p>Britain does not need tinkering minor reform around the edges.</p>
          </div>
        </ScrollReveal>

        {/* Pull quote */}
        <ScrollReveal delay={0.05}>
          <p className="pull-quote">
            It needs restoration. Full scale restoration.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="prose-speech font-body text-charcoal/90 text-base md:text-lg">
            <p className="speech-emphasis">A restoration of courage.</p>

            <p className="speech-emphasis">A restoration of responsibility.</p>

            <p className="speech-emphasis">A restoration of a political culture that exists to serve the public &mdash; not simply to protect itself.</p>

            <p>I have tried to work within the system, and I will continue to fight inside Parliament.</p>

            <p>But I can no longer pretend that the existing political structures are capable of delivering the scale of change this country now needs, at the pace that is now required.</p>

            <p>The will is simply not there.</p>

            <p className="speech-emphasis">That is why I am today launching Restore Britain as a national political party.</p>

            <p>At the next General Election, we will put forward hundreds of qualified candidates from outside the existing political establishment. They will not be failed ministers. They will not be politicians. They will be men and women who have succeeded in their own fields, and want to deliver a better Britain.</p>
          </div>
        </ScrollReveal>

        <hr className="gold-rule" />

        {/* ─── PART 4: Immigration ─── */}
        <ScrollReveal delay={0.05}>
          <div className="prose-speech font-body text-charcoal/90 text-base md:text-lg">
            <p className="section-label !text-burgundy !text-sm mb-4 !tracking-[0.3em]">Immigration</p>

            <p>Restore Britain will not manage mass immigration. We will not just stop mass immigration.</p>

            <p className="speech-emphasis">We will reverse it.</p>

            <p>Illegal entry will mean detention and removal. Not years later. Not after endless legal paralysis, all funding the parasitic legal profession. Not after being absorbed into a permanent asylum industry.</p>

            <p className="speech-emphasis">If you enter this country illegally, a Restore Britain Government will remove you within 24 hours of arrival.</p>

            <p>If you are living in the country illegally, you will be detained. And you will be deported.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="pull-quote">They all must go.</p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="prose-speech font-body text-charcoal/90 text-base md:text-lg">
            <p>This is absolutely non-negotiable. Restore Britain would abolish the entire asylum system. No more asylum seekers. The scam WILL end.</p>

            <p>We will round up every third world criminal who has broken into our country, and we will remove them. Without compensation, without delay, without apology.</p>

            <p>Do that, and the boats stop overnight.</p>

            <p>Net zero immigration is weak. Weak. Weak. It is insufficient. It is too late.</p>

            <p className="speech-emphasis">The barbarians are already in the gates.</p>

            <p>For the foreseeable future, far more people must leave Britain than arrive.</p>

            <p>If a foreign national is living in Britain and unable to speak English, refuses to work, claims benefits, lives in social housing, hates our way of life, or even wants to do us harm?</p>

            <p className="speech-emphasis">They must leave, or be made to leave.</p>

            <p>I make no apologies for saying this.</p>

            <p className="speech-emphasis">Millions must go.</p>
          </div>
        </ScrollReveal>

        <hr className="gold-rule" />

        {/* ─── PART 5: Welfare ─── */}
        <ScrollReveal delay={0.05}>
          <div className="prose-speech font-body text-charcoal/90 text-base md:text-lg">
            <p className="section-label !text-burgundy !text-sm mb-4 !tracking-[0.3em]">Welfare</p>

            <p>We must always protect British people who genuinely cannot work. That is our moral duty. But the current system has failed.</p>

            <p>It is stagnant. It writes people off. It traps people. It teaches too many citizens that dependency is far safer than ambition.</p>

            <p>Restore Britain will rebuild welfare around participation, rehabilitation and expectation.</p>

            <p>If you can work, you must work. If you can train, you will train. But if you are able and repeatedly refuse to engage, you will lose your benefits.</p>

            <p className="speech-emphasis">Restore Britain would remove access to benefits for every single foreign national living in Britain.</p>
          </div>
        </ScrollReveal>

        <hr className="gold-rule" />

        {/* ─── PART 6: Economy ─── */}
        <ScrollReveal delay={0.05}>
          <div className="prose-speech font-body text-charcoal/90 text-base md:text-lg">
            <p className="section-label !text-burgundy !text-sm mb-4 !tracking-[0.3em]">The Economy</p>

            <p>Because Britain is strangling itself. Suffocating. Dying.</p>

            <p>We punish effort. We punish risk. We punish small business. We punish productivity. We punish success.</p>

            <p className="speech-emphasis">It all must change.</p>

            <p>Restore Britain will slash taxes on work and enterprise. Income, dividend, corporation, VAT, stamp duty &mdash; thresholds must rise, tax must fall.</p>

            <p>We will scrap IR35, we will double the VAT threshold, we will burn down the regulatory frameworks that crush small businesses.</p>

            <p>We will back domestic energy production. We will back the reindustrialisation of Britain. We will back British farming.</p>
          </div>
        </ScrollReveal>

        <hr className="gold-rule" />

        {/* ─── PART 7: Culture & Christianity ─── */}
        <ScrollReveal delay={0.05}>
          <div className="prose-speech font-body text-charcoal/90 text-base md:text-lg">
            <p>This is a national restoration programme.</p>

            <p>Because the deeper problem in Britain is not only financial. It is cultural.</p>

            <p>We have slowly lost confidence in ourselves as a nation. We have become reluctant to defend the things that used to bind our society together.</p>

            <p>Restore Britain will be unapologetic on this.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="pull-quote">
            Britain is not simply an economic zone. It is not just a collection of institutions. It is not just a legal jurisdiction. It is a nation. A people. A home. Our home.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="prose-speech font-body text-charcoal/90 text-base md:text-lg">
            <p>With a shared culture. Shared history. Shared expectations.</p>

            <p>Restore Britain will openly recognise the Christian heritage that shaped this country&rsquo;s moral and civic foundations &mdash; responsibility, duty, restraint, forgiveness and fairness.</p>

            <p>Those values created a high-trust society.</p>

            <p>We will protect family life. We will support British men and women to raise their family in a country they are proud to call home.</p>

            <p className="speech-emphasis">British law must remain supreme.</p>

            <p>Restore Britain will end the creeping Islamification of Britain.</p>

            <p className="speech-emphasis">Britain is a Christian country, and under a Restore Britain Government &mdash; it will remain a Christian country.</p>
          </div>
        </ScrollReveal>

        <hr className="gold-rule" />

        {/* ─── PART 8: Closing ─── */}
        <ScrollReveal delay={0.05}>
          <div className="prose-speech font-body text-charcoal/90 text-base md:text-lg">
            <p>Restore Britain is not offering you a miracle cure. Our programme is serious and honest.</p>

            <p>It will require discipline. It will require courage. It will require patience.</p>

            <p>But let me end where I began.</p>

            <p className="speech-emphasis">I am not pessimistic about Britain.</p>

            <p>I would not be standing here if I were.</p>

            <p>This country still has extraordinary people. The best people on this planet. With incredible skill, decency and intelligence.</p>

            <p>What it lacks is the leadership prepared to act for the long term &mdash; and to tell the brutal truth about what that will require in the coming months and years.</p>

            <p>So today is the beginning of a necessary journey.</p>

            <p className="speech-emphasis">And I ask you to help build it.</p>

            <p>To help restore competence, confidence and national purpose to British politics.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <p className="pull-quote">
            Because Britain is our country, it is our people, it is our home. And it is now our collective responsibility to restore it.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="prose-speech font-body text-charcoal/90 text-base md:text-lg">
            <p>Recent polls have shown us on almost 10% even without a real party.</p>

            <p className="speech-emphasis">We now have one.</p>

            <p>I truly believe that we can win the next election.</p>

            <p>We can do this.</p>

            <p className="mt-6">Thanks for your support as always,</p>
          </div>
        </ScrollReveal>

        {/* Signature */}
        <ScrollReveal delay={0.1}>
          <div className="mt-12 pt-8 border-t border-gold-pale/40">
            <p className="font-heading text-2xl font-semibold text-charcoal">Rupert Lowe</p>
            <p className="text-oak-light font-body text-sm mt-1">Member of Parliament for Great Yarmouth</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
