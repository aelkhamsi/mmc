export enum ActivityChoiceValues {
  MATH_SPRINT = 'math_sprint',
  BEST_MATH_VIDEO = 'best_math_video',
  STAND = 'stand',
  VISITOR = 'visitor'
}

export const activityOptions = [
  {
    value: ActivityChoiceValues.MATH_SPRINT,
    label: "Math Sprint",
  },
  {
    value: ActivityChoiceValues.BEST_MATH_VIDEO,
    label: "Best Math Video",
  },
  {
    value: ActivityChoiceValues.STAND,
    label: "Stand",
  },
  {
    value: ActivityChoiceValues.VISITOR,
    label: "Visitor",
  }
]

const ActivityChoiceCard = ({
  activity,
  className
}:{
  activity: string
  className?: string
}) => {
  return (
    <div className={className}>
      {activity.replaceAll('_', ' ')}
    </div>
  )
}

export const getActivityChoiceClassname = (activity: string) => {
  const baseClassname = 'w-fit rounded-xl px-2';
  let colorClassname;

  switch(activity) {
    case ActivityChoiceValues.MATH_SPRINT:
      colorClassname = 'bg-red-300';
      break;
    case ActivityChoiceValues.BEST_MATH_VIDEO:
      colorClassname = 'bg-orange-300';
      break;
    case ActivityChoiceValues.STAND:
      colorClassname = 'bg-cyan-300';
      break;
    case ActivityChoiceValues.VISITOR:
      colorClassname = 'bg-green-300';
      break;
  }

  return `${baseClassname} ${colorClassname}`;
}

const ApplicationActivityChoices = ({
  activityChoices,
  className
}:{
  activityChoices: string[],
  className?: string,
}) => {

  return (
    <div className={className}>
      {activityChoices &&
        activityChoices?.map(activity => {
          const className = getActivityChoiceClassname(activity)
          return <ActivityChoiceCard key={activity} activity={activity} className={className} />
        })
      }
    </div>
  )
}

export default ApplicationActivityChoices
