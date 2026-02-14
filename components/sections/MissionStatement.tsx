'use client';

import ScrollReveal from '@/components/ui/ScrollReveal';

export default function MissionStatement() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Decorative quote panel */}
          <ScrollReveal direction="left">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="aspect-[4/5] bg-gradient-to-b from-forest via-forest-light to-meadow relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-oak-dark/30 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <span className="text-gold text-4xl mb-6">&#10013;</span>
                  <p className="font-accent text-2xl text-cream italic leading-relaxed mb-4">
                    &ldquo;Britain is not simply an economic zone. It is not just a collection of institutions. It is a nation. A people. A home. Our home.&rdquo;
                  </p>
                  <div className="heritage-line w-16 my-4" />
                  <p className="text-cream/60 font-body text-sm tracking-wide">
                    Rupert Lowe, <em>Launch Speech</em>
                  </p>
                </div>
              </div>
              <div className="absolute -inset-3 border border-gold/20 pointer-events-none" />
              <div className="absolute -inset-1 border border-gold/10 pointer-events-none" />
            </div>
          </ScrollReveal>

          {/* Right: Content from Rupert Lowe's speech */}
          <ScrollReveal direction="right">
            <div>
              <span className="text-gold font-accent text-lg italic">An Announcement from Rupert Lowe</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold italic text-forest-dark mt-2 mb-6">
                Why Restore Britain
              </h2>
              <div className="heritage-line w-16 mb-8" />

              <div className="space-y-5 font-body text-charcoal leading-relaxed">
                <p className="drop-cap">
                  I reached a point &mdash; sitting through evidence, listening to survivors, reading documents that should make every public servant hang their head in shame &mdash; and it became impossible to ignore the bigger truth. The problem is not confined to one department. It is not confined to one policy area. It is not confined to one political party.
                </p>
                <p>
                  I have tried to work within the system, and I will continue to fight inside Parliament. But I can no longer pretend that the existing political structures are capable of delivering the scale of change this country now needs, at the pace that is now required.
                </p>
                <p>
                  That is why I am today launching Restore Britain as a national political party. At the next General Election, we will put forward hundreds of qualified candidates from outside the existing political establishment.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-wheat">
                <p className="font-heading text-lg font-bold italic text-forest-dark">
                  Rupert Lowe
                </p>
                <p className="text-oak-light font-body text-sm">Member of Parliament for Great Yarmouth</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
