// app/admissions/schedule/page.tsx
"use client";

import { useState } from "react";


type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  grade: string;
  campus: string;
  address: string;
  additional: string;
};

export default function ScheduleVisitPage() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    grade: "",
    campus: "",
    address: "",
    additional: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const grades = ["Select", "Preschool", "Kindergarten", "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"];
  const campuses = ["Select", "Main Campus", "City Campus"];

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm(prev => ({ ...prev, [key]: value }));
  }

  function validate() {
    if (!form.firstName.trim() || !form.email.trim() || !form.phone.trim()) {
      setError("Please fill first name, email and phone.");
      return false;
    }
    // simple email pattern
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Enter a valid email address.");
      return false;
    }
    if (!/^[\d+\-()\s]{7,}$/.test(form.phone)) {
      setError("Enter a valid phone number.");
      return false;
    }
    setError(null);
    return true;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSuccess(null);
    setError(null);

    try {
      // TODO: replace with your API endpoint
      // Example: await fetch("/api/schedule-visit", { method: "POST", body: JSON.stringify(form) })
      console.log("Submitting schedule visit form:", form);

      // fake network delay
      await new Promise(res => setTimeout(res, 800));

      setSuccess("Your request was submitted. We will contact you shortly to confirm the visit.");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        grade: "",
        campus: "",
        address: "",
        additional: "",
      });
    } catch (err) {
      setError("Failed to submit. Try again later.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      

      {/* Hero */}
      <header className="bg-[#0a1f2c] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold">Schedule a visit</h1>
          <p className="mt-2 opacity-80">Admissions › Schedule a visit</p>
        </div>
      </header>

      <main className="flex-1">
        <section className="max-w-6xl mx-auto px-6 py-10">
          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left column */}
            <div className="space-y-4">
              <label className="block text-sm text-gray-700">
                FIRST NAME*
                <input
                  value={form.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                  className="mt-2 w-full border rounded px-3 py-2"
                  placeholder="First Name*"
                />
              </label>

              <label className="block text-sm text-gray-700">
                EMAIL ID*
                <input
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="mt-2 w-full border rounded px-3 py-2"
                  placeholder="Email ID"
                />
              </label>

              <label className="block text-sm text-gray-700">
                WHICH GRADE ADMISSION ARE YOU LOOKING FOR?*
                <select
                  value={form.grade}
                  onChange={(e) => update("grade", e.target.value)}
                  className="mt-2 w-full border rounded px-3 py-2 bg-white"
                >
                  {grades.map((g) => (
                    <option key={g} value={g === "Select" ? "" : g}>
                      {g}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block text-sm text-gray-700">
                YOUR ADDRESS
                <textarea
                  value={form.address}
                  onChange={(e) => update("address", e.target.value)}
                  className="mt-2 w-full border rounded px-3 py-2 min-h-[110px]"
                  placeholder="Address"
                />
              </label>
            </div>

            {/* Right column */}
            <div className="space-y-4">
              <label className="block text-sm text-gray-700">
                LAST NAME*
                <input
                  value={form.lastName}
                  onChange={(e) => update("lastName", e.target.value)}
                  className="mt-2 w-full border rounded px-3 py-2"
                  placeholder="Last Name"
                />
              </label>

              <label className="block text-sm text-gray-700">
                PHONE NUMBER*
                <input
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="mt-2 w-full border rounded px-3 py-2"
                  placeholder="Phone Number"
                />
              </label>

              <label className="block text-sm text-gray-700">
                WHICH CAMPUS ARE YOU INTERESTED IN?*
                <select
                  value={form.campus}
                  onChange={(e) => update("campus", e.target.value)}
                  className="mt-2 w-full border rounded px-3 py-2 bg-white"
                >
                  {campuses.map((c) => (
                    <option key={c} value={c === "Select" ? "" : c}>
                      {c}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block text-sm text-gray-700">
                ADDITIONAL QUESTIONS?
                <textarea
                  value={form.additional}
                  onChange={(e) => update("additional", e.target.value)}
                  className="mt-2 w-full border rounded px-3 py-2 min-h-[110px]"
                  placeholder="Any additional questions or notes"
                />
              </label>
            </div>

            {/* full width area for messages + submit */}
            <div className="md:col-span-2 mt-2">
              {error && <div className="text-red-600 mb-3">{error}</div>}
              {success && <div className="text-green-600 mb-3">{success}</div>}

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">We are committed to protecting your privacy. We will not collect information about you without your explicit consent.</div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-[#0a1f2c] text-white px-6 py-3 rounded-full disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>

      
    </div>
  );
}
