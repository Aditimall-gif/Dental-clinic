import { ASSETS } from '../config/assets';

export default function BeforeAfter() {
  return (
    <section className="py-24 md:py-32 bg-lumina-beige">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-lumina-wood uppercase tracking-[0.2em] text-sm font-medium mb-4 block">
              Transformations
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-lumina-dark mb-4">
              Real Results.
            </h2>
            <p className="text-lumina-dark/60 font-light text-lg">
              Witness the art of modern cosmetic dentistry through our recent patient transformations.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Case 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-lumina-ivory">
                <img src={ASSETS.BEFORE_1} alt="Before Treatment" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-lumina-dark">Before</div>
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden bg-lumina-ivory">
                <img src={ASSETS.AFTER_1} alt="After Treatment" className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-lumina-teal/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-white">After</div>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl text-lumina-dark mb-2">Porcelain Veneers & Whitening</h3>
              <p className="text-lumina-dark/60 font-light text-sm">A complete smile redesign focusing on symmetry and natural brightness.</p>
            </div>
          </div>

          {/* Case 2 (Placeholder duplicate for visual balance) */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-lumina-ivory">
                <img src={ASSETS.BEFORE_1} alt="Before Treatment" className="w-full h-full object-cover filter grayscale opacity-80" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-lumina-dark">Before</div>
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden bg-lumina-ivory">
                <img src={ASSETS.AFTER_1} alt="After Treatment" className="w-full h-full object-cover filter contrast-125" />
                <div className="absolute top-4 left-4 bg-lumina-teal/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider text-white">After</div>
              </div>
            </div>
            <div>
              <h3 className="font-serif text-xl text-lumina-dark mb-2">Invisalign & Bonding</h3>
              <p className="text-lumina-dark/60 font-light text-sm">Correction of crowding and minor edge restorations for a seamless finish.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
