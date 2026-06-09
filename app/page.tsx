"use client";


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


export default function Home() {
  const tickerLine = TICKER_IDEAS.map((i) => (
    <span key={i}>{i}</span>
  ));

  return (
    <>
      {/* HERO */}
      <header className="hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/coconut.png" alt="" className="coconut" />
        <div className="wordmark">
          VIBE<span className="green">KODE</span>
        </div>
        <p className="wordmark-sub">Kozhikode, 2026</p>
        <p className="tagline">// kerala&apos;s vibe coding contest · 2026</p>

        <div className="wrap">
          <div className="cta-row">
            <a className="btn btn-primary" href="#register">
              REGISTER FREE →
            </a>
            <a className="btn btn-ghost" href="#prizes">
              SEE THE PRIZES
            </a>
          </div>


        </div>
      </header>

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
