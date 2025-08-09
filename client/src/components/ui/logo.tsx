import logoPath from "@assets/Picture2_1754717545741.png";

interface LogoProps {
  variant?: "default" | "light";
  className?: string;
}

export default function Logo({ variant = "default", className = "" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-foreground";
  
  return (
    <div className={`flex items-center ${className}`} data-testid="logo">
      <img 
        src={logoPath} 
        alt="Systems Consulting Logo" 
        className="h-8 w-auto mr-3"
      />
      <span className={`text-xl font-bold ${textColor}`}>
        Systems Consulting
      </span>
    </div>
  );
}
