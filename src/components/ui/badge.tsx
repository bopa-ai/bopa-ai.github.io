import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { badgeVariants } from "@/components/ui/badge-variants"
import { cn } from "@/lib/utils"

type BadgeProps = ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    render?: ComponentProps<typeof useRender>["render"]
  }

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: BadgeProps) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps({
      className: cn(badgeVariants({ variant }), className),
    }, props),
    render,
    state: {
      slot: "badge",
      variant,
    },
  });
}

export { Badge }
