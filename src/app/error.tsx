"use client";

import Button from "@/components/ui/Button";

interface Props {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: Props) {
  return (
    <div className="error">
      <p className="eyebrow">Coś poszło nie tak</p>
      <p className="muted">{error.message}</p>
      <Button onClick={reset}>Spróbuj ponownie</Button>
    </div>
  );
}
