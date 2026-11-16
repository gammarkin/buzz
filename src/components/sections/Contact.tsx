import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ChatBubbleIcon, ClockIcon } from "@/components/ui/icons";
import { contact, sectionIds, type ContactChannel } from "@/data/content";

export function Contact() {
  return (
    <section
      id={sectionIds.contact}
      aria-labelledby="contact-title"
      className="bg-white py-[60px] lg:py-[100px]"
    >
      <Container className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col gap-8 lg:max-w-[480px] lg:flex-1 lg:gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>{contact.eyebrow}</Eyebrow>
            <h2 id="contact-title" className="font-display text-h2-sm font-extrabold text-ink lg:text-h2">
              {contact.title}
            </h2>
            <p className="text-small text-body md:text-lead-sm lg:text-lead">{contact.description}</p>
          </div>

          <ul className="flex flex-col gap-4">
            {contact.channels.map((channel) => (
              <li key={channel.title}>
                <ContactChannelCard channel={channel} />
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}

type ContactChannelCardProps = { channel: ContactChannel };

const channelIcons = {
  email: ChatBubbleIcon,
  clock: ClockIcon,
} as const;

function ContactChannelCard({ channel }: ContactChannelCardProps) {
  const Icon = channelIcons[channel.icon];

  return (
    <div className="flex items-center gap-4 rounded-xl bg-cream p-4 lg:p-5">
      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
        <Icon />
      </span>
      <div className="flex flex-col gap-0.5 lg:gap-1">
        <p className="text-small text-ink">{channel.title}</p>
        {channel.href ? (
          <a href={channel.href} className="text-small text-brand underline-offset-4 hover:underline">
            {channel.detail}
          </a>
        ) : (
          <p className="text-small text-muted">{channel.detail}</p>
        )}
      </div>
    </div>
  );
}
