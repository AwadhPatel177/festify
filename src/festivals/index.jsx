import React from "react";
const clamp = (min, v, max) => Math.max(min, Math.min(max, v));

function GradientBG({ stops }) {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${stops.join(",")})` }}
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
    </div>
  );
}
function PhotoCircle({ src, size = 0.35 }) {
  if (!src) {
    // photo nahi hai -> sirf nano dot
    return (
      <div className="flex items-center justify-center" style={{ width: `${size * 100}%`, aspectRatio: "1/1" }}>
        <span style={{ fontSize: "6px", color: "gray" }}>●</span>
      </div>
    );
  }

  // photo hai -> circle dikhana hai
  return (
    <div
      className="mx-auto rounded-full overflow-hidden ring-4 ring-white/60 shadow flex items-center justify-center"
      style={{ width: `${size * 100}%`, aspectRatio: "1/1", backgroundColor: "#f8fafc" }}
    >
      <img src={src} alt="user" className="w-full h-full object-cover" />
    </div>
  );
}





/* ---- Independence Day (3) ---- */
const Independence1 = {
  id: "ind_saffron",
  title: "Saffron Wave",
  tags: ["Patriotic", "Bold"],
  defaultMessage: "Saluting the spirit of freedom. Happy Independence Day!",
  preview() {
    return (
      <div className="relative w-[540px] h-[675px] rounded-[32px] overflow-hidden">
        <GradientBG stops={["#fff7ed", "#ffedd5", "#fde68a"]} />
        <div className="absolute inset-0 p-10 text-center">
          <div className="text-6xl">🇮🇳</div>
          <div className="mt-4 text-4xl font-black">Happy Independence Day</div>
        </div>
      </div>
    );
  },
  render({ width, height, data }) {
  return (
    <div className="w-full h-full relative text-center text-slate-900">
      <GradientBG stops={["#fff7ed", "#ffedd5", "#fde68a"]} />

      {/* Flag aur Title upar */}
      <div className="absolute top-[6%] inset-x-0">
        <div style={{ fontSize: clamp(32, width * 0.08, 140) }}>🇮🇳</div>
        <div
          className="font-black"
          style={{ fontSize: clamp(24, width * 0.07, 96) }}
        >
          Happy Independence Day
        </div>
      </div>

      {/* 🟢 Message ko bilkul center me */}
      <div className="absolute inset-0 flex items-center justify-center px-[8%]">
        <div
          className="opacity-70"
          style={{ fontSize: clamp(12, width * 0.028, 28) }}
        >
          {data.message ||
            "Saluting the spirit of freedom. Happy Independence Day!"}
        </div>
      </div>

      {/* Photo aur Name niche */}
      <div className="absolute inset-x-0 bottom-[8%] px-[8%]">
        <PhotoCircle src={data.photo} size={0.34}/>
      </div>
      <div className="absolute bottom-[4%] inset-x-0 px-[6%]">
        <div
          className="font-semibold"
          style={{ fontSize: clamp(14, width * 0.03, 40) }}
        >
          {data.name}
        </div>
      </div>
    </div>
  );
},
};

const Independence2 = {
  id: "ind_tricolor",
  title: "Tricolor Ribbon",
  tags: ["Clean", "Modern"],
  defaultMessage: "Proud to be Indian. Jai Hind!",
  preview() {
    return (
      <div className="relative w-[540px] h-[675px] bg-white rounded-[32px] overflow-hidden">
        <div
          className="absolute top-0 left-0 right-0 h-6"
          style={{
            background: "linear-gradient(90deg,#ff9933,#ffffff,#138808)",
          }}
        />
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center">
            <div className="text-5xl font-black">15 August</div>
            <div className="text-sm text-slate-600">Happy Independence Day</div>
          </div>
        </div>
      </div>
    );
  },
  render({ width, height, data }) {
  return (
    <div className="w-full h-full relative bg-white text-center">
      <div
        className="absolute top-0 left-0 right-0 h-[4%]"
        style={{
          background: "linear-gradient(90deg,#ff9933,#ffffff,#138808)",
        }}
      />

      {/* Title upar */}
      <div className="absolute top-[8%] inset-x-0">
        <div
          className="font-black"
          style={{ fontSize: clamp(24, width * 0.07, 96) }}
        >
          15 August
        </div>
        <div
          className="opacity-70"
          style={{ fontSize: clamp(12, width * 0.03, 32) }}
        >
         Happy Independence Day
        </div>
      </div>

      {/* 🟢 Message bilkul center */}
      <div className="absolute inset-0 flex items-center justify-center px-[8%]">
        <div
          className="opacity-80"
          style={{ fontSize: clamp(12, width * 0.028, 28) }}
        >
          {data.message || "Proud to be Indian. Jai Hind!"}
        </div>
      </div>

      {/* Photo aur Name niche */}
      <div className="absolute inset-x-0 bottom-[8%] px-[8%]">
        <PhotoCircle src={data.photo} size={0.38} />
      </div>
      <div className="absolute inset-x-0 bottom-[4%] px-[8%]">
        <div
          className="mt-2 font-semibold"
          style={{ fontSize: clamp(14, width * 0.03, 40) }}
        >
          {data.name}
        </div>
      </div>
    </div>
  );
},
};
const Independence3 = {
  id: "ind_minimal",
  title: "Minimal Flag",
  tags: ["Minimal", "Elegant"],
  defaultMessage: "Freedom in mind, faith in our hearts.",
  preview() {
    return (
      <div className="relative w-[540px] h-[675px] bg-white rounded-[32px] overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-6xl">🟧⚪🟩</div>
          <div className="mt-2 text-3xl font-bold">Happy Independence Day</div>
        </div>
      </div>
    );
  },
  render({ width, height, data }) {
    return (
      <div className="w-full h-full relative bg-white text-center text-slate-900">
        <div className="absolute top-[10%] inset-x-0">
          <div style={{ fontSize: clamp(36, width * 0.08, 120) }}>🟧⚪🟩</div>
          <div
            className="font-black"
            style={{ fontSize: clamp(22, width * 0.06, 80) }}
          >
            Happy Independence Day
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center px-[8%">
          <PhotoCircle src={data.photo} size={0.34} />
        </div>
        <div className="absolute inset-x-0 bottom-[18%] px-[6%]">
          <div
            className="opacity-80"
            style={{ fontSize: clamp(12, width * 0.028, 28) }}
          >
            {data.message || "Freedom in mind, faith in our hearts."}
          </div>
          <div
            className="mt-2 font-semibold"
            style={{ fontSize: clamp(14, width * 0.03, 40) }}
          >
            {data.name}
          </div>
        </div>
      </div>
    );
  },
};


/* ---- Janmashtami (3) ---- */



const JanmashtamiFlute = {
  id: "janmashtami_flute",
  title: "Flute Festive",
  tags: ["Festive", "Krishna", "Janmashtami"],
  defaultMessage: "May Lord Krishna bless your life with joy, love & harmony.",

  preview() {
    return (
      <div className="relative w-[540px] h-[675px] bg-gradient-to-br from-indigo-200 via-yellow-100 to-pink-100 rounded-[32px] overflow-hidden">
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-6xl">🦚</div>
          <div className="mt-2 text-3xl font-bold text-yellow-700">
            Krishna Janmashtami
          </div>
          <div className="mt-1 text-sm italic text-indigo-700">
            “Flute of love, melody of life”
          </div>
        </div>
      </div>
    );
  },

  render({ width, height, data }) {
    return (
      <div className="w-full h-full relative bg-gradient-to-br from-indigo-200 via-yellow-100 to-pink-100 text-center">
        {/* 🔸 Title Upar */}
        <div className="absolute top-[6%] inset-x-0">
          <div style={{ fontSize: clamp(32, width * 0.08, 120) }}>🦚🎶🪔</div>
          <div
            className="font-black text-yellow-700 drop-shadow"
            style={{ fontSize: clamp(22, width * 0.06, 80) }}
          >
            Krishna Janmashtami
          </div>
        </div>

        {/* 🔸 Photo Center Me */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <PhotoCircle src={data.photo} size={0.32} />
        </div>

        {/* 🔸 Message Below */}
        <div className="absolute top-[72%] inset-x-0 px-[8%]">
          <div
            className="opacity-90 text-indigo-900 italic"
            style={{ fontSize: clamp(12, width * 0.032, 30) }}
          >
            {data.message ||
              "May Lord Krishna bless your life with joy, love & harmony."}
          </div>
        </div>

        {/* 🔸 Name Sabse Niche with Flute */}
        <div className="absolute bottom-[5%] inset-x-0 px-[6%]">
          <div
            className="font-semibold text-yellow-800"
            style={{ fontSize: clamp(14, width * 0.03, 38) }}
          >
            🪈 {data.name} 🪈
          </div>
        </div>
      </div>
    );
  },
};



// 🌸 1. Peacock Style
const Jan01 = {
  id: "jan_peacock",
  title: "Peacock Theme",
  tags: ["Colorful", "Festive"],
  defaultMessage: "May Lord Krishna bless you with love & happiness 💙",
  preview() {
    return (
      <div className="relative w-[540px] h-[675px] bg-gradient-to-b from-blue-100 to-purple-200 rounded-[32px] overflow-hidden flex flex-col items-center justify-center">
        <div className="text-6xl">🦚</div>
        <div className="mt-2 text-3xl font-bold">Happy Janmashtami</div>
      </div>
    );
  },
  render({ width, height, data }) {
    return (
      <div className="w-full h-full relative bg-gradient-to-b from-blue-100 to-purple-200 text-center">
        {/* 🔸 Title */}
        <div className="absolute top-[8%] inset-x-0">
          <div style={{ fontSize: clamp(40, width * 0.08, 110) }}>🦚</div>
          <div
            className="font-black text-purple-900"
            style={{ fontSize: clamp(24, width * 0.06, 80) }}
          >
            Happy Janmashtami
          </div>
        </div>

        {/* 🔸 Photo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <PhotoCircle src={data.photo} size={0.38} />
        </div>

        {/* 🔸 Message */}
        <div className="absolute bottom-[18%] inset-x-0 px-[8%]">
          <div
            className="opacity-80 text-purple-800"
            style={{ fontSize: clamp(14, width * 0.032, 34) }}
          >
            {data.message || "May Lord Krishna bless you with love & happiness 💙"}
          </div>
        </div>

        {/* 🔸 Name */}
        <div className="absolute bottom-[6%] inset-x-0">
          <div
            className="font-semibold text-purple-900"
            style={{ fontSize: clamp(14, width * 0.03, 38) }}
          >
            {data.name}
          </div>
        </div>
      </div>
    );
  },
};


// 🎶 2. Flute Minimal (tumhare wale jaisa)
const Jan02 = {
  id: "jan_flute",
  title: "Flute Minimal",
  tags: ["Minimal", "Calm"],
  defaultMessage: "Wishing you a blessed Janmashtami!",
  preview() {
    return (
      <div className="relative w-[540px] h-[675px] bg-white rounded-[32px] overflow-hidden">
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-6xl">🎶</div>
          <div className="mt-2 text-3xl font-bold">Krishna Janmashtami</div>
        </div>
      </div>
    );
  },
  render({ width, height, data }) {
    return (
      <div className="w-full h-full relative bg-white text-center">
        {/* Title */}
        <div className="absolute top-[6%] inset-x-0">
          <div style={{ fontSize: clamp(36, width * 0.08, 120) }}>🎶</div>
          <div
            className="font-black"
            style={{ fontSize: clamp(22, width * 0.06, 80) }}
          >
            Happy Krishna Janmashtami
          </div>
        </div>

        {/* Message */}
        <div className="absolute inset-0 flex items-center justify-center px-[8%]">
          <div
            className="opacity-80"
            style={{ fontSize: clamp(12, width * 0.028, 28) }}
          >
            {data.message || "Wishing you a blessed Janmashtami!"}
          </div>
        </div>

        {/* Photo */}
        <div className="absolute inset-x-0 bottom-[8%] px-[8%]">
          <PhotoCircle src={data.photo} size={0.36} />
        </div>

        {/* Name */}
        <div className="absolute bottom-[4%] inset-x-0 px-[6%]">
          <div
            className="font-semibold"
            style={{ fontSize: clamp(14, width * 0.03, 40) }}
          >
            {data.name}
          </div>
        </div>
      </div>
    );
  },
};


// 🌼 3. Traditional Mandala
const Jan03 = {
  id: "jan_mandala",
  title: "Mandala Style",
  tags: ["Traditional", "Spiritual"],
  defaultMessage: "Celebrate the birth of Lord Krishna 🙏",
  preview() {
    return (
      <div className="relative w-[540px] h-[675px] bg-yellow-100 rounded-[32px] overflow-hidden grid place-items-center">
        <div className="text-6xl">🌼</div>
        <div className="mt-2 text-3xl font-bold">Janmashtami Special</div>
      </div>
    );
  },
  render({ width, height, data }) {
    return (
      <div className="w-full h-full relative bg-yellow-100 text-center">
        {/* Title */}
        <div className="absolute top-[6%] inset-x-0">
          <div style={{ fontSize: clamp(36, width * 0.08, 110) }}>🌼</div>
          <div
            className="font-black text-yellow-900"
            style={{ fontSize: clamp(22, width * 0.06, 80) }}
          >
            Krishna Janmashtami
          </div>
        </div>

        {/* Photo */}
        <div className="absolute top-[28%] inset-x-0">
          <PhotoCircle src={data.photo} size={0.34} />
        </div>

        {/* Message */}
        <div className="absolute bottom-[16%] inset-x-0 px-[8%]">
          <div
            className="opacity-90 text-yellow-900"
            style={{ fontSize: clamp(14, width * 0.032, 34) }}
          >
            {data.message || "Celebrate the birth of Lord Krishna 🙏"}
          </div>
        </div>

        {/* Name */}
        <div className="absolute bottom-[6%] inset-x-0">
          <div
            className="font-semibold text-yellow-800"
            style={{ fontSize: clamp(14, width * 0.03, 38) }}
          >
            {data.name}
          </div>
        </div>
      </div>
    );
  },
};


// 💜 4. Purple Divine
const Jan04 = {
  id: "jan_divine",
  title: "Divine Purple",
  tags: ["Elegant", "Modern"],
  defaultMessage: "May your life be filled with divine blessings 💜",
  preview() {
    return (
      <div className="relative w-[540px] h-[675px] bg-gradient-to-b from-purple-200 to-indigo-300 rounded-[32px] overflow-hidden grid place-items-center">
        <div className="text-6xl">💜</div>
        <div className="mt-2 text-3xl font-bold">Divine Blessings</div>
      </div>
    );
  },
  render({ width, height, data }) {
    return (
      <div className="w-full h-full relative bg-gradient-to-b from-purple-200 to-indigo-300 text-center">
        {/* Title */}
        <div className="absolute top-[8%] inset-x-0">
          <div style={{ fontSize: clamp(36, width * 0.08, 110) }}>💜</div>
          <div
            className="font-black text-indigo-900"
            style={{ fontSize: clamp(22, width * 0.06, 80) }}
          >
            Happy Janmashtami
          </div>
        </div>

        {/* Photo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <PhotoCircle src={data.photo} size={0.36} />
        </div>

        {/* Message */}
        <div className="absolute bottom-[18%] inset-x-0 px-[8%]">
          <div
            className="opacity-90 text-indigo-900"
            style={{ fontSize: clamp(14, width * 0.032, 34) }}
          >
            {data.message || "May your life be filled with divine blessings 💜"}
          </div>
        </div>

        {/* Name */}
        <div className="absolute bottom-[6%] inset-x-0">
          <div
            className="font-semibold text-indigo-900"
            style={{ fontSize: clamp(14, width * 0.03, 38) }}
          >
            {data.name}
          </div>
        </div>
      </div>
    );
  },
};






const Jan1 = {
  id: "jan_peacock",
  title: "Peacock Blossom",
  tags: ["Divine", "Vibrant"],
  defaultMessage: "May Lord Krishna fill your home with joy and harmony.",
  preview() {
    return (
      <div className="relative w-[540px] h-[675px] rounded-[32px] overflow-hidden">
        <GradientBG stops={["#eef2ff", "#e0e7ff", "#ddd6fe"]} />
        <div className="absolute inset-0 grid place-items-center text-center">
          <div className="text-6xl">🦚🎶</div>
          <div className="mt-3 text-4xl font-black">Happy Janmashtami</div>
        </div>
      </div>
    );
  },
  render({ width, height, data }) {
  return (
    <div className="w-full h-full relative text-center text-slate-900">
      {/* 🔸 Background Gradient (Krishna Theme) */}
      <GradientBG stops={["#eef2ff", "#e0e7ff", "#ddd6fe"]} />

      {/* 🔸 Flag/Icon aur Title Upar */}
      <div className="absolute top-[6%] inset-x-0">
        <div style={{ fontSize: clamp(32, width * 0.08, 120) }}>🦚🎶</div>
        <div
          className="font-black"
          style={{ fontSize: clamp(24, width * 0.07, 90) }}
        >
          Happy Krishna Janmashtami
        </div>
      </div>

      {/* 🔸 Message Center Me */}
      <div className="absolute inset-0 flex items-center justify-center px-[8%]">
        <div
          className="opacity-80"
          style={{ fontSize: clamp(12, width * 0.028, 28) }}
        >
          {data.message ||
            "May Lord Krishna fill your home with joy and harmony."}
        </div>
      </div>

      {/* 🔸 Photo Niche */}
      <div className="absolute inset-x-0 bottom-[8%] px-[8%]">
        <PhotoCircle src={data.photo} />
      </div>

      {/* 🔸 Name Sabse Niche */}
      <div className="absolute bottom-[4%] inset-x-0 px-[6%]">
        <div
          className="font-semibold"
          style={{ fontSize: clamp(14, width * 0.03, 40) }}
        >
          {data.name}
        </div>
      </div>
    </div>
  );
},
};


const Jan2 = {
  id: "jan_flute",
  title: "Flute Minimal",
  tags: ["Minimal", "Calm"],
  defaultMessage: "Wishing you a blessed Janmashtami!",
  preview() {
    return (
      <div className="relative w-[540px] h-[675px] bg-white rounded-[32px] overflow-hidden">
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-6xl">🎶</div>
          <div className="mt-2 text-3xl font-bold">Krishna Janmashtami</div>
        </div>
      </div>
    );
  },
 render({ width, height, data }) {
  return (
    <div className="w-full h-full relative bg-white text-center">
      {/* 🔸 Title Upar */}
      <div className="absolute top-[6%] inset-x-0">
        <div style={{ fontSize: clamp(36, width * 0.08, 120) }}>🎶</div>
        <div
          className="font-black"
          style={{ fontSize: clamp(22, width * 0.06, 80) }}
        >
          Happy Krishna Janmashtami
        </div>
      </div>

      {/* 🔸 Message Center Me */}
      <div className="absolute inset-0 flex items-center justify-center px-[8%]">
        <div
          className="opacity-80"
          style={{ fontSize: clamp(12, width * 0.028, 28) }}
        >
          {data.message || "Wishing you a blessed Janmashtami!"}
        </div>
      </div>

      {/* 🔸 Photo Niche */}
      <div className="absolute inset-x-0 bottom-[8%] px-[8%]">
        <PhotoCircle src={data.photo} size={0.36} />
      </div>

      {/* 🔸 Name Sabse Niche */}
      <div className="absolute bottom-[4%] inset-x-0 px-[6%]">
        <div
          className="font-semibold"
          style={{ fontSize: clamp(14, width * 0.03, 40) }}
        >
          {data.name}
        </div>
      </div>
    </div>
  );
},
};

const Jan3 = {
  id: "jan_feather",
  title: "Peacock Feather Ornate",
  tags: ["Ornate", "Colorful"],
  defaultMessage: "Jai Shri Krishna!",
  preview() {
    return (
      <div className="relative w-[540px] h-[675px] rounded-[32px] overflow-hidden">
        <GradientBG stops={["#fff1f2", "#ffe4e6", "#fce7f3"]} />
        <div className="absolute inset-0 grid place-items-center text-center">
          <div className="text-6xl">🦚</div>
          <div className="mt-3 text-4xl font-black">Happy Krishna Janmashtami</div>
        </div>
      </div>
    );
  },
  render({ width, height, data }) {
    return (
      <div className="w-full h-full relative text-center text-slate-900">
        <GradientBG stops={["#fff1f2", "#ffe4e6", "#fce7f3"]} />
        <div className="absolute top-[8%] inset-x-0">
          <div style={{ fontSize: clamp(36, width * 0.08, 120) }}>🦚</div>
          <div
            className="font-black"
            style={{ fontSize: clamp(24, width * 0.06, 80) }}
          >
            Happy Krishna Janmashtami
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center px-[8%">
          <PhotoCircle src={data.photo} />
        </div>
        <div className="absolute bottom-[14%] inset-x-0 px-[6%]">
          <div
            className="opacity-80"
            style={{ fontSize: clamp(12, width * 0.028, 28) }}
          >
            {data.message || "Jai Shri Krishna!"}
          </div>
          <div
            className="mt-2 font-semibold"
            style={{ fontSize: clamp(14, width * 0.03, 40) }}
          >
            {data.name}
          </div>
        </div>
      </div>
    );
  },
};
/* ---- Birthday (4) ---- */
const B1 = {
  id: "bd_confetti",
  title: "Confetti Pop",
  tags: ["Fun", "Bright"],
  defaultMessage: "Happy Birthday! Wishing you joy and smiles.",
  preview() {
    return (
      <div className="relative w-[540px] h-[675px] rounded-[32px] overflow-hidden">
        <GradientBG stops={["#ffe4e6", "#fde68a", "#e9d5ff"]} />
        <div className="absolute inset-0 grid place-items-center text-center">
          <div className="text-6xl">🎂🎉</div>
          <div className="mt-2 text-3xl font-black">Happy Birthday Awadh</div>
        </div>
      </div>
    );
  },
render({ width, height, data }) {
  return (
    <div className="w-full h-full relative text-center text-slate-900">
      {/* 🔸 Background Gradient */}
      <GradientBG stops={["#ffe4e6", "#fde68a", "#e9d5ff"]} />

      {/* 🔸 Title Upar */}
      <div className="absolute top-[8%] inset-x-0">
        <div style={{ fontSize: clamp(36, width * 0.08, 120) }}>🎂🎉</div>
        <div
          className="font-black"
          style={{ fontSize: clamp(24, width * 0.06, 80) }}
        >
          Happy Birthday Awadh
        </div>
      </div>

     {/* Photo at Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <PhotoCircle src={data.photo}/>
      </div>

      {/* 🔸 Message Photo ke niche */}
      <div className="absolute bottom-[18%] inset-x-0 px-[8%]">
        <div
          className="opacity-80"
          style={{ fontSize: clamp(12, width * 0.028, 28) }}
        >
          {data.message || "Happy Birthday! Wishing you joy and smiles."}
        </div>
      </div>

      {/* 🔸 Name Sabse Niche */}
      <div className="absolute bottom-[6%] inset-x-0 px-[6%]">
        <div
          className="font-semibold"
          style={{ fontSize: clamp(14, width * 0.03, 40) }}
        >
          {data.name}
        </div>
      </div>
    </div>
  );
},
};
const B2 = {
  id: "bd_kids",
  title: "Kids Cartoon",
  tags: ["Cute", "Playful"],
  defaultMessage: "Have a magical day!",
  preview() {
    return (
      <div className="relative w-[540px] h-[675px] rounded-[32px] overflow-hidden">
        <GradientBG stops={["#dbeafe", "#ede9fe", "#fce7f3"]} />
        <div className="absolute inset-0 grid place-items-center text-center">
          <div className="text-6xl">🧁🦄</div>
          <div className="mt-2 text-3xl font-black">Birthday Fun</div>
        </div>
      </div>
    );
  },
  render({ width, height, data }) {
    return (
      <div className="w-full h-full relative text-center">
        <GradientBG stops={["#dbeafe", "#ede9fe", "#fce7f3"]} />
        <div className="absolute top-[10%] inset-x-0">
          <div style={{ fontSize: clamp(36, width * 0.08, 120) }}>🧁🦄</div>
          <div
            className="font-black"
            style={{ fontSize: clamp(22, width * 0.06, 80) }}
          >
            Birthday Fun
          </div>
          <div
            className="opacity-80 mt-1"
            style={{ fontSize: clamp(12, width * 0.028, 28) }}
          >
            {data.message || "Have a magical day!"}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-[8%] px-[8%]">
          <PhotoCircle src={data.photo} size={0.38} />
        </div>
        <div className="absolute bottom-[4%] inset-x-0 px-[6%]">
          <div
            className="font-semibold"
            style={{ fontSize: clamp(14, width * 0.03, 40) }}
          >
            {data.name}
          </div>
        </div>
      </div>
    );
  },
};
const B3 = {
  id: "bd_elegant",
  title: "Elegant Gold",
  tags: ["Elegant", "Minimal"],
  defaultMessage: "Warmest wishes on your special day.",
  preview() {
    return (
      <div className="relative w-[540px] h-[675px] bg-white rounded-[32px] overflow-hidden">
        <div className="absolute inset-0 grid place-items-center text-center">
          <div className="text-6xl">✨</div>
          <div className="mt-2 text-3xl font-black">Birthday Wishes</div>
        </div>
      </div>
    );
  },
  render({ width, height, data }) {
    return (
      <div className="w-full h-full relative bg-white text-center">
        <div className="absolute top-[10%] inset-x-0">
          <div style={{ fontSize: clamp(36, width * 0.08, 120) }}>✨</div>
          <div
            className="font-black"
            style={{ fontSize: clamp(22, width * 0.06, 80) }}
          >
            Birthday Wishes
          </div>
          <div
            className="opacity-80 mt-1"
            style={{ fontSize: clamp(12, width * 0.028, 28) }}
          >
            {data.message || "Warmest wishes on your special day."}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-[8%] px-[8%]">
          <PhotoCircle src={data.photo} size={0.34} />
        </div>
        <div className="absolute inset-x-0 bottom-[4%] px-[6%]">
          <div
            className="font-semibold"
            style={{ fontSize: clamp(14, width * 0.03, 40) }}
          >
            {data.name}
          </div>
        </div>
      </div>
    );
  },
};
const B4 = {
  id: "bd_colorblock",
  title: "Color Block",
  tags: ["Modern", "Bold"],
  defaultMessage: "Cheers to another fabulous year!",
  preview() {
    return (
      <div className="relative w-[540px] h-[675px] rounded-[32px] overflow-hidden">
        <GradientBG stops={["#ffedd5", "#e2e8f0", "#fecaca"]} />
        <div className="absolute inset-0 grid place-items-center text-center">
          <div className="text-6xl">🎈</div>
          <div className="mt-2 text-3xl font-black">Birthday Cheers</div>
        </div>
      </div>
    );
  },
  render({ width, height, data }) {
    return (
      <div className="w-full h-full relative text-center">
        <GradientBG stops={["#ffedd5", "#e2e8f0", "#fecaca"]} />
        <div className="absolute top-[10%] inset-x-0">
          <div style={{ fontSize: clamp(36, width * 0.08, 120) }}>🎈</div>
          <div
            className="font-black"
            style={{ fontSize: clamp(22, width * 0.06, 80) }}
          >
            Birthday Cheers
          </div>
          <div
            className="opacity-80 mt-1"
            style={{ fontSize: clamp(12, width * 0.028, 28) }}
          >
            {data.message || "Cheers to another fabulous year!"}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-[8%] px-[8%]">
          <PhotoCircle src={data.photo} size={0.38} />
        </div>
        <div className="absolute bottom-[4%] inset-x-0 px-[6%]">
          <div
            className="font-semibold"
            style={{ fontSize: clamp(14, width * 0.03, 40) }}
          >
            {data.name}
          </div>
        </div>
      </div>
    );
  },
};

/* ---- Posters (4) ---- */
const P1 = {
  id: "pos_business",
  title: "Business Promo",
  tags: ["Clean", "Promo"],
  defaultMessage: "Big Sale — Flat 50% off this weekend.",
  preview() {
    return (
      <div className="relative w-[540px] h-[675px] bg-white rounded-[32px] overflow-hidden">
        <div className="absolute inset-0 grid place-items-center text-center">
          <div className="text-6xl">🏷️</div>
          <div className="mt-2 text-3xl font-black">Business Promo</div>
        </div>
      </div>
    );
  },
  render({ width, height, data }) {
    return (
      <div className="w-full h-full relative bg-white text-center">
        <div className="absolute top-[8%] inset-x-0">
          <div style={{ fontSize: clamp(36, width * 0.08, 120) }}>🏷️</div>
          <div
            className="font-black"
            style={{ fontSize: clamp(22, width * 0.06, 80) }}
          >
            Business Promo
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-[28%] px-[8%]">
          <PhotoCircle src={data.photo} size={0.32} />
        </div>
        <div className="absolute bottom-[4%] inset-x-0 px-[6%]">
          <div
            className="opacity-80"
            style={{ fontSize: clamp(12, width * 0.028, 28) }}
          >
            {data.message || "Big Sale — Flat 50% off this weekend."}
          </div>
          <div
            className="mt-2 font-semibold"
            style={{ fontSize: clamp(14, width * 0.03, 40) }}
          >
            {data.name}
          </div>
        </div>
      </div>
    );
  },
};
const P2 = {
  id: "pos_event",
  title: "Event Poster",
  tags: ["Event", "Bold"],
  defaultMessage: "Join us this Sunday at 6 PM.",
  preview() {
    return (
      <div className="relative w-[540px] h-[675px] rounded-[32px] overflow-hidden">
        <GradientBG stops={["#ddd6fe", "#c7d2fe", "#bae6fd"]} />
        <div className="absolute inset-0 grid place-items-center text-center">
          <div className="text-6xl">🎤</div>
          <div className="mt-2 text-3xl font-black">Live Event</div>
        </div>
      </div>
    );
  },
  render({ width, height, data }) {
    return (
      <div className="w-full h-full relative text-center">
        <GradientBG stops={["#ddd6fe", "#c7d2fe", "#bae6fd"]} />
        <div className="absolute top-[10%] inset-x-0">
          <div style={{ fontSize: clamp(36, width * 0.08, 120) }}>🎤</div>
          <div
            className="font-black"
            style={{ fontSize: clamp(22, width * 0.06, 80) }}
          >
            Live Event
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-[28%] px-[8%]">
          <PhotoCircle src={data.photo} size={0.32} />
        </div>
        <div className="absolute bottom-[4%] inset-x-0 px-[6%]">
          <div
            className="opacity-80"
            style={{ fontSize: clamp(12, width * 0.028, 28) }}
          >
            {data.message || "Join us this Sunday at 6 PM."}
          </div>
          <div
            className="mt-2 font-semibold"
            style={{ fontSize: clamp(14, width * 0.03, 40) }}
          >
            {data.name}
          </div>
        </div>
      </div>
    );
  },
};
const P3 = {
  id: "pos_social",
  title: "Social Media",
  tags: ["Square", "Modern"],
  defaultMessage: "New post is live. Check it out!",
  preview() {
    return (
      <div className="relative w-[540px] h-[675px] bg-white rounded-[32px] overflow-hidden">
        <div className="absolute inset-0 grid place-items-center text-center">
          <div className="text-6xl">📣</div>
          <div className="mt-2 text-3xl font-black">Social Media</div>
        </div>
      </div>
    );
  },
  render({ width, height, data }) {
    return (
      <div className="w-full h-full relative bg-white text-center">
        <div className="absolute top-[8%] inset-x-0">
          <div style={{ fontSize: clamp(36, width * 0.08, 120) }}>📣</div>
          <div
            className="font-black"
            style={{ fontSize: clamp(22, width * 0.06, 80) }}
          >
            Social Media
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-[28%] px-[8%]">
          <PhotoCircle src={data.photo} size={0.32} />
        </div>
        <div className="absolute bottom-[4%] inset-x-0 px-[6%]">
          <div
            className="opacity-80"
            style={{ fontSize: clamp(12, width * 0.028, 28) }}
          >
            {data.message || "New post is live. Check it out!"}
          </div>
          <div
            className="mt-2 font-semibold"
            style={{ fontSize: clamp(14, width * 0.03, 40) }}
          >
            {data.name}
          </div>
        </div>
      </div>
    );
  },
};
const P4 = {
  id: "pos_minimal",
  title: "Minimal Promo",
  tags: ["Minimal", "Aesthetic"],
  defaultMessage: "Now open — Visit us today.",
  preview() {
    return (
      <div className="relative w-[540px] h-[675px] rounded-[32px] overflow-hidden">
        <GradientBG stops={["#f1f5f9", "#e2e8f0", "#fde68a"]} />
        <div className="absolute inset-0 grid place-items-center text-center">
          <div className="text-6xl">🧾</div>
          <div className="mt-2 text-3xl font-black">Promo</div>
        </div>
      </div>
    );
  },
  render({ width, height, data }) {
    return (
      <div className="w-full h-full relative text-center">
        <GradientBG stops={["#f1f5f9", "#e2e8f0", "#fde68a"]} />
        <div className="absolute top-[10%] inset-x-0">
          <div style={{ fontSize: clamp(36, width * 0.08, 120) }}>🧾</div>
          <div
            className="font-black"
            style={{ fontSize: clamp(22, width * 0.06, 80) }}
          >
            Promo
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-[28%] px-[8%]">
          <PhotoCircle src={data.photo} size={0.36} />
        </div>
        <div className="absolute bottom-[4%] inset-x-0 px-[6%]">
          <div
            className="opacity-80"
            style={{ fontSize: clamp(12, width * 0.028, 28) }}
          >
            {data.message || "Now open — Visit us today."}
          </div>
          <div
            className="mt-2 font-semibold"
            style={{ fontSize: clamp(14, width * 0.03, 40) }}
          >
            {data.name}
          </div>
        </div>
      </div>
    );
  },
};

/* ---- Other festivals placeholders (demo) ---- */

// DIWALI
const Diwali = {
  id: "diwali_demo",
  title: "Diwali Lights",
  tags: ["Festival", "Lights"],
  defaultMessage: "May your life be filled with light and joy.",
  preview() {
    return (
      <div className="relative w-[540px] h-[675px] rounded-[32px] overflow-hidden">
        <GradientBG stops={["#fff7ed", "#fde68a", "#fdba74"]} />
        <div className="absolute inset-0 grid place-items-center text-center">
          <div className="text-6xl">🪔</div>
          <div className="mt-2 text-3xl font-black">Diwali</div>
        </div>
      </div>
    );
  },
  render({ width, height, data }) {
    return (
      <div className="w-full h-full relative text-center">
        <GradientBG stops={["#fff7ed", "#fde68a", "#fdba74"]} />
        <div className="absolute top-[10%] inset-x-0">
          <div style={{ fontSize: clamp(36, width * 0.08, 120) }}>🪔</div>
          <div
            className="font-black"
            style={{ fontSize: clamp(22, width * 0.06, 80) }}
          >
            Happy Diwali
          </div>
          <div
            className="opacity-80 mt-1"
            style={{ fontSize: clamp(12, width * 0.028, 28) }}
          >
            {data.message || "May your life be filled with light and joy."}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-[8%] px-[8%]">
          <PhotoCircle src={data.photo} size={0.36} />
        </div>
        <div className="absolute bottom-[4%] inset-x-0 px-[6%]">
          <div
            className="font-semibold"
            style={{ fontSize: clamp(14, width * 0.03, 40) }}
          >
            {data.name}
          </div>
        </div>
      </div>
    );
  },
};

// HOLI
const Holi = {
  id: "holi_demo",
  title: "Holi Colors",
  tags: ["Colors", "Fun"],
  defaultMessage: "Let the colors of Holi spread happiness.",
  preview() {
    return (
      <div className="relative w-[540px] h-[675px] rounded-[32px] overflow-hidden">
        <GradientBG stops={["#f5d0fe", "#fecaca", "#d9f99d"]} />
        <div className="absolute inset-0 grid place-items-center text-center">
          <div className="text-6xl">🌈</div>
          <div className="mt-2 text-3xl font-black">Holi</div>
        </div>
      </div>
    );
  },
  render({ width, height, data }) {
    return (
      <div className="w-full h-full relative text-center">
        <GradientBG stops={["#f5d0fe", "#fecaca", "#d9f99d"]} />
        <div className="absolute top-[10%] inset-x-0">
          <div style={{ fontSize: clamp(36, width * 0.08, 120) }}>🌈</div>
          <div
            className="font-black"
            style={{ fontSize: clamp(22, width * 0.06, 80) }}
          >
            Happy Holi
          </div>
          <div
            className="opacity-80 mt-1"
            style={{ fontSize: clamp(12, width * 0.028, 28) }}
          >
            {data.message || "Let the colors of Holi spread happiness."}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-[8%] px-[8%]">
          <PhotoCircle src={data.photo} size={0.36} />
        </div>
        <div className="absolute bottom-[4%] inset-x-0 px-[6%]">
          <div
            className="font-semibold"
            style={{ fontSize: clamp(14, width * 0.03, 40) }}
          >
            {data.name}
          </div>
        </div>
      </div>
    );
  },
};

// RAKSHA BANDHAN
const Raksha = {
  id: "raksha_demo",
  title: "Raksha Bandhan",
  tags: ["Bond", "Love"],
  defaultMessage: "Celebrating the beautiful bond of protection.",
  preview() {
    return (
      <div className="relative w-[540px] h-[675px] rounded-[32px] overflow-hidden">
        <GradientBG stops={["#cffafe", "#bfdbfe", "#e9d5ff"]} />
        <div className="absolute inset-0 grid place-items-center text-center">
          <div className="text-6xl">🧵</div>
          <div className="mt-2 text-3xl font-black">Raksha Bandhan</div>
        </div>
      </div>
    );
  },
  render({ width, height, data }) {
    return (
      <div className="w-full h-full relative text-center">
        <GradientBG stops={["#cffafe", "#bfdbfe", "#e9d5ff"]} />
        <div className="absolute top-[10%] inset-x-0">
          <div style={{ fontSize: clamp(36, width * 0.08, 120) }}>🧵</div>
          <div
            className="font-black"
            style={{ fontSize: clamp(22, width * 0.06, 80) }}
          >
            Happy Raksha Bandhan
          </div>
          <div
            className="opacity-80 mt-1"
            style={{ fontSize: clamp(12, width * 0.028, 28) }}
          >
            {data.message || "Celebrating the beautiful bond of protection."}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-[8%] px-[8%]">
          <PhotoCircle src={data.photo} size={0.36} />
        </div>
        <div className="absolute bottom-[4%] inset-x-0 px-[6%]">
          <div
            className="font-semibold"
            style={{ fontSize: clamp(14, width * 0.03, 40) }}
          >
            {data.name}
          </div>
        </div>
      </div>
    );
  },
};

// NAVRATRI
const Navratri = {
  id: "nav_demo",
  title: "Navratri",
  tags: ["Devotional", "Dance"],
  defaultMessage: "Shubh Navratri! May Maa Durga bless you.",
  preview() {
    return (
      <div className="relative w-[540px] h-[675px] rounded-[32px] overflow-hidden">
        <GradientBG stops={["#fee2e2", "#fde68a", "#fef3c7"]} />
        <div className="absolute inset-0 grid place-items-center text-center">
          <div className="text-6xl">🪔</div>
          <div className="mt-2 text-3xl font-black">Happy Navratri</div>
        </div>
      </div>
    );
  },
  render({ width, height, data }) {
    return (
      <div className="w-full h-full relative text-center">
        <GradientBG stops={["#fee2e2", "#fde68a", "#fef3c7"]} />
        <div className="absolute top-[10%] inset-x-0">
          <div style={{ fontSize: clamp(36, width * 0.08, 120) }}>🪔</div>
          <div
            className="font-black"
            style={{ fontSize: clamp(22, width * 0.06, 80) }}
          >
            Happy Navratri
          </div>
          <div
            className="opacity-80 mt-1"
            style={{ fontSize: clamp(12, width * 0.028, 28) }}
          >
            {data.message || "Shubh Navratri! May Maa Durga bless you."}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-[8%] px-[8%]">
          <PhotoCircle src={data.photo} size={0.36} />
        </div>
        <div className="absolute bottom-[4%] inset-x-0 px-[6%]">
          <div
            className="font-semibold"
            style={{ fontSize: clamp(14, width * 0.03, 40) }}
          >
            {data.name}
          </div>
        </div>
      </div>
    );
  },
};



export const FESTIVALS = [
  {
    id: "independence",
    name: "Independence Day",
    emoji: "🇮🇳",
    description: "Patriotic templates with pre-filled wishes.",
    templates: [Independence1, Independence2, Independence3],
  },
  {
    id: "janmashtami",
    name: "Krishna Janmashtami",
    emoji: "🦚",
    description: "Divine and vibrant Janmashtami designs.",
    templates: [JanmashtamiFlute,Jan01, Jan02, Jan03, Jan04, Jan1, Jan2, Jan3 ],
  },
  {
    id: "birthday",
    name: "Birthday",
    emoji: "🎂",
    description: "Modern & cute birthday cards.",
    templates: [B1, B2, B3, B4],
  },
  {
    id: "poster",
    name: "Poster",
    emoji: "📜",
    description: "Clean business/event/social posters.",
    templates: [P1, P2, P3, P4],
  },
  {
    id: "diwali",
    name: "Diwali",
    emoji: "🪔",
    description: "Festival of lights (demo).",
    templates: [Diwali],
  },
  {
    id: "holi",
    name: "Holi",
    emoji: "🎨",
    description: "Festival of colors (demo).",
    templates: [Holi],
  },
  {
    id: "raksha",
    name: "Raksha Bandhan",
    emoji: "🎁",
    description: "Celebrate the sibling bond (demo).",
    templates: [Raksha],
  },
  {
    id: "navratri",
    name: "Navratri",
    emoji: "🕉️",
    description: "Nine nights of devotion (demo).",
    templates: [Navratri],
  },
];
