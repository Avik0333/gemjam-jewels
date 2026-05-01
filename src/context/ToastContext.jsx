import { createContext, useContext, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, ShoppingBag, Check } from "lucide-react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = "cart") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  const dismiss = (id) => setToasts((prev) => prev.filter((t) => t.id !== id));

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {createPortal(
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[99999] flex flex-col gap-3 items-center">
          {toasts.map((toast) => (
            <div
              key={toast.id}
              className="flex items-center gap-3 px-5 py-3 shadow-xl text-sm tracking-wide"
              style={{
                backgroundColor: "var(--text)",
                color: "var(--bg)",
                animation: "fadeUp 0.3s ease",
                minWidth: "260px",
              }}
            >
              {toast.type === "cart" ? (
                <ShoppingBag size={14} />
              ) : (
                <Check size={14} />
              )}
              <span className="flex-1 text-xs tracking-[0.15em]">{toast.message}</span>
              <button onClick={() => dismiss(toast.id)} className="opacity-50 hover:opacity-100 transition">
                <X size={12} />
              </button>
            </div>
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}