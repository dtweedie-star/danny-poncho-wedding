"use client";

import { useEffect, useMemo, useState } from "react";

const WEDDING_DATE = new Date("2028-05-20T18:00:00+02:00");

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getCountdown(): Countdown {
  const diff = Math.max(0, WEDDING_DATE.getTime() - Date.now());

  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  };
}

function CountdownBlock() {
  const [countdown, setCountdown] = useState<Countdown | null>(null);

  useEffect(() => {
    const update = () => setCountdown(getCountdown());
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const units = useMemo(
    () => [
      ["days", countdown?.days ?? "—"],
      ["hours", countdown ? String(countdown.hours).padStart(2, "0") : "—"],
      ["minutes", countdown ? String(countdown.minutes).padStart(2, "0") : "—"],
      ["seconds", countdown ? String(countdown.seconds).padStart(2, "0") : "—"],
    ],
    [countdown]
  );

  return (
    <div className="countdown-grid" aria-label="Countdown to the wedding">
      {units.map(([label, value]) => (
        <div className="countdown-unit" key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero section">
        <div className="topbar">
          <span className="monogram">D · P</span>
          <span>Malta · 20.05.28</span>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Save the date</p>
          <h1>
            Danny
            <span>&amp;</span>
            Poncho
          </h1>
          <p className="hero-date">Saturday · 20 May 2028 · Malta</p>
        </div>

        <p className="scroll-note">Scroll ↓</p>
      </section>

      <section className="countdown section">
        <p className="eyebrow">Until we get married</p>
        <CountdownBlock />
      </section>

      <section className="editorial section">
        <div className="editorial-copy">
          <p className="eyebrow">Puerto Escondido · 09.09.26</p>
          <h2>A very good sunset. An even better question.</h2>
        </div>
        <div className="photo photo-wide">
          <span>engagement-01.jpg</span>
        </div>
        <div className="photo-pair">
          <div className="photo photo-portrait">
            <span>engagement-02.jpg</span>
          </div>
          <div className="photo photo-portrait offset">
            <span>engagement-03.jpg</span>
          </div>
        </div>
      </section>

      <section className="identity section">
        <div className="logo-placeholder" aria-label="Thistle and agave logo placeholder">
          <span>THISTLE</span>
          <b>×</b>
          <span>AGAVE</span>
        </div>
        <div className="identity-type">
          <span>Scotland</span>
          <small>meets</small>
          <span>Mexico</span>
          <small>in</small>
          <span>Malta</span>
        </div>
      </section>

      <section className="venue section">
        <div className="venue-image photo">
          <span>villa-bighi.jpg</span>
        </div>
        <div className="venue-copy">
          <p className="eyebrow">The place</p>
          <h2>Villa<br />Bighi</h2>
          <p>Kalkara · Malta</p>
          <p>Saturday · 20.05.28</p>
        </div>
      </section>

      <section className="closing section">
        <p className="eyebrow">For now</p>
        <h2>Save<br />the<br />date.</h2>
        <p className="closing-copy">
          Flights, stays, Malta recommendations and all the important stuff will appear here as we get closer.
        </p>
        <p className="footer-mark">Danny &amp; Poncho · Malta · 2028</p>
      </section>
    </main>
  );
}
