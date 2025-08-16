import React from 'react';

export function Footer() {
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    try {
      const key = 'festify_visitors_v2';
      let c = localStorage.getItem(key);

      if (!c) {
        c = '1';
        localStorage.setItem(key, c);
      } else {
        c = (parseInt(c || '0') + 1).toString();
        localStorage.setItem(key, c);
      }

      setCount(parseInt(c));
    } catch (e) {}
  }, []);

  return (
    <footer className="bg-white border-t mt-8">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-center sm:text-left">
          
          {/* Social Links */}
          <div>
            <div className="font-bold">Connect</div>
            <div className="flex flex-wrap gap-3 mt-3 justify-center sm:justify-start">
              <a href="https://www.instagram.com/awadhpatel76" className="text-sm hover:text-sky-600">Instagram</a>
              <a href="https://www.instagram.com/awadhpatel76" className="text-sm hover:text-sky-600">Facebook</a>
              <a href="https://www.linkedin.com/in/awadhlal" className="text-sm hover:text-sky-600">LinkedIn</a>
              <a href="https://www.linkedin.com/in/awadhlal" className="text-sm hover:text-sky-600">YouTube</a>
            </div>
          </div>

          {/* Developer Info Button + Visitor Count */}
          <div className="flex flex-col items-center justify-center sm:items-center sm:justify-center">
            <button
              onClick={() => setOpen(true)}
              className="px-4 py-2 rounded-xl border font-extrabold hover:bg-slate-50 transition"
            >
              Developer Info
            </button>
            <div className="mt-2 text-sm text-slate-600">
              Visitors: {count}
            </div>
          </div>

          {/* Right side credit */}
          <div className="sm:text-right">
            <div className="text-sm text-slate-500">Made with ❤️ by AP Singh</div>
          </div>
        </div>

        {/* Bottom Section (Copyright) */}
        <div className="mt-6 border-t pt-4 text-center text-xs text-slate-500">
          © 08-2025 <span className="font-semibold">Festify</span>. All rights reserved.
        </div>
      </div>

      {/* Popup Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/40 grid place-items-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-3">
            <div className="flex justify-between items-start">
              <h3 className="font-bold">Developer Information</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-slate-500 hover:text-black"
              >
                ✕
              </button>
            </div>
            <div className="mt-4 space-y-2 text-sm">
              <p><strong>Name:</strong> Awadh Patel Singh</p>
              <p><strong>Email:</strong> awadhpatel177@gmail.com</p>
              <p>
                <strong>Socials:</strong>{" "}
                <a href="https://www.instagram.com/awadhpatel76" className="text-sky-600 hover:underline">Instagram</a> •{" "}
                <a href="https://github.com/" className="text-sky-600 hover:underline">GitHub</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
