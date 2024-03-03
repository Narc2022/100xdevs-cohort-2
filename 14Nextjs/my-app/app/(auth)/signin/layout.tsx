import React from "react";

export default function ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="border-b p-1 text-center">20% off for the next</div>

      {children}
    </section>
  );
}
