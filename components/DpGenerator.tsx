// ─────────────────────────────────────────────────────────────────────────────
// components/DpGenerator.tsx
// Interactive DevFest Port Harcourt 2026 Display Picture (DP) Generator
// ─────────────────────────────────────────────────────────────────────────────
"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

const ROLES = [
  "ATTENDEE",
  "SPEAKER",
  "ORGANIZER",
  "VOLUNTEER",
  "SPONSOR",
  "AI & ML ENGINEER",
  "CLOUD ARCHITECT",
  "WEB DEVELOPER",
  "MOBILE DEV",
];

const THEME_COLORS = [
  { name: "DevFest Yellow", value: "#F5B82A", text: "#000000" },
  { name: "Google Blue", value: "#4285F4", text: "#FFFFFF" },
  { name: "Google Green", value: "#34A853", text: "#FFFFFF" },
  { name: "Google Red", value: "#EA4335", text: "#FFFFFF" },
  { name: "Dark Charcoal", value: "#18181B", text: "#FFFFFF" },
];

export default function DpGenerator() {
  const [name, setName] = useState("Your Name");
  const [role, setRole] = useState("ATTENDEE");
  const [customRole, setCustomRole] = useState("");
  const [themeColor, setThemeColor] = useState(THEME_COLORS[0]);
  const [badgeText, setBadgeText] = useState("MORE COMMUNITY LESS EGO");
  
  // Image transformation state
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);

  // References
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const loadedImageRef = useRef<HTMLImageElement | null>(null);

  // Handle image upload file selection
  const handleImageUpload = (file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setImageSrc(result);
      // Load HTMLImageElement for canvas drawing
      const img = new window.Image();
      img.crossOrigin = "anonymous";
      img.src = result;
      img.onload = () => {
        loadedImageRef.current = img;
        // Reset transformations for new photo
        setScale(1);
        setPosition({ x: 0, y: 0 });
        setRotation(0);
      };
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  // Main Canvas Draw Function (1080x1080 High Res DP Output)
  const drawCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = 1080;
    canvas.width = size;
    canvas.height = size;

    // 1. Draw Cream Background
    ctx.fillStyle = "#FAF7EE";
    ctx.fillRect(0, 0, size, size);

    // 2. Draw User Image if loaded
    const img = loadedImageRef.current;
    if (img) {
      ctx.save();
      // Center canvas context for transformation
      ctx.translate(size / 2 + position.x * 2, size / 2 + position.y * 2);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.scale(scale, scale);

      // Fit image into 1080x1080 proportional box
      const minDim = Math.min(img.width, img.height);
      const sx = (img.width - minDim) / 2;
      const sy = (img.height - minDim) / 2;

      ctx.drawImage(
        img,
        sx,
        sy,
        minDim,
        minDim,
        -size / 2,
        -size / 2,
        size,
        size
      );
      ctx.restore();
    } else {
      // Draw Placeholder guidance box
      ctx.fillStyle = "#E4DFD0";
      ctx.fillRect(80, 80, size - 160, size - 160);
      ctx.fillStyle = "#666666";
      ctx.font = "bold 36px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Upload your photo to generate DP", size / 2, size / 2);
    }

    // 3. Draw Outer Frame Border & Corner Accents
    ctx.strokeStyle = "#18181B";
    ctx.lineWidth = 24;
    ctx.strokeRect(36, 36, size - 72, size - 72);

    // 4. Header Banner - Top Bar
    ctx.fillStyle = "#18181B";
    ctx.fillRect(36, 36, size - 72, 140);

    // Google 4-Color Dots on Header
    const dotColors = ["#4285F4", "#EA4335", "#F5B82A", "#34A853"];
    dotColors.forEach((color, i) => {
      ctx.beginPath();
      ctx.arc(80 + i * 36, 106, 12, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    });

    // DEVFEST PORT HARCOURT 2026 Header Text
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "900 38px 'Akira', sans-serif, system-ui";
    ctx.textAlign = "right";
    ctx.fillText("DEVFEST PORT HARCOURT 2026", size - 70, 118);

    // 5. Bottom Name & Role Pill Container
    const activeRole = (customRole.trim() || role).toUpperCase();
    const displayName = (name.trim() || "Your Name").toUpperCase();

    // Dark Bottom Card Overlay
    ctx.fillStyle = "#18181B";
    ctx.beginPath();
    ctx.roundRect(60, size - 260, size - 120, 200, 40);
    ctx.fill();
    ctx.strokeStyle = themeColor.value;
    ctx.lineWidth = 8;
    ctx.stroke();

    // User Name Text
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "900 48px 'Akira', sans-serif, system-ui";
    ctx.textAlign = "left";
    ctx.fillText(displayName, 100, size - 170, size - 360);

    // Role Tag Pill
    ctx.fillStyle = themeColor.value;
    ctx.beginPath();
    ctx.roundRect(100, size - 140, Math.min(activeRole.length * 28 + 60, 400), 54, 27);
    ctx.fill();

    ctx.fillStyle = themeColor.text;
    ctx.font = "800 24px 'Akira', sans-serif, system-ui";
    ctx.textAlign = "left";
    ctx.fillText(activeRole, 130, size - 104);

    // 6. Community Sticker Badge (Top Right Corner)
    ctx.save();
    ctx.translate(size - 180, 260);
    ctx.rotate((-12 * Math.PI) / 180);

    // Badge Outer Circle
    ctx.beginPath();
    ctx.arc(0, 0, 100, 0, Math.PI * 2);
    ctx.fillStyle = "#F43F5E"; // Rose Red
    ctx.fill();
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineWidth = 6;
    ctx.stroke();

    // Center Emblem Circle
    ctx.beginPath();
    ctx.arc(0, 0, 64, 0, Math.PI * 2);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();

    // Badge Inner Text
    ctx.fillStyle = "#18181B";
    ctx.font = "900 16px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("GDG PH", 0, -8);
    ctx.fillStyle = "#F5B82A";
    ctx.font = "900 18px 'Akira', sans-serif";
    ctx.fillText("2026", 0, 18);

    // Curved Text Around Badge
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "800 13px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(badgeText, 0, 84);

    ctx.restore();
  }, [name, role, customRole, themeColor, badgeText, scale, position, rotation]);

  // Re-draw canvas on state update
  useEffect(() => {
    drawCanvas();
  }, [drawCanvas]);

  // Handle Download DP
  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `devfest-ph-2026-${name.toLowerCase().replace(/\s+/g, "-")}-dp.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  // Handle Social Share
  const shareText = `I just created my official DevFest Port Harcourt 2026 DP! Join 10,000+ developers on Nov 28th. Get yours now! 🚀`;
  const shareUrl = "https://devfestportharcourt.com/dp-generator";

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      "_blank"
    );
  };

  const shareOnWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
      "_blank"
    );
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* ── Left Column: Preview Canvas & Interactive Controls ────────────────── */}
      <div className="lg:col-span-6 flex flex-col items-center">
        {/* Canvas Preview Container */}
        <div className="relative w-full max-w-[480px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-black bg-white group">
          <canvas ref={canvasRef} className="w-full h-full object-contain" />
          
          {!imageSrc && (
            <div
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              onClick={() => fileInputRef.current?.click()}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center cursor-pointer transition-all hover:bg-black/70"
            >
              <div className="w-16 h-16 rounded-full bg-[#F5B82A] text-black flex items-center justify-center mb-4 shadow-lg border-2 border-black">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="font-akira font-black text-sm uppercase text-white tracking-wider">
                CLICK OR DRAG PHOTO HERE
              </p>
              <p className="text-gray-300 text-xs mt-2 font-medium">
                Supports PNG, JPG, WEBP (Square recommendation)
              </p>
            </div>
          )}
        </div>

        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
              handleImageUpload(e.target.files[0]);
            }
          }}
        />

        {/* Photo Manipulation Sliders (Active when image uploaded) */}
        {imageSrc && (
          <div className="w-full max-w-[480px] bg-white rounded-2xl p-5 border border-black/10 shadow-md mt-6 space-y-4 text-black">
            <div className="flex items-center justify-between">
              <span className="font-akira text-xs font-bold uppercase">ADJUST PHOTO</span>
              <button
                onClick={() => {
                  setScale(1);
                  setPosition({ x: 0, y: 0 });
                  setRotation(0);
                }}
                className="text-xs font-bold text-google-blue hover:underline cursor-pointer"
              >
                RESET PHOTO
              </button>
            </div>

            {/* Zoom Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span>Zoom Scale</span>
                <span>{scale.toFixed(1)}x</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="2.5"
                step="0.05"
                value={scale}
                onChange={(e) => setScale(parseFloat(e.target.value))}
                className="w-full accent-google-blue cursor-pointer"
              />
            </div>

            {/* Horizontal Position */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span>Position X</span>
                <span>{position.x}px</span>
              </div>
              <input
                type="range"
                min="-200"
                max="200"
                step="2"
                value={position.x}
                onChange={(e) => setPosition({ ...position, x: parseInt(e.target.value) })}
                className="w-full accent-google-blue cursor-pointer"
              />
            </div>

            {/* Vertical Position */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-1">
                <span>Position Y</span>
                <span>{position.y}px</span>
              </div>
              <input
                type="range"
                min="-200"
                max="200"
                step="2"
                value={position.y}
                onChange={(e) => setPosition({ ...position, y: parseInt(e.target.value) })}
                className="w-full accent-google-blue cursor-pointer"
              />
            </div>

            {/* Change Photo Button */}
            <div className="pt-2">
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-black font-bold text-xs uppercase tracking-wider border border-black/10 cursor-pointer"
              >
                CHANGE PHOTO 📷
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ── Right Column: Input Fields, Customization & Actions ────────────── */}
      <div className="lg:col-span-6 space-y-6 bg-white p-6 sm:p-8 rounded-3xl border border-black/10 shadow-xl text-black">
        <div>
          <h2 className="font-akira font-black text-2xl sm:text-3xl text-black tracking-tight uppercase">
            CUSTOMIZE YOUR DP
          </h2>
          <p className="text-gray-600 text-sm font-medium mt-1">
            Personalize your badge to share with the GDG Port Harcourt community!
          </p>
        </div>

        {/* 1. Name Input Field */}
        <div className="space-y-2">
          <label className="block text-xs font-akira font-bold uppercase tracking-wider text-gray-800">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Ayaosigodfrey"
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-black/15 text-black font-bold focus:outline-none focus:border-google-blue focus:ring-2 focus:ring-google-blue/20"
            maxLength={26}
          />
        </div>

        {/* 2. Role / Track Selector */}
        <div className="space-y-2">
          <label className="block text-xs font-akira font-bold uppercase tracking-wider text-gray-800">
            Select Role / Track
          </label>
          <div className="flex flex-wrap gap-2">
            {ROLES.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => {
                  setRole(r);
                  setCustomRole("");
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-akira font-bold uppercase tracking-wider transition-all border border-black/10 cursor-pointer ${
                  role === r && !customRole
                    ? "bg-[#18181B] text-white shadow-sm"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
          
          <input
            type="text"
            value={customRole}
            onChange={(e) => setCustomRole(e.target.value)}
            placeholder="Or type custom title (e.g. Flutter Dev)..."
            className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-black/15 text-black font-semibold text-xs mt-2 focus:outline-none focus:border-google-blue"
            maxLength={22}
          />
        </div>

        {/* 3. Badge Theme Color */}
        <div className="space-y-2">
          <label className="block text-xs font-akira font-bold uppercase tracking-wider text-gray-800">
            Tag Theme Color
          </label>
          <div className="flex items-center gap-3">
            {THEME_COLORS.map((color) => (
              <button
                key={color.name}
                type="button"
                onClick={() => setThemeColor(color)}
                style={{ backgroundColor: color.value }}
                className={`w-9 h-9 rounded-full border-2 transition-transform cursor-pointer ${
                  themeColor.value === color.value
                    ? "scale-110 border-black shadow-md"
                    : "border-transparent opacity-80 hover:opacity-100"
                }`}
                title={color.name}
              />
            ))}
          </div>
        </div>

        {/* 4. Action Buttons (Download & Share) */}
        <div className="pt-6 border-t border-black/10 space-y-4">
          <button
            onClick={handleDownload}
            className="w-full py-4 rounded-full bg-[#F5B82A] text-black font-akira font-black text-sm uppercase tracking-wider hover:bg-yellow-400 transition-all hover:scale-[1.02] shadow-lg border-2 border-black flex items-center justify-center gap-2 cursor-pointer"
            id="dp-download-btn"
          >
            <span>DOWNLOAD MY DP 🚀</span>
          </button>

          {/* Social Share Buttons */}
          <div className="pt-2">
            <p className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3 text-center">
              Share Your DP On Social Media:
            </p>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={shareOnTwitter}
                className="py-2.5 px-3 rounded-xl bg-[#18181B] text-white font-akira font-bold text-xs hover:bg-black transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>X / TWITTER</span>
              </button>

              <button
                onClick={shareOnLinkedIn}
                className="py-2.5 px-3 rounded-xl bg-[#0A66C2] text-white font-akira font-bold text-xs hover:bg-blue-700 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>LINKEDIN</span>
              </button>

              <button
                onClick={shareOnWhatsApp}
                className="py-2.5 px-3 rounded-xl bg-[#25D366] text-white font-akira font-bold text-xs hover:bg-green-600 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>WHATSAPP</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
