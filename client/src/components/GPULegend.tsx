import { Info } from "lucide-react";

interface GPULegendProps {
  className?: string;
}

export default function GPULegend({ className = "" }: GPULegendProps) {
  return (
    <div className={`bg-card border border-card-border rounded-lg shadow-lg p-4 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <Info className="w-4 h-4 text-muted-foreground" />
        <h3 className="text-sm font-semibold text-card-foreground">
          GPU Infrastructure Legend
        </h3>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div 
            className="w-4 h-4 bg-emerald-500 border-2 border-white rounded-sm shadow-sm flex items-center justify-center"
            style={{ fontSize: '8px', color: 'white', fontWeight: 'bold' }}
          >
            1
          </div>
          <span className="text-sm text-card-foreground">GPU-enabled regions</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div 
            className="w-4 h-4 bg-gray-500 border-2 border-white rounded-sm shadow-sm flex items-center justify-center"
            style={{ fontSize: '8px', color: 'white', fontWeight: 'bold' }}
          >
            2
          </div>
          <span className="text-sm text-card-foreground">Non-GPU regions</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <div style={{
              width: '0',
              height: '0',
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderBottom: '14px solid #dc2626',
              filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))'
            }}>
              <div style={{
                position: 'absolute',
                top: '2px',
                left: '-4px',
                width: '8px',
                textAlign: 'center',
                fontSize: '8px',
                color: 'white',
                fontWeight: 'bold',
                lineHeight: '1'
              }}>1</div>
            </div>
          </div>
          <span className="text-sm text-card-foreground">H100 regions (Frontier AI)</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 bg-blue-500 border-2 border-white rounded-full shadow-sm"></div>
          <span className="text-sm text-card-foreground">Country center</span>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-card-border">
        <p className="text-xs text-muted-foreground mb-1">
          Numbers indicate region sequence. Hover for details.
        </p>
        <p className="text-xs text-red-600 font-medium">
          🔺 H100 = Most advanced AI compute (Frontier models)
        </p>
      </div>
    </div>
  );
}