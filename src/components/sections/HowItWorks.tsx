import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { sectionIds, steps, type Step, type StepIcon } from "@/data/content";

export function HowItWorks() {
  return (
    <section
      id={sectionIds.howItWorks}
      aria-labelledby="how-it-works-title"
      className="bg-cream py-[60px] lg:py-[100px]"
    >
      <Container>
        <SectionHeader
          id="how-it-works-title"
          eyebrow="How Luma works"
          title="Less browsing. More learning."
          align="center"
        />

        <div className="relative mt-10 [--gap:2.5rem] md:py-7 lg:mt-20 lg:[--gap:5rem]">
          {/* Horizontal connector running behind the step icons */}
          <span
            aria-hidden="true"
            className="absolute top-[56px] left-[52px] hidden h-px bg-line md:block md:right-[calc((100%-2*var(--gap))/3-13px)]"
          />
          <ol className="relative grid gap-[76px] md:grid-cols-3 md:gap-(--gap)">
            {steps.map((step, index) => (
              <StepItem key={step.number} step={step} isLast={index === steps.length - 1} />
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}

type StepItemProps = { step: Step; isLast: boolean };

function StepItem({ step, isLast }: StepItemProps) {
  return (
    <li className="relative">
      <StepBadge icon={step.icon} />
      <p className="mt-6 text-eyebrow text-body uppercase">Step {step.number}</p>
      <h3 className="mt-2 font-display text-h3-sm font-bold text-ink lg:text-h3">{step.title}</h3>
      <p className="mt-3 text-small text-body lg:text-copy">{step.description}</p>
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute top-[calc(100%+26px)] left-7 h-[50px] w-px bg-line md:hidden"
        />
      )}
    </li>
  );
}

type StepBadgeProps = { icon: StepIcon };

/** Abstract shape compositions from the design, one per step. */
function StepBadge({ icon }: StepBadgeProps) {
  if (icon === "focus") {
    return (
      <div aria-hidden="true" className="relative size-14 rounded-full bg-brand-soft">
        <span className="absolute top-2 left-2 size-6 rounded-md bg-brand" />
      </div>
    );
  }

  if (icon === "experience") {
    return (
      <div aria-hidden="true" className="relative size-14">
        <span className="absolute -top-px left-0 size-14 rotate-12 rounded-lg bg-peach" />
        <span className="absolute top-6 left-6 size-7 rounded-full bg-coral" />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="relative size-14 rounded-xl bg-butter">
      <span className="absolute top-7 left-2 size-5 rounded-full bg-mustard" />
    </div>
  );
}
