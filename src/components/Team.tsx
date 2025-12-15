const team = [
  {
    name: "Priya Sharma",
    role: "Founder & Creative Director",
    bio: "With over a decade in luxury hospitality and event design, Priya brings an unwavering commitment to crafting celebrations that honor tradition while embracing contemporary elegance.",
    initial: "P",
  },
  {
    name: "Arjun Menon",
    role: "Head of Production",
    bio: "A perfectionist by nature, Arjun ensures every logistical detail flows seamlessly, creating space for couples to be fully present in their most precious moments.",
    initial: "A",
  },
  {
    name: "Maya Krishnan",
    role: "Lead Designer",
    bio: "Maya's design philosophy centers on emotional storytelling through space. Her work transforms venues into immersive experiences that speak to the heart.",
    initial: "M",
  },
];

const Team = () => {
  return (
    <section id="team" className="section-padding bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-primary font-body text-sm tracking-luxury uppercase mb-4">
            The Artisans
          </p>
          <h2 className="section-title">The Minds Behind Timeless Bond</h2>
          <div className="luxury-divider" />
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              {/* Avatar placeholder with initial */}
              <div className="relative w-40 h-40 mx-auto mb-8">
                <div className="w-full h-full rounded-full bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-500">
                  <span className="font-serif text-5xl text-primary/60 group-hover:text-primary transition-colors duration-500">
                    {member.initial}
                  </span>
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border border-primary/20 group-hover:border-primary/40 transition-colors duration-500 scale-110" />
              </div>

              {/* Info */}
              <h3 className="font-serif text-2xl text-foreground mb-2">
                {member.name}
              </h3>
              <p className="font-body text-sm tracking-luxury uppercase text-primary mb-6">
                {member.role}
              </p>
              <p className="font-body text-base text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
