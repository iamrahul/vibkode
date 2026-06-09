"use client";

import { useEffect, useState } from "react";

const TICKER_IDEAS = [
  "malayalam spelling game for class 4",
  "attendance tracker for a 30-kid tuition centre",
  "plus-two physics doubt bot",
  "fee reminder for parents on whatsapp",
  "handwriting practice for LKG",
  "past-paper quiz for SSLC",
  "timetable maker for a small school",
  "reading tracker for libraries",
  "voice notes to malayalam notes",
  "scholarship deadline finder",
];

const EVENT_DATE = new Date("2026-08-15T09:00:00+05:30");

function useCountdown(target: Date) {
  const [diff, setDiff] = useState(0);
  useEffect(() => {
    const tick = () => setDiff(Math.max(0, target.getTime() - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

export default function Home() {
  const tickerLine = TICKER_IDEAS.map((i) => (
    <span key={i}>{i}</span>
  ));

  return (
    <>
      {/* NAV */}
      <nav>
        <div className="wrap">
          <div className="brand">
            VIBE<b>KODE</b>
            <span className="dot"> · KZK</span>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#how">How it works</a>
            <a href="#prizes">Prizes</a>
            <a href="#rules">Rules</a>
            <a href="#faq">FAQ</a>
          </div>
          <a className="nav-cta" href="#register">
            REGISTER FREE →
          </a>
        </div>
      </nav>

      {/* ABOUT */}
      <section id="about">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="eyebrow">What is Vibekode</span>
              <h2>
                Build something <span className="g">real</span> for Kerala&apos;s
                classrooms.
              </h2>
              <div className="note">
                A solo sprint where you pick one real problem in Kerala&apos;s
                schools and build the most interesting web app you can to solve
                it — with AI as your co-pilot.
              </div>
            </div>
            <div>
              <p className="lead">
                Vibekode is a <b>one-day, solo</b> hackathon for builders in
                Kerala. No teams. No frameworks you don&apos;t know. Just you, an
                AI coding tool, and a real classroom problem.
              </p>
              <p className="lead">
                The contest is deliberately <b>open-ended</b>: you decide what
                to build. A tuition tracker, a doubt bot, a reading game — anything
                that touches a real kid in a real school in Kerala.
              </p>
              <p className="lead">
                Winners get <b>₹50,000 cash</b> and a stage at the Kozhikode
                event to demo their app live.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO BUILD */}
      <section id="build">
        <div className="wrap">
          <span className="eyebrow">What to build</span>
          <h2>
            Something a <span className="g">teacher or student</span> would
            actually use.
          </h2>
          <div className="cards">
            <div className="card">
              <div className="tag">classroom tools</div>
              <p>
                Attendance, timetable, marks tracker, fee reminder — small admin
                tasks that eat a teacher&apos;s day.
              </p>
            </div>
            <div className="card">
              <div className="tag">learning apps</div>
              <p>
                Quiz games, doubt bots, past-paper practice, reading trackers —
                anything that helps a student learn better.
              </p>
            </div>
            <div className="card">
              <div className="tag">language & culture</div>
              <p>
                Malayalam spelling games, voice-to-notes, translation helpers —
                tools that meet Kerala&apos;s students where they are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how">
        <div className="wrap">
          <span className="eyebrow">How it works</span>
          <h2>
            Four steps from <span className="g">idea to stage</span>.
          </h2>
          <div className="steps">
            <div className="step">
              <div className="num">01</div>
              <div>
                <h3>Register free</h3>
                <p>
                  Sign up before the deadline. Solo only — no team registration.
                  Anyone in Kerala can enter.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="num">02</div>
              <div>
                <h3>Pick your problem</h3>
                <p>
                  Choose one real classroom problem in Kerala. It can be tiny — a
                  30-student tuition centre counts.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="num">03</div>
              <div>
                <h3>Vibe code for 8 hours</h3>
                <p>
                  Build your app on event day using any AI coding tool you like.
                  Submit a working link by 6 PM.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="num">04</div>
              <div>
                <h3>Demo in Kozhikode</h3>
                <p>
                  Shortlisted builders present live at the evening showcase.
                  Winners are announced on stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIZES */}
      <section id="prizes">
        <div className="wrap">
          <span className="eyebrow">Prizes</span>
          <h2>
            ₹80,000+ in <span className="g">cash & perks</span>.
          </h2>
          <div className="prizes">
            <div className="prize">
              <div className="tier">Runner Up</div>
              <div className="amt">₹20K</div>
              <div className="desc">
                Cash prize + runner-up certificate + merch pack
              </div>
            </div>
            <div className="prize win">
              <div className="tier">🏆 Grand Prize</div>
              <div className="amt">₹50K</div>
              <div className="desc">
                Cash prize + Kozhikode stage demo + feature on vibekode.in
              </div>
            </div>
            <div className="prize">
              <div className="tier">Third Place</div>
              <div className="amt">₹10K</div>
              <div className="desc">
                Cash prize + third-place certificate + merch pack
              </div>
            </div>
          </div>
          <p className="prize-extra">
            Every builder who submits gets a{" "}
            <b>verified Vibekode 2026 certificate</b>.
          </p>
          <div className="perks">
            <div className="perk">
              <b>Free</b> lunch on event day
            </div>
            <div className="perk">
              <b>Live</b> mentoring
            </div>
            <div className="perk">
              <b>Network</b> with Kerala&apos;s builders
            </div>
            <div className="perk">
              <b>Certificate</b> for all finishers
            </div>
          </div>
        </div>
      </section>

      {/* RULES */}
      <section id="rules">
        <div className="wrap">
          <span className="eyebrow">Rules</span>
          <h2>
            Keep it <span className="g">simple</span>. Keep it real.
          </h2>
          <div className="rules">
            <div className="rule req">
              <div className="rk">REQ</div>
              <span>
                <b>Solo only.</b> No teams. One registration per person.
              </span>
            </div>
            <div className="rule req">
              <div className="rk">REQ</div>
              <span>
                <b>Kerala classroom focus.</b> Your app must solve a real problem
                in a Kerala school or tuition centre.
              </span>
            </div>
            <div className="rule req">
              <div className="rk">REQ</div>
              <span>
                <b>Built on the day.</b> All code must be written on event day.
                Design and planning beforehand is fine.
              </span>
            </div>
            <div className="rule">
              <div className="rk">OK</div>
              <span>
                Use <b>any AI coding tool</b> — Claude, Cursor, Copilot, v0,
                whatever you like.
              </span>
            </div>
            <div className="rule">
              <div className="rk">OK</div>
              <span>
                Use <b>any framework</b> or stack. It just needs a working web URL
                at submission.
              </span>
            </div>
            <div className="rule">
              <div className="rk">OK</div>
              <span>
                Use existing <b>open-source libraries</b> and starter kits.
              </span>
            </div>
            <div className="rule">
              <div className="rk">NO</div>
              <span>
                No pre-built apps. No submitting work you built before the contest.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section id="sponsors">
        <div className="wrap">
          <span className="eyebrow">Sponsors</span>
          <h2>
            Back the <span className="g">next generation</span> of Kerala
            builders.
          </h2>
          <div className="sponsor-box">
            <p className="desc">
              Vibekode 2026 is open for sponsorship. Reach Kerala&apos;s most
              ambitious builders and educators.
            </p>
            <div className="slots">
              <div className="slot">YOUR LOGO</div>
              <div className="slot">YOUR LOGO</div>
              <div className="slot">YOUR LOGO</div>
              <div className="slot">YOUR LOGO</div>
            </div>
            <a className="sp-link" href="mailto:hello@vibekode.in">
              BECOME A SPONSOR →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="wrap">
          <span className="eyebrow">FAQ</span>
          <h2>
            Got <span className="g">questions</span>?
          </h2>
          <div className="faq">
            <details>
              <summary>Who can participate?</summary>
              <p>
                Anyone based in Kerala — students, working professionals,
                freelancers, teachers. If you can build a web app, you can enter.
                No age limit.
              </p>
            </details>
            <details>
              <summary>Do I need to be in Kozhikode?</summary>
              <p>
                The build sprint is remote — you can build from anywhere. But to
                be eligible for prizes, shortlisted builders must demo in person
                at the Kozhikode venue on event day.
              </p>
            </details>
            <details>
              <summary>Can I use AI tools to build my app?</summary>
              <p>
                Yes — that&apos;s the whole point. Vibekode is explicitly a vibe
                coding contest. Use Claude, Cursor, v0, Copilot, or any AI coding
                tool you like. What matters is the app you ship, not how you built
                it.
              </p>
            </details>
            <details>
              <summary>What counts as a &quot;Kerala classroom&quot;?</summary>
              <p>
                Schools, colleges, tuition centres, coaching institutes — anything
                where a student learns. If a real teacher or student in Kerala
                would use it, it qualifies.
              </p>
            </details>
            <details>
              <summary>How is judging done?</summary>
              <p>
                A panel of Kerala educators and builders will judge on three
                criteria: <b>usefulness</b> (does it solve a real problem?),{" "}
                <b>execution</b> (does it work?), and <b>originality</b> (is it
                interesting?).
              </p>
            </details>
            <details>
              <summary>Is registration really free?</summary>
              <p>
                Yes. Free to register, free to attend, free lunch on the day.
                The only cost is your time.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="register" className="final">
        <div className="wrap">
          <span className="eyebrow">Register now</span>
          <h2>
            Ship something <span className="g">Kerala needs</span>.<br />
            Win ₹50,000.
          </h2>
          <p className="lead" style={{ margin: "18px auto 0", textAlign: "center" }}>
            Registration closes two weeks before event day. It&apos;s free.
          </p>
          <div className="cta-row" style={{ marginTop: "44px" }}>
            <a className="btn btn-primary" href="mailto:hello@vibekode.in">
              REGISTER FREE →
            </a>
            <a className="btn btn-ghost" href="mailto:hello@vibekode.in">
              SPONSOR / PARTNER
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="foot-row">
            VIBE<b>KODE</b> 2026 · Kozhikode, Kerala
          </div>
          <div className="foot-row">
            Questions? <b>hello@vibekode.in</b>
          </div>
          <div className="foot-mini">
            © 2026 Vibekode · Made with love in Kerala
          </div>
        </div>
      </footer>

      {/* TICKER */}
      <div className="ticker">
        <div className="ticker-row">
          <div className="ticker-tag">BUILDING NOW</div>
          <div className="ticker-track">
            {tickerLine}
            {tickerLine}
          </div>
        </div>
      </div>
    </>
  );
}
