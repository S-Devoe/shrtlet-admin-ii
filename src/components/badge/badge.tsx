import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

interface Props {
  className?: string;
  variant?: VariantProps<typeof badgeVariants>["variant"];
  text: string;
}
const Badge = ({ className, variant, text }: Props) => {
  return (
    <span
      className={cn(
        badgeVariants({
          className,
          variant,
        })
      )}
    >
      {text}
    </span>
  );
};

export default Badge;

const badgeVariants = cva(
  "flex items-center font-normal capitalize leading-[1.25rem] justify-center h-fit w-fit px-[0.5rem] py-[0.125rem] rounded-[6.5rem] text-[0.625rem]",
  {
    variants: {
      variant: {
        default: "bg-orange text-white",
        success: "bg-brun-fainter text-[#003D13]",
        destructive: "bg-red-fainter text-red-dark",
        pending: "bg-jasmine-fainter text-jasmine-dark",
        primary: "bg-brun-primary-fainter text-primary-lighter",
        instance: "bg-gray-ten text-gray-two",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
