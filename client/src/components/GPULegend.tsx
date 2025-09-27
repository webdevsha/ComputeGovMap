import { Info } from "lucide-react";
import CollapsibleCard from "@/components/ui/collapsible-card";

interface GPULegendProps {
  className?: string;
}

export default function GPULegend({ className = "" }: GPULegendProps) {
  return (
    <CollapsibleCard
      title="Compute Infrastructure Legend"
      className={className}
      testId="gpu-legend"
      defaultOpen={true}
    >
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
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '8px',
                color: 'white',
                fontWeight: 'bold',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}>
                #
              </div>
            </div>
          </div>
          <span className="text-sm text-card-foreground">H100 Frontier AI Compute</span>
        </div>

        <div className="flex items-center gap-3">
          <div 
            className="w-4 h-4 bg-blue-700 border-2 border-white rounded-sm shadow-sm flex items-center justify-center"
            style={{ fontSize: '8px', color: 'white', fontWeight: 'bold' }}
          >
            #
          </div>
          <span className="text-sm text-card-foreground">OSAT (Semiconductor Assembly/Test)</span>
        </div>
        
        <div className="pt-2 border-t border-border">
          <div className="flex items-center gap-2 mb-2">
            <Info className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs font-medium text-card-foreground">Distribution Info</span>
          </div>
          <p className="text-xs text-muted-foreground mb-2">
            H100 triangles show numbered frontier AI compute regions across major tech hubs
          </p>
          <p className="text-xs text-muted-foreground">
            OSAT squares indicate semiconductor assembly/test operations
          </p>
        </div>
        
        <div className="text-xs text-muted-foreground space-y-1">
          <div><strong>H100 Distribution:</strong></div>
          <div>• Silicon Valley: 2 H100 regions</div>
          <div>• Other major hubs: 1 H100 each</div>
          <div>• Total US H100 regions: 9</div>
          <div className="mt-2"><strong>OSAT Operations:</strong></div>
          <div>• Philippines: 4 major OSAT hubs</div>
          <div>• 500+ semiconductor firms</div>
          <div>• Global ranking: 9th in chip exports</div>
        </div>
      </div>
    </CollapsibleCard>
  );
}