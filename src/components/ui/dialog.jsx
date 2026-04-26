import * as React from "react";

export function Dialog({ open, onOpenChange, children }) {
  return open ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => onOpenChange(false)}
      />
      {children}
    </div>
  ) : null;
}

export function DialogContent({ children, className = "" }) {
  return (
    <div
      className={`relative z-50 bg-white dark:bg-black p-6 rounded-lg 
      animate-[fadeScaleIn_0.3s_ease-out] ${className}`}
    >
      {children}
    </div>
  );
}