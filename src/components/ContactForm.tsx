'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { SpinnerGap } from '@phosphor-icons/react';
import { contactSchema } from '@/lib/contact-schema';

interface Toast {
  type: 'success' | 'error';
  message: string;
}

const COOLDOWN_MS = 5000;
const TIMEOUT_MS = 30000;
const TOAST_DURATION_MS = 5000;

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isCooldown, setIsCooldown] = useState(false);
  const [toast, setToast] = useState<Toast | null>(null);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cooldownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
      if (cooldownTimeoutRef.current) clearTimeout(cooldownTimeoutRef.current);
    };
  }, []);

  const showToast = useCallback((newToast: Toast) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToast(newToast);
    toastTimeoutRef.current = setTimeout(() => {
      setToast(null);
    }, TOAST_DURATION_MS);
  }, []);

  const startCooldown = useCallback(() => {
    setIsCooldown(true);
    cooldownTimeoutRef.current = setTimeout(() => {
      setIsCooldown(false);
    }, COOLDOWN_MS);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = (): boolean => {
    const result = contactSchema.safeParse(formData);
    if (result.success) {
      setErrors({});
      return true;
    }
    const fieldErrors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const fieldName = issue.path[0] as string;
      if (!fieldErrors[fieldName]) {
        fieldErrors[fieldName] = issue.message;
      }
    }
    setErrors(fieldErrors);
    return false;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (response.ok) {
        showToast({
          type: 'success',
          message: 'Message sent successfully! We\'ll get back to you soon.',
        });
        setFormData({ name: '', email: '', company: '', message: '' });
        setErrors({});
        nameInputRef.current?.focus();
      } else {
        const data = await response.json().catch(() => null);
        if (response.status === 400 && data?.fields) {
          setErrors(data.fields);
        }
        showToast({
          type: 'error',
          message: data?.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (err) {
      clearTimeout(timeout);
      const isAbort = err instanceof DOMException && err.name === 'AbortError';
      showToast({
        type: 'error',
        message: isAbort
          ? 'Request timed out. Please try again.'
          : 'Connection error. Please check your internet and try again.',
      });
    } finally {
      setIsLoading(false);
      startCooldown();
    }
  };

  const isDisabled = isLoading || isCooldown;

  const inputClasses = (field: string) =>
    `w-full rounded border bg-[#0E0C0A] px-4 py-3 text-[#D7D2C9] placeholder-[#7B6E63] outline-none transition-colors focus:border-[#C9A84C] ${
      errors[field] ? 'border-red-500' : 'border-[#3A3218]'
    }`;

  return (
    <div className="relative">
      {toast && (
        <div
          role={toast.type === 'success' ? 'status' : 'alert'}
          aria-live={toast.type === 'success' ? 'polite' : 'assertive'}
          className={`absolute -top-14 left-0 right-0 rounded px-4 py-3 text-sm font-medium ${
            toast.type === 'success'
              ? 'bg-green-900/80 text-green-200'
              : 'bg-red-900/80 text-red-200'
          }`}
        >
          {toast.message}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        noValidate
        aria-busy={isLoading}
      >
        <fieldset disabled={isDisabled}>
          <legend className="sr-only">Contact form</legend>

          <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-xs font-medium uppercase tracking-wider text-[#7B6E63]"
              >
                NAME
              </label>
              <input
                ref={nameInputRef}
                id="contact-name"
                name="name"
                type="text"
                placeholder="Your name"
                maxLength={100}
                value={formData.name}
                onChange={handleChange}
                className={inputClasses('name')}
              />
              {errors.name && (
                <p role="alert" className="mt-1 text-xs text-red-400">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-xs font-medium uppercase tracking-wider text-[#7B6E63]"
              >
                EMAIL
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="you@company.com"
                maxLength={254}
                value={formData.email}
                onChange={handleChange}
                className={inputClasses('email')}
              />
              {errors.email && (
                <p role="alert" className="mt-1 text-xs text-red-400">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="contact-company"
              className="mb-2 block text-xs font-medium uppercase tracking-wider text-[#7B6E63]"
            >
              COMPANY / PROJECT
            </label>
            <input
              id="contact-company"
              name="company"
              type="text"
              placeholder="What are you working on?"
              maxLength={100}
              value={formData.company}
              onChange={handleChange}
              className={inputClasses('company')}
            />
            {errors.company && (
              <p role="alert" className="mt-1 text-xs text-red-400">
                {errors.company}
              </p>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="contact-message"
              className="mb-2 block text-xs font-medium uppercase tracking-wider text-[#7B6E63]"
            >
              MESSAGE
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Tell us about your project, timeline, and what success looks like..."
              maxLength={2000}
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`${inputClasses('message')} resize-none`}
            />
            {errors.message && (
              <p role="alert" className="mt-1 text-xs text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isDisabled}
            className="flex w-full items-center justify-center rounded bg-linear-to-r from-[#C9A84C] to-[#967d35] px-6 py-3.5 text-sm font-semibold text-[#0E0C0A] transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <SpinnerGap size={20} className="animate-spin" />
            ) : (
              'Send message →'
            )}
          </button>
        </fieldset>

        <p className="mt-4 text-center text-sm text-[#7B6E63]">
          No spam, ever. Your details stay between us.
        </p>
      </form>
    </div>
  );
};
