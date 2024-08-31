import Features from "@/components/features";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import Try from "@/components/try";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
  canonical: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <Features />

      <Testimonials />

      <Try />
    </>
  );
}
