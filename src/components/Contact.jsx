import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { Mail, ArrowUpRight } from "lucide-react";
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from "./BrandIcons";

const platforms = [
  {
    icon: InstagramIcon,
    color: "bg-pink-500",
    label: "INSTAGRAM",
    value: "@hmpsinformatika",
    href: "https://www.instagram.com/hmpsinf/?hl=id",
  },
  {
    icon: LinkedinIcon,
    color: "bg-blue-600",
    label: "LINKEDIN",
    value: "Himpunan Mahasiswa Informatika UINSMH",
    href: "https://www.linkedin.com/company/himpunan-mahasiswa-informatika-UINSMH/",
  },
  {
    icon: YoutubeIcon,
    color: "bg-red-500",
    label: "YOUTUBE",
    value: "@hmpsinformatika",
    href: "https://www.youtube.com/@hmpsinformatika",
  },
  {
    icon: Mail,
    color: "bg-emerald-500",
    label: "EMAIL",
    value: "lazarus@uin.ac.id",
    href: "mailto:lazarus@uin.ac.id",
  },
];

export default function Contact() {
  return (
    <section id="kontak" className="container-hmps py-24 md:py-28">
      <div className="grid md:grid-cols-2 gap-14 items-start">
        <Reveal>
          <Eyebrow>KONTAK KAMI</Eyebrow>
          <h2 className="font-display font-extrabold text-5xl md:text-6xl mt-5 mb-6 leading-[1.05] text-slate-900">
            Ayo,{" "}
            <span className="text-blue-600 block">Terhubung</span>
            dengan Kami.
          </h2>
          <p className="text-slate-600 max-w-md mb-8">
            Terbuka untuk kolaborasi, pertanyaan, dan masukan. Temukan kami di
            berbagai platform berikut.
          </p>
          <div className="flex items-center gap-2 text-slate-400 text-xs">
            <span className="w-6 h-px bg-slate-300" /> 4 PLATFORM TERSEDIA
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {platforms.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.1}>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="group block bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div className="flex items-start justify-between mb-8">
                  <span className={`w-11 h-11 rounded-xl ${p.color} text-white grid place-items-center`}>
                    <p.icon size={19} />
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
                <p className="text-[11px] font-semibold tracking-wider text-slate-400 mb-1">
                  {p.label}
                </p>
                <p className="text-sm font-medium text-slate-900">{p.value}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
