import type { Metadata } from "next";
import CertificateView from "@/components/CertificateView";
import { hasFullAccess, isCourseLocked } from "@/lib/access";
import { courses } from "@/lib/data";
import { currentTier } from "@/lib/session";

export const metadata: Metadata = {
  title: "Certificate",
};

export default async function CertificatePage() {
  const tier = await currentTier();
  // Locked courses cannot be completed, so they are not certificate options.
  const available = courses.filter((course) => !isCourseLocked(course, tier));
  return (
    <div className="content-area page active">
      <div className="section-header">
        <h2>Completion Certificate</h2>
      </div>
      <div id="certificatePanel">
        <CertificateView courses={available} fullAccess={hasFullAccess(tier)} />
      </div>
    </div>
  );
}
