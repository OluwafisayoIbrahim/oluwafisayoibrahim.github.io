import type { ResearchComparison } from "@/types/research";

export function ResearchResultsTable({ comparison }: { comparison: ResearchComparison }) {
  return <div className="research-comparison">
    <p>Values are mean ± population standard deviation across seeds 0, 1 and 2, calculated from pooled out-of-fold predictions. The spread is not a confidence interval; 0.000 means zero at the reported precision. RMSE is root mean squared error, MAE is mean absolute error, MAPE is mean absolute percentage error, and R² is the coefficient of determination.</p>
    {comparison.groups.map(group => <div key={group.title} className="research-comparison-group">
      <h3>{group.title}</h3>
      <p>{group.description}</p>
      <div className="research-table-scroll" role="region" aria-label={`${group.title} results; scroll horizontally on small screens`} tabIndex={0}>
        <table>
          <caption>{group.title} · <a href={comparison.csvHref}>completed S2 comparison</a> · 180 observations across 20 days</caption>
          <thead><tr><th scope="col">Model</th><th scope="col">RMSE (W)</th><th scope="col">MAE (W)</th><th scope="col">R²</th><th scope="col">MAPE (%)</th></tr></thead>
          <tbody>{group.rows.map(row => <tr key={row.model}><th scope="row">{row.model}</th><td>{row.rmse}</td><td>{row.mae}</td><td>{row.r2}</td><td>{row.mape}</td></tr>)}</tbody>
        </table>
      </div>
    </div>)}
    <p><a className="editorial-link" href={comparison.sourceHref}>Source: saved comparison and experiment notes ↗</a></p>
  </div>;
}
