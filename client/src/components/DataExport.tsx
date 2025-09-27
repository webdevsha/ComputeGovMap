import { useState } from "react";
import { Download, FileText, Database, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import CollapsibleCard from "@/components/ui/collapsible-card";
import { CountryData } from "@/types/map";

interface DataExportProps {
  countries: CountryData[];
  allCountries?: CountryData[];
  visibleCountries?: CountryData[];
  className?: string;
}

type ExportFormat = "csv" | "json" | "pdf";
type DataScope = "all" | "visible" | "filtered";

export default function DataExport({ 
  countries, 
  allCountries = countries, 
  visibleCountries = countries, 
  className = "" 
}: DataExportProps) {
  const [exportFormat, setExportFormat] = useState<ExportFormat>("csv");
  const [dataScope, setDataScope] = useState<DataScope>("filtered");
  const [isExporting, setIsExporting] = useState(false);

  const getExportData = () => {
    switch (dataScope) {
      case "all":
        return allCountries;
      case "visible":
        return visibleCountries;
      case "filtered":
      default:
        return countries;
    }
  };

  const downloadCSV = (data: CountryData[]) => {
    const headers = [
      "Country",
      "Type",
      "Governance Score",
      "Governance Progress",
      "Governance Gaps",
      "Literature Link",
      "Latitude",
      "Longitude"
    ];

    const csvContent = [
      headers.join(","),
      ...data.map(country => [
        `"${country.name}"`,
        `"${country.type}"`,
        country.governance_score,
        country.governance_progress,
        `"${country.governance_gaps.join("; ")}"`,
        `"${country.literature_link}"`,
        country.lat,
        country.lng
      ].join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `governance-data-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadJSON = (data: CountryData[]) => {
    const exportData = {
      metadata: {
        exported_at: new Date().toISOString(),
        total_countries: data.length,
        data_scope: dataScope,
        version: "1.0"
      },
      countries: data
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `governance-data-${new Date().toISOString().split('T')[0]}.json`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const generatePDFReport = (data: CountryData[]) => {
    // In a real app, this would generate a proper PDF report
    // For now, we'll create a simple HTML report and print
    const reportHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Global AI Governance Report</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; }
          h1 { color: #1f2937; border-bottom: 2px solid #f59e0b; padding-bottom: 10px; }
          h2 { color: #374151; margin-top: 30px; }
          table { width: 100%; border-collapse: collapse; margin: 20px 0; }
          th, td { border: 1px solid #e5e7eb; padding: 8px; text-align: left; }
          th { background-color: #f9fafb; }
          .score-high { color: #16a34a; font-weight: bold; }
          .score-medium { color: #ca8a04; font-weight: bold; }
          .score-low { color: #dc2626; font-weight: bold; }
        </style>
      </head>
      <body>
        <h1>Global AI Compute Governance Report</h1>
        <p><strong>Generated:</strong> ${new Date().toLocaleDateString()}</p>
        <p><strong>Total Countries:</strong> ${data.length}</p>
        
        <h2>Executive Summary</h2>
        <p>This report provides an overview of AI governance readiness across ${data.length} countries, 
        analyzing governance scores, progress indicators, and key gaps in the global compute landscape.</p>
        
        <h2>Country Data</h2>
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Type</th>
              <th>Governance Score</th>
              <th>Progress</th>
              <th>Key Gaps</th>
            </tr>
          </thead>
          <tbody>
            ${data.map(country => `
              <tr>
                <td>${country.name}</td>
                <td>${country.type}</td>
                <td class="${country.governance_score >= 70 ? 'score-high' : country.governance_score >= 40 ? 'score-medium' : 'score-low'}">${country.governance_score}/100</td>
                <td>${country.governance_progress}%</td>
                <td>${country.governance_gaps.join(", ")}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </body>
      </html>
    `;

    const blob = new Blob([reportHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const printWindow = window.open(url, "_blank");
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print();
      };
    }
  };

  const handleExport = async () => {
    setIsExporting(true);
    const data = getExportData();

    try {
      switch (exportFormat) {
        case "csv":
          downloadCSV(data);
          break;
        case "json":
          downloadJSON(data);
          break;
        case "pdf":
          generatePDFReport(data);
          break;
      }
    } catch (error) {
      console.error("Export failed:", error);
    } finally {
      setIsExporting(false);
    }
  };

  const formatDescriptions = {
    csv: "Spreadsheet format, perfect for analysis in Excel or Google Sheets",
    json: "Structured data format, ideal for developers and data analysis",
    pdf: "Professional report format, ready for sharing and presentations"
  };

  const scopeDescriptions = {
    all: `All ${allCountries.length} countries in the dataset`,
    visible: `${visibleCountries.length} countries visible on map`,
    filtered: `${countries.length} countries matching filters`
  };

  return (
    <CollapsibleCard
      title="Export Data"
      className={`w-72 md:w-80 ${className}`}
      testId="card-data-export"
      defaultOpen={false}
    >
      <div className="space-y-4">
        {/* Export Format */}
        <div className="space-y-2">
          <label className="text-sm font-medium" data-testid="label-export-format">
            Export Format
          </label>
          <Select value={exportFormat} onValueChange={(value: ExportFormat) => setExportFormat(value)}>
            <SelectTrigger data-testid="select-export-format">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="csv" data-testid="option-csv">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  CSV File
                </div>
              </SelectItem>
              <SelectItem value="json" data-testid="option-json">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  JSON Data
                </div>
              </SelectItem>
              <SelectItem value="pdf" data-testid="option-pdf">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  PDF Report
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground" data-testid="text-format-description">
            {formatDescriptions[exportFormat]}
          </p>
        </div>

        <Separator />

        {/* Data Scope */}
        <div className="space-y-2">
          <label className="text-sm font-medium" data-testid="label-data-scope">
            Data Scope
          </label>
          <Select value={dataScope} onValueChange={(value: DataScope) => setDataScope(value)}>
            <SelectTrigger data-testid="select-data-scope">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all" data-testid="option-all">All Countries</SelectItem>
              <SelectItem value="visible" data-testid="option-visible">Visible Only</SelectItem>
              <SelectItem value="filtered" data-testid="option-filtered">Filtered Results</SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-muted-foreground" data-testid="text-scope-description">
            {scopeDescriptions[dataScope]}
          </p>
        </div>

        <Separator />

        {/* Export Stats */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Countries to export:</span>
            <Badge variant="secondary" data-testid="badge-export-count">
              {getExportData().length}
            </Badge>
          </div>
        </div>

        {/* Export Button */}
        <Button 
          onClick={handleExport}
          disabled={isExporting}
          className="w-full"
          data-testid="button-export"
        >
          {isExporting ? (
            <>
              <Download className="w-4 h-4 mr-2 animate-spin" />
              Exporting...
            </>
          ) : (
            <>
              <Download className="w-4 h-4 mr-2" />
              Export {exportFormat.toUpperCase()}
            </>
          )}
        </Button>
      </div>
    </CollapsibleCard>
  );
}