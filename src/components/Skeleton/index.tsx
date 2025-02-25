import { twMerge } from 'tailwind-merge'
 
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={twMerge("animate-pulse rounded bg-gray-10", className)}
      {...props}
    />
  )
}
 
export { Skeleton }