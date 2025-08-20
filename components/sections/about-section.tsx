import HeadingBadge from "@/components/heading-badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { User } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full pt-10 flex flex-col items-start justify-start gap-y-8"
    >
      <div className="flex flex-col items-start justify-start gap-5">
        <HeadingBadge title="About Me" icon={<User size={14} />} />
        <div className="space-y-2">
          <h3 className="text-3xl font-semibold">
            Discover My{" "}
            <span className="text-[#08090a] dark:text-emerald-500">Journey</span>
          </h3>
          <p className="text-[#737373] dark:text-[#A1A1AA] text-sm">
            A glimpse into who I am, my vision, and what drives me as a
            developer.
          </p>
        </div>
      </div>

      <SpotlightCard
        gradientColor="rgba(34, 197, 94, 0.1)"
        lightGradientColor="rgba(8, 9, 10, 0.1)"
        spotlightSize={400}
        disableScale={true}
        className="p-6 rounded-sm border border-gray-200/80 dark:border-gray-800/50 bg-white dark:bg-[#0a0a0a] hover:border-gray-900/30 dark:hover:border-emerald-500/30 transition-all duration-300 w-full"
      >
        <div className="space-y-6">
          {/* Who I Am */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gray-900 dark:bg-emerald-500"></span>
              Who I Am
            </h4>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              I am a full-stack developer currently learning new tools, also mastering
              <span className="font-semibold"> GenAI </span> and
              <span className="font-semibold"> DevOps</span>. Final year BCA student from
              Nagpur, Maharashtra.
              I actively participate in tech events and hackathons to sharpen my skills
              and collaborate with like-minded developers.
            </p>
          </div>

          {/* My Journey */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gray-900 dark:bg-emerald-500"></span>
              My Journey
            </h4>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              I started my web development journey in <span className="font-medium">high school</span>
              with a passion for becoming a <span className="font-medium">software engineer</span>.
              Since then, I have built strong skills in <span className="font-medium">full-stack development </span>
              and worked as a <span className="font-medium">Project Maintainer & Contributor</span> at
              <span className="font-medium"> GirlScript Summer of Code</span>. Currently, I am
              expanding my expertise in <span className="font-medium">React</span> and modern web frameworks
              while seeking <span className="font-medium">internship opportunities</span> to gain
              real-world experience and grow as a developer.
            </p>
          </div>


          {/* Beyond Coding */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-[#08090a] dark:text-white flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gray-900 dark:bg-emerald-500"></span>
              Beyond Coding
            </h4>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              Outside of coding, I enjoy <span className="font-medium">watching movies, following tech trends, and reading</span>.
              These activities help me relax while also keeping me inspired with fresh ideas.
            </p>
            <p className="text-sm text-[#737373] dark:text-[#A1A1AA] leading-relaxed">
              I believe in continuous learning, community, and collaboration — values that keep me motivated to grow every day.
            </p>

          </div>
        </div>
      </SpotlightCard>
    </section>
  );
}
