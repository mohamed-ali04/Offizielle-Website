import { forwardRef } from "react";

const Badge = forwardRef(({ children, className = "", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

Badge.displayName = "Badge";

export { Badge };
export default Badge;
