

const TheadCandidates = ({ tableHeader }) => {
  return (

    <tr>
      {tableHeader.map((label) => (
        <th key={label} scope="col" className="px-6 py-3">
          {label}
        </th>
      ))}
  </tr>
  )
}

export default TheadCandidates