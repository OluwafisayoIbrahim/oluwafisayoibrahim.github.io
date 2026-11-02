import type { ResearchComparison } from "@/types/research";

export function ResearchResultsTable({ comparison }: { comparison: ResearchComparison }) {
  return <div className="research-comparison">
    <p>Values are mean ± population standard deviation across seeds 0, 1 and 2, calculated from pooled out-of-fold predictions. The spread is not a confidence interval; 0.000 means zero at the reported precision. MAE is mean absolute error, MAPE is mean absolute percentage error, and R² is the coefficient of determination.</p>
    {comparison.groups.map(group => <div key={group.title} className="research-comparison-group">
      <h3>{group.title}</h3>
      <p>{group.description}</p>
      <div className="research-table-scroll" role="region" aria-label={`${group.title} results; scroll horizontally on small screens`} tabIndex={0}>
        <table>
          <caption>{group.title} · saved S2 framework comparison</caption>
          <thead><tr><th scope="col">Model</th><th scope="col">MAE (W)</th><th scope="col">MAPE (%)</th><th scope="col">R²</th></tr></thead>
          <tbody>{group.rows.map(row => <tr key={row.model}><th scope="row">{row.model}</th><td>{row.mae}</td><td>{row.mape}</td><td>{row.r2}</td></tr>)}</tbody>
        </table>
      </div>
    </div>)}
    <p><a className="editorial-link" href={comparison.sourceHref}>Source: saved comparison and experiment notes ↗</a></p>
  </div>;
}
