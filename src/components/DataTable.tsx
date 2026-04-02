interface Column<T> {
  key: keyof T; 
  label: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
}

export function DataTable<T>({ data, columns }: DataTableProps<T>) {
  return (
    <table style={{ 
      width: '100%', 
      borderCollapse: 'collapse', 
      marginTop: '20px',
      fontSize: '18px'
    }}>
      <thead>
        <tr style={{ backgroundColor: '#f4f4f4' }}>
          {columns.map((col) => (
            <th key={String(col.key)} style={{ padding: '12px', border: '1px solid #ddd' }}>
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((col) => (
              <td key={String(col.key)} style={{ padding: '12px', border: '1px solid #ddd', textAlign: 'center' }}>
                {String(item[col.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}