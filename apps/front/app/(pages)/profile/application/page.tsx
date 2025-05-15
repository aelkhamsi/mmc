
"use client"

import { Separator } from "@mdm/ui"
import { formatDate } from "@mdm/utils";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@mdm/ui";
import { Badge } from "@mdm/ui";
import { Button } from "@mdm/ui";
import { useRouter } from "next/navigation";
import { useAtomValue } from "jotai";
import { userAtom } from "@/app/store/userAtom";
import { ProfileSkeleton } from "@mdm/ui";

const getBadgeClassname = (status: string) => {
  switch(status) {
    case 'DRAFT':
      return 'bg-gray-300 text-black';
    case 'PENDING':
      return 'bg-[#FFE380] text-black';
    case 'NOTIFIED':
      return 'bg-[#79E2F2] text-black';
    case 'UPDATED':
      return 'bg-[#B3D4FF] text-black';
    case 'VALIDATED':
      return 'bg-[#79F2C0] text-black';
    case 'ACCEPTED':
      return 'bg-[#006644] text-white';
    case 'REJECTED':
      return 'bg-[#BF2600] text-white';
    case 'WAITLIST':
      return 'bg-[#403294] text-white';
  }
}

export default function ApplicationPage() {
  const user = useAtomValue(userAtom)
  const [content, setContent] = useState<any>(undefined);
  const router = useRouter();
  
  useEffect(() => {
    const application = user?.application;
    const applicationStatus = application?.status?.status;

    if (!application) {
      setContent({
        title: "You have not submitted an application",
        subtitle: "We look forward to receiving your application! Don't hesitate to create one.",
        ctaLabel: "Create an application",
      })
    } else if (applicationStatus === 'DRAFT') {
      setContent({
        title: "You have saved a draft application. It has not yet been submitted.",
        subtitle: "We look forward to receiving your application! You haven't finalized it yet!",
        ctaLabel: "Continue your application",
      })
    } else {
      setContent({
        title: "You have already submitted an application",
        subtitle: "You'll find the status of your application below. You will be notified of the next steps by e-mail.",
        ctaLabel: "Update your application",
      })
    }
  }, [user])

  const applicationCard = (
    <Card>
      <CardHeader>
        <CardTitle>
          {content?.title}
        </CardTitle>
        <CardDescription>
          {content?.subtitle}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {user?.application && 
          <>
            <div className="text-sm"><span className="font-bold">Submission date</span>: {formatDate(user?.application?.createdAt)}</div>
            <div className="text-sm"><span className="font-bold">Last update</span>: {formatDate(user?.application?.updatedAt)}</div>
            <div className="text-sm"><span className="font-bold">Status</span>: <Badge className={`px-4 ${getBadgeClassname(user?.application?.status?.status)}`}>{user?.application?.status?.status}</Badge></div>
          </>
        }
      </CardContent>

      
      <CardFooter>
        <Button
          onClick={() => router.push('/application')}
        >
          {content?.ctaLabel}
        </Button>
      </CardFooter> 
    </Card>
  );

  return (
    <div className="space-y-6">
      <div>
        <div className="text-lg font-medium">Applicationœ</div>
        <p className="text-sm text-muted-foreground">
          This is where you'll find the status of your application.
        </p>
      </div>

      <Separator />

      {!user
        ? <ProfileSkeleton />
        : applicationCard
      }
    </div>
  )
}
