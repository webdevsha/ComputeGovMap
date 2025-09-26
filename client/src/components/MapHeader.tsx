interface MapHeaderProps {
  className?: string;
}

export default function MapHeader({ className = "" }: MapHeaderProps) {
  return (
    <div className={`text-center py-4 md:py-6 px-4 bg-background border-b border-border ${className}`} data-testid="header-map">
      <h1 className="text-xl md:text-3xl font-bold text-foreground mb-2" data-testid="text-main-title">
        The Unseen Empire: Mapping the Global Compute Landscape
      </h1>
      <p className="text-sm md:text-lg text-muted-foreground max-w-4xl mx-auto px-2" data-testid="text-subtitle">
        This map reveals the stark divide between the "Compute Rich" nations and the emerging "Compute South," 
        highlighting a critical challenge for global AI governance.
      </p>
    </div>
  );
}