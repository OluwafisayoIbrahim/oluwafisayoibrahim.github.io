import { ProjectTools } from "@/components/projects/project-tools";
import { cautionTools } from "@/content/project-tools";
import type { Metadata } from "next";
import Link from "next/link";
import { CCautionPreview } from "@/components/home/c-caution-preview";
export const metadata: Metadata = {
  openGraph: {"title": "C-Caution Safety Sign", "description": "A team-built undergraduate LED safety sign at Olabisi Onabanjo University, using an Arduino Uno, NE555 timer and CD4017 counter.", "url": "/projects/c-caution/", "type": "website"},
  alternates: { canonical: "/projects/c-caution/" },
  keywords: ["C-Caution", "Arduino Uno", "ATmega328P", "NE555", "CD4017", "Embedded systems"],
  title: "C-Caution Safety Sign",
  description:
    "A team-built undergraduate LED safety sign at Olabisi Onabanjo University, using an Arduino Uno, NE555 timer and CD4017 counter.",
};
export default function CCautionPage() {
  return (
    <div className="page-container caution-project-page">
      <Link className="editorial-link" href="/#education">
        ← Back to Education
      </Link>
      <header>
        <p className="editorial-label home-kicker">
          Educational project / Embedded systems
        </p>
        <h1 className="editorial-heading home-section-title">
          C-Caution Safety Sign
        </h1>
        <p className="home-section-intro">
          An undergraduate team project at Olabisi Onabanjo University (OOU),
          carried out in 2021. I led the team’s design and fabrication of a
          triangular LED safety sign with about 50 red perimeter LEDs and
          12 green LEDs forming a central “C”, using an Arduino Uno,
          an NE555 timer and a CD4017 counter. The project brought together
          physical construction, circuit design and programming to create
          a repeating visual warning sequence.
        </p>
      </header>
      <ProjectTools tools={cautionTools} />
      <CCautionPreview />
      <div className="caution-project-narrative">
        <section aria-labelledby="caution-controller-title">
          <h2 id="caution-controller-title" className="editorial-heading">How the hardware works together</h2>
          <p>The Arduino Uno’s ATmega328P microcontroller coordinates the display. It enables the NE555 timer, controls the CD4017 counter’s reset and switches the red LED supply between stages. The twelve green LEDs are driven individually from the Arduino’s output pins.</p>
          <p>The NE555 operates as an astable clock. Its pulses advance the CD4017 through ten outputs, each connected to a transistor driver for a group of five red LEDs. The groups are interleaved around the triangle: neighbouring LEDs belong to different outputs, producing a moving, repeating pattern rather than lighting the entire border at once. Each LED has its own current-limiting resistor.</p>
          <p>The documented circuit uses a regulated 5 V supply. A high-side switch removes power from the red LEDs during the pauses and green stage, so a counter output remaining high does not leave a red group illuminated.</p>
        </section>
        <section aria-labelledby="caution-sequence-title">
          <h2 id="caution-sequence-title" className="editorial-heading">The light sequence</h2>
          <p>The red perimeter runs through three laps of the ten groups, followed by a 300 ms pause. The green “C” then lights one LED at a time from top to bottom, at 250 ms per LED. After a further 500 ms pause, the sequence repeats. The firmware keeps the red and green stages separate.</p>
          <p>The timer values in the design notes—4.7 kΩ, 10 kΩ and 10 µF—give a calculated clock frequency of about 5.84 Hz. The interactive reconstruction uses the repository’s rounded timing values: 102 ms high, 69 ms low and a longer first pulse of 161 ms. These are calculated timings; the physical circuit’s timing depends on component tolerances.</p>
        </section>
        <section aria-labelledby="caution-project-files-title">
          <h2 id="caution-project-files-title" className="editorial-heading">Project files and checks</h2>
          <p>The repository documents the prototype photograph, Arduino firmware, wiring list, bill of materials, circuit design notes and instructions for recreating the circuit in Proteus. Host-side tests check the sequence and clock behaviour, while wiring checks verify the documented connections and Arduino pin assignments.</p>
          <p>The controller also includes a missing-clock fault state: if the timer stops producing the expected transitions, the LEDs switch off and the controller waits before retrying. This behaviour is recorded in the firmware and its tests.</p>
        </section>
      </div>
      <a
        className="editorial-link"
        href="https://github.com/OluwafisayoIbrahim/C-Caution-Project"
      >
        View project documentation <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
