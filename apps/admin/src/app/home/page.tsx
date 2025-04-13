"use client"

import { HoverEffect } from "@/components/shared/card-hover-effect";
import Image from "next/image";
import Stats from "./stats";
import { useRecoilValue } from "recoil";
import { applicationsState } from "@/store/applicationsState";
import { ActivityChoiceValues } from "./applications/components/application-activity-choices";

const links = [
  {
    title: "Applications",
    description:
      "Manage candidate applications",
    link: "/home/applications",
  },
  {
    title: "Users",
    description:
      "Manage user pofiles",
    link: "/home/users",
  },
];

const countApplications = (applications: any[], activityChoice?: ActivityChoiceValues) => {
  return (applications||[])?.reduce(
    (count: any[], application: any) => {
      const activityChoices = JSON.parse(application?.activityChoices || '[]');
      if (!activityChoice || activityChoices.includes(activityChoice)) {
        count[0]++;
        if (application?.status?.status === 'PENDING') {
          count[1]++
        }
      }
    
      return count;
    }, 
    [0, 0]
  );
}

export default function Home() {
  const applications = useRecoilValue(applicationsState);
  const [countAll, countPending] = countApplications(applications)
  const [mathSprintAll, mathSprintPending] = countApplications(applications, ActivityChoiceValues.MATH_SPRINT)
  const [bestMathVideoAll, bestMathVideoPending] = countApplications(applications, ActivityChoiceValues.BEST_MATH_VIDEO)
  const [standAll, standPending] = countApplications(applications, ActivityChoiceValues.STAND)
  const [visitorAll, visitorPending] = countApplications(applications, ActivityChoiceValues.VISITOR)

  return (
    <>
      <Image
        src="/mdm.png"
        alt="MDM logo"
        width='100'
        height='100'
      />

      <HoverEffect items={links} className="flex justify-center gap-x-4"/>

      <div className="flex gap-x-4">
        <Stats title='General' className="text-white bg-[#272162]" valueAll={countAll} valuePending={countPending} />
        <Stats title='🏁 Math Sprint' className="bg-gray-300" valueAll={mathSprintAll} valuePending={mathSprintPending} />
        <Stats title='📽️ Best Math Video' className="bg-gray-300" valueAll={bestMathVideoAll} valuePending={bestMathVideoPending} />
        <Stats title='🎤 Stand' className="bg-gray-300" valueAll={standAll} valuePending={standPending} />
        <Stats title='🏖️ Visitor' className="bg-gray-300" valueAll={visitorAll} valuePending={visitorPending} />
      </div>
    </>
  )
}
