"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function IntroAutoAdvance({
  href,
  delayMs,
}: {
  href: string;
  delayMs: number;
}) {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      router.replace(href);
    }, delayMs);

    return () => window.clearTimeout(timeoutId);
  }, [delayMs, href, router]);

  return null;
}
