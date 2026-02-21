"use client";

import { useState } from "react";

export default function Home() {
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    car: "",
    plate: "",
    date: "",
    time: "",
    message: "",
  });

  const [bookingStatus, setBookingStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [contact, setContact] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const [contactStatus, setContactStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function submitBooking(e: React.FormEvent) {
    e.preventDefault();
    setBookingStatus("loading");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(booking),
      });
      if (!res.ok) throw new Error("Booking request failed");
      setBookingStatus("success");
      setBooking({
        name: "",
        phone: "",
        car: "",
        plate: "",
        date: "",
        time: "",
        message: "",
      });
    } catch {
      setBookingStatus("error");
    }
  }

  async function submitContact(e: React.FormEvent) {
    e.preventDefault();
    setContactStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });
      if (!res.ok) throw new Error("Contact request failed");
      setContactStatus("success");
      setContact({ name: "", contact: "", message: "" });
    } catch {
      setContactStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-extrabold tracking-tight text-lg text-white">
            Autoserviss<span className="text-blue-400">Pro</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-200">
            <a href="#services" className="hover:text-blue-300">
              Pakalpojumi
            </a>
            <a href="#booking" className="hover:text-blue-300">
              Pieraksts
            </a>
            <a href="#contact" className="hover:text-blue-300">
              Kontakti
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden sm:inline-flex px-4 py-2 rounded-lg border border-gray-700 font-semibold text-gray-100 hover:bg-gray-900"
            >
              Sazināties
            </a>
            <a
              href="#booking"
              className="inline-flex px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300"
            >
              Pierakstīties
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-gray-950 py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-5xl font-extrabold mb-6 text-white">
            Autoservisa Platforma
          </h1>
          <p className="text-xl mb-8 text-blue-100/90">
            Ātra pierakstīšanās, servisa pārskats un vienkārša komunikācija ar
            klientiem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100"
            >
              Skatīt pakalpojumus
            </a>
            <a
              href="#booking"
              className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300"
            >
              Pierakstīties
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-14 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-white">Pakalpojumi</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Diagnostika
              </h3>
              <p className="text-gray-300">
                Dzinēja, bremžu un elektronikas diagnostika ar skaidru atskaiti.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-white">Apkope</h3>
              <p className="text-gray-300">
                Eļļas, filtru, bremžu un ritošās daļas apkope.
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-white">Remonts</h3>
              <p className="text-gray-300">
                Mehāniski un elektriski remonti ar garantiju.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-14 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-white">Pierakstīšanās</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-gray-200 space-y-3">
              <p>
                Atstāj kontaktus un īsu aprakstu — mēs apstiprināsim laiku un
                sagatavosim izmaksu piedāvājumu.
              </p>
              <ul className="list-disc pl-5 text-gray-300 space-y-1">
                <li>Ātrs pieraksts 1 min</li>
                <li>Atbilde tajā pašā dienā</li>
                <li>Serviss ar garantiju</li>
              </ul>

              <div className="mt-6 rounded-xl border border-gray-800 bg-gray-900 p-4">
                <p className="text-sm text-gray-300">
                  <span className="font-semibold text-white">Padoms:</span>{" "}
                  izvēlies vēlamo datumu/laiku — mēs apstiprināsim pieejamību.
                </p>
              </div>
            </div>

            <form
              onSubmit={submitBooking}
              className="bg-gray-900 text-white rounded-xl p-6 shadow-lg border border-gray-800 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Vārds"
                  value={booking.name}
                  onChange={(e) =>
                    setBooking({ ...booking, name: e.target.value })
                  }
                  required
                />
                <input
                  className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Telefons"
                  value={booking.phone}
                  onChange={(e) =>
                    setBooking({ ...booking, phone: e.target.value })
                  }
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Auto marka/modelis"
                  value={booking.car}
                  onChange={(e) =>
                    setBooking({ ...booking, car: e.target.value })
                  }
                  required
                />
                <input
                  className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Numura zīme (opc.)"
                  value={booking.plate}
                  onChange={(e) =>
                    setBooking({ ...booking, plate: e.target.value })
                  }
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="date"
                  className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={booking.date}
                  onChange={(e) =>
                    setBooking({ ...booking, date: e.target.value })
                  }
                  required
                />
                <input
                  type="time"
                  className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={booking.time}
                  onChange={(e) =>
                    setBooking({ ...booking, time: e.target.value })
                  }
                  required
                />
              </div>

              <textarea
                className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
                placeholder="Kas jādara? (piem. eļļas maiņa, bremzes, diagnostika)"
                value={booking.message}
                onChange={(e) =>
                  setBooking({ ...booking, message: e.target.value })
                }
                required
              />

              <button
                type="submit"
                disabled={bookingStatus === "loading"}
                className="w-full bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {bookingStatus === "loading" ? "Sūta..." : "Nosūtīt pierakstu"}
              </button>

              {bookingStatus === "success" && (
                <p className="text-sm text-green-400 font-semibold">
                  ✅ Nosūtīts! Mēs ar tevi sazināsimies.
                </p>
              )}
              {bookingStatus === "error" && (
                <p className="text-sm text-red-400 font-semibold">
                  ❌ Kļūda. Pamēģini vēlreiz.
                </p>
              )}

              <p className="text-xs text-gray-400">
                Nosūtot, tu piekrīti, ka ar tevi sazināsies par pieraksta
                apstiprinājumu.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-14 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-white">Kontakti</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-gray-200 space-y-2">
              <p>
                <b className="text-white">Tālrunis:</b> +371 XXXXXXXX
              </p>
              <p>
                <b className="text-white">E-pasts:</b> info@autoserviss.lv
              </p>
              <p>
                <b className="text-white">Adrese:</b> Rīga, Latvija
              </p>
              <div className="mt-6 text-sm text-gray-300">
                Darba laiks: P.–Pk. 09:00–18:00
              </div>
            </div>

            <form
              onSubmit={submitContact}
              className="bg-gray-900 text-white rounded-xl p-6 shadow-lg border border-gray-800 space-y-4"
            >
              <input
                className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Vārds"
                value={contact.name}
                onChange={(e) =>
                  setContact({ ...contact, name: e.target.value })
                }
                required
              />
              <input
                className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Telefons vai e-pasts"
                value={contact.contact}
                onChange={(e) =>
                  setContact({ ...contact, contact: e.target.value })
                }
                required
              />
              <textarea
                className="w-full bg-gray-950 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
                placeholder="Ziņa"
                value={contact.message}
                onChange={(e) =>
                  setContact({ ...contact, message: e.target.value })
                }
                required
              />

              <button
                type="submit"
                disabled={contactStatus === "loading"}
                className="w-full bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {contactStatus === "loading" ? "Sūta..." : "Nosūtīt"}
              </button>

              {contactStatus === "success" && (
                <p className="text-sm text-green-400 font-semibold">
                  ✅ Ziņa nosūtīta!
                </p>
              )}
              {contactStatus === "error" && (
                <p className="text-sm text-red-400 font-semibold">
                  ❌ Kļūda. Pamēģini vēlreiz.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
        © {new Date().getFullYear()} Autoservisa Platforma
      </footer>
    </main>
  );
}