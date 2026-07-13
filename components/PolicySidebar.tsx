"use client";

import { FileText } from "lucide-react";

interface Section {
  id: string;
  title: string;
}

interface Props {
  sections: Section[];
}

export default function PolicySidebar({ sections }: Props) {
  return (
    <div className="rounded bg-white shadow-1 overflow-hidden">
      {/* Header */}
      <div className="border-b border-slate-100 p-5">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded bg-linear-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
            <FileText className="h-5 w-5" />
          </span>

          <div>
            <h3 className="font-semibold text-slate-900">
              Contents
            </h3>
            <p className="text-xs text-slate-500">
              Quick Navigation
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-3">
        <ul className="space-y-1">
          {sections.map((section, index) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="group flex items-center gap-3 rounded px-3 py-3 transition-all hover:bg-blue-50 hover:text-blue-600"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded bg-slate-100 text-xs font-semibold text-slate-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600">
                  {section.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Card */}
      <div className="border-t border-slate-100 bg-slate-50 p-5">
        <div className="rounded bg-linear-to-r from-blue-600 to-cyan-500 p-5 text-white">
          <h4 className="font-semibold">
            Need Help?
          </h4>

          <p className="mt-2 text-sm text-blue-100">
            Have questions about our policies or services?
          </p>

          <a
            href="/contact"
            className="mt-4 inline-flex rounded bg-white px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}