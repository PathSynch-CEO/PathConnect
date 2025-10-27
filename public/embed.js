/* public/embed.js */
(() => {
    const thisScript = document.currentScript;
    const KEY =
      (thisScript && thisScript.getAttribute("data-key")) || "";
    const API =
      (thisScript && thisScript.getAttribute("data-api")) ||
      (location.origin.includes("localhost")
        ? "http://localhost:8080"
        : location.origin);
  
    if (!KEY) {
      console.error("[SynchMate] Missing data-key on <script src='.../embed.js'>");
      return;
    }
  
    // load the real widget bundle
    const s = document.createElement("script");
    s.src = API.replace(/\/$/, "") + "/widget.js?v=" + Date.now();
    s.async = true;
  
    function tryBoot() {
      const w = window;
      const boot =
        (w.SynchMate && (w.SynchMate.initWidget || w.SynchMate.init)) ||
        w.initWidget;
  
      if (typeof boot === "function") {
        boot({ apiBase: API, publicKey: KEY });
        return true;
      }
      return false;
    }
    
    s.crossOrigin = "anonymous";
    s.onload = () => {
      if (!tryBoot()) {
        // in case the widget attaches the global on the next tick
        setTimeout(tryBoot, 0);
      }
    };
  
    document.head.appendChild(s);
  })();  