// ─────────────────────────────────────────────────────────────────────────────
// lib/paystack.ts
// Client-side Paystack Inline Pop-up Loader and Checkout Helper
// ─────────────────────────────────────────────────────────────────────────────

interface PaystackOptions {
  key: string;
  email: string;
  amount: number; // in Kobo
  ref: string;
  currency?: string;
  metadata?: Record<string, unknown>;
  onSuccess: (response: { reference: string; trans?: string; status?: string }) => void;
  onClose: () => void;
}

declare global {
  interface Window {
    PaystackPop?: {
      setup: (options: {
        key: string;
        email: string;
        amount: number;
        ref: string;
        currency?: string;
        metadata?: Record<string, unknown>;
        callback: (response: { reference: string; trans?: string; status?: string }) => void;
        onClose: () => void;
      }) => {
        openIframe: () => void;
      };
    };
  }
}

/**
 * Dynamically loads the Paystack inline JS SDK
 */
export function loadPaystackScript(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(false);
      return;
    }

    if (window.PaystackPop) {
      resolve(true);
      return;
    }

    const existingScript = document.getElementById("paystack-inline-js");
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(true));
      existingScript.addEventListener("error", () => resolve(false));
      return;
    }

    const script = document.createElement("script");
    script.id = "paystack-inline-js";
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

/**
 * Triggers the Paystack Inline Pop-up
 */
export async function triggerPaystackInline(options: PaystackOptions): Promise<boolean> {
  const loaded = await loadPaystackScript();

  if (!loaded || !window.PaystackPop) {
    return false;
  }

  const handler = window.PaystackPop.setup({
    key: options.key,
    email: options.email,
    amount: options.amount,
    ref: options.ref,
    currency: options.currency || "NGN",
    metadata: options.metadata,
    callback: options.onSuccess,
    onClose: options.onClose,
  });

  handler.openIframe();
  return true;
}

