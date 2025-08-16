import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FESTIVALS } from "../festivals/index.jsx";
import { Canvas } from "./canvas/Canvas.jsx";
import { exportPNG, exportPDF, shareImage } from "./exporter.js";

export function EditorPage() {
  const { festivalId, templateId } = useParams();
  const navigate = useNavigate();
  const fest = FESTIVALS.find((f) => f.id === festivalId);
  const template = fest?.templates.find((t) => t.id === templateId);

  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState(template?.defaultMessage || "");
  const [photo, setPhoto] = React.useState(null);
  const [size, setSize] = React.useState("insta");
  const [font, setFont] = React.useState("Arial");

  const sizes = {
    insta: { label: "Instagram Portrait (1080×1350)", w: 1080, h: 1350 },
    square: { label: "Instagram Post (1080×1080)", w: 1080, h: 1080 },
    story: { label: "Instagram Story (1080×1920)", w: 1080, h: 1920 },
    a4: { label: "A4 (2480×3508)", w: 2480, h: 3508 },
  };

  const canvasRef = React.useRef(null);
  const onPhotoChange = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => setPhoto(r.result);
    r.readAsDataURL(f);
  };

  const { w, h } = sizes[size];

  if (!fest || !template) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-10">
        <h1 className="text-2xl font-bold">Template not found</h1>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Live Preview */}
      <div className="lg:col-span-2 rounded-2xl border bg-white">
        <div className="p-3 border-b flex items-center justify-between">
          <h2 className="font-semibold">Live Preview</h2>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="border rounded-xl px-3 py-2 text-sm"
          >
            {Object.entries(sizes).map(([k, v]) => (
              <option key={k} value={k}>
                {v.label}
              </option>
            ))}
          </select>
        </div>

        <div className="p-4 grid place-items-center overflow-auto">
          <div
            style={{
              width: "250px",
              height: `${(h / w) * 250}px`,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                transform: `scale(${250 / w})`,
                transformOrigin: "top left",
                width: `${w}px`,
                height: `${h}px`,
              }}
            >
              <Canvas
                ref={canvasRef}
                width={w}
                height={h}
                render={template.render}
                data={{ name, message: `"${message}"`, photo, font }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Customize Panel */}
      <aside className="lg:col-span-1">
        <div className="rounded-2xl border bg-white">
          <div className="p-3 border-b">
            <h3 className="font-bold">Customize</h3>
            <p className="text-xs text-slate-500">
              Photo, Name & Message (optional)
            </p>
          </div>
          <div className="p-4 space-y-3">
            <div>
              <label className="text-sm font-medium">Upload Photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={onPhotoChange}
                className="mt-1 block w-full text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Your Name</label>
              <input
                className="w-full border rounded-xl px-3 py-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., From Awadh & Family"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows={3}
                className="w-full border rounded-xl px-3 py-2"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={template.defaultMessage}
              />
              <button
                onClick={() => setMessage(template.defaultMessage)}
                className="mt-1 text-xs text-sky-600"
              >
                Reset to default
              </button>
            </div>
            <div>
              <label className="text-sm font-medium">Font</label>
              <select
                className="w-full border rounded-xl px-3 py-2 text-sm"
                value={font}
                onChange={(e) => setFont(e.target.value)}
              >
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Verdana">Verdana</option>
                <option value="Tahoma">Tahoma</option>
                <option value="Georgia">Georgia</option>
                <option value="Courier New">Courier New</option>
              </select>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-4 rounded-2xl border bg-white p-4 flex flex-wrap gap-2">
          <button
            onClick={() => exportPNG(canvasRef.current, `${template.id}.png`)}
            className="px-4 py-2 rounded-xl bg-black text-white text-sm"
          >
            Download PNG
          </button>
          <button
            onClick={() =>
              exportPDF(canvasRef.current, `${template.id}.pdf`, w, h)
            }
            className="px-4 py-2 rounded-xl border text-sm"
          >
            Download PDF
          </button>
          <button
            onClick={() => shareImage(canvasRef.current, `${template.id}.png`)}
            className="px-4 py-2 rounded-xl border text-sm"
          >
            Share
          </button>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-xl border text-sm"
          >
            Back
          </button>
        </div>
      </aside>
    </section>
  );
}
